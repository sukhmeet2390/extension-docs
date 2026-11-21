<#
.SYNOPSIS
  Rebuild the local Search Console MCP server bundle and verify it starts fast enough for Copilot.

.DESCRIPTION
  See docs/search-console-mcp-bundle.md for why the bundle exists. Run this after updating the
  server source or its dependencies. It compiles the TypeScript source, bundles it into
  .tools\search-console-mcp-src-restored\bundle\server.min.mjs, and checks that the bundle
  answers an MCP handshake within the startup budget. It does not call Google or Bing APIs.

.PARAMETER Install
  Reinstall dependencies through the approved Azure Artifacts npm feed before building.

.PARAMETER SkipBuild
  Skip `npm run build` and only rebuild the bundle from the existing dist output.
#>
param(
  [switch]$Install,
  [switch]$SkipBuild
)

$ErrorActionPreference = 'Stop'
$repoRoot = Split-Path -Parent $PSScriptRoot
$serverDir = Join-Path $repoRoot '.tools\search-console-mcp-src-restored'
$bundlePath = Join-Path $serverDir 'bundle\server.min.mjs'
$startupBudgetSeconds = 30
$npmFeed = 'https://ms-feed-2.pkgs.visualstudio.com/1es-public/_packaging/npm-public/npm/registry/'

if (-not (Test-Path -LiteralPath (Join-Path $serverDir 'package.json'))) {
  throw "Server source not found at $serverDir. Restore it first (see docs/search-console-mcp-bundle.md)."
}

Push-Location $serverDir
try {
  if ($Install) {
    Write-Host 'Installing dependencies from the approved feed...'
    npm install --registry $npmFeed
    if ($LASTEXITCODE -ne 0) { throw 'npm install failed.' }
  }

  if (-not $SkipBuild) {
    Write-Host 'Compiling TypeScript (npm run build)...'
    npm run build
    if ($LASTEXITCODE -ne 0) { throw 'npm run build failed.' }
  }

  # Bundling zod or the MCP SDK causes a module initialization-order crash ("Class2 is not a
  # constructor"). Keyring, GA4/gRPC, and open load files by path, so they must stay external.
  $externals = @(
    '@napi-rs/keyring', '@google-analytics/data', 'google-gax', 'open',
    'zod', 'zod/*', '@modelcontextprotocol/sdk', '@modelcontextprotocol/sdk/*'
  ) | ForEach-Object { "--external:$_" }
  # Bundled CommonJS dependencies expect require/__filename/__dirname, which ESM output lacks.
  $banner = "import { createRequire as __bundleCreateRequire } from 'module'; " +
    "import { fileURLToPath as __bundleFileURLToPath } from 'url'; " +
    "import { dirname as __bundleDirname } from 'path'; " +
    "const require = __bundleCreateRequire(import.meta.url); " +
    "globalThis.__filename ??= __bundleFileURLToPath(import.meta.url); " +
    "globalThis.__dirname ??= __bundleDirname(globalThis.__filename);"

  Write-Host 'Bundling with esbuild...'
  & (Join-Path $serverDir 'node_modules\.bin\esbuild.cmd') 'dist/index.js' '--bundle' '--platform=node' `
    '--format=esm' '--target=node22' '--minify-whitespace' '--minify-syntax' '--legal-comments=none' `
    '--outfile=bundle/server.min.mjs' @externals "--banner:js=$banner" '--log-level=warning'
  if ($LASTEXITCODE -ne 0) { throw 'esbuild bundling failed.' }
}
finally {
  Pop-Location
}

Write-Host 'Verifying MCP startup...'
$probe = Join-Path ([IO.Path]::GetTempPath()) "mcp-startup-check-$PID.mjs"
@'
import { spawn } from 'child_process';
const [, , entry, cwd, budget] = process.argv;
const started = Date.now();
const child = spawn(process.execPath, [entry], { cwd, stdio: ['pipe', 'pipe', 'ignore'] });
let buffer = '';
const pending = new Map();
child.stdout.on('data', chunk => {
  buffer += chunk;
  let i;
  while ((i = buffer.indexOf('\n')) >= 0) {
    const line = buffer.slice(0, i);
    buffer = buffer.slice(i + 1);
    try { const msg = JSON.parse(line); pending.get(msg.id)?.(msg); } catch {}
  }
});
const request = (id, method, params, ms) => new Promise(resolve => {
  const timer = setTimeout(() => resolve(null), ms);
  pending.set(id, msg => { clearTimeout(timer); resolve(msg); });
  child.stdin.write(JSON.stringify({ jsonrpc: '2.0', id, method, params }) + '\n');
});
const init = await request(1, 'initialize', { protocolVersion: '2024-11-05', capabilities: {}, clientInfo: { name: 'rebuild-check', version: '1' } }, 120000);
const seconds = (Date.now() - started) / 1000;
if (!init?.result) { console.log('FAIL: no initialize response within 120s'); child.kill(); process.exit(1); }
child.stdin.write(JSON.stringify({ jsonrpc: '2.0', method: 'notifications/initialized' }) + '\n');
const tools = await request(2, 'tools/list', {}, 60000);
const count = tools?.result?.tools?.length ?? 0;
child.kill();
console.log(`Startup: ${seconds.toFixed(1)}s (budget ${budget}s, Copilot limit 60s); tools: ${count}`);
process.exit(seconds <= Number(budget) && count > 0 ? 0 : 1);
'@ | Set-Content -LiteralPath $probe -Encoding UTF8

try {
  node $probe $bundlePath $repoRoot $startupBudgetSeconds
  if ($LASTEXITCODE -ne 0) { throw 'Bundle verification failed. See docs/search-console-mcp-bundle.md#troubleshooting.' }
}
finally {
  Remove-Item -LiteralPath $probe -ErrorAction SilentlyContinue
}

Write-Host 'Bundle rebuilt and verified. Start a new Copilot session (or reload MCP servers) to use it.'

# Local GSC and Bing MCP Runbook

Last verified: 2026-09-28

## What failed

Direct package downloads were blocked by corporate TLS policy:

- `files.pythonhosted.org` failed with `TLS_ALERT_HANDSHAKE_FAILURE`.
- `registry.npmjs.org` failed with the same TLS handshake failure.
- GitHub and Google APIs remained reachable.

This was a package-source access problem, not a GSC or Bing API problem.

## Working solution

Use the approved Azure Artifacts public feeds for dependency installation:

```text
NPM:
https://ms-feed-2.pkgs.visualstudio.com/1es-public/_packaging/npm-public/npm/registry/

PyPI:
https://ms-feed-2.pkgs.visualstudio.com/1es-public/_packaging/pypi-public/pypi/simple/
```

The active MCP server is a repo-local build of `saurabhsharma2u/search-console-mcp`
v2.0.2, bundled into a single file:

```text
.tools\search-console-mcp-src-restored\bundle\server.min.mjs
```

`.mcp.json` points to the local Node executable and the bundled entry point. GSC and
Bing diagnostics passed, and `sc-domain:amrita-labs.com` plus
`https://amrita-labs.com/` were visible.

## Startup performance (bundle required)

Copilot fails MCP startup after 60 seconds ("MCP lifecycle negotiation did not
complete within 60000 ms"), and the timeout is not configurable. The unbundled
`dist\index.js` loads about 5,800 dependency files and took 20–23 seconds warm and
over 200 seconds when cold, so scheduled automations failed. The single-file bundle
starts in 12–16 seconds, including cold starts. Node's compile cache
(`NODE_COMPILE_CACHE`) was tested and did not help.

Rebuild the bundle after any `npm run build` or dependency change:

```powershell
cd <repo>\.tools\search-console-mcp-src-restored
$banner = "import { createRequire as __bundleCreateRequire } from 'module'; import { fileURLToPath as __bundleFileURLToPath } from 'url'; import { dirname as __bundleDirname } from 'path'; const require = __bundleCreateRequire(import.meta.url); globalThis.__filename ??= __bundleFileURLToPath(import.meta.url); globalThis.__dirname ??= __bundleDirname(globalThis.__filename);"
$externals = @('@napi-rs/keyring','@google-analytics/data','google-gax','open','zod','zod/*','@modelcontextprotocol/sdk','@modelcontextprotocol/sdk/*') | ForEach-Object { "--external:$_" }
& node_modules\.bin\esbuild.cmd dist/index.js --bundle --platform=node --format=esm --target=node22 --minify-whitespace --minify-syntax --legal-comments=none --outfile=bundle/server.min.mjs @externals "--banner:js=$banner"
```

Keep `zod` and `@modelcontextprotocol/sdk` external: bundling them causes a
module initialization-order crash (`Class2 is not a constructor`). Keep the native
keyring, GA4/gRPC, and `open` packages external because they load files by path.
Do not minify identifiers.

## Authentication arrangement

Normal use runs through the OAuth account `sukhmeet.work@gmail.com`.
The service-account credential remains available as a backup, but its MCP account
registration is disabled because loading both Google accounts caused this error:

```text
Multiple google accounts found. Please specify an account boundary or remove unused accounts.
```

The backup credential was not deleted. Re-enable it only for an isolated test or
if OAuth becomes unavailable. Keep only one active Google account registered for
normal MCP use.

`GOOGLE_APPLICATION_CREDENTIALS` was removed from the user environment so the
backup file is not auto-discovered during normal MCP startup. The credential file
itself remains preserved locally for future isolated testing.

## Reinstalling dependencies

Do not change global npm or Python configuration. Run feed overrides only for the
repo-local command:

```powershell
cd <repo>\.tools\search-console-mcp-src-restored
$feed = "https://ms-feed-2.pkgs.visualstudio.com/1es-public/_packaging/npm-public/npm/registry/"
npm install --registry $feed
npm run build
```

Then rebuild the bundle (see "Startup performance").

For the Amin Python server:

```powershell
cd <local-mcp-gsc-clone>
$env:UV_INDEX_URL = "https://ms-feed-2.pkgs.visualstudio.com/1es-public/_packaging/pypi-public/pypi/simple/"
uv sync
```

## Prevention

- Keep `.tools/`, `.mcp.json`, credentials, and tokens local and ignored.
- Do not run plain `npm install`, `npx`, `pip install`, or `uv sync` for this setup
  without the Azure feed override.
- Do not delete `node_modules` or `.tools\search-console-mcp-src-restored` unless planning a
  reinstall through Azure Artifacts.
- Do not run package update commands during normal on-demand MCP use.
- Restart Copilot after changing `.mcp.json`.
- Use official Google and Bing APIs only; do not use scraping or CAPTCHA automation.

Normal MCP queries do not download packages. Future failures are most likely only
after reinstall, cache deletion, dependency updates, or rebuilding without the
approved feed.

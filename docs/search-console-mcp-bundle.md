# Search Console MCP: single-file bundle

Last verified: 2026-11-20

This explains why the local Google Search Console + Bing Webmaster MCP server runs from a
single bundled file, how it runs today, and what to do when updating it. Installation,
package-feed, and authentication details remain in
[`local-mcp-runbook.md`](./local-mcp-runbook.md).

## Why we bundle

- Copilot stops waiting for an MCP server after **60 seconds** ("MCP lifecycle negotiation
  did not complete within 60000 ms"). The limit is not configurable in the MCP config.
- The unbundled server (`dist\index.js`) loads about 5,800 dependency files. Startup measured
  20–23 seconds normally and 209 seconds (once over 240 seconds) under load. On 2026-11-20 the
  weekly SEO automation failed for this reason.
- Node's compile cache (`NODE_COMPILE_CACHE`) was tested and did not help; the bottleneck is
  reading many small files, not compiling them.
- Bundling the same code into one file cut startup to **8–16 seconds**, including a cold first
  launch.

## What changed, and what did not

- **Nothing was removed.** The bundle contains the same pinned v2.0.2 server code and the same
  dependency versions. All 21 tools are still registered.
- The bundle lives at `.tools\search-console-mcp-src-restored\bundle\server.min.mjs`. It is
  built from `dist\index.js`, which is still compiled and remains a fallback.
- These packages stay **outside** the bundle and are still loaded from `node_modules`, so
  `node_modules` must remain installed:
  - `zod` and `@modelcontextprotocol/sdk` — bundling them crashes the server at startup
    (`Class2 is not a constructor`, a module initialization-order issue).
  - `@napi-rs/keyring`, `@google-analytics/data`, `google-gax`, and `open` — they load native
    binaries or data files by path.
- Whitespace and syntax are minified; identifiers are not, so code that depends on names is
  unaffected.

### Workspace MCP config

`.mcp.json` is Git-ignored and contains no credentials. If it is lost, recreate it as:

```json
{
  "mcpServers": {
    "search-console": {
      "type": "local",
      "command": "node",
      "args": [".tools\\search-console-mcp-src-restored\\bundle\\server.min.mjs"]
    }
  }
}
```

## Impact on SEO tracking

Every read-only tool was called through the bundle and the original build on 2026-11-20.
Results were identical in both, so the bundle changed nothing.

| Status | Tools | Used by |
|---|---|---|
| Working | `diagnostics`, `sites_list`, `analytics_query`, `analytics_compare`, `analytics_anomalies`, `seo_audit` (low CTR, striking distance), `site_health_check` (Google, Bing), `seo_keywords_research` (Bing daily traffic), `sitemaps_list`, `compare_engines`, `schema_validate` | Weekly SEO snapshot and ad hoc analysis |
| Existing limitation | `pagespeed_analyze` — free-tier daily rate limit without a PageSpeed API key | Monthly snapshot PageSpeed step |
| Existing limitation | `inspection_inspect` — Google rejects URL inspection for the domain property | Not used by the snapshot |
| Existing limitation | `indexing_status` — calls the Google Indexing API, which is not enabled | Not used by the snapshot |
| Not tested by design | `indexing_submit`, `sitemaps_submit`, `sitemaps_delete`, `sites_manage`, `accounts_manage` (they change data); `analytics_advanced` (GA4 not configured) | Not used |

All metrics in the weekly report — clicks, impressions, CTR, position, pages, queries,
opportunity audits, anomalies, crawl, and sitemap health — are unaffected.

## How it runs now

Nothing manual is required. Copilot starts the server from `.mcp.json` in each new session, and
the **SEO snapshot (weekly)** automation runs `/seo-snapshot` on Mondays at 9:00 (the computer
and Copilot app must be running). Reports are saved in [`seo-reports/`](./seo-reports/).

To confirm the server is healthy:

```powershell
.\scripts\rebuild-search-console-mcp.ps1 -SkipBuild
```

This re-bundles from the existing build and checks that startup finishes within 30 seconds.
It does not call Google or Bing.

## Future updates

The server is a pinned local copy; it never updates automatically.

1. Update the source in `.tools\search-console-mcp-src-restored` (for example,
   `git fetch --tags` and `git checkout <new-tag>`). Review the release notes first.
2. Rebuild and verify:

   ```powershell
   .\scripts\rebuild-search-console-mcp.ps1 -Install
   ```

   Use `-Install` whenever dependencies may have changed; it installs through the approved
   Azure Artifacts feed. Omit it if only source changed. Also rerun the script after a Node.js
   upgrade.
3. Start a new Copilot session and run `/seo-snapshot` (or **Run now** on the automation) to
   confirm live data.

Do not run `npx search-console-mcp`, its `update` command, or plain `npm install`: they bypass
the approved feed and the bundle. Ignore update notices printed by the server.

## Troubleshooting

- **"MCP lifecycle negotiation did not complete within 60000 ms"** — run the script with
  `-SkipBuild` and check the reported startup time. If it is over 30 seconds, the machine may be
  under heavy load; rerun the automation later.
- **Bundling or verification fails after an update** — check out the previous working tag and
  rerun the script. A new startup crash such as `X is not a constructor` usually means another
  package must be added to the externals list in `scripts/rebuild-search-console-mcp.ps1`.
- **Temporary fallback** — point `args` in `.mcp.json` to
  `.tools\search-console-mcp-src-restored\dist\index.js`. This works interactively but may exceed
  the 60-second limit, especially for scheduled runs.
- **Tools missing in a session** — check the server's status in Copilot's MCP settings, then
  start a new session after fixing the config.

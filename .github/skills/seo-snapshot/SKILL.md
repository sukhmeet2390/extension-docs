---
name: seo-snapshot
description: >-
  Produce a current, evidence-based Google Search Console and Bing Webmaster
  performance snapshot for amrita-labs.com and save it under docs/seo-reports/.
  Use when asked how the site is performing, for weekly/monthly search updates,
  or for current crawl, index, sitemap, or backlink status.
---

# SEO Snapshot

Produce a decision-oriented report from live Google Search Console and Bing
Webmaster data, then save it for later trend analysis. Never substitute
remembered figures, repository notes, or prior reports for fresh measurements.

## Modes

- **Weekly (default):** each engine's latest 7 returned days versus the previous
  7 days, plus Google opportunity audits.
- **Monthly:** use when the prompt says "monthly". Each engine's latest 28
  returned days versus the previous 28 days, plus PageSpeed on the top three
  Google landing pages by clicks.
- Honor explicit date ranges from the prompt instead of the mode defaults.

## Before querying

1. Read `AGENTS.md`, `BACKLOG.md`, `docs/content-strategy.md`, and
   `docs/local-mcp-runbook.md`; read `docs/session-context.md` when present.
   Use them for constraints, priorities, existing content, and active
   experiments, not as current performance evidence.
2. Read the most recent report in `docs/seo-reports/`, if any. Use it only to
   show what changed since the last report; live data remains the source of truth.
3. Discover the Search Console MCP tools actually available in this session.
   A local config file does not prove the tools loaded.
4. Run `diagnostics`. Report Google and Bing availability independently. If a
   tool, connection, or permission is missing, say so plainly; do not infer that
   engine's results.

## Collecting evidence

Use `sc-domain:amrita-labs.com` for Google and `https://amrita-labs.com/` for
Bing. Query each engine separately; `engine: "all"` with the Google property
fails for Bing.

### Google

- Query `analytics_query` with `dimensions: ["date"]` from ~21 days before the
  run date through the run date. The latest returned date defines the current
  window; the requested end date does not.
- Use `analytics_compare` (`period_over_period`) for the current and previous
  windows to get clicks, impressions, CTR, and position.
- Query `page` and `query` dimensions for the current window.
- Run `seo_audit` with `type: "low_ctr"` and `minImpressions: 50`, and with
  `type: "striking_distance"`. Both use a fixed 28-day window ending three days
  before the run; label them that way.
- Run `site_health_check` (`engine: "google"`) for issues, anomalies, and sitemaps.

### Bing

- Get daily site-level history with `seo_keywords_research` using
  `engine: "bing"`, `type: "traffic"`, `keywords: []`, and the Bing site URL.
  Rows use `/Date(milliseconds)/` UTC timestamps; convert them to UTC calendar
  dates. The latest returned row defines the current window.
- Bing does not return average position for site-level traffic; say so.
- Bing `analytics_query` query/page rows are historical weekly buckets that may
  ignore requested dates and lag the daily totals. Only use them if they cover
  the current window.
- Run `site_health_check` (`engine: "bing"`) for crawl issues and sitemaps.
  Report the date of any crawl statistics; never present stale crawl rows as
  current index coverage.

### Other checks

- Report backlinks only if a backlink tool is available; otherwise say it was
  not checked.
- Report PageSpeed/Core Web Vitals or website availability only if actually run.
- Use only read-only tools. Never call `indexing_submit`, `sitemaps_submit`,
  `sitemaps_delete`, `sites_manage`, or `accounts_manage`.

## Interpretation rules

- **Completeness:** neither engine provides a completeness flag here. Label the
  latest two returned days as subject to revision.
- **Significance:** call a change a trend only when both windows have at least
  20 clicks and the change is at least 20%. Otherwise label it directional.
  Impression changes under 10% are flat.
- **Anomalies:** if one day contributes more than 40% of a window's impressions,
  flag it as an anomaly and also report the window total excluding that day.
- **Verdict:** choose exactly one of `Up`, `Down`, `Flat`, or `Inconclusive`
  per engine using the significance rule.
- **Actions:** recommend at most two. Cross-check `BACKLOG.md`,
  `docs/content-strategy.md`, and existing `src/content/blog/` posts before
  suggesting content work; never suggest a duplicate post. Respect stabilization
  periods and planned experiments in those docs.
- Distinguish observations from explanations. Do not claim causation.

## Report

Write the report to `docs/seo-reports/YYYY-MM-DD-weekly.md` (or `-monthly.md`)
using the run date. If that file exists, replace it. Use this structure:

```markdown
# SEO Snapshot — <weekly|monthly> — YYYY-MM-DD

**Verdict:** Google <Up|Down|Flat|Inconclusive> · Bing <...> — <one sentence>

## Coverage
<diagnostics; exact current/previous windows per engine; freshness caveats>

## Performance
| Engine | Window | Clicks | Impressions | CTR | Avg. position | vs previous |
|---|---|---:|---:|---:|---:|---|

## Top Google pages
<top 5 by clicks with impressions, CTR, position>

## Opportunities (Google, 28 days ending <date>)
<up to 5 low-CTR pages/queries and up to 5 striking-distance queries; note any
existing page that already targets the query>

## Anomalies
<flagged days or "None">

## Active experiments
<status from repo docs, with current metrics when the target page has data>

## Health
<crawl/index, sitemaps, backlinks, and website checks; dated, with "not checked" where applicable>

## Since last report
<key changes versus the previous saved report, or "No previous report">

## Actions
<at most two, each tied to evidence>
```

After saving, return the report contents in the response.

## Boundaries

- The only file this skill may create or modify is the current report under
  `docs/seo-reports/`. Do not edit `BACKLOG.md`, `docs/content-strategy.md`,
  site content, generated files, or MCP configuration.
- Do not commit or push. Do not publish, submit URLs/sitemaps, request indexing,
  contact directories, or initiate outreach.
- Reports are tracked in Git: never include account emails, personal identity,
  location, employment, credentials, tokens, or local secret paths. Refer to
  connections as "Google" and "Bing" only.
- If live data cannot be retrieved, do not overwrite an existing same-day report
  that contains live data. Otherwise, save a report stating the limitation and
  omit historical numbers rather than presenting them as current. In either case,
  state the failure in the response.

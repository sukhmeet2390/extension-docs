---
name: seo-snapshot
description: >-
  Produce a current, evidence-based Google Search Console and Bing Webmaster
  performance snapshot for amrita-labs.com and save it under docs/seo-reports/.
  Use when asked how the site is performing, for weekly/monthly search updates,
  for current crawl, index, sitemap, or backlink status, or for content signals
  (trending queries, content gaps, refresh candidates) for distribution.
---

# SEO Snapshot

Produce a decision-oriented report from live Google Search Console and Bing
Webmaster data, then save it for later trend analysis. Never substitute
remembered figures, repository notes, or prior reports for fresh measurements.

## Modes

- **Weekly (default):** each engine's latest 7 returned days versus the previous
  7 days, plus Google opportunity audits and content signals.
- **Monthly:** use when the prompt says "monthly". Each engine's latest 28
  returned days versus the previous 28 days, plus PageSpeed on the top three
  Google landing pages by clicks. Without a PageSpeed API key, `pagespeed_analyze`
  can hit a free-tier rate limit; report PageSpeed as not checked if it fails.
- Honor explicit date ranges from the prompt instead of the mode defaults.

## Before querying

1. Read `AGENTS.md`, `BACKLOG.md`, `docs/content-strategy.md`, and
   `docs/local-mcp-runbook.md`; read `docs/session-context.md` when present.
   Use them for constraints, priorities, existing content, and active
   experiments, not as current performance evidence.
2. Read the most recent report in `docs/seo-reports/`, if any. Use it only to
   show what changed since the last report, and its *Query table* only as the
   fallback trending baseline described under *Content signals*; live data
   remains the source of truth.
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
- For **Content signals**, also query `analytics_query` with `rowLimit: 1000`:
  `query` for the previous window; `query` + `page` for the current window;
  and `page` for the current and previous windows. Query the 28 days ending on
  the latest returned Google date (the *signals window*) with `query` + `page`
  and with `page`. In monthly mode, the current window is already 28 days, so
  reuse it.

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

## Content signals

Tells the distribution session what to write, refresh, or leave. Google only:
Bing query/page rows are lagging weekly buckets. Use only the live queries
listed under *Collecting evidence*. A *blog post* is a URL matching
`/blog/<slug>/`; every other URL (home, product, catalog, legal, comparison) is
not a blog post. Number rows with stable IDs (`T1`, `G1`, `R1`, `A1`) so
suggestions can cite them. Write `None` in a table's first row when no row
qualifies.

1. **Trending queries** (current vs previous window, `query` rows):
   - `new`: absent from the previous window, ≥ 5 impressions now.
   - `rising`: in both windows, impressions up by ≥ 10 and ≥ 50%.
   - `falling`: impressions down by ≥ 10 and ≥ 50%, including queries absent now.
   - Top 5 per signal: `new` by current impressions, the others by absolute
     change. *Top page* is the page with the most current-window impressions for
     the query.
   - Baseline: the live previous window. If Google returns no previous-window
     query rows, compare with the previous report's *Query table* only when its
     window is exactly the previous window, and label it as the baseline.
     That table omits queries under 3 impressions and beyond 100 rows, so a
     query missing from it is unknown, not zero: classify only queries it
     lists as `rising` or `falling`, and report no `new` queries from it.
     Otherwise write `Not available` and say why.
2. **Content gaps** (signals window, `query` + `page` rows): a query's ranking
   page is the page with the most impressions for it (better position breaks
   ties). List queries whose ranking-page row has ≥ 20 impressions and position
   8–20 when that page is not a blog post. Group them by ranking page into one
   row per cluster. Search `src/content/blog/` and record any post that already
   targets the cluster. If a dedicated post exists, write
   `existing: <slug> (not ranking)`, not a new article.
3. **Refresh candidates** (blog posts only, `page` rows), when either holds:
   - signals-window impressions ≥ 50 and CTR below the benchmark for its
     rounded position: 1: 30%, 2: 15%, 3: 10%, 4: 6%, 5: 4%, 6: 3%, 7: 2%,
     8: 1.5%, 9–10 and beyond: 1% (the `seo_audit` table);
   - position worsened by ≥ 3 from the previous to the current window, with
     ≥ 10 impressions in both.
   - *Last edited* is the latest commit date of `src/content/blog/<slug>.md`.
     *Suggested fix*: `leave (edited ≤ 14 days ago)` when edited within 14 days
     of the run date, or the post is in an active experiment; otherwise
     `refresh content` for a position drop or a position above 10, else
     `refresh title/meta`.
4. **Per-article queries** (signals window): every blog post with impressions,
   sorted by impressions, with its top 3 queries by impressions. Write
   `— (no query rows returned)` when Google returns none (anonymized queries).
5. **Suggested for distribution:** at most 3 items, each tied to one or more
   row IDs above. Allowed verbs: `write` (a gap with no existing post),
   `refresh` (a refresh candidate not marked `leave`), and `leave` (a rising or
   recently edited post that should not be touched yet; say when to re-check).
   Respect the cadence in `docs/content-strategy.md`, `BACKLOG.md`, and active
   experiments: when a slot is used up, keep the item and give the month it can
   run. Write `None` if no row supports a suggestion.
6. **Query table:** every current-window query with ≥ 3 impressions, sorted by
   impressions (maximum 100 rows), so the next run can diff it.

Note how much of the current window's impressions the query rows cover; Google
omits anonymized queries, so `new` or `falling` may reflect a query crossing
that threshold. If any input is unavailable, keep the subsection and state the
limitation in it. Never reuse an older report's numbers as current.

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

## Content signals (Google)
Windows: trending = <current> vs <previous>; gaps, refresh, per-article = 28 days <start> → <end>. Query rows cover <n> of <total> current-window impressions (Google omits anonymized queries).

### Trending queries
| ID | Signal | Query | Impr. prev → cur | Δ | Position (cur) | Top page (cur) |
|---|---|---|---:|---:|---:|---|

### Content gaps
| ID | Query cluster | Ranking page | Impr. (28d) | Best position | Existing blog post | Candidate article |
|---|---|---|---:|---:|---|---|

### Refresh candidates
| ID | Post | Impr. (28d) | CTR (28d) | Benchmark CTR | Position (28d) | Position prev → cur | Last edited | Trigger | Suggested fix |
|---|---|---:|---:|---:|---:|---|---|---|---|

### Per-article queries
| ID | Post | Impr. (28d) | Clicks | Position | Top queries (impr., position) |
|---|---|---:|---:|---:|---|

### Suggested for distribution
1. **<write|refresh|leave>** · <target URL or query cluster> · <one-line reason> · Evidence: <row IDs>

### Query table (Google, <current window>)
| Query | Clicks | Impressions | CTR | Position |
|---|---:|---:|---:|---:|

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

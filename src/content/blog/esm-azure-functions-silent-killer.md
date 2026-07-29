---
title: "Azure Functions ESM Imports: The Silent Bug That Deploys Fine and Registers 0 Endpoints"
description: "If your Azure Functions v4 deploy succeeds but no endpoints show up, a missing .js extension in an ESM import can crash cold start without obvious deploy errors."
date: "2026-07-28"
tags: ["azure", "node", "typescript", "serverless"]
image: "/assets/blog/obscuro.png"
---

I had one of those deploys that makes you question your own eyesight. `func azure functionapp publish` said everything was fine. Azure Portal showed a healthy Function App. My local tests passed. The build passed. Then I ran `az functionapp function list` and got... nothing.

Not broken endpoints. Not one broken endpoint. Zero endpoints registered.

I lost about four hours to this before the fix turned out to be one boring, insulting detail: I was missing `.js` on a relative import.

## The setup looked healthy

This was the stack:

- Azure Functions v4
- Node.js 22
- TypeScript
- `"type": "module"` in `package.json`
- Clean local runs

Which is exactly why this bug is so annoying. Everything around the app looks healthy. Azure uploads the code just fine. The runtime is what falls over.

## The actual ESM import problem in Azure Functions

In Node ESM, relative imports need file extensions. Every time. TypeScript does not magically exempt you from that.

```typescript
// ❌ Looks fine in dev, fails in production Node ESM
import { logLlmCall } from "../telemetry";

// ✅ What the runtime actually needs
import { logLlmCall } from "../telemetry.js";
```

That mismatch was the whole issue.

TypeScript compiled happily. Vitest ran happily. My editor did not complain. But once Azure tried to load the compiled JavaScript, Node followed ESM rules strictly, hit `ERR_MODULE_NOT_FOUND`, and the Functions host never finished registering the app.

## Why Azure Functions feels silent when this breaks

This is the part that made the whole thing feel cursed.

The deploy command can still succeed because the package upload is fine. The Function App can still start. The failure happens during cold start, when the runtime walks your module graph. If one import is wrong, the app crashes before Azure registers any functions.

So from the outside, it looks like a successful deployment with a mysteriously empty Function App. The real error usually lives in Application Insights, not in the publish output.

## How I finally diagnosed it

The first useful command was this:

```bash
az functionapp function list --name your-func-app --resource-group your-rg
```

If that returns an empty array right after a "successful" deploy, I would assume cold-start failure until proven otherwise.

From there, Application Insights told the truth. In **Traces**, filtering for `ERR_MODULE_NOT_FOUND` made the problem obvious.

## The fix was annoyingly simple

I went through every relative import in my TypeScript source and added `.js`:

```typescript
import { coherenceScore } from "./scoring.js";
import { logLlmCall } from "../telemetry.js";
import { CACHE_TTL } from "../../shared/constants.js";
```

Yes, importing `.js` from a `.ts` file feels wrong the first time you do it.

Yes, it is still the right thing to do for Node ESM.

After that, the exact same deployment registered endpoints normally.

## What I would check before every Azure Functions ESM deploy now

If I were doing this from scratch again, I would add a quick pre-deploy check for imports missing `.js` in the built output:

```bash
grep -rn "from \"\.\." dist/ | grep -v "\.js\"" | grep -v "node_modules"
```

If that returns anything, I would stop there and fix it before touching Azure.

## Two other Azure Functions + ESM gotchas I hit

While I was in this rabbit hole, two more sharp edges showed up:

1. **`func azure functionapp publish` needs `FUNCTIONS_WORKER_RUNTIME`** either in `local.settings.json` or via the `--javascript` flag. Without it, you get "Can't determine project language."
2. **The npm-installed `func` CLI can break on newer Node versions**. On Node 26+, I had better luck with `winget install Microsoft.Azure.FunctionsCoreTools`.

If you are deploying a Chrome extension backend or any small Node service to Azure Functions, this is worth checking early. When ESM imports are wrong, Azure does not always scream. Sometimes it just smiles, deploys, and gives you an app with no functions.

---

*Written by the team at Amrita Labs. We build Chrome extensions powered by serverless backends on Azure.*

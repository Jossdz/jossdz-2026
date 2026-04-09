# CLAUDE.md

## Toolchain: Vite+ (`vp`)

Wraps Vite, Rolldown, Vitest, Oxlint, Oxfmt, tsdown. All ops go through `vp`. **No `pnpm`/`npm`/`npx` direct.**

## Commands

```bash
vp install          # install deps (after pull)
vp dev              # Astro dev server
vp build            # tsc + astro build
vp preview          # preview prod build
vp check            # fmt + lint + tsc
vp fmt              # Oxfmt formatter
vp lint             # Oxlint (type-aware, per vite.config.ts)
vp add <pkg>        # add dep
vp dlx <bin>        # one-off binary (replaces npx)
```

Pre-commit: `vp check --fix` on staged files (configured in `vite.config.ts`).

## Imports

Use `vite-plus`, not `vite`/`vitest`:

```ts
import { defineConfig } from "vite-plus";
import { expect, test, vi } from "vite-plus/test";
```

## Architecture

- **Framework**: Astro 6 + React 19 (`@astrojs/react`) for interactive islands.
- **Pages**: `src/pages/` — file-based routing. `.astro` = frontmatter (server-only) + HTML template.
- **Site URL**: `https://example.com` in `astro.config.mjs` — update before deploy.
- **TS**: strict — `noUnusedLocals`, `noUnusedParameters`, `erasableSyntaxOnly`. JSX = `react-jsx`.

## Before Submit

Pull → `vp install` → `vp check` → `vp build` → `vp test`.

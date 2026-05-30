# Alpine Routes

Marketing site for **Alpine Routes** — European road freight from Vienna. Single-page layout with hero, coverage map, services, stats, and a quote request form.

## Stack

- [Vite](https://vite.dev) + [TanStack Start](https://tanstack.com/start) + React 19
- Tailwind CSS 4 (`@tailwindcss/vite`)
- shadcn/ui components (Radix)

## Requirements

- Node.js 20+
- npm (or [Bun](https://bun.sh) — `bun.lock` is included)

## Setup

```bash
npm install
npm run dev
```

Open **http://localhost:5173**

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server |
| `npm run build` | Production build (`dist/client`, `dist/server`) |
| `npm run build:pages` | Static build for GitHub Pages (`GITHUB_PAGES=true`) |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm run format` | Format with Prettier |

## Project layout

```
src/
  routes/          # Pages (__root, index)
  components/site/ # QuoteForm, EuropeMap, Counter
  components/ui/   # shadcn primitives
  lib/             # Utils, SSR error helpers
styles.css         # Theme & Tailwind
```

## Notes

- Quote form submissions are mocked client-side (toast only; no backend).
- Production output: `dist/client` (static) and `dist/server` (SSR handler).

## GitHub Pages

The repo includes [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml). On push to `main`, GitHub Actions builds a prerendered static site and deploys `dist/client`.

**One-time GitHub setup:**

1. Repo → **Settings** → **Pages**
2. **Build and deployment** → Source: **GitHub Actions**
3. Push to `main` (or run the workflow manually under **Actions**)

Live URL: **https://cheliojul.github.io/Alpine-Routes/**

Local Pages preview:

```bash
npm run build:pages
npx serve dist/client
```

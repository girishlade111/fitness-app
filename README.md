# Fitness App

A fitness tracking dashboard built with Next.js 15, TypeScript, Tailwind CSS, and chart libraries — with a workout dashboard, exercise library, progress charts, and AI-style workout recommendations.

## What it does

- **Dashboard** — stat cards (workouts, calories, streak, active minutes), workout progress charts, and recent workout history.
- **Exercise library** (`/exercises`) — browsable list of exercises.
- **AI Recommendations** — smart workout suggestion cards (mock data, no live AI backend).
- **Theming** — dark/light mode via `next-themes`, responsive sidebar layout.
- **Charts** — progress visualization with Recharts and chart.js.

> Note: all workout/exercise data is mock data in the components — there is no backend, database, or authentication. This is a UI/UX reference implementation generated with v0.

## Tech stack

- **Framework:** Next.js 15 (App Router), React 19, TypeScript
- **Styling:** Tailwind CSS 3.4, shadcn/ui + Radix UI primitives
- **Charts:** Recharts 2.15, chart.js, react-chartjs-2
- **Misc:** lucide-react icons, date-fns, react-day-picker, sonner toasts, embla-carousel, cmdk

## Quick start

Prerequisites: Node.js 18+ and npm (or pnpm/yarn).

```bash
npm install
npm run dev
```

Open http://localhost:3000.

Production build (static export — this app has no API routes or server actions):

```bash
npm run build   # outputs to ./out
```

Serve `./out` with any static file server, or deploy to GitHub Pages / any static host.

## Project structure

```
app/
  page.tsx                    # fitness dashboard
  exercises/page.tsx          # exercise library
  components/                 # DashboardStats, WorkoutProgress, RecentWorkouts, AIRecommendations, Sidebar, Header
  layout.tsx                  # root layout (theme provider, sidebar)
components/theme-provider.tsx # next-themes wrapper
lib/utils.ts                  # classnames helper
public/                       # placeholder images/assets
```

## Environment variables

None required.

## Deployment

Fully static — ships with `output: 'export'` in `next.config.mjs` and deploys to GitHub Pages as a project site. `basePath: '/fitness-app'` is set so assets resolve under the `https://girishlade111.github.io/fitness-app/` subpath. To deploy at a domain root (e.g. Vercel), remove the `basePath` line from `next.config.mjs` before building.

---

Built by Girish Lade — https://ladestack.in

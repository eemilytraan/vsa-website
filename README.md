# Princeton VSA Website (Vite + React)

Local development requirements and commands for this project.

## Prerequisites
- Node.js 20.19+ (or 22.12+). Use `nvm` with the included `.nvmrc`.

```sh
nvm use        # switches to Node 20.19.0
npm ci         # install deps
npm run dev    # start Vite dev server
```

If you see an error from Vite like “Vite requires Node.js version 20.19+ or 22.12+”, upgrade Node:

```sh
nvm install 20.19.0
nvm use 20.19.0
```

## Scripts
- `npm run dev` – start dev server
- `npm run build` – production build
- `npm run preview` – preview the production build
- `npm run lint` – ESLint
- `npm run format` – Prettier write

## Notes
- SPA routing is handled by React Router. A fallback `*` route shows a simple 404 page.
- CI runs on Node 20 and builds with Vite.

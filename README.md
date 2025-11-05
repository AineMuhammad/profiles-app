# Profiles App (Lab 1)

- Node.js dev container (image: `mcr.microsoft.com/devcontainers/javascript-node:1-22-bookworm`)

This app provides a way to list down all the profiles and is built using react and bootstrap

## Getting Started
npm install
npm run dev
# open the shown URL (e.g., http://localhost:5173)

## Build

\ ```bash
npm run build
\ ```

## Deploy (GitHub Pages via Actions)
- Ensure `base: '/profiles-app/'` in `vite.config.js`
- Push to `main`; the CI workflow will build and deploy automatically.
- Settings → Pages → Source: **GitHub Actions**

**Live URL:** https://ainemuhammad.github.io/profiles-app/

## Notes
- Uses React + React-Bootstrap.
- We use components, props, and `.map()
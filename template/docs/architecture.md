# Architecture

This project follows Nuxt 4 conventions and keeps application code inside `app/`.

## Application Layers

- `app/pages/` defines routes and page-level orchestration.
- `app/layouts/` defines shared page shells.
- `app/components/` contains Vue components.
- `app/composables/` contains reusable client-safe logic.
- `app/stores/` contains shared application state when Pinia or another store is justified.
- `app/utils/` contains pure helpers.
- `server/api/` contains server routes and server-only logic.
- `design/` contains UI principles, design tokens, typography, accessibility and wireframes.
- `docs/component-rules.md` defines token-based component constraints.

## Design Direction

Start from product documents, then define flows, screens, UI states and data requirements. The component model should come after screen states are known.

Use `design/design-tokens.md` and `app/assets/css/tokens.css` for shared visual values. Add new tokens before adding new visual values to components.

## Data Boundary

Client code may call public server routes. Server-only secrets, privileged external API calls and persistence logic belong in `server/`.

## Decisions

Significant decisions belong in `docs/decisions/` as ADRs. Add an ADR before introducing large dependencies, new state-management patterns or broad architecture changes.

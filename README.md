# AI Nuxt Project Template

Reusable Copier template for AI-first frontend projects built with Nuxt 4, Vue 3, TypeScript, pnpm, ESLint, Vitest and optional Playwright, Pinia and Tailwind CSS.

The generated project is intentionally small. It gives AI coding agents enough product, design, architecture and task structure to build in vertical slices without inventing process from scratch.

## Requirements

- Python with Copier installed
- Node.js compatible with the current Nuxt release
- pnpm, npm or yarn

Install Copier if needed:

```bash
python -m pip install copier
```

## Generate A Project

```bash
copier copy . my-project
cd my-project
pnpm install
pnpm dev
```

Copier asks for:

- `project_name`
- `project_slug`
- `project_description`
- `package_manager`
- `use_tailwind`
- `use_pinia`
- `use_playwright`
- `author_name`

## Template Contents

The template creates a Nuxt 4 app using the `app/` directory structure, server API routes, strict TypeScript support, Nuxt-aware ESLint, Vitest unit tests and optional Playwright E2E tests.

It also creates an AI-first planning system:

Vision -> Personas -> User flows -> Screens -> UI states -> Component model -> API contracts -> Tasks -> Implementation -> Tests -> ADRs

## Development Workflow

Use the product and design documents before editing code. Define user flows and screen states first, then create small implementation tasks that deliver one vertical slice at a time.

Large technical decisions, new state-management patterns and significant dependencies should be recorded as ADRs in `docs/decisions/`.

## Validate Template Changes

After changing template files, render and test a fresh project:

```bash
copier copy . ../tmp-generated-frontend --defaults --overwrite
cd ../tmp-generated-frontend
pnpm install
pnpm lint
pnpm typecheck
pnpm test
pnpm build
pnpm exec playwright install chromium
pnpm test:e2e
```

Also render optional branches when changing Jinja conditionals:

```bash
copier copy . /tmp/nuxt-template-flags-on --defaults --overwrite -d use_tailwind=true -d use_pinia=true -d use_playwright=true
copier copy . /tmp/nuxt-template-flags-off --defaults --overwrite -d use_tailwind=false -d use_pinia=false -d use_playwright=false
```

## Versioning

Template changes are tracked in `CHANGELOG.md`. Generated projects also include their own `CHANGELOG.md` for product and application changes.

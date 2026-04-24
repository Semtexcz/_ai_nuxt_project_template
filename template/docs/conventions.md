# Conventions

## Language

- Code comments, UI labels, component names and developer-facing names must be in English.
- Product planning documents may be in Czech or English.

## Vue

- Use `<script setup lang="ts">`.
- Keep props and emits typed.
- Keep components small and focused.
- Prefer computed values over duplicated state.
- Use design tokens for component styling.
- Do not hardcode colors, spacing, radius or shadow values in components.

## Nuxt

- Use the Nuxt 4 `app/` directory structure.
- Put server-only code in `server/`.
- Use file-based routing in `app/pages/`.
- Prefer Nuxt auto-imports where they improve readability.

## Tasks

- Read product context before implementation.
- Implement vertical slices.
- Update `project/TASK_SEQUENCE.md` when backlog order changes.
- Add tests when practical.

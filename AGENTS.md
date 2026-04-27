# AI Agent Rules For This Template Repository

This repository is a Copier template, not a generated Nuxt app. Keep template files internally consistent and verify that rendered projects can run after `copier copy`, package installation and `dev`.

## Language

- Code comments, UI labels, component names and developer-facing names must be in English.
- Planning documents in generated projects may be in Czech or English.
- Template documentation should be clear enough for AI coding agents to follow without extra context.

## Template Safety

- Keep Jinja conditionals simple and readable.
- Do not add dependencies unless the generated package scripts use them.
- Keep optional features fully conditional, including config, dependencies and docs.
- Prefer current Nuxt 4 conventions, including the `app/` directory structure.
- Keep `CHANGELOG.md` updated for notable template changes.

## Generated Project Workflow

Generated projects should guide agents through:

Vision -> Personas -> PRDs for large changes -> Features -> User flows -> Screens and UI states -> Relevant design and technical docs -> Tasks -> Implementation -> Tests -> ADRs

Generated projects should use `docs/workflow.md` as the source of truth for the full product-to-implementation workflow.

Every starter document should have meaningful content. Do not leave empty markdown files.

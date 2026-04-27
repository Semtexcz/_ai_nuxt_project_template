# Changelog

All notable changes to this Copier template are documented here.

The format follows Keep a Changelog, and this project uses semantic versioning once releases are tagged.

## [Unreleased]

Every notable template change after `0.1.0` must be documented here before release.

### Added

- Add generated `docs/workflow.md` as the source of truth for product-to-implementation workflow guidance.

### Changed

- Align generated vision, README, task sequence and task template docs with PRD, feature, relevant docs and ADR workflow artifacts.

## [0.1.0] - 2026-04-24

### Changed

- Refactor starter Vue components to consume design tokens for all visual values.
- Keep generated `test` and `check` scripts focused on unit validation; Playwright E2E tests run through `test:e2e`.
- Move Nuxt type checking out of production builds and into the explicit `typecheck` script.
- Always include a small global stylesheet so generated projects do not contain an empty CSS file when Tailwind is disabled.

### Added

- Minimal design system layer with UI principles, design tokens, typography, accessibility and component rules.
- CSS token variables and optional Tailwind theme mapping.
- Initial AI-first Nuxt 4 / Vue 3 Copier template.
- Generated project structure for product, design, documentation and project planning.
- Nuxt 4 app scaffold with TypeScript, ESLint, Vitest and optional Playwright, Pinia and Tailwind CSS.
- AI coding agent rules in `AGENTS.md`.
- Starter markdown templates for PRDs, features, screens, user flows, tasks and ADRs.
- Persona starter template and explicit generated Definition of Done.
- Minimal component test covering the starter button behavior.

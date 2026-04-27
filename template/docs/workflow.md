# Workflow

Use this workflow to keep product intent, implementation tasks and technical decisions aligned. Not every step creates a new document for every change; use the smallest set of artifacts that makes the work clear and reviewable.

## Standard Sequence

1. Start with `product/vision.md` to understand the product direction, primary outcomes and non-goals.
2. Define or update personas in `product/personas/` when the work changes who the product serves.
3. Create a PRD in `product/prds/` for large product changes that need explicit goals, non-goals, requirements and open questions.
4. Describe the feature in `product/features/` when the work introduces or changes a coherent user capability.
5. Define user flows in `product/user-flows/` before designing screens or components.
6. Specify screens and UI states in `product/screens/`, including loading, empty, ready and error behavior.
7. Check relevant design guidance in `design/` before choosing layout, typography, tokens or accessibility behavior.
8. Update `docs/component-model.md` after screen states are known and component boundaries are justified.
9. Define or update API expectations in `docs/api-contracts.md` before implementing screens that depend on server data.
10. Check relevant technical docs in `docs/`, especially `architecture.md`, `state-management.md`, `testing-strategy.md`, `component-rules.md` and `conventions.md`.
11. Break the work into small vertical tasks in `project/backlog/` and keep `project/TASK_SEQUENCE.md` current.
12. Implement one vertical slice at a time.
13. Add or update tests according to `docs/testing-strategy.md`.
14. Add ADRs in `docs/decisions/` whenever a significant product or technical decision appears.
15. Update `CHANGELOG.md` for user-visible changes, notable technical changes and release preparation.

## Artifact Guidance

- `product/vision.md` is the stable product direction, not the full implementation plan.
- `product/prds/` is for large changes that need stronger product alignment before implementation.
- `product/features/` is for scoped capabilities that can be implemented in vertical slices.
- `product/user-flows/` and `product/screens/` should exist before component extraction or API work begins.
- `docs/` contains reusable project rules and decision context. Read the relevant documents for the change instead of treating every document as mandatory.
- `project/TASK_SEQUENCE.md` is the current execution order. Update it when backlog priority changes.
- `docs/decisions/` records decisions when the reason matters beyond the current task.

## Before Implementation

Each implementation task should identify:

- The product context: vision, PRD when needed, feature, user flow and screen spec.
- The UI states that must be handled.
- The data boundary: local state, composables, stores, server routes and API contracts.
- The design constraints: tokens, typography, accessibility and component rules.
- The test plan: unit, component, E2E and manual checks where relevant.

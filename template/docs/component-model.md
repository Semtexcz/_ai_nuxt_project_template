# Component Model

The component model should reflect user flows and screen states, not an abstract design-system inventory.

## Component Categories

- Page components coordinate route-level data, permissions and screen state.
- Screen sections group related content and actions for one state or workflow step.
- Reusable UI components provide small, typed, accessible primitives.
- Composables hold reusable behavior that is not purely presentational.

## Extraction Rules

Extract a component when:

- The same UI appears in multiple places.
- A screen becomes difficult to read.
- A component has a clear accessibility contract.
- Reuse reduces meaningful maintenance cost.

Do not extract a component only because a block of markup is long. First confirm the screen state and data contract are clear.

## Naming

Use English names. Component names should describe the role they play in the product, not their visual styling alone.

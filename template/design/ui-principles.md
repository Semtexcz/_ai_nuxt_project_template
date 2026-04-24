# UI Principles

Use these principles to keep interfaces consistent while product flows are still evolving.

## Function Over Decoration

Every visual choice should help users understand state or complete an action.

- Use a simple primary button for the main action instead of decorative variants.
- Add visual treatment to errors, loading states and confirmations before adding decorative imagery.

## Consistency Over Creativity

Reuse established patterns before inventing a new one.

- Use the same spacing between form fields on every screen.
- Use the same button style for equivalent actions across pages.

## Minimal Cognitive Load

Show only the information needed for the current step.

- Keep secondary actions visually quieter than the primary action.
- Split long flows into clear screen states instead of dense all-in-one panels.

## Clear Hierarchy

The page purpose, current state and next action should be obvious at a glance.

- Use one page-level heading and one primary action per screen state.
- Use muted text for helper copy and primary text for decisions or results.

## Explicit UI States

Non-trivial UI must define loading, empty, error and success states before implementation.

- Show a loading label or spinner while an action is pending.
- Empty and error states must include the next useful action when recovery is possible.

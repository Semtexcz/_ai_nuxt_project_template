# Accessibility

Accessibility is part of screen design, not a final pass.

## Baseline Requirements

- Use semantic HTML before custom ARIA.
- Make every interactive element keyboard reachable.
- Provide visible focus states.
- Associate form labels and errors with controls.
- Do not rely on color alone to communicate state.
- Keep text contrast readable in all states.
- Preserve logical heading order.

## Screen State Requirements

- Loading states should announce progress when the wait is meaningful.
- Empty states should describe what happened and provide a next action when possible.
- Error states should explain the problem and the recovery path.
- Disabled controls should not hide the reason an action is unavailable.

## Testing

Use automated tests for critical flows and manual keyboard checks for new screens. For each screen, verify tab order, focus visibility, accessible names and error messaging.

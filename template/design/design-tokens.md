# Design Tokens

Design tokens are the only source for shared visual values. Components should reference token names or CSS variables, not raw colors or spacing.

## Colors

- `color.primary`: `#F11E1E`
- `color.black`: `#000000`
- `color.white`: `#FFFFFF`
- `color.transparent`: `transparent`
- `color.gray.50`: `#F8F8F8`
- `color.gray.100`: `#EDEDED`
- `color.gray.300`: `#C7C7C7`
- `color.gray.600`: `#5F5F5F`
- `color.gray.900`: `#1A1A1A`

## Spacing

- `spacing.none`: `0`
- `spacing.xs`: `4px`
- `spacing.sm`: `8px`
- `spacing.md`: `16px`
- `spacing.lg`: `24px`
- `spacing.xl`: `32px`

## Border Radius

- `radius.sm`: `4px`
- `radius.md`: `6px`
- `radius.lg`: `8px`

## Borders

- `border.width.sm`: `1px`
- `border.width.md`: `2px`

## Shadows

- `shadow.subtle`: `0 1px 2px rgb(0 0 0 / 0.08)`
- `shadow.medium`: `0 8px 24px rgb(0 0 0 / 0.12)`

## Typography And Layout

- `font.heading`: `Nerko One`, headings only.
- `font.body`: system UI or Inter.
- `font.size.heading`: `2.5rem`
- `font.size.lead`: `1.125rem`
- `font.size.small`: `0.875rem`
- `font.weight.semibold`: `600`
- `font.weight.bold`: `700`
- `line.height.tight`: `1.1`
- `size.full`: `100%`
- `size.viewport.block`: `100vh`
- `layout.content`: `960px`
- `layout.measure`: `720px`
- `layout.copy`: `640px`
- `layout.panel`: `360px`

## States And Motion

- `state.disabled.opacity`: `0.6`
- `state.hover.brightness`: `0.92`
- `focus.ring`: `0 0 0 3px rgb(241 30 30 / 0.28)`
- `motion.fast`: `700ms`
- `motion.rotation.full`: `360deg`

## Rules

- No hardcoded visual values in components.
- All component styling must reference tokens or CSS variables.
- Add or change tokens before introducing a new color, spacing value, radius or shadow.
- Keep tokens minimal until repeated product needs justify expansion.

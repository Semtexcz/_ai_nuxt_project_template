# Component Rules

Components should stay simple, consistent and token-based.

## Requirements

Each component must:

- Use design tokens or CSS variables for color, spacing, radius, shadow and typography.
- Use the spacing scale from `design/design-tokens.md`.
- Support relevant loading, empty and error states.
- Match existing UI patterns before adding a new visual pattern.
- Expose accessible HTML, labels and state attributes.

## Avoid

- Inline styles.
- Hardcoded colors, spacing, radius or shadow values.
- Random one-off spacing.
- Decorative variants before product states are clear.

## Vue Example

```vue
<script setup lang="ts">
defineProps<{
  loading?: boolean
  error?: string
}>()
</script>

<template>
  <section class="status-panel" :aria-busy="loading">
    <p v-if="loading">Loading...</p>
    <p v-else-if="error" role="alert">{{ error }}</p>
    <slot v-else />
  </section>
</template>

<style scoped>
.status-panel {
  display: grid;
  gap: var(--spacing-sm);
  border: var(--border-width-sm) solid var(--color-gray-300);
  border-radius: var(--radius-lg);
  padding: var(--spacing-md);
  color: var(--color-gray-900);
  background: var(--color-white);
}
</style>
```

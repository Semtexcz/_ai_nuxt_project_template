<script setup lang="ts">
const props = withDefaults(defineProps<{
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  loading?: boolean
}>(), {
  type: 'button',
  disabled: false,
  loading: false,
})

const emit = defineEmits<{
  click: [event: MouseEvent]
}>()

function handleClick(event: MouseEvent) {
  if (props.disabled || props.loading) {
    event.preventDefault()
    return
  }

  emit('click', event)
}
</script>

<template>
  <button
    class="base-button"
    :type="type"
    :disabled="disabled || loading"
    :aria-busy="loading"
    :data-loading="loading || undefined"
    @click="handleClick"
  >
    <span v-if="loading" aria-hidden="true" class="spinner" />
    <span class="content">
      <slot />
    </span>
  </button>
</template>

<style scoped>
.base-button {
  display: inline-flex;
  min-height: calc(var(--spacing-xl) + var(--spacing-sm));
  align-items: center;
  justify-content: center;
  gap: var(--spacing-sm);
  border: var(--border-width-sm) solid var(--color-primary);
  border-radius: var(--radius-md);
  padding: var(--spacing-none) var(--spacing-md);
  color: var(--color-white);
  font: inherit;
  font-weight: var(--font-weight-semibold);
  background: var(--color-primary);
  box-shadow: var(--shadow-subtle);
  cursor: pointer;
}

.base-button:hover:not(:disabled) {
  filter: brightness(var(--state-hover-brightness));
}

.base-button:focus-visible {
  outline: none;
  box-shadow: var(--focus-ring);
}

.base-button:disabled {
  opacity: var(--state-disabled-opacity);
  cursor: not-allowed;
}

.spinner {
  width: var(--spacing-md);
  height: var(--spacing-md);
  border: var(--border-width-md) solid currentColor;
  border-top-color: var(--color-transparent);
  border-radius: var(--radius-lg);
  animation: spin var(--motion-fast) linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(var(--motion-rotation-full));
  }
}
</style>

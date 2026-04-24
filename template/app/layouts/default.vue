<template>
  <div class="app-shell">
    <main>
      <slot />
    </main>
  </div>
</template>

<style scoped>
.app-shell {
  min-height: var(--size-viewport-block);
  color: var(--color-gray-900);
  background: var(--color-gray-50);
}

main {
  width: min(calc(var(--size-full) - var(--spacing-xl)), var(--layout-content));
  margin: var(--spacing-none) auto;
  padding: calc(var(--spacing-xl) + var(--spacing-md)) var(--spacing-none);
}
</style>

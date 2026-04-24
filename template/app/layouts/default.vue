<template>
  <div class="app-shell">
    <main>
      <slot />
    </main>
  </div>
</template>

<style scoped>
.app-shell {
  min-height: 100vh;
  color: #172026;
  background: #f7f9fb;
}

main {
  width: min(100% - 32px, 960px);
  margin: 0 auto;
  padding: 48px 0;
}
</style>

export function useExample(initialCount = 0) {
  const count = ref(initialCount)
  const doubleCount = computed(() => count.value * 2)

  function increment() {
    count.value += 1
  }

  return {
    count: readonly(count),
    doubleCount,
    increment,
  }
}

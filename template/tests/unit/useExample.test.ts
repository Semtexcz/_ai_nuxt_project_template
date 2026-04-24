import { describe, expect, it } from 'vitest'
import { useExample } from '#imports'

describe('useExample', () => {
  it('increments the count and derives a doubled value', () => {
    const { count, doubleCount, increment } = useExample(2)

    expect(count.value).toBe(2)
    expect(doubleCount.value).toBe(4)

    increment()

    expect(count.value).toBe(3)
    expect(doubleCount.value).toBe(6)
  })
})

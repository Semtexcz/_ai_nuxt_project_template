import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import BaseButton from '../../app/components/BaseButton.vue'

describe('BaseButton', () => {
  it('emits clicks only when interactive', async () => {
    const wrapper = mount(BaseButton, {
      slots: {
        default: 'Save',
      },
    })

    await wrapper.trigger('click')

    expect(wrapper.emitted('click')).toHaveLength(1)

    await wrapper.setProps({ loading: true })
    await wrapper.trigger('click')

    expect(wrapper.emitted('click')).toHaveLength(1)
    expect(wrapper.attributes('aria-busy')).toBe('true')
  })
})

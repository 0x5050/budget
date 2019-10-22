import { mount } from '~/src/node_modules/@vue/test-utils'
import Logo from '~/src/node_modules/@/components/Logo.vue'

describe('Logo', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Logo)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})

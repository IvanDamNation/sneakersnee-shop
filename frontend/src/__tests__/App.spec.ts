import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import App from '../App.vue'

describe('App', () => {
  it('renders the storefront', () => {
    const wrapper = mount(App)

    expect(wrapper.get('header a').text()).toBe('Sneakersnee')
    expect(wrapper.findAll('main article')).toHaveLength(8)
  })
})

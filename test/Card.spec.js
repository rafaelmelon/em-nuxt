import { mount, RouterLinkStub } from '@vue/test-utils'
import Card from '@/components/Card'
import { ANTAGONIMS } from '~/mock'

describe('Card', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Card, {
      propsData: {
        antagonism: ANTAGONIMS[0],
        show: true,
      },
      stubs: {
        NuxtLink: RouterLinkStub,
      },
    })
    expect(wrapper.vm).toBeTruthy()
  })
})

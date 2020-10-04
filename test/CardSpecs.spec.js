import { mount, RouterLinkStub } from '@vue/test-utils'
import CardSpecs from '@/components/CardSpecs'
import { ANTAGONIMS } from '~/mock'

describe('CardSpecs', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(CardSpecs, {
      propsData: {
        specs: ANTAGONIMS[0].antagonists[0].specs,
      },
      stubs: {
        NuxtLink: RouterLinkStub,
      },
    })
    expect(wrapper.vm).toBeTruthy()
  })
})

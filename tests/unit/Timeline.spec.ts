import { mount } from '@vue/test-utils'
import Timeline from '@/components/Timeline.vue'

describe('Timeline.vue', () => {
  it('测试3个a标签的功能', () => {
    const wrapper = mount(Timeline, {})
    // console.log(wrapper.html());
    // expect(1).toBe(2)
    // const periods = wrapper.findAll("a")
    // expect(periods.length).toBe(3)
    expect(wrapper.findAll("[data-test='period']")).toHaveLength(3)
  })
})

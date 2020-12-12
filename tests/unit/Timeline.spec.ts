import { mount } from '@vue/test-utils'
import Timeline from '@/components/Timeline.vue'
import {nextTick} from 'vue'

describe('Timeline.vue', () => {
  it('测试3个a标签的功能', () => {
    const wrapper = mount(Timeline, {})
    expect(wrapper.findAll("[data-test='period']")).toHaveLength(3)
  })
  it('测试a标签的事件功能', async () => {
    const wrapper = mount(Timeline, {})
    const $today =  wrapper.findAll("[data-test='period']")[0]
    expect($today.classes()).toContain("is-active")

    const $thisWeek =  wrapper.findAll("[data-test='period']")[1]
    await $thisWeek.trigger("click")

    // dom更新完毕
    // await nextTick()
    expect($today.classes()).not.toContain("is-active")
    expect($thisWeek.classes()).toContain("is-active")

    const $thisMonth =  wrapper.findAll("[data-test='period']")[2]
  })
})

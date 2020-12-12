<template>
  <nav class="is-primary panel">
   <p class="panel-tabs">
     <a
         @click="setPeriod(period)"
         :class="[period === selectedPeriod ? 'is-active':'']"
         data-test="period" v-for="(period,index) in periods" :key="index">{{period}}</a>
   </p>
    <timeline-post v-for="(post) in posts " :key="post.id" :post="post"></timeline-post>
  </nav>
</template>

<script lang="ts">
import {defineComponent,ref,computed} from 'vue'
import {Period,Post} from "@/types";
import {todayPost,thisWeek,thisMonth} from "@/mock";
import moment from "moment";
import TimelinePost from "@/components/TimelinePost.vue";
import {useStore} from "@/store";

export default defineComponent({
  name: "Timeline",
  components:{
    TimelinePost
  },
  setup() {
    const periods:Period[] = ["今天", "本周", "本月"]
    const selectedPeriod = ref<Period>("今天")
    const store = useStore()
    // console.log(store.getState())
    const allPosts = store.getState().posts.ids.reduce<Post[]>((acc,id) =>{
      const post = store.getState().posts.all[id]
      return acc.concat(post)
    },[])

    // tab切换
    const setPeriod = (period:Period) =>{
      selectedPeriod.value = period;
    }

    // 展示数据
    // const posts:Post[] = [todayPost,thisWeek,thisMonth]
    const posts = computed(() =>
        allPosts.filter((post) =>{
      if (selectedPeriod.value === "今天" && post.created.isAfter(moment().subtract(1,"day"))){
        return true
      }else{
        false
      }
      if (selectedPeriod.value === "本周" && post.created.isAfter(moment().subtract(7,"days"))){
        return true
      }else{
        false
      }
      if (selectedPeriod.value === "本月" && post.created.isAfter(moment().subtract(1,"month"))){
        return true
      }else{
        false
      }
    }))

    return {
      periods,
      selectedPeriod,
      setPeriod,
      posts
    }
  }
})
</script>

<style scoped>

</style>

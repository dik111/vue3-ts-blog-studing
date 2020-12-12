<template>
  <section class="section">
    <div class="container">
    <Timeline></Timeline>
    </div>
  </section>
  <router-view/>
</template>


<script>
import Timeline from "@/components/Timeline";
export default {
  components: {Timeline}
}
</script>
<style>

</style>

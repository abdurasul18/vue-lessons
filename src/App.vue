<template>
  <div @click="currentComp='ChannelCard'" :channel="{name : 'My Chanel'}">
   <component :is="currentComp">

   </component>

    <channel-card :channel="{name : 'My channel'}"></channel-card>
  </div>
</template>

<script>
import ChannelList from "@/components/ChannelList.vue"
export default {
  components : {
    ChannelList,
  },
  data(){
    return { 
      currentComp : 'ChannelList'
    }
  }
}
</script>

<style>

</style>
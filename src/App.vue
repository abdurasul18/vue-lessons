<template>
  <div class="container">
    <AppNavbar @changeComp="changeComp" />
    <component :is="currentComp"> </component>
  </div>
</template>

<script>
import ChannelList from "@/components/ChannelList.vue";
import FormComp from "@/components/LoginForm.vue";
import AppNavbar from "@/components/headerFooter/AppNavbar.vue";
export default {
  components: {
    ChannelList,
    FormComp,
    AppNavbar,
  },
  data() {
    return {
      currentComp: "ChannelList",
    };
  },
  methods: {
    changeComp(e) {
      this.currentComp = e;
    },
  },
};
</script>

<style>
@import "@/assets/css/styles.css";
</style>
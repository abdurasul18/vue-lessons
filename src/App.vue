<template>
  <div class="container">
    <AppNavbar  />
    <router-view/>
  </div>
</template>

<script>
import AppNavbar from "@/components/headerFooter/AppNavbar.vue";
export default {
  components: {
    AppNavbar,
  },
  data() {
    return {
    };
  },
  methods: {
   
  },
};
</script>

<style>
@import "@/assets/css/styles.css";
</style>
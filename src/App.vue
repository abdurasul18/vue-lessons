<template>
  <div class="container">
    <AppNavbar />
    <router-view />
    <AppSidebar ref="sidebar" id="myId">
      <template #header="{ prop2, isShow }">
        Bu Sidebar header {{ prop2 }} {{ isShow }}
      </template>
      <template #body>
        Bu body content Lorem ipsum dolor sit amet consectetur, adipisicing
        elit. Iure, soluta dolore fugit hic corrupti quis.
      </template>
    </AppSidebar>
  </div>
</template>

<script>
import AppNavbar from "@/components/headerFooter/AppNavbar.vue";
import AppSidebar from "@/components/elements/AppSidebar.vue";

export default {
  components: {
    AppNavbar,
    AppSidebar
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {},
};
</script>

<style>
@import "@/assets/css/styles.css";
</style>
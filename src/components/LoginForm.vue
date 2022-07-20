<template>
  <div>
    <h1>Form elements</h1>
    <app-button @click.native="toggleSidebar"> click me </app-button>
    <app-button class="my-class"> submit </app-button>
    <AppSidebar ref="sidebar" id="myId">
      <template #header="{ prop2, isShow }"> Bu Sidebar header {{ prop2 }} {{ isShow }} </template>
      <template #body>
        Bu body content Lorem ipsum dolor sit amet consectetur, adipisicing
        elit. Iure, soluta dolore fugit hic corrupti quis.
      </template>
    </AppSidebar>
  </div>
</template>

<script>
import AppSidebar from "./elements/AppSidebar.vue";
import AppButton from "./elements/AppButton.vue";
export default {
  components: {
    AppSidebar,
    AppButton,
  },
  data() {
    return {
      sidebarShow: false,
    };
  },
  methods: {
    toggleSidebar() {
      this.$refs.sidebar.toggle(true);
    },
  },
  mounted() {},
};
</script>

<style>
</style>
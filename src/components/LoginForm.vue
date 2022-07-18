<template>
  <div>
    <h1>Form elements</h1>
    <button @click="toggleSidebar" class="my-btn">click me</button>
    <AppSidebar ref="sidebar" />
  </div>
</template>

<script>
import AppSidebar from "./elements/AppSidebar.vue";
export default {
  components: {
    AppSidebar,
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
.my-btn {
  padding: 15px 30px;
  background: #f90;
  color: #fff;
  font-size: 18px;
  cursor: pointer;
}
</style>
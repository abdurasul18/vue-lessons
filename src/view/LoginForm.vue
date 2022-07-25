<template>
  <div>
    <h1>Form elements</h1>
    <app-button @click.native="toggleSidebar"> click me </app-button>
    <app-button class="my-class"> submit </app-button>
    
  </div>
</template>

<script>
import AppButton from "../components/elements/AppButton.vue";
export default {
  components: {
    AppButton,
  },
  data() {
    return {
      sidebarShow: false,
    };
  },
  methods: {
    toggleSidebar() {
      this.$store.commit("TOGGLE_IS_OPEN", true);
    },
  },
  mounted() {},
};
</script>

<style>
</style>
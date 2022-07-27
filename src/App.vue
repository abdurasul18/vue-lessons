<template>
  <div class="container">
    <AppNavbar />
    <transition name="fade">
      <router-view />
    </transition>
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
    AppSidebar,
  },
  data() {
    return {
      show: false,
    };
  },
  methods: {},
  mounted() {},
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s ease;
}

.fade-enter-from,
.fade-leave-to {
 transform: translateX(100%);
 transition: all ease 0.5s
}
@import "@/assets/css/styles.css";
</style>
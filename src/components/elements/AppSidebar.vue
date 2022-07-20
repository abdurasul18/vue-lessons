<template>
  <div class="sidebar" :class="{ show: sidebarShow }">
    <div class="close" @click="sidebarShow = false">X</div>
    <div class="content">
      <div class="header">
        <slot name="header" :isShow="sidebarShow" prop2="Nimadir"></slot>
      </div>
      <div class="body">
        <slot name="body" ></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      sidebarShow: false,
    };
  },
  methods: {
    toggle(val) {
      this.sidebarShow = val;
    },
  },
};
</script>

<style>
.sidebar {
  position: fixed;
  z-index: 99;
  top: 0;
  right: -100%;
  bottom: 0;
  width: 500px;
  background: #fff;
  color: #f90;
  padding: 30px 30px 20px 20px;
  font-size: 18px;
  transition: all ease 0.5s;
}
.sidebar.show {
  right: 0;
}
.close {
  position: absolute;
  top: 15px;
  right: 15px;
  color: black;
  cursor: pointer;
  padding: 2px;
  border: 1px solid #000;
}
.header {
  padding: 5px;
  font-size: 22px;
  font-weight: bold;
  border-bottom: 1px solid #000;
  margin-bottom: 15px;
}
</style>
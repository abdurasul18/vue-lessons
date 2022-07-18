<template>
  <div class="sidebar" :class="{ show: sidebarShow }">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, tenetur
    impedit culpa placeat voluptates laborum necessitatibus, laudantium eligendi
    perferendis ipsum quod iste ea rerum? Laudantium blanditiis voluptate
    placeat ipsa alias?
    <div class="close" @click="sidebarShow = false">X</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sidebarShow: false,
    };
  },
  methods : {
    toggle(val){
        this.sidebarShow = val
    }
  }
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
</style>
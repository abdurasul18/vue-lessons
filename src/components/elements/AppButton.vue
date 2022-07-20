<template>
  <button class="my-btn"> <slot></slot> </button>
</template>

<script>
export default {};
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
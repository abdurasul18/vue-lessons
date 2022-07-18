<template>
  <nav>
    <ul>
      <li @click="$emit('changeComp', 'ChannelList')">Channels</li>
      <li @click="$emit('changeComp', 'FormComp')">Login</li>
    </ul>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
nav {
  padding: 15px;
}
ul {
  display: flex;
  align-items: center;
  list-style: none;
}
li {
  color: #fff;
  font-size: 18px;
  flex-wrap: bold;
  margin-right: 25px;
  cursor: pointer;
}
</style>
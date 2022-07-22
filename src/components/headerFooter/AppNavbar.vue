<template>
  <nav>
    <ul>
      <li >
        <router-link :to="{name : 'Home'}"> Channels </router-link>
      </li>
      <li>
        <router-link to="/movie"> Movies</router-link>
      </li>
      <li >
        <router-link to="/login">
          Login
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
 

};
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
a {
  color: #fff;
}
.router-link-exact-active {
  color: #f90;
}
</style>
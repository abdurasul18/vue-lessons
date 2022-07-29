<template>
  <nav>
    <ul>
      <li>
        <router-link :to="{ name: 'Home' }"> Channels </router-link>
      </li>
      <li>
        <router-link to="/movie"> Movies</router-link>
      </li>
      <li>
        <router-link to="/login" v-if="!isAuth"> Login </router-link>
      </li>
    </ul>
    <ul v-if="isAuth">
      <li>{{ $store.state.auth.username }}</li>
      <li>
        <button @click="$store.commit('auth/logout')" class="my-btn">logout</button>
      </li>
    </ul>
  </nav>
</template>

<script>
import { mapGetters } from "vuex"
export default {
  computed : {
    ...mapGetters("auth", ["isAuth"])
  }
};
</script>

<style scoped>
nav {
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
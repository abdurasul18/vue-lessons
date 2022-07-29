<template>
  <div>
    <h1>Form elements</h1>
    <form @submit.prevent="login" class="login-form">
      <input
        v-model="form.login"
        placeholder="login"
        class="searchInput"
        type="text"
      />
      <input
        v-model="form.password"
        placeholder="password"
        class="searchInput"
        type="password"
      />
      <app-button type="submit"> login </app-button>
    </form>
  </div>
</template>

<script>
import AppButton from "../components/elements/AppButton.vue";
import { loginRequest } from "@/server";
export default {
  components: {
    AppButton,
  },
  data() {
    return {
      sidebarShow: false,
      form: {
        login: "",
        password: "",
      },
    };
  },
  methods: {
    async login() {
      try {
        await this.$store.dispatch("auth/login", this.form);
        this.$router.push("/")
      } catch (e) {
        console.log(e);
      }
    },
  },
  mounted() {},
};
</script>

<style>
.login-form {
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  max-width: 250px;
}
</style>
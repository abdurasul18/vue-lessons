import { loginRequest } from "@/server";
import router from "@/routes";
const state = {
    username: localStorage.getItem("username") || "",
    token: "",
}
const getters = {
    isAuth(state) {
        return !(!state.username && !state.token)
    }
}
const actions = {
    async login({ commit }, data) {
        try {
            let res = await loginRequest(data)
            commit("loginSuccess", res)
        }
        catch (e) {
            alert(e)
            throw e;
        }
        return;
    }
}
const mutations = {
    loginSuccess(state, payload) {
        state.username = payload.username
        state.token = payload.token
        localStorage.setItem("token", payload.token)
        localStorage.setItem("username", payload.username)
    },
    logout(state) {
        state.username = ""
        state.token = ""
        localStorage.removeItem("username")
        localStorage.removeItem("token")
        router.push("/login")
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
import axios from "axios"
const state = {
    channels: [],
}
const getters = {
    uzChannels(state) {
        return state.channels.filter(el => el.categories.some(cat => cat.name == 'Узбекские'))
    }
}
const actions = {
    async getChannels({ commit }) {
        try {
            let res = await axios.get("https://api.allplay.uz/api/v1/iptv/channels");
            commit("SET_CHANNELS", res.data.data)
            return res.data.data
        }
        catch {
            commit("SET_CHANNELS", [])
        }

    },

}
const mutations = {
    SET_CHANNELS(state, payload) {
        state.channels = payload
    }
}

export default {
    state,
    getters,
    actions,
    mutations,
    namespaced: true,

}
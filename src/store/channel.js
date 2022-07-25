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
            let res = await fetch("https://api.allplay.uz/api/v1/iptv/channels");
            let resJson = await res.json()
            commit("SET_CHANNELS", resJson.data)
            return resJson.data
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
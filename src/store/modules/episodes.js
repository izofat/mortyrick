import { getEpisodes } from "@/service/serviceGetEpisodes";
import { ref } from "vue";


const state = {
    episodes : [],

}

const getters = {
    getCharacterEpisodes (state){
        return state.episodes
    },

}

const mutations = {
    SET_CHARACTER_EPISODES(state, episodes){
        
        state.episodes = episodes;
    }
}

const actions = {
    async getSingleCharactersEpisode({commit},links){
        const ids = ref([]);
       
        links.forEach(link => {
            ids.value.push(parseInt(link.trim().match(/\/(\d+)$/)[1], 10));
        });
        const episodes = await  getEpisodes(ids.value);
        commit('SET_CHARACTER_EPISODES',episodes);
    }
}

export default {
    namespaced : true,
    state,
    getters,
    mutations,
    actions,
}
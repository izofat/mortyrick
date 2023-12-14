import { getSingleCharacter } from "@/service/serviceGetSingleCharacter"


const state = {
    character : [],
    characterEpisodes : [],
}

const getters = {
    getCharacter(state){
        return state.character;
    },
    getCharacterEpisodes(state){
        return state.characterEpisodes;
    }
}

const mutations = {
    SET_SINGLE_CHARACTER(state,singleCharacter){
        state.character = singleCharacter;
        for(let i = 0 ; i < singleCharacter.episode.length ; i+=20){
           state.characterEpisodes.push(singleCharacter.episode.slice(i , i +20)); 
        }
    }
}

const actions = {
    async loadSingleCharacter({commit}, id){
        state.characterEpisodes = [];
        const singleCharacter = await getSingleCharacter(id);
        commit('SET_SINGLE_CHARACTER',singleCharacter);
    }
}

export default{
    namespaced : true,
    state,
    getters,
    mutations,
    actions,
}
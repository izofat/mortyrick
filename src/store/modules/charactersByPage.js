import { getCharacterByPage } from "@/service/serviceGetCharacterByPage";


const state = {
    currentPage : 1,
    pageCount : -1,
    allCharacterCount : -1,
    charactersOnPage : [], 
}

const getters = {
    getCurrentPage(state){
        return state.currentPage;
    },
    getPageCount(state){
        return state.pageCount;
    },
    getIsLoading(state){
        return state.isLoading;
    },
    getCharacters(state){
        return state.charactersOnPage;
    },
    getCharacterOnPageCount (state){
        return state.charactersOnPage.length;
    },
    getAllCharacterCount (state) {
        return state.allCharacterCount;
    }

}

const mutations = {
    UPDATE_CURRENT_PAGE(state,count){
        state.currentPage += count;
    },
    SET_CHARACTERS_CURRENT_PAGE(state,characters){
        state.allCharacterCount = characters.info.count;
        state.pageCount = characters.info.pages;
        state.charactersOnPage = characters.results;  
    },
    UPDATE_CHARACTERS_TO_FILTERED(state , filteredCharacters){
        state.charactersOnPage = filteredCharacters.results;
        state.pageCount = filteredCharacters.info.pages;
        state.allCharacterCount = filteredCharacters.info.count;
    }
}

const actions = {
    setCurrentPage({commit}, count){
        commit('UPDATE_CURRENT_PAGE',count)
    },
    async loadCharactersByPage({commit},currentPage){
        const charactersByPage = await getCharacterByPage(currentPage);
        commit('SET_CHARACTERS_CURRENT_PAGE',charactersByPage);
    },
    updateCharactersToFilteredCharacters({commit},filteredCharacters){ 
        commit('UPDATE_CHARACTERS_TO_FILTERED',filteredCharacters)
    }
}

export default {
    namespaced : true,
    state,
    getters,
    mutations,
    actions,
}
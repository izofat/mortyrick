import { getFilteredCharacters } from "@/service/serviceFilterCharacters";

const state = {
    filterConditions_PageNotAdded : "",
    isFilterApplyed : false,
}


const getters = {
    getFilter(state){
        return state.isFilterApplyed
    },
    getFilterCondition(state){
        return state.filterConditions_PageNotAdded;
    }
}


const mutations = {
   SET_FILTER(state , condition){
    state.isFilterApplyed = condition;
   },
   UPDATE_FILTER_CONDITION (state , conditionFilter){
    state.filterConditions_PageNotAdded = conditionFilter;
   }    
}


const actions = {
    async loadFilteredCharacters({dispatch},filterConditionWithPage){    
        const filteredCharacters = await getFilteredCharacters(filterConditionWithPage);
        dispatch('charactersByPage/updateCharactersToFilteredCharacters',filteredCharacters , {root : true});
    },
    applyFilter({commit} , condition){
        commit('SET_FILTER',condition)
    },
    updateFilterConditions({commit} , conditonFilter){
        commit('UPDATE_FILTER_CONDITION',conditonFilter);
    }
}

export default {
    namespaced : true,
    state,
    getters,
    mutations,
    actions,
}

<script setup>
import { ref } from 'vue'
import {useStore} from 'vuex'
const name = ref('');
const status = ref('');
const species = ref('');
const type = ref('');
const gender = ref('');
const filterConditions = ref('');
const store = useStore();

const filterCharacters = () => {
    filterConditions.value = '';
    if(name.value != '' && name.value != null){
        filterConditions.value += '&name=' +name.value ; 
    }    
    if(status.value != '' && status.value != null){
        filterConditions.value += '&status=' + status.value;
    }
    if(species.value != '' && species.value != null){
        filterConditions.value += '&species=' + species.value;
    }
    if(type.value != '' && type.value != null){
        filterConditions.value += '&type=' + type.value;
    }
    if(gender.value != '' && gender.value != null){
        filterConditions.value += '&gender=' + gender.value; 
    }
    store.dispatch('filterCharacters/applyFilter',true);
    store.dispatch('filterCharacters/updateFilterConditions',filterConditions.value);
    store.dispatch('filterCharacters/loadFilteredCharacters',filterConditions.value);
}
const removeFilter = () => {
    store.dispatch('filterCharacters/applyFilter',false);
    store.dispatch('charactersByPage/loadCharactersByPage',1);
}
</script>

<template>

<div class="flex flex-col items-center justify-center" @keydown.enter="filterCharacters">
    <h2 class="text-[35px] font-['Segoe UI', Tahoma, Geneva, Verdana, sans-serif] text-white font-bold mt-4">Find Rick and Morty Characters</h2>
    <div class="searchmenurow  mt-[3%]  w-full pl-[3%] pr-[3%] gap-4">
        <input type="text" placeholder="No Name" v-model="name">
        <select v-model="status"
            class="rounded-[4px] w-[16%] h-[40px] text-[17px] font-[inherit] text-white bg-[rgb(38,44,56)]">
            <option value="null" selected>No Status</option>
            <option value="alive">Alive</option>
            <option value="dead">Dead</option>
            <option value="unknown">Unknown</option>
        </select>
        <input type="text" placeholder="No Species" v-model="species" >
        <input type="text" placeholder="No Type" v-model="type">
        <select v-model="gender" 
            class="rounded-[4px] w-[16%] h-[40px] text-[17px] font-[inherit] text-white bg-[rgb(38,44,56)]">
            <option value="null">No Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="genderless">Genderless</option>
            <option value="unknown">Unknown</option>
        </select>
        <button class="bg-[rgb(145,204,244)] w-[13%] rounded-md text-[16px] font-medium hover:bg-[#63b3ed]"
            @click="filterCharacters" >Filter</button>
        <button class="bg-[rgb(254,179,179)] w-[40px] rounded-md font-bold hover:bg-[#fc8181]"
            @click="removeFilter"  >x</button>
    </div>
    <div class="searchmenucol border-b-[1px] border-t-[1px] mt-[7%] w-[85%] text-start border-[rgba(255,255,255,0.16)]">
        <div class="flex flex-row items-center justify-between">
            <h3 class="mt-3  ml-4 mb-3 font-['Segoe UI', Tahoma, Geneva, Verdana, sans-serif] text-white font-[350]">
                Filters
            </h3>
            <i class="fa-solid fa-angle-down  mt-3 mr-3 text-white"></i>
        </div>

        <div  class="flex flex-col mt-3 mb-3 gap-4">
            <input type="text" placeholder="No Name" v-model="name">
            <select v-model="status" 
                class="rounded-[4px] w-[100%] h-[40px] text-[17px] font-[inherit] text-white bg-[rgb(38,44,56)]">
                <option value="null" selected>No Status</option>
                <option value="alive">Alive</option>
                <option value="dead">Dead</option>
                <option value="unknown">Unknown</option>
            </select>
            <input type="text" placeholder="No Species" v-model="species">
            <input type="text" placeholder="No Type" v-model="type">
            <select v-model="gender" 
                class="rounded-[4px] w-[100%] h-[40px] text-[17px] font-[inherit] text-white bg-[rgb(38,44,56)]">
                <option value="null" selected>No Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="genderless">Genderless</option>
                <option value="unknown">Unknown</option>
            </select>
            <div class="flex flex-row gap-2">
                <button class="bg-[rgb(145,204,244)] w-[90%] h-10 rounded-md text-[16px] font-medium"
                    @click="filterCharacters"    >Filter</button>
                <button class="bg-[rgb(254,179,179)] w-[40px] rounded-md font-bold"
                @click="removeFilter"  >x</button>
            </div>
        </div>
    </div>
</div>
</template>

<style>
input {
    border-radius: 4px;
    width: 16%;
    height: 40px;
    font-size: 17px;
    font-family: inherit;
    background-color: rgb(38, 44, 56);
    color: white;
}

.searchmenurow {
    display: flex;
}

.searchmenucol {
    display: none;
    flex-direction: column;
}

@media screen and (max-width:760px) {
    .searchmenurow {
        display: none;
    }

    .searchmenucol {
        display: flex;
    }

    input {
        width: 100%
    }
}

</style>
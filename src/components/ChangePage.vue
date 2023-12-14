<script setup>
import { useStore } from 'vuex';
import { computed, ref } from 'vue';


const store = useStore();

const currentPage = computed(() => store.getters['charactersByPage/getCurrentPage']);
const isFilterApplyed = computed(() => store.getters['filterCharacters/getFilter'])
store.dispatch('charactersByPage/loadCharactersByPage', currentPage.value);
const pageCount = computed(() => store.getters['charactersByPage/getPageCount']);
function updateCurrentPage(count) {
    store.dispatch('charactersByPage/setCurrentPage', count);
    if (isFilterApplyed.value == false) {
        store.dispatch('charactersByPage/loadCharactersByPage', currentPage.value);
    }
    else {
        const filterCondition = computed(() => store.getters['filterCharacters/getFilterCondition']);
        const filterConditionWithPage = ref(`page=${currentPage.value}` + filterCondition.value);
        store.dispatch('filterCharacters/loadFilteredCharacters', filterConditionWithPage.value);
    }
}
const characterCount = computed(() => store.getters['charactersByPage/getAllCharacterCount']);
const showingCount = computed(() => store.getters['charactersByPage/getCharacterOnPageCount']);
</script>

<template>
    <div class="flex flex-row gap-1 w-full h-[80px] items-center mt-10 pl-[3%]">
        <div class="bg-[rgb(44,49,61)] w-[50px] h-[32px] rounded-[4px] text-white text-center text-[14px] cursor-pointer hover:bg-[rgba(255,255,255,0.16)]"
            :class="{ 'hidden': currentPage == 1 }" @click="updateCurrentPage(-1)">
            <!--change this to display:block; when current page is not 1 -->
            <i class="fa-solid fa-arrow-left fa-sm"></i>
        </div>
        <div class="bg-[rgb(59,65,76)] w-[50px] h-[32px] rounded-[4px] text-white text-center text-[14px]">
            {{ currentPage }} / {{ pageCount }}
        </div>
        <div class="bg-[rgb(44,49,61)] w-[50px] h-[32px] rounded-[4px] text-white text-center text-[14px] cursor-pointer hover:bg-[rgba(255,255,255,0.16)]"
            :class="{ 'hidden': currentPage == pageCount }" @click="updateCurrentPage(1)">
            <i class="fa-solid fa-arrow-right fa-sm"></i>
        </div>
    </div>
    <div class="h-[60px] flex flex-col gap-2 items-center justify-center text-[rgb(160,170,181)]">
        <span class="text-[15px]">• {{ characterCount }} characters •</span>
        <span class="text-[13px]">Showing {{ showingCount }}</span>
    </div>
</template>
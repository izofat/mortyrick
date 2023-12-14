<script setup>
import { useStore } from 'vuex';
import { computed, ref , watch } from 'vue'
const store = useStore();

const linksOfEpisode = computed(() => store.getters['character/getCharacterEpisodes']);
const pageIndex = ref(1);
const pageCount = ref(-1);
let episodes = ref([]);
watch(linksOfEpisode.value, async (newLinks) =>  {
    await store.dispatch('episodes/getSingleCharactersEpisode',newLinks[pageIndex.value-1]);
    pageCount.value = ref(linksOfEpisode.value.length);
    episodes = computed(() => store.getters['episodes/getCharacterEpisodes']);
    console.log(episodes.value)
})


const updateCurrentPage = (count) => {
    pageIndex.value += count;
    store.dispatch('episodes/getSingleCharactersEpisode', linksOfEpisode.value[pageIndex.value-1]);
}
</script>

<template>
    <div class="flex flex-col items-center mt-5 ml-3 gap-5  shadow-lg" v-if="episodes">

        <h3 class="text-white font-['Segoe UI', Tahoma, Geneva, Verdana, sans-serif] text-[18px]">
            Featured In
        </h3>
        <div class="flex flex-col">

            <div class="flex flex-row gap-1 w-full h-[80px] items-center mt-10 pl-[3%]">
                <div class="bg-[rgb(44,49,61)] w-[50px] h-[32px] rounded-[4px] text-white text-center text-[14px] cursor-pointer hover:bg-[rgba(255,255,255,0.16)]"
                    :class="{ 'hidden': pageIndex == 1 }" @click="updateCurrentPage(-1)">
                    <!--change this to display:block; when current page is not 1 -->
                    <i class="fa-solid fa-arrow-left fa-sm"></i>
                </div>
                <div class="bg-[rgb(59,65,76)] w-[50px] h-[32px] rounded-[4px] text-white text-center text-[14px]">
                    {{ pageIndex }} / {{ pageCount }}
                </div>
                <div class="bg-[rgb(44,49,61)] w-[50px] h-[32px] rounded-[4px] text-white text-center text-[14px] cursor-pointer hover:bg-[rgba(255,255,255,0.16)]"
                    :class="{ 'hidden': currentPage == pageIndex }" @click="updateCurrentPage(1)">
                    <i class="fa-solid fa-arrow-right fa-sm"></i>
                </div>
            </div>

            <div class="flex flex-col items-center" :key="episode" v-for="episode in episodes">
                <h4 class="text-white text-[16px] font-['Segoe UI', Tahoma, Geneva, Verdana, sans-serif]">{{ episode.episode
                }}
                    - {{ episode.name }}</h4>
                <h6 class="text-[rgb(160,174,192)] font-['Segoe UI', Tahoma, Geneva, Verdana, sans-serif] text-[12px]">
                    {{ episode.air_date }}
                </h6>
            </div>
        </div>

    </div>
</template>
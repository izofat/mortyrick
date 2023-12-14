<script setup>
import {useStore} from 'vuex';
import {computed} from 'vue'
const store = useStore();
const characters = computed(() => store.getters['charactersByPage/getCharacters']);
</script>

<template>
    <div class="responsivecharactersdiv" v-if="characters">
        <div class="flex flex-col border-[1px] rounded-lg hover:scale-[1.05] transition-all duration-300" :key="character" v-for="character in characters">
            <img :src="character.image" class="w-full h-auto rounded-t-lg" />
            <div class="flex flex-col pl-5 pt-3">
                <h4 class="font-['Segoe UI', Tahoma, Geneva, Verdana, sans-serif] text-white text-[20px] font-[650]">
                    {{ character.name }}
                </h4>
                <h5
                    class="font-['Segoe UI', Tahoma, Geneva, Verdana, sans-serif] text-[rgb(93,163,193)] text-[13px] font-[550] mt-1">
                    {{ character.species }}
                </h5>
                <h6
                    class="font-['Segoe UI', Tahoma, Geneva, Verdana, sans-serif] text-[rgb(144,205,244)] text-[10.5px] font-[500]">
                    {{ character.type }}
                </h6>
                <hr class="mt-3 mb-3 w-[90%]" />
                <div class="flex flex-col mb-3">
                    <!--change color when dead rgb(229,62,62) when status  is unknown rgb(128,90,213)-->
                    <h6 class="font-['Segoe UI', Tahoma, Geneva, Verdana, sans-serif] text-[14px]" :class="{
                        'text-[rgb(49,151,149)]': character.status.toLowerCase() == 'alive',
                        'text-[rgb(229,62,62)]': character.status.toLowerCase() == 'dead',
                        'text-[rgb(128,90,213)] ':
                            character.status.toLowerCase() == 'unknown',}">
                        {{ character.status }}
                    </h6>
                    <!--change the color to rgb(66,153,225) when it's male when gender unknown rgb(159,122,234)-->
                    <h6 class="font-['Segoe UI', Tahoma, Geneva, Verdana, sans-serif] text-[14px] mt-2" :class="{
                        'text-[rgb(237,100,166)]':
                            character.gender.toLowerCase() == 'female',
                        'text-[rgb(66,153,225)]': character.gender.toLowerCase() == 'male',
                        'text-[rgb(159,122,234)]':
                            character.gender.toLowerCase() == 'unknown',
                        'text-[rgb(113,128,150)]':
                            character.gender.toLowerCase() == 'genderless',
                    }">
                        {{ character.gender }}
                    </h6>
                    <h6 class="font-['Segoe UI', Tahoma, Geneva, Verdana, sans-serif] text-[rgb(74,85,104)] text-[12px] mt-2">
                        {{ character.location.name }}
                    </h6>
                      <router-link :to="{ name: 'CharacterDetailsView', params: { id: character.id } }">
                        
                        <button 
                            class="text-center w-[90%] h-[40px] mt-4 bg-[rgb(129,230,217)] rounded-md mb-5 font-['Segoe UI', Tahoma, Geneva, Verdana, sans-serif] text-[16px] font-[550] hover:bg-[rgb(79,209,197)]">
                            Details
                            
                        </button>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>


<style>
.responsivecharactersdiv {
    display: grid;
    gap: 20px;
    border-color: rgba(255, 255, 255, 0.16);
    grid-template-columns: repeat(5, 2fr);
    box-sizing: border-box;
    margin-top: 30px;
    padding-left: 3%;
    padding-right: 3%;
}

@media screen and (max-width:760px) {
    .responsivecharactersdiv {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media screen and (max-width: 480px) {
    .responsivecharactersdiv {
        grid-template-columns: repeat(1, 1fr);
    }
}
</style>
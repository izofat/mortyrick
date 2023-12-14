<script setup>
    import {useStore} from 'vuex'
    import {computed} from 'vue'
    const props = defineProps({
        id : String
    })
    const store = useStore();

    store.dispatch('character/loadSingleCharacter',props.id);
    const characterInfos = computed(() => store.getters['character/getCharacter']);
    
</script>

<template>
    <div class="characterinfo flex flex-col items-center  gap-7 shadow-lg" >
        <img :src="characterInfos.image" class="rounded-full mt-3 w-[25%] h-auto">
        <h2 class="font-['Segoe UI', Tahoma, Geneva, Verdana, sans-serif] font-bold text-[30px] text-white">{{
            characterInfos.name }}
        </h2>
        <div class="flex w-[100%] items-center justify-evenly">
            <h6 class="text-[rgb(160,174,192)] font-['Segoe UI', Tahoma, Geneva, Verdana, sans-serif] text-[14px]">
                INFO</h6>
            <hr class="w-[85%]">
        </div>

        <div class="flex flex-col items-start h-full gap-3 ml-[5%] ">
            <h3 class="font-['Segoe UI', Tahoma, Geneva, Verdana, sans-serif] font-medium text-[18px] text-white">Status
                : <span>{{ characterInfos.status }}</span></h3>
            <h3 class="font-['Segoe UI', Tahoma, Geneva, Verdana, sans-serif] font-medium text-[18px] text-white">Gender
                : <span>{{ characterInfos.gender }}</span></h3>
            <h3 class="font-['Segoe UI', Tahoma, Geneva, Verdana, sans-serif] font-medium text-[18px] text-white">
                Species : <span>{{ characterInfos.species }}</span></h3>
            <h3 class="font-['Segoe UI', Tahoma, Geneva, Verdana, sans-serif] font-medium text-[18px] text-white">Type :
                <span>{{ characterInfos.type }}</span>
            </h3>
            <h3 class="font-['Segoe UI', Tahoma, Geneva, Verdana, sans-serif] font-medium text-[18px] text-white">Origin
                : <span>{{ characterInfos.origin }}</span></h3>
            <h3 class="font-['Segoe UI', Tahoma, Geneva, Verdana, sans-serif] font-medium text-[18px] text-white">
                Location : <span>{{ characterInfos.location }}</span></h3>
        </div>

    </div>
</template>
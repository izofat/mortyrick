<script setup>
    import HeaderApp from '@/components/HeaderApp.vue';
    import CharacterInfo from '@/components/CharacterInfo.vue';
    import CharacterEpisodes from '@/components/CharacterEpisodes.vue';

    const props = defineProps({
        id : String
    })


</script>

<template>
    <div class="flex flex-col w-full h-full overflow-auto">
        <HeaderApp/>
        <div class="altcontainer w-full items-start h-full">
            <button @click="$router.go(-1)" class="text-[rgb(144,205,244)] ml-6 text-['Segoe UI', Tahoma, Geneva, Verdana, sans-serif]  font-bold">
                <i class="fa-solid fa-chevron-left"></i>
                <i class="fa-solid fa-chevron-left"></i>
                Go Back
            </button>
            <div class="flex flex-row">

            </div>
            <CharacterInfo :id="props.id"/>
            <CharacterEpisodes/>
        </div>  
    </div>
    

</template>
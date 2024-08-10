<template>
    <div class="h-min flex flex-row gap-6 items-center">
        <RouterLink :to="`/channel/${props.channelID}`">
            <img :src="thumbnail" alt="" class="w-10 h-10 rounded-full"/>
        </RouterLink>
        <div class="flex flex-col gap-0 min-w-0">
            <RouterLink :to="`/channel/${props.channelID}`" class="inline-block whitespace-nowrap cursor-pointer">{{ props.channelTitle }}</RouterLink>
            <p class="text-gray-400 text-xs">{{ props.channelSubscriptions}} subskrybcji</p>
        </div>
        <button @click="handleShowModalWindow" class="px-4 py-2 text-white bg-black w-min h-min rounded-full">Subskrybuj</button>
    </div>
</template>

<script setup>
    import { RouterLink } from 'vue-router';
    import store from '@/stores/modalWindow';

    const handleShowModalWindow = () =>{
        store.show();
    }

    const props = defineProps(["channelTitle", "channelSubscriptions", "channelID", "thumbnail"])
</script>
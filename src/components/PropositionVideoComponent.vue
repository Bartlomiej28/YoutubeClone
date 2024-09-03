<template>
    <RouterLink :to="`/video/${id}`" class="w-full h-64 sm:h-32 md:h-40 bg-white flex flex-row gap-4 p-2" @click="handleGoToNextPage(id)">
        <div class="w-1/3 sm:w-1/2 md:w-1/2 h-full bg-blue-500">
            <img :src="thumbnail" alt="thumbnail" class="w-full h-full object-cover rounded"/>
        </div>
        <div class="w-2/3 flex sm:w-1/2 md:w-1/2 flex-col justify-between">
            <div>
                <p class="text-sm font-medium truncate">{{ title }}</p>
                <p class="text-xs text-gray-500">{{ channelTitle }}</p>
            </div>

        </div>
    </RouterLink>
</template>

<script setup>
    import { RouterLink } from 'vue-router';
    import { useRoute } from 'vue-router';
 
    const props = defineProps(["thumbnail", "title", "channelTitle", "id"]);

    const handleGoToNextPage = (id) =>{
        location.replace(`/video/${id}`)
    }
</script>
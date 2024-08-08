<template>
    <RouterLink :to="`/video/${id}`" class="w-1/2 flex flex-row gap-4 border rounded-2xl h-60">
        <div class="w-1/3 h-full">
            <img :src="thumbnail" class="w-full h-auto object-cover" alt="video" />
        </div>
        <div class="w-2/3 flex flex-col justify-between">
            <div>
                <p class="text-sm font-medium truncate">{{ title }}</p>
                <p class="text-xs text-gray-500">{{ channelTitle }}</p>
            </div>
            <p class="text-xs text-gray-500">{{ viewsCount }} wyświetleń</p>
        </div>
    </RouterLink>
</template>

<script setup>
    import { RouterLink } from 'vue-router';
    const props = defineProps(["thumbnail", "viewsCount", "title", "channelTitle", "id"]);
</script>
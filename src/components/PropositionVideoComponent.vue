<template>
    <RouterLink :to="`/video/${id}`" class="w-full h-32 bg-white flex flex-row gap-4 p-2">
        <div class="w-1/3 h-full">
            <img :src="thumbnail" alt="thumbnail" class="w-full h-full object-cover rounded"/>
        </div>
        <div class="w-2/3 flex flex-col justify-between">
            <div>
                <p class="text-sm font-medium truncate">{{ title }}</p>
                <p class="text-xs text-gray-500">{{ channelTitle }}</p>
            </div>

        </div>
    </RouterLink>
</template>

<script setup>
    import { RouterLink } from 'vue-router';

    const props = defineProps(["thumbnail", "title", "channelTitle", "id"]);
</script>
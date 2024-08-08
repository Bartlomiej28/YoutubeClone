<script setup>
import { RouterLink } from 'vue-router';

const props = defineProps(["key","videoPhoto", "title", "author", "id"]);
</script>

<template>
  <RouterLink :to="`/video/${id}`" class="xl:w-1/5 lg:w-1/3 sm:w-1/2 w-full p-2">
    <img :src="videoPhoto" class="w-full h-auto" alt="video" />
    <div class="p-2">
      <h6 class="block overflow-hidden text-ellipsis whitespace-nowrap max-h-[2.5em] leading-5">
        <div>{{ title }}</div>
      </h6>
      <div>
        <span>{{ author }}</span>
      </div>
    </div>
  </RouterLink>
</template>
<template>
    <div class="full flex flex-col gap-4">
        <PropositionVideoComponent
            v-for="video in videos"
            :key="video.id"
            :id="video.id"
            :thumbnail="video.snippet.thumbnails.medium.url"
            :title="video.snippet.title"
            :channelTitle="video.snippet.channelTitle"
            :viewsCount="video.statistics.viewCount"
        />
    </div>
</template>

<script setup>
    import PropositionVideoComponent from './PropositionVideoComponent.vue';

    const props = defineProps(['videos']);
    console.log(props.videos)
</script>
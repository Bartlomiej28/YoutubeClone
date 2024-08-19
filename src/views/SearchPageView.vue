<template>
    <LoadingWindowComponent v-if="isLoading"/>
    <div v-else class="w-full min-h-screen h-auto flex flex-col gap-4 px-4 py-4">
        <PropositionVideoComponent 
            v-for="video in videos"
            :key="video.id.videoId"
            :id="video.id.videoId"
            :thumbnail="video.snippet.thumbnails.medium.url"
            :title="video.snippet.title"
            :channelTitle="video.snippet.channelTitle"
        />
    </div>

</template>

<script setup>
    import LoadingWindowComponent from '@/components/LoadingWindowComponent.vue';
import PropositionVideoComponent from '@/components/PropositionVideoComponent.vue';
    import { onMounted, ref } from 'vue';

    const searchKeyWord = window.location.href.split('/')[4]

    const apiKey = "AIzaSyDkxUFN5EobMKY6kA247KeHOqMwGOsT5h8";
    const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&statistics&maxResults=25&q=${searchKeyWord}&key=${apiKey}`;
                    

    const videos = ref({})
    const isLoading = ref(false)

    const getSeatchData = async() =>{
        try {
            isLoading.value = true
            const response = await fetch(url);
            const data = await response.json();
            videos.value = data.items;
        } catch (error) {
            console.log("Error fetching search data:", error);
        }finally{
            isLoading.value = false
        }
    };

    onMounted(async()=>{
        await getSeatchData();
    })
</script>
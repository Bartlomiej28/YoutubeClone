<template>
    <div class="w-full min-h-screen h-auto flex flex-col gap-4 px-4 py-4">
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
    import PropositionVideoComponent from '@/components/PropositionVideoComponent.vue';
    import SearchCardComponent from '@/components/SearchCardComponent.vue';
    import { onMounted, ref } from 'vue';

    const searchKeyWord = window.location.href.split('/')[4]
    console.log(searchKeyWord)

    const apiKey = "AIzaSyDkxUFN5EobMKY6kA247KeHOqMwGOsT5h8";
    const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&statistics&maxResults=25&q=${searchKeyWord}&key=${apiKey}`;
                    

    const videos = ref({})

    const getSeatchData = async() =>{
        try {
            const response = await fetch(url);
            const data = await response.json();
            videos.value = data.items;
            console.log(videos.value);
        } catch (error) {
            console.error("Error fetching search data:", error);
        }
    };

    onMounted(async()=>{
        await getSeatchData();
    })
</script>
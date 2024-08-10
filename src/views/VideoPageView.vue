<template>
    <div class="w-full min-h-screen h-auto flex flex-col gap-2 p-4 sm:p-0">
      
      
      
      <div class="h-screen  flex flex-col w-full">
        <div class="w-full h-4/5">
          <iframe :src="`https://www.youtube.com/embed/${videoID}`" class="w-full min-h-full" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="w-full h-auto p-4 text-xl font-bold">
          {{ movieData.title }}
        </div>
        <div class="w-full flex flex-row sm:flex-col gap-4 justify-between">
          <VideoAuthorComponent :channelTitle="channelTitle" :channelSubscriptions="channelSubscriptions" :channelID="movieData.channelId" :thumbnail="thumbnail"/>
          <VideoButtonsComponent :likes="movieStatistics.likeCount"/>
        </div>
      </div>
      
      <div class="w-full flex flex-col gap-2">
        <PropositionsComponent :videos="videos"/>
      </div>
      
    </div>
  </template>


<script setup>
    import { ref, onMounted } from 'vue';
    import VideoAuthorComponent from '@/components/VideoAuthorComponent.vue';
    import VideoButtonsComponent from '@/components/VideoButtonsComponent.vue';
    import PropositionsComponent from '@/components/PropositionsComponent.vue';

    const videoID = ref(window.location.href.split('/')[4]);
    

    const movieData = ref({});
    const movieStatistics = ref({});

    const apiKey = "AIzaSyDkxUFN5EobMKY6kA247KeHOqMwGOsT5h8";

    const getMovieData = async() =>{
        const url = `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${videoID.value}&key=${apiKey}`;
        try {
            const response = await fetch(url);
            const data = await response.json();
            movieData.value = data.items[0].snippet;
            movieStatistics.value = data.items[0].statistics
        } catch (error) {
            console.error("Error fetching video details:", error);
        }
    }

    const channelTitle = ref("")
    const channelSubscriptions = ref(0)
    const thumbnail = ref("")
    
    const getAuthorData = async()=>{
        const url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${movieData.value.channelId}&key=${apiKey}`
        try {
            const response = await fetch(url);
            const data = await response.json();
            channelTitle.value = data.items[0].snippet.title
            channelSubscriptions.value = data.items[0].statistics.subscriberCount

            
            thumbnail.value = data.items[0].snippet.thumbnails.default.url
            console.log(thumbnail.value)
            
        } catch (error) {
            console.error("Error fetching author details:", error);
        }
    }

    const videos = ref([])

    const getSimilarVideos = async () =>{
        const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&maxResults=20&chart=mostPopular&regionCode=US&videoCategoryId=${movieData.value.categoryId}&key=${apiKey}`;
                     
        try {
            const response = await fetch(url);
            const data = await response.json();
            videos.value = data.items
        } catch (error) {
            console.error("Error fetching videos:", error);
        }
    }

    onMounted(async () => {
        await getMovieData();
        await getAuthorData();
        await getSimilarVideos();
    });
/*
const {categoryId, channelId, channelTitle, description, title} = movieData.value;
*/
</script>
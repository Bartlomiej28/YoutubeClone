<template>
    <div class="h-[calc(100vh-50px)] float-left overflow-y-scroll w-[calc(100%-250px)] sm:w-full">
      <div class="flex flex-col">
        <div class="w-full min-h-[250px] h-auto bg-black">
          <div class="mt-8 mb-8 ml-16 text-white sm:mt-2 sm:mb-2 sm:ml-2">
            <p>YouTube Music</p>
            <h1 class="font-bold text-[35px]">Niższa cena Music Premium</h1>
            <h1 class="font-bold text-[35px]">dla rodzin</h1>
            <button class="mt-5 rounded-full py-2 px-5 bg-transparent text-blue-600 border-2 border-blue-600">
              Rozpocznij teraz
            </button>
          </div>
        </div>
        <div class="mt-12 sm:mt-4">
          <div class="mx-auto">
            <div class="flex flex-wrap justify-center">
              <VideoComponent
                v-for="video in videos"
                :key="video.id.videoId"
                :id="video.id.videoId"
                :videoPhoto="video.snippet.thumbnails.medium.url"
                :title="video.snippet.title"
                :author="video.snippet.channelTitle"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from "vue";
  import VideoComponent from "../components/VideoComponent.vue";
  
  const videos = ref([]);
  const apiKey = "AIzaSyDkxUFN5EobMKY6kA247KeHOqMwGOsT5h8";
  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&type=video&q=*&key=${apiKey}`;
              
  
  onMounted(async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data)
      videos.value = data.items;
      console.log(videos)
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
  });
  </script>
  
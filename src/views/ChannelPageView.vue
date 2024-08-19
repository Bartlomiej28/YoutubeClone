<template>
    <LoadingWindowComponent v-if="isLaoding"/>
    <div v-else class="w-full min-h-screen h-auto flex flex-col p-4">
        <div class="w-full flex flex-row sm:flex-col gap-4">
            <div class="w-1/3 h-full sm:w-full flex justify-center">
                <img :src="channelThumbnail" class="w-1/2 h-1/2 sm:w-1/2 sm:h-1/2 rounded-full object-cover object-center"/>
            </div>
            <div class="flex flex-col gap-2 w-2/3 sm:w-full">
                <p class="font-bold text-5xl w-full">{{channelData.title}}</p>
                <div class="flex flex-row gap-4 items-center">
                    <p>{{ channelStatistics.subscriberCount }} subskrybcji</p>
                    <i class='bx bx-minus bx-rotate-90 text-2xl' ></i>
                    <p>{{ channelStatistics.videoCount }} filmy</p>
                </div>
                <div class="flex flex-row gap-4">
                    <p class="truncate w-10/12">{{ channelData.description }}</p>
                    <button @click="handleShowModalWindow" class="w-2/12 font-bold cursor-pointer">Więcej</button>
                </div>
                <button @click="handleShowAlertWindow" class="px-4 py-2 text-white bg-black w-min sm:w-full h-min rounded-full">Subskrybuj</button>
            </div>
        </div>
        <div class="w-full h-auto flex flex-wrap justify-center">
            <VideoComponent v-for="video in videos"
                :id="video.id?.videoId"
                :videoPhoto="video.snippet.thumbnails.high.url"
                :title="video.snippet.title"
                :author="video.snippet.channelTitle"
            />
        </div>
        <ModalWindowComponent v-if="showModalWindow" :closeWindow="handleShowModalWindow" :description="channelData.description"/>
    </div>
</template>

<script setup>
    import { onMounted, ref } from 'vue';
    import VideoComponent from '@/components/VideoComponent.vue';
    import ModalWindowComponent from '@/components/ModalWindowComponent.vue';
    import { useRoute } from 'vue-router';
    import LoadingWindowComponent from '@/components/LoadingWindowComponent.vue';
    import store from '@/stores/modalWindow';

    const route = useRoute();
    const apiKey = "AIzaSyDkxUFN5EobMKY6kA247KeHOqMwGOsT5h8";
    
                
    const channelStatistics = ref({})
    const channelData = ref({})
    const channelThumbnail = ref("")
    console.log(route.params.id)

    const handleShowAlertWindow = () =>{
        store.show();
    }

    const getChannelData = async()=>{
        const url =`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${route.params.id}&key=${apiKey}`
        try {
            const resposne = await fetch(url);
            const data = await resposne.json();
            channelData.value = data.items[0].snippet
            channelThumbnail.value = data.items[0].snippet.thumbnails.default.url
            channelStatistics.value = data.items[0].statistics
            
        } catch (error) {
            console.log("Error fetching channel details:", error);
        }
    }

    const videos = ref([]);
    const isLaoding = ref(false)

    const getChannelVideos = async()=>{
        const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=${route.params.id}&type=video&maxResults=50&key=${apiKey}`
        try {
            isLaoding.value = true
            const resposne = await fetch(url);
            const data = await resposne.json();
            videos.value = data.items
            console.log(videos.value)
        } catch (error) {
            console.log("Error fetching channel videos:", error);
        }finally{
            isLaoding.value = false
        }
    }

    onMounted(async()=>{
        await getChannelData();
        await getChannelVideos();
    })

    const showModalWindow = ref(false)

    const handleShowModalWindow = () =>{
        showModalWindow.value = !showModalWindow.value;
    }
</script>
<template>
    <div class="float-left mt-2 w-full h-full overflow-y-scroll z-30">
      <div class="flex flex-col gap-0">
        <RouterLink
          to="/"
          class="flex items-center bg-transparent border-none w-[90%] mx-auto my-1.5 h-8 rounded-lg selected:bg-gray-300 selected:font-bold hover:bg-gray-200 px-4"
        >
          <div class="w-[50px] text-2xl">
            <i class="bx bxs-home"></i>
          </div>
          <div class="text-sm">
            Główna
          </div>
        </RouterLink>
  
        <button @click="handleShowModalWindow" class="flex items-center px-4 bg-transparent border-none w-[90%] mx-auto my-1.5 h-8 rounded-lg hover:bg-gray-200">
          <div class="w-[50px] text-2xl">
            <img :src="youtubeshorts" alt="Youtube Shorts" class="max-w-[20px] max-h-[20px]" />
          </div>
          <div class="text-sm">
            Shorts
          </div>
        </button>
  
        <button @click="handleShowModalWindow" class="flex items-center px-4 bg-transparent border-none w-[90%] mx-auto my-1.5 h-8 rounded-lg hover:bg-gray-200">
          <div class="w-[50px] text-2xl">
            <img :src="subscriptions" alt="Subscriptions" class="max-w-[20px] max-h-[20px]" />
          </div>
          <div class="text-sm">
            Subskrypcje
          </div>
        </button>
        <hr class="my-2" />

        <button @click="handleShowModalWindow" class="flex items-center px-4 bg-transparent border-none w-[90%] mx-auto my-1.5 h-8 rounded-lg hover:bg-gray-200">
          <div class="w-[50px] text-2xl">
            <img :src="library" alt="Library" class="max-w-[20px] max-h-[20px]" />
          </div>
          <div class="text-sm">
            Biblioteka
          </div>
        </button>
  
        <button @click="handleShowModalWindow" class="flex items-center gap-4 bg-transparent border-none w-[90%] mx-auto my-1.5 h-8 rounded-lg hover:bg-gray-200">
          <div class="w-[50px] text-2xl">
            <i class='bx bx-history'></i>
          </div>
          <div class="text-sm">
            Historia
          </div>
        </button>
        <hr class="my-2" />
        <p class="ml-5">Odkrywaj</p>
        <button @click="handleShowModalWindow" class="flex items-center px-4 bg-transparent border-none w-[90%] mx-auto my-1.5 h-8 rounded-lg hover:bg-gray-200">
          <div class="w-[50px] text-2xl">
            <img :src="fire" alt="Popular" class="max-w-[20px] max-h-[20px]" />
          </div>
          <div class="text-sm">
            Na czasie
          </div>
        </button>
  
        <button @click="handleShowModalWindow" class="flex items-center px-4 bg-transparent border-none w-[90%] mx-auto my-1.5 h-8 rounded-lg hover:bg-gray-200">
          <div class="w-[50px] text-2xl">
            <img :src="music" alt="Music" class="max-w-[20px] max-h-[20px]" />
          </div>
          <div class="text-sm">
            Muzyka
          </div>
        </button>
  
        <button @click="handleShowModalWindow" class="flex items-center px-4 bg-transparent border-none w-[90%] mx-auto my-1.5 h-8 rounded-lg hover:bg-gray-200">
          <div class="w-[50px] text-2xl">
            <img :src="movies" alt="Movies" class="max-w-[20px] max-h-[20px]" />
          </div>
          <div class="text-sm">
            Filmy
          </div>
        </button>
  
        <button @click="handleShowModalWindow" class="flex items-center px-4 bg-transparent border-none w-[90%] mx-auto my-1.5 h-8 rounded-lg hover:bg-gray-200">
          <div class="w-[50px] text-2xl">
            <img :src="live" alt="Live" class="max-w-[20px] max-h-[20px]" />
          </div>
          <div class="text-sm">
            Na żywo
          </div>
        </button>
  
        <button @click="handleShowModalWindow" class="flex items-center px-4 bg-transparent border-none w-[90%] mx-auto my-1.5 h-8 rounded-lg hover:bg-gray-200">
          <div class="w-[50px] text-2xl">
            <img :src="games" alt="Games" class="max-w-[20px] max-h-[20px]" />
          </div>
          <div class="text-sm">
            Gry
          </div>
        </button>
  
        <button @click="handleShowModalWindow" class="flex items-center px-4 bg-transparent border-none w-[90%] mx-auto my-1.5 h-8 rounded-lg hover:bg-gray-200">
          <div class="w-[50px] text-2xl">
            <img :src="news" alt="News" class="max-w-[20px] max-h-[20px]" />
          </div>
          <div class="text-sm">
            Wiadomości
          </div>
        </button>
  
        <button @click="handleShowModalWindow" class="flex items-center px-4 bg-transparent border-none w-[90%] mx-auto my-1.5 h-8 rounded-lg hover:bg-gray-200">
          <div class="w-[50px] text-2xl">
            <img :src="trophy" alt="Sport" class="max-w-[20px] max-h-[20px]" />
          </div>
          <div class="text-sm">
            Sport
          </div>
        </button>
        <hr class="my-2" />
        <button @click="handleShowModalWindow" class="flex items-center px-4 bg-transparent border-none w-[90%] mx-auto my-1.5 h-8 rounded-lg hover:bg-gray-200">
          <div class="w-[50px] text-2xl">
            <img :src="viewcanals" alt="View Channels" class="max-w-[20px] max-h-[20px]" />
          </div>
          <div class="text-sm">
            Przeglądaj kanały
          </div>
        </button>
        <hr class="my-2" />
        <p class="ml-5">Więcej z YouTube</p>
        <button @click="handleShowModalWindow" class="flex items-center px-4 bg-transparent border-none w-[90%] mx-auto my-1.5 h-8 rounded-lg hover:bg-gray-200">
          <div class="w-[50px] text-2xl">
            <img :src="youtubepremium" alt="Youtube Premium" class="max-w-[20px] max-h-[20px]" />
          </div>
          <div class="text-sm">
            YouTube Premium
          </div>
        </button>
  
        <button @click="handleShowModalWindow" class="flex items-center px-4 bg-transparent border-none w-[90%] mx-auto my-1.5 h-8 rounded-lg hover:bg-gray-200">
          <div class="w-[50px] text-2xl">
            <img :src="youtubemusic" alt="Youtube Music" class="max-w-[20px] max-h-[20px]" />
          </div>
          <div class="text-sm">
            YouTube Music
          </div>
        </button>
  
        <button @click="handleShowModalWindow" class="flex items-center px-4 bg-transparent border-none w-[90%] mx-auto my-1.5 h-8 rounded-lg hover:bg-gray-200">
          <div class="w-[50px] text-2xl">
            <img :src="youtubekids" alt="Youtube Kids" class="max-w-[20px] max-h-[20px]" />
          </div>
          <div class="text-sm">
            YouTube Kids
          </div>
        </button>
        <hr class="my-2" />
        <button @click="handleShowModalWindow" class="flex items-center px-4 bg-transparent border-none w-[90%] mx-auto my-1.5 h-8 rounded-lg hover:bg-gray-200">
          <div class="w-[50px] text-2xl">
            <img :src="settings" alt="Settings" class="max-w-[20px] max-h-[20px]" />
          </div>
          <div class="text-sm">
            Ustawienia
          </div>
        </button>
  
        <button @click="handleShowModalWindow" class="flex items-center px-4 bg-transparent border-none w-[90%] mx-auto my-1.5 h-8 rounded-lg hover:bg-gray-200">
          <div class="w-[50px] text-2xl">
            <img :src="raporthistory" alt="Raport history" class="max-w-[20px] max-h-[20px]" />
          </div>
          <div class="text-sm">
            Historia raportów
          </div>
        </button>
  
        <button @click="handleShowModalWindow" class="flex items-center px-4 bg-transparent border-none w-[90%] mx-auto my-1.5 h-8 rounded-lg hover:bg-gray-200">
          <div class="w-[50px] text-2xl">
            <img :src="help" alt="Help" class="max-w-[20px] max-h-[20px]" />
          </div>
          <div class="text-sm">
            Pomoc
          </div>
        </button>
  
        <button @click="handleShowModalWindow" class="flex items-center px-4 bg-transparent border-none w-[90%] mx-auto my-1.5 h-8 rounded-lg hover:bg-gray-200">
          <div class="w-[50px] text-2xl">
            <img :src="sendopinion" alt="Send Opinion" class="max-w-[20px] max-h-[20px]" />
          </div>
          <div class="text-sm">
            Prześlij opinię
          </div>
        </button>

        <button @click="handleShowModalWindow" class="flex items-center px-4 bg-transparent border-none w-[90%] mx-auto my-1.5 h-8 rounded-lg hover:bg-gray-200">
          <div class="w-[50px] text-2xl">
            <img :src="sendopinion" alt="Send Opinion" class="max-w-[20px] max-h-[20px]" />
          </div>
          <div class="text-sm">
            All rights reserved by Bartłomiej Boczyło
          </div>
        </button>


          
      </div>
    </div>
  </template>
  

<script setup>
  import { ref } from "vue";
  import { RouterLink } from "vue-router";
  import WarningModalWindowComponent from "./WarningModalWindowComponent.vue";
  
  import youtubeshorts from "../../public/youtube-shorts-logo-15251.png";
  import subscriptions from "../../public/icons8-subscription-24.png";
  import library from "../../public/icons8-gallery-24.png";
  import fire from "../../public/icons8-fire-alt-32.png";
  import music from "../../public/icons8-music-24.png";
  import movies from "../../public/icons8-clapperboard-48.png";
  import live from "../../public/icons8-youtube-live-24.png";
  import games from "../../public/icons8-game-controller-24.png";
  import news from "../../public/icons8-google-news-30.png";
  import trophy from "../../public/icons8-trophy-cup-50.png";
  import viewcanals from "../../public/icons8-add-50.png";
  import youtubepremium from "../../public/icons8-youtube-48.png";
  import youtubemusic from "../../public/icons8-youtube-music-48.png";
  import youtubekids from "../../public/icons8-youtubekids.png";
  import settings from "../../public/icons8-settings-24.png";
  import raporthistory from "../../public/icons8-flag-24.png";
  import help from "../../public/icons8-help-24.png";
  import sendopinion from "../../public/icons8-send-24.png";
  
  import store from "@/stores/modalWindow";

  
  const handleShowModalWindow = () => {
    store.show()
  };
</script>

<template>
  <div class="float-left mt-2 w-full h-auto z-30 mb-12">
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

      <button v-for="(button, index) in buttons" :key="index" @click="handleShowModalWindow" class="flex items-center px-4 bg-transparent border-none w-[90%] mx-auto my-1.5 h-8 rounded-lg hover:bg-gray-200">
        <div class="w-[50px] text-2xl">
          <img v-if="button.type === 'image'" :src="button.path" :alt="button.alt" class="max-w-[20px] max-h-[20px]" />
          <i v-else :class="`bx ${button.path}`"></i>
        </div>
        <div class="text-sm">
          {{ button.name }}
        </div>
      </button>

      

      <hr class="my-2" />

      <p class="ml-5">Odkrywaj</p>
      <button v-for="(button, index) in buttons2" :key="index" @click="handleShowModalWindow" class="flex items-center px-4 bg-transparent border-none w-[90%] mx-auto my-1.5 h-8 rounded-lg hover:bg-gray-200">
        <div class="w-[50px] text-2xl">
          <img v-if="button.type === 'image'" :src="button.path" :alt="button.alt" class="max-w-[20px] max-h-[20px]" />
          <i v-else :class="`bx ${button.path}`"></i>
        </div>
        <div class="text-sm">
          {{ button.name }}
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
      
      <button v-for="(button, index) in buttons3" :key="index" @click="handleShowModalWindow" class="flex items-center px-4 bg-transparent border-none w-[90%] mx-auto my-1.5 h-8 rounded-lg hover:bg-gray-200">
        <div class="w-[50px] text-2xl">
          <img v-if="button.type === 'image'" :src="button.path" :alt="button.alt" class="max-w-[20px] max-h-[20px]" />
          <i v-else :class="`bx ${button.path}`"></i>
        </div>
        <div class="text-sm">
          {{ button.name }}
        </div>
      </button>

      <hr class="my-2" />

      <button v-for="(button, index) in buttons4" :key="index" @click="handleShowModalWindow" class="flex items-center px-4 bg-transparent border-none w-[90%] mx-auto my-1.5 h-8 rounded-lg hover:bg-gray-200">
        <div class="w-[50px] text-2xl">
          <img v-if="button.type === 'image'" :src="button.path" :alt="button.alt" class="max-w-[20px] max-h-[20px]" />
          <i v-else :class="`bx ${button.path}`"></i>
        </div>
        <div class="text-sm">
          {{ button.name }}
        </div>
      </button>
      <p class="text-center text-sm">Copyright © 2024 - All right reserved by Bartłomiej Boczyło</p>
    </div>
  </div>
</template>


<script setup>

import { RouterLink } from "vue-router";
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

const buttons = [
  {
    name: 'Shorts',
    type: 'image',
    path: youtubeshorts,
    alt: 'Youtube Shorts'
  },
  {
    name: 'Subskrypcje',
    type: 'image',
    path: subscriptions,
    alt: 'Subscriptions'
  },
  {
    name: 'Biblioteka',
    type: 'image',
    path: library,
    alt: 'Library'
  },
  {
    name: 'Historia',
    type: 'icon',
    path: 'bx-history',
  },
]

const buttons2 = [
  {
    name: 'Na czasie',
    type: 'image',
    path: fire,
    alt: 'Popular'
  },
  {
    name: 'Muzyka',
    type: 'image',
    path: music,
    alt: 'Music'
  },
  {
    name: 'Filmy',
    type: 'image',
    path: movies,
    alt: 'Movies'
  },
  {
    name: 'Na żywo',
    type: 'image',
    path: live,
    alt: 'Live'
  },
  {
    name: 'Gry',
    type: 'image',
    path: games,
    alt: 'Games'
  },
  {
    name: 'Wiadomości',
    type: 'image',
    path: news,
    alt: 'News'
  },
  {
    name: 'Sport',
    type: 'image',
    path: trophy,
    alt: 'Sport'
  },
]

const buttons3 = [
  {
    name: 'YouTube Premium',
    type: 'image',
    path: youtubepremium,
    alt: 'YouTube Premium'
  },
  {
    name: 'YouTube Music',
    type: 'image',
    path: youtubemusic,
    alt: 'YouTube Music'
  },
  {
    name: 'YouTube Kids',
    type: 'image',
    path: youtubekids,
    alt: 'YouTube Kids'
  },
]

const buttons4 = [
  {
    name: 'Ustawienia',
    type: 'image',
    path: settings,
    alt: 'Settings'
  },
  {
    name: 'Historia raportów',
    type: 'image',
    path: raporthistory,
    alt: 'Raport history'
  },
  {
    name: 'Pomoc',
    type: 'image',
    path: help,
    alt: 'help'
  },
  {
    name: 'Wyślij opinię',
    type: 'image',
    path: sendopinion,
    alt: 'Send opinion'
  },
]

</script>
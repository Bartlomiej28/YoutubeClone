<template>
  <div class="flex h-screen">
    <div class="w-full h-12 fixed top-0 left-0 right-0 z-20">
      <NavbarComponent />
    </div>
    <div class="flex flex-row relative">
      <div class="fixed top-0 left-0 h-screen overflow-y-scroll w-[250px] z-10 mt-12 bg-white" v-if="sidebarStore.showSidebar">
        <SidebarComponent />
      </div>
      <div :class="routerViewClasses">
        <RouterView />
      </div>
    </div>
    <WarningModalWindowComponent v-if="store.showModalWindow"/>
  </div>
</template>

<script setup>
  import { computed } from 'vue';
  import SidebarComponent from "@/components/SidebarComponent.vue";
  import NavbarComponent from "@/components/NavbarComponent.vue";
  import WarningModalWindowComponent from "./components/WarningModalWindowComponent.vue";
  import store from "./stores/modalWindow";
  import sidebarStore from "./stores/sidebar";


  const routerViewClasses = computed(() => {
    return [
      'h-[calc(100vh-50px)]',
      'overflow-y-scroll',
      'flex-grow',
      'mt-12',
      'p-4',
      'fixed',
      'top-0',
      'right-0',
      'sm:w-full',
      'md:w-full',
      sidebarStore.showSidebar ? 'w-[calc(100vw-250px)]' : 'w-full'
    ];
  });
</script>

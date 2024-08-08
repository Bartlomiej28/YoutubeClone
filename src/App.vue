<template>
  <div class="flex h-screen">

    <div class="fixed top-0 left-0 h-full w-[250px] z-10 mt-14">
      <SidebarComponent />
    </div>

    <div class="flex flex-col flex-grow ml-[250px]">

      <div class="fixed top-0 left-0 right-0 z-20">
        <NavbarComponent />
      </div>

      <div class="flex-grow mt-12 p-4">
        <RouterView />
      </div>
    </div>
    <WarningModalWindowComponent v-if="store.showModalWindow"/>
  </div>
</template>

<script setup>
  import SidebarComponent from "@/components/SidebarComponent.vue";
  import NavbarComponent from "@/components/NavbarComponent.vue";
  import WarningModalWindowComponent from "./components/WarningModalWindowComponent.vue";
  import store from "./stores/counter";
</script>


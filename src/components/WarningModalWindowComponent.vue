<script setup>
    import store from '@/stores/modalWindow';
</script>

<template>
    <div class="w-full h-auto absolute top-4 flex justify-center z-40">
        <div class=" p-4 rounded-2xl bg-white border border-red-500 shadow-xl animate-bounce flex flex-row gap-4 items-center">
            <p>Ze względu na ograniczania YouTube API, ta funkcja jest niedostępna</p>
            <p @click="store.close()" class="cursor-pointer text-2xl"><i class='bx bx-x'></i></p>
        </div>      
    </div>
</template>



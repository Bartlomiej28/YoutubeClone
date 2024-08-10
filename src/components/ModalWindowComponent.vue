<template>
    <div class="w-full h-screen bg-black bg-opacity-50 fixed top-0 left-0 z-20 flex items-center justify-center">
        <div class="w-1/3 h-3/4 sm:w-10/12 bg-white rounded-2xl p-4">
            <div class="w-full flex flex-row justify-between">
                <p class="text-xl font-bold">Informacje</p>
                <p @click="props.closeWindow"><i class='bx bx-x text-2xl cursor-pointer'></i></p>
            </div>
            <div>
                {{ props.description }}
            </div>
        </div>
    </div>
</template>

<script setup>
    const props = defineProps(["closeWindow", "description"])
</script>
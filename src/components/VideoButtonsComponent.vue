<template>
    <div class="w-min px-4 py-2 flex flex-row gap-4">
        <div class="flex flex-row gap-2 bg-[#f2f2f2] rounded-full px-4 py-2">
            <button @click="handleShowModalWindow" class="flex flex-row gap-2 items-center border border-r-gray-400 border-t-0 border-l-0 border-b-0 pr-2">
                <i class='bx bx-like'></i><p>{{ props.likes / 1000 }}</p>
            </button>
            <button @click="handleShowModalWindow">
                <i class='bx bx-dislike' ></i>
            </button>
        </div>

        <button class="flex flex-row gap-2 bg-[#f2f2f2] rounded-full px-4 py-2 items-center">
            <i class='bx bx-share bx-flip-horizontal' ></i><p>Udostępnij</p>
        </button>

        <button @click="handleShowModalWindow" class="flex flex-row gap-2 bg-[#f2f2f2] rounded-full px-4 py-2 items-center">
            <i class='bx bx-library' ></i><p>Zapisz</p>
        </button>

        <button @click="handleShowModalWindow" class="flex flex-row gap-2 bg-[#f2f2f2] rounded-full px-4 py-2 items-center">
            <i class='bx bx-dots-horizontal-rounded' ></i>
        </button>
    </div>
</template>

<script setup>
    import store from '@/stores/counter';

    const props = defineProps(["likes"])

    const handleShowModalWindow =() =>{
        store.show();
    }

</script>

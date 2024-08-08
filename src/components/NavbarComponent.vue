
<template>
     <nav className="w-full h-12 px-2 flex items-center justify-between">
            <div className="flex items-center">
                <button className="w-10 h-10 rounded-full bg-white border-none flex justify-center items-center mr-4 hover:bg-gray-300 transition-all ease-linear duration-300">
                    <i className='bx bx-menu text-2xl'></i>
                </button>
                <div className="flex items-center font-bold text-lg tracking-tight">
                    <i className='bx bxl-youtube text-4xl ml-4 text-red-500'></i>
                    YouTube
                </div>
            </div>
            <div className="flex items-center">
                <div className="relative flex items-center">
                    <input type="text" v-model="keyWord" placeholder="Szukaj" className="w-[600px] md:w-[400px] sm:w-[300px] rounded-full py-1 px-4 h-11 mr-4 border border-gray-300 focus:outline-none" />
                    <button @click="handleSearch" className="absolute top-0 right-4 h-11 w-14 flex items-center justify-center rounded-r-full border border-gray-300">
                        <i className='bx bx-search'></i>
                    </button>
                    <div className="absolute top-3 right-24">
                        <i className='bx bxs-keyboard'></i>
                    </div>
                </div>
                <i className='bx bxs-microphone hidden sm:block'></i>
            </div>
            <div className="flex items-center">
                <button className="w-10 h-10 rounded-full bg-white border-none flex justify-center items-center mr-4 hover:bg-gray-300 transition-all ease-linear duration-300">
                    <i className='bx bx-dots-vertical-rounded text-2xl'></i>
                </button>
                <button className="flex items-center justify-center px-2 py-1 text-lightblue bg-white border border-gray-300 rounded-full">
                    <i className='bx bx-user-circle text-xl mr-1'></i>
                    <div className="hidden sm:block">Zaloguj się</div>
                </button>
            </div>
        </nav>
</template>

<script setup>
    import { useRouter } from 'vue-router';
    import { ref } from 'vue';

    const router = useRouter();
    const keyWord = ref('')

    const handleSearch = () =>{
        router.push(`/search/${keyWord.value}`);
    }
</script>

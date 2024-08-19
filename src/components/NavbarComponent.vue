
<template>
     <nav className="w-full h-full px-2 flex items-center justify-between">
            <div className="flex flex-row items-center gap-4 sm:gap-0 sm:justify-start">
                <button @click="handleShowSidebar" className="w-10 h-10 rounded-full bg-blue border-none flex justify-center items-center hover:bg-gray-300 transition-all ease-linear duration-300">
                    <i className='bx bx-menu text-2xl'></i>
                </button>
                <div @click="handleGoToHome" className="flex items-center font-bold text-lg cursor-pointer">
                    <i className='bx bxl-youtube text-4xl text-red-500'></i>
                    <p class="sm:hidden">YouTube</p>
                </div>
            </div>
            <div className="flex items-center sm:w-[90%] justify-center">
                <div className="relative flex items-center">
                    <input type="text" v-model="keyWord" placeholder="Szukaj" className="sm:w-[250px] md:w-[300px] lg:w-[400px] xl:w-[550px] w-[700px] rounded-full py-1 px-4 h-11 mr-4 border border-gray-300 focus:outline-none" />
                    <button @click="handleSearch" className="absolute top-0 right-4 h-11 w-14 flex items-center justify-center rounded-r-full border border-gray-300">
                        <i className='bx bx-search'></i>
                    </button>
                    <div className="absolute top-3 right-24">
                        <i className='bx bxs-keyboard'></i>
                    </div>
                </div>
            </div>
            <div className="flex items-center sm:hidden">

                <button @click="handleShowAlertWindow" className="flex items-center justify-center px-2 py-1 text-lightblue bg-white border border-gray-300 rounded-full">
                    <i className='bx bx-user-circle text-xl mr-1'></i>
                    <div>Zaloguj się</div>
                </button>
            </div>
        </nav>
</template>

<script setup>
    import { useRouter } from 'vue-router';
    import { ref } from 'vue';
    import sidebarStore from '@/stores/sidebar'
    import store from '@/stores/modalWindow';


    const router = useRouter();
    const keyWord = ref('')

    const handleSearch = () =>{
        router.push(`/search/${keyWord.value}`);
    }

    const handleGoToHome = () =>{
        router.push('/');
    }

    const handleShowAlertWindow = () =>{
        store.show();
    }

    const handleShowSidebar = () =>{
        sidebarStore.closeShowSidebar();
    }
</script>

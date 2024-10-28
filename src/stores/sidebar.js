import {reactive } from "vue";

const sidebarStore = reactive({
    showSidebar: screen.width > 769 ? true : false,
    closeShowSidebar(){
        this.showSidebar = !this.showSidebar
    }
})


export default sidebarStore
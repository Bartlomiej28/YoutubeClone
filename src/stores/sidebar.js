import { onMounted, reactive } from "vue";

const sidebarStore = reactive({
    showSidebar: screen.width > 639 ? true : false,
    closeShowSidebar(){
        this.showSidebar = !this.showSidebar
    }
})





export default sidebarStore
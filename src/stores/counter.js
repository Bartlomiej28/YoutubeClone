import { reactive } from "vue";

const store = reactive({
  showModalWindow: false,
  close(){
    this.showModalWindow = false
  },
  show(){
    this.showModalWindow = true
  }
})

export default store
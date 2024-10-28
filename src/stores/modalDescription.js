import { reactive } from "vue";

const ModalWindowDescriptionStore = reactive({
  showDescription: false,
  descriptionText: "",
  close(){
    this.showDescription = false
  },

  show(){
    this.showDescription = true
  },

  setDescriptionText(newDescriptionText){
    this.descriptionText = newDescriptionText;
  }
})

export default ModalWindowDescriptionStore
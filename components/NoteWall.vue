<template>
  <div :class="lgAndDown ? 'mobileNoteWallContainer' : 'desktopNoteWallContainer'">
    <SearchBar :class="lgAndUp ? 'extendedWidth' : null"></SearchBar>
    <AddNote></AddNote>
    <template v-for="{id,title,is_completed} in lightNotes" :key="id">
      <LightNote  :id="id"  :title="title" :completed="is_completed" :removeItem="removeItem" ></LightNote>
    </template>




<!--    <Note :title="'Visit my grandma'" :completed="false"-->
<!--          :content="'Remember to take the chess with me to play with her'" :date="new Date()"-->
<!--          :comments="['Talk about her grandsons','Do not talk about cars'] " :tags="['Family','Quality time']"></Note>-->

  </div>

</template>

<script>
import SearchBar from "@/components/SearchBar.vue";
import Note from "@/components/Note.vue"
import AddNote from "~/components/AddNote.vue";
import LightNote from "~/components/LightNote.vue";
import {useDisplay} from "vuetify";
import useGetLightNotes from "~/composables/useGetLightNotes";

export default {
  name: "NoteWall",
  components: {SearchBar, Note,AddNote,LightNote},
  setup() {
    const originalArray = ref([])
    const {lgAndDown, lgAndUp} = useDisplay()
    // const {lightNotes} = useGetLightNotes()
    // // // todo Comentar la linea de abajo
    const lightNotes = [{id:1,title:'hola',is_completed:0},{id:2,title:'hola',is_completed:1}]
    onMounted(() => {
      console.log('aqui');



      // console.log(originalArray);
      // console.log(lightNotes)
      // console.log(lightNotes.value)
      // console.log(lightNotes._value)
      // console.log(lightNotes.value._value)
      // console.log(lightNotes._rawValue)
      // console.log(originalArray.value)
      // originalArray.value = lightNotes
      // console.log(originalArray.value)
    });
    watch(
        () => lightNotes,
        (newVal) => {
          console.log('lightNotes updated:', newVal);
        }
    );
    const removeItem=(id)=>{
      console.log(lightNotes)
      console.log(lightNotes._rawValue)
      // lightNotes._value.splice(index, 1);
      const index = lightNotes._value.findIndex(note => note.id === id);
      if (index !== -1) {
        lightNotes._value.splice(index, 1);
      }
}
    return {lgAndDown, lgAndUp, lightNotes,removeItem}
  }
}
</script>

<style scoped>
.mobileNoteWallContainer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.desktopNoteWallContainer {
  margin: 16px 24px;
  overflow-y: auto;
  max-height: 95svh;
}

.extendedWidth {
  width: 500px;
}
</style>
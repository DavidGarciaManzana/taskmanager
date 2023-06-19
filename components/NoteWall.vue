<template>
  <div :class="lgAndDown ? 'mobileNoteWallContainer' : 'desktopNoteWallContainer'">
    <SearchBar :class="lgAndUp ? 'extendedWidth' : null"></SearchBar>
    <AddNote ></AddNote>
    <template v-for="note in lightNotes" :key="id">
      <div v-if="Object.keys(note).length < 5">
      <LightNote  :id="note.id" :title="note.title" :completed="note.is_completed" :removeItem="removeItem" :updateItem="updateItem"></LightNote>
      </div>
      <div v-else>
        <Note :title="note.title" :completed="note.is_completed" :content="note.description" :date="note.due_date" :comments="note.comments" :tags="note.tags" />
      </div>
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
  components: {SearchBar, Note, AddNote, LightNote},
  setup() {
    const {lgAndDown, lgAndUp} = useDisplay()
    const {lightNotes} = useGetLightNotes()
    // // // todo Comentar la linea de abajo
    // const lightNotes = [{id: 1, title: 'hola', is_completed: 0}, {id: 2, title: 'hola', is_completed: 1}]
    onMounted(() => {
      console.log('aqui');

    });
    watch(
        () => lightNotes,
        (newVal) => {
          console.log('lightNotes updated:', newVal);
        }
    );
    const removeItem = (id) => {
      console.log(lightNotes)
      console.log(lightNotes._rawValue)
      const index = lightNotes._value.findIndex(note => note.id === id);
      if (index !== -1) {
        lightNotes._value.splice(index, 1);
      }
    }
    const updateItem = (id,newNote)=>{
      const index = lightNotes._value.findIndex(note => note.id === id);
      if (index < 0 || index >= lightNotes._value.length) {
        throw new Error('Invalid index');
      }
      lightNotes._value[index] = newNote;
      console.log(lightNotes._value)
    }

    return {lgAndDown, lgAndUp, lightNotes, removeItem,updateItem}
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
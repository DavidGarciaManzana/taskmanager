<template>
  <div :class="lgAndDown ? 'mobileNoteWallContainer' : 'desktopNoteWallContainer'">
    <SearchBar :class="lgAndUp ? 'extendedWidth' : null"></SearchBar>
    <AddNote :addItem="addItem" ></AddNote>
    <template v-for="note in lightNotes" :key="note.id">
      <div v-if="Object.keys(note).length < 5">
      <LightNote  :id="note.id" :title="note.title" :completed="note.is_completed" :removeItem="removeItem" :updateItem="updateItem"></LightNote>
      </div>
      <div v-else>
        <Note :id="note.id" :title="note.title" :completed="note.is_completed" :content="note.description" :date="note.due_date" :comments="note.comments" :tags="note.tags" :removeItem="removeItem" />
      </div>
    </template>



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
    console.log(lightNotes)
    // // // todo Comentar la linea de abajo
    // const lightNotes = [{id: 1, title: 'hola', is_completed: 0}, {id: 2, title: 'hola', is_completed: 1}]


    const removeItem = (id) => {
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
    }
    const addItem =(newNote)=>{
      lightNotes._value.push(newNote)
    }

    return {lgAndDown, lgAndUp, lightNotes, removeItem,updateItem,addItem}
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
<template>
  <div :class="lgAndDown ? 'mobileNoteWallContainer' : 'desktopNoteWallContainer'">
    <SearchBar :class="lgAndUp ? 'extendedWidth' : null"></SearchBar>

    <AddNote></AddNote>
    <template v-for="{id,title,is_completed} in lightNotes" :key="id">
      <LightNote  :title="title" :completed="is_completed"></LightNote>
    </template>



<!--    <Note :title="'Wash my car'" :completed="true" :content="'Leave it clean and maybe later pulish it'"-->
<!--          :date="new Date()" :comments="['Go to marks place to wash it','Not pay more than 100'] "-->
<!--          :tags="['Car','Chores']"></Note>-->
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
    const {lgAndDown, lgAndUp} = useDisplay()
    const {lightNotes} = useGetLightNotes()
    // // todo Comentar la linea de abajo
    // const answer = 0

    return {lgAndDown, lgAndUp, lightNotes}
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
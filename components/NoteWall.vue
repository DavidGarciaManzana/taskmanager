<template>
  <div :class="responsiveClass('mobileNoteWallContainer','desktopNoteWallContainer')">
    <SearchBar ></SearchBar>
    <Note :title="'Wash my car'" :completed="true"   :content="'Leave it clean and maybe later pulish it'" :date="new Date()" :comments="['Go to marks place to wash it','Not pay more than 100'] " :tags="['Car','Chores']" ></Note>
    <Note :title="'Visit my grandma'" :completed="false"   :content="'Remember to take the chess with me to play with her'" :date="new Date()" :comments="['Talk about her grandsons','Do not talk about cars'] " :tags="['Family','Quality time']" ></Note>
    <Note :title="'Take out the dog'" :completed="true"   :content="'Visit my neigbhor Laura while I do it'" :date="new Date()" :comments="['Invite Laura to next week party','Do not let the dog to eat trash'] " :tags="['Dog','Love']" ></Note>
    <Note :title="'Take out the dog'" :completed="false"   :content="'Visit my neigbhor Laura while I do it'" :date="new Date()" :comments="[] " :tags="['Dog','Love']" ></Note>
  </div>

</template>

<script>
import SearchBar from "@/components/SearchBar.vue";
import Note from "@/components/Note.vue"
import {useDisplay} from "vuetify";
export default {
  name: "NoteWall",
  components: {SearchBar,Note},
  setup() {
    const {smAndDown} = useDisplay()
    const responsiveClass =(mobileClass,desktopClass)=>{
      return smAndDown.value ? mobileClass : desktopClass;
    }
    return {smAndDown,responsiveClass}
  }
}
</script>

<style scoped>
.mobileNoteWallContainer{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.desktopNoteWallContainer{
  background: blue;
}
</style>
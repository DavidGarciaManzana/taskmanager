<template>
  <div :class="responsiveClass('mobileNoteWallContainer','desktopNoteWallContainer')">
    <SearchBar ></SearchBar>
  </div>

</template>

<script>
import SearchBar from "@/components/SearchBar.vue";
import {useDisplay} from "vuetify";
export default {
  name: "NoteWall",
  components: {SearchBar},
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
  background: red;
}
.desktopNoteWallContainer{
  background: blue;
}
</style>
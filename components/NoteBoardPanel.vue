<template>
  <div :class="xlAndUp ? 'desktopContainer': null">
    <Menu v-if="xlAndUp"></Menu>
    <NoteWall></NoteWall>
  </div>

</template>

<script>
import NoteWall from "~/components/NoteWall.vue";
import Menu from "~/components/NoteWall.vue";
import {useDisplay} from 'vuetify'
export default {
  name: "NoteBoardPanel",
  components:{
    Menu,
    NoteWall
  },
  setup() {
    const {xlAndUp} = useDisplay()
    return {xlAndUp}
  }
}
</script>

<style scoped>
.desktopContainer{
  min-height: 100svh;
  display: flex;
  justify-content: center;
}
</style>
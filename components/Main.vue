<template>
  <MobileHeader v-if="smAndDown"/>
  <NoteWall></NoteWall>
</template>

<script>
import MobileHeader from "~/components/MobileHeader.vue";
import NoteWall from "~/components/NoteWall.vue";

import {useDisplay} from 'vuetify'

export default {
  name: "Main",
  components: {
    MobileHeader,
    NoteWall
  },
//https://vuetifyjs.com/en/features/display-and-platform/#examples
  setup() {
    const {smAndDown} = useDisplay()
    return {smAndDown}
  }
}

</script>

<style scoped>

</style>
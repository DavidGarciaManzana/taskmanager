<template>
  <MobileHeader v-if="lgAndDown"/>
  <NoteBoardPanel></NoteBoardPanel>
</template>

<script>
import MobileHeader from "~/components/MobileHeader.vue";
import NoteBoardPanel from "~/components/NoteBoardPanel.vue";

import {useDisplay} from 'vuetify'

export default {
  name: "Main",
  components: {
    MobileHeader,
    NoteBoardPanel
  },
//https://vuetifyjs.com/en/features/display-and-platform/#examples
  setup() {
    const {xlAndDown,lgAndDown} = useDisplay()
    return {xlAndDown,lgAndDown}
  }
}

</script>

<style scoped>

</style>
<template>
  <MobileHeader v-if="viewPort <= 425"/>
</template>

<script>
import MobileHeader from "~/components/MobileHeader.vue";
import {computed} from 'vue'
import {useDisplay} from 'vuetify'

export default {
  name: "Main",
  components: {
    MobileHeader
  },
//https://vuetifyjs.com/en/features/display-and-platform/#examples
  setup() {
    const {name} = useDisplay()

    const viewPort = computed(() => {
      // name is reactive and
      // must use .value
      switch (name.value) {
        case 'xs':
          return 320
        case 'sm':
          return 375
        case 'md':
          return 425
        case 'lg':
          return 768
        case 'xl':
          return 1024
        case 'xxl':
          return 1440
      }

      return undefined
    })

    return {viewPort}
  }
}

</script>

<style scoped>

</style>
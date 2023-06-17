<template>
  <header class="d-flex justify-space-between align-center">
    <v-icon :size="height - 10" class="ma-5" icon="fa:fas fa-bars"></v-icon>
    <v-avatar :size="height" class="ma-5" color="surface-variant">
      <v-img class="profilePicture" src="david-pp.jpg"></v-img>
    </v-avatar>
  </header>
</template>

<script>
import {computed} from 'vue'
import {useDisplay} from 'vuetify'

export default {
  name: "MobileHeader",
  setup() {

    //https://vuetifyjs.com/en/features/display-and-platform/#examples
    const {name} = useDisplay()

    const height = computed(() => {
      // name is reactive and
      // must use .value
      switch (name.value) {
        case 'xs':
          return 50
        case 'sm':
          return 60
        case 'md':
          return 70
        case 'lg':
          return 120
        case 'xl':
          return 130
        case 'xxl':
          return 150
      }
      return undefined
    })
    const margin = computed(() => {
      switch (name.value) {
        case 'xs':
          return 2
        case 'sm':
          return 5
        case 'md':
          return 7
        case 'lg':
          return 10
      }
      return undefined
    })

    return {height, margin}
  },
}


</script>


<style scoped>
.profilePicture {
  top: 15%;
  transform: scale(1.7);
}

</style>
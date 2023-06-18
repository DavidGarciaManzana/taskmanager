<template>
  <v-card
      height="172"
      width="280"
      :class="[
          lgAndUp ? 'extendedWidth' : '',
  'container'
]"
  >
    <v-card-actions>
      <v-btn
          width="500px"
          height="172"
          @click="reveal = true"
      >
        <v-icon size="25" icon="fa:fas fa-plus"></v-icon>
      </v-btn>
    </v-card-actions>


  </v-card>
</template>

<script>
import {useDisplay} from "vuetify";

export default {
  name: "AddNote",
  setup() {
    const {lgAndUp} = useDisplay()

    return {lgAndUp}
  }
}
</script>

<style scoped>
.extendedWidth {
  min-width: 500px;
}

.container {
  margin-top: 28px;
  background-color: lightgrey;
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>
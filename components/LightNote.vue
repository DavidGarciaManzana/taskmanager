<template>
  <v-card
      width="280"
      :class="[
          lgAndUp ? 'extendedWidth' : '',
          completed ? 'completed' : null,
  'container'
]"
  >
    <v-card-text class="d-flex">
      <v-icon class="closeTask" size="25" icon="fa:far fa-window-close"></v-icon>
      <div class="taskContainer" >
        <v-icon @click="completed = 1" v-if="completed === 0"   size="20" icon="fa:far fa-circle"></v-icon>
        <v-icon @click="completed = 0" v-else  size="20" icon="fa:fas fa-circle"></v-icon>
        <h1   class="ml-5 text-h5 text--primary">
          {{ title }}
        </h1>
      </div>



    </v-card-text>
    <v-card-actions class="align-self-center">
      <v-btn
          variant="text"
          color="teal-accent-4"
          @click="reveal = true"
      >
        <v-icon size="25" icon="fa:fas fa-chevron-down"></v-icon>
      </v-btn>
    </v-card-actions>

  </v-card>
</template>

<script>
import {useDisplay} from "vuetify";

export default {
  name: "LightNote",
  props: {
    title: {
      type: String,
      required: true
    },
    completed: {
      type: Number,
      required: true
    }
  },
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
  display: flex;
  flex-direction: column;
  /*align-items: center;*/
}
.closeTask {
  position: absolute;
  top: 10px;
  right: 10px;
}
.taskContainer{
  display: flex;
  align-items: baseline;

}
.completed {
  text-decoration: line-through;
  background-color: darkgrey;
}

</style>
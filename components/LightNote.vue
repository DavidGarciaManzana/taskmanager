<template>
  <v-card
      width="280"
      :class="[
          lgAndUp ? 'extendedWidth' : '',
          isCompleted===1 ? 'completed' : null,
  'container'
]"
  >
    <v-card-text class="d-flex">
      <v-icon @click="handleDelete" class="closeTask" size="25" icon="fa:far fa-window-close"></v-icon>
      <div class="taskContainer">
<!--        todo Aqui puedo colocar esta funcionalidad (Marcar como completada la tarea), pero es necesario modificar como se llaman las APIS o crear un ENDPOINT especial-->
<!--        <v-icon @click="handleUpdate" v-if="isCompleted === 0" size="20" icon="fa:far fa-circle"></v-icon>-->
<!--        <v-icon @click="handleUpdate" v-else size="20" icon="fa:fas fa-circle"></v-icon>-->
        <div >
          <v-btn
              color="red-darken-2"
              @click="snackbar = true"
          >
            <v-icon size="15" icon="fa:fas fa-exclamation"></v-icon>
          </v-btn>

          <v-snackbar
              v-model="snackbar"
              multi-line
          >
            I wanted to add functionality to change the 'is_completed' status here, but it was impossible because using the 'PUT' method provided would delete all other information related to the task.


            <template v-slot:actions>
              <v-btn
                  color="red"
                  variant="text"
                  @click="snackbar = false"
              >
                Close
              </v-btn>
            </template>
          </v-snackbar>
        </div>
        <h1 class="ml-5 text-h6 text--primary">
          {{ title }}
        </h1>
      </div>


    </v-card-text>
    <v-card-actions class="align-self-center">
      <v-btn
          variant="text"
          color="teal-accent-4"
          @click="handleGetBigNote"
      >
        <v-icon class="chevron" size="25" icon="fa:fas fa-chevron-down"></v-icon>
      </v-btn>
    </v-card-actions>

  </v-card>
</template>

<script>
import {useDisplay} from "vuetify";
import useDeleteNotes from "~/composables/useDeleteNotes";
import useGetNote from "~/composables/useGetNote";
import usePutLightNotes from "~/composables/usePutLightNotes";

export default {
  name: "LightNote",
  props: {
    id: {
      type: Number,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    completed: {
      type: Number,
      required: true
    },
    removeItem: {
      type: Function,
      required: true
    }, updateItem: {
      type: Function,
      required: true
    }
  },
  setup({id, title, completed, removeItem,updateItem}) {
    const {lgAndUp} = useDisplay()
    const {updateLightNote} = usePutLightNotes()
    const {deleteNote} = useDeleteNotes(id)
    const {getNote} = useGetNote()
    const isLoading = ref(false)
    const isCompleted = ref(completed)
    const snackbar = ref(false);


    const handleUpdate = () => {
      isLoading.value = true
      try {

        updateLightNote(id, title, completed)
        isCompleted.value === 0 ? isCompleted.value = 1 : isCompleted.value = 0
        isLoading.value = false
      } catch (error) {
        isLoading.value = false
        console.log(error)
        window.alert('Something went wrong')
      }
    }

    const handleDelete = () => {
      isLoading.value = true
      try {
        deleteNote()
        removeItem(id);
        isLoading.value = false
      } catch (error) {
        isLoading.value = false
        console.log(error)
        window.alert('Something went wrong')
      }

    }
    const handleGetBigNote = async () => {
      try {
        if(id===undefined){
          window.alert('Please refresh the web page again, as the API is not consumed when creating a new task. Since we don\'t have the ID yet, we are unable to display all the information')
          return
        }
        let bigNote = await getNote(id);
        updateItem(id,bigNote._value[0])
      } catch (error) {
        isLoading.value = false
        console.log(error)
        window.alert('Something went wrong' + error)
      }

    }

    return {id,lgAndUp, handleUpdate, handleDelete, isCompleted, handleGetBigNote,snackbar}
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
}

.closeTask {
  position: absolute;
  top: 10px;
  right: 10px;
}

.taskContainer {
  display: flex;
  align-items: center;
  /*align-items: baseline;*/

}

.completed {
  background-color: darkgrey;
}

.completed .taskContainer {
  text-decoration: line-through;
}

.completed .chevron {
  color: white;
}

</style>
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
        <v-icon @click="handleUpdate" v-if="isCompleted === 0" size="20" icon="fa:far fa-circle"></v-icon>
        <v-icon @click="handleUpdate" v-else size="20" icon="fa:fas fa-circle"></v-icon>
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
import usePutNotes from "~/composables/usePutNotes";
import useDeleteNotes from "~/composables/useDeleteNotes";
import useGetNote from "~/composables/useGetNote";

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
    const {updateNote} = usePutNotes()
    const {deleteNote} = useDeleteNotes(id)
    const {getNote} = useGetNote(id)
    const isLoading = ref(false)
    const isCompleted = ref(completed)


    const handleUpdate = () => {
      isLoading.value = true
      try {
        updateNote(id, title, completed)
        console.log(isCompleted.value)
        isCompleted.value === 0 ? isCompleted.value = 1 : isCompleted.value = 0
        console.log(isCompleted.value)
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
        console.log(id)
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
        console.log(id)
        let bigNote = await getNote(id);
        updateItem(id,bigNote._value[0])
      } catch (error) {
        isLoading.value = false
        console.log(error)
        window.alert('Something went wrong' + error)
      }

    }

    return {lgAndUp, handleUpdate, handleDelete, isCompleted, handleGetBigNote}
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
  align-items: baseline;

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
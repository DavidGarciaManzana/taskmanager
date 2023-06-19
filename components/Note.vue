<template>
  <v-card
      width="280px"
      :class="[
          lgAndUp ? 'extendedWidth' : '',
  isCompleted===1 ? 'completed' : null,

]">
    <v-card-text>
      <div class="tags">
        <span class="tag">{{ tags }}</span>
      </div>
      <v-icon @click="handleDelete" class="closeTask" size="25" icon="fa:far fa-window-close"></v-icon>
      <h1 :class="isCompleted ? 'taskContainer' : null">
        {{ title }}
      </h1>
      <p :class="isCompleted ? 'taskContainer' : null">{{ content }}</p>
      <div class="iconsContainer">
        <v-icon @click="handleUpdate" v-if="isCompleted === 0" size="25" icon="fa:far fa-circle"></v-icon>
        <v-icon @click="handleUpdate" v-else size="25" icon="fa:fas fa-circle"></v-icon>
        <v-icon size="25" icon="fa:fas fa-calendar-alt"></v-icon>
        {{ date }}
        <v-card-actions>
          <v-btn
              variant="text"

              @click="reveal = true"
          >
            <v-icon size="25" icon="fa:far fa-comments"></v-icon>
            <p v-if="comments!==''" class="exclamation">1</p>
            <v-icon class="exclamation" color="red" v-if="comments!==''" size="15" icon="fa:fas fa-flag"></v-icon>
          </v-btn>
          <AddNote :id="id" :is-config="true"></AddNote>
        </v-card-actions>
      </div>
    </v-card-text>


    <v-expand-transition>
      <v-card
          v-if="reveal"
          class="v-card--reveal"
          style="height: 100%;"
      >
        <v-card-text class="pb-0">
          <p class="text-h4 text--primary">
            Comments
          </p>
          {{ comments }}
        </v-card-text>
        <v-card-actions class="pt-0">
          <v-btn
              variant="text"
              color="teal-accent-4"
              @click="reveal = false"
          >
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-expand-transition>


  </v-card>
</template>

<script>
import AddNote from "~/components/AddNote.vue";
import {ref} from 'vue'
import {useDisplay} from "vuetify";
import useDeleteNotes from "~/composables/useDeleteNotes";
import usePutLightNotes from "~/composables/usePutLightNotes";

export default {
  name: "Note",
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
    content: {
      type: String,
    },
    date: {
      type: Date,
    },
    comments: {
      type: String,
    },
    tags: {
      type: String,
    },
    removeItem: {
      type: Function,
      required: true
    },
  },
  components:{
  AddNote
  },
  setup({id, title, completed, content, date, comments, tags, removeItem}) {
    const {lgAndUp} = useDisplay()
    const {updateLightNote} = usePutLightNotes()
    const {deleteNote} = useDeleteNotes(id)
    const isLoading = ref(false)
    const isCompleted = ref(completed)
    const handleUpdate = () => {
      isLoading.value = true
      try {
        console.log(date)
        updateLightNote(id, title, completed, content, date, comments, tags)
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

    const reveal = ref(false)
    return {isCompleted, reveal, lgAndUp, handleUpdate, handleDelete}
  }
}
</script>

<style scoped>
.isNotCompleted {
  background: none;
  margin-top: 28px;
}

.completed {
  margin-top: 28px;
  background-color: darkgrey;
}

.completed .taskContainer {
  text-decoration: line-through;
}

.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}



.tags {
  display: flex;
  margin: 10px 0;
}

.tag {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4px 14px;

  /*position: absolute;*/
  min-width: 89px;
  height: 25px;
  left: 20px;
  top: 20px;

  background: rgba(47, 128, 237, 0.25);
  border-radius: 18px;

}

.iconsContainer {
  margin-top: 15px;
  display: flex;
  align-items: center;
}

.exclamation {
  position: relative;
  right: 7px;
  top: -13px;
}

.closeTask {
  position: absolute;
  top: 10px;
  right: 10px;
}

.extendedWidth {
  min-width: 500px;
}
</style>
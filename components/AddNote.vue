<template>

  <v-row justify="center">
    <v-dialog
        v-model="dialog"
        persistent
        width="1024"
    >

      <template v-if="!isConfig" v-slot:activator="{ props }">
        <v-card height="172" width="280" :class="[lgAndUp ? 'extendedWidth' : '','container']">
          <v-card-actions>
            <v-btn width="500px" height="172" v-bind="props">
              <v-icon size="25" icon="fa:fas fa-plus"></v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </template>
      <template v-else v-slot:activator="{ props }">
        <v-card   :class="[lgAndUp ? 'configExtendedWidth' : '','configContainer']">
          <v-card-actions>
            <v-btn  v-bind="props">
              <v-icon size="25" icon="fa:fas fa-cog"></v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </template>

      <form @submit.prevent="submitForm">
        <v-card>
          <v-card-title class="mt-5 ml-5">
            <span class="text-h5">Add new task</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col
                    cols="12"
                    sm="6"
                    md="4"
                >
                  <v-text-field
                      label="Title*"
                      required
                      hint="Please provide a title for your task"
                      v-model="title"
                  ></v-text-field>
                </v-col>
                <v-col
                    cols="12"
                    sm="6"
                    md="4"
                >
                  <v-checkbox v-model="is_completed" label="Completed*"></v-checkbox>
                </v-col>


                <v-col cols="12">
                  <v-text-field
                      label="Comments"
                      v-model="comments"
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                      label="Description"
                      v-model="description"
                  ></v-text-field>
                </v-col>

                <v-col
                    cols="12"
                    sm="6"
                >
                  <v-autocomplete
                      :items="['Personal', 'Work', 'Friends', 'Chores', 'Travel', 'Fitness', 'Shopping', 'Education', 'Coding']"
                      label="Tags"
                      multiple
                      v-model="tags"
                  ></v-autocomplete>
                </v-col>
                <v-col
                    cols="12"
                    sm="6"
                    md="4"
                    class="ml-1"
                >
                  <div class="d-flex flex-column">
                    <label for="due">
                      Due date
                    </label>
                    <input v-model="date" id="due" type="date"/>
                  </div>

                </v-col>
              </v-row>
            </v-container>
            <small>*indicates required field</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                color="blue-darken-1"
                variant="text"
                @click="dialog = false"
            >
              Close
            </v-btn>
            <v-btn
                color="blue-darken-1"
                variant="text"
                type="submit"
            >
              Submit
            </v-btn>
          </v-card-actions>
        </v-card>
      </form>
    </v-dialog>
  </v-row>

</template>

<script>
import {useDisplay} from "vuetify";
import usePostNotes from "~/composables/usePostNotes";
import usePutNotes from "~/composables/usePutNotes";

export default {
  props:{
    id:{
      type:Number,
      default: 0
    },
    isConfig:{
      type:Boolean,
      default: false
    }
  },
  name: "AddNote",
  setup({id,isConfig}) {
    const title = ref('')
    const is_completed = ref(false)
    const comments = ref('')
    const description = ref('')
    const tags = ref('')
    const date = ref('')
    const {postNotes} = usePostNotes()
    const {updateNote} = usePutNotes()
    const {lgAndUp} = useDisplay()
    const dialog = ref(false)


    const submitForm = () => {
      if (is_completed.value) {
        is_completed.value = 1
      } else {
        is_completed.value = 0
      }
      if (tags.value !== '') {
        tags.value = tags?.value.join(" ")
      }
      if (date.value !== '') {
        date.value = date?.value.toString()
      }
      // Si entra aqui hace el post
      if(!isConfig && id===0){
        try {
          postNotes(title.value, is_completed.value, date.value, comments.value, description.value, tags.value)
          dialog.value = false
        } catch (error) {
          window.alert('Something went wrong while trying to post ' + error)
        }
      }
      // Si entra aca hace el put
      else{
        try {
          console.log('Aqui para actualizar engrane')
          console.log(id)
          console.log(title.value)
          console.log(is_completed.value)
          console.log(date.value)
          console.log(comments.value)
          updateNote(id,title.value, is_completed.value, date.value, comments.value, description.value, tags.value)
          dialog.value = false
        } catch (error) {
          window.alert('Something went wrong while trying to update ' + error)
        }
      }

    }
    return {lgAndUp, dialog, title, is_completed, comments, description, tags, date, submitForm}
  }
}
</script>

<style scoped>
.extendedWidth {
  min-width: 500px;
}
.configExtendedWidth{
  min-width: 20px;
}

.container {
  margin-top: 28px;
  background-color: darkgrey;
  display: flex;
  justify-content: center;
  align-items: center;
}
.configContainer{
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>
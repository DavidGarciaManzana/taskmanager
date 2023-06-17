<template>
  <v-card
      width="280px"
      :class="[
          lgAndUp ? 'extendedWidth' : '',
  completed ? 'isCompleted' : 'isNotCompleted',

]">
    <v-card-text>
      <div class="tags">
        <span class="tag" v-for="tag in tags">{{ tag }}</span>
      </div>
      <v-icon class="closeTask" size="25" icon="fa:far fa-window-close"></v-icon>
      <h1 :class="completed ? 'textCrossed' : null">
        {{ title }}
      </h1>
      <p :class="completed ? 'textCrossed' : null">{{ content }}</p>
      <div class="iconsContainer">
        <v-icon @click="completed = true" v-show="!completed" size="25" icon="fa:far fa-circle"></v-icon>
        <v-icon @click="completed = false" v-show="completed" size="25" icon="fa:fas fa-circle"></v-icon>
        <v-icon size="25" icon="fa:fas fa-calendar-alt"></v-icon>
        {{
          date.toLocaleDateString("es-MX", {
            month: "short",
            day: "2-digit",
          })
        }}
        <v-card-actions>
          <v-btn
              variant="text"

              @click="reveal = true"
          >
            <v-icon size="25" icon="fa:far fa-comments"></v-icon>
            <p class="exclamation">{{ comments.length }}</p>
            <v-icon class="exclamation" color="red" v-if="comments.length>0" size="15" icon="fa:fas fa-flag"></v-icon>
          </v-btn>
          <v-btn
              variant="text"

              @click="reveal = true"
          >
            <v-icon size="25" icon="fa:fas fa-cog"></v-icon>
          </v-btn>
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
          <p v-for="(comment,index) in comments">{{ index + 1 }} {{ comment }}</p>
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
import {ref} from 'vue'
import {useDisplay} from "vuetify";

export default {
  name: "Note",
  props: {
    title: {
      type: String,
      required: true
    },
    completed: {
      type: Boolean,
      required: true
    },
    content: {
      type: String,
    },
    date: {
      type: Date,
    },
    comments: {
      type: Array,
    },
    tags: {
      type: Array,
    }
  },
  setup() {
    const {lgAndUp} = useDisplay()

    const reveal = ref(false)
    return {reveal, lgAndUp}
  }
}
</script>

<style scoped>
.isNotCompleted {
  background: none;
  margin-top: 28px;
}

.isCompleted {
  background: lightgrey;
  margin-top: 28px;
}

.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}

.textCrossed {
  text-decoration: line-through;
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
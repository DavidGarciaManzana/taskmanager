<template>
  <div class="menuContainer">
    <header class="menuHeader">
      <h1>Menu</h1>
      <v-icon size="25" icon="fa:fas fa-bars"></v-icon>


    </header>
    <main class="ml-6 mr-4">
      <!--      Tasks      -->
      <h2 class="mb-2">Tasks</h2>
      <div class="task">
        <v-icon class="mr-4" size="25" icon="fa:fas fa-angle-double-right"></v-icon>
        <p>Upcoming</p>
        <span class="number">12</span>
      </div>
      <div class="task">
        <v-icon class="mr-4" size="25" icon="fa:fas fa-sun"></v-icon>
        <p>Today</p>
        <span class="number">5</span>
      </div>
      <div class="task">
        <v-icon class="mr-4" size="25" icon="fa:fas fa-calendar-day"></v-icon>
        <p>Calendar</p>
      </div>
      <div class="task picked">
        <v-icon class="mr-4" size="25" icon="fa:fas fa-tasks"></v-icon>
        <p>Tasks</p>
      </div>
      <hr>
      <!--      Lists      -->
      <h2 class="mb-2">Lists</h2>
      <div class="task">
        <v-icon color="red" class="mr-4" size="25" icon="fa:fas fa-square"></v-icon>
        <p>Upcoming</p>
        <span class="number">3</span>
      </div>
      <div class="task">
        <v-icon color="blue" class="mr-4" size="25" icon="fa:fas fa-square"></v-icon>
        <p>Today</p>
        <span class="number">3</span>
      </div>
      <div class="task">
        <v-icon color="yellow" class="mr-4" size="25" icon="fa:fas fa-square"></v-icon>
        <p>Calendar</p>
        <span class="number">3</span>
      </div>
      <div class="task ">
        <v-icon class="mr-4" size="25" icon="fa:fas fa-plus"></v-icon>
        <p>Add New List</p>
      </div>
      <hr>
      <!--      Tags       -->
      <h2 class="task">Tags</h2>
      <div class="tags">
        <div style="background-color: lightskyblue" class="tag">
          <p>Tag 1</p>
          <span class="number">3</span>
        </div>
        <div style="background-color: lightpink" class="tag">
          <p>Tag 2</p>
          <span class="number">3</span>
        </div>
        <div style="background-color: darkgrey" class="tag ">
          <v-icon size="15" icon="fa:fas fa-plus"></v-icon>
          <span>Add Tag</span>
        </div>
      </div>

      <div class="final">
        <div class="finalButton">
          <v-icon class="mr-4" size="25" icon="fa:fas fa-cog"></v-icon>
          <p>Settings</p>

        </div>
        <div class="finalButton">
          <v-icon class="mr-4" size="25" icon="fa:fas fa-sign-out"></v-icon>
          <p>Sign out</p>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "Menu"
}
</script>

<style scoped>
.menuContainer {
  min-width: 400px;
  background-color: lightgrey;
  border-radius: 15px;
  margin: 15px 25px;
}

.menuHeader {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;

}

.task {
  display: flex;
  position: relative;
  margin-bottom: 15px;

}

.number {
  position: absolute;
  right: 0;
  margin-right: 15px;
}

.picked {
  background-color: darkgrey;
  padding: 10px;
}

.tags {
  display: flex;

}

.tag {
  display: flex;
  align-items: baseline;
  padding: 10px;
  border-radius: 15px;
  margin-right: 10px;
}
.final{
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
  /*margin-left: 15px;*/
}
.finalButton{
  display: flex;
  margin-bottom: 15px;
}
</style>
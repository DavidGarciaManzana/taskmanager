<template>
    <v-card
        color="grey-lighten-3"
        min-width="280"
        class="mt-1"
    >
      <v-card-text>
        <v-form
            v-model="form"
            @submit.prevent="onSubmit"
        >
        <v-text-field
            clearable
            :loading="loading"
            density="compact"
            variant="solo"
            label="Search"
            append-inner-icon="mdi-magnify"
            single-line
            hide-details
            @click:append-inner="onClick"
        ></v-text-field>
        </v-form>
      </v-card-text>
    </v-card>
</template>

<script>

export default {
  name: "SearchBar",
}
</script>

<style scoped>

</style>
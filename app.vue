<template>
  <div>
    <Main></Main>
  </div>
</template>


<script>
import Main from '@/components/Main.vue'
useSeoMeta({
  title: 'Nextline Task Manager by David',
  description: 'This is my first app using Vue, Nuxt and Vuetify',
})
export default {
  components: "Main"
}

</script>


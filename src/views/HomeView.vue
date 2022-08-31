<template>
  <v-app-bar
    color="primary"
    class="d-flex justify-center align-center"
  >
    <v-app-bar-title class="d-flex justify-center">URL Shorten</v-app-bar-title>
  </v-app-bar>
  <url-form></url-form>
</template>

<script setup>
// import { ref, computed, reactive, defineEmits, defineProps } from 'vue'
import UrlForm from '@/components/UrlForm.vue'

// defineEmits(['test'])
// defineProps({
//   title: String
// })

// function somar () {
//   objeto.value.key = objeto.value.key + 1
// }

// const counter = computed(() => {
//   return objeto.value.list.length
// })

// function acrescentar () {
//   const lastIndex = objeto.value.list.length - 1
//   objeto.value.list.push(objeto.value.list[lastIndex] + 1)
// }
// const objeto = ref({ key: 1, list: [1, 2, 3], count: counter })
// const input = ref(null)
// const fullName = reactive({ name: 'Eduardo', lastName: 'Lourenço' })

</script>

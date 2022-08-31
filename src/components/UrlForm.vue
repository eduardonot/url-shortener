<template>
  <v-container>
    <v-form>
      <v-col
        cols="12"
      >
        <v-text-field
          clearable
          v-model="url"
          label="Insert the URL"
          :rules="rules"
        />
        <div
          v-if="isUrlOpen"
          class="d-flex flex-column justify-center"
        >
          <v-icon icon="mdi-swap-vertical" class="d-flex align-self-center"></v-icon>
          <br>
          <v-text-field v-model="getShortenedUrl.short_url"></v-text-field>
        </div>
        <div
          class="d-flex justify-center"
        >
          <v-btn @click="shorten" color="primary" flat>Shorten</v-btn>
        </div>
      </v-col>
    </v-form>
  </v-container>
</template>
<script setup>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'

const rules = ref([
  value => !!value || 'Insert an URL',
  value => (value.slice(0, 8).toLowerCase() === 'https://' || value.slice(0, 7).toLowerCase() === 'http://') || 'Must be http or https'
])

const store = useStore()

function shorten () {
  if (url.value.slice(0, 7).toLowerCase() === 'http://' || url.value.slice(0, 8).toLowerCase() === 'https://') {
    store.dispatch('shorten', url.value)
      .then(() => { isUrlOpen.value = true })
      .catch(() => { isUrlOpen.value = false })
  }
}

const getShortenedUrl = computed(() => {
  return store.getters.getShortenedUrl
})
const url = ref('')
const isUrlOpen = ref(false)
</script>

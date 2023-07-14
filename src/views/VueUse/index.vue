<template>
  <button @click="clickedFn">
    Smash me!
  </button>

  <p>Button clicked: {{ clicked }}</p>
  <p>Event handler called: {{ updated }}</p>
</template>

<script setup>
import { ref } from 'vue'
import { useDebounceFn } from '@vueuse/core'

const updated = ref(0)
const clicked = ref(0)
const debouncedFn = useDebounceFn(() => {
  updated.value += 1
// }, 1000, { maxWait: 5000 })
}, 1000)

function clickedFn() {
  clicked.value += 1
  debouncedFn()
}
</script>
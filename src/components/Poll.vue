<template>
  <h3>Poll</h3>
  <span v-if="isPending">Loading...</span>
  <span v-else-if="isError">Error: {{ error.message }}</span>
  <ul v-else-if="data">
    <pre>{{ JSON.stringify(data, null, 2) }}</pre>
  </ul>
</template>

<script setup>
import { ref, onMounted, onUnmounted, onUpdated } from 'vue'
import { useQuery } from '@tanstack/vue-query'

var w = window.screen.width;

const width = () => {
  return window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth
    || 0;
}

const readNow = async () => await fetch('readNow?w=' + width()).then((response) => response.json())

const { isPending, isError, data, error } = useQuery({
  queryKey: ['poll'],
  queryFn: readNow,
  refetchInterval: 1111
})


onMounted(async () => {})

onUnmounted(() => {})

onUpdated(() => {})


</script>

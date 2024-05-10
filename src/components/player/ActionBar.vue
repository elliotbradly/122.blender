<template>
  <h3>Action Bar</h3>
  <span v-if="isPending">Loading...</span>
  <span v-else-if="isError">Error: {{ error.message }}</span>
  <ul v-else-if="data">
    <pre>{{ JSON.stringify(data, null, 2) }}</pre>
  </ul>
</template>

<script setup>
import { ref, onMounted, onUnmounted, onUpdated } from 'vue'
import { useQuery } from '@tanstack/vue-query'

const readStatus = async (idx) => {

  var auth = sessionStorage.getItem("key");
  if (auth == null) {
    auth = 'None'
    sessionStorage.setItem("key", auth);
  }
  await fetch('readStatus?idx=' + auth).then((response) => response.json())
}

const { isPending, isError, data, error } = useQuery({
  queryKey: ['status'],
  queryFn: readStatus
})


onMounted(async () => {
})

onUnmounted(() => { })

onUpdated(() => { })


</script>

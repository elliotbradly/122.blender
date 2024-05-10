<template>
  <q-card flat bordered class="my-card full-width " :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-grey-2'">

    <q-card-actions>
      <q-btn outline color="text-primary" class="full-width" @click="action()">Create New Title</q-btn>
    </q-card-actions>
  </q-card>

  <q-separator dark spaced="true" inset="true" size="100px" />
</template>
  
<script setup>

import { useRouter } from 'vue-router'

const router = useRouter()
var action = () => router.push('/title-new')

</script>
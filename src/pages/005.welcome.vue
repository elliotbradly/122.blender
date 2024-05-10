<template>
  <q-page class="q-gutter-sm">


    <h4>
      Welcome to Fictiq
    </h4>

    <h5>
      Let's get you set up and ready to play.
    </h5>

    <q-btn class="flat" color="secondary" label="Create New Game" outline size="l">
    </q-btn>

  </q-page>
</template>

<script setup>

import { ref, onMounted, onUnmounted, onUpdated, inject, getCurrentInstance } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useQuery } from '@tanstack/vue-query'

onMounted(async (props) => {



})

onUpdated(async () => {



})

onUnmounted(async () => {
})


</script>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TitleScreen'
})
</script>

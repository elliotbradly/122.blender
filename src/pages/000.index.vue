<template>
  <q-page class="q-gutter-sm">

    <div class="absolute-top-right">
      <q-btn outline label="" @click="action('login')" />
    </div>

    <div class="absolute-bottom-left">
      <q-btn outline label="" @click="action('admin')" />
    </div>

    <div class="q-pa-md absolute-center">

      <canvas id="renderCanvas" style="width: 720px; height: 480px;"></canvas>

    </div>

  </q-page>
</template>

<script setup>

import Status from '../components/Status.vue'
import Poll from '../components/Poll.vue'

import { ref, onMounted, onUnmounted, onUpdated, inject, getCurrentInstance } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useQuery } from '@tanstack/vue-query'
import { mount, update, unmount } from "../screens/horizontal-window"

const router = useRouter()

var action = (idx) => {
 router.push('/' + idx)
}


onMounted(async (props) => {

})

onUpdated(async () => {
  //update('on')
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

<template>
  <q-page class="q-gutter-sm">


    <div class="q-pa-md absolute-center">

      <canvas id="renderCanvas" style="width: 720px; height: 480px;"></canvas>

    </div>

    <div class="absolute-top-right">
      <q-btn outline label="index" @click="action('/')" />
    </div>

    <div class="absolute-bottom-left">
      <q-btn outline label="index" @click="action('/')" />
    </div>

    <div class="absolute-top-left">
      <q-btn outline label="index" @click="action('/')" />
    </div>

    <div class="absolute-bottom-right">
      <q-btn outline label="index" @click="action('/')" />
    </div>


  </q-page>
</template>

<script setup>

import { ref, onMounted, onUnmounted, onUpdated, inject, getCurrentInstance } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { mount, update, unmount } from "../example/pixi"

const router = useRouter()

var action = (idx) => {
  router.push('/' + idx)
}


onMounted(async (props) => {
  mount('renderCanvas')
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

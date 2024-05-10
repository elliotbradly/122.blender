<template>
  <q-page class="row justify-center text-center">

    <div class="q-pa-md">

      <iframe src="https://player.twitch.tv/?channel=glopratchet&parent=fictiq.com&muted=true" height="384" width="640"
        allowfullscreen>
      </iframe>

      <br>


      <div class="q-pa-md full-width">
    <q-card flat bordered class="my-card">
      <q-parallax
        src="https://cdn.quasar.dev/img/parallax1.jpg"
        :height="5"
      />

      <q-card-section calss class="bg-black text-white">
        <div class="text-subtitle2">current world time</div>
        <div class="text-h6">『 ➡️ ➡️ ➡️ ➡️ 』</div>
        <q-linear-progress :value="progress" color="warning" class="q-mt-sm" />
      </q-card-section>
    </q-card>
  </div>

      

      <q-btn-group style="position:relative; top:0px; left:0px"  push>

        <q-btn outline label="⬅️" @click="visitPage('map')" size="32px" />
        <q-btn outline label="⬆️" @click="visitPage('map')" size="32px" />
        <q-btn outline label="🖐️" @click="visitPage('map')" size="32px" />
        <q-btn outline label="⬇️" @click="visitPage('map')" size="32px" />
        <q-btn outline label="➡️" @click="visitPage('map')" size="32px" />

      </q-btn-group>

      <br>

      <iframe id="rpgmenu" src="https://alligatorfarm-biz.pages.dev/" height="640" width="640" style="overflow:hidden;" allowfullscreen>
      </iframe>

    </div>

  </q-page>
</template>

<script setup>

import Status from '../components/Status.vue'
import Poll from '../components/Poll.vue'

import { ref, onMounted, onUnmounted, onUpdated, inject, getCurrentInstance } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useQuery } from '@tanstack/vue-query'

import { mount, update, unmount } from "../composables/tiny-screen"



var progress = .5

var slide = ref('style');
var lorem = 'Lorem ipsum dolor, sit';

const router = useRouter()

var action = (idx) => {
  //router.push('/' + idx)
}




onMounted(async (props) => {


  //setTimeout(() => {
  //  router.push('/cut-scene')
  //}, 33);

  //mount('on')
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

<style></style>

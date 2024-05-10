 
<template>
  <q-page class=" window-height window-width row justify-center items-center q-pa-xl">

    <title-card></title-card>
    <title-card></title-card>
    <title-card></title-card>
    <title-card></title-card>
    <new-title-card></new-title-card>
    
  </q-page>

</template>


<script setup>

import TitleCard from '../components/TitleCard.vue'
import NewTitleCard from '../components/NewTitleCard.vue'

import { ref, onMounted, onUnmounted, onUpdated, inject, getCurrentInstance } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useQuery } from '@tanstack/vue-query'
import { mount, update, unmount } from "../screens/horizontal-window"

const router = useRouter()

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
  name: 'Title Screen'
})
</script>




<style>
.q-card {
  width: 360px;
}
</style>
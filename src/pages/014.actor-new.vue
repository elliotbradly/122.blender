 
<template>
  <q-page class=" window-height">

    <h6>Create New Actor</h6>

    <q-input outlined v-model="text" label="Title Name" />

    <q-separator color="black" spaced="true" inset="false" size="30px" />

    <q-btn outline color="text-primary" class="full-width" @click="action()">Create Now</q-btn>

  </q-page>
</template>

<script setup>

import { ref, onMounted, onUnmounted, onUpdated, inject, getCurrentInstance } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { reactive } from 'vue'

const text = ref('')
const router = useRouter()

var action = () => {


}


</script>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Title New Screen'
})
</script>


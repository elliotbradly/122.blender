<template>
  
  <div class="q-pa-md">
    <q-card class="my-card">
      <q-parallax
        src="https://cdn.quasar.dev/img/parallax1.jpg"
        :height="15"
      />

      <q-card-section>
        <div class="text-h6" @click="action('credits')" >T>A>S>U>S</div>

        <q-btn flat  color="primary" label="001.example" @click="action('example001')" />
        <q-btn flat  color="primary" label="002.example" @click="action('example002')" />
        
      </q-card-section>
    </q-card>
  </div>

  <q-space />

</template>

<script setup>

import { useRouter, useRoute } from 'vue-router'

const router = useRouter()

var action = (idx) => router.push('/' + idx)

</script>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IndexScreen'
})
</script>
<template>
  <q-page class="q-gutter-sm">

    <div class="">
      <canvas id="indexCanvas"> </canvas>
    </div>


    <q-btn-group spread>

      <q-btn size xl outline style="color: goldenrod; height: 150px;">
        <q-icon name="warning" color="warning" size="4rem" />
      </q-btn>
      <q-btn size xl outline style="color: goldenrod; height: 150px;">
        <q-icon name="warning" color="warning" size="4rem" />
      </q-btn>
      <q-btn size xl outline style="color: goldenrod; height: 150px;">
        <q-icon name="warning" color="warning" size="4rem" />
      </q-btn>
      <q-btn size xl outline style="color: goldenrod; height: 150px;">
        <q-icon name="warning" color="warning" size="4rem" />
      </q-btn>
      <q-btn size xl outline style="color: goldenrod; height: 150px;">
        <q-icon name="warning" color="warning" size="4rem" />
      </q-btn>

    </q-btn-group>


    <q-btn-group spread>

      <q-btn size xl outline style="color: goldenrod; height: 150px;">
        <q-icon name="warning" color="warning" size="4rem" />
      </q-btn>
      <q-btn size xl outline style="color: goldenrod; height: 150px;">
        <q-icon name="warning" color="warning" size="4rem" />
      </q-btn>
      <q-btn size xl outline style="color: goldenrod; height: 150px;">
        <q-icon name="warning" color="warning" size="4rem" />
      </q-btn>
      <q-btn size xl outline style="color: goldenrod; height: 150px;">
        <q-icon name="warning" color="warning" size="4rem" />
      </q-btn>
      <q-btn size xl outline style="color: goldenrod; height: 150px;">
        <q-icon name="warning" color="warning" size="4rem" />
      </q-btn>

    </q-btn-group>


    <q-btn-group spread>

      <q-btn size xl outline style="color: goldenrod; height: 150px;">
        <q-icon name="warning" color="warning" size="4rem" />
      </q-btn>
      <q-btn size xl outline style="color: goldenrod; height: 150px;">
        <q-icon name="warning" color="warning" size="4rem" />
      </q-btn>
      <q-btn size xl outline style="color: goldenrod; height: 150px;">
        <q-icon name="warning" color="warning" size="4rem" />
      </q-btn>
      <q-btn size xl outline style="color: goldenrod; height: 150px;">
        <q-icon name="warning" color="warning" size="4rem" />
      </q-btn>
      <q-btn size xl outline style="color: goldenrod; height: 150px;">
        <q-icon name="warning" color="warning" size="4rem" />
      </q-btn>

    </q-btn-group>





    <div class="">
      <Poll></Poll>
    </div>

    <div class="">
      <Status></Status>
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

onMounted(async (props) => {
  mount('on')
})

onUpdated(async () => {
  update('on')
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

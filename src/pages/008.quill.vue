
<template>
  <q-page class="q-pa-xl">


    <div id="editor">
  <p>Hello World!</p>
  <p>Some initial <strong>bold</strong> text</p>
  <p><br /></p>
</div>

  </q-page>
</template>


<script setup>

import { ref, onMounted, onUnmounted, onUpdated, inject, getCurrentInstance } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useQuery } from '@tanstack/vue-query'
import { mount, update, unmount } from "../screens/horizontal-window"

const QUILL = inject('QUILL')

onMounted(async (props) => {

  const quill = new QUILL('#editor', {
    theme: 'snow'
  });

  quill.setText( 'i guess so');

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


<style>

#editor {
  color: black;
  background-color:white;
  font-family: "montReg", "Courier New", monospace;
  font-size: 20px;
}


</style>

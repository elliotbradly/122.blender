
<template>

<div class="window-height window-width row justify-center items-center">

      <img class="item h2 w2" src="/img/000.png">
      <img class="item h2 w2" src="/img/001.png">
      <img class="item h2 w2" src="/img/002.png">
      <img class="item h2 w2" src="/img/003.png">
      <img class="item h2 w2" src="/img/004.png">
      <img class="item h2 w2" src="/img/005.png">
      <img class="item h2 w2" src="/img/006.png">
      <img class="item h2 w2" src="/img/007.png">
      <img class="item h2 w2" src="/img/008.png">
      <img class="item h2 w2" src="/img/009.png">
      <img class="item h2 w2" src="/img/010.png">
      <img class="item h2 w2" src="/img/011.png">
      <img class="item h2 w2" src="/img/012.png">
      <img class="item h2 w2" src="/img/001.png">
      <img class="item h2 w2" src="/img/002.png">
      <img class="item h2 w2" src="/img/003.png">
      <img class="item h2 w2" src="/img/001.png">
      <img class="item h2 w2" src="/img/002.png">
      <img class="item h2 w2" src="/img/003.png">
      <img class="item h2 w2" src="/img/001.png">
      <img class="item h2 w2" src="/img/002.png">
      <img class="item h2 w2" src="/img/003.png">


</div>



</template>

<script setup>
import { ref, onMounted, onUnmounted, onUpdated, inject, getCurrentInstance } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useQuery } from '@tanstack/vue-query'


import { mount, update, unmount } from "../composables/full-screen"
//import {mount, update, unmount } from "../composables/tiny-screen"

var postId = 6;
var isPending, isError, isFetching, data, error;

const fetcher = async (id) =>
  await fetch('https://jsonplaceholder.typicode.com/posts/${id}').then((response) =>
    response.json(),
  )




onMounted(async (props) => {



  var grid = document.querySelector('.grid');
var msnry = new Masonry( grid, {
  // options...
  itemSelector: '.item',
  columnWidth: 60
});

// init with selector
var msnry = new Masonry( '.grid', {
  // options...
});

msnry.layout()


  mount('on')





  //alert(window.electron.store.get('foo'));
})

onUpdated(async () => {
  // text content should be the same as current `count.value`

  update('on')


})

onUnmounted(async () => {

  //unmount('on')


})


</script>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'GamePlay'
})
</script>


<style>

* {
  box-sizing: border-box;
}

.container {
  background: #EEE;
  width: 50%;
  margin-bottom: 20px;
}

.item {
  width:  60px;
  height: 60px;
  float: left;
  border: 1px solid;
  background: #09F;
}

.item.w2 { width: 240px; }
.item.w3 { width: 180px; }
.item.w4 { width: 240px; }

.item.h2 { height: 240px; }
.item.h3 { height: 160px; }
.item.h4 { height: 220px; }
.item.h5 { height: 280px; }

.stamp {
  background: red;
  opacity: 0.75;
  position: absolute;
  border: 1px solid;
}
</style>

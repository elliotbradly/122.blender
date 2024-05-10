<template>
  <div class="q-pa-md q-gutter-sm">
    <q-btn style="background: #FF0080; color: white" label="Fuchsia" />
  </div>

  <div class="full-height row wrap justify-start items-start content-start">

    <span v-if="isPending">Loading...</span>
    <span v-else-if="isError">Error: {{ error.message }}</span>
    <!-- We can assume by this point that `isSuccess === true` -->


    <ul v-else-if="data">

      <pre>{{ JSON.stringify(data, null, 2) }}</pre>

    </ul>

    <canvas id="indexCanvas"> </canvas>

  </div>
</template>

<script setup>
import { ref, watch, watchEffect, onMounted, onUnmounted, onUpdated, inject, getCurrentInstance } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useQueryClient, useQuery, useMutation } from '@tanstack/vue-query'


import { mount, update, unmount } from "../display/world-map"

const fetcher = async (id) =>
  await fetch('readNow/').then((response) =>
    response.json(),
  )


  const cool = async (id) =>
  await fetch('cool/').then((response) =>
    response.json(),
  )


const { isPending, isError, data, error } = useQuery({
  queryKey: ['dat'],
  queryFn: fetcher,
  refetchInterval:1111
})

const coolQuery = useQuery({  queryFn: cool , refetchInterval:1111})
var coolData = coolQuery.data


const mutation = useMutation({
  mutationFn: fetcher,
  onSuccess: () => {
    // Invalidate and refetch
    queryClient.invalidateQueries({ queryKey: ['dat'] })
  },
})

watch( coolData, (newValue, oldValue) => {
  console.log(`Count changed from ${oldValue} to ${newValue}`);
});

watchEffect(() => {
  console.log(`DATA is: ` + JSON.stringify(data));
});

function onButtonClick() {
  mutation.mutate({
    id: Date.now(),
    title: 'Do Laundry',
  })
}



onMounted(async (props) => {


  setInterval(() => {

    console.log("mutate")

    mutation.mutate({})
  }, 1111);



  mount('on')

})

onUpdated(async () => {
  // text content should be the same as current `count.value`

  var postId = 6;



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



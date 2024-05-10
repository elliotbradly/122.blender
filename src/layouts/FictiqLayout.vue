
<template>
  <q-layout view="hHh lpR fFf">

    <q-header class="bg-primary text-accent bg-black headerCustomStyle">
      <q-toolbar class="q-gutter-sm">
        <q-toolbar-title>
          
          <span class="generis-font text-primary" style="position:relative; top:0px; left:0px">
            Fictiq
          </span>

        </q-toolbar-title>

        <div class="q-pa-md q-pr-m angle-font">
          <q-btn class="flat text-primary"  label="Connect" outline size="l">
          </q-btn>
        </div>

      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>


<style scoped>
.headerCustomStyle {
  height: 60px !important;
  display: flex;
  align-items: center !important;
}
</style>


<script setup>
import { ref, onMounted, onUnmounted, onUpdated, inject, getCurrentInstance } from 'vue'

import { useQuery } from "@tanstack/vue-query";


import * as ActMrk from '../888.market/00.market.unit/market.action'
import * as ActWal from '../888.market/01.wallet.unit/wallet.action'

var value = false

const MARKET = inject('MARKET')



const wallet = async (val, event) => {

  var bit = await MARKET['hunt'](ActWal.POLL_WALLET, {});

  var lst = bit.walBit.lst;

  if (lst.length != 0) {


    bit = await MARKET['hunt'](ActWal.OPEN_WALLET, { idx: lst[0] });
    var res = bit.mrkBit;
    console.log('wallet size ' + JSON.stringify(res))

  }


}

onMounted(async () => {




})

onUpdated(async () => { })

onUnmounted(async () => { })

</script>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MainLayout'
})
</script>




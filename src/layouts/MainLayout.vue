
<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-primary text-accent  glossy bg-black headerCustomStyle">
      <q-toolbar class="q-gutter-sm">
        <q-toolbar-title>
          <q-avatar style="position:relative; top:34px;">
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>
          
          <span class="generis-font text-primary" style="position:relative; top:37px; left:3px">
            Fiti
          </span>

          
          <span class="generis-font text-secondary" style="position:relative; top:37px; right:2px">
            Q
            
          </span>

          

          <br>

          <span class='pixily-font text-positive' style="position:relative; top:-20px; left:44px">
            
            Last deploy of

          </span>


          <br>

          <span class='pixily-font text-positive' style="position:relative; top:-18px; left:44px">

            12:06-12.19.23
            
          </span>

        </q-toolbar-title>



        <div class="q-pa-md q-pr-m angle-font">
          <q-btn-dropdown class="flat text-primary"  label="Connect" outline size="l">



            <div class="row no-wrap q-pa-md q-gutter-y-lg">
              <div class="column">
                <div class="text-h6 q-mb-md angle-font text-orange">Connect Wallet</div>


                <q-separator />

                <q-btn round @click="wallet(0, $event)">
                  <q-avatar size="32px">
                    <img src="/img/nami.png">
                  </q-avatar>
                </q-btn>

                <q-separator />

                <q-btn round @click="wallet(1, $event)">
                  <q-avatar size="32px">
                    <img src="/img/eternl.png">
                  </q-avatar>
                </q-btn>

              </div>

            </div>
          </q-btn-dropdown>
        </div>



        <div class="q-pa-md q-pr-m angle-font">
          <q-btn-dropdown class="flat text-accent"  label="Lore" outline size="l">
            <div class="row no-wrap q-pa-md">
              <div class="column">
                <div class="text-h6 q-mb-md">Settings</div>
                <q-toggle v-model="mobileData" label="Use Mobile Data" />
                <q-toggle v-model="bluetooth" label="Bluetooth" />
              </div>

              <q-separator vertical inset class="q-mx-lg" />

              <div class="column items-center">
                <q-avatar size="72px">
                  <img src="https://cdn.quasar.dev/img/boy-avatar.png">
                </q-avatar>

                <div class="text-subtitle1 q-mt-md q-mb-xs">John Doe</div>

                <q-btn color="primary" label="Logout" push size="sm" v-close-popup />
              </div>
            </div>
          </q-btn-dropdown>
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




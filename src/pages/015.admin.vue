 
<template>
  <q-page class=" window-height">

    <div class="fit row no-wrap justify-start items-start content-start">

      <div class="col-3" style="overflow: auto; min-width: 200px; max-width: 200px;">


        <q-card class="my-card" flat bordered>

          <q-separator color="primary" spaced="true" inset="false" size="15px" />
          <q-card-section>
            <div class="text-subtitle2">
              No Orb Present
            </div>
          </q-card-section>
          <q-separator color="primary" spaced="true" inset="false" size="15px" />
        </q-card>




        <q-btn outline color="text-primary" class="full-width absolute-bottom-left" @click="action('title')">
          View Orb
        </q-btn>

        <q-chip color="primary" text-color="white" class="absolute-bottom-left">
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/boy-avatar.png">
          </q-avatar>
          <div class="ellipsis">
            Member
            <q-tooltip> Member </q-tooltip>
          </div>
        </q-chip>

      </div>

      <div class="col-grow" style="overflow: auto;">


        <div class="fixed-center" style="min-width: 300px">

          <q-separator color="primary" spaced="true" inset="false" size="30px" />
          <q-input outlined v-model="text" label="Orb Name" />
          <q-separator color="primary" spaced="true" inset="false" size="30px" />

          <q-btn outline color="text-primary" class="full-width" @click="action('')">
            Create Orb
          </q-btn>

          <q-separator color="primary" spaced="true" inset="false" size="10px" />
          <q-btn outline color="text-primary" class="full-width" @click="action('')">
            Create Example Orb
          </q-btn>


        </div>


      </div>

      <div style="overflow: auto; min-width: 200px; max-width: 360px;">

        <div class="q-pa-md" style="max-width: 350px">
          <q-list padding bordered class="rounded-borders">
            <q-expansion-item dense dense-toggle expand-separator icon="perm_identity" label="Characters">
              <q-card>
                <q-card-section>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
                  commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
                  eveniet doloribus ullam aliquid.
                </q-card-section>
              </q-card>
            </q-expansion-item>

            <q-expansion-item dense dense-toggle expand-separator icon="signal_wifi_off" label="Players">
              <q-card>
                <q-card-section>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
                  commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
                  eveniet doloribus ullam aliquid.
                </q-card-section>
              </q-card>
            </q-expansion-item>

            <q-expansion-item dense dense-toggle expand-separator icon="drafts" label="Dialogue"
              header-class="text-primary">
              <q-card>
                <q-card-section>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
                  commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
                  eveniet doloribus ullam aliquid.
                </q-card-section>
              </q-card>
            </q-expansion-item>
          </q-list>
        </div>

      </div>

    </div>

  </q-page>
</template>

<script setup>

import { ref, onMounted, onUnmounted, onUpdated, inject, getCurrentInstance } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { reactive } from 'vue'

const text = ref('')
const router = useRouter()

var action = (idx) => {
  router.push('/' + idx)
}

</script>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Title New Screen'
})
</script>


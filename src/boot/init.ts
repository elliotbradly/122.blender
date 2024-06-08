import { boot } from 'quasar/wrappers'

import { VueQueryPlugin } from '@tanstack/vue-query'

import { useQuasar } from 'quasar'

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import * as ActPly from '../acts/play.action'

import { Dark } from 'quasar'

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async ( dat ) => {

  var win: any = window
  dat.app.provide('SHADE', win.SHADE)
  dat.app.provide('BLENDER', win.BLENDER)
  
  dat.app.provide('MQTT', win.MQTT)
  dat.app.provide('MARKET', win.MARKET)

  dat.app.provide('QUILL', win.Quill)

  dat.app.use(VueQueryPlugin)

  Dark.set(false)

  dat.app

  const prt = 8883;
  const local = 'mqtt://localhost:' + prt;
  const localBit = { idx: 'local', src: local };

  var bit = await win.SHADE.hunt( win.SHADE.ActShd.INIT_SHADE, { val: 0,  src: local });
  //var bit = await win.DEPTH.hunt( win.DEPTH.ActDep.INIT_DEPTH, { val: 0,  src: local });
  var bit = await win.BLENDER.hunt( win.BLENDER.ActBld.INIT_BLENDER, { val: 0,  src: local });



  //for local development
  //var bit = await win.SHADE.hunt( win.SHADE.ActShd.INIT_SHADE, { val: 0, dat: win.MQTT, src: local });

})

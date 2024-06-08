import { ref, onMounted, onUnmounted, onUpdated, inject, getCurrentInstance } from 'vue'

import * as ActEgn from '../122.blender/01.engine.unit/engine.action'

export type HelloWorld = string | number

export const mount = async (value: HelloWorld) => {
  console.log('sampleFunc:: ', value)

  const instance = getCurrentInstance();
  const BLENDER:any = inject('BLENDER')

  var bit = await BLENDER['hunt']( ActEgn.WRITE_ENGINE, { idx: "eng00", src: value, dat: {  h:1080, w:1080 } });
  instance?.proxy?.$forceUpdate();

  return value
}

export const update = async (value: HelloWorld) => {
  console.log('sampleFunc:: ', value)

  //const instance = getCurrentInstance();
  //const SHADE = inject('SHADE')

  //var bit = await SHADE['hunt'](ActVsg.REMOVE_VISAGE, { idx: "vsg00" })
  //bit = await SHADE['hunt'](ActVsg.MOUNT_VISAGE, { idx: "vsg00", src: "indexCanvas", dat: {  h: 1080 } })

  //bit = await SHADE['hunt'](ActVsg.READ_VISAGE, { idx: "vsg00" })

  //bit = await SHADE['hunt'](ActCan.WRITE_CONTAINER, { idx: "can00", src: 'vsg00' })
  //var container = bit.canBit.dat.bit

  //bit = await SHADE['hunt'](ActCan.SURFACE_CONTAINER, { idx: 'fce-can-00', src: "vsg00" });

  //bit = await SHADE['hunt'](ActCan.ADD_CONTAINER, { idx: "fce-can-00", dat: { bit: container } })
  return value
}

export const unmount = async (value: HelloWorld) => {
  
  //console.log('sampleFunc:: ', value)

  //const instance = getCurrentInstance();
  //const SHADE = inject('SHADE')

  //console.log("unmounted..")
  //var bit = await SHADE['hunt'](ActVsg.REMOVE_VISAGE, { idx: "vsg00" })

  return value
}

export type Shade<Type> = {
  hunt: Function;
} & Type


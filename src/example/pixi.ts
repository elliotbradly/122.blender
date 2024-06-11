import { ref, onMounted, onUnmounted, onUpdated, inject, getCurrentInstance } from 'vue'

import * as ActEgn from '../122.blender/01.engine.unit/engine.action'
import * as ActScn from '../122.blender/03.scene.unit/scene.action'
import * as ActCam from '../122.blender/04.camera.unit/camera.action'
import * as ActLgt from '../122.blender/05.light.unit/light.action'
import * as ActMsh from '../122.blender/06.mesh.unit/mesh.action'
import * as ActMku from '../122.blender/02.miku.unit/miku.action'
import * as ActPxi from '../122.blender/07.pixijs.unit/pixijs.action'

export type HelloWorld = string | number

var bit;

export const mount = async (value: HelloWorld) => {
  console.log('sampleFunc:: ', value)

  const instance = getCurrentInstance();
  const BLENDER:any = inject('BLENDER')

  bit = await BLENDER['hunt']( ActEgn.WRITE_ENGINE, { idx: "eng00", src: value, dat: {  h:1080, w:1080 } });
  bit = await BLENDER['hunt']( ActScn.WRITE_SCENE, { idx: "scn00", src: "eng00", dat: {} });

  bit = await BLENDER['hunt']( ActCam.WRITE_CAMERA, { idx: "cam00", src: "scn00", dat: {x:1, y:1, z:0} });
  bit = await BLENDER['hunt']( ActLgt.WRITE_LIGHT, { idx: "lgt00", src: "scn00", dat: {} });

  bit = await BLENDER['hunt']( ActMsh.WRITE_MESH, { idx: "msh01", src: "scn00", val:0, dat: {} });  
  bit = await BLENDER['hunt']( ActPxi.WRITE_PIXIJS, { idx: "pxi00", src: "scn00", dat: {} });

  
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

export type Blender<Type> = {
  hunt: Function;
} & Type


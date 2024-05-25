import { Action } from "../99.core/interface/action.interface";
import  BlenderBit  from "./fce/blender.bit";

// Blender actions

export const INIT_BLENDER = "[Blender action] Init Blender";
export class InitBlender implements Action {
 readonly type = INIT_BLENDER;
 constructor(public bale: BlenderBit) {}
}

export const UPDATE_BLENDER = "[Blender action] Update Blender";
export class UpdateBlender implements Action {
 readonly type = UPDATE_BLENDER;
 constructor(public bale: BlenderBit) {}
}

export const OPEN_BLENDER = "[Open action] Open Blender";
 export class OpenBlender implements Action {
 readonly type = OPEN_BLENDER;
 constructor(public bale: BlenderBit) {}
 }
 
export const DEV_BLENDER = "[Dev action] Dev Blender";
 export class DevBlender implements Action {
 readonly type = DEV_BLENDER;
 constructor(public bale: BlenderBit) {}
 }
 
export type Actions = | InitBlender | UpdateBlender 
| OpenBlender
| DevBlender
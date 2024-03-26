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
 
export const CLOSE_BLENDER = "[Close action] Close Blender";
 export class CloseBlender implements Action {
 readonly type = CLOSE_BLENDER;
 constructor(public bale: BlenderBit) {}
 }
 
export const RELOAD_BLENDER = "[Reload action] Reload Blender";
 export class ReloadBlender implements Action {
 readonly type = RELOAD_BLENDER;
 constructor(public bale: BlenderBit) {}
 }
 
export const WRITE_BLENDER = "[Write action] Write Blender";
 export class WriteBlender implements Action {
 readonly type = WRITE_BLENDER;
 constructor(public bale: BlenderBit) {}
 }
 
export type Actions = | InitBlender | UpdateBlender 
| OpenBlender
| CloseBlender
| ReloadBlender
| WriteBlender
import { Action } from "../99.core/interface/action.interface";
import  RpgstageBit  from "./fce/rpgstage.bit";

// Rpgstage actions

export const INIT_RPGSTAGE = "[Rpgstage action] Init Rpgstage";
export class InitRpgstage implements Action {
 readonly type = INIT_RPGSTAGE;
 constructor(public bale: RpgstageBit) {}
}

export const UPDATE_RPGSTAGE = "[Rpgstage action] Update Rpgstage";
export class UpdateRpgstage implements Action {
 readonly type = UPDATE_RPGSTAGE;
 constructor(public bale: RpgstageBit) {}
}

export const DEBUG_RPGSTAGE = "[Debug action] Debug Rpgstage";
 export class DebugRpgstage implements Action {
 readonly type = DEBUG_RPGSTAGE;
 constructor(public bale: RpgstageBit) {}
 }
 
export const SCENE_RPGSTAGE = "[Scene action] Scene Rpgstage";
 export class SceneRpgstage implements Action {
 readonly type = SCENE_RPGSTAGE;
 constructor(public bale: RpgstageBit) {}
 }
 
export type Actions = | InitRpgstage | UpdateRpgstage 
| DebugRpgstage
| SceneRpgstage
import { Action } from "../99.core/interface/action.interface";
import  RpgmapBit  from "./fce/rpgmap.bit";

// Rpgmap actions

export const INIT_RPGMAP = "[Rpgmap action] Init Rpgmap";
export class InitRpgmap implements Action {
 readonly type = INIT_RPGMAP;
 constructor(public bale: RpgmapBit) {}
}

export const UPDATE_RPGMAP = "[Rpgmap action] Update Rpgmap";
export class UpdateRpgmap implements Action {
 readonly type = UPDATE_RPGMAP;
 constructor(public bale: RpgmapBit) {}
}

export const READ_RPGMAP = "[Read action] Read Rpgmap";
 export class ReadRpgmap implements Action {
 readonly type = READ_RPGMAP;
 constructor(public bale: RpgmapBit) {}
 }
 
export const WRITE_RPGMAP = "[Write action] Write Rpgmap";
 export class WriteRpgmap implements Action {
 readonly type = WRITE_RPGMAP;
 constructor(public bale: RpgmapBit) {}
 }
 
export const REMOVE_RPGMAP = "[Remove action] Remove Rpgmap";
 export class RemoveRpgmap implements Action {
 readonly type = REMOVE_RPGMAP;
 constructor(public bale: RpgmapBit) {}
 }
 
export const DELETE_RPGMAP = "[Delete action] Delete Rpgmap";
 export class DeleteRpgmap implements Action {
 readonly type = DELETE_RPGMAP;
 constructor(public bale: RpgmapBit) {}
 }
 
export const CREATE_RPGMAP = "[Create action] Create Rpgmap";
 export class CreateRpgmap implements Action {
 readonly type = CREATE_RPGMAP;
 constructor(public bale: RpgmapBit) {}
 }
 
export type Actions = | InitRpgmap | UpdateRpgmap 
| ReadRpgmap
| WriteRpgmap
| RemoveRpgmap
| DeleteRpgmap
| CreateRpgmap
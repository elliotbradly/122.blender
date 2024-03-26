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

export type Actions = | InitRpgmap | UpdateRpgmap ;

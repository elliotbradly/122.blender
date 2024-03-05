import { Action } from "../99.core/interface/action.interface";
import  RpgactorBit  from "./fce/rpgactor.bit";

// Rpgactor actions

export const INIT_RPGACTOR = "[Rpgactor action] Init Rpgactor";
export class InitRpgactor implements Action {
 readonly type = INIT_RPGACTOR;
 constructor(public bale: RpgactorBit) {}
}

export const UPDATE_RPGACTOR = "[Rpgactor action] Update Rpgactor";
export class UpdateRpgactor implements Action {
 readonly type = UPDATE_RPGACTOR;
 constructor(public bale: RpgactorBit) {}
}

export type Actions = | InitRpgactor | UpdateRpgactor ;

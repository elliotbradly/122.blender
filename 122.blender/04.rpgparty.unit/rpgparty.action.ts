import { Action } from "../99.core/interface/action.interface";
import  RpgpartyBit  from "./fce/rpgparty.bit";

// Rpgparty actions

export const INIT_RPGPARTY = "[Rpgparty action] Init Rpgparty";
export class InitRpgparty implements Action {
 readonly type = INIT_RPGPARTY;
 constructor(public bale: RpgpartyBit) {}
}

export const UPDATE_RPGPARTY = "[Rpgparty action] Update Rpgparty";
export class UpdateRpgparty implements Action {
 readonly type = UPDATE_RPGPARTY;
 constructor(public bale: RpgpartyBit) {}
}

export type Actions = | InitRpgparty | UpdateRpgparty ;

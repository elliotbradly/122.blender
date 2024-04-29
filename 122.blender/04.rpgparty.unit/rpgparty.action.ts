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

export const READ_RPGPARTY = "[Read action] Read Rpgparty";
 export class ReadRpgparty implements Action {
 readonly type = READ_RPGPARTY;
 constructor(public bale: RpgpartyBit) {}
 }
 
export const WRITE_RPGPARTY = "[Write action] Write Rpgparty";
 export class WriteRpgparty implements Action {
 readonly type = WRITE_RPGPARTY;
 constructor(public bale: RpgpartyBit) {}
 }
 
export const REMOVE_RPGPARTY = "[Remove action] Remove Rpgparty";
 export class RemoveRpgparty implements Action {
 readonly type = REMOVE_RPGPARTY;
 constructor(public bale: RpgpartyBit) {}
 }
 
export const DELETE_RPGPARTY = "[Delete action] Delete Rpgparty";
 export class DeleteRpgparty implements Action {
 readonly type = DELETE_RPGPARTY;
 constructor(public bale: RpgpartyBit) {}
 }
 
export const CREATE_RPGPARTY = "[Create action] Create Rpgparty";
 export class CreateRpgparty implements Action {
 readonly type = CREATE_RPGPARTY;
 constructor(public bale: RpgpartyBit) {}
 }
 
export const SWITCH_RPGPARTY = "[Switch action] Switch Rpgparty";
 export class SwitchRpgparty implements Action {
 readonly type = SWITCH_RPGPARTY;
 constructor(public bale: RpgpartyBit) {}
 }
 
export const MOVE_RPGPARTY = "[Move action] Move Rpgparty";
 export class MoveRpgparty implements Action {
 readonly type = MOVE_RPGPARTY;
 constructor(public bale: RpgpartyBit) {}
 }
 
export type Actions = | InitRpgparty | UpdateRpgparty 
| ReadRpgparty
| WriteRpgparty
| RemoveRpgparty
| DeleteRpgparty
| CreateRpgparty
| SwitchRpgparty
| MoveRpgparty
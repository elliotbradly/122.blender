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

export const READ_RPGACTOR = "[Read action] Read Rpgactor";
 export class ReadRpgactor implements Action {
 readonly type = READ_RPGACTOR;
 constructor(public bale: RpgactorBit) {}
 }
 
export const WRITE_RPGACTOR = "[Write action] Write Rpgactor";
 export class WriteRpgactor implements Action {
 readonly type = WRITE_RPGACTOR;
 constructor(public bale: RpgactorBit) {}
 }
 
export const REMOVE_RPGACTOR = "[Remove action] Remove Rpgactor";
 export class RemoveRpgactor implements Action {
 readonly type = REMOVE_RPGACTOR;
 constructor(public bale: RpgactorBit) {}
 }
 
export const CREATE_RPGACTOR = "[Create action] Create Rpgactor";
 export class CreateRpgactor implements Action {
 readonly type = CREATE_RPGACTOR;
 constructor(public bale: RpgactorBit) {}
 }
 
export const DELETE_RPGACTOR = "[Delete action] Delete Rpgactor";
 export class DeleteRpgactor implements Action {
 readonly type = DELETE_RPGACTOR;
 constructor(public bale: RpgactorBit) {}
 }
 
export const LIST_RPGACTOR = "[List action] List Rpgactor";
 export class ListRpgactor implements Action {
 readonly type = LIST_RPGACTOR;
 constructor(public bale: RpgactorBit) {}
 }
 
export type Actions = | InitRpgactor | UpdateRpgactor 
| ReadRpgactor
| WriteRpgactor
| RemoveRpgactor
| CreateRpgactor
| DeleteRpgactor
| ListRpgactor
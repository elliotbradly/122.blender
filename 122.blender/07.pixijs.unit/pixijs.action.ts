import { Action } from "../99.core/interface/action.interface";
import  PixijsBit  from "./fce/pixijs.bit";

// Pixijs actions

export const INIT_PIXIJS = "[Pixijs action] Init Pixijs";
export class InitPixijs implements Action {
 readonly type = INIT_PIXIJS;
 constructor(public bale: PixijsBit) {}
}

export const UPDATE_PIXIJS = "[Pixijs action] Update Pixijs";
export class UpdatePixijs implements Action {
 readonly type = UPDATE_PIXIJS;
 constructor(public bale: PixijsBit) {}
}

export const READ_PIXIJS = "[Read action] Read Pixijs";
 export class ReadPixijs implements Action {
 readonly type = READ_PIXIJS;
 constructor(public bale: PixijsBit) {}
 }
 
export const WRITE_PIXIJS = "[Write action] Write Pixijs";
 export class WritePixijs implements Action {
 readonly type = WRITE_PIXIJS;
 constructor(public bale: PixijsBit) {}
 }
 
export const REMOVE_PIXIJS = "[Remove action] Remove Pixijs";
 export class RemovePixijs implements Action {
 readonly type = REMOVE_PIXIJS;
 constructor(public bale: PixijsBit) {}
 }
 
export const DELETE_PIXIJS = "[Delete action] Delete Pixijs";
 export class DeletePixijs implements Action {
 readonly type = DELETE_PIXIJS;
 constructor(public bale: PixijsBit) {}
 }
 
export const CREATE_PIXIJS = "[Create action] Create Pixijs";
 export class CreatePixijs implements Action {
 readonly type = CREATE_PIXIJS;
 constructor(public bale: PixijsBit) {}
 }
 
export type Actions = | InitPixijs | UpdatePixijs 
| ReadPixijs
| WritePixijs
| RemovePixijs
| DeletePixijs
| CreatePixijs
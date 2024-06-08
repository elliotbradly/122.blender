import { Action } from "../99.core/interface/action.interface";
import  EngineBit  from "./fce/engine.bit";

// Engine actions

export const INIT_ENGINE = "[Engine action] Init Engine";
export class InitEngine implements Action {
 readonly type = INIT_ENGINE;
 constructor(public bale: EngineBit) {}
}

export const UPDATE_ENGINE = "[Engine action] Update Engine";
export class UpdateEngine implements Action {
 readonly type = UPDATE_ENGINE;
 constructor(public bale: EngineBit) {}
}

export const READ_ENGINE = "[Read action] Read Engine";
 export class ReadEngine implements Action {
 readonly type = READ_ENGINE;
 constructor(public bale: EngineBit) {}
 }
 
export const WRITE_ENGINE = "[Write action] Write Engine";
 export class WriteEngine implements Action {
 readonly type = WRITE_ENGINE;
 constructor(public bale: EngineBit) {}
 }
 
export const REMOVE_ENGINE = "[Remove action] Remove Engine";
 export class RemoveEngine implements Action {
 readonly type = REMOVE_ENGINE;
 constructor(public bale: EngineBit) {}
 }
 
export const DELETE_ENGINE = "[Delete action] Delete Engine";
 export class DeleteEngine implements Action {
 readonly type = DELETE_ENGINE;
 constructor(public bale: EngineBit) {}
 }
 
export const CREATE_ENGINE = "[Create action] Create Engine";
 export class CreateEngine implements Action {
 readonly type = CREATE_ENGINE;
 constructor(public bale: EngineBit) {}
 }
 
export type Actions = | InitEngine | UpdateEngine 
| ReadEngine
| WriteEngine
| RemoveEngine
| DeleteEngine
| CreateEngine
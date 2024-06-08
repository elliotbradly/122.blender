import { Action } from "../99.core/interface/action.interface";
import  SceneBit  from "./fce/scene.bit";

// Scene actions

export const INIT_SCENE = "[Scene action] Init Scene";
export class InitScene implements Action {
 readonly type = INIT_SCENE;
 constructor(public bale: SceneBit) {}
}

export const UPDATE_SCENE = "[Scene action] Update Scene";
export class UpdateScene implements Action {
 readonly type = UPDATE_SCENE;
 constructor(public bale: SceneBit) {}
}

export const READ_SCENE = "[Read action] Read Scene";
 export class ReadScene implements Action {
 readonly type = READ_SCENE;
 constructor(public bale: SceneBit) {}
 }
 
export const WRITE_SCENE = "[Write action] Write Scene";
 export class WriteScene implements Action {
 readonly type = WRITE_SCENE;
 constructor(public bale: SceneBit) {}
 }
 
export const REMOVE_SCENE = "[Remove action] Remove Scene";
 export class RemoveScene implements Action {
 readonly type = REMOVE_SCENE;
 constructor(public bale: SceneBit) {}
 }
 
export const DELETE_SCENE = "[Delete action] Delete Scene";
 export class DeleteScene implements Action {
 readonly type = DELETE_SCENE;
 constructor(public bale: SceneBit) {}
 }
 
export const CREATE_SCENE = "[Create action] Create Scene";
 export class CreateScene implements Action {
 readonly type = CREATE_SCENE;
 constructor(public bale: SceneBit) {}
 }
 
export type Actions = | InitScene | UpdateScene 
| ReadScene
| WriteScene
| RemoveScene
| DeleteScene
| CreateScene
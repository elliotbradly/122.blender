import { Action } from "../99.core/interface/action.interface";
import  MeshBit  from "./fce/mesh.bit";

// Mesh actions

export const INIT_MESH = "[Mesh action] Init Mesh";
export class InitMesh implements Action {
 readonly type = INIT_MESH;
 constructor(public bale: MeshBit) {}
}

export const UPDATE_MESH = "[Mesh action] Update Mesh";
export class UpdateMesh implements Action {
 readonly type = UPDATE_MESH;
 constructor(public bale: MeshBit) {}
}

export const READ_MESH = "[Read action] Read Mesh";
 export class ReadMesh implements Action {
 readonly type = READ_MESH;
 constructor(public bale: MeshBit) {}
 }
 
export const WRITE_MESH = "[Write action] Write Mesh";
 export class WriteMesh implements Action {
 readonly type = WRITE_MESH;
 constructor(public bale: MeshBit) {}
 }
 
export const REMOVE_MESH = "[Remove action] Remove Mesh";
 export class RemoveMesh implements Action {
 readonly type = REMOVE_MESH;
 constructor(public bale: MeshBit) {}
 }
 
export const DELETE_MESH = "[Delete action] Delete Mesh";
 export class DeleteMesh implements Action {
 readonly type = DELETE_MESH;
 constructor(public bale: MeshBit) {}
 }
 
export const CREATE_MESH = "[Create action] Create Mesh";
 export class CreateMesh implements Action {
 readonly type = CREATE_MESH;
 constructor(public bale: MeshBit) {}
 }
 
export type Actions = | InitMesh | UpdateMesh 
| ReadMesh
| WriteMesh
| RemoveMesh
| DeleteMesh
| CreateMesh
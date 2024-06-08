import * as clone from "clone-deep";
import * as Act from "./mesh.action";
import { MeshModel } from "./mesh.model";
import * as Buzz from "./mesh.buzzer";
import State from "../99.core/state";

export function reducer(model: MeshModel = new MeshModel(), act: Act.Actions,  state?: State ) {
 switch (act.type) {
 
 case Act.UPDATE_MESH:
 return Buzz.updateMesh(clone(model), act.bale, state);

 case Act.INIT_MESH:
 return Buzz.initMesh(clone(model), act.bale, state);

case Act.READ_MESH:
 return Buzz.readMesh(clone(model), act.bale, state);
 
case Act.WRITE_MESH:
 return Buzz.writeMesh(clone(model), act.bale, state);
 
case Act.REMOVE_MESH:
 return Buzz.removeMesh(clone(model), act.bale, state);
 
case Act.DELETE_MESH:
 return Buzz.deleteMesh(clone(model), act.bale, state);
 
case Act.CREATE_MESH:
 return Buzz.createMesh(clone(model), act.bale, state);
 
 default:
 return model;
 }
}

import * as clone from "clone-deep";
import * as Act from "./blender.action";
import { BlenderModel } from "./blender.model";
import * as Buzz from "./blender.buzzer";
import State from "../99.core/state";

export function reducer(model: BlenderModel = new BlenderModel(), act: Act.Actions,  state?: State ) {
 switch (act.type) {
 
 case Act.UPDATE_BLENDER:
 return Buzz.updateBlender(clone(model), act.bale, state);

 case Act.INIT_BLENDER:
 return Buzz.initBlender(clone(model), act.bale, state);

 default:
 return model;
 }
}

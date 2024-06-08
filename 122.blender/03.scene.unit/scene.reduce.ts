import * as clone from "clone-deep";
import * as Act from "./scene.action";
import { SceneModel } from "./scene.model";
import * as Buzz from "./scene.buzzer";
import State from "../99.core/state";

export function reducer(model: SceneModel = new SceneModel(), act: Act.Actions,  state?: State ) {
 switch (act.type) {
 
 case Act.UPDATE_SCENE:
 return Buzz.updateScene(clone(model), act.bale, state);

 case Act.INIT_SCENE:
 return Buzz.initScene(clone(model), act.bale, state);

case Act.READ_SCENE:
 return Buzz.readScene(clone(model), act.bale, state);
 
case Act.WRITE_SCENE:
 return Buzz.writeScene(clone(model), act.bale, state);
 
case Act.REMOVE_SCENE:
 return Buzz.removeScene(clone(model), act.bale, state);
 
case Act.DELETE_SCENE:
 return Buzz.deleteScene(clone(model), act.bale, state);
 
case Act.CREATE_SCENE:
 return Buzz.createScene(clone(model), act.bale, state);
 
 default:
 return model;
 }
}

import * as clone from "clone-deep";
import * as Act from "./engine.action";
import { EngineModel } from "./engine.model";
import * as Buzz from "./engine.buzzer";
import State from "../99.core/state";

export function reducer(model: EngineModel = new EngineModel(), act: Act.Actions,  state?: State ) {
 switch (act.type) {
 
 case Act.UPDATE_ENGINE:
 return Buzz.updateEngine(clone(model), act.bale, state);

 case Act.INIT_ENGINE:
 return Buzz.initEngine(clone(model), act.bale, state);

case Act.READ_ENGINE:
 return Buzz.readEngine(clone(model), act.bale, state);
 
case Act.WRITE_ENGINE:
 return Buzz.writeEngine(clone(model), act.bale, state);
 
case Act.REMOVE_ENGINE:
 return Buzz.removeEngine(clone(model), act.bale, state);
 
case Act.DELETE_ENGINE:
 return Buzz.deleteEngine(clone(model), act.bale, state);
 
case Act.CREATE_ENGINE:
 return Buzz.createEngine(clone(model), act.bale, state);
 
 default:
 return model;
 }
}

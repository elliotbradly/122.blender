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

 default:
 return model;
 }
}

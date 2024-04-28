import * as clone from "clone-deep";
import * as Act from "./rpgstage.action";
import { RpgstageModel } from "./rpgstage.model";
import * as Buzz from "./rpgstage.buzzer";
import State from "../99.core/state";

export function reducer(model: RpgstageModel = new RpgstageModel(), act: Act.Actions,  state?: State ) {
 switch (act.type) {
 
 case Act.UPDATE_RPGSTAGE:
 return Buzz.updateRpgstage(clone(model), act.bale, state);

 case Act.INIT_RPGSTAGE:
 return Buzz.initRpgstage(clone(model), act.bale, state);

case Act.DEBUG_RPGSTAGE:
 return Buzz.debugRpgstage(clone(model), act.bale, state);
 
case Act.SCENE_RPGSTAGE:
 return Buzz.sceneRpgstage(clone(model), act.bale, state);
 
case Act.OPEN_RPGSTAGE:
 return Buzz.openRpgstage(clone(model), act.bale, state);
 
case Act.WRITE_RPGSTAGE:
 return Buzz.writeRpgstage(clone(model), act.bale, state);
 
case Act.TIME_RPGSTAGE:
 return Buzz.timeRpgstage(clone(model), act.bale, state);
 
 default:
 return model;
 }
}

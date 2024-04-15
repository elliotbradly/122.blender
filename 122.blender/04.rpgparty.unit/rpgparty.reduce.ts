import * as clone from "clone-deep";
import * as Act from "./rpgparty.action";
import { RpgpartyModel } from "./rpgparty.model";
import * as Buzz from "./rpgparty.buzzer";
import State from "../99.core/state";

export function reducer(model: RpgpartyModel = new RpgpartyModel(), act: Act.Actions,  state?: State ) {
 switch (act.type) {
 
 case Act.UPDATE_RPGPARTY:
 return Buzz.updateRpgparty(clone(model), act.bale, state);

 case Act.INIT_RPGPARTY:
 return Buzz.initRpgparty(clone(model), act.bale, state);

 default:
 return model;
 }
}

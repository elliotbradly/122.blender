import * as clone from "clone-deep";
import * as Act from "./rpgactor.action";
import { RpgactorModel } from "./rpgactor.model";
import * as Buzz from "./rpgactor.buzzer";
import State from "../99.core/state";

export function reducer(model: RpgactorModel = new RpgactorModel(), act: Act.Actions,  state?: State ) {
 switch (act.type) {
 
 case Act.UPDATE_RPGACTOR:
 return Buzz.updateRpgactor(clone(model), act.bale, state);

 case Act.INIT_RPGACTOR:
 return Buzz.initRpgactor(clone(model), act.bale, state);

 default:
 return model;
 }
}

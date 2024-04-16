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

case Act.READ_RPGACTOR:
 return Buzz.readRpgactor(clone(model), act.bale, state);
 
case Act.WRITE_RPGACTOR:
 return Buzz.writeRpgactor(clone(model), act.bale, state);
 
case Act.REMOVE_RPGACTOR:
 return Buzz.removeRpgactor(clone(model), act.bale, state);
 
case Act.CREATE_RPGACTOR:
 return Buzz.createRpgactor(clone(model), act.bale, state);
 
case Act.DELETE_RPGACTOR:
 return Buzz.deleteRpgactor(clone(model), act.bale, state);
 
case Act.LIST_RPGACTOR:
 return Buzz.listRpgactor(clone(model), act.bale, state);
 
 default:
 return model;
 }
}

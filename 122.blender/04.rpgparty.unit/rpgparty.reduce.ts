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

case Act.READ_RPGPARTY:
 return Buzz.readRpgparty(clone(model), act.bale, state);
 
case Act.WRITE_RPGPARTY:
 return Buzz.writeRpgparty(clone(model), act.bale, state);
 
case Act.REMOVE_RPGPARTY:
 return Buzz.removeRpgparty(clone(model), act.bale, state);
 
case Act.DELETE_RPGPARTY:
 return Buzz.deleteRpgparty(clone(model), act.bale, state);
 
case Act.CREATE_RPGPARTY:
 return Buzz.createRpgparty(clone(model), act.bale, state);
 
case Act.SWITCH_RPGPARTY:
 return Buzz.switchRpgparty(clone(model), act.bale, state);
 
case Act.MOVE_RPGPARTY:
 return Buzz.moveRpgparty(clone(model), act.bale, state);
 
 default:
 return model;
 }
}

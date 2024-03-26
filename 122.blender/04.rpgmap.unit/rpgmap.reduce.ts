import * as clone from "clone-deep";
import * as Act from "./rpgmap.action";
import { RpgmapModel } from "./rpgmap.model";
import * as Buzz from "./rpgmap.buzzer";
import State from "../99.core/state";

export function reducer(model: RpgmapModel = new RpgmapModel(), act: Act.Actions,  state?: State ) {
 switch (act.type) {
 
 case Act.UPDATE_RPGMAP:
 return Buzz.updateRpgmap(clone(model), act.bale, state);

 case Act.INIT_RPGMAP:
 return Buzz.initRpgmap(clone(model), act.bale, state);

 default:
 return model;
 }
}

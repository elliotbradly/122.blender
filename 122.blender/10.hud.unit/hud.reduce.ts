import * as clone from "clone-deep";
import * as Act from "./hud.action";
import { HudModel } from "./hud.model";
import * as Buzz from "./hud.buzzer";
import State from "../99.core/state";

export function reducer(model: HudModel = new HudModel(), act: Act.Actions,  state?: State ) {
 switch (act.type) {
 
 case Act.UPDATE_HUD:
 return Buzz.updateHud(clone(model), act.bale, state);

 case Act.INIT_HUD:
 return Buzz.initHud(clone(model), act.bale, state);

 default:
 return model;
 }
}

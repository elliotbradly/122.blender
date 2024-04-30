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

case Act.READ_HUD:
 return Buzz.readHud(clone(model), act.bale, state);
 
case Act.REMOVE_HUD:
 return Buzz.removeHud(clone(model), act.bale, state);
 
case Act.WRITE_HUD:
 return Buzz.writeHud(clone(model), act.bale, state);
 
case Act.DELETE_HUD:
 return Buzz.deleteHud(clone(model), act.bale, state);
 
case Act.CREATE_HUD:
 return Buzz.createHud(clone(model), act.bale, state);
 
case Act.FIN_HUD:
 return Buzz.finHud(clone(model), act.bale, state);
 
case Act.TWEEN_HUD:
 return Buzz.tweenHud(clone(model), act.bale, state);
 
 default:
 return model;
 }
}

import * as clone from "clone-deep";
import * as Act from "./pixijs.action";
import { PixijsModel } from "./pixijs.model";
import * as Buzz from "./pixijs.buzzer";
import State from "../99.core/state";

export function reducer(model: PixijsModel = new PixijsModel(), act: Act.Actions,  state?: State ) {
 switch (act.type) {
 
 case Act.UPDATE_PIXIJS:
 return Buzz.updatePixijs(clone(model), act.bale, state);

 case Act.INIT_PIXIJS:
 return Buzz.initPixijs(clone(model), act.bale, state);

case Act.READ_PIXIJS:
 return Buzz.readPixijs(clone(model), act.bale, state);
 
case Act.WRITE_PIXIJS:
 return Buzz.writePixijs(clone(model), act.bale, state);
 
case Act.REMOVE_PIXIJS:
 return Buzz.removePixijs(clone(model), act.bale, state);
 
case Act.DELETE_PIXIJS:
 return Buzz.deletePixijs(clone(model), act.bale, state);
 
case Act.CREATE_PIXIJS:
 return Buzz.createPixijs(clone(model), act.bale, state);
 
 default:
 return model;
 }
}

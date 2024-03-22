import * as clone from "clone-deep";
import * as Act from "./activity.action";
import { ActivityModel } from "./activity.model";
import * as Buzz from "./activity.buzzer";
import State from "../99.core/state";

export function reducer(model: ActivityModel = new ActivityModel(), act: Act.Actions,  state?: State ) {
 switch (act.type) {
 
 case Act.UPDATE_ACTIVITY:
 return Buzz.updateActivity(clone(model), act.bale, state);

 case Act.INIT_ACTIVITY:
 return Buzz.initActivity(clone(model), act.bale, state);

 default:
 return model;
 }
}

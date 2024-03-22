import { Action } from "../99.core/interface/action.interface";
import  ActivityBit  from "./fce/activity.bit";

// Activity actions

export const INIT_ACTIVITY = "[Activity action] Init Activity";
export class InitActivity implements Action {
 readonly type = INIT_ACTIVITY;
 constructor(public bale: ActivityBit) {}
}

export const UPDATE_ACTIVITY = "[Activity action] Update Activity";
export class UpdateActivity implements Action {
 readonly type = UPDATE_ACTIVITY;
 constructor(public bale: ActivityBit) {}
}

export type Actions = | InitActivity | UpdateActivity ;

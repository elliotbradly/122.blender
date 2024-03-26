import { Action } from "../99.core/interface/action.interface";
import  HudBit  from "./fce/hud.bit";

// Hud actions

export const INIT_HUD = "[Hud action] Init Hud";
export class InitHud implements Action {
 readonly type = INIT_HUD;
 constructor(public bale: HudBit) {}
}

export const UPDATE_HUD = "[Hud action] Update Hud";
export class UpdateHud implements Action {
 readonly type = UPDATE_HUD;
 constructor(public bale: HudBit) {}
}

export type Actions = | InitHud | UpdateHud ;

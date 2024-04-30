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

export const READ_HUD = "[Read action] Read Hud";
 export class ReadHud implements Action {
 readonly type = READ_HUD;
 constructor(public bale: HudBit) {}
 }
 
export const REMOVE_HUD = "[Remove action] Remove Hud";
 export class RemoveHud implements Action {
 readonly type = REMOVE_HUD;
 constructor(public bale: HudBit) {}
 }
 
export const WRITE_HUD = "[Write action] Write Hud";
 export class WriteHud implements Action {
 readonly type = WRITE_HUD;
 constructor(public bale: HudBit) {}
 }
 
export const DELETE_HUD = "[Delete action] Delete Hud";
 export class DeleteHud implements Action {
 readonly type = DELETE_HUD;
 constructor(public bale: HudBit) {}
 }
 
export const CREATE_HUD = "[Create action] Create Hud";
 export class CreateHud implements Action {
 readonly type = CREATE_HUD;
 constructor(public bale: HudBit) {}
 }
 
export const FIN_HUD = "[Fin action] Fin Hud";
 export class FinHud implements Action {
 readonly type = FIN_HUD;
 constructor(public bale: HudBit) {}
 }
 
export const TWEEN_HUD = "[Tween action] Tween Hud";
 export class TweenHud implements Action {
 readonly type = TWEEN_HUD;
 constructor(public bale: HudBit) {}
 }
 
export type Actions = | InitHud | UpdateHud 
| ReadHud
| RemoveHud
| WriteHud
| DeleteHud
| CreateHud
| FinHud
| TweenHud
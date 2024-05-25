import { Action } from "../99.core/interface/action.interface";
import  EngineBit  from "./fce/engine.bit";

// Engine actions

export const INIT_ENGINE = "[Engine action] Init Engine";
export class InitEngine implements Action {
 readonly type = INIT_ENGINE;
 constructor(public bale: EngineBit) {}
}

export const UPDATE_ENGINE = "[Engine action] Update Engine";
export class UpdateEngine implements Action {
 readonly type = UPDATE_ENGINE;
 constructor(public bale: EngineBit) {}
}

export type Actions = | InitEngine | UpdateEngine ;

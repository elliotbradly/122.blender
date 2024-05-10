import { Action } from "../99.core/interface/action.interface";
import  MarketBit  from "./fce/market.bit";

// Market actions

export const INIT_MARKET = "[Market action] Init Market";
export class InitMarket implements Action {
 readonly type = INIT_MARKET;
 constructor(public bale: MarketBit) {}
}

export const UPDATE_MARKET = "[Market action] Update Market";
export class UpdateMarket implements Action {
 readonly type = UPDATE_MARKET;
 constructor(public bale: MarketBit) {}
}

export const DEPLOY_MARKET = "[Deploy action] Deploy Market";
 export class DeployMarket implements Action {
 readonly type = DEPLOY_MARKET;
 constructor(public bale: MarketBit) {}
 }

export const OPEN_MARKET = "[Open action] Open Market";
 export class OpenMarket implements Action {
 readonly type = OPEN_MARKET;
 constructor(public bale: MarketBit) {}
 }

export const CREATE_MARKET = "[Create action] Create Market";
 export class CreateMarket implements Action {
 readonly type = CREATE_MARKET;
 constructor(public bale: MarketBit) {}
 }

export const TEST_MARKET = "[Test action] Test Market";
 export class TestMarket implements Action {
 readonly type = TEST_MARKET;
 constructor(public bale: MarketBit) {}
 }



export type Actions = | InitMarket | UpdateMarket
| DeployMarket
| OpenMarket
| CreateMarket
| TestMarket

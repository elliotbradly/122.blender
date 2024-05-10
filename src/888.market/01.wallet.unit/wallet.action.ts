import { Action } from "../99.core/interface/action.interface";
import  WalletBit  from "./fce/wallet.bit";

// Wallet actions

export const INIT_WALLET = "[Wallet action] Init Wallet";
export class InitWallet implements Action {
 readonly type = INIT_WALLET;
 constructor(public bale: WalletBit) {}
}

export const UPDATE_WALLET = "[Wallet action] Update Wallet";
export class UpdateWallet implements Action {
 readonly type = UPDATE_WALLET;
 constructor(public bale: WalletBit) {}
}

export const POLL_WALLET = "[Poll action] Poll Wallet";
 export class PollWallet implements Action {
 readonly type = POLL_WALLET;
 constructor(public bale: WalletBit) {}
 }

 export const OPEN_WALLET = "[Open action] Open Wallet";
 export class OpenWallet implements Action {
 readonly type = OPEN_WALLET;
 constructor(public bale: WalletBit) {}
 }

export type Actions = | InitWallet | UpdateWallet | PollWallet |OpenWallet;

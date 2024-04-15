
import * as ActRpp from "../rpgparty.action";

import * as ActMnu from "../../98.menu.unit/menu.action";
import * as ActBld from "../../00.blender.unit/blender.action";
import * as ActAtv from "../../80.activity.unit/activity.action";
import * as ActHud from "../../10.hud.unit/hud.action";
import * as ActCol from "../../97.collect.unit/collect.action";
import * as ActBus from "../../99.bus.unit/bus.action";

import * as ActTxt from "../../act/text.action";

var bit, val, idx, dex, lst, dat, src;


export const initRpgparty = (cpy: RpgpartyModel, bal: RpgpartyBit, ste: State) => {
    debugger
    return cpy;
};


export const createRpgparty = async (cpy: RpgpartyModel, bal: RpgpartyBit, ste: State) => {

    if (bal.dat == null) bal.dat = {}

    bal.dat;

    var dat: PartyBit = { idx };
    for (var key in bal.dat) {
        dat[key] = bal.dat[key]
    }

    bal.slv({ rppBit: { idx: 'create-rpgparty', dat } });
    return cpy;

};

export const updateRpgparty = async (cpy: RpgpartyModel, bal: RpgpartyBit, ste: State) => {
    bit = await ste.hunt(ActRpp.READ_RPGPARTY, { idx: bal.idx });
    dat = bit.rpmBit;

    bal.slv({ rppBit: { idx: "update-rpgparty", dat } });
    return cpy;
};


export const readRpgparty = async (cpy: RpgpartyModel, bal: RpgpartyBit, ste: State) => {

    var slv = bal.slv;
    if (bal.idx == null) bal.idx = 'pty00';

    bit = await ste.hunt(ActCol.READ_COLLECT, { idx: bal.idx, bit: ActRpp.CREATE_RPGPARTY });

    var item = bit.clcBit.dat;

    if (slv != null) slv({ rppBit: { idx: "read-rpgparty", dat: item } });
    return cpy;
    
};


export const writeRpgparty = async (cpy: RpgpartyModel, bal: RpgpartyBit, ste: State) => {
    
    var slv = bal.slv;

    bit = await ste.hunt(ActCol.WRITE_COLLECT, { idx: bal.idx, src: bal.src, dat: bal.dat, bit: ActRpp.CREATE_RPGPARTY });
    var item = bit.clcBit.dat;

    if (bit.clcBit.val == 1) await ste.hunt(ActRpp.UPDATE_RPGPARTY, { idx: bal.idx, dat: bal.dat });

    if (slv != null) slv({ rppBit: { idx: "write-rpgparty", dat: item } });
    return cpy;

    return cpy;
};


export const removeRpgparty = async (cpy: RpgpartyModel, bal: RpgpartyBit, ste: State) => {
    
    bit = await ste.hunt(ActCol.REMOVE_COLLECT, { idx: bal.idx, src: bal.src, dat: bal.dat, bit: ActRpp.DELETE_RPGPARTY })
    if (bal.slv != null) bal.slv({ rpmBit: { idx: "remove-rpgparty", dat: bit.clcBit } });

    return cpy;
};


export const deleteRpgparty = (cpy: RpgpartyModel, bal: RpgpartyBit, ste: State) => {
    debugger
    return cpy;
};



import { RpgpartyModel } from "../rpgparty.model";
import RpgpartyBit from "../fce/rpgparty.bit";
import State from "../../99.core/state";
import PartyBit from "../fce/party.bit";

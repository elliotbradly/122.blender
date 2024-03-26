import * as ActMnu from "../../98.menu.unit/menu.action";

import * as ActHud from "../../10.hud.unit/hud.action";

import * as ActCol from "../../97.collect.unit/collect.action";
import * as ActBus from "../../99.bus.unit/bus.action";

import * as ActVrt from "../../act/vurt.action";
import * as ActDsk from "../../act/disk.action";
import * as ActPvt from "../../act/pivot.action";
import * as ActEng from "../../act/engine.action";

var bit, val, idx, dex, lst, dat, src;

export const initHud = async (cpy: HudModel, bal: HudBit, ste: State) => {

    var dat = bal.dat

    cpy.mainHUD = dat.mainHUD

    var dex = cpy.mainHUD.children.length - 1;

    var next = async () => {

        if (dex < 0) {

            //you can check here and see if you have all the needed items
            bit = await ste.hunt(ActCol.LIST_COLLECT, { bit: ActHud.CREATE_HUD });

            bal.slv({ intBit: { idx: "init-hud" } });
            return cpy;
        }

        var ui = cpy.mainHUD.children[dex]
        var data = ui._data;
        var name = data.Name;
        bit = await ste.hunt(ActHud.WRITE_HUD, { idx: name, dat: data });

        dex -= 1
        await next()

    }

    await next()

};

export const createHud = (cpy: HudModel, bal: HudBit, ste: State) => {

    var dat = { idx: bal.idx, src: bal.src, bit: null, dat: null };

    for (var key in bal.dat) {
        dat[key] = bal.dat[key];
    }

    //var data = {};
    //var list = bal.dat.lst;
    //list.forEach((a) => {
    //    var idx = a.name.toLowerCase();
    //    data[idx] = a.hex;
    //});

    //dat.dat = data;
    //dat.bit = require("nearest-color").from(data);

    bal.slv({ hudBit: { idx: "create-hud", dat } });

    return cpy;
};

export const updateHud = async (cpy: HudModel, bal: HudBit, ste: State) => {

    bit = await ste.hunt(ActHud.READ_HUD, { idx: bal.idx });
    dat = bit.hudBit.dat;
    bal.src;

    var itm = dat.bit(bal.src);

    bal.slv({ hudBit: { idx: "update-hud", dat: itm } });

    return cpy;
};

export const readHud = async (cpy: HudModel, bal: HudBit, ste: State) => {

    var slv = bal.slv;
    if (bal.idx == null) bal.idx = 'hud00';

    bit = await ste.hunt(ActCol.READ_COLLECT, { idx: bal.idx, bit: ActHud.CREATE_HUD });

    var item = bit.clcBit.dat;
    debugger

    if (slv != null) slv({ hudBit: { idx: "read-hud", dat: item } });

    return cpy;
};


export const writeHud = async (cpy: HudModel, bal: HudBit, ste: State) => {

    bit = await ste.hunt(ActCol.WRITE_COLLECT, { idx: bal.idx, src: bal.src, dat: bal.dat, bit: ActHud.CREATE_HUD });

    //if (bal.src != null) {
    //if (Array.from(bal.src)[0] != '#')
    //    bal.src = '#' + bal.src;
    //    bit = await ste.hunt(ActHud.UPDATE_HUD, { idx: bal.idx, src: bal.src });
    //    var hudDat = bit.hudBit.dat;
    //    bit = hudDat;
    // }
    // else bit = bit.hudBit.dat;

    var item = bit.clcBit.dat;

    bal.slv({ hudBit: { idx: "write-hud", dat: item } });

    return cpy;
};


export const removeHud = (cpy: HudModel, bal: HudBit, ste: State) => {
    debugger
    return cpy;
};

export const deleteHud = (cpy: HudModel, bal: HudBit, ste: State) => {
    debugger
    return cpy;
};



import { HudModel } from "../hud.model";
import HudBit from "../fce/hud.bit";
import State from "../../99.core/state";
import * as ActMnu from "../../98.menu.unit/menu.action";

import * as ActBld from "../../00.blender.unit/blender.action";

import * as ActCol from "../../97.collect.unit/collect.action";
import * as ActBus from "../../99.bus.unit/bus.action";

import * as ActVrt from "../../act/vurt.action";
import * as ActDsk from "../../act/disk.action";
import * as ActPvt from "../../act/pivot.action";
import * as ActEng from "../../act/engine.action";

var bit, val, idx, dex, lst, dat, src;

export const initHud = (cpy: HudModel, bal: HudBit, ste: State) => {

    var dat = bal.dat

    cpy.mainHUD = dat.mainHUD

    cpy.mainHUD.children.forEach((a, b) => {

        var ui = a;
        var data = a._data;
        var name = data.Name;

        if (name != 'debugWindow') a.visible = false

    })


    debugger

    bal.slv({ intBit: { idx: "init-hud" } });

    return cpy;
};

export const updateHud = (cpy: HudModel, bal: HudBit, ste: State) => {
    return cpy;
};

export const readHud = (cpy: HudModel, bal: HudBit, ste: State) => {
    debugger
    return cpy;
};

export const removeHud = (cpy: HudModel, bal: HudBit, ste: State) => {
    debugger
    return cpy;
};

export const writeHud = (cpy: HudModel, bal: HudBit, ste: State) => {
    debugger
    return cpy;
};

export const deleteHud = (cpy: HudModel, bal: HudBit, ste: State) => {
    debugger
    return cpy;
};

export const createHud = (cpy: HudModel, bal: HudBit, ste: State) => {
    debugger
    return cpy;
};

import { HudModel } from "../hud.model";
import HudBit from "../fce/hud.bit";
import State from "../../99.core/state";
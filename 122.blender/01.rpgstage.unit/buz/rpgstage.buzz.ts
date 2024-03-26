import * as ActMnu from "../../98.menu.unit/menu.action";

import * as ActBld from "../../00.blender.unit/blender.action";

import * as ActCol from "../../97.collect.unit/collect.action";
import * as ActBus from "../../99.bus.unit/bus.action";

import * as ActVrt from "../../act/vurt.action";
import * as ActDsk from "../../act/disk.action";
import * as ActPvt from "../../act/pivot.action";
import * as ActEng from "../../act/engine.action";

var bit, val, idx, dex, lst, dat, src;

export const initRpgstage = (cpy: RpgstageModel, bal: RpgstageBit, ste: State) => {

    var dat = bal.dat

    cpy.gameMap = dat.gameMap;
    cpy.gameSystem = dat.gameSystem;
    cpy.gameTemp = dat.gameTemp;

    debugger

    bal.slv({ intBit: { idx: "init-rpgstage" } });

    return cpy;
};

export const updateRpgstage = (cpy: RpgstageModel, bal: RpgstageBit, ste: State) => {
    return cpy;
};


import { RpgstageModel } from "../rpgstage.model";
import RpgstageBit from "../fce/rpgstage.bit";
import State from "../../99.core/state";

import * as ActCol from "../../97.collect.unit/collect.action";
import * as ActBus from "../../99.bus.unit/bus.action";

import * as ActMnu from "../../98.menu.unit/menu.action";

import * as ActBld from "../../00.blender.unit/blender.action";
import * as ActEng from "../../01.engine.unit/engine.action";

import * as ActVrt from "../../act/vurt.action"
import * as ActDsk from "../../act/disk.action"
import * as ActPvt from "../../act/pivot.action";
import * as ActDep from "../../act/depth.action";

var bit, val, idx, dex, lst, dat, src;



export const initCamera = (cpy: CameraModel, bal: CameraBit, ste: State) => {
    debugger
    return cpy;
};


export const createCamera = async (cpy: CameraModel, bal: CameraBit, ste: State) => {
    var dat: FociBit = { idx: bal.idx }

    bal.slv({ engBit: { idx: "create-scene", dat: dat } });
    return cpy;
};

export const updateCamera = async (cpy: CameraModel, bal: CameraBit, ste: State) => {
    return cpy;
};

export const readCamera = async (cpy: CameraModel, bal: CameraBit, ste: State) => {
    var slv = bal.slv;
    if (bal.idx == null) bal.idx = "eng00";
    bit = await ste.hunt(ActCol.READ_COLLECT, { idx: bal.idx, src: bal.src, bit: ActEng.CREATE_ENGINE });
    if (slv != null) slv({ engBit: { idx: "read-engine", dat: bit.clcBit.dat } });

    return cpy;
};
export const writeCamera = async (cpy: CameraModel, bal: CameraBit, ste: State) => {
    bal.dat = {}
    if (bal.dat.dat == null) bal.dat.dat = {}
    bit = await ste.hunt(ActCol.WRITE_COLLECT, { idx: bal.idx, src: bal.src, dat: bal.dat, bit: ActEng.CREATE_ENGINE });
    var data = bit.clcBit.dat
    if (bal.slv != null) bal.slv({ clkBit: { idx: "write-engine", dat: data } });

    return cpy;
};
export const removeCamera = async (cpy: CameraModel, bal: CameraBit, ste: State) => {
    bit = await ste.hunt(ActCol.REMOVE_COLLECT, { idx: bal.idx, src: bal.src, dat: bal.dat, bit: ActEng.DELETE_ENGINE })
    if (bal.slv != null) bal.slv({ clkBit: { idx: "remove-engine", dat: bit.clcBit } });

    return cpy;
};
export const deleteCamera = (cpy: CameraModel, bal: CameraBit, ste: State) => {
    debugger
    return cpy;
};

import { CameraModel } from "../camera.model";
import CameraBit from "../fce/camera.bit";
import State from "../../99.core/state";
import FociBit from "../fce/foci.bit";

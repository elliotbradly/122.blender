
import * as ActCol from "../../97.collect.unit/collect.action";
import * as ActBus from "../../99.bus.unit/bus.action";

import * as ActMnu from "../../98.menu.unit/menu.action";
import * as ActScn from "../../03.scene.unit/scene.action";
import * as ActBld from "../../00.blender.unit/blender.action";
import * as ActEng from "../../01.engine.unit/engine.action";
import * as ActMsh from "../../06.mesh.unit/mesh.action";
import * as ActPxi from "../../07.pixijs.unit/pixijs.action";

import * as ActVrt from "../../act/vurt.action"
import * as ActDsk from "../../act/disk.action"
import * as ActPvt from "../../act/pivot.action";
import * as ActDep from "../../act/depth.action";

var bit, val, idx, dex, lst, dat, src;

export const initPixijs = async (cpy: PixijsModel, bal: PixijsBit, ste: State) => {
    debugger
    return cpy;
};

export const createPixijs = async (cpy: PixijsModel, bal: PixijsBit, ste: State) => {
    
    var dat: PxlBit = { idx: bal.idx }

    bal.slv({ pxiBit: { idx: "create-pixijs", dat } });

    return cpy;
};



export const updatePixijs = async (cpy: PixijsModel, bal: PixijsBit, ste: State) => {
    return cpy;
};


export const readPixijs = async (cpy: PixijsModel, bal: PixijsBit, ste: State) => {
    var slv = bal.slv;
    if (bal.idx == null) bal.idx = "pxi00";
    bit = await ste.hunt(ActCol.READ_COLLECT, { idx: bal.idx, src: bal.src, bit: ActPxi.CREATE_PIXIJS });
    if (slv != null) slv({ pxiBit: { idx: "read-pixijs", dat: bit.clcBit.dat } });
    return cpy;

};


export const writePixijs = async (cpy: PixijsModel, bal: PixijsBit, ste: State) => {
    bal.dat = {}
    if (bal.dat.dat == null) bal.dat.dat = {}
    bit = await ste.hunt(ActCol.WRITE_COLLECT, { idx: bal.idx, src: bal.src, dat: bal.dat, bit: ActPxi.CREATE_PIXIJS });
    var data = bit.clcBit.dat
    if (bal.slv != null) bal.slv({ pxiBit: { idx: "write-pixijs", dat: data } });

    return cpy;
};

export const removePixijs = async (cpy: PixijsModel, bal: PixijsBit, ste: State) => {
    debugger
    return cpy;
};


export const deletePixijs = async (cpy: PixijsModel, bal: PixijsBit, ste: State) => {
    debugger
    return cpy;
};

import { PixijsModel } from "../pixijs.model";
import PixijsBit from "../fce/pixijs.bit";
import State from "../../99.core/state";
import PxlBit from "../fce/pxl.bit";

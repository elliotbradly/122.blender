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

export const initEngine = async (cpy: EngineModel, bal: EngineBit, ste: State) => {



    if (bal.slv != null) bal.slv({ intBit: { idx: "init-engine", bit } });

    return cpy;
};

export const updateEngine = (cpy: EngineModel, bal: EngineBit, ste: State) => {



    return cpy;
};

export const readEngine = async (cpy: EngineModel, bal: EngineBit, ste: State) => {

    var slv = bal.slv;
    if (bal.idx == null) bal.idx = "eng00";
    bit = await ste.hunt(ActCol.READ_COLLECT, { idx: bal.idx, src: bal.src, bit: ActEng.CREATE_ENGINE });
    if (slv != null) slv({ engBit: { idx: "read-engine", dat: bit.clcBit.dat } });

    return cpy;
};

export const writeEngine = async (cpy: EngineModel, bal: EngineBit, ste: State) => {

    bal.dat = {}
    if (bal.dat.dat == null) bal.dat.dat = {}
    bit = await ste.hunt(ActCol.WRITE_COLLECT, { idx: bal.idx, src: bal.src, dat: bal.dat, bit: ActEng.CREATE_ENGINE });
    var data = bit.clcBit.dat
    if (bal.slv != null) bal.slv({ clkBit: { idx: "write-engine", dat: data } });

    return cpy;
};


export const createEngine = (cpy: EngineModel, bal: EngineBit, ste: State) => {

    //var canvas: any = document.getElementById('renderCanvas');
    // Load the 3D engine
    //var engine = new BABYLON.Engine(canvas, true, { preserveDrawingBuffer: true, stencil: true, disableWebGL2Support: false })

    var dat: PowerBit = { idx: bal.idx }

    bal.slv({ engBit: { idx: "create-engine", dat: dat } });

    return cpy;
};
export const deleteEngine = (cpy: EngineModel, bal: EngineBit, ste: State) => {

    //this._scene.dispose();
    //this._scene = null;

    //this._engine.dispose();
    //this._engine = null;

    return cpy;
};

export const removeEngine = async (cpy: EngineModel, bal: EngineBit, ste: State) => {

    bit = await ste.hunt(ActCol.REMOVE_COLLECT, { idx: bal.idx, src: bal.src, dat: bal.dat, bit: ActEng.DELETE_ENGINE })
    if (bal.slv != null) bal.slv({ clkBit: { idx: "remove-engine", dat: bit.clcBit } });

    return cpy;
};





import { EngineModel } from "../engine.model";
import EngineBit from "../fce/engine.bit";
import State from "../../99.core/state";

import * as BABYLON from 'babylonjs';
import PowerBit from "../fce/power.bit";

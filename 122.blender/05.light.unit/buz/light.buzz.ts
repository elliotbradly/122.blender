import * as ActCol from "../../97.collect.unit/collect.action";
import * as ActBus from "../../99.bus.unit/bus.action";

import * as ActMnu from "../../98.menu.unit/menu.action";
import * as ActScn from "../../03.scene.unit/scene.action";
import * as ActBld from "../../00.blender.unit/blender.action";
import * as ActEng from "../../01.engine.unit/engine.action";
import * as ActLgt from "../../05.light.unit/light.action";

import * as ActVrt from "../../act/vurt.action"
import * as ActDsk from "../../act/disk.action"
import * as ActPvt from "../../act/pivot.action";
import * as ActDep from "../../act/depth.action";

var bit, val, idx, dex, lst, dat, src;

export const initLight = async (cpy: LightModel, bal: LightBit, ste: State) => {
    debugger
    return cpy;
};

export const updateLight = async (cpy: LightModel, bal: LightBit, ste: State) => {
    return cpy;
};

export const createLight = async (cpy: LightModel, bal: LightBit, ste: State) => {

    var dat: RayBit = { idx: bal.idx }

    bit = await ste.hunt(ActScn.READ_SCENE, { idx: bal.src })
    bit = bit.scnBit
    var scene = bit.dat.scene

    dat.light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0, 1, 0), scene);

    bal.slv({ lgtBit: { idx: "create-light", dat: dat } });
    return cpy;
};

export const readLight = async (cpy: LightModel, bal: LightBit, ste: State) => {
    var slv = bal.slv;
    if (bal.idx == null) bal.idx = "eng00";
    bit = await ste.hunt(ActCol.READ_COLLECT, { idx: bal.idx, src: bal.src, bit: ActLgt.CREATE_LIGHT });
    if (slv != null) slv({ lgtBit: { idx: "read-light", dat: bit.clcBit.dat } });

    return cpy;
};

export const writeLight = async (cpy: LightModel, bal: LightBit, ste: State) => {

    bal.dat = {}
    if (bal.dat.dat == null) bal.dat.dat = {}
    bit = await ste.hunt(ActCol.WRITE_COLLECT, { idx: bal.idx, src: bal.src, dat: bal.dat, bit: ActLgt.CREATE_LIGHT });
    var data = bit.clcBit.dat
    if (bal.slv != null) bal.slv({ lgtBit: { idx: "write-light", dat: data } });

    return cpy;
};

export const removeLight = async (cpy: LightModel, bal: LightBit, ste: State) => {

    bit = await ste.hunt(ActCol.REMOVE_COLLECT, { idx: bal.idx, src: bal.src, dat: bal.dat, bit: ActLgt.DELETE_LIGHT })
    if (bal.slv != null) bal.slv({ lgtBit: { idx: "remove-light", dat: bit.clcBit } });

    return cpy;
};

export const deleteLight = async (cpy: LightModel, bal: LightBit, ste: State) => {
    debugger
    return cpy;

};

import { LightModel } from "../light.model";
import LightBit from "../fce/light.bit";
import State from "../../99.core/state";
import RayBit from "../fce/ray.bit";

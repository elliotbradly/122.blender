import * as ActCol from "../../97.collect.unit/collect.action";
import * as ActBus from "../../99.bus.unit/bus.action";

import * as ActMnu from "../../98.menu.unit/menu.action";

import * as ActBld from "../../00.blender.unit/blender.action";
import * as ActEng from "../../01.engine.unit/engine.action";
import * as ActScn from "../../03.scene.unit/scene.action";


import * as ActVrt from "../../act/vurt.action"
import * as ActDsk from "../../act/disk.action"
import * as ActPvt from "../../act/pivot.action";
import * as ActDep from "../../act/depth.action";

var bit, val, idx, dex, lst, dat, src;

export const initScene = async (cpy: SceneModel, bal: SceneBit, ste: State) => {
    debugger
    return cpy;
};

export const updateScene = async (cpy: SceneModel, bal: SceneBit, ste: State) => {
    return cpy;
};

export const createScene = async (cpy: SceneModel, bal: SceneBit, ste: State) => {

    var dat: CueBit = { idx: bal.idx, src: bal.src }

    bit = await ste.hunt(ActEng.READ_ENGINE, { idx: bal.src })

    var engine = bit.engBit.dat.engine;

    var scene = new BABYLON.Scene(engine);
    dat.scene = scene;

    // run the render loop
    engine.runRenderLoop(function () {
        scene.render();
    });


    bal.slv({ scnBit: { idx: "create-scene", dat: dat } });
    return cpy;
};


export const readScene = async (cpy: SceneModel, bal: SceneBit, ste: State) => {

    var slv = bal.slv;
    if (bal.idx == null) bal.idx = "eng00";
    bit = await ste.hunt(ActCol.READ_COLLECT, { idx: bal.idx, src: bal.src, bit: ActScn.CREATE_SCENE });
    if (slv != null) slv({ scnBit: { idx: "read-scene", dat: bit.clcBit.dat } });


    return cpy;
};

export const writeScene = async (cpy: SceneModel, bal: SceneBit, ste: State) => {

    bal.dat = {}
    if (bal.dat.dat == null) bal.dat.dat = {}
    bit = await ste.hunt(ActCol.WRITE_COLLECT, { idx: bal.idx, src: bal.src, dat: bal.dat, bit: ActScn.CREATE_SCENE });
    var data = bit.clcBit.dat
    if (bal.slv != null) bal.slv({ scnBit: { idx: "write-scene", dat: data } });


    return cpy;
};

export const removeScene = async (cpy: SceneModel, bal: SceneBit, ste: State) => {

    bit = await ste.hunt(ActCol.REMOVE_COLLECT, { idx: bal.idx, src: bal.src, dat: bal.dat, bit: ActScn.DELETE_SCENE })
    if (bal.slv != null) bal.slv({ scnBit: { idx: "remove-scene", dat: bit.clcBit } });

    return cpy;

};

export const deleteScene = async (cpy: SceneModel, bal: SceneBit, ste: State) => {
    debugger
    return cpy;
};


import { SceneModel } from "../scene.model";
import SceneBit from "../fce/scene.bit";
import State from "../../99.core/state";
import CueBit from "../fce/cue.bit";

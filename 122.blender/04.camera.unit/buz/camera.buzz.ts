
import * as ActCol from "../../97.collect.unit/collect.action";
import * as ActBus from "../../99.bus.unit/bus.action";

import * as ActMnu from "../../98.menu.unit/menu.action";

import * as ActBld from "../../00.blender.unit/blender.action";
import * as ActEng from "../../01.engine.unit/engine.action";
import * as ActScn from "../../03.scene.unit/scene.action";
import * as ActCam from "../../04.camera.unit/camera.action";

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

    dat.x = bal.dat.x
    dat.y = bal.dat.y;
    dat.z = bal.dat.z;

    if ( dat.x == null ) dat.x = 0
    if ( dat.y == null ) dat.y = 30
    if ( dat.z == null ) dat.z = -10

    bit = await ste.hunt(ActScn.READ_SCENE, { idx: bal.src })
    bit = bit.scnBit
    var scene = bit.dat.scene

    bit = await ste.hunt(ActEng.READ_ENGINE, { idx: bit.dat.src })
    bit = bit.engBit
    var engine = bit.dat.engine;
    var canvas = bit.dat.canvas;

    var camera = new BABYLON.FreeCamera('camera1', new BABYLON.Vector3( dat.x, dat.y, dat.z), scene);
    //    // Target the camera to scene origin
    camera.setTarget(BABYLON.Vector3.Zero());
    // Attach the camera to the canvas
    camera.attachControl(canvas, false);

    dat.camera = camera;

    bal.slv({ camBit: { idx: "create-camera", dat: dat } });
    return cpy;
};

export const updateCamera = async (cpy: CameraModel, bal: CameraBit, ste: State) => {
    return cpy;
};

export const readCamera = async (cpy: CameraModel, bal: CameraBit, ste: State) => {
    var slv = bal.slv;
    if (bal.idx == null) bal.idx = "eng00";
    bit = await ste.hunt(ActCol.READ_COLLECT, { idx: bal.idx, src: bal.src, bit: ActCam.CREATE_CAMERA });
    if (slv != null) slv({ camBit: { idx: "read-camera", dat: bit.clcBit.dat } });

    return cpy;
};
export const writeCamera = async (cpy: CameraModel, bal: CameraBit, ste: State) => {
    if ( bal.dat == null ) bal.dat = {}
    if (bal.dat.dat == null) bal.dat.dat = {}
    bit = await ste.hunt(ActCol.WRITE_COLLECT, { idx: bal.idx, src: bal.src, dat: bal.dat, bit: ActCam.CREATE_CAMERA });
    var data = bit.clcBit.dat
    if (bal.slv != null) bal.slv({ camBit: { idx: "write-camera", dat: data } });

    return cpy;
};
export const removeCamera = async (cpy: CameraModel, bal: CameraBit, ste: State) => {
    bit = await ste.hunt(ActCol.REMOVE_COLLECT, { idx: bal.idx, src: bal.src, dat: bal.dat, bit: ActCam.DELETE_CAMERA })
    if (bal.slv != null) bal.slv({ camBit: { idx: "remove-camera", dat: bit.clcBit } });

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

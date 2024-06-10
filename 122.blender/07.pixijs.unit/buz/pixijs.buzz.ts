
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



    bit = await ste.hunt(ActScn.READ_SCENE, { idx: bal.src })
    bit = bit.scnBit
    var scene:any = bit.dat.scene

    bit = await ste.hunt(ActEng.READ_ENGINE, { idx: bit.dat.src })
    bit = bit.engBit
    var engine = bit.dat.engine;
    var canvas = bit.dat.canvas;

    // This creates and positions a free camera (non-mesh)
    //var camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(0, 5, -10), scene);

    // This targets the camera to scene origin
    //camera.setTarget(BABYLON.Vector3.Zero());

    // This attaches the camera to the canvas
    //camera.attachControl(canvas, true);

    // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
    //var light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);

    // Default intensity is 1. Let's dim the light a small amount
    //light.intensity = 0.7;

    // Our built-in 'sphere' shape.
    //var sphere = BABYLON.MeshBuilder.CreateSphere("sphere", {diameter: 2, segments: 32}, scene);

    // Move the sphere upward 1/2 its height
    //sphere.position.y = 1;

    // Our built-in 'ground' shape.
    //var ground = BABYLON.MeshBuilder.CreateGround("ground", {width: 6, height: 6}, scene);

    window['drawCanvas'] = document.createElement("canvas");
    window['drawCanvas'].width = 512;
    window['drawCanvas'].height = 512;

    var ctx = window['drawCanvas'].getContext("2d");
    // Draw yellow background
    ctx.beginPath();
    ctx.fillStyle = '#0000ff';
    ctx.fillRect(0, 0, 512, 512);

    // Draw blue triangle
    ctx.beginPath();
    ctx.fillStyle = 'red';
    ctx.moveTo(20, 20);
    ctx.lineTo(180, 20);
    ctx.lineTo(530, 130);
    ctx.closePath();
    ctx.fill();

    var texture = new BABYLON.HtmlElementTexture("", window['drawCanvas'], { scene, engine });

    var material = new BABYLON.PBRMaterial("", scene);
    material.unlit = true;
    material.albedoTexture = texture;


    var columns = 6;
    var rows = 1;

    const faceUV = new Array(6);


    for (let i = 0; i < 6; i++) {
        faceUV[i] = new BABYLON.Vector4(i / columns, 0, (i + 1) / columns, 1 / rows);
    }

    const options = {
        faceUV: faceUV,
        wrap: true
    };

    const box = BABYLON.MeshBuilder.CreateBox("box", options);
    box.material = material;

    

    //ground.material = material;

    scene.onBeforeRenderObservable.add(() => {
        texture.update();
    });




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

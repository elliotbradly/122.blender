
import * as ActCol from "../../97.collect.unit/collect.action";
import * as ActBus from "../../99.bus.unit/bus.action";

import * as ActMnu from "../../98.menu.unit/menu.action";

import * as ActBld from "../../00.blender.unit/blender.action";
import * as ActEng from "../../01.engine.unit/engine.action";
import * as ActMku from "../../02.miku.unit/miku.action";

import * as ActScn from "../../03.scene.unit/scene.action";

import * as ActVrt from "../../act/vurt.action"
import * as ActDsk from "../../act/disk.action"
import * as ActPvt from "../../act/pivot.action";
import * as ActDep from "../../act/depth.action";

var bit, val, idx, dex, lst, dat, src;

export const initMiku = async (cpy: MikuModel, bal: MikuBit, ste: State) => {

    await new Promise((resolve) => {
        const babylonMmdScript = document.createElement("script");
        babylonMmdScript.src = "https://www.unpkg.com/babylon-mmd/umd/babylon.mmd.min.js";
        document.head.appendChild(babylonMmdScript);
        babylonMmdScript.onload = resolve;
    });


    if (bal.slv != null) bal.slv({ intBit: { idx: "init-miku", bit } });

    return cpy;
};


export const createMiku = async (cpy: MikuModel, bal: MikuBit, ste: State) => {
    var dat: KuBit = { idx: bal.idx, src: bal.src }

    bit = await ste.hunt(ActScn.READ_SCENE, { idx: bal.src })
    bit = bit.scnBit
    var scene = bit.dat.scene

    bit = await ste.hunt(ActEng.READ_ENGINE, { idx: bit.dat.src })
    bit = bit.engBit
    var engine = bit.dat.engine;
    var canvas = bit.dat.canvas;

    var BABYLONMMD = global.BABYLONMMD;
    
    const mmdRuntime = new BABYLONMMD.MmdRuntime(scene, new BABYLONMMD.MmdPhysics(scene));
    const mmdCamera = new BABYLONMMD.MmdCamera("MmdCamera", new BABYLON.Vector3(0, 5500, 0), scene);

    const promises = [];
    const bvmdLoader = new BABYLONMMD.BvmdLoader(scene);
    promises.push(bvmdLoader.loadAsync("motion", "https://noname0310.github.io/web-mmd-viewer/melancholic_night/mmd_public/motion/melancholy_night/motion.bvmd", (event) => { }));
    promises.push(BABYLON.SceneLoader.ImportMeshAsync(undefined, "https://noname0310.github.io/web-mmd-viewer/melancholic_night/mmd_public/model/yyb_hatsune_miku_10th_ff/yyb_hatsune_miku_10th_v1.02.pmx", undefined, scene, event => { }));
    promises.push((async () => {
        //updateLoadingText(2, "Loading physics engine...");
        const havokPlugin = new BABYLON.HavokPlugin();
        scene.enablePhysics(new BABYLON.Vector3(0, -98, 0), havokPlugin);
        //updateLoadingText(2, "Loading physics engine... Done");
    })());
    //loadingTexts = new Array(promises.length).fill("");
    const loadResults = await Promise.all(promises);
    scene.onAfterRenderObservable.addOnce(() => engine.hideLoadingUI());


    mmdRuntime.setCamera(mmdCamera);
    mmdCamera.addAnimation(loadResults[0]);
    mmdCamera.setAnimation("motion");

    const modelMesh = loadResults[1].meshes[0];

    modelMesh.normalizeToUnitCube();


    modelMesh.receiveShadows = true;
    ;
    //for (const mesh of modelMesh.metadata.meshes)
    //shadowGenerator.addShadowCaster(mesh);
    const mmdModel = mmdRuntime.createMmdModel(modelMesh);



    mmdModel.addAnimation(loadResults[0]);
    mmdModel.setAnimation("motion");
    const bodyBone = mmdModel.runtimeBones.find((bone) => bone.name === "センター");
    scene.onBeforeRenderObservable.add(() => {
        //bodyBone.getWorldTranslationToRef(directionalLight.position);
        //directionalLight.position.y -= 10;
    });


    bal.slv({ mkuBit: { idx: "create-miku", dat: dat } });
};

export const updateMiku = (cpy: MikuModel, bal: MikuBit, ste: State) => {
    return cpy;
};


export const readMiku = async (cpy: MikuModel, bal: MikuBit, ste: State) => {
    var slv = bal.slv;
    if (bal.idx == null) bal.idx = "mku00";
    bit = await ste.hunt(ActCol.READ_COLLECT, { idx: bal.idx, src: bal.src, bit: ActMku.CREATE_MIKU });
    if (slv != null) slv({ mkuBit: { idx: "read-miku", dat: bit.clcBit.dat } });
    return cpy;
};


export const writeMiku = async (cpy: MikuModel, bal: MikuBit, ste: State) => {
    bal.dat = {}
    if (bal.dat.dat == null) bal.dat.dat = {}
    bit = await ste.hunt(ActCol.WRITE_COLLECT, { idx: bal.idx, src: bal.src, dat: bal.dat, bit: ActMku.CREATE_MIKU });
    var data = bit.clcBit.dat
    if (bal.slv != null) bal.slv({ mkuBit: { idx: "write-miku", dat: data } });
    return cpy;
};
export const removeMiku = async (cpy: MikuModel, bal: MikuBit, ste: State) => {

    bit = await ste.hunt(ActCol.REMOVE_COLLECT, { idx: bal.idx, src: bal.src, dat: bal.dat, bit: ActMku.DELETE_MIKU })
    if (bal.slv != null) bal.slv({ mkuBit: { idx: "remove-miku", dat: bit.clcBit } });

    return cpy;
};
export const deleteMiku = async (cpy: MikuModel, bal: MikuBit, ste: State) => {
    debugger
    return cpy;
};


import { MikuModel } from "../miku.model";
import MikuBit from "../fce/miku.bit";
import State from "../../99.core/state";
import KuBit from "../fce/ku.bit";

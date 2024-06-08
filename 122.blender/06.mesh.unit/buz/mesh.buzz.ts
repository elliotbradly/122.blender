import * as ActCol from "../../97.collect.unit/collect.action";
import * as ActBus from "../../99.bus.unit/bus.action";

import * as ActMnu from "../../98.menu.unit/menu.action";
import * as ActScn from "../../03.scene.unit/scene.action";
import * as ActBld from "../../00.blender.unit/blender.action";
import * as ActEng from "../../01.engine.unit/engine.action";
import * as ActMsh from "../../06.mesh.unit/mesh.action";

import * as ActVrt from "../../act/vurt.action"
import * as ActDsk from "../../act/disk.action"
import * as ActPvt from "../../act/pivot.action";
import * as ActDep from "../../act/depth.action";

var bit, val, idx, dex, lst, dat, src;

export const initMesh = async (cpy: MeshModel, bal: MeshBit, ste: State) => {
    debugger
    return cpy;
};


export const createMesh = async (cpy: MeshModel, bal: MeshBit, ste: State) => {

    var dat: DotBit = { idx: bal.idx }

    bit = await ste.hunt(ActScn.READ_SCENE, { idx: bal.src })
    bit = bit.scnBit
    var scene = bit.dat.scene

    var mesh;
    var obj;

    if ( bal.val == null ) bal.val = 0;

    switch (bal.val) {

        case 0:
            obj = { width: 6, height: 6, subdivisions: 2, updatable: false }
            mesh = BABYLON.MeshBuilder.CreateGround("ground1", obj, scene);
            break

        case 1:
            obj = { segments: 16, diameter: 2, sideOrientation: BABYLON.Mesh.FRONTSIDE }
            mesh = BABYLON.MeshBuilder.CreateSphere('sphere1', obj, scene);
            // Move the sphere upward 1/2 of its height
            mesh.position.y = 1;
            break

    }


    // Create a built-in "ground" shape;
    dat.mesh = mesh

    bal.slv({ mshBit: { idx: "create-mesh", dat } });

    return cpy;
};

export const updateMesh = async (cpy: MeshModel, bal: MeshBit, ste: State) => {
    return cpy;
};


export const readMesh = async (cpy: MeshModel, bal: MeshBit, ste: State) => {
    var slv = bal.slv;
    if (bal.idx == null) bal.idx = "eng00";
    bit = await ste.hunt(ActCol.READ_COLLECT, { idx: bal.idx, src: bal.src, bit: ActMsh.CREATE_MESH });
    if (slv != null) slv({ mshBit: { idx: "read-mesh", dat: bit.clcBit.dat } });
    return cpy;
};

export const writeMesh = async (cpy: MeshModel, bal: MeshBit, ste: State) => {
    bal.dat = {}
    if (bal.dat.dat == null) bal.dat.dat = {}
    bit = await ste.hunt(ActCol.WRITE_COLLECT, { idx: bal.idx, src: bal.src, dat: bal.dat, bit: ActMsh.CREATE_MESH });
    var data = bit.clcBit.dat
    if (bal.slv != null) bal.slv({ mshBit: { idx: "write-mesh", dat: data } });

    return cpy;
};
export const removeMesh = async (cpy: MeshModel, bal: MeshBit, ste: State) => {

    bit = await ste.hunt(ActCol.REMOVE_COLLECT, { idx: bal.idx, src: bal.src, dat: bal.dat, bit: ActMsh.DELETE_MESH })
    if (bal.slv != null) bal.slv({ mshBit: { idx: "remove-mesh", dat: bit.clcBit } });

    return cpy;
};

export const deleteMesh = async (cpy: MeshModel, bal: MeshBit, ste: State) => {
    debugger
    return cpy;
};


import { MeshModel } from "../mesh.model";
import MeshBit from "../fce/mesh.bit";
import State from "../../99.core/state";
import DotBit from "../fce/dot.bit";

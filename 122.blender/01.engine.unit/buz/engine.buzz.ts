export const initEngine = (cpy: EngineModel, bal: EngineBit, ste: State) => {
    debugger


    var canvas: any = document.getElementById('renderCanvas');
    // Load the 3D engine
    var engine = new BABYLON.Engine(canvas, true, { preserveDrawingBuffer: true, stencil: true });

    return cpy;
};

export const updateEngine = (cpy: EngineModel, bal: EngineBit, ste: State) => {



    return cpy;
};


import { EngineModel } from "../engine.model";
import EngineBit from "../fce/engine.bit";
import State from "../../99.core/state";

import * as BABYLON from 'babylonjs';
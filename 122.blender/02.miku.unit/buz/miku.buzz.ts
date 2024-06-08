export const initMiku = async (cpy: MikuModel, bal: MikuBit, ste: State) => {

    await new Promise((resolve) => {
        const babylonMmdScript = document.createElement("script");
        babylonMmdScript.src = "https://www.unpkg.com/babylon-mmd/umd/babylon.mmd.min.js";
        document.head.appendChild(babylonMmdScript);
        babylonMmdScript.onload = resolve;
    });


    return cpy;
};

export const updateMiku = (cpy: MikuModel, bal: MikuBit, ste: State) => {
    return cpy;
};


export const readMiku = (cpy: MikuModel, bal: MikuBit, ste: State) => {
    debugger
    return cpy;
};
export const writeMiku = (cpy: MikuModel, bal: MikuBit, ste: State) => {
    debugger
    return cpy;
};
export const removeMiku = (cpy: MikuModel, bal: MikuBit, ste: State) => {
    debugger
    return cpy;
};
export const deleteMiku = (cpy: MikuModel, bal: MikuBit, ste: State) => {
    debugger
    return cpy;
};
export const createMiku = (cpy: MikuModel, bal: MikuBit, ste: State) => {
    debugger
    return cpy;
};


import { MikuModel } from "../miku.model";
import MikuBit from "../fce/miku.bit";
import State from "../../99.core/state";
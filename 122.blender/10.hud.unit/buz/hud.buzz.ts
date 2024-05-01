import * as ActMnu from "../../98.menu.unit/menu.action";

import * as ActHud from "../../10.hud.unit/hud.action";

import * as ActCol from "../../97.collect.unit/collect.action";
import * as ActBus from "../../99.bus.unit/bus.action";

import * as ActVrt from "../../act/vurt.action";
import * as ActDsk from "../../act/disk.action";
import * as ActPvt from "../../act/pivot.action";
import * as ActEng from "../../act/engine.action";

var bit, val, idx, dex, lst, dat, src;

export const initHud = async (cpy: HudModel, bal: HudBit, ste: State) => {

    var dat = bal.dat

    cpy.mainHUD = dat.mainHUD

    var dex = cpy.mainHUD.children.length - 1;

    var next = async () => {

        if (dex < 0) {

            //you can check here and see if you have all the needed items
            bit = await ste.hunt(ActCol.LIST_COLLECT, { bit: ActHud.CREATE_HUD });

            bal.slv({ intBit: { idx: "init-hud" } });
            return cpy;
        }

        var ui = cpy.mainHUD.children[dex]

        var data = ui._data;
        var name = data.Name;
        bit = await ste.hunt(ActHud.WRITE_HUD, { idx: name, dat: ui });

        dex -= 1
        await next()

    }

    await next()

};

export const createHud = (cpy: HudModel, bal: HudBit, ste: State) => {

    var comp: any = bal;

    if (bal.src == null) bal.src = 'sprite-ultrahudcomponent-window';
    var dat: HBit = { idx: bal.idx, src: bal.src };

    var bit: Sprite_UltraHUDComponent_Window = comp.dat as Sprite_UltraHUDComponent_Window

    if (bit == null) {
        bal.slv({ hudBit: { idx: "create-hud", dat } });
        return
    }

    dat.bit = bit;
    dat.dat = bit._data;


    //var dat = { idx: bal.idx, src: bal.src, bit, dat: bit._data };
    bal.slv({ hudBit: { idx: "create-hud", dat } });
    return cpy;
};

export const updateHud = async (cpy: HudModel, bal: HudBit, ste: State) => {

    var data = bal.dat

    bit = await ste.hunt(ActHud.READ_HUD, { idx: bal.idx });
    dat = bit.hudBit.dat;

    if (data.visible != null) dat.bit.visible = data.visible

    bal.slv({ hudBit: { idx: "update-hud", dat } });

    return cpy;
};

export const readHud = async (cpy: HudModel, bal: HudBit, ste: State) => {

    var slv = bal.slv;
    if (bal.idx == null) bal.idx = 'hud00';

    bit = await ste.hunt(ActCol.READ_COLLECT, { idx: bal.idx, bit: ActHud.CREATE_HUD });

    var item = bit.clcBit.dat;

    if (slv != null) slv({ hudBit: { idx: "read-hud", dat: item } });

    return cpy;
};


export const writeHud = async (cpy: HudModel, bal: HudBit, ste: State) => {

    bit = await ste.hunt(ActCol.WRITE_COLLECT, { idx: bal.idx, src: bal.src, dat: bal.dat, bit: ActHud.CREATE_HUD });
    var item = bit.clcBit.dat;

    if (bit.clcBit.val == 1) await ste.hunt(ActHud.UPDATE_HUD, { idx: bal.idx, dat: bal.dat });

    bal.slv({ hudBit: { idx: "write-hud", dat: item } });

    return cpy;
};


export const removeHud = async (cpy: HudModel, bal: HudBit, ste: State) => {

    bit = await ste.hunt(ActCol.REMOVE_COLLECT, { idx: bal.idx, src: bal.src, dat: bal.dat, bit: ActHud.CREATE_HUD })

    bal.slv({ hudBit: { idx: "remove-graphic", dat: bit.clcBit } });
    return cpy;
};

export const deleteHud = (cpy: HudModel, bal: HudBit, ste: State) => {

    bal.slv({ hudBit: { idx: "delete-hud", dat: bit.clcBit } });
    return cpy;
};

export const finHud = async (cpy: HudModel, bal: HudBit, ste: State) => {

    bit = await ste.hunt(ActCol.LIST_COLLECT, { bit: ActHud.CREATE_HUD });
    lst = bit.clcBit.lst
    var dex = lst.length - 1;

    var output = []

    var nextHud = async () => {

        if (dex < 0) {
            bal.slv({ hudBit: { idx: "fin-hud", lst } });
            return cpy;
        }

        var now = lst[dex];

        await ste.hunt(ActHud.REMOVE_HUD, { idx: now });

        dex -= 1
        await nextHud()
    }

    await nextHud()
};

export const tweenHud = async (cpy: HudModel, bal: HudBit, ste: State) => {

    bit = await ste.hunt(ActHud.READ_HUD, { idx: bal.idx });
    dat = bit.hudBit.dat;
    bit = dat.bit

    var onUpdate = () =>{}

    gsap.to( bit, { y: -1000, duration: 3, ease: "linear", onUpdate });

    
    bal.slv({ hudBit: { idx: "tween-hud", lst } });
    return cpy;
};


import { HudModel } from "../hud.model";
import HudBit from "../fce/hud.bit";
import State from "../../99.core/state";

import * as HUD from "../../val/hud";

import Sprite_UltraHUDComponent_Window from '../fce/sprite-ultraHUDComponent-window'
import HBit from "../fce/h.bit";
import gsap from "gsap";
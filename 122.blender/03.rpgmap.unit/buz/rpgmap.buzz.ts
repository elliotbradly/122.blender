import * as ActRpm from "../rpgmap.action";

import * as ActMnu from "../../98.menu.unit/menu.action";
import * as ActBld from "../../00.blender.unit/blender.action";
import * as ActAtv from "../../80.activity.unit/activity.action";
import * as ActHud from "../../10.hud.unit/hud.action";
import * as ActCol from "../../97.collect.unit/collect.action";
import * as ActBus from "../../99.bus.unit/bus.action";

import * as ActTxt from "../../act/text.action";

var bit, val, idx, dex, lst, dat, src;

export const initRpgmap = async (cpy: RpgmapModel, bal: RpgmapBit, ste: State) => {

    lst = bal.lst

    

    var dex = lst.length - 1;

    var output = []
    var lstMsg = []

    var nextMap = async () => {

        if (dex <= 0) {
            output
            bal.slv({ intBit: { idx: "init-rpgmap", dat, lst: lstMsg } });
            return cpy;
        }

        var itm = lst[dex]

        bit = await ste.hunt(ActRpm.WRITE_RPGMAP, { idx: itm.name, dat: itm })

        dat = bit.rpmBit.dat
        

        lstMsg.push('map added: ' + dat.name)

        dex -= 1
        await nextMap()
    }

    await nextMap()

};


export const createRpgmap = (cpy: RpgmapModel, bal: RpgmapBit, ste: State) => {
 
    if (bal.dat == null) bal.dat = {}

    bal.dat;
    
    var dat: MapBit = {idx};
    for ( var key in bal.dat){
        dat[key ] = bal.dat[key]
    }

    bal.slv({ rpmBit: { idx: 'create-rpgmap', dat } });
    return cpy;
};

export const updateRpgmap = async (cpy: RpgmapModel, bal: RpgmapBit, ste: State) => {
    bit = await ste.hunt(ActRpm.READ_RPGMAP, { idx: bal.idx });
    dat = bit.rpmBit;

    bal.slv({ rpmBit: { idx: "update-rpgmap", dat } });
    return cpy;
};


export const readRpgmap = async (cpy: RpgmapModel, bal: RpgmapBit, ste: State) => {

    var slv = bal.slv;
    if (bal.idx == null) bal.idx = 'map00';

    bit = await ste.hunt(ActCol.READ_COLLECT, { idx: bal.idx, bit: ActRpm.CREATE_RPGMAP });

    var item = bit.clcBit.dat;

    if (slv != null) slv({ rpmBit: { idx: "read-rpgmap", dat: item } });
    return cpy;

};

export const writeRpgmap = async (cpy: RpgmapModel, bal: RpgmapBit, ste: State) => {
    
    var slv = bal.slv;

    bit = await ste.hunt(ActCol.WRITE_COLLECT, { idx: bal.idx, src: bal.src, dat: bal.dat, bit: ActRpm.CREATE_RPGMAP });
    var item = bit.clcBit.dat;

    if (bit.clcBit.val == 1) await ste.hunt(ActRpm.UPDATE_RPGMAP, { idx: bal.idx, dat: bal.dat });

    if (slv != null) slv({ rpmBit: { idx: "write-rpgmap", dat: item } });
    return cpy;
};

export const removeRpgmap = async (cpy: RpgmapModel, bal: RpgmapBit, ste: State) => {
    
    bit = await ste.hunt(ActCol.REMOVE_COLLECT, { idx: bal.idx, src: bal.src, dat: bal.dat, bit: ActRpm.DELETE_RPGMAP })
    if (bal.slv != null) bal.slv({ rpmBit: { idx: "remove-rpgmap", dat: bit.clcBit } });

    return cpy;
};

export const deleteRpgmap = (cpy: RpgmapModel, bal: RpgmapBit, ste: State) => {
    debugger
    return cpy;
};

import { RpgmapModel } from "../rpgmap.model";
import RpgmapBit from "../fce/rpgmap.bit";
import MapBit from "../fce/map.bit";
import State from "../../99.core/state";
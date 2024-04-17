import * as ActRpa from "../rpgactor.action";

import * as ActMnu from "../../98.menu.unit/menu.action";
import * as ActBld from "../../00.blender.unit/blender.action";
import * as ActAtv from "../../80.activity.unit/activity.action";
import * as ActHud from "../../10.hud.unit/hud.action";
import * as ActCol from "../../97.collect.unit/collect.action";
import * as ActBus from "../../99.bus.unit/bus.action";

import * as ActTxt from "../../act/text.action";

var bit, val, idx, dex, lst, dat, src;

export const initRpgactor = async (cpy: RpgactorModel, bal: RpgactorBit, ste: State) => {

    lst = bal.lst

    var dex = lst.length - 1;

    var output = []
    var lstMsg = ['initizing rpg actor']

    var nextActor = async () => {

        if (dex <= 0) {
            output
            bal.slv({ intBit: { idx: "init-rpgactor", dat, lst: lstMsg } });
            return cpy;
        }

        var itm = lst[dex]

        bit = await ste.hunt(ActRpa.WRITE_RPGACTOR, { idx: itm.name, dat: itm })

        dat = bit.rpaBit.dat

        lstMsg.push('actor added: ' + dat.name)

        dex -= 1
        await nextActor()
    }

    await nextActor()

    return cpy;
};

export const createRpgactor = async (cpy: RpgactorModel, bal: RpgactorBit, ste: State) => {

    if (bal.dat == null) bal.dat = {}

    var dat: StarBit = { idx:bal.idx };
    for (var key in bal.dat) {
        
        if ( key == 'id' ) dat['dex'] = bal.dat[key]
        else dat[key] = bal.dat[key]

    }

    if (dat.note != null) dat.note.replace('↵', '\n')

    bit = await ste.hunt(ActCol.HASH_COLLECT, { src: dat.note })

    var hash = bit.clcBit.dat

    if (hash.map != null) dat.map = {idx: Number(hash.map[0]), x: Number(hash.map[1]), y: Number(hash.map[2])  }

    dat
    

    bal.slv({ rpaBit: { idx: 'create-rpgactor', dat } });
    return cpy;
};

export const updateRpgactor = async (cpy: RpgactorModel, bal: RpgactorBit, ste: State) => {

    bit = await ste.hunt(ActRpa.READ_RPGACTOR, { idx: bal.idx });
    dat = bit.rpaBit;

    bal.slv({ rpaBit: { idx: "update-rpgactor", dat } });
    return cpy;
};

export const readRpgactor = async (cpy: RpgactorModel, bal: RpgactorBit, ste: State) => {

    var slv = bal.slv;
    if (bal.idx == null) bal.idx = 'ply00';

    bit = await ste.hunt(ActCol.READ_COLLECT, { idx: bal.idx, bit: ActRpa.CREATE_RPGACTOR });

    var item = bit.clcBit.dat;

    if (slv != null) slv({ rpaBit: { idx: "read-rpgactor", dat: item } });
    return cpy;
};



export const writeRpgactor = async (cpy: RpgactorModel, bal: RpgactorBit, ste: State) => {
    var slv = bal.slv;

    bit = await ste.hunt(ActCol.WRITE_COLLECT, { idx: bal.idx, src: bal.src, dat: bal.dat, bit: ActRpa.CREATE_RPGACTOR });
    var item = bit.clcBit.dat;

    if (bit.clcBit.val == 1) await ste.hunt(ActRpa.UPDATE_RPGACTOR, { idx: bal.idx, dat: bal.dat });

    if (slv != null) slv({ rpaBit: { idx: "write-rpgactor", dat: item } });
    return cpy;
};


export const removeRpgactor = async (cpy: RpgactorModel, bal: RpgactorBit, ste: State) => {
    bit = await ste.hunt(ActCol.REMOVE_COLLECT, { idx: bal.idx, src: bal.src, dat: bal.dat, bit: ActRpa.DELETE_RPGACTOR })
    if (bal.slv != null) bal.slv({ rpaBit: { idx: "remove-rpgactor", dat: bit.clcBit } });

    return cpy;
};


export const deleteRpgactor = (cpy: RpgactorModel, bal: RpgactorBit, ste: State) => {
    debugger
    return cpy;
};

export const listRpgactor = async (cpy: RpgactorModel, bal: RpgactorBit, ste: State) => {

    bit = await ste.hunt(ActCol.LIST_COLLECT, { bit: ActRpa.CREATE_RPGACTOR });
    
    lst = bit.clcBit.lst
    
    bal.slv({ rpaBit: { idx: 'list-rpgactor', lst } });
    return cpy;
};



import { RpgactorModel } from "../rpgactor.model";
import RpgactorBit from "../fce/rpgactor.bit";
import State from "../../99.core/state";
import StarBit from "../fce/star.bit";

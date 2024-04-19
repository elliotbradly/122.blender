
import * as ActRpp from "../rpgparty.action";

import * as ActRpa from "../../02.rpgactor.unit/rpgactor.action";

import * as ActMnu from "../../98.menu.unit/menu.action";
import * as ActBld from "../../00.blender.unit/blender.action";
import * as ActAtv from "../../80.activity.unit/activity.action";
import * as ActHud from "../../10.hud.unit/hud.action";
import * as ActCol from "../../97.collect.unit/collect.action";
import * as ActBus from "../../99.bus.unit/bus.action";

import * as ActTxt from "../../act/text.action";

var bit, val, idx, dex, lst, dat, src;

export const initRpgparty = async (cpy: RpgpartyModel, bal: RpgpartyBit, ste: State) => {
    
    lst = bal.lst

    if ( lst == null ) lst = []

    var dex = lst.length-1;

    var output = []
    var lstMsg = [ 'initizing rpg party' ]

    var nextParty = async () => {

        if (dex < 0) {
            output
            bal.slv({ intBit: { idx: "init-rpgparty", dat, lst:lstMsg } });
            return cpy;
        }

        var itm = lst[ dex ]
        
        bit = await ste.hunt( ActRpa.READ_RPGACTOR, { idx: itm })
        dat = bit.rpaBit.dat
        

        if ( dat.map == null ){
            bal.slv({ intBit: { idx: "init-rpgparty-errorr" } });
            return cpy;
        }

        bit = await ste.hunt( ActRpp.WRITE_RPGPARTY, { idx: dat.idx, dat })
        
        lstMsg.push( 'party added: ' + dat.name )
        
        
        dex -= 1
        await nextParty()
    }

    await nextParty()

};


export const createRpgparty = async (cpy: RpgpartyModel, bal: RpgpartyBit, ste: State) => {


    var stageMod:RpgstageModel = ste.value.rpgstage

    if (bal.dat == null) bal.dat = {}

    var star:StarBit = bal.dat

    var dat: PartyBit = { idx, dex: cpy.partyCount, name:bal.dat.name };
    //for (var key in bal.dat) {
    //    dat[key] = bal.dat[key]
    //}
   
    var index = star.dex + 1;

    //debugger
    
    stageMod.partyPlugin.create( index )
    stageMod.partyPlugin.addActor( index,  index );
    stageMod.partyPlugin.setLocation( index, star.xpos, star.ypos, star.map);

    cpy.partyCount += 1

    bal.slv({ rppBit: { idx: 'create-rpgparty', dat } });
    return cpy;

};

export const updateRpgparty = async (cpy: RpgpartyModel, bal: RpgpartyBit, ste: State) => {
    bit = await ste.hunt(ActRpp.READ_RPGPARTY, { idx: bal.idx });
    dat = bit.rpmBit;

    bal.slv({ rppBit: { idx: "update-rpgparty", dat } });
    return cpy;
};


export const readRpgparty = async (cpy: RpgpartyModel, bal: RpgpartyBit, ste: State) => {

    var slv = bal.slv;
    if (bal.idx == null) bal.idx = 'pty00';

    bit = await ste.hunt(ActCol.READ_COLLECT, { idx: bal.idx, bit: ActRpp.CREATE_RPGPARTY });

    var item = bit.clcBit.dat;

    if (slv != null) slv({ rppBit: { idx: "read-rpgparty", dat: item } });
    return cpy;

};


export const writeRpgparty = async (cpy: RpgpartyModel, bal: RpgpartyBit, ste: State) => {

    var slv = bal.slv;

    bit = await ste.hunt(ActCol.WRITE_COLLECT, { idx: bal.idx, src: bal.src, dat: bal.dat, bit: ActRpp.CREATE_RPGPARTY });
    var item = bit.clcBit.dat;

    if (bit.clcBit.val == 1) await ste.hunt(ActRpp.UPDATE_RPGPARTY, { idx: bal.idx, dat: bal.dat });

    if (slv != null) slv({ rppBit: { idx: "write-rpgparty", dat: item } });
    return cpy;

    return cpy;
};


export const removeRpgparty = async (cpy: RpgpartyModel, bal: RpgpartyBit, ste: State) => {

    bit = await ste.hunt(ActCol.REMOVE_COLLECT, { idx: bal.idx, src: bal.src, dat: bal.dat, bit: ActRpp.DELETE_RPGPARTY })
    if (bal.slv != null) bal.slv({ rppBit: { idx: "remove-rpgparty", dat: bit.clcBit } });

    return cpy;
};


export const deleteRpgparty = (cpy: RpgpartyModel, bal: RpgpartyBit, ste: State) => {
    debugger
    return cpy;
};



export const switchRpgparty = (cpy: RpgpartyModel, bal: RpgpartyBit, ste: State) => {
    
    var stageMod:RpgstageModel = ste.value.rpgstage
    stageMod.partyPlugin.switch( bal.val )

    window.requestAnimationFrame( ()=>{

        stageMod.gamePlayer
        debugger

    })
    

    if (bal.slv != null) bal.slv({ rppBit: { idx: "switch-rpgparty", dat: bit.clcBit } });

    return cpy;
};


import { RpgpartyModel } from "../rpgparty.model";
import RpgpartyBit from "../fce/rpgparty.bit";
import State from "../../99.core/state";
import PartyBit from "../fce/party.bit";
import { RpgstageModel } from "122.blender/01.rpgstage.unit/rpgstage.model";
import StarBit from "122.blender/02.rpgactor.unit/fce/star.bit";


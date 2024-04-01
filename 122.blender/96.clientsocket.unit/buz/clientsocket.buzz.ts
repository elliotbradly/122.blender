import * as ActMnu from "../../98.menu.unit/menu.action";

import * as ActCsk from "../../96.clientsocket.unit/clientsocket.action";
import * as ActBld from "../../00.blender.unit/blender.action";

import * as ActCol from "../../97.collect.unit/collect.action";
import * as ActBus from "../../99.bus.unit/bus.action";

import * as ActGit from "../../act/github.action";
import * as ActDsk from "../../act/disk.action";
import * as ActPvt from "../../act/pivot.action";
import * as ActEng from "../../act/engine.action";

var bit, val, idx, dex, lst, dat, src;

export const initClientsocket = (cpy: ClientsocketModel, bal: ClientsocketBit, ste: State) => {

    const currentUrl = window.location.origin;
    var socket = new WebSocket(currentUrl.replace('http', 'ws') + '/socket/');

    var intBit = { intBit: { idx: bal.idx }}
    socket.send( JSON.stringify( intBit ));

    socket.addEventListener('message', (event)=> {

        
        if (event.data) patch( ste, ActCsk.UPDATE_CLIENTSOCKET, {dat:event.data} )
    });

    bal.slv({ intBit: { idx: "init-clientsocket" } });
    return cpy;
};

export const updateClientsocket = (cpy: ClientsocketModel, bal: ClientsocketBit, ste: State) => {
    
    console.log( JSON.stringify( bal )  )

    if ( bal.slv != null ) bal.slv({ cskBit: { idx: "update-clientsocket" } });

    return cpy;
};

var patch = (ste, type, bale) => ste.dispatch({ type, bale });

import { ClientsocketModel } from "../clientsocket.model";
import ClientsocketBit from "../fce/clientsocket.bit";
import State from "../../99.core/state";
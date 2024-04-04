import * as ActMnu from "../../98.menu.unit/menu.action";
import * as ActRps from "../../01.rpgstage.unit/rpgstage.action";


import * as ActCsk from "../../96.clientsocket.unit/clientsocket.action";
import * as ActBld from "../../00.blender.unit/blender.action";

import * as ActCol from "../../97.collect.unit/collect.action";
import * as ActBus from "../../99.bus.unit/bus.action";

import * as ActGit from "../../act/github.action";
import * as ActDsk from "../../act/disk.action";
import * as ActPvt from "../../act/pivot.action";
import * as ActEng from "../../act/engine.action";

var bit, val, idx, dex, lst, dat, src;

export const initClientsocket = async (cpy: ClientsocketModel, bal: ClientsocketBit, ste: State) => {

    bit = await ste.hunt(ActRps.DEBUG_RPGSTAGE, { src: 'initing the client socket' });

    const currentUrl = window.location.origin;
    var socket = new WebSocket(currentUrl.replace('http', 'ws') + '/socket/');

    var init = async (event) => {
        var intBit = { intBit: { idx: bal.idx, dat: bal.dat } }
        socket.send(JSON.stringify(intBit));

        var sighBit = { idx: ActEng.UPDATE_ENGINE, dat: {} }

        setInterval( ()=>{

            ste.hunt(ActRps.DEBUG_RPGSTAGE, { src: 'set interval' });
            socket.send(JSON.stringify(  sighBit  ));

        }, 3333 )

        socket.removeEventListener('message', init);
        socket.addEventListener('message', update);
    }

    var update = async (event) => {

        bit = await ste.hunt(ActRps.DEBUG_RPGSTAGE, { src: 'updating the client socket' });

        if (event.data != 'heartbeat') patch(ste, ActCsk.UPDATE_CLIENTSOCKET, { dat: JSON.parse(event.data) })
        else ste.hunt(ActRps.DEBUG_RPGSTAGE, { src: 'beating heart' });

    }

    socket.addEventListener('message', init);

    bal.slv({ intBit: { idx: "init-clientsocket" } });
    return cpy;
};

export const updateClientsocket = async (cpy: ClientsocketModel, bal: ClientsocketBit, ste: State) => {

    if ( bal == null ) bal = {idx, dat:{}}

    bit = await ste.hunt(ActRps.DEBUG_RPGSTAGE, { src: JSON.stringify(bal) });

    if (bal.slv != null) bal.slv({ cskBit: { idx: "update-clientsocket" } });
    return cpy;
};

var patch = (ste, type, bale) => ste.dispatch({ type, bale });

import { ClientsocketModel } from "../clientsocket.model";
import ClientsocketBit from "../fce/clientsocket.bit";
import State from "../../99.core/state";
import * as ActMnu from "../../98.menu.unit/menu.action";

import * as ActBld from "../../00.blender.unit/blender.action";

import * as ActAtv from "../../80.activity.unit/activity.action";
import * as ActRpa from "../../02.rpgactor.unit/rpgactor.action";
import * as ActRpm from "../../03.rpgmap.unit/rpgmap.action";
import * as ActRpp from "../../04.rpgparty.unit/rpgparty.action";

import * as ActRps from "../rpgstage.action";

import * as ActHud from "../../10.hud.unit/hud.action";

import * as ActCol from "../../97.collect.unit/collect.action";
import * as ActBus from "../../99.bus.unit/bus.action";

import * as ActTxt from "../../act/text.action";

var bit, val, idx, dex, lst, dat, src;

var display, hudData;

export const initRpgstage = async (cpy: RpgstageModel, bal: RpgstageBit, ste: State) => {

    var dat = bal.dat

    dat.gameVariables.TIMECODE = 'now'
    dat.gameVariables.ERROR_MESSAGE = 'error-message'

    var val = "---";

    cpy.shade = dat.shade;

    cpy.gameTemp = dat.gameTemp;
    cpy.gameSystem = dat.gameSystem;
    cpy.gameScreen = dat.gameScreen;
    cpy.gameTimer = dat.gameTimer;
    cpy.gameMessage = dat.gameMessage;
    cpy.gameSwitches = dat.gameSwitches;
    cpy.gameVariables = dat.gameVariables;
    cpy.gameSelfSwitches = dat.gameSelfSwitches;
    cpy.gameActors = dat.gameActors;
    cpy.gameParty = dat.gameParty;
    cpy.gameTroop = dat.gameTroop;
    cpy.gameMap = dat.gameMap;

    cpy.gamePlayer = dat.gamePlayer;
    cpy.graphics = dat.graphics;
    cpy.sceneManager = dat.sceneManager;

    cpy.dataActors = dat.dataActors;
    cpy.dataMapInfos = dat.dataMapInfos;

    cpy.dataMap = dat.dataMap;

    cpy.partyPlugin = dat.partyPlugin;

    cpy.gamePlayer._moveSpeed = 4;

    bit = await ste.hunt(ActRps.SCENE_RPGSTAGE, { val: 0 });

    bal.slv({ intBit: { idx: "init-rpgstage" } });

    return cpy;
};

export const openRpgstage = async (cpy: RpgstageModel, bal: RpgstageBit, ste: State) => {

    bit = await ste.hunt(ActAtv.INIT_ACTIVITY, { val: 0 });
    bit = await ste.hunt(ActRps.DEBUG_RPGSTAGE, { src: JSON.stringify(bit) });

    bit = await ste.hunt(ActRpa.INIT_RPGACTOR, { lst: cpy.dataActors });

    lst = bit.intBit.lst
    lst.forEach((a) => { ste.hunt(ActRps.DEBUG_RPGSTAGE, { src: a }) })

    bit = await ste.hunt(ActRpm.INIT_RPGMAP, { lst: cpy.dataMapInfos });
    lst = bit.intBit.lst
    lst.forEach((a) => { ste.hunt(ActRps.DEBUG_RPGSTAGE, { src: a }) })

    bit = await ste.hunt(ActRpa.LIST_RPGACTOR, {});
    lst = bit.rpaBit.lst

    bit = await ste.hunt(ActRpp.INIT_RPGPARTY, { lst });
    lst = bit.intBit.lst

    lst.forEach((a) => { ste.hunt(ActRps.DEBUG_RPGSTAGE, { src: a }) })

    var itm = {
        "characterName": "Monster",
        "characterIndex": 4,
        "battlerName": "Actor1_3",
        "faceName": "Actor1",
        "faceIndex": 2,
        "classId": 1,
        "equips": [0, 0, 0, 0, 0],
        "traits": [],
        "initialLevel": 1,
        "maxLevel": 99,
        "name": "Jordan",
        "nickname": "",
        "map": 1,
        "xpos": 10,
        "ypos": 4,
        "note": "map: 1, 8, 3\ndetail: tall",
        "profile": ""
    }

    bit = await ste.hunt(ActRpa.WRITE_RPGACTOR, { idx: itm.name, dat: itm })
    dat = bit.rpaBit.dat
    bit = await ste.hunt(ActRpp.WRITE_RPGPARTY, { idx: dat.idx, dat })

    var w = cpy.dataMap.width;
    var h = cpy.dataMap.width;

    lst = [];

    for (var i = 0; i < 888; i++) {
        lst.push("actor-" + i)
    }

    var dex = lst.length - 1;

    var output = []

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    var next = async () => {

        if (dex < 0) {
            bal.slv({ rpsBit: { idx: "open-rpgstage" } });
            return cpy;
        }

        var now = lst[dex];

        var x = getRandomInt(w)
        var y = getRandomInt(h)

        var itm = {
            "id": 4,
            "characterName": "Actor2",
            "characterIndex": 3,
            "faceName": "Actor1",
            "faceIndex": 2,
            "battlerName": "Actor1_3",
            "classId": 1,
            "equips": [0, 0, 0, 0, 0],
            "traits": [],
            "initialLevel": 1,
            "maxLevel": 99,
            "name": now,
            "nickname": "",
            "map": getRandomInt(10),
            "xpos": x,
            "ypos": y
        }

        bit = await ste.hunt(ActRpa.WRITE_RPGACTOR, { idx: itm.name, dat: itm })
        dat = bit.rpaBit.dat
        bit = await ste.hunt(ActRpp.WRITE_RPGPARTY, { idx: dat.idx, dat })

        dex -= 1
        await next()
    }

    setInterval(async () => {
        bit = await ste.hunt(ActRps.TIME_RPGSTAGE, { val: 1 })
    }
        , 1000)



    await next()



};

export const updateRpgstage = (cpy: RpgstageModel, bal: RpgstageBit, ste: State) => {
    return cpy;
};

export const debugRpgstage = async (cpy: RpgstageModel, bal: RpgstageBit, ste: State) => {

    if (bal.src == null) bal.src = '';
    if (cpy.debugList.length > cpy.debugListSize) cpy.debugList.shift()

    lst = bal.src.split(",");

    lst.forEach((a) => {
        cpy.debugList.push(a)
    })

    bit = await cpy.shade.hunt(ActTxt.WRITE_TEXT, { idx: 'txt00', dat: { txt: cpy.debugList.join('\n') } })

    bal.slv({ rpsBit: { idx: "debug-rpgstage" } });

    return cpy;
};


export const sceneRpgstage = async (cpy: RpgstageModel, bal: RpgstageBit, ste: State) => {

    display = cpy.sceneManager._scene._spriteset;
    display = cpy.sceneManager._scene._ultraHudContainer;

    hudData = { mainHUD: display._mainHUD }

    bit = await cpy.shade.hunt(ActTxt.REMOVE_TEXT, { idx: 'txt00' })
    bit = await ste.hunt(ActHud.FIN_HUD, {});
    bit = await ste.hunt(ActHud.INIT_HUD, { dat: hudData });

    ste.hunt(ActHud.WRITE_HUD, { idx: HUD.DEBUG_WINDOW, dat: { visible: true } });
    ste.hunt(ActHud.WRITE_HUD, { idx: HUD.CLOCK_BAR, dat: { visible: true } });
    ste.hunt(ActHud.WRITE_HUD, { idx: HUD.ACTION_BAR, dat: { visible: false } });

    //bit = await ste.hunt(ActHud.READ_HUD, { idx: HUD.ICON_WINDOW });

    //ste.hunt(ActHud.WRITE_HUD, { idx: HUD.ICON_WINDOW, dat: { visible: false } });
    //ste.hunt(ActHud.WRITE_HUD, { idx: HUD.PLAY_DATA_GROUP, dat: { visible: false } });
    //ste.hunt(ActHud.WRITE_HUD, { idx: HUD.WELCOME_WINDOW, dat: { visible: false } });
    //ste.hunt(ActHud.WRITE_HUD, { idx: HUD.ACTION_BAR, dat: { visible: false } });

    bit = await ste.hunt(ActHud.READ_HUD, { idx: HUD.DEBUG_WINDOW, dat: {} });
    var hud = bit.hudBit.dat.bit;

    dat = { txt: '', x: -138, y: -140, sze: 12, clr: 0xFFFFFF, wrp: 280, aln: 'left' }
    bit = await cpy.shade.hunt(ActTxt.WRITE_TEXT, { idx: 'txt00', dat })
    var text = bit.txtBit.dat.bit
    hud.addChild(text)

    bit = await ste.hunt(ActRps.DEBUG_RPGSTAGE, { src: JSON.stringify(bal.dat) });
    //bit = await ste.hunt(ActRps.DEBUG_RPGSTAGE, { src: 'init rpg stage' });
    //bit = await ste.hunt(ActRps.DEBUG_RPGSTAGE, { src: '----------' });
    //bit = await ste.hunt(ActRps.DEBUG_RPGSTAGE, { src: '----------' });
    //bit = await ste.hunt(ActRps.DEBUG_RPGSTAGE, { src: '----------' });
    //bit = await ste.hunt(ActRps.DEBUG_RPGSTAGE, { src: '----------' });
    //bit = await ste.hunt(ActRps.DEBUG_RPGSTAGE, { src: '----------' });
    //bit = await ste.hunt(ActRps.DEBUG_RPGSTAGE, { src: '----------' });
    //bit = await ste.hunt(ActRps.DEBUG_RPGSTAGE, { src: '----------' });
    //bit = await ste.hunt(ActRps.DEBUG_RPGSTAGE, { src: '----------' });
    //bit = await ste.hunt(ActRps.DEBUG_RPGSTAGE, { src: '----------' });


    if (cpy.sceneChangeCount == 0) {
        ste.hunt(ActRps.OPEN_RPGSTAGE, {})
    }

    cpy.sceneChangeCount += 1;

    window['TIMECODE'] = cpy.sceneChangeCount



    //cpy.mainHUD.visible = false

    //can you clear it

    bal.slv({ rpsBit: { idx: "scene-rpgstage" } });

    return cpy;
};

export const writeRpgstage = (cpy: RpgstageModel, bal: RpgstageBit, ste: State) => {


    if (bal.dat == null) bal.dat = {}

    switch (bal.val) {

        case 1:

            for (var key in bal.dat) {
                cpy.gameVariables[key] = bal.dat[key]
            }

            break
    }

    bal.slv({ rpsBit: { idx: "write-rpgstage", src: 'game-variables' } });

    return cpy;
};


export const timeRpgstage = async (cpy: RpgstageModel, bal: RpgstageBit, ste: State) => {

    if ( bal.dat == null ) bal.dat = {}
    if ( bal.dat.cde == null ) bal.dat.cde = ''

    var next = 0

    switch (bal.val) {

        //case 1:
        //    next = cpy.now += 1;
        //    break

        default:

            if (bal.dat.cde != cpy.cde) next = bal.dex
            if (bal.dat.cde != cpy.cde) cpy.cde = bal.dat.cde

            break
    }

    var onUpdate = () => {

        var dt = DateTime.fromMillis( Number( cpy.now ) )
        cpy.timecode = dt.toLocaleString(DateTime.DATETIME_HUGE_WITH_SECONDS)
        cpy.gameVariables.TIMECODE = cpy.timecode
    }


    gsap.to(cpy, { now: next, duration: 1, ease: "linear", onUpdate });

    //bit = await ste.hunt(ActRps.WRITE_RPGSTAGE, { val: 1, dat: { TIMECODE: cpy.timecode } })

    bal.slv({ rpsBit: { idx: "time-rpgstage", src: cpy.timecode } });
    return cpy;
};


var patch = (ste, type, bale) => ste.dispatch({ type, bale });


import { RpgstageModel } from "../rpgstage.model";
import RpgstageBit from "../fce/rpgstage.bit";
import State from "../../99.core/state";

import { DateTime } from "luxon";

import * as HUD from "../../val/hud"
import gsap from "gsap";
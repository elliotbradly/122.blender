import * as ActMnu from "../../98.menu.unit/menu.action";

import * as ActBld from "../../00.blender.unit/blender.action";

import * as ActAtv from "../../80.activity.unit/activity.action";
import * as ActRpa from "../../02.rpgactor.unit/rpgactor.action";

import * as ActRps from "../rpgstage.action";

import * as ActHud from "../../10.hud.unit/hud.action";

import * as ActCol from "../../97.collect.unit/collect.action";
import * as ActBus from "../../99.bus.unit/bus.action";

import * as ActTxt from "../../act/text.action";

var bit, val, idx, dex, lst, dat, src;

var display, hudData;

export const initRpgstage = async (cpy: RpgstageModel, bal: RpgstageBit, ste: State) => {

    var dat = bal.dat

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

    
   
    
    
    
    //setTimeout( ()=>{

       
        

    //}, 3333 )

    
    




    bit = await ste.hunt(ActRps.SCENE_RPGSTAGE, { val:0});

    //var openBld = window.BLENDER.ActBld.OPEN_BLENDER;
    //var initAtv = window.BLENDER.ActAtv.INIT_ACTIVITY;
    //var initMap = window.BLENDER.ActRpm.INIT_RPGMAP;

    //var bit = await window.BLENDER.hunt(initAtv, { val: 0 });
    //var bit = await window.BLENDER.hunt(initBld, { val: 0, dat: MQTT, src: local });
    //window.BLENDER.hunt(openBld, { idx: "simo-beeing" });

    //var display = SceneManager._scene._spriteset._characterSprites[6];
    //var display = SceneManager._scene._spriteset._destinationSprite;

    //display.alpha = 0.5;

    //debugger

    //_spriteset
    //debugger;
    //Spriteset_Map;

    //var base = new Sprite(ImageManager.loadPicture("Actor1_1"));

    //Graphics.app.stage.children[0].addChild(base);

    //display.addChild(base);

    //$gameTemp._pkdJoyStick.base.addChild(base);

    //this.addChild(base);
    //this.addChildToBack(base);
    // var count = 0;

    //Party.create(2);
    //Party.addActor(2, 3);
    //Party.setLocation(2, 12, 12, 5);

    //Party.create(3);
    //Party.addActor(3, 4);
    //Party.setLocation(3, 15, 15, 5);

    //setTimeout(() => {
    //  Party.switch(2);
    //}, 2222);

    //setTimeout(() => {
    //  Party.switch(3);
    //}, 12222);

    //setTimeout(() => {
    //  Party.switch(1);
    //}, 32222);

    // setInterval(() => {
    //   count += 1;

    // document.dispatchEvent(
    //   new KeyboardEvent("keydown", {
    //     key: "e",
    //     keyCode: 39, // example values.
    //     code: "ArrowRight", // put everything you need in this object.
    //     which: 69,
    //     shiftKey: false, // you don't need to include values
    //     ctrlKey: false, // if you aren't going to use them.
    //     metaKey: false, // these are here for example's sake.
    //   })
    // );

    //$gameMessage.add('\SEPLAY[]  ' + count );

    //Game_Player_executeMove.call(this, 8);
    //console.log('go')
    // }, 1444);


    bal.slv({ intBit: { idx: "init-rpgstage" } });

    return cpy;
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

    
    bit = await ste.hunt(ActHud.FIN_HUD, {});
    bit = await ste.hunt(ActHud.INIT_HUD, { dat: hudData });
    
    ste.hunt(ActHud.WRITE_HUD, { idx: HUD.DEBUG_WINDOW, dat: { visible: true } });

    //bit = await ste.hunt(ActHud.READ_HUD, { idx: HUD.ICON_WINDOW });

    //ste.hunt(ActHud.WRITE_HUD, { idx: HUD.ICON_WINDOW, dat: { visible: false } });
    //ste.hunt(ActHud.WRITE_HUD, { idx: HUD.PLAY_DATA_GROUP, dat: { visible: false } });
    //ste.hunt(ActHud.WRITE_HUD, { idx: HUD.WELCOME_WINDOW, dat: { visible: false } });
    //ste.hunt(ActHud.WRITE_HUD, { idx: HUD.ACTION_BAR, dat: { visible: false } });

    //bit = await ste.hunt(ActHud.READ_HUD, { idx: HUD.DEBUG_WINDOW, dat: {} });
    //var hud = bit.hudBit.dat.bit;

    //dat = { txt: '', x: -138, y: -140, sze: 16, clr: 0xFFFFFF, wrp: 280, aln: 'left' }
    //bit = await cpy.shade.hunt(ActTxt.WRITE_TEXT, { idx: 'txt00', dat })
    //var text = bit.txtBit.dat.bit
    //hud.addChild(text)

    //bit = await ste.hunt(ActRps.DEBUG_RPGSTAGE, { src: 'Welcome to Alligator Earth' });
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

    //bit = await ste.hunt(ActAtv.INIT_ACTIVITY, { val: 0 });
    //bit = await ste.hunt(ActRps.DEBUG_RPGSTAGE, { src: JSON.stringify(bit) });
    //bit = await ste.hunt( ActRpa.INIT_RPGACTOR, { dat: cpy.dataActors });

    //cpy.mainHUD.visible = false

    //can you clear it
    
    bal.slv({ rpsBit: { idx: "scene-rpgstage" } });

    return cpy;
};


import { RpgstageModel } from "../rpgstage.model";
import RpgstageBit from "../fce/rpgstage.bit";
import State from "../../99.core/state";

import * as HUD from "../../val/hud"
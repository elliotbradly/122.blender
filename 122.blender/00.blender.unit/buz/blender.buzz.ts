import * as ActMnu from "../../98.menu.unit/menu.action";

import * as ActBld from "../../00.blender.unit/blender.action";

import * as ActCol from "../../97.collect.unit/collect.action";
import * as ActBus from "../../99.bus.unit/bus.action";

import * as ActGit from "../../act/github.action";
import * as ActDsk from "../../act/disk.action";
import * as ActPvt from "../../act/pivot.action";
import * as ActEng from "../../act/engine.action";

var bit, val, idx, dex, lst, dat, src;

export const initBlender = async (cpy: BlenderModel, bal: BlenderBit, ste: State) => {

  //var MQTT = window.BLENDER.MQTT;
  //console.log("mqtt" + MQTT);

  //const local = "ws://swamp-fly-448d63614f75.herokuapp.com/";
  //const localBit = { idx: "local", src: "ws://swamp-fly-448d63614f75.herokuapp.com/" };

  if (bal.dat != null) bit = await ste.hunt(ActBus.INIT_BUS, { idx: cpy.idx, lst: [ActBld], dat: bal.dat, src: bal.src });

  if (bal.val == 1) patch(ste, ActMnu.INIT_MENU, bal);
  if (bal.slv != null) bal.slv({ intBit: { idx: "init-blender", val: 0, bit } });

  return cpy;
};

export const updateBlender = (cpy: BlenderModel, bal: BlenderBit, ste: State) => {
  const { exec } = require("child_process");

  exec("tsc -b 122.blender", async (err, stdout, stderr) => {
    if (err) {
      console.error(`exec error: ${err}`);
    }

    lst = [];

    bit = await ste.bus(ActPvt.BUNDLE_PIVOT, { src: "122.blender" });
    lst.push(bit)

    bit = await ste.bus(ActDsk.READ_DISK, { src: "./work/122.blender.js" });
    var blend = bit.dskBit.dat;

    bit = await ste.bus(ActDsk.WRITE_DISK, { src: "./public/jsx/122.blender.js", dat: blend });
    lst.push(bit)

    src = "../111.control/rpgmaker/app/js/plugins/122.blender.js"
    bit = await ste.bus(ActDsk.WRITE_DISK, { src, dat: blend });
    lst.push(bit)

    src = "../service/fictiq.com/js/plugins/122.blender.js"
    bit = await ste.bus(ActDsk.WRITE_DISK, { src, dat: blend });
    lst.push(bit)

    bit = await ste.bus(ActDsk.READ_DISK, { src: "./0.AlligatorEarth.js" });
    var alligator = bit.dskBit.dat;

    src = "../111.control/rpgmaker/app/js/plugins/AlligatorEarth.js"
    bit = await ste.bus(ActDsk.WRITE_DISK, { src, dat: alligator });
    lst.push(bit)

    src = "../service/fictiq.com/js/plugins/AlligatorEarth.js"
    bit = await ste.bus(ActDsk.WRITE_DISK, { src, dat: alligator });
    lst.push(bit)

    setTimeout(() => {
      if (bal.slv != null) bal.slv({ blnBit: { idx: "update-blender", lst } });
    }, 3);
  });

  return cpy;
};

export const openBlender = async (cpy: BlenderModel, bal: BlenderBit, ste: State) => {

  if (bal == null) bal = { idx: null }
  if (bal.idx == null) bal.idx = 'simo-being';

  //bus to DEPTH
  bit = await ste.bus(ActEng.OPEN_ENGINE, { idx: bal.idx });
  bal.slv({ blnBit: { idx: "open-blender", bit } });

  return cpy;
};

export const closeBlender = async (cpy: BlenderModel, bal: BlenderBit, ste: State) => {

  console.log("close blender")

  bit = await ste.bus(ActEng.CLOSE_ENGINE, {});
  bal.slv({ blnBit: { idx: "close-blender", bit } });

  return cpy;
};


export const reloadBlender = (cpy: BlenderModel, bal: BlenderBit, ste: State) => {

  bal.slv({ blnBit: { idx: "reload-blender", bit } });

  return cpy;
};

var patch = (ste, type, bale) => ste.dispatch({ type, bale });


export const writeBlender = (cpy: BlenderModel, bal: BlenderBit, ste: State) => {
  debugger
  return cpy;
};


export const commitBlender = async (cpy: BlenderModel, bal: BlenderBit, ste: State) => {

  bit = await ste.bus(ActGit.COMMIT_GITHUB, { src: " from 122.blender" });
  lst = bit.gitBit.lst;
  
  bal.slv({ blnBit: { idx: "commit-blender", lst } });
  return cpy;
};



import { BlenderModel } from "../blender.model";
import BlenderBit from "../fce/blender.bit";
import State from "../../99.core/state";

import * as ActCol from "../../97.collect.unit/collect.action";
import * as ActBus from "../../99.bus.unit/bus.action";

import * as ActMnu from "../../98.menu.unit/menu.action";

import * as ActBld from "../../00.blender.unit/blender.action";
import * as ActEng from "../../01.engine.unit/engine.action";
import * as ActMku from "../../02.miku.unit/miku.action";

import * as ActVrt from "../../act/vurt.action"
import * as ActDsk from "../../act/disk.action"
import * as ActPvt from "../../act/pivot.action";
import * as ActDep from "../../act/depth.action";

var bit, val, idx, dex, lst, dat, src;

export const initBlender = async (cpy: BlenderModel, bal: BlenderBit, ste: State) => {

    if (bal.dat != null) bit = await ste.hunt(ActBus.INIT_BUS, { idx: cpy.idx, lst: [ActBld], dat: bal.dat, src: bal.src })

    if (bal.val == 1) patch(ste, ActMnu.INIT_MENU, bal);

    if (bal.val != 1) await ste.hunt(ActEng.INIT_ENGINE, {})
    if (bal.val != 1) await ste.hunt(ActMku.INIT_MIKU, {})
    
    //bal.slv({ blnBit: { idx: "open-blender", bit } });

    if (bal.slv != null) bal.slv({ intBit: { idx: "init-blender", bit } });

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
  
      //bit = await ste.bus(ActDsk.READ_DISK, { src: "./0.AlligatorEarth.js" });
      //var alligator = bit.dskBit.dat;
  
      //src = "../111.control/rpgmaker/app/js/plugins/AlligatorEarth.js"
      //bit = await ste.bus(ActDsk.WRITE_DISK, { src, dat: alligator });
      //lst.push(bit)
  
      //src = "../service/fictiq.com/js/plugins/AlligatorEarth.js"
      //bit = await ste.bus(ActDsk.WRITE_DISK, { src, dat: alligator });
      //lst.push(bit)
  
      //setTimeout(() => {
        if (bal.slv != null) bal.slv({ blnBit: { idx: "update-blender", lst } });
      //}, 3);
    });


    return cpy;
};


export const openBlender = (cpy: BlenderModel, bal: BlenderBit, ste: State) => {

    const { exec } = require('child_process');

    process.chdir("./blender");

    exec('blender.exe', async (err, stdout, stderr) => {

        //bit = await ste.hunt(ActMrk.DEV_MARKET, { val: 1 })
        bal.slv({ mrkBit: { idx: "open-blender", dat: stdout } });

    });


    return cpy;
};


export const devBlender = (cpy: BlenderModel, bal:BlenderBit, ste: State) => {
  
  const { exec } = require('child_process');

  exec('npx quasar dev -m electron', async (err, stdout, stderr) => {

      //bit = await ste.hunt(ActMrk.DEV_MARKET, { val: 1 })
      bal.slv({ mtnBit: { idx: "dev-motion", dat: stdout } });

  });

  return cpy;

  
  };


var patch = (ste, type, bale) => ste.dispatch({ type, bale });





import { BlenderModel } from "../blender.model";
import BlenderBit from "../fce/blender.bit";
import State from "../../99.core/state";
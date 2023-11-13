import * as ActMnu from "../../98.menu.unit/menu.action";


import * as ActBld from "../../00.blender.unit/blender.action";

import * as ActCol from "../../97.collect.unit/collect.action";
import * as ActBus from "../../99.bus.unit/bus.action";

import * as ActVrt from "../../act/vurt.action"
import * as ActDsk from "../../act/disk.action"
import * as ActPvt from "../../act/pivot.action";

var bit, val, idx, dex, lst, dat, src;

export const initBlender = async (cpy: BlenderModel, bal:BlenderBit, ste: State) => {

  if (bal.dat != null) bit = await ste.hunt(ActBus.INIT_BUS, { idx: cpy.idx, lst: [ActBld], dat: bal.dat, src: bal.src })

  if (bal.val == 1) patch(ste, ActMnu.INIT_MENU, bal);
  if (bal.slv != null) bal.slv({ intBit: { idx: "init-space" } });

 return cpy;
};



export const updateBlender = (cpy: BlenderModel, bal:BlenderBit, ste: State) => {


  const { exec } = require('child_process');

  exec('npm run blender', async (err, stdout, stderr) => {

    if (bal.slv != null) bal.slv({ condBit: { idx: "open-control", dat: {} } });

  })

 return cpy;
};


export const openBlender = (cpy: BlenderModel, bal:BlenderBit, ste: State) => {


  const { exec } = require('child_process');

  exec('quasar dev -m electron', async (err, stdout, stderr) => {

    if (bal.slv != null) bal.slv({ condBit: { idx: "open-control", dat: {} } });

  })


  return cpy;
  };



var patch = (ste, type, bale) => ste.dispatch({ type, bale });




import { BlenderModel } from "../blender.model";
import BlenderBit from "../fce/blender.bit";
import State from "../../99.core/state";

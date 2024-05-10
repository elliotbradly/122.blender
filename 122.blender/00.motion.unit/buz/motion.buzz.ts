
import * as ActMnu from "../../98.menu.unit/menu.action";

import * as ActMtn from "../../00.motion.unit/motion.action";
import * as ActCns from "../../act/console.action";

import * as ActCol from "../../97.collect.unit/collect.action";
import * as ActBus from "../../99.bus.unit/bus.action";

import * as ActVrt from "../../act/vurt.action"
import * as ActDsk from "../../act/disk.action"
import * as ActPvt from "../../act/pivot.action";
import * as ActDep from "../../act/depth.action";
import * as ActEng from "../../act/engine.action";

var bit, val, idx, dex, lst, dat, src;

export const initMotion = async (cpy: MotionModel, bal: MotionBit, ste: State) => {

    if (bal.dat != null) bit = await ste.hunt(ActBus.INIT_BUS, { idx: cpy.idx, lst: [ ActMtn ], dat: bal.dat, src: bal.src })

    if (bal.val == 1) patch(ste, ActMnu.INIT_MENU, bal);


    //bal.slv({ blnBit: { idx: "open-blender", bit } });

    if (bal.slv != null) bal.slv({ intBit: { idx: "init-motion", bit } });

    return cpy;
};

export const updateMotion = (cpy: MotionModel, bal: MotionBit, ste: State) => {
    
    const { exec } = require('child_process');

    exec('tsc -b 500.motion', async (err, stdout, stderr) => {
        if (err) {
            console.error(`exec error: ${err}`);
        }

        bit = await ste.bus(ActPvt.BUNDLE_PIVOT, { src: "500.motion" });

        bit = await ste.bus(ActDsk.READ_DISK, { src: './work/500.motion.js' })
        var shade = bit.dskBit.dat;

        //var writeBit = await ste.bus(ActDsk.WRITE_DISK, { src: './data/functions/api/888.market.js', dat: shade })
        //replace all the functions
        //bit = await ste.bus(ActDsk.COPY_DISK, { src: './data/functions/api/', idx: '../service/orbs.ink/functions/api/', val: 1 })

        var writeBit = { idx: 'created-motion-work' }
        setTimeout(() => {
            if (bal.slv != null) bal.slv({ mtnBit: { idx: "update-motion", dat: { lst: [writeBit] } } });
        }, 3);

    });
    
    return cpy;
};

export const devMotion = (cpy: MotionModel, bal: MotionBit, ste: State) => {

    const { exec } = require('child_process');

    exec('npx quasar dev -m electron', async (err, stdout, stderr) => {

        //bit = await ste.hunt(ActMrk.DEV_MARKET, { val: 1 })
        bal.slv({ mtnBit: { idx: "dev-motion", dat: stdout } });

    });

    return cpy;
};


var patch = (ste, type, bale) => ste.dispatch({ type, bale });

import { MotionModel } from "../motion.model";
import MotionBit from "../fce/motion.bit";
import State from "../../99.core/state";
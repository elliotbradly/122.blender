"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePlayMenu = exports.playMenu = void 0;
const ActMnu = require("../menu.action");
const ActArn = require("../../01.arena.unit/arena.action");
const ActAmb = require("../../04.ambit.unit/ambit.action");
const ActCns = require("../../act/console.action");
var bit, lst, dex, src, dat;
var simIDX = 'arena00';
var print = async (ste, bit) => {
    dat = bit.ambBit;
    if (dat == null)
        return;
    var itm = JSON.stringify(dat);
    lst = itm.split(',');
    lst.forEach((a) => ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: a }));
    ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: '------------' });
    //bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: 'open earth....' })
};
const playMenu = async (cpy, bal, ste) => {
    if (bal == null)
        bal = { idx: null, lst: null };
    if (bal.src == null)
        bal.src = 'open';
    switch (bal.src) {
        case 'open':
            bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: "-----------" });
            bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: "Play PIVOT V0" });
            bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: "-----------" });
            src = 'now';
            bit = await ste.hunt(ActArn.WRITE_ARENA, { idx: simIDX, src, dat: { clk: { yrs: 2024, mth: 2 } } });
            print(ste, bit);
            setTimeout(async () => ste.hunt(ActMnu.PLAY_MENU, { src: 'update' }, 2222));
            break;
        case 'update':
            bit = await ste.hunt(ActArn.WRITE_ARENA, { idx: simIDX });
            print(ste, bit);
            setTimeout(async () => bit = await ste.hunt(ActMnu.PLAY_MENU, { src: 'update' }, 2222));
            break;
    }
    return cpy;
};
exports.playMenu = playMenu;
const updatePlayMenu = async (cpy, bal, ste) => {
    if (bal == null)
        bal = { idx: null };
    bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: "-----------" });
    bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: "Play PIVOT V0" });
    bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: "-----------" });
    bit = await ste.hunt(ActAmb.WRITE_AMBIT, { idx: simIDX, src });
    print(ste, bit);
    return cpy;
};
exports.updatePlayMenu = updatePlayMenu;
var patch = (ste, type, bale) => ste.dispatch({ type, bale });
//# sourceMappingURL=play-menu.buzz.js.map
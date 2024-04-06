"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arenaMenu = void 0;
const ActMnu = require("../menu.action");
const ActArn = require("../../01.arena.unit/arena.action");
const ActPut = require("../../act/input.action");
const ActTrm = require("../../act/terminal.action");
const ActChc = require("../../act/choice.action");
const ActGrd = require("../../act/grid.action");
const ActCns = require("../../act/console.action");
var bit, lst, dex, src, dat;
var simIDX;
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
const arenaMenu = async (cpy, bal, ste) => {
    if (bal == null)
        bal = { idx: null };
    bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: "-----------" });
    bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: "Arena MENU V0" });
    bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: "-----------" });
    lst = [ActArn.WRITE_ARENA, ActArn.READ_ARENA];
    bit = await ste.bus(ActGrd.UPDATE_GRID, { x: 0, y: 4, xSpan: 4, ySpan: 12 });
    bit = await ste.bus(ActChc.OPEN_CHOICE, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, net: bit.grdBit.dat });
    src = bit.chcBit.src;
    switch (src) {
        case ActArn.WRITE_ARENA:
            if (simIDX == null) {
                bit = await ste.bus(ActGrd.UPDATE_GRID, { x: 0, y: 4, xSpan: 3, ySpan: 6 });
                bit = await ste.bus(ActPut.OPEN_INPUT, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, txt: 'Arena Input', net: bit.grdBit.dat });
                simIDX = '#' + bit.putBit.src;
                src = simIDX;
            }
            else {
                src = null;
            }
            bit = await ste.hunt(ActArn.WRITE_ARENA, { idx: simIDX, src, dat: { clk: { yrs: 2024, mth: 2 } } });
            print(ste, bit);
            break;
        case ActArn.READ_ARENA:
            bit = await ste.bus(ActGrd.UPDATE_GRID, { x: 0, y: 4, xSpan: 3, ySpan: 6 });
            bit = await ste.bus(ActPut.OPEN_INPUT, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, txt: 'Arena Input', net: bit.grdBit.dat });
            simIDX = '#' + bit.putBit.src;
            bit = await ste.hunt(ActArn.READ_ARENA, { idx: simIDX });
            print(ste, bit);
            break;
        default:
            bit = await ste.bus(ActTrm.CLOSE_TERMINAL, {});
            break;
    }
    bit = await ste.hunt(ActMnu.AMBIT_MENU, {});
    return cpy;
};
exports.arenaMenu = arenaMenu;
var patch = (ste, type, bale) => ste.dispatch({ type, bale });
const Color = require("../../val/console-color");
const Align = require("../../val/align");
//# sourceMappingURL=arena-menu.buzz.js.map
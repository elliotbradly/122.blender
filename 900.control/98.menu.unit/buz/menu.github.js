"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.githubMenu = void 0;
const ActMnu = require("../menu.action");
const ActGit = require("../../10.github.unit/github.action");
//import * as ActFoc from "../../01.focus.unit/focus.action";
//import * as ActPvt from "../../96.pivot.unit/pivot.action";
//import * as ActMap from "../../03.hexmap.unit/hexmap.action"
const ActTrm = require("../../act/terminal.action");
const ActChc = require("../../act/choice.action");
111;
const ActGrd = require("../../act/grid.action");
const ActCns = require("../../act/console.action");
var bit, lst, dex, idx, dat, src;
const githubMenu = async (cpy, bal, ste) => {
    lst = [ActGit.COMMIT_GITHUB, ActMnu.UPDATE_MENU];
    bit = await ste.bus(ActGrd.UPDATE_GRID, { x: 0, y: 4, xSpan: 4, ySpan: 12 });
    bit = await ste.bus(ActChc.OPEN_CHOICE, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, net: bit.grdBit.dat });
    src = bit.chcBit.src;
    switch (src) {
        case ActGit.COMMIT_GITHUB:
            bit = await ste.hunt(ActGit.COMMIT_GITHUB, { lst: ['../'], src: 'committing control' });
            bit = await ste.hunt(ActMnu.PRINT_MENU, bit);
            break;
        case ActGit.UPDATE_GITHUB:
            bit = await ste.hunt(ActGit.UPDATE_GITHUB, {});
            if (bit == null)
                break;
            dat = bit.gitBit.dat;
            if (dat == null)
                break;
            var itm = JSON.stringify(dat);
            lst = itm.split(',');
            lst.forEach((a) => ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: a }));
            ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: '------------' });
            bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: 'open turn....' });
            break;
        case ActMnu.UPDATE_MENU:
            bit = await ste.hunt(ActMnu.UPDATE_MENU);
            bit = await ste.hunt(ActMnu.PRINT_MENU, bit);
            break;
        default:
            bit = await ste.bus(ActTrm.CLOSE_TERMINAL, {});
            break;
    }
    return cpy;
};
exports.githubMenu = githubMenu;
var patch = (ste, type, bale) => ste.dispatch({ type, bale });
const Align = require("../../val/align");
const Color = require("../../val/console-color");
//# sourceMappingURL=menu.github.js.map
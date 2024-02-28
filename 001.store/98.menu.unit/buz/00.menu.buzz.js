"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.visageMenu = exports.shadeMenu = exports.closeMenu = exports.testMenu = exports.updateMenu = exports.initMenu = void 0;
const ActStr = require("../../00.store.unit/store.action");
const ActTrm = require("../../act/terminal.action");
const ActGrd = require("../../act/grid.action");
const ActCvs = require("../../act/canvas.action");
const ActCns = require("../../act/console.action");
const ActChc = require("../../act/choice.action");
let bit, lst, dex, src, dat;
const initMenu = async (cpy, bal, ste) => {
    if (bal == null)
        bal = { idx: null };
    bit = await ste.bus(ActGrd.UPDATE_GRID, { x: 3, y: 0, xSpan: 6, ySpan: 12 });
    bit = await ste.bus(ActCvs.WRITE_CANVAS, { idx: 'cvs1', dat: { clr: Color.CYAN, net: bit.grdBit.dat }, });
    bit = await ste.bus(ActGrd.UPDATE_GRID, { x: 6, y: 0, xSpan: 6, ySpan: 12 });
    bit = await ste.bus(ActCns.WRITE_CONSOLE, { idx: 'cns00', src: "", dat: { net: bit.grdBit.dat, src: "alligaor0" } });
    bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: "-----------" });
    bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: "Store PIVOT V0" });
    bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: "-----------" });
    (0, exports.updateMenu)(cpy, bal, ste);
    return cpy;
};
exports.initMenu = initMenu;
const updateMenu = async (cpy, bal, ste) => {
    lst = [ActStr.UPDATE_STORE, ActStr.DEV_STORE, ActStr.CLOSE_STORE, ActStr.DEPLOY_STORE, ActStr.EXECUTE_STORE, ActStr.GENERATE_STORE, ActStr.OPEN_STORE];
    bit = await ste.bus(ActGrd.UPDATE_GRID, { x: 2, y: 4, xSpan: 4, ySpan: 8 });
    bit = await ste.bus(ActChc.OPEN_CHOICE, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, net: bit.grdBit.dat });
    src = bit.chcBit.src;
    switch (src) {
        case ActStr.EXECUTE_STORE:
            bit = await ste.hunt(ActStr.GENERATE_STORE, { idx: '0002_modern_thunderbolt_ross.sql', src: 'pacman-mouth' });
            dat = bit.strBit;
            if (dat == null)
                break;
            var itm = JSON.stringify(dat);
            lst = itm.split(',');
            lst.forEach((a) => ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: a }));
            ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: '------------' });
            bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: 'executing store....' });
            break;
        case ActStr.GENERATE_STORE:
            bit = await ste.hunt(ActStr.GENERATE_STORE, {});
            dat = bit.strBit;
            if (dat == null)
                break;
            var itm = JSON.stringify(dat);
            lst = itm.split(',');
            lst.forEach((a) => ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: a }));
            ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: '------------' });
            bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: 'generating store....' });
            break;
        case ActStr.DEPLOY_STORE:
            bit = await ste.hunt(ActStr.DEPLOY_STORE, {});
            dat = bit.strBit;
            if (dat == null)
                break;
            var itm = JSON.stringify(dat);
            lst = itm.split(',');
            lst.forEach((a) => ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: a }));
            ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: '------------' });
            bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: 'deploying store....' });
            break;
        case ActStr.UPDATE_STORE:
            bit = await ste.hunt(ActStr.UPDATE_STORE, {});
            dat = bit.strBit;
            if (dat == null)
                break;
            var itm = JSON.stringify(dat);
            lst = itm.split(',');
            lst.forEach((a) => ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: a }));
            ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: '------------' });
            bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: 'deploying store....' });
            break;
        case ActStr.DEV_STORE:
            bit = await ste.hunt(ActStr.DEV_STORE, {});
            dat = bit.strBit;
            if (dat == null)
                break;
            var itm = JSON.stringify(dat);
            lst = itm.split(',');
            lst.forEach((a) => ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: a }));
            ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: '------------' });
            bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: 'dev store....' });
            break;
        case ActStr.CLOSE_STORE:
            bit = await ste.hunt(ActStr.CLOSE_STORE, {});
            dat = bit.strBit;
            if (dat == null)
                break;
            var itm = JSON.stringify(dat);
            lst = itm.split(',');
            lst.forEach((a) => ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: a }));
            ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: '------------' });
            bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: 'update market....' });
            break;
        case ActStr.OPEN_STORE:
            bit = await ste.hunt(ActStr.OPEN_STORE, {});
            lst = bit.mrkBit.dat.split('\n');
            var dex = lst.length;
            var next = async () => {
                if (dex == 0) {
                    //updateMenu(cpy, bal, ste);
                    bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: '... open complete' });
                    bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: '..' });
                    bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: '.' });
                    return;
                }
                var itm = lst.shift();
                dex -= 1;
                bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: '...' + itm });
                await next();
            };
            await next();
            break;
        default:
            bit = await ste.bus(ActTrm.CLOSE_TERMINAL, {});
            break;
    }
    (0, exports.updateMenu)(cpy, bal, ste);
    return cpy;
};
exports.updateMenu = updateMenu;
const testMenu = async (cpy, bal, ste) => {
    return cpy;
};
exports.testMenu = testMenu;
const closeMenu = async (cpy, bal, ste) => {
    //await ste.bus(ActTrm.CLOSE_TERMINAL, {})
    return cpy;
};
exports.closeMenu = closeMenu;
const shadeMenu = async (cpy, bal, ste) => {
    return cpy;
};
exports.shadeMenu = shadeMenu;
var patch = (ste, type, bale) => ste.dispatch({ type, bale });
const visageMenu = (cpy, bal, ste) => {
    debugger;
    return cpy;
};
exports.visageMenu = visageMenu;
const Align = require("../../val/align");
const Color = require("../../val/console-color");
//# sourceMappingURL=00.menu.buzz.js.map
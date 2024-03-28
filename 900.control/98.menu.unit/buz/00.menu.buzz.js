"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.printMenu = exports.createMenu = exports.closeMenu = exports.testMenu = exports.updateMenu = exports.initMenu = void 0;
const ActMnu = require("../menu.action");
const ActCtl = require("../../00.control.unit/control.action");
const ActTrm = require("../../act/terminal.action");
const ActChc = require("../../act/choice.action");
const ActGrd = require("../../act/grid.action");
const ActCvs = require("../../act/canvas.action");
const ActCns = require("../../act/console.action");
var bit, lst, dex, idx, dat, src;
const initMenu = async (cpy, bal, ste) => {
    if (bal == null)
        bal = { idx: null };
    bit = await ste.bus(ActTrm.CLEAR_TERMINAL, {});
    bit = await ste.bus(ActGrd.UPDATE_GRID, { x: 4, y: 0, xSpan: 1, ySpan: 12 });
    bit = await ste.bus(ActCvs.WRITE_CANVAS, { idx: 'cvs1', dat: { clr: Color.CYAN, net: bit.grdBit.dat }, });
    bit = await ste.bus(ActGrd.UPDATE_GRID, { x: 4, y: 0, xSpan: 8, ySpan: 12 });
    bit = await ste.bus(ActCns.WRITE_CONSOLE, { idx: 'cns00', src: "", dat: { net: bit.grdBit.dat, src: "alligaor0" } });
    bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: "-----------" });
    bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: "Control PIVOT V0" });
    bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: "-----------" });
    (0, exports.updateMenu)(cpy, bal, ste);
    return cpy;
};
exports.initMenu = initMenu;
const updateMenu = async (cpy, bal, ste) => {
    lst = [ActCtl.UPDATE_CONTROL, ActMnu.GITHUB_MENU];
    bit = await ste.bus(ActGrd.UPDATE_GRID, { x: 0, y: 4, xSpan: 4, ySpan: 12 });
    bit = await ste.bus(ActChc.OPEN_CHOICE, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, net: bit.grdBit.dat });
    src = bit.chcBit.src;
    switch (src) {
        case ActCtl.UPDATE_CONTROL:
            ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: "Update Control Pivot" });
            bit = await ste.hunt(ActCtl.UPDATE_CONTROL, {});
            bit = await ste.hunt(ActMnu.PRINT_MENU, bit);
            break;
        case ActMnu.GITHUB_MENU:
            bit = await ste.hunt(ActMnu.GITHUB_MENU, {});
            bit = await ste.hunt(ActMnu.PRINT_MENU, bit);
            bit = await ste.hunt(ActMnu.UPDATE_MENU);
            break;
        default:
            bit = await ste.bus(ActTrm.CLOSE_TERMINAL, {});
            break;
    }
    setTimeout(() => {
        (0, exports.updateMenu)(cpy, bal, ste);
    }, 1111);
    return cpy;
};
exports.updateMenu = updateMenu;
const testMenu = async (cpy, bal, ste) => {
    return cpy;
};
exports.testMenu = testMenu;
const closeMenu = async (cpy, bal, ste) => {
    await ste.bus(ActTrm.CLOSE_TERMINAL, {});
    return cpy;
};
exports.closeMenu = closeMenu;
const createMenu = (cpy, bal, ste) => {
    debugger;
    return cpy;
};
exports.createMenu = createMenu;
const printMenu = async (cpy, bal, ste) => {
    dat = bal;
    if (dat == null)
        return bal.slv({ mnuBit: { idx: "print-menu", dat } });
    var itm = JSON.stringify(dat);
    lst = itm.split(",");
    lst.forEach((a) => ste.bus(ActCns.UPDATE_CONSOLE, { idx: "cns00", src: a }));
    ste.bus(ActCns.UPDATE_CONSOLE, { idx: "cns00", src: "------------" });
    bal.slv({ mnuBit: { idx: "print-menu", dat: itm } });
};
exports.printMenu = printMenu;
var patch = (ste, type, bale) => ste.dispatch({ type, bale });
const Align = require("../../val/align");
const Color = require("../../val/console-color");
//# sourceMappingURL=00.menu.buzz.js.map
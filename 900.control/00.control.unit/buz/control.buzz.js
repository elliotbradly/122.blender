"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateControl = exports.initControl = void 0;
const ActMnu = require("../../98.menu.unit/menu.action");
const ActBus = require("../../99.bus.unit/bus.action");
const ActCtl = require("../control.action");
const ActGit = require("../../10.github.unit/github.action");
const ActPvt = require("../../act/pivot.action");
var bit, val, idx, dex, lst, dat;
const initControl = async (cpy, bal, ste) => {
    if (bal.dat != null)
        bit = await ste.hunt(ActBus.INIT_BUS, { idx: cpy.idx, lst: [ActCtl, ActGit], dat: bal.dat, src: bal.src });
    if (bal.val == 1)
        patch(ste, ActMnu.INIT_MENU, bal);
    if (bal.slv != null)
        bal.slv({ intBit: { idx: "init-control" } });
    return cpy;
};
exports.initControl = initControl;
const updateControl = async (cpy, bal, ste) => {
    bit = await ste.bus(ActPvt.UPDATE_PIVOT, { src: '900.control' });
    lst = bit.pvtBit.lst;
    bal.slv({ ctlBit: { idx: "update-control", lst } });
    return cpy;
};
exports.updateControl = updateControl;
var patch = (ste, type, bale) => ste.dispatch({ type, bale });
//# sourceMappingURL=control.buzz.js.map
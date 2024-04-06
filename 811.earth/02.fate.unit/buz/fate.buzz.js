"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appleFate = exports.integerFate = exports.updateFate = exports.initFate = void 0;
const ActMnu = require("../../98.menu.unit/menu.action");
const ActBus = require("../../99.bus.unit/bus.action");
const ActFte = require("../../02.fate.unit/fate.action");
const initFate = async (cpy, bal, ste) => {
    var bit;
    var lst = [];
    bit = await ste.hunt(ActBus.INIT_BUS, { idx: cpy.idx, src: bal.src, lst: [ActFte], dat: bal.dat });
    if (bal.val == 1)
        bit = await ste.hunt(ActMnu.INIT_MENU);
    (0, exports.updateFate)(cpy, bal, ste);
    if (bal.slv != null)
        bal.slv({ intBit: { idx: "init-fate" } });
    return cpy;
};
exports.initFate = initFate;
const updateFate = (cpy, bal, ste) => {
    var Chance = require("chance");
    cpy.fate = new Chance(cpy.seed);
    cpy.seed += 1;
    //if (bal.slv != null) bal.slv({ fteBit: { idx: "update-fate" } });
    return cpy;
};
exports.updateFate = updateFate;
const integerFate = (cpy, bal, ste) => {
    (0, exports.updateFate)(cpy, bal, ste);
    var val = cpy.fate.integer({ min: bal.lst[0], max: bal.lst[1] });
    if (bal.slv != null)
        bal.slv({ fteBit: { idx: "integer-fate", val } });
    return cpy;
};
exports.integerFate = integerFate;
const appleFate = (cpy, bal, ste) => {
    (0, exports.updateFate)(cpy, bal, ste);
    var val = cpy.fate.apple_token();
    if (bal.slv != null)
        bal.slv({ fteBit: { idx: "apple-fate", val } });
    return cpy;
};
exports.appleFate = appleFate;
//# sourceMappingURL=fate.buzz.js.map
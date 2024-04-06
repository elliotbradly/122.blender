"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.colorMenu = void 0;
const ActMnu = require("../menu.action");
const ActTrm = require("../../act/terminal.action");
var bit, lst, dex, dat, src;
const colorMenu = async (cpy, bal, ste) => {
    bit = await ste.bus(ActTrm.WRITE_TERMINAL, { src: "-----------" });
    bit = await ste.bus(ActTrm.WRITE_TERMINAL, { src: "Color Menu" });
    bit = await ste.bus(ActTrm.WRITE_TERMINAL, { src: "-----------" });
    bit = await ste.bus(ActTrm.UPDATE_TERMINAL, { lst });
    bit = bit.trmBit;
    var idx = lst[bit.val];
    switch (idx) {
        default:
            bit = await ste.bus(ActMnu.UPDATE_MENU, {});
            break;
    }
    (0, exports.colorMenu)(cpy, bal, ste);
    return cpy;
};
exports.colorMenu = colorMenu;
var patch = (ste, type, bale) => ste.dispatch({ type, bale });
//# sourceMappingURL=color-menu.buzz.js.map
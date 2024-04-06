"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deliveryMenu = void 0;
const ActMnu = require("../menu.action");
const ActTrm = require("../../act/terminal.action");
var bit, lst, dex, dat, src;
const deliveryMenu = async (cpy, bal, ste) => {
    bit = await ste.bus(ActTrm.WRITE_TERMINAL, { src: "-----------" });
    bit = await ste.bus(ActTrm.WRITE_TERMINAL, { src: "Delivery Menu" });
    bit = await ste.bus(ActTrm.WRITE_TERMINAL, { src: "-----------" });
    bit = await ste.bus(ActTrm.UPDATE_TERMINAL, { lst });
    bit = bit.trmBit;
    var idx = lst[bit.val];
    switch (idx) {
        default:
            bit = await ste.bus(ActMnu.UPDATE_MENU, {});
            break;
    }
    (0, exports.deliveryMenu)(cpy, bal, ste);
    return cpy;
};
exports.deliveryMenu = deliveryMenu;
var patch = (ste, type, bale) => ste.dispatch({ type, bale });
//# sourceMappingURL=delivery-menu.js.map
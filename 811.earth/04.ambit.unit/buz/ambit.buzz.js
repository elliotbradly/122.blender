"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAmbit = exports.deleteAmbit = exports.removeAmbit = exports.writeAmbit = exports.readAmbit = exports.updateAmbit = exports.initAmbit = void 0;
const ActAmb = require("../../04.ambit.unit/ambit.action");
const ActCol = require("../../97.collect.unit/collect.action");
const ActClk = require("../../05.clock.unit/clock.action");
var bit, val, idx, dex, lst, dat;
const initAmbit = (cpy, bal, ste) => {
    debugger;
    return cpy;
};
exports.initAmbit = initAmbit;
const updateAmbit = (cpy, bal, ste) => {
    //we where going to wait for cypto king
    //bit = await ste.bus(ActTme.UPDATE_TIME, { idx: 'ert00', sec: 7 })
    //console.log(JSON.stringify(bit))    
    //bit = await ste.bus(ActPvt.UPDATE_PIVOT, { src: '011.earth' })
    if (bal.slv != null)
        bal.slv({ ertBit: { idx: "update-earth" } });
    return cpy;
};
exports.updateAmbit = updateAmbit;
const readAmbit = async (cpy, bal, ste) => {
    var slv = bal.slv;
    if (bal.idx == null)
        bal.idx = 'ert00';
    bit = await ste.hunt(ActCol.READ_COLLECT, { idx: bal.idx, bit: ActAmb.CREATE_AMBIT });
    if (slv != null)
        slv({ ambBit: { idx: "read-ambit", dat: bit.clcBit.dat } });
    return cpy;
};
exports.readAmbit = readAmbit;
const writeAmbit = async (cpy, bal, ste) => {
    var dat;
    if (bal.src == null) {
        bit = await ste.hunt(ActAmb.UPDATE_AMBIT, bal);
    }
    else {
        dat = bal.dat;
    }
    bit = await ste.hunt(ActCol.WRITE_COLLECT, { idx: bal.idx, dat, bit: ActAmb.CREATE_AMBIT });
    //var clkBit = bit.clcBit.dat.clkBit
    if (bal.slv != null)
        bal.slv({ ambBit: { idx: "write-ambit", dat: bit.clcBit.dat } });
    return cpy;
};
exports.writeAmbit = writeAmbit;
const removeAmbit = (cpy, bal, ste) => {
    debugger;
    return cpy;
};
exports.removeAmbit = removeAmbit;
const deleteAmbit = (cpy, bal, ste) => {
    debugger;
    return cpy;
};
exports.deleteAmbit = deleteAmbit;
const createAmbit = async (cpy, bal, ste) => {
    if (bal.idx == null)
        bal.idx = 'amb00';
    //if (bal.src == null) bal.src = TIME.CLOCK;
    //bit = await ste.hunt(ActFte.APPLE_FATE, {})
    idx = bal.idx;
    bit = await ste.hunt(ActClk.WRITE_CLOCK, { idx: idx, dat: { yrs: 1944, mth: 6, hrs: 15, min: 5, sec: 6, day: 21 } });
    var clkBit = bit.clkBit.dat;
    bal.bit = clkBit;
    //bit = await ste.hunt(ActPlt.OPEN_PLOT, {})
    // we use the plot bit to create the being bit
    //bit = await ste.hunt(ActBei.OPEN_BEING, {})
    var sim = bal.dat;
    if (sim == null)
        sim = { idx };
    if (sim.idx == null)
        sim.idx = bal.idx;
    if (sim.src == null)
        sim.src = "sim-bit";
    if (sim.lst == null)
        sim.lst = [];
    if (sim.now == null)
        sim.now = 0;
    if (sim.cde == null)
        sim.cde = 'time-code';
    sim.bit = bit;
    //timecode should go here
    //sim.clkBit = clkBit;
    //sim.lvl = COSMOS.BLESSED.idx;
    //bit = await ste.hunt(ActClr.FETCH_COLOR, { idx: sim.lvl })
    //sim.pow = bit.clrBit.dat
    //bit = await ste.hunt(ActClr.FETCH_COLOR, { idx: sim.lvl })
    //sim.fte = bit.clrBit.dat
    if (bal.slv != null)
        bal.slv({ ertBit: { idx: "create-earth", dat: sim } });
    return cpy;
};
exports.createAmbit = createAmbit;
//# sourceMappingURL=ambit.buzz.js.map
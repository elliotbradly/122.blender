"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createArena = exports.deleteArena = exports.removeArena = exports.writeArena = exports.readArena = exports.updateArena = exports.initArena = void 0;
const ActArn = require("../../01.arena.unit/arena.action");
const ActCol = require("../../97.collect.unit/collect.action");
const ActClk = require("../../05.clock.unit/clock.action");
var bit, val, idx, dex, lst, dat;
const initArena = (cpy, bal, ste) => {
    debugger;
    return cpy;
};
exports.initArena = initArena;
const updateArena = async (cpy, bal, ste) => {
    //we where going to wait for cypto king
    bit = await ste.hunt(ActClk.BLOCK_CLOCK, { idx: bal.idx, sec: 7 });
    //bit = await ste.hunt( ActClk.UPDATE_CLOCK, { idx: bal.idx, sec: 7 })
    //debugger
    //console.log(JSON.stringify(bit))    
    //bit = await ste.bus(ActPvt.UPDATE_PIVOT, { src: '011.earth' })
    if (bal.slv != null)
        bal.slv({ arnBit: { idx: "update-arena", dat: bit } });
    return cpy;
};
exports.updateArena = updateArena;
const readArena = async (cpy, bal, ste) => {
    var slv = bal.slv;
    if (bal.idx == null)
        bal.idx = 'ert00';
    bit = await ste.hunt(ActCol.READ_COLLECT, { idx: bal.idx, bit: ActArn.CREATE_ARENA });
    if (slv != null)
        slv({ ambBit: { idx: "read-arena", dat: bit.clcBit.dat } });
    return cpy;
};
exports.readArena = readArena;
const writeArena = async (cpy, bal, ste) => {
    var dat;
    if (bal.src == null) {
        bit = await ste.hunt(ActArn.UPDATE_ARENA, bal);
    }
    else {
        dat = bal.dat;
    }
    bit = await ste.hunt(ActCol.WRITE_COLLECT, { idx: bal.idx, dat, bit: ActArn.CREATE_ARENA });
    //var clkBit = bit.clcBit.dat.clkBit
    if (bal.slv != null)
        bal.slv({ ambBit: { idx: "write-arena", dat: bit.clcBit.dat } });
    return cpy;
};
exports.writeArena = writeArena;
const removeArena = (cpy, bal, ste) => {
    debugger;
    return cpy;
};
exports.removeArena = removeArena;
const deleteArena = (cpy, bal, ste) => {
    debugger;
    return cpy;
};
exports.deleteArena = deleteArena;
const createArena = async (cpy, bal, ste) => {
    if (bal.idx == null)
        bal.idx = 'amb00';
    //if (bal.src == null) bal.src = TIME.CLOCK;
    //bit = await ste.hunt(ActFte.APPLE_FATE, {})
    idx = bal.idx;
    var clk = { yrs: 1944, mth: 6, hrs: 15, min: 5, sec: 6, day: 21 };
    if ((bal.dat != null) && (bal.dat.clk != null))
        clk = bal.dat.clk;
    bit = await ste.hunt(ActClk.WRITE_CLOCK, { idx: idx, dat: { clk } });
    var clkBit = bit.clkBit.dat;
    //bit = await ste.hunt(ActPlt.OPEN_PLOT, {})
    // we use the plot bit to create the being bit
    //bit = await ste.hunt(ActBei.OPEN_BEING, {})
    var sim = bal.dat;
    if (sim == null)
        sim = { idx };
    if (sim.idx == null)
        sim.idx = bal.idx;
    if (sim.src == null)
        sim.src = "arena-bit";
    //if (sim.lst == null) sim.lst = [];
    //if (sim.now == null) sim.now = 0;
    //if (sim.cde == null) sim.cde = 'time-code';
    sim.bit = clkBit;
    //timecode should go here
    //sim.clkBit = clkBit;
    //sim.lvl = COSMOS.BLESSED.idx;
    //bit = await ste.hunt(ActClr.FETCH_COLOR, { idx: sim.lvl })
    //sim.pow = bit.clrBit.dat
    //bit = await ste.hunt(ActClr.FETCH_COLOR, { idx: sim.lvl })
    //sim.fte = bit.clrBit.dat
    if (bal.slv != null)
        bal.slv({ ertBit: { idx: "create-arena", dat: sim } });
    return cpy;
};
exports.createArena = createArena;
//# sourceMappingURL=arena.buzz.js.map
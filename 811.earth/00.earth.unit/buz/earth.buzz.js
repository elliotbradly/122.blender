"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testEarth = exports.autoEarth = exports.createEarth = exports.writeEarth = exports.readEarth = exports.openEarth = exports.updateEarth = exports.initEarth = void 0;
const ActMnu = require("../../98.menu.unit/menu.action");
const ActBus = require("../../99.bus.unit/bus.action");
const ActAmb = require("../../04.ambit.unit/ambit.action");
const ActErt = require("../../00.earth.unit/earth.action");
const ActClk = require("../../05.clock.unit/clock.action");
const ActPvt = require("../../act/pivot.action");
const ActDsk = require("../../act/disk.action");
var bit, val, idx, dex, lst, dat;
const initEarth = async (cpy, bal, ste) => {
    if (bal.dat != null)
        bit = await ste.hunt(ActBus.INIT_BUS, { idx: cpy.idx, lst: [ActErt, ActAmb], dat: bal.dat, src: bal.src });
    //bit = await ste.hunt(ActClr.INIT_COLOR, { lst: bal.lst, bit: bal.bit, dat: bal.dat })
    if (bal.val == 1) {
        setTimeout(() => {
            patch(ste, ActMnu.INIT_MENU, bal);
        }, 33);
    }
    if (bal.slv != null)
        bal.slv({ intBit: { idx: "init-earth" } });
    return cpy;
};
exports.initEarth = initEarth;
const updateEarth = async (cpy, bal, ste) => {
    var lstMsg = [];
    bit = await ste.bus(ActPvt.SHIP_PIVOT, { src: '811.earth' });
    lstMsg = lstMsg.concat(bit.pvtBit.lst);
    idx = "../../333.depth/811.earth/";
    bit = await ste.bus(ActDsk.COPY_DISK, { src: './work/811.earth/', idx });
    lstMsg = lstMsg.concat(bit.pvtBit);
    bal.slv({ ertBit: { idx: "update-earth", lst: lstMsg } });
    return cpy;
};
exports.updateEarth = updateEarth;
const openEarth = async (cpy, bal, ste) => {
    //need some time code when to begin 
    bit = await ste.hunt(ActErt.WRITE_EARTH, { idx: bal.idx });
    //get the current year
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear() + 2000;
    const d = new Date();
    let month = d.getMonth();
    let hour = d.getHours();
    bit = await ste.hunt(ActClk.WRITE_CLOCK, { idx: 'ert00', dat: { yrs: currentYear, mth: month, day: 1, hrs: hour, min: 7, sec: 7 } });
    var clk = bit.clkBit;
    bal.slv({ ertBit: { idx: "open-earth", dat: clk } });
    return cpy;
};
exports.openEarth = openEarth;
const readEarth = async (cpy, bal, ste) => { };
exports.readEarth = readEarth;
const writeEarth = async (cpy, bal, ste) => { };
exports.writeEarth = writeEarth;
const createEarth = async (cpy, bal, ste) => { };
exports.createEarth = createEarth;
const autoEarth = async (cpy, bal, ste) => {
    if (bal.val == null)
        bal.val = 1;
    bit = await ste.hunt(ActErt.READ_EARTH, { idx: bal.idx });
    bit = bit.ertBit.dat;
    var sim = bit;
    const next = async (val) => {
        if (val == 0) {
            if (bal.slv != null)
                bal.slv({ ertBit: { idx: "auto-earth", dat: sim } });
            return;
        }
        val -= 1;
        bit = await ste.hunt(ActErt.PUSH_EARTH, { idx: sim.idx });
        var simBit = bit.ertBit.dat;
        var clkBit = simBit.clkBit;
        next(val);
    };
    next(bal.val);
    return cpy;
};
exports.autoEarth = autoEarth;
const testEarth = (cpy, bal, ste) => {
    bal.slv({ ertBit: { idx: "test-earth", dat: {} } });
    return cpy;
};
exports.testEarth = testEarth;
var patch = (ste, type, bale) => ste.dispatch({ type, bale });
//# sourceMappingURL=earth.buzz.js.map
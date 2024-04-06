"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.openBeing = exports.loadBeing = exports.advanceBeing = exports.ageBeing = exports.readBeing = exports.writeBeing = exports.createBeing = exports.updateBeing = exports.accessBeing = exports.initBeing = void 0;
const ActMnu = require("../../98.menu.unit/menu.action");
const ActBus = require("../../99.bus.unit/bus.action");
const ActBei = require("../../03.being.unit/being.action");
const ActFte = require("../../act/fate.action");
const ActClr = require("../../act/color.action");
const ActClk = require("../../act/clock.action");
const ActDsk = require("../../act/disk.action");
const ActRsk = require("../../act/risk.action");
var bit, lst;
const initBeing = async (cpy, bal, ste) => {
    //console.log('init-being')
    var lst = [];
    bit = await ste.hunt(ActBus.INIT_BUS, { idx: cpy.idx, src: bal.src, lst: [ActBei], dat: bal.dat });
    //bit = await ste.bus(ActClk.OPEN_CLOCK, { idx: 'clk00' })
    if (bal.val == 1)
        bit = await ste.hunt(ActMnu.INIT_MENU);
    //let us open up a time 
    if (bal.slv != null)
        bal.slv({ intBit: { idx: "init-being" } });
    return cpy;
};
exports.initBeing = initBeing;
const accessBeing = async (cpy, bal, ste) => {
    bit = await ste.hunt(ActBei.READ_BEING, { val: cpy.nowDex });
    if (bal.slv != null)
        bal.slv({ beiBit: { idx: "access-being", dat: bit.beiBit.dat } });
    return cpy;
};
exports.accessBeing = accessBeing;
const updateBeing = (cpy, bal, ste) => {
    return cpy;
};
exports.updateBeing = updateBeing;
const createBeing = async (cpy, bal, ste) => {
    if (bal.idx == null)
        bal.idx = String(cpy.avasBitList.length).padStart(6, "0");
    var avaBit = { idx: bal.idx };
    var fidelity, recognition, cohesion;
    var direction, purpose, sovereign;
    var cognition, vocabulary, reminiscence;
    var style, humour, vision;
    var bliyte, grusit, flxuow, kldodu;
    var force, charge, scale;
    var discernment, impulse, sensation;
    var contribution, gravity, providence;
    var pizazz, oomph, zing;
    bit = await ste.bus(ActClr.FETCH_COLOR, { val: 100, src: 2 });
    lst = bit.clrBit.lst;
    fidelity = lst.shift();
    recognition = lst.shift();
    cohesion = lst.shift();
    direction = lst.shift();
    purpose = lst.shift();
    sovereign = lst.shift();
    cognition = lst.shift();
    vocabulary = lst.shift();
    reminiscence = lst.shift();
    style = lst.shift();
    humour = lst.shift();
    vision = lst.shift();
    bliyte = lst.shift();
    grusit = lst.shift();
    flxuow = lst.shift();
    kldodu = lst.shift();
    force = lst.shift();
    charge = lst.shift();
    scale = lst.shift();
    discernment = lst.shift();
    impulse = lst.shift();
    sensation = lst.shift();
    contribution = lst.shift();
    gravity = lst.shift();
    providence = lst.shift();
    pizazz = lst.shift();
    oomph = lst.shift();
    zing = lst.shift();
    var autn = { direction, purpose, sovereign };
    var autr = { fidelity, recognition, cohesion };
    var capa = { cognition, vocabulary, reminiscence };
    var ctiv = { style, humour, vision };
    var etri = { bliyte, grusit, flxuow, kldodu };
    var ints = { force, charge, scale };
    var morl = { discernment, impulse, sensation };
    var pont = { contribution, gravity, providence };
    var viti = { pizazz, oomph, zing };
    avaBit.gft = { autn, autr, capa, ctiv, etri, ints, morl, pont, viti };
    avaBit.now = 'clk00';
    avaBit.src = bal.src;
    bit = await ste.hunt(ActBei.AGE_BEING, avaBit);
    avaBit.age = {};
    avaBit.age.now = bit.beiBit.dat.age;
    avaBit.age.dob = bit.beiBit.dat.dob;
    bit = await ste.hunt(ActBei.WRITE_BEING, { dat: avaBit });
    cpy.nowDex = bit.beiBit.dat.dex;
    if (bal.slv != null)
        bal.slv({ beiBit: { idx: "create-being", dat: avaBit } });
    return cpy;
};
exports.createBeing = createBeing;
const writeBeing = async (cpy, bal, ste) => {
    if (cpy.avasBits[bal.dat.idx] == null) {
        bal.dat.dex = cpy.avasBitList.length;
        cpy.avasBits[bal.dat.idx] = bal.dat.dex;
        cpy.avasBitList.push(bal.dat);
    }
    else {
        cpy.avasBitList[bal.dat.dex] = bal.dat;
    }
    bit = cpy.avasBitList[bal.dat.dex];
    var fileLoc = './data/avas/' + bit.idx + '.json';
    console.log("writing " + fileLoc);
    bit = await ste.bus(ActDsk.WRITE_DISK, { val: 1, src: fileLoc, dat: bit });
    if (bal.slv != null)
        bal.slv({ beiBit: { idx: "write-being", dat: cpy.avasBitList[bal.dat.dex] } });
    return cpy;
};
exports.writeBeing = writeBeing;
const readBeing = (cpy, bal, ste) => {
    if (bal.val != null) {
        cpy.readAvasBit = cpy.avasBitList[bal.val];
        if (bal.slv != null)
            bal.slv({ beiBit: { idx: "read-being", dat: cpy.readAvasBit } });
        return cpy;
    }
    if (bal.idx == null)
        bal.idx = String(cpy.avasBitList.length).padStart(6, "0");
    cpy.readAvasBit = cpy.avasBitList[cpy.avasBits[bal.idx]];
    if (bal.slv != null)
        bal.slv({ beiBit: { idx: "read-being", dat: cpy.readAvasBit } });
    return cpy;
};
exports.readBeing = readBeing;
const ageBeing = async (cpy, bal, ste) => {
    var yrs, mth, wek, day, min, sec;
    switch (bal.src) {
        case STAGES.TODDLER:
            wek = await ste.bus(ActFte.INTEGER_FATE, { lst: [99, 210] });
            day = await ste.bus(ActFte.INTEGER_FATE, { lst: [1, 21] });
            min = await ste.bus(ActFte.INTEGER_FATE, { lst: [99, 210] });
            sec = await ste.bus(ActFte.INTEGER_FATE, { lst: [99, 210] });
            break;
        case STAGES.CHILD:
            yrs = await ste.bus(ActFte.INTEGER_FATE, { lst: [4, 9] });
            mth = await ste.bus(ActFte.INTEGER_FATE, { lst: [1, 12] });
            day = await ste.bus(ActFte.INTEGER_FATE, { lst: [1, 21] });
            min = await ste.bus(ActFte.INTEGER_FATE, { lst: [99, 210] });
            sec = await ste.bus(ActFte.INTEGER_FATE, { lst: [99, 210] });
            break;
        case STAGES.TWEEN:
            yrs = await ste.bus(ActFte.INTEGER_FATE, { lst: [9, 12] });
            mth = await ste.bus(ActFte.INTEGER_FATE, { lst: [1, 12] });
            day = await ste.bus(ActFte.INTEGER_FATE, { lst: [1, 21] });
            min = await ste.bus(ActFte.INTEGER_FATE, { lst: [99, 210] });
            sec = await ste.bus(ActFte.INTEGER_FATE, { lst: [99, 210] });
            break;
        case STAGES.TEENAGER:
            yrs = await ste.bus(ActFte.INTEGER_FATE, { lst: [13, 19] });
            mth = await ste.bus(ActFte.INTEGER_FATE, { lst: [1, 12] });
            day = await ste.bus(ActFte.INTEGER_FATE, { lst: [1, 21] });
            min = await ste.bus(ActFte.INTEGER_FATE, { lst: [99, 210] });
            sec = await ste.bus(ActFte.INTEGER_FATE, { lst: [99, 210] });
            break;
        case STAGES.SOLDIER:
            yrs = await ste.bus(ActFte.INTEGER_FATE, { lst: [20, 45] });
            mth = await ste.bus(ActFte.INTEGER_FATE, { lst: [1, 12] });
            day = await ste.bus(ActFte.INTEGER_FATE, { lst: [1, 21] });
            min = await ste.bus(ActFte.INTEGER_FATE, { lst: [99, 210] });
            sec = await ste.bus(ActFte.INTEGER_FATE, { lst: [99, 210] });
            break;
        case STAGES.JUDGE:
            yrs = await ste.bus(ActFte.INTEGER_FATE, { lst: [45, 60] });
            mth = await ste.bus(ActFte.INTEGER_FATE, { lst: [1, 12] });
            day = await ste.bus(ActFte.INTEGER_FATE, { lst: [1, 21] });
            min = await ste.bus(ActFte.INTEGER_FATE, { lst: [99, 210] });
            sec = await ste.bus(ActFte.INTEGER_FATE, { lst: [99, 210] });
            break;
        case STAGES.MONARCH:
            yrs = await ste.bus(ActFte.INTEGER_FATE, { lst: [60, 80] });
            mth = await ste.bus(ActFte.INTEGER_FATE, { lst: [1, 12] });
            day = await ste.bus(ActFte.INTEGER_FATE, { lst: [1, 21] });
            min = await ste.bus(ActFte.INTEGER_FATE, { lst: [99, 210] });
            sec = await ste.bus(ActFte.INTEGER_FATE, { lst: [99, 210] });
            break;
        case STAGES.OLD_AGED:
            yrs = await ste.bus(ActFte.INTEGER_FATE, { lst: [90, 111] });
            mth = await ste.bus(ActFte.INTEGER_FATE, { lst: [1, 12] });
            day = await ste.bus(ActFte.INTEGER_FATE, { lst: [1, 21] });
            min = await ste.bus(ActFte.INTEGER_FATE, { lst: [99, 210] });
            sec = await ste.bus(ActFte.INTEGER_FATE, { lst: [99, 210] });
            break;
        case STAGES.INFANT:
            wek = await ste.hunt(ActFte.INTEGER_FATE, { lst: [3, 99] });
            break;
        //infant
        default:
            debugger;
            break;
    }
    if (yrs != null)
        yrs = yrs.fteBit.val;
    if (mth != null)
        mth = mth.fteBit.val;
    if (wek != null)
        wek = wek.fteBit.val;
    if (day != null)
        day = day.fteBit.val;
    if (min != null)
        min = min.fteBit.val;
    if (sec != null)
        sec = sec.fteBit.val;
    bit = await ste.bus(ActClk.REDUCE_CLOCK, { idx: 'clk-' + bal.idx, src: bal['now'], yrs, mth, wek, day, min, sec });
    bit = await ste.bus(ActClk.COMPARE_CLOCK, { idx: 'clk-' + bal.idx, src: bal['now'] });
    var age = bit.clkBit.dat;
    age.idx = 'clk-' + bal.idx;
    age.src = bal['now'];
    bit = await ste.bus(ActClk.READ_CLOCK, { idx: 'clk-' + bal.idx });
    var dob = bit.clkBit.dat;
    if (bal.slv != null)
        bal.slv({ beiBit: { idx: "age-being", dat: { age, dob } } });
    return cpy;
};
exports.ageBeing = ageBeing;
const advanceBeing = async (cpy, bal, ste) => {
    bit = await ste.hunt(ActBei.READ_BEING, { val: cpy.nowDex });
    var ava = bit.beiBit.dat;
    bit = await ste.bus(ActClk.UPDATE_CLOCK, { idx: ava.now, day: 1, min: 3, sec: 4 });
    bit = await ste.bus(ActClk.COMPARE_CLOCK, { idx: 'clk-' + ava.idx, src: ava.now });
    ava.age.now = bit.clkBit.dat;
    bit = await ste.bus(ActRsk.ARTICULATE_RISK, {});
    debugger;
    bit = await ste.hunt(ActBei.WRITE_BEING, { dat: ava });
    var dat = bit.beiBit.dat;
    if (bal.slv != null)
        bal.slv({ beiBit: { idx: "advance-being", dat } });
    return cpy;
};
exports.advanceBeing = advanceBeing;
const loadBeing = async (cpy, bal, ste) => {
    bit = await ste.hunt(ActBei.WRITE_BEING, { dat: bal.dat });
    cpy.nowDex = bit.beiBit.dat.dex;
    if (bal.slv != null)
        bal.slv({ beiBit: { idx: "load-being", dat: bit.beiBit.dat } });
    return cpy;
};
exports.loadBeing = loadBeing;
const openBeing = (cpy, bal, ste) => {
    if (bal.slv != null)
        bal.slv({ beiBit: { idx: "open-being", lst: [] } });
    return cpy;
};
exports.openBeing = openBeing;
const STAGES = require("../../val/stages");
//# sourceMappingURL=being.buzz.js.map
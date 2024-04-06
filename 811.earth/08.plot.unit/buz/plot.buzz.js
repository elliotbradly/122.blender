"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPlot = exports.writePlot = exports.readPlot = exports.pushPlot = exports.updatePlot = exports.openPlot = exports.initPlot = void 0;
const ActCol = require("../../97.collect.unit/collect.action");
const ActPlt = require("../../08.plot.unit/plot.action");
var bit, val, idx, dex, lst, dat;
const initPlot = (cpy, bal, ste) => {
    debugger;
    return cpy;
};
exports.initPlot = initPlot;
const openPlot = async (cpy, bal, ste) => {
    if (bal.idx == null)
        bal.idx = 'plt00';
    bit = await ste.hunt(ActPlt.WRITE_PLOT, { idx: bal.idx });
    //get plot list 
    if (bal.slv != null)
        bal.slv({ pltBit: { idx: "open-plot", lst: [] } });
    return cpy;
};
exports.openPlot = openPlot;
const updatePlot = (cpy, bal, ste) => {
    var dat = {};
    if (bal.idx == 'nom1') {
        var bit = dat[bal.idx];
        cpy[bal.idx];
        if (bal.src == 'house')
            bal.lst = ['trashing house'];
    }
    return cpy;
};
exports.updatePlot = updatePlot;
const pushPlot = (cpy, bal, ste) => {
    if (bal.slv != null)
        bal.slv({ pltBit: { idx: "push-plot", lst: [] } });
    return cpy;
};
exports.pushPlot = pushPlot;
const readPlot = async (cpy, bal, ste) => {
    if (bal.idx == null)
        bal.idx = 'plt00';
    bit = await ste.hunt(ActCol.READ_COLLECT, { idx: bal.idx, bit: ActPlt.CREATE_PLOT });
    if (bal.slv != null)
        bal.slv({ pltBit: { idx: "read-plot", dat: bit.clcBit.dat } });
    return cpy;
};
exports.readPlot = readPlot;
const writePlot = async (cpy, bal, ste) => {
    bit = await ste.hunt(ActCol.WRITE_COLLECT, { idx: bal.idx, dat: bal.dat, bit: ActPlt.CREATE_PLOT });
    if (bal.slv != null)
        bal.slv({ pltBit: { idx: "read-plot", dat: bit.clcBit.dat } });
    return cpy;
};
exports.writePlot = writePlot;
const createPlot = (cpy, bal, ste) => {
    const next = (lst) => {
        if (lst.length == 0) {
            if (bal.slv != null)
                bal.slv({ pltBit: { idx: "create-plot", dat: {} } });
            return;
        }
    };
    lst = clone(cpy.plotBitList);
    next(lst);
    return cpy;
};
exports.createPlot = createPlot;
const clone = require("clone-deep");
//# sourceMappingURL=plot.buzz.js.map
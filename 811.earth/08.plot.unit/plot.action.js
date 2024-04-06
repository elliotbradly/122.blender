"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePlot = exports.CREATE_PLOT = exports.WritePlot = exports.WRITE_PLOT = exports.ReadPlot = exports.READ_PLOT = exports.OpenPlot = exports.OPEN_PLOT = exports.PushPlot = exports.PUSH_PLOT = exports.UpdatePlot = exports.UPDATE_PLOT = exports.InitPlot = exports.INIT_PLOT = void 0;
// Plot actions
exports.INIT_PLOT = "[Plot action] Init Plot";
class InitPlot {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.INIT_PLOT;
    }
}
exports.InitPlot = InitPlot;
exports.UPDATE_PLOT = "[Plot action] Update Plot";
class UpdatePlot {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.UPDATE_PLOT;
    }
}
exports.UpdatePlot = UpdatePlot;
exports.PUSH_PLOT = "[Push action] Push Plot";
class PushPlot {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.PUSH_PLOT;
    }
}
exports.PushPlot = PushPlot;
exports.OPEN_PLOT = "[Open action] Open Plot";
class OpenPlot {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.OPEN_PLOT;
    }
}
exports.OpenPlot = OpenPlot;
exports.READ_PLOT = "[Read action] Read Plot";
class ReadPlot {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.READ_PLOT;
    }
}
exports.ReadPlot = ReadPlot;
exports.WRITE_PLOT = "[Write action] Write Plot";
class WritePlot {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.WRITE_PLOT;
    }
}
exports.WritePlot = WritePlot;
exports.CREATE_PLOT = "[Create action] Create Plot";
class CreatePlot {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.CREATE_PLOT;
    }
}
exports.CreatePlot = CreatePlot;
//# sourceMappingURL=plot.action.js.map
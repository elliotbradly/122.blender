"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducer = void 0;
const clone = require("clone-deep");
const Act = require("./plot.action");
const plot_model_1 = require("./plot.model");
const Buzz = require("./plot.buzzer");
function reducer(model = new plot_model_1.PlotModel(), act, state) {
    switch (act.type) {
        case Act.UPDATE_PLOT:
            return Buzz.updatePlot(clone(model), act.bale, state);
        case Act.INIT_PLOT:
            return Buzz.initPlot(clone(model), act.bale, state);
        case Act.PUSH_PLOT:
            return Buzz.pushPlot(clone(model), act.bale, state);
        case Act.OPEN_PLOT:
            return Buzz.openPlot(clone(model), act.bale, state);
        case Act.READ_PLOT:
            return Buzz.readPlot(clone(model), act.bale, state);
        case Act.WRITE_PLOT:
            return Buzz.writePlot(clone(model), act.bale, state);
        case Act.CREATE_PLOT:
            return Buzz.createPlot(clone(model), act.bale, state);
        default:
            return model;
    }
}
exports.reducer = reducer;
//# sourceMappingURL=plot.reduce.js.map
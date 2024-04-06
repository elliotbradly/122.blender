"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducer = void 0;
const clone = require("clone-deep");
const Act = require("./being.action");
const being_model_1 = require("./being.model");
const Buzz = require("./being.buzzer");
function reducer(model = new being_model_1.BeingModel(), act, state) {
    switch (act.type) {
        case Act.UPDATE_BEING:
            return Buzz.updateBeing(clone(model), act.bale, state);
        case Act.INIT_BEING:
            return Buzz.initBeing(clone(model), act.bale, state);
        case Act.OPEN_BEING:
            return Buzz.openBeing(clone(model), act.bale, state);
        case Act.CREATE_BEING:
            return Buzz.createBeing(clone(model), act.bale, state);
        case Act.ACCESS_BEING:
            return Buzz.accessBeing(clone(model), act.bale, state);
        case Act.WRITE_BEING:
            return Buzz.writeBeing(clone(model), act.bale, state);
        case Act.READ_BEING:
            return Buzz.readBeing(clone(model), act.bale, state);
        case Act.AGE_BEING:
            return Buzz.ageBeing(clone(model), act.bale, state);
        case Act.ADVANCE_BEING:
            return Buzz.advanceBeing(clone(model), act.bale, state);
        case Act.LOAD_BEING:
            return Buzz.loadBeing(clone(model), act.bale, state);
        default:
            return model;
    }
}
exports.reducer = reducer;
//# sourceMappingURL=being.reduce.js.map
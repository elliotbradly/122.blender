"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducer = void 0;
const clone = require("clone-deep");
const Act = require("./clock.action");
const clock_model_1 = require("./clock.model");
const Buzz = require("./clock.buzzer");
function reducer(model = new clock_model_1.ClockModel(), act, state) {
    switch (act.type) {
        case Act.UPDATE_CLOCK:
            return Buzz.updateClock(clone(model), act.bale, state);
        case Act.INIT_CLOCK:
            return Buzz.initClock(clone(model), act.bale, state);
        case Act.READ_CLOCK:
            return Buzz.readClock(clone(model), act.bale, state);
        case Act.WRITE_CLOCK:
            return Buzz.writeClock(clone(model), act.bale, state);
        case Act.REMOVE_CLOCK:
            return Buzz.removeClock(clone(model), act.bale, state);
        case Act.CREATE_CLOCK:
            return Buzz.createClock(clone(model), act.bale, state);
        case Act.DELETE_CLOCK:
            return Buzz.deleteClock(clone(model), act.bale, state);
        case Act.BLOCK_CLOCK:
            return Buzz.blockClock(clone(model), act.bale, state);
        case Act.LIST_CLOCK:
            return Buzz.listClock(clone(model), act.bale, state);
        default:
            return model;
    }
}
exports.reducer = reducer;
//# sourceMappingURL=clock.reduce.js.map
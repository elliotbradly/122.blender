"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducer = void 0;
const clone = require("clone-deep");
const Act = require("./control.action");
const control_model_1 = require("./control.model");
const Buzz = require("./control.buzzer");
function reducer(model = new control_model_1.ControlModel(), act, state) {
    switch (act.type) {
        case Act.UPDATE_CONTROL:
            return Buzz.updateControl(clone(model), act.bale, state);
        case Act.INIT_CONTROL:
            return Buzz.initControl(clone(model), act.bale, state);
        default:
            return model;
    }
}
exports.reducer = reducer;
//# sourceMappingURL=control.reduce.js.map
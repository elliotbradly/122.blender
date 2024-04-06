"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducer = void 0;
const clone = require("clone-deep");
const Act = require("./ambit.action");
const ambit_model_1 = require("./ambit.model");
const Buzz = require("./ambit.buzzer");
function reducer(model = new ambit_model_1.AmbitModel(), act, state) {
    switch (act.type) {
        case Act.UPDATE_AMBIT:
            return Buzz.updateAmbit(clone(model), act.bale, state);
        case Act.INIT_AMBIT:
            return Buzz.initAmbit(clone(model), act.bale, state);
        case Act.READ_AMBIT:
            return Buzz.readAmbit(clone(model), act.bale, state);
        case Act.WRITE_AMBIT:
            return Buzz.writeAmbit(clone(model), act.bale, state);
        case Act.REMOVE_AMBIT:
            return Buzz.removeAmbit(clone(model), act.bale, state);
        case Act.DELETE_AMBIT:
            return Buzz.deleteAmbit(clone(model), act.bale, state);
        case Act.CREATE_AMBIT:
            return Buzz.createAmbit(clone(model), act.bale, state);
        default:
            return model;
    }
}
exports.reducer = reducer;
//# sourceMappingURL=ambit.reduce.js.map
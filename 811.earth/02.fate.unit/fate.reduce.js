"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducer = void 0;
const clone = require("clone-deep");
const Act = require("./fate.action");
const fate_model_1 = require("./fate.model");
const Buzz = require("./fate.buzzer");
function reducer(model = new fate_model_1.FateModel(), act, state) {
    switch (act.type) {
        case Act.UPDATE_FATE:
            return Buzz.updateFate(clone(model), act.bale, state);
        case Act.INIT_FATE:
            return Buzz.initFate(clone(model), act.bale, state);
        case Act.INTEGER_FATE:
            return Buzz.integerFate(clone(model), act.bale, state);
        case Act.APPLE_FATE:
            return Buzz.appleFate(clone(model), act.bale, state);
        default:
            return model;
    }
}
exports.reducer = reducer;
//# sourceMappingURL=fate.reduce.js.map
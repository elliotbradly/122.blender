"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducer = void 0;
const clone = require("clone-deep");
const Act = require("./earth.action");
const earth_model_1 = require("./earth.model");
const Buzz = require("./earth.buzzer");
function reducer(model = new earth_model_1.EarthModel(), act, state) {
    switch (act.type) {
        case Act.UPDATE_EARTH:
            return Buzz.updateEarth(clone(model), act.bale, state);
        case Act.INIT_EARTH:
            return Buzz.initEarth(clone(model), act.bale, state);
        case Act.OPEN_EARTH:
            return Buzz.openEarth(clone(model), act.bale, state);
        case Act.READ_EARTH:
            return Buzz.readEarth(clone(model), act.bale, state);
        case Act.WRITE_EARTH:
            return Buzz.writeEarth(clone(model), act.bale, state);
        case Act.CREATE_EARTH:
            return Buzz.createEarth(clone(model), act.bale, state);
        //case Act.PUSH_EARTH:
        // return Buzz.pushEarth(clone(model), act.bale, state);
        case Act.AUTO_EARTH:
            return Buzz.autoEarth(clone(model), act.bale, state);
        case Act.TEST_EARTH:
            return Buzz.testEarth(clone(model), act.bale, state);
        default:
            return model;
    }
}
exports.reducer = reducer;
//# sourceMappingURL=earth.reduce.js.map
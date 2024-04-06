"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducer = void 0;
const clone = require("clone-deep");
const Act = require("./arena.action");
const arena_model_1 = require("./arena.model");
const Buzz = require("./arena.buzzer");
function reducer(model = new arena_model_1.ArenaModel(), act, state) {
    switch (act.type) {
        case Act.UPDATE_ARENA:
            return Buzz.updateArena(clone(model), act.bale, state);
        case Act.INIT_ARENA:
            return Buzz.initArena(clone(model), act.bale, state);
        case Act.READ_ARENA:
            return Buzz.readArena(clone(model), act.bale, state);
        case Act.WRITE_ARENA:
            return Buzz.writeArena(clone(model), act.bale, state);
        case Act.REMOVE_ARENA:
            return Buzz.removeArena(clone(model), act.bale, state);
        case Act.DELETE_ARENA:
            return Buzz.deleteArena(clone(model), act.bale, state);
        case Act.CREATE_ARENA:
            return Buzz.createArena(clone(model), act.bale, state);
        default:
            return model;
    }
}
exports.reducer = reducer;
//# sourceMappingURL=arena.reduce.js.map
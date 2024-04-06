"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducer = void 0;
const clone = require("clone-deep");
const Act = require("./menu.action");
const menu_model_1 = require("./menu.model");
const Buzz = require("./menu.buzzer");
function reducer(model = new menu_model_1.MenuModel(), act, state) {
    switch (act.type) {
        case Act.UPDATE_MENU:
            return Buzz.updateMenu(clone(model), act.bale, state);
        case Act.INIT_MENU:
            return Buzz.initMenu(clone(model), act.bale, state);
        case Act.TEST_MENU:
            return Buzz.testMenu(clone(model), act.bale, state);
        case Act.CLOSE_MENU:
            return Buzz.closeMenu(clone(model), act.bale, state);
        case Act.EARTH_MENU:
            return Buzz.earthMenu(clone(model), act.bale, state);
        case Act.COLOR_MENU:
            return Buzz.colorMenu(clone(model), act.bale, state);
        case Act.CLOCK_MENU:
            return Buzz.clockMenu(clone(model), act.bale, state);
        case Act.AMBIT_MENU:
            return Buzz.ambitMenu(clone(model), act.bale, state);
        case Act.ARENA_MENU:
            return Buzz.arenaMenu(clone(model), act.bale, state);
        case Act.PRINT_MENU:
            return Buzz.printMenu(clone(model), act.bale, state);
        case Act.PLAY_MENU:
            return Buzz.playMenu(clone(model), act.bale, state);
        default:
            return model;
    }
}
exports.reducer = reducer;
//# sourceMappingURL=menu.reduce.js.map
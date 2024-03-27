"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateControl = exports.UPDATE_CONTROL = exports.InitControl = exports.INIT_CONTROL = void 0;
// Control actions
exports.INIT_CONTROL = "[Control action] Init Control";
class InitControl {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.INIT_CONTROL;
    }
}
exports.InitControl = InitControl;
exports.UPDATE_CONTROL = "[Control action] Update Control";
class UpdateControl {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.UPDATE_CONTROL;
    }
}
exports.UpdateControl = UpdateControl;
//# sourceMappingURL=control.action.js.map
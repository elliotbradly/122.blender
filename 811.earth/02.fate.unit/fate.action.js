"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppleFate = exports.APPLE_FATE = exports.IntegerFate = exports.INTEGER_FATE = exports.UpdateFate = exports.UPDATE_FATE = exports.InitFate = exports.INIT_FATE = void 0;
// Fate actions
exports.INIT_FATE = "[Fate action] Init Fate";
class InitFate {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.INIT_FATE;
    }
}
exports.InitFate = InitFate;
exports.UPDATE_FATE = "[Fate action] Update Fate";
class UpdateFate {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.UPDATE_FATE;
    }
}
exports.UpdateFate = UpdateFate;
exports.INTEGER_FATE = "[Integer action] Integer Fate";
class IntegerFate {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.INTEGER_FATE;
    }
}
exports.IntegerFate = IntegerFate;
exports.APPLE_FATE = "[Apple action] Apple Fate";
class AppleFate {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.APPLE_FATE;
    }
}
exports.AppleFate = AppleFate;
//# sourceMappingURL=fate.action.js.map
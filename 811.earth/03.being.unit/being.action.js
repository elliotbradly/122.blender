"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadBeing = exports.LOAD_BEING = exports.AdvanceBeing = exports.ADVANCE_BEING = exports.AgeBeing = exports.AGE_BEING = exports.ReadBeing = exports.READ_BEING = exports.WriteBeing = exports.WRITE_BEING = exports.AccessBeing = exports.ACCESS_BEING = exports.CreateBeing = exports.CREATE_BEING = exports.OpenBeing = exports.OPEN_BEING = exports.UpdateBeing = exports.UPDATE_BEING = exports.InitBeing = exports.INIT_BEING = void 0;
// Being actions
exports.INIT_BEING = "[Being action] Init Being";
class InitBeing {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.INIT_BEING;
    }
}
exports.InitBeing = InitBeing;
exports.UPDATE_BEING = "[Being action] Update Being";
class UpdateBeing {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.UPDATE_BEING;
    }
}
exports.UpdateBeing = UpdateBeing;
exports.OPEN_BEING = "[Open action] Open Being";
class OpenBeing {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.OPEN_BEING;
    }
}
exports.OpenBeing = OpenBeing;
exports.CREATE_BEING = "[Create action] Create Being";
class CreateBeing {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.CREATE_BEING;
    }
}
exports.CreateBeing = CreateBeing;
exports.ACCESS_BEING = "[Access action] Access Being";
class AccessBeing {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.ACCESS_BEING;
    }
}
exports.AccessBeing = AccessBeing;
exports.WRITE_BEING = "[Write action] Write Being";
class WriteBeing {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.WRITE_BEING;
    }
}
exports.WriteBeing = WriteBeing;
exports.READ_BEING = "[Read action] Read Being";
class ReadBeing {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.READ_BEING;
    }
}
exports.ReadBeing = ReadBeing;
exports.AGE_BEING = "[Age action] Age Being";
class AgeBeing {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.AGE_BEING;
    }
}
exports.AgeBeing = AgeBeing;
exports.ADVANCE_BEING = "[Advance action] Advance Being";
class AdvanceBeing {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.ADVANCE_BEING;
    }
}
exports.AdvanceBeing = AdvanceBeing;
exports.LOAD_BEING = "[Load action] Load Being";
class LoadBeing {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.LOAD_BEING;
    }
}
exports.LoadBeing = LoadBeing;
//# sourceMappingURL=being.action.js.map
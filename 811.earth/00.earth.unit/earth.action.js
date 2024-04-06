"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestEarth = exports.TEST_EARTH = exports.AutoEarth = exports.AUTO_EARTH = exports.PushEarth = exports.PUSH_EARTH = exports.CreateEarth = exports.CREATE_EARTH = exports.WriteEarth = exports.WRITE_EARTH = exports.ReadEarth = exports.READ_EARTH = exports.OpenEarth = exports.OPEN_EARTH = exports.UpdateEarth = exports.UPDATE_EARTH = exports.InitEarth = exports.INIT_EARTH = void 0;
// Earth actions
exports.INIT_EARTH = "[Earth action] Init Earth";
class InitEarth {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.INIT_EARTH;
    }
}
exports.InitEarth = InitEarth;
exports.UPDATE_EARTH = "[Earth action] Update Earth";
class UpdateEarth {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.UPDATE_EARTH;
    }
}
exports.UpdateEarth = UpdateEarth;
exports.OPEN_EARTH = "[Open action] Open Earth";
class OpenEarth {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.OPEN_EARTH;
    }
}
exports.OpenEarth = OpenEarth;
exports.READ_EARTH = "[Read action] Read Earth";
class ReadEarth {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.READ_EARTH;
    }
}
exports.ReadEarth = ReadEarth;
exports.WRITE_EARTH = "[Write action] Write Earth";
class WriteEarth {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.WRITE_EARTH;
    }
}
exports.WriteEarth = WriteEarth;
exports.CREATE_EARTH = "[Create action] Create Earth";
class CreateEarth {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.CREATE_EARTH;
    }
}
exports.CreateEarth = CreateEarth;
exports.PUSH_EARTH = "[Progress action] Push Earth";
class PushEarth {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.PUSH_EARTH;
    }
}
exports.PushEarth = PushEarth;
exports.AUTO_EARTH = "[Run action] Auto Earth";
class AutoEarth {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.AUTO_EARTH;
    }
}
exports.AutoEarth = AutoEarth;
exports.TEST_EARTH = "[Test action] Test Earth";
class TestEarth {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.TEST_EARTH;
    }
}
exports.TestEarth = TestEarth;
//# sourceMappingURL=earth.action.js.map
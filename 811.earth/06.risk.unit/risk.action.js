"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReadRisk = exports.READ_RISK = exports.WriteRisk = exports.WRITE_RISK = exports.CreateRisk = exports.CREATE_RISK = exports.LoadRisk = exports.LOAD_RISK = exports.ListRisk = exports.LIST_RISK = exports.OpenRisk = exports.OPEN_RISK = exports.VerifyRisk = exports.VERIFY_RISK = exports.UpdateRisk = exports.UPDATE_RISK = exports.FashionRisk = exports.FASHION_RISK = exports.ArticulateRisk = exports.ARTICULATE_RISK = exports.InitRisk = exports.INIT_RISK = void 0;
// Risk actions
exports.INIT_RISK = "[Risk action] Init Risk";
class InitRisk {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.INIT_RISK;
    }
}
exports.InitRisk = InitRisk;
exports.ARTICULATE_RISK = "[Risk action] Articulate Risk";
class ArticulateRisk {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.ARTICULATE_RISK;
    }
}
exports.ArticulateRisk = ArticulateRisk;
exports.FASHION_RISK = "[Risk action] Fashion Risk";
class FashionRisk {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.FASHION_RISK;
    }
}
exports.FashionRisk = FashionRisk;
exports.UPDATE_RISK = "[Risk action] Update Risk";
class UpdateRisk {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.UPDATE_RISK;
    }
}
exports.UpdateRisk = UpdateRisk;
exports.VERIFY_RISK = "[Verify action] Verify Risk";
class VerifyRisk {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.VERIFY_RISK;
    }
}
exports.VerifyRisk = VerifyRisk;
exports.OPEN_RISK = "[Open action] Open Risk";
class OpenRisk {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.OPEN_RISK;
    }
}
exports.OpenRisk = OpenRisk;
exports.LIST_RISK = "[List action] List Risk";
class ListRisk {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.LIST_RISK;
    }
}
exports.ListRisk = ListRisk;
exports.LOAD_RISK = "[Load action] Load Risk";
class LoadRisk {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.LOAD_RISK;
    }
}
exports.LoadRisk = LoadRisk;
exports.CREATE_RISK = "[Create action] Create Risk";
class CreateRisk {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.CREATE_RISK;
    }
}
exports.CreateRisk = CreateRisk;
exports.WRITE_RISK = "[Write action] Write Risk";
class WriteRisk {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.WRITE_RISK;
    }
}
exports.WriteRisk = WriteRisk;
exports.READ_RISK = "[Read action] Read Risk";
class ReadRisk {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.READ_RISK;
    }
}
exports.ReadRisk = ReadRisk;
//# sourceMappingURL=risk.action.js.map
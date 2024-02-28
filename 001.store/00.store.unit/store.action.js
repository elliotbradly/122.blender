"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExecuteStore = exports.EXECUTE_STORE = exports.GenerateStore = exports.GENERATE_STORE = exports.DeployStore = exports.DEPLOY_STORE = exports.CloseStore = exports.CLOSE_STORE = exports.DevStore = exports.DEV_STORE = exports.PatchStore = exports.PATCH_STORE = exports.EditStore = exports.EDIT_STORE = exports.RunStore = exports.RUN_STORE = exports.OpenStore = exports.OPEN_STORE = exports.UpdateStore = exports.UPDATE_STORE = exports.InitStore = exports.INIT_STORE = void 0;
exports.INIT_STORE = "[Store action] Init Store";
class InitStore {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.INIT_STORE;
    }
}
exports.InitStore = InitStore;
exports.UPDATE_STORE = "[Store action] Update Store";
class UpdateStore {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.UPDATE_STORE;
    }
}
exports.UpdateStore = UpdateStore;
exports.OPEN_STORE = "[Open action] Open Store";
class OpenStore {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.OPEN_STORE;
    }
}
exports.OpenStore = OpenStore;
exports.RUN_STORE = "[Run action] Run Store";
class RunStore {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.RUN_STORE;
    }
}
exports.RunStore = RunStore;
exports.EDIT_STORE = "[Edit action] Edit Store";
class EditStore {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.EDIT_STORE;
    }
}
exports.EditStore = EditStore;
exports.PATCH_STORE = "[Patch action] Patch Store";
class PatchStore {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.PATCH_STORE;
    }
}
exports.PatchStore = PatchStore;
exports.DEV_STORE = "[Dev action] Dev Store";
class DevStore {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.DEV_STORE;
    }
}
exports.DevStore = DevStore;
exports.CLOSE_STORE = "[Close action] Close Store";
class CloseStore {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.CLOSE_STORE;
    }
}
exports.CloseStore = CloseStore;
exports.DEPLOY_STORE = "[Deploy action] Deploy Store";
class DeployStore {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.DEPLOY_STORE;
    }
}
exports.DeployStore = DeployStore;
exports.GENERATE_STORE = "[Generate action] Generate Store";
class GenerateStore {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.GENERATE_STORE;
    }
}
exports.GenerateStore = GenerateStore;
exports.EXECUTE_STORE = "[Execute action] Execute Store";
class ExecuteStore {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.EXECUTE_STORE;
    }
}
exports.ExecuteStore = ExecuteStore;
//# sourceMappingURL=store.action.js.map
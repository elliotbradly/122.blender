"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducer = void 0;
const clone = require("clone-deep");
const Act = require("./store.action");
const store_model_1 = require("./store.model");
const Buzz = require("./store.buzzer");
function reducer(model = new store_model_1.StoreModel(), act, state) {
    switch (act.type) {
        case Act.UPDATE_STORE:
            return Buzz.updateStore(clone(model), act.bale, state);
        case Act.INIT_STORE:
            return Buzz.initStore(clone(model), act.bale, state);
        case Act.OPEN_STORE:
            return Buzz.openStore(clone(model), act.bale, state);
        case Act.RUN_STORE:
            return Buzz.runStore(clone(model), act.bale, state);
        case Act.EDIT_STORE:
            return Buzz.editStore(clone(model), act.bale, state);
        case Act.PATCH_STORE:
            return Buzz.patchStore(clone(model), act.bale, state);
        case Act.DEV_STORE:
            return Buzz.devStore(clone(model), act.bale, state);
        case Act.CLOSE_STORE:
            return Buzz.closeStore(clone(model), act.bale, state);
        case Act.DEPLOY_STORE:
            return Buzz.deployStore(clone(model), act.bale, state);
        case Act.GENERATE_STORE:
            return Buzz.generateStore(clone(model), act.bale, state);
        case Act.EXECUTE_STORE:
            return Buzz.executeStore(clone(model), act.bale, state);
        default:
            return model;
    }
}
exports.reducer = reducer;
//# sourceMappingURL=store.reduce.js.map
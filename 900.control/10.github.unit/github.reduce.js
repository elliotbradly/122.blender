"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducer = void 0;
const clone = require("clone-deep");
const Act = require("./github.action");
const github_model_1 = require("./github.model");
const Buzz = require("./github.buzzer");
function reducer(model = new github_model_1.GithubModel(), act, state) {
    switch (act.type) {
        case Act.UPDATE_GITHUB:
            return Buzz.updateGithub(clone(model), act.bale, state);
        case Act.INIT_GITHUB:
            return Buzz.initGithub(clone(model), act.bale, state);
        case Act.COMMIT_GITHUB:
            return Buzz.commitGithub(clone(model), act.bale, state);
        default:
            return model;
    }
}
exports.reducer = reducer;
//# sourceMappingURL=github.reduce.js.map
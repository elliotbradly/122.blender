"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateGithub = exports.UPDATE_GITHUB = exports.InitGithub = exports.INIT_GITHUB = void 0;
// Github actions
exports.INIT_GITHUB = "[Github action] Init Github";
class InitGithub {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.INIT_GITHUB;
    }
}
exports.InitGithub = InitGithub;
exports.UPDATE_GITHUB = "[Github action] Update Github";
class UpdateGithub {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.UPDATE_GITHUB;
    }
}
exports.UpdateGithub = UpdateGithub;
//# sourceMappingURL=github.action.js.map
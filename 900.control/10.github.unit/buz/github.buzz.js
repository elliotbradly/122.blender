"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateGithub = exports.initGithub = void 0;
var bit, val, idx, dex, lst, dat, src;
const initGithub = (cpy, bal, ste) => {
    debugger;
    return cpy;
};
exports.initGithub = initGithub;
const updateGithub = async (cpy, bal, ste) => {
    var github = process.env.GITHUB;
    const octokit = new octokit_1.Octokit({
        auth: github
    });
    bit = await octokit.request("POST /repos/{owner}/{repo}/issues", {
        owner: "elliotbradly",
        repo: "000.bee-base",
        title: "Created with the REST API",
        body: "This is a test issue created by the REST API",
    });
    bal.slv({ gitBit: { idx: "update-git", dat: { bit } } });
    return cpy;
};
exports.updateGithub = updateGithub;
const octokit_1 = require("octokit");
//# sourceMappingURL=github.buzz.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.commitGithub = exports.updateGithub = exports.initGithub = void 0;
const { exec } = require('child_process');
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
const commitGithub = (cpy, bal, ste) => {
    if (bal.val == null)
        bal.val = 0;
    if (bal.src == null)
        bal.src = 'committing...';
    if (bal.lst == null)
        bal.lst = [];
    if (bal.dat == null)
        bal.dat = {};
    for (var i = 0; i < bal.val; i++) {
        process.chdir("../");
    }
    bal.lst.forEach((a) => { process.chdir(a); });
    var message = 'git commit -am "' + bal.src + '" && git push';
    exec(message, async (err, stdout, stderr) => {
        lst = stdout.split('\n');
        if (stderr && stderr.includes('warning') == false) {
            bal.slv({ gitBit: { idx: "commit-git", src: 'git-error', lst } });
            return cpy;
        }
        if (bal.dat == null)
            bal.dat = {};
        if (bal.dat.lst != null) {
            bal.dat.lst.forEach((a) => { process.chdir(a); });
        }
        bal.slv({ gitBit: { idx: "commit-git", lst } });
        return cpy;
    });
};
exports.commitGithub = commitGithub;
const octokit_1 = require("octokit");
//# sourceMappingURL=github.buzz.js.map
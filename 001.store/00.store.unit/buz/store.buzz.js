"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.executeStore = exports.generateStore = exports.closeStore = exports.deployStore = exports.devStore = exports.patchStore = exports.editStore = exports.runStore = exports.openStore = exports.updateStore = exports.initStore = void 0;
const ActMnu = require("../../98.menu.unit/menu.action");
const ActBus = require("../../99.bus.unit/bus.action");
const ActStr = require("../store.action");
const ActCns = require("../../act/console.action");
const ActPvt = require("../../act/pivot.action");
var bit, val, idx, dex, lst, dat;
const initStore = async (cpy, bal, ste) => {
    if (bal.dat != null)
        bit = await ste.hunt(ActBus.INIT_BUS, { idx: cpy.idx, lst: [ActStr], dat: bal.dat, src: bal.src });
    if (bal.val == 1)
        patch(ste, ActMnu.INIT_MENU, bal);
    if (bal.slv != null)
        bal.slv({ intBit: { idx: "init-store" } });
    return cpy;
};
exports.initStore = initStore;
const updateStore = async (cpy, bal, ste) => {
    bit = await ste.bus(ActPvt.UPDATE_PIVOT, { src: '001.store' });
    if (bal.slv != null)
        bal.slv({ strBit: { idx: "update-store" } });
    return cpy;
};
exports.updateStore = updateStore;
const openStore = async (cpy, bal, ste) => {
    if (bal.slv != null)
        bal.slv({ strBit: { idx: "open-store", dat: {} } });
    //   const sqlite3 = require('sqlite3').verbose();
    //   let db = new sqlite3.Database('./data/alligator-earth.db', (err) => {
    //       if (err) {
    //           console.error(err.message);
    //           debugger
    //       }
    //       console.log('Connected to the my database.');
    //       let sql = `SELECT 
    //       name
    //   FROM 
    //       sqlite_schema
    //   WHERE 
    //       type ='table' AND 
    //       name NOT LIKE 'sqlite_%';
    //       `;
    //       db.all(sql, [], (err, rows) => {
    //           if (err) {
    //               throw err;
    //          }
    //         rows.forEach((row) => {
    //            console.log(row.name);
    //       });
    //   });
    // close the database connection
    //   db.close();
    // });
    return cpy;
};
exports.openStore = openStore;
const runStore = async (cpy, bal, ste) => {
    const open = require('open');
    var loc = './vrt.gil.bat';
    bit = await open(loc);
    setTimeout(() => {
        if (bal.slv != null)
            bal.slv({ strBit: { idx: "run-store" } });
    });
    return cpy;
};
exports.runStore = runStore;
const editStore = (cpy, bal, ste) => {
    const { exec } = require('child_process');
    process.chdir("../../studio/");
    exec('start Code.exe ../packages/gillisse', async (err, stdout, stderr) => {
        if (err) {
            console.error(`exec error: ${err}`);
        }
        process.chdir("../packages/001.store");
        if (bal.slv != null)
            bal.slv({ strBit: { idx: "edit-store", dat: {} } });
    });
    return cpy;
};
exports.editStore = editStore;
const patchStore = (cpy, bal, ste) => {
    debugger;
    return cpy;
};
exports.patchStore = patchStore;
const devStore = (cpy, bal, ste) => {
    const { exec } = require('child_process');
    process.chdir("./base/");
    cpy.process = exec('wrangler dev', async (err, stdout, stderr) => {
        if (err) {
            console.error(`exec error: ${err}`);
        }
        ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: stdout });
        //if you could only send a message out
    });
    process.chdir("../");
    bal.slv({ strBit: { idx: "dev-store", src: 'wrangler-dev' } });
    return cpy;
};
exports.devStore = devStore;
const deployStore = (cpy, bal, ste) => {
    const { exec } = require('child_process');
    process.chdir("./base/");
    cpy.process = exec('wrangler deploy', async (err, stdout, stderr) => {
        if (err) {
            console.error(`exec error: ${err}`);
        }
        ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: stdout });
        process.chdir("../");
        var open = require('open');
        open('https://orange-voice-caa1.beeing.workers.dev/');
        bal.slv({ strBit: { idx: "deploy-store", src: 'wrangler-deploy' } });
    });
    return cpy;
};
exports.deployStore = deployStore;
const closeStore = (cpy, bal, ste) => {
    process.exit();
    bal.slv({ strBit: { idx: "close-store", val: 3 } });
    return cpy;
};
exports.closeStore = closeStore;
const generateStore = (cpy, bal, ste) => {
    const { exec } = require('child_process');
    process.chdir("./base/");
    cpy.process = exec('npm run generate', async (err, stdout, stderr) => {
        if (err) {
            console.error(`exec error: ${err}`);
        }
        ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: stdout });
        process.chdir("../");
        //var open = require('open')
        //open('https://orange-voice-caa1.beeing.workers.dev/')
        bal.slv({ strBit: { idx: "generate-store", src: 'gen' } });
    });
    return cpy;
};
exports.generateStore = generateStore;
const executeStore = (cpy, bal, ste) => {
    if (bal.val = null)
        bal.val = 0;
    const { exec } = require('child_process');
    process.chdir("./base/");
    var out0 = 'wrangler d1 execute ' + bal.src + '--local --file=./drizzle/' + bal.idx;
    var out1 = 'wrangler d1 execute ' + bal.src + '--file=./drizzle/' + bal.idx;
    cpy.process = exec(out1, async (err, stdout, stderr) => {
        if (err) {
            console.error(`exec error: ${err}`);
        }
        ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: stdout });
        process.chdir("../");
        var open = require('open');
        open('https://orange-voice-caa1.beeing.workers.dev/');
        bal.slv({ strBit: { idx: "execute-store", src: 'gen' } });
    });
    return cpy;
};
exports.executeStore = executeStore;
var patch = (ste, type, bale) => ste.dispatch({ type, bale });
//# sourceMappingURL=store.buzz.js.map
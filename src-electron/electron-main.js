import { app, ipcMain, dialog, BrowserWindow } from 'electron'
import path from 'path'
import os from 'os'

// needed in case process is undefined under Linux
const platform = process.platform || os.platform()

let mainWindow

const MQTT = require('async-mqtt');
const PORT = 1001;

//const GAME =  require('./game')
//const PLAY = require('../000.play/index.js')
//const ActPly = require('../000.play/00.play.unit/play.action')

//const STORE = require('../001.store/index.js')
//const ActStr = require('../001.store/00.store.unit/store.action')

//const SPACE = require('../002.space/index.js')
//const ActSpc = require('../002.space/00.space.unit/space.action')
//const ActMap = require('../002.space/03.hexmap.unit/hexmap.action')
//const ActFoc = require('../002.space/01.focus.unit/focus.action')

const local = 'mqtt://localhost:' + PORT;

var bit;

//SPACE.hunt(ActSpc.INIT_SPACE, { val: 0, dat: MQTT, src: local })

//console.log(JSON.stringify(bit))

async function handleFileOpen() {
  const { canceled, filePaths } = await dialog.showOpenDialog({})
  if (!canceled) {
    return filePaths[0]
  }
}

async function openGame() {

  //GAME.open( SPACE );

  //bit = await SPACE.hunt(ActFoc.WRITE_FOCUS, { foc: 'foc00' })
  //bit = await SPACE.hunt(ActFoc.WRITE_FOCUS, { foc: 'foc00' })

  //var bit = await PLAY.hunt(ActPly.OPEN_PLAY, { val: 0 })
  return {intBit:{idx:'game-opened'}}
}


async function createWindow() {

  ipcMain.handle('dialog:openFile', handleFileOpen)
  //ipcMain.handle('game:openGame', openGame)

  /**
   * Initial window options
   */
  mainWindow = new BrowserWindow({
    icon: path.resolve(__dirname, 'icons/icon.png'), // tray icon
    width: 480,
    height: 480,
    useContentSize: true,
    webPreferences: {
      contextIsolation: true,
      // More info: https://v2.quasar.dev/quasar-cli-vite/developing-electron-apps/electron-preload-script
      preload: path.resolve(__dirname, process.env.QUASAR_ELECTRON_PRELOAD)
    }
  })

 // mainWindow.setPosition(-950, 250);

  //mainWindow.setPosition(950, 250);
  mainWindow.maximize();

  console.log("in the beginning...")

  // IPC listener
  ipcMain.on('electron-store-get', async (event, val) => {

    bit = await TIME.hunt(ActTme.INIT_TIME, { val: 0 })
    event.returnValue = JSON.stringify(bit);

  });
  ipcMain.on('electron-store-set', async (event, key, val) => {
    store.set('alligator', 0);
  });


  mainWindow.loadURL(process.env.APP_URL)

  if (process.env.DEBUGGING) {
    // if on DEV or Production with debug enabled
    mainWindow.webContents.openDevTools()
  } else {
    // we're on production; no access to devtools pls
    mainWindow.webContents.on('devtools-opened', () => {
      mainWindow.webContents.closeDevTools()
    })
  }

  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})

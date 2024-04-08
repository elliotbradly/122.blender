//=============================================================================
// RPG Maker MZ - Alligator Earth
//=============================================================================

/*:
 * @target MZ
 * @plugindesc Enhance Role-Playing Game.
 * @author Brad Henderson
 *
 * @help Alligator-Earth.js
 *
 * This plugin provides a command to call a common event when a picture is
 * clicked.
 *
 * Use it in the following procedure.
 *   1. Execute "Show Picture" to display your button image.
 *   2. Call the plugin command "Set Button Picture".
 *
 * @command set
 * @text Set Button Picture
 * @desc Makes the specified picture clickable.
 *
 * @arg pictureId
 * @type number
 * @min 1
 * @max 100
 * @default 1
 * @text Picture Number
 * @desc Control number of the picture.
 *
 * @arg commonEventId
 * @type common_event
 * @default 1
 * @text Common Event
 * @desc Common event to call when the picture is clicked.
 */

(() => {
  $DEBUG = true;

  const pluginName = "Alligator-Earth";

  PluginManager.registerCommand(pluginName, "set", (args) => { });

  Scene_Boot.prototype.startNormalGame = async function () {

    if (Utils.isNwjs()) {
      nw.Window.get().showDevTools();
    }

    DataManager.setupNewGame();

    //if (DataManager.isAnySavefileExists()) {
    //    SceneManager.goto(Scene_Title);
    //} else {
    SceneManager.goto(Scene_Map);
    //}

    Window_TitleCommand.initCommandPosition();

    setTimeout(async () => {

      var initBlender = window.BLENDER.ActBld.INIT_BLENDER;
      var initShade = window.SHADE.ActShd.INIT_SHADE;
      var initStage = window.BLENDER.ActRps.INIT_RPGSTAGE;
      var debugStage = window.BLENDER.ActRps.DEBUG_RPGSTAGE;

  
      var dat = {
        gameTemp: $gameTemp,
        gameSystem: $gameSystem,
        gameScreen: $gameScreen, 
        gameTimer: $gameTimer, 
        gameMessage: $gameMessage,
        gameSwitches: $gameSwitches,
        gameVariables: $gameVariables,
        gameSelfSwitches: $gameSelfSwitches,
        gameActors: $gameActors,
        gameParty: $gameParty,
        gameTroop: $gameTroop,
        gameMap: $gameMap,
        gamePlayer: $gamePlayer,
        
        sceneManager: SceneManager,
        shade: window.SHADE,
        graphics: Graphics,

        dataActors: $dataActors,
        dataMapInfos: $dataMapInfos,
        dataMap: $dataMap
      }

      var bit;

      bit = await window.SHADE.hunt(initShade, { val: 0 });
      bit = await window.BLENDER.hunt(initBlender, { val: 0 });
      bit = await window.BLENDER.hunt(initStage, { dat });

      window.BLENDER.hunt( debugStage, { src: 'Scene Boot' });


      var Scene_Map_create = Scene_Map.prototype.create;
      Scene_Map.prototype.create = async function (){
    
        window.BLENDER.hunt( debugStage, { src: 'create scene map' });
        
        Scene_Map_create.call(this);
      }
    

    }, 1011);

  };



  var Game_Player_executeMove = Game_Player.prototype.executeMove;
  Game_Player.prototype.executeMove = function (direction) {
    //window.location = './vue.html'

    console.log(JSON.stringify(direction));
    //if (direction % 2 == 0) {
    Game_Player_executeMove.call(this, direction);
    //} else {
    // const dirArray = Galv.DM.getHorzVertDirs(direction);
    // this.moveDiagonally(dirArray[0], dirArray[1]);
    //};
  };

})();

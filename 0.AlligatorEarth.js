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

      var MQTT = window.BLENDER.MQTT;
      console.log("mqtt" + MQTT);

      const local = "ws://swamp-fly-448d63614f75.herokuapp.com/";
      const localBit = { idx: "local", src: "ws://swamp-fly-448d63614f75.herokuapp.com/" };

      var initBld = window.BLENDER.ActBld.INIT_BLENDER;
      var openBld = window.BLENDER.ActBld.OPEN_BLENDER;
      var initAtv = window.BLENDER.ActAtv.INIT_ACTIVITY;
      var initMap = window.BLENDER.ActRpm.INIT_RPGMAP;
      var initStage = window.BLENDER.ActRps.INIT_RPGSTAGE;

      var dat = {
        gameTemp:$gameTemp,
        gameSystem:$gameSystem,
        gameMap:$gameMap
      }

      var bit = await window.BLENDER.hunt(initBld, { val: 0 });
      //var bit = await window.BLENDER.hunt(initAtv, { val: 0 });
      //var bit = await window.BLENDER.hunt(initBld, { val: 0, dat: MQTT, src: local });
      //window.BLENDER.hunt(openBld, { idx: "simo-beeing" });
      bit = await window.BLENDER.hunt(initStage, { dat });


      //var display = SceneManager._scene._spriteset._characterSprites[6];
      var display = SceneManager._scene._spriteset._destinationSprite;

      display.alpha = 0.5;

      var display = SceneManager._scene._spriteset;
      display = SceneManager._scene._ultraHudContainer;
      debugger

      //debugger

      //_spriteset
      //debugger;
      Spriteset_Map;

      var base = new Sprite(ImageManager.loadPicture("Actor1_1"));

      //Graphics.app.stage.children[0].addChild(base);

      display.addChild(base);

      //$gameTemp._pkdJoyStick.base.addChild(base);

      //this.addChild(base);
      //this.addChildToBack(base);


      var count = 0;

      //Party.create(2);
      //Party.addActor(2, 3);
      //Party.setLocation(2, 12, 12, 5);

      //Party.create(3);
      //Party.addActor(3, 4);
      //Party.setLocation(3, 15, 15, 5);

      //setTimeout(() => {
      //  Party.switch(2);
      //}, 2222);

      //setTimeout(() => {
      //  Party.switch(3);
      //}, 12222);

      //setTimeout(() => {
      //  Party.switch(1);
      //}, 32222);

      setInterval(() => {
        count += 1;

        // document.dispatchEvent(
        //   new KeyboardEvent("keydown", {
        //     key: "e",
        //     keyCode: 39, // example values.
        //     code: "ArrowRight", // put everything you need in this object.
        //     which: 69,
        //     shiftKey: false, // you don't need to include values
        //     ctrlKey: false, // if you aren't going to use them.
        //     metaKey: false, // these are here for example's sake.
        //   })
        // );

        //$gameMessage.add('\SEPLAY[]  ' + count );

        //Game_Player_executeMove.call(this, 8);
        //console.log('go')
      }, 1444);

    }, 1111);

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

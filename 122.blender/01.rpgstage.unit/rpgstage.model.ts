import Rpgstage from "./fce/rpgstage.interface";
import RpgstageBit from "./fce/rpgstage.interface";

export class RpgstageModel implements Rpgstage {

    live:Boolean = true;

    shade: any;

    graphics:any;

    gameTemp: any;
    gameSystem: any;
    gameScreen: any;
    gameTimer: any;
    gameMessage: any;
    gameSwitches:any;
    gameVariables: any;
    gameSelfSwitches :any;
    gameActors:any;
    gameParty:any;
    gameTroop:any;
    gameMap: any;
    gamePlayer: any;

    sceneManager: any;
    sceneChangeCount:number = 0;

    debugList: string[] = []
    debugListSize:number = 10; 

    dataActors: any;
    dataMapInfos: any;
    dataMap:any;

    partyPlugin:any;


    timecode:string = 'timecode : '
    now:number = 0;
    cde:string = ''


    //idx:string;
    //rpgstageBitList: RpgstageBit[] = [];
    //rpgstageBits: any = {};
}

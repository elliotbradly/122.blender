import Rpgstage from "./fce/rpgstage.interface";
import RpgstageBit from "./fce/rpgstage.interface";

export class RpgstageModel implements Rpgstage {

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

    debugList: string[] = []
    debugListSize:number = 8; 

    dataActors: any;



    //idx:string;
    //rpgstageBitList: RpgstageBit[] = [];
    //rpgstageBits: any = {};
}

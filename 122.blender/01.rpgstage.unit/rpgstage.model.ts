import Rpgstage from "./fce/rpgstage.interface";
import RpgstageBit from "./fce/rpgstage.interface";

export class RpgstageModel implements Rpgstage {

    shade: any;

    graphics:any;

    gameTemp: any;
    gameSystem: any;
    gameMap: any;
    gameParty:any;

    sceneManager: any;

    debugList: string[] = []
    debugListSize:number = 8; 

    dataActors: any;

    //idx:string;
    //rpgstageBitList: RpgstageBit[] = [];
    //rpgstageBits: any = {};
}

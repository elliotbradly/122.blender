import Rpgstage from "./fce/rpgstage.interface";
import RpgstageBit from "./fce/rpgstage.interface";

export class RpgstageModel implements Rpgstage {

    shade: any;

    gameTemp: any;
    gameSystem: any;
    gameMap: any;

    sceneManager: any;

    debugList: string[] = []
    debugListSize:number = 8; 

    //idx:string;
    //rpgstageBitList: RpgstageBit[] = [];
    //rpgstageBits: any = {};
}

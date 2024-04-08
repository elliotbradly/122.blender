import * as ActMnu from "../menu.action";


//import * as ActFoc from "../../01.focus.unit/focus.action";
//import * as ActPvt from "../../96.pivot.unit/pivot.action";

import * as ActRpa from "../../02.rpgactor.unit/rpgactor.action"


import * as ActTrm from "../../act/terminal.action";
import * as ActChc from "../../act/choice.action"; 111

import * as ActGrd from "../../act/grid.action";
import * as ActCvs from "../../act/canvas.action";
import * as ActCns from "../../act/console.action";
import * as ActDsk from "../../act/disk.action";

var bit, lst, dex, idx, dat, src;

export const rpgactorMenu = async (cpy: MenuModel, bal: MenuBit, ste: State) => {

  lst = [ ActRpa.INIT_RPGACTOR, ActRpa.WRITE_RPGACTOR, ActRpa.READ_RPGACTOR  ]

  bit = await ste.bus(ActGrd.UPDATE_GRID, { x: 0, y: 4, xSpan: 4, ySpan: 12 })
  bit = await ste.bus(ActChc.OPEN_CHOICE, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, net: bit.grdBit.dat })

  src = bit.chcBit.src;

  switch (src) {

    case ActRpa.INIT_RPGACTOR:
      bit = await ste.hunt(ActMnu.PRINT_MENU, { src: "init rpg actor" });
      
      bit = await ste.bus(ActDsk.READ_DISK, { src: "./data/actor/000.Actors.json" });
      var actors = JSON.parse( bit.dskBit.dat );
      bit = await ste.hunt(ActRpa.INIT_RPGACTOR, { dat:actors });
      bit = await ste.hunt(ActMnu.PRINT_MENU, bit);

      break;

    case ActRpa.WRITE_RPGACTOR:
      bit = await ste.hunt(ActMnu.PRINT_MENU, { src: "write rpg actor" });
      bit = await ste.hunt(ActMnu.UPDATE_MENU, {});
      break;

    case ActRpa.READ_RPGACTOR:
      bit = await ste.hunt(ActMnu.PRINT_MENU, { src: "read rpg actor" });
      bit = await ste.hunt(ActMnu.UPDATE_MENU, {});
      break;

    default:
      bit = await ste.bus(ActTrm.CLOSE_TERMINAL, {})
      break;
  }



  return cpy;
};


var patch = (ste, type, bale) => ste.dispatch({ type, bale });

import { MenuModel } from "../menu.model";
import MenuBit from "../fce/menu.bit";
import State from "../../99.core/state";
//import { HexmapModel } from "../../03.hexmap.unit/hexmap.model";


import * as Grid from '../../val/grid';
import * as Align from '../../val/align'
import * as Color from '../../val/console-color';

import * as SHAPE from '../../val/shape'
import * as FOCUS from "../../val/focus";


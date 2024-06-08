import Model from "./99.core/interface/model.interface";

import BlenderUnit from "./00.blender.unit/blender.unit";
import EngineUnit from "./01.engine.unit/engine.unit";
import MikuUnit from "./02.miku.unit/miku.unit";
import CollectUnit from "./97.collect.unit/collect.unit";
import MenuUnit from "./98.menu.unit/menu.unit";
import BusUnit from "./99.bus.unit/bus.unit";


import Blender from "./00.blender.unit/fce/blender.interface";
import { BlenderModel } from "./00.blender.unit/blender.model";
import Engine from "./01.engine.unit/fce/engine.interface";
import { EngineModel } from "./01.engine.unit/engine.model";
import Miku from "./02.miku.unit/fce/miku.interface";
import { MikuModel } from "./02.miku.unit/miku.model";
import Collect from "./97.collect.unit/fce/collect.interface";
import { CollectModel } from "./97.collect.unit/collect.model";
import Menu from "./98.menu.unit/fce/menu.interface";
import { MenuModel } from "./98.menu.unit/menu.model";
import Bus from "./99.bus.unit/fce/bus.interface";
import { BusModel } from "./99.bus.unit/bus.model";


export const list: Array<any> = [BlenderUnit,EngineUnit,MikuUnit,CollectUnit,MenuUnit,BusUnit];

import * as reduceFromBlender from "./00.blender.unit/blender.reduce";
import * as reduceFromEngine from "./01.engine.unit/engine.reduce";
import * as reduceFromMiku from "./02.miku.unit/miku.reduce";
import * as reduceFromCollect from "./97.collect.unit/collect.reduce";
import * as reduceFromMenu from "./98.menu.unit/menu.reduce";
import * as reduceFromBus from "./99.bus.unit/bus.reduce";


export const reducer: any = {
 blender : reduceFromBlender.reducer, 
engine : reduceFromEngine.reducer, 
miku : reduceFromMiku.reducer, 
collect : reduceFromCollect.reducer, 
menu : reduceFromMenu.reducer, 
bus : reduceFromBus.reducer, 

};

export default class UnitData implements Model {
 
 blender : Blender = new BlenderModel();
engine : Engine = new EngineModel();
miku : Miku = new MikuModel();
collect : Collect = new CollectModel();
menu : Menu = new MenuModel();
bus : Bus = new BusModel();

 
}

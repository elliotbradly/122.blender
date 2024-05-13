import Model from "./99.core/interface/model.interface";

import BlenderUnit from "./00.blender.unit/blender.unit";
import MotionUnit from "./00.motion.unit/motion.unit";
import CollectUnit from "./97.collect.unit/collect.unit";
import MenuUnit from "./98.menu.unit/menu.unit";
import BusUnit from "./99.bus.unit/bus.unit";


import Blender from "./00.blender.unit/fce/blender.interface";
import { BlenderModel } from "./00.blender.unit/blender.model";
import Motion from "./00.motion.unit/fce/motion.interface";
import { MotionModel } from "./00.motion.unit/motion.model";
import Collect from "./97.collect.unit/fce/collect.interface";
import { CollectModel } from "./97.collect.unit/collect.model";
import Menu from "./98.menu.unit/fce/menu.interface";
import { MenuModel } from "./98.menu.unit/menu.model";
import Bus from "./99.bus.unit/fce/bus.interface";
import { BusModel } from "./99.bus.unit/bus.model";


export const list: Array<any> = [BlenderUnit,MotionUnit,CollectUnit,MenuUnit,BusUnit];

import * as reduceFromBlender from "./00.blender.unit/blender.reduce";
import * as reduceFromMotion from "./00.motion.unit/motion.reduce";
import * as reduceFromCollect from "./97.collect.unit/collect.reduce";
import * as reduceFromMenu from "./98.menu.unit/menu.reduce";
import * as reduceFromBus from "./99.bus.unit/bus.reduce";


export const reducer: any = {
 blender : reduceFromBlender.reducer, 
motion : reduceFromMotion.reducer, 
collect : reduceFromCollect.reducer, 
menu : reduceFromMenu.reducer, 
bus : reduceFromBus.reducer, 

};

export default class UnitData implements Model {
 
 blender : Blender = new BlenderModel();
motion : Motion = new MotionModel();
collect : Collect = new CollectModel();
menu : Menu = new MenuModel();
bus : Bus = new BusModel();

 
}

import Model from "./99.core/interface/model.interface";

import BlenderUnit from "./00.blender.unit/blender.unit";
import RpgmapUnit from "./01.rpgmap.unit/rpgmap.unit";
import RpgactorUnit from "./02.rpgactor.unit/rpgactor.unit";
import RpgpartyUnit from "./03.rpgparty.unit/rpgparty.unit";
import ActivityUnit from "./80.activity.unit/activity.unit";
import CollectUnit from "./97.collect.unit/collect.unit";
import MenuUnit from "./98.menu.unit/menu.unit";
import BusUnit from "./99.bus.unit/bus.unit";


import Blender from "./00.blender.unit/fce/blender.interface";
import { BlenderModel } from "./00.blender.unit/blender.model";
import Rpgmap from "./01.rpgmap.unit/fce/rpgmap.interface";
import { RpgmapModel } from "./01.rpgmap.unit/rpgmap.model";
import Rpgactor from "./02.rpgactor.unit/fce/rpgactor.interface";
import { RpgactorModel } from "./02.rpgactor.unit/rpgactor.model";
import Rpgparty from "./03.rpgparty.unit/fce/rpgparty.interface";
import { RpgpartyModel } from "./03.rpgparty.unit/rpgparty.model";
import Activity from "./80.activity.unit/fce/activity.interface";
import { ActivityModel } from "./80.activity.unit/activity.model";
import Collect from "./97.collect.unit/fce/collect.interface";
import { CollectModel } from "./97.collect.unit/collect.model";
import Menu from "./98.menu.unit/fce/menu.interface";
import { MenuModel } from "./98.menu.unit/menu.model";
import Bus from "./99.bus.unit/fce/bus.interface";
import { BusModel } from "./99.bus.unit/bus.model";


export const list: Array<any> = [BlenderUnit,RpgmapUnit,RpgactorUnit,RpgpartyUnit,ActivityUnit,CollectUnit,MenuUnit,BusUnit];

import * as reduceFromBlender from "./00.blender.unit/blender.reduce";
import * as reduceFromRpgmap from "./01.rpgmap.unit/rpgmap.reduce";
import * as reduceFromRpgactor from "./02.rpgactor.unit/rpgactor.reduce";
import * as reduceFromRpgparty from "./03.rpgparty.unit/rpgparty.reduce";
import * as reduceFromActivity from "./80.activity.unit/activity.reduce";
import * as reduceFromCollect from "./97.collect.unit/collect.reduce";
import * as reduceFromMenu from "./98.menu.unit/menu.reduce";
import * as reduceFromBus from "./99.bus.unit/bus.reduce";


export const reducer: any = {
 blender : reduceFromBlender.reducer, 
rpgmap : reduceFromRpgmap.reducer, 
rpgactor : reduceFromRpgactor.reducer, 
rpgparty : reduceFromRpgparty.reducer, 
activity : reduceFromActivity.reducer, 
collect : reduceFromCollect.reducer, 
menu : reduceFromMenu.reducer, 
bus : reduceFromBus.reducer, 

};

export default class UnitData implements Model {
 
 blender : Blender = new BlenderModel();
rpgmap : Rpgmap = new RpgmapModel();
rpgactor : Rpgactor = new RpgactorModel();
rpgparty : Rpgparty = new RpgpartyModel();
activity : Activity = new ActivityModel();
collect : Collect = new CollectModel();
menu : Menu = new MenuModel();
bus : Bus = new BusModel();

 
}

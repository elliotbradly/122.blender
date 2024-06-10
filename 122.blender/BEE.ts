import Model from "./99.core/interface/model.interface";

import BlenderUnit from "./00.blender.unit/blender.unit";
import EngineUnit from "./01.engine.unit/engine.unit";
import MikuUnit from "./02.miku.unit/miku.unit";
import SceneUnit from "./03.scene.unit/scene.unit";
import CameraUnit from "./04.camera.unit/camera.unit";
import LightUnit from "./05.light.unit/light.unit";
import MeshUnit from "./06.mesh.unit/mesh.unit";
import PixijsUnit from "./07.pixijs.unit/pixijs.unit";
import CollectUnit from "./97.collect.unit/collect.unit";
import MenuUnit from "./98.menu.unit/menu.unit";
import BusUnit from "./99.bus.unit/bus.unit";


import Blender from "./00.blender.unit/fce/blender.interface";
import { BlenderModel } from "./00.blender.unit/blender.model";
import Engine from "./01.engine.unit/fce/engine.interface";
import { EngineModel } from "./01.engine.unit/engine.model";
import Miku from "./02.miku.unit/fce/miku.interface";
import { MikuModel } from "./02.miku.unit/miku.model";
import Scene from "./03.scene.unit/fce/scene.interface";
import { SceneModel } from "./03.scene.unit/scene.model";
import Camera from "./04.camera.unit/fce/camera.interface";
import { CameraModel } from "./04.camera.unit/camera.model";
import Light from "./05.light.unit/fce/light.interface";
import { LightModel } from "./05.light.unit/light.model";
import Mesh from "./06.mesh.unit/fce/mesh.interface";
import { MeshModel } from "./06.mesh.unit/mesh.model";
import Pixijs from "./07.pixijs.unit/fce/pixijs.interface";
import { PixijsModel } from "./07.pixijs.unit/pixijs.model";
import Collect from "./97.collect.unit/fce/collect.interface";
import { CollectModel } from "./97.collect.unit/collect.model";
import Menu from "./98.menu.unit/fce/menu.interface";
import { MenuModel } from "./98.menu.unit/menu.model";
import Bus from "./99.bus.unit/fce/bus.interface";
import { BusModel } from "./99.bus.unit/bus.model";


export const list: Array<any> = [BlenderUnit,EngineUnit,MikuUnit,SceneUnit,CameraUnit,LightUnit,MeshUnit,PixijsUnit,CollectUnit,MenuUnit,BusUnit];

import * as reduceFromBlender from "./00.blender.unit/blender.reduce";
import * as reduceFromEngine from "./01.engine.unit/engine.reduce";
import * as reduceFromMiku from "./02.miku.unit/miku.reduce";
import * as reduceFromScene from "./03.scene.unit/scene.reduce";
import * as reduceFromCamera from "./04.camera.unit/camera.reduce";
import * as reduceFromLight from "./05.light.unit/light.reduce";
import * as reduceFromMesh from "./06.mesh.unit/mesh.reduce";
import * as reduceFromPixijs from "./07.pixijs.unit/pixijs.reduce";
import * as reduceFromCollect from "./97.collect.unit/collect.reduce";
import * as reduceFromMenu from "./98.menu.unit/menu.reduce";
import * as reduceFromBus from "./99.bus.unit/bus.reduce";


export const reducer: any = {
 blender : reduceFromBlender.reducer, 
engine : reduceFromEngine.reducer, 
miku : reduceFromMiku.reducer, 
scene : reduceFromScene.reducer, 
camera : reduceFromCamera.reducer, 
light : reduceFromLight.reducer, 
mesh : reduceFromMesh.reducer, 
pixijs : reduceFromPixijs.reducer, 
collect : reduceFromCollect.reducer, 
menu : reduceFromMenu.reducer, 
bus : reduceFromBus.reducer, 

};

export default class UnitData implements Model {
 
 blender : Blender = new BlenderModel();
engine : Engine = new EngineModel();
miku : Miku = new MikuModel();
scene : Scene = new SceneModel();
camera : Camera = new CameraModel();
light : Light = new LightModel();
mesh : Mesh = new MeshModel();
pixijs : Pixijs = new PixijsModel();
collect : Collect = new CollectModel();
menu : Menu = new MenuModel();
bus : Bus = new BusModel();

 
}

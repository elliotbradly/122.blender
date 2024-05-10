import { ref, onMounted, onUnmounted, onUpdated, inject, getCurrentInstance } from "vue";

import * as ActVsg from "../110.shade/01.visage.unit/visage.action";
import * as ActCan from "../110.shade/03.container.unit/container.action";
import * as ActTxt from "../110.shade/05.text.unit/text.action";
import * as ActGph from "../110.shade/04.graphic.unit/graphic.action";
import * as ActSpr from "../110.shade/06.sprite.unit/sprite.action";
import * as ActHex from "../110.shade/07.hexagon.unit/hexagon.action";
import * as ActFcg from "../110.shade/08.focigon.unit/focigon.action";

export type HelloWorld = string | number;

export const mount = async (value: HelloWorld) => {
  console.log("sampleFunc:: ", value);

  const instance = getCurrentInstance();
  const SHADE = inject("SHADE");

  var bit = await SHADE["hunt"](ActVsg.MOUNT_VISAGE, { idx: "vsg00", src: "indexCanvas", dat: { height: 320 } });
  instance?.proxy?.$forceUpdate();

  window.addEventListener(
    "resize",
    function (event) {
      this.setTimeout(() => {
        location.reload();
      }, 333);
    },
    true
  );


  bit = await SHADE["hunt"](ActCan.WRITE_CONTAINER, { idx: "can00", src: "vsg00" });
  var container = bit.canBit.dat.bit;

  bit = await SHADE["hunt"](ActCan.SURFACE_CONTAINER, { idx: "fce-can-00", src: "vsg00" });

  bit = await SHADE["hunt"](ActCan.ADD_CONTAINER, { idx: "fce-can-00", dat: { bit: container } });

  bit = await SHADE['hunt'](ActTxt.WRITE_TEXT, { idx: 'txt00', dat: { txt: "text 00" } })
  bit = await SHADE['hunt'](ActCan.ADD_CONTAINER, { idx: "can00", dat: { bit: bit.txtBit.dat.bit } })

  bit = await SHADE['hunt'](ActTxt.WRITE_TEXT, { idx: 'txt01', dat: { txt: "text 01", y: 15 } })
  bit = await SHADE['hunt'](ActCan.ADD_CONTAINER, { idx: "can00", dat: { bit: bit.txtBit.dat.bit } })

  bit = await SHADE['hunt'](ActTxt.WRITE_TEXT, { idx: 'txt02', dat: { txt: "text 02", y: 30 } })
  bit = await SHADE['hunt'](ActCan.ADD_CONTAINER, { idx: "can00", dat: { bit: bit.txtBit.dat.bit } })

  bit = await SHADE['hunt'](ActTxt.WRITE_TEXT, { idx: 'txt03', dat: { txt: "text 03", y: 45 } })
  bit = await SHADE['hunt'](ActCan.ADD_CONTAINER, { idx: "can00", dat: { bit: bit.txtBit.dat.bit } })

  bit = await SHADE['hunt'](ActSpr.WRITE_SPRITE, { idx: 'spr00', dat: { src: './img/000.png', x: 0, y: 0, } })
  bit = await SHADE['hunt'](ActCan.ADD_CONTAINER, { idx: "can00", dat: { bit: bit.sprBit.dat.bit } })

  bit = await SHADE["hunt"](ActGph.WRITE_GRAPHIC, { idx: "gph00", dat: { h: 100, w: 40, x: 40, y: 40 } });
  bit = await SHADE["hunt"](ActCan.ADD_CONTAINER, { idx: "can00", dat: { bit: bit.gphBit.dat.bit } });


  bit = await SHADE["hunt"](ActGph.WRITE_GRAPHIC, { idx: "gph01", dat: { h: 100, w: 40, x: 40, y: 40 } });
  bit = await SHADE["hunt"](ActCan.ADD_CONTAINER, { idx: "can00", dat: { bit: bit.gphBit.dat.bit } });


  return value;
};

export const update = async (value: HelloWorld) => {
  console.log("sampleFunc:: ", value);

  const instance = getCurrentInstance();
  const SHADE = inject("SHADE");

  //var bit = await SHADE["hunt"](ActVsg.REMOVE_VISAGE, { idx: "vsg00" });
  //bit = await SHADE["hunt"](ActVsg.MOUNT_VISAGE, { idx: "vsg00", src: "indexCanvas", dat: { height: 320 } });


  return value;
};

export const unmount = async (value: HelloWorld) => {
  console.log("sampleFunc:: ", value);

  const instance = getCurrentInstance();
  const SHADE = inject("SHADE");

  console.log("unmounted..");
  var bit = await SHADE["hunt"](ActVsg.REMOVE_VISAGE, { idx: "vsg00" });

  return value;
};

export type Shade<Type> = {
  hunt: Function;
} & Type;

<template>

  <q-page-sticky position="top-left" :offset="[18, 18]">

    <q-fab color="secondary" push icon="keyboard_arrow_right" direction="right">
          <q-fab-action color="primary" @click="onClick" icon="mail" />
          <q-fab-action color="accent" @click="onClick" icon="alarm" />
        </q-fab>

            </q-page-sticky>



    <div class="full-height row wrap justify-start items-start content-start">



      <div class="col-6">
        <canvas id="indexCanvas"> </canvas>

      </div>

      <div class="col-6">
        <div id="terminal"></div>
      </div>


  </div>

  </template>

  <script setup>
  import { ref, onMounted, onUnmounted, onUpdated, inject, getCurrentInstance } from 'vue'
  import { useRouter, useRoute } from 'vue-router'

  import { Terminal } from 'xterm';

  import { Mouse, Keyboard, Gamepad, or, and } from 'contro'

  const router = useRouter()
  const route = useRoute()

  const instance = getCurrentInstance();
  const SHADE = inject('SHADE')

  const keyboard = new Keyboard()
  const gamepad = new Gamepad()

  onMounted(async () => {

    const controls = {
    jump: or(gamepad.button('A').trigger, keyboard.key('Space').trigger),
    menu: or(gamepad.button('Back').trigger, keyboard.key('Esc').trigger),
    inventory: or(gamepad.button('LB').trigger, keyboard.key('E').trigger),
    map: or(gamepad.button('RB').trigger, keyboard.key('M').trigger),
    statusOverlay: or(gamepad.button('RB'), keyboard.key('Tab')),
  }

  function gameLoop() {

    console.log("looping")
    // Update the UI to reflect the player's input device(s)
    //game.jumpButton.text = controls.jump.label
    //game.menuButton.text = controls.menu.label
    // ...

    // Query the controls and do something
    if (controls.jump.query()) alert("jump")
    if (controls.menu.query()) alert("menu")
    //game.statusOverlay.visible = controls.statusOverlay.query()
    // ...

    requestAnimationFrame(gameLoop)
  }


  gameLoop()


    var term = new Terminal();
    term.open(document.getElementById('terminal'));

    term.write('Hello from \x1B[1;3;31mxterm.js\x1B[0m $ ')
    term.write('Hello from \x1B[1;3;31mxterm.js\x1B[0m $ ')
    term.write('Hello from \x1B[1;3;31mxterm.js\x1B[0m $ ')

    term.write('Hello from \x1B[1;3;31mxterm.js\x1B[0m $ ')

    term.write('Hello from \x1B[1;3;31mxterm.js\x1B[0m $ ')

    term.write('Hello from \x1B[1;3;31mxterm.js\x1B[0m $ ')

    var bit = await SHADE.hunt(SHADE.ActVsg.MOUNT_VISAGE, { idx: "vsg00", src: "indexCanvas", dat: { height: 920 } });
    instance?.proxy?.$forceUpdate();

    //alert(window.electron.store.get('foo'));
  })

  onUpdated(async () => {
    // text content should be the same as current `count.value`

    var bit = await SHADE.hunt(SHADE.ActVsg.REMOVE_VISAGE, { idx: "vsg00" })
    bit = await SHADE.hunt(SHADE.ActVsg.MOUNT_VISAGE, { idx: "vsg00", src: "indexCanvas", dat: { height: 720 } })

    bit = await SHADE.hunt(SHADE.ActVsg.READ_VISAGE, { idx: "vsg00" })

    bit = await SHADE.hunt(SHADE.ActCan.WRITE_CONTAINER, { idx: "can00", src: 'vsg00' })
    bit = await SHADE.hunt(SHADE.ActCan.SURFACE_CONTAINER, { idx: 'fce-can-00', src: "vsg00" });

  })

  onUnmounted(async () => {

    //console.log("unmounted..")
    //var bit = await SHADE.hunt(SHADE.ActVsg.REMOVE_VISAGE, { idx: "vsg00" })

  })


  </script>

  <script>
  import { defineComponent } from 'vue'

  export default defineComponent({
    name: 'GameScreen'
  })
  </script>

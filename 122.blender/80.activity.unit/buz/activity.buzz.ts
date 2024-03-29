import * as ActRps from "../../01.rpgstage.unit/rpgstage.action";

var discordSdk;
var auth;
var currentGuild;

var bit, val, idx, dex, lst, dat, src;

export const initActivity = (cpy: ActivityModel, bal: ActivityBit, ste: State) => {

  

  try {
    discordSdk = new DiscordSDK(cpy.clientID);
  } catch (error) {
    console.log("Discord SDK is not present");
     bal.slv({ intBit: { idx: "init-activity", val: 0, src: 'discord sdk not present' } });
     return cpy;
  }
  


  setupDiscordSdk().then(() => {
    console.log("Discord SDK is authenticated");
     bal.slv({ intBit: { idx: "init-activity", val: 1, dat: currentGuild } });
     return cpy;
    // We can now make API calls within the scopes we requested in setupDiscordSDK()
    // Note: the access_token returned is a sensitive secret and should be treated as such
  });



  async function setupDiscordSdk() {
    
    debugger

    await discordSdk.ready();
    console.log("Discord SDK is ready");

    // Authorize with Discord Client
    const { code } = await discordSdk.commands.authorize({
      client_id: cpy.clientID,
      response_type: "code",
      state: "",
      prompt: "none",
      scope: [
        "identify",
        "guilds",
      ],
    });

    // Retrieve an access_token from your activity's server
    const response = await fetch("/api/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        code,
      }),
    });


    const { access_token } = await response.json();

    // Authenticate with Discord client (using the access_token)
    auth = await discordSdk.commands.authenticate({
      access_token,
    });

    var user = auth.user
    bit = await ste.hunt(ActRps.DEBUG_RPGSTAGE, { src: 'user:----' });
    bit = await ste.hunt(ActRps.DEBUG_RPGSTAGE, { src: JSON.stringify(user) });


    const guilds = await fetch(`https://discord.com/api/v10/users/@me/guilds`, {
      headers: {
        // NOTE: we're using the access_token provided by the "authenticate" command
        Authorization: `Bearer ${auth.access_token}`,
        'Content-Type': 'application/json',
      },
    }).then((response) => response.json());

    // 2. Find the current guild's info, including it's "icon"
    currentGuild = guilds.find((g) => g.id === discordSdk.guildId);


    console.log("creating web socket")


    //now connect to websocket??
    const currentUrl = window.location.origin;
    // get our current connection and replace http with ws, or https with wss
    var socket = new WebSocket(currentUrl.replace('http', 'ws') + '/socket/');
    socket.addEventListener('message', function (event) {
      if (event.data) {
        console.log("you have connected to the web socket")
        console.log( event.data )
      }
    });




    if (auth == null) {
      throw new Error("Authenticate command failed");
    }
  }

 
};

export const updateActivity = (cpy: ActivityModel, bal: ActivityBit, ste: State) => {
  return cpy;
};


import { ActivityModel } from "../activity.model";
import ActivityBit from "../fce/activity.bit";
import State from "../../99.core/state";
import { DiscordSDK, Events } from "@discord/embedded-app-sdk";
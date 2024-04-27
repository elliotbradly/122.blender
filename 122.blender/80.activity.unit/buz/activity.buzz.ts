import * as ActRps from "../../01.rpgstage.unit/rpgstage.action";

import * as ActCsk from "../../96.clientsocket.unit/clientsocket.action";

var discordSdk;
var auth;
var currentGuild;

var bit, val, idx, dex, lst, dat, src;

export const initActivity = (cpy: ActivityModel, bal: ActivityBit, ste: State) => {



  try {
    discordSdk = new DiscordSDK(cpy.clientID);
  } catch (error) {
    console.log("Discord SDK is not present");

    bit = ste.hunt(ActCsk.INIT_CLIENTSOCKET, { val:1 });

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

    await discordSdk.ready();
    console.log("Discord SDK is ready");

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

    bit = await ste.hunt(ActRps.DEBUG_RPGSTAGE, { src: 'code:----' });
    bit = await ste.hunt(ActRps.DEBUG_RPGSTAGE, { src: JSON.stringify(code) });

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

    var auth = cpy.auth = await discordSdk.commands.authenticate({
      access_token,
    });

    var user = cpy.user = cpy.auth.user
    bit = await ste.hunt(ActRps.DEBUG_RPGSTAGE, { src: 'user:----' });
    bit = await ste.hunt(ActRps.DEBUG_RPGSTAGE, { src: JSON.stringify( user) });

    bit = await ste.hunt(ActRps.DEBUG_RPGSTAGE, { src: 'open client socket' });
    
    bit = await ste.hunt(ActCsk.INIT_CLIENTSOCKET, {idx:code, dat: auth});

    //const guilds = await fetch(`https://discord.com/api/v10/users/@me/guilds`, {
    //  headers: {
    // NOTE: we're using the access_token provided by the "authenticate" command
    //    Authorization: `Bearer ${auth.access_token}`,
    //    'Content-Type': 'application/json',
    //  },
    //}).then((response) => response.json());

    // 2. Find the current guild's info, including it's "icon"
    //currentGuild = guilds.find((g) => g.id === discordSdk.guildId);


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
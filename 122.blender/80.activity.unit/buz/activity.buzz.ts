
var discordSdk;

export const initActivity = (cpy: ActivityModel, bal: ActivityBit, ste: State) => {

    discordSdk = new DiscordSDK(cpy.clientID);

    async function setupDiscordSdk() {
        await discordSdk.ready();
    }

    setupDiscordSdk().then(() => {
        console.log("Discord SDK is ready");

        if (bal.slv != null) bal.slv({ intBit: { idx: "init-activity", val: 1 } });

    });

    return cpy;
};

export const updateActivity = (cpy: ActivityModel, bal: ActivityBit, ste: State) => {
    return cpy;
};


import { ActivityModel } from "../activity.model";
import ActivityBit from "../fce/activity.bit";
import State from "../../99.core/state";
import { DiscordSDK } from "@discord/embedded-app-sdk";
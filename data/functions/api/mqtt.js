var pivot = require("./888.market");

export const onRequestGet = async (context) => {
  var body = { idx: "action-depth" };

  var MQTT = globalThis.MARKET.MQTT;
  //console.log("mqtt" + MQTT);

  const local = "ws://swamp-fly-448d63614f75.herokuapp.com/";
  //const localBit = { idx: "local", src: "ws://swamp-fly-448d63614f75.herokuapp.com/" };

  var initMarket = globalThis.MARKET.ActMrk.INIT_MARKET;
  var testMarket = globalThis.MARKET.ActMrk.TEST_MARKET;
  //console.log("act " + initMarket);
  var bit = {};
  bit = await globalThis.MARKET.hunt(initMarket, { val: 0, dat: MQTT, src: local });
  bit = globalThis.MARKET.hunt(testMarket, { dat: bit });

  const init = {
    body: JSON.stringify(body),
    method: "GET",
    headers: {
      "content-type": "application/json;charset=UTF-8",
    },
  };

  //const bit = await fetch(url, init);
  const results = JSON.stringify(bit);
  return new Response("results: " + results, init);
  //var response = "yo yo yo bit" + JSON.stringify(bit);
  //return new Response(response);
};

// POST requests to /filename with a JSON-encoded body would return "Hello, <name>!"
export const onRequestPost = async ({ request }) => {
  const { name } = await request.json();
  return new Response(`Hello, ${name}!`);
};

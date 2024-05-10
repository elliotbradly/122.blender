var pivot = require("./888.market");

export const onRequestGet = async (context) => {
  const url = "https://render-com-hjy7.onrender.com/mike";

  var body = { idx: context.env.OPENAI_API_KEY };

  /**
   * gatherResponse awaits and returns a response body as a string.
   * Use await gatherResponse(..) in an async function to get the response body
   * @param {Response} response
   */
  async function gatherResponse(response) {
    const { headers } = response;
    const contentType = headers.get("content-type") || "";
    if (contentType.includes("application/json")) {
      return JSON.stringify(await response.json());
    } else if (contentType.includes("application/text")) {
      return response.text();
    } else if (contentType.includes("text/html")) {
      return response.text();
    } else {
      return response.text();
    }
  }

  const init = {
    body: JSON.stringify(body),
    method: "POST",
    headers: {
      "content-type": "application/json;charset=UTF-8",
    },
  };

  const bit = await fetch(url, init);
  const results = await gatherResponse(bit);
  return new Response(results, init);

  //var response = "yo yo yo bit" + JSON.stringify(bit);
  //return new Response(response);
};

// POST requests to /filename with a JSON-encoded body would return "Hello, <name>!"
export const onRequestPost = async ({ request }) => {
  const { name } = await request.json();
  return new Response(`Hello, ${name}!`);
};

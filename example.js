"use strict";

const { requestUtilities } = require("./lib/main");

const { get } = requestUtilities;

const host = "https://djalbat.com",
      uri = "/",
      parameters = {};

get(host, uri, parameters, (error, response) => {
  bodyFromResponse(response, (body) => {
    console.log(body)
  });
});

function bodyFromResponse(response, callback) {
  let body = "";

  response.on("data", (data) => {
    body += data;
  });

  response.on("end", () => {
    callback(body);
  });
}


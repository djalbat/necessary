"use strict";

const fs = require("fs");

const { requestUtilities } = require("./lib/main");

const { get } = requestUtilities;

const host = "https://static.djalbat.com",
      uri = "/image/lovely_s_shaped_slur.jpg",
      parameters = {};

get(host, uri, parameters, (error, response) => {
  const writeStream = fs.createWriteStream("lovely_s_shaped_slur.jpg");

  response.pipe(writeStream);
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


"use strict";

const { Readable } = require("stream");

const { httpUtilities, requestUtilities } = require("./lib/main");

const { post } = requestUtilities,
      { queryStringFromParameters } = httpUtilities;

const content = queryStringFromParameters({
        "name": "John Doe"
      }),
      contentType = "application/x-www-form-urlencoded",
      contentLength = content.length,
      host = "http://localhost:8080/",
      uri = "/",
      parameters = {},
      headers = {
        "content-type": contentType,
        "content-length": contentLength
      };

const request = post(host, uri, parameters, headers, (error, response) => {
        debugger
      }),
      readable = Readable.from(content);

readable.pipe(request);



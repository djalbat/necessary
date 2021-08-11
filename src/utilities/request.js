"use strict";

const http = require("http"),
      https = require("https");

import { ERROR, EMPTY_STRING } from "../constants";
import { GET_METHOD, POST_METHOD } from "../methods";
import { portFromHost, secureFromHost, hostnameFromHost, queryStringFromParameters } from "../utilities/http";

function get(host, uri, parameters, headers, callback) {
  if (callback === undefined) {
    callback = headers; ///
    headers = {};
  }

  const method = GET_METHOD,
        _request = request(host, uri, parameters, method, headers, callback);

  _request.end();

  return _request;
}

function post(host, uri, parameters, headers, callback) {
  if (callback === undefined) {
    callback = headers; ///
    headers = {};
  }

  const method = POST_METHOD,
        _request = request(host, uri, parameters, method, headers, callback);

  return _request;
}

function request(host, uri, parameters, method, headers, callback) {
  const port = portFromHost(host),
        secure = secureFromHost(host),
        hostname = hostnameFromHost(host),
        queryString = queryStringFromParameters(parameters),
        path = (queryString === EMPTY_STRING) ?
                 uri :
                  `${uri}?${queryString}`,
        options = {
          hostname,
          headers,
          method,
          port,
          path
        },
        request = secure ?
                     https.request : ///
                       http.request; ///

  const _request = request(options, (response) => {
    const error = null;

    callback(error, response);
  });

  _request.on(ERROR, (error) => {
    const response = null;

    callback(error, response);
  });

  return _request;
}

export default {
  get,
  post,
  request
};

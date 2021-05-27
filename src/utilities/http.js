"use strict";

const http = require("http"),
      https = require("https");

import { second } from "../utilities/array";
import { ERROR, EMPTY_STRING, AMPERSAND_CHARACTER } from "../constants";

function get(host, uri, parameters, headers, callback) {
  if (callback === undefined) {
    callback = headers; ///
    headers = {};
  }

  const secure = secureFromHost(host),
        url = urlFromHostURIAndParameters(host, uri, parameters),
        get = secure ?
                https.get :
                  http.get;

  const request = get(url, (response) => {
    const error = null;

    callback(error, response);
  });

  request.on(ERROR, (error) => {
    const response = null;

    callback(error, response);
  });

  return request;
}

export function overwrite(headers, name, value) {
  const ownPropertyNames = Object.getOwnPropertyNames(headers),
        lowerCaseName = name.toLowerCase(),
        overwritten = ownPropertyNames.some((ownPropertyName) => {
          const lowerCaseOwnPropertyName = ownPropertyName.toLowerCase();

          if (lowerCaseOwnPropertyName === lowerCaseName) {
            headers[ownPropertyName] = value;

            return true;
          }
        });

  if (!overwritten) {
    headers[name] = value;
  }
}

export function underwrite(headers, name, value) {
  const ownPropertyNames = Object.getOwnPropertyNames(headers),
        lowercaseName = name.toLowerCase(),
        lowerCaseOwnPropertyNames = ownPropertyNames.map((ownPropertyName) => {
          const lowerCaseOwnPropertyName = ownPropertyName.toLowerCase();

          return lowerCaseOwnPropertyName;
        }),
        lowerCaseOwnPropertyNamesIncludesLowercaseName = lowerCaseOwnPropertyNames.includes(lowercaseName);

  if (!lowerCaseOwnPropertyNamesIncludesLowercaseName) {
    headers[name] = value;
  }
}

export function portFromHost(host) {
  let port;

  const matches = host.match(/^https?:\/\/([^\/]+)/),
        secondMatch = second(matches),
        index = secondMatch.indexOf(COLON);

  if (index === -1) {
    const secure = secureFromHost(host);

    port = secure ? 443 : 80; ///
  } else {
    const start = index + 1,
          portString = secondMatch.substring(start);

    port = Number(portString);
  }

  return port;
}

export function secureFromHost(host) {
  const secure = /^https:\/\//.test(host);

  return secure;
}

export function hostnameFromHost(host) {
  const matches = host.match(/^https?:\/\/([^:\/]+)/),
        secondMatch = second(matches),
        hostname = secondMatch; ///

  return hostname;
}

export function queryStringFromParameters(parameters) {
  const names = Object.keys(parameters),
        namesLength = names.length,
        lastIndex = namesLength - 1,
        queryString = names.reduce((queryString, name, index) => {
          const value = parameters[name],
                encodedName = encodeURIComponent(name),
                encodedValue = encodeURIComponent(value),
                ampersandOrNothing = (index !== lastIndex) ?
                                       AMPERSAND_CHARACTER :
                                         EMPTY_STRING;
  
          queryString += `${encodedName}=${encodedValue}${ampersandOrNothing}`;
  
          return queryString;
        }, "");

  return queryString;
}

export function urlFromHostURIAndParameters(host, uri, parameters) {
  const queryString = queryStringFromParameters(parameters),
        url = (queryString === "") ?
                `${host}${uri}` :
                  `${host}${uri}?${queryString}`;

  return url;
}

export default {
  get,
  overwrite,
  underwrite,
  portFromHost,
  secureFromHost,
  hostnameFromHost,
  queryStringFromParameters,
  urlFromHostURIAndParameters
};

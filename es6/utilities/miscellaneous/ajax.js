"use strict";

import { GET_METHOD, POST_METHOD, APPLICATION_JSON_ACCEPT, APPLICATION_JSON_CONTENT_TYPE } from "../../constants";

export function get(host, path, parameters, callback) {
  if (callback === undefined) {
    callback = parameters; ///
    parameters = {};
  }

  const method = GET_METHOD,
        body = undefined;

  request(host, path, parameters, method, body, callback);
}

export function post(host, path, json, parameters, callback) {
  if (callback === undefined) {
    callback = parameters; ///
    parameters = {};
  }

  const method = POST_METHOD,
        body = JSON.stringify(json);

  request(host, path, parameters, method, body, callback);
}

export function request(host, path, parameters, method, body, callback) {
  const url = urlFromHostPathAndParameters(host, path, parameters),
        accept = APPLICATION_JSON_ACCEPT,
        xmlHttpRequest = new XMLHttpRequest();

  xmlHttpRequest.onreadystatechange = () => {
    const { readyState, status, responseText } = xmlHttpRequest;

    if (readyState == 4) {
      let json = null;

      if (status == 200) {
        const jsonString = responseText; ///

        try {
          json = JSON.parse(jsonString);
        } catch (error) {
          ///
        }
      }

      callback(json);
    }
  };

  xmlHttpRequest.open(method, url);

  xmlHttpRequest.setRequestHeader("accept", accept);

  if (method === POST_METHOD) {
    const contentType = APPLICATION_JSON_CONTENT_TYPE;

    xmlHttpRequest.setRequestHeader("content-type", contentType);
  }

  xmlHttpRequest.send(body);
}

function queryStringFromParameters(parameters) {
  const names = Object.keys(parameters),
        namesLength = names.length,
        lastIndex = namesLength - 1,
        queryString = names.reduce((queryString, name, index) => {
          const value = parameters[name],
                encodedName = encodeURIComponent(name),
                encodedValue = encodeURIComponent(value),
                ampersandOrNothing = (index !== lastIndex) ? "&" : "";
  
          queryString += `${encodedName}=${encodedValue}${ampersandOrNothing}`;
  
          return queryString;
        }, "");

  return queryString;
}

function urlFromHostPathAndParameters(host, path, parameters) {
  const queryString = queryStringFromParameters(parameters),
        url = (queryString === "") ?
              `${host}${path}` :
                `${host}${path}?${queryString}`;

  return url;
}

"use strict";

import { GET,
         POST,
         ACCEPT,
         CONTENT_TYPE,
         APPLICATION_JSON } from "../constants";

export function get(host, uri, parameters, headers, callback) {
  if (callback === undefined) {
    callback = headers; ///
    headers = {};
  }

  const method = GET,
        body = null;

  guaranteeAccept(headers);

  request(host, uri, parameters, method, body, headers, callback);
}

export function post(host, uri, parameters, body, headers, callback) {
  if (callback === undefined) {
    callback = headers; ///
    headers = {};
  }

  const method = POST;

  guaranteeAccept(headers);

  guaranteeContentType(headers);

  request(host, uri, parameters, method, body, headers, callback);
}

export function request(host, uri, parameters, method, body, headers, callback) {
  const url = urlFromHostURIAndParameters(host, uri, parameters),
        accept = headers[ACCEPT] || null,
        contentType = headers[CONTENT_TYPE] || null,
        xmlHttpRequest = new XMLHttpRequest();

  if (contentType === APPLICATION_JSON) {
    const json = body,  ///
          jsonString = JSON.stringify(json);

    body = jsonString;  ///
  }

  xmlHttpRequest.onreadystatechange = () => {
    const { readyState, status, responseText } = xmlHttpRequest;

    if (readyState == 4) {
      let body = responseText;

      if (accept === APPLICATION_JSON) {
        try {
          const jsonString = body,  ///
                json = JSON.parse(jsonString);

          body = json;  ///
        } catch (error) {
          body = null;
        }

        callback(body, status);
      }
    }
  };

  xmlHttpRequest.open(method, url);

  if (accept !== null) {
    xmlHttpRequest.setRequestHeader(ACCEPT, accept);
  }

  if (contentType !== null) {
    xmlHttpRequest.setRequestHeader(CONTENT_TYPE, contentType);
  }

  (body !== null) ?
    xmlHttpRequest.send(body) :
      xmlHttpRequest.send();
}

export default {
  get,
  post,
  request
}

function guarantee(headers, name, value) {
  const propertyNames = Object.getOwnPropertyNames(headers),
        names = propertyNames.map((propertyName) => {
          const lowerCasePropertyName = propertyName.toLowerCase(),
                name = lowerCasePropertyName; ///

          return name;
        }),
        namesIncludesName = names.includes(name);

  if (!namesIncludesName) {
    headers[name] = value;
  }
}

function guaranteeAccept(headers) {
  const name = ACCEPT,  ///
        value = APPLICATION_JSON; ///

  guarantee(headers, name, value);
}

function guaranteeContentType(headers) {
  const name = CONTENT_TYPE,  ///
        value = APPLICATION_JSON; ///

  guarantee(headers, name, value);
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

function urlFromHostURIAndParameters(host, uri, parameters) {
  const queryString = queryStringFromParameters(parameters),
        url = (queryString === "") ?
              `${host}${uri}` :
                `${host}${uri}?${queryString}`;

  return url;
}

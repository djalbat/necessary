"use strict";

import { ACCEPT, CONTENT_TYPE } from "../constants";
import { GET_METHOD, POST_METHOD } from "../methods";
import { APPLICATION_JSON_CONTENT_TYPE } from "../contentTypes";
import { underwrite, urlFromHostURIAndParameters } from "../utilities/http";

export function get(host, uri, parameters, headers, callback) {
  if (callback === undefined) {
    callback = headers; ///
    headers = {};
  }

  const method = GET_METHOD,
        body = null;

  underwriteAccept(headers);

  request(host, uri, parameters, method, body, headers, callback);
}

export function post(host, uri, parameters, body, headers, callback) {
  if (callback === undefined) {
    callback = headers; ///
    headers = {};
  }

  const method = POST_METHOD;

  underwriteAccept(headers);

  underwriteContentType(headers);

  request(host, uri, parameters, method, body, headers, callback);
}

export function request(host, uri, parameters, method, body, headers, callback) {
  const url = urlFromHostURIAndParameters(host, uri, parameters),
        accept = headers[ACCEPT] || null,
        contentType = headers[CONTENT_TYPE] || null,
        xmlHttpRequest = new XMLHttpRequest();

  if (contentType === APPLICATION_JSON_CONTENT_TYPE) {
    const json = body,  ///
          jsonString = JSON.stringify(json);

    body = jsonString;  ///
  }

  xmlHttpRequest.onreadystatechange = () => {
    const { readyState, status, responseText } = xmlHttpRequest;

    if (readyState == 4) {
      let body = responseText;

      if (accept === APPLICATION_JSON_CONTENT_TYPE) {
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

function underwriteAccept(headers) {
  const name = ACCEPT,  ///
        value = APPLICATION_JSON_CONTENT_TYPE; ///

  underwrite(headers, name, value);
}

function underwriteContentType(headers) {
  const name = CONTENT_TYPE,  ///
        value = APPLICATION_JSON_CONTENT_TYPE; ///

  underwrite(headers, name, value);
}

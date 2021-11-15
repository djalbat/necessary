"use strict";

import { GET_METHOD, POST_METHOD } from "../methods";
import { APPLICATION_JSON_CONTENT_TYPE } from "../contentTypes";
import { underwrite, urlFromHostURIAndQuery } from "../utilities/http";
import { ACCEPT, CONTENT_TYPE, CONTENT_LENGTH } from "../constants";

export function get(host, uri, query, headers, callback) {
  if (callback === undefined) {
    callback = headers; ///
    headers = {};
  }

  const body = null,
        method = GET_METHOD,
        accept = APPLICATION_JSON_CONTENT_TYPE;

  underwriteAccept(headers, accept);

  request(host, uri, query, method, headers, body, callback);
}

export function post(host, uri, query, headers, body, callback) {
  if (callback === undefined) {
    callback = body;
    body = headers;
    headers = {};
  }

  const method = POST_METHOD,
        accept = APPLICATION_JSON_CONTENT_TYPE,
        contentType = APPLICATION_JSON_CONTENT_TYPE;

  underwriteAccept(headers, accept);

  underwriteContentType(headers, contentType);

  request(host, uri, query, method, headers, body, callback);
}

export function request(host, uri, query, method, headers, body, callback) {
  const url = urlFromHostURIAndQuery(host, uri, query),
        accept = headers[ACCEPT] || null,
        contentType = headers[CONTENT_TYPE] || null,
        xmlHttpRequest = new XMLHttpRequest();

  if (contentType === APPLICATION_JSON_CONTENT_TYPE) {
    const json = body,  ///
          jsonString = JSON.stringify(json),
          content = jsonString, ///
          contentLength = content.length;

    underwriteContentLength(headers, contentLength);

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

function underwriteAccept(headers, accept) {
  const name = ACCEPT,  ///
        value = accept; ///

  underwrite(headers, name, value);
}

function underwriteContentType(headers, contentTYpe) {
  const name = CONTENT_TYPE,  ///
        value = contentTYpe; ///

  underwrite(headers, name, value);
}

function underwriteContentLength(headers, contentLength) {
  const name = CONTENT_LENGTH,  ///
        value = contentLength; ///

  underwrite(headers, name, value);
}

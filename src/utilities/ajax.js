"use strict";

import { STRING, FUNCTION } from "../constants";
import { GET_METHOD, POST_METHOD } from "../methods";
import { APPLICATION_JSON_CONTENT_TYPE } from "../contentTypes";
import { ACCEPT_HEADER, CONTENT_TYPE_HEADER } from "../headers";
import { underwrite, urlFromHostURIAndQuery } from "../utilities/http";

export function get(host, uri, query, headers, responseType, callback) {
  if (typeof headers === FUNCTION) {
    callback = headers; ///

    responseType = null;

    headers = {};
  }

  if (typeof responseType === FUNCTION) {
    callback = responseType;  ///

    if (typeof headers === STRING) {
      responseType = headers; ///

      headers = {};
    } else {
      responseType = null
    }
  }

  const method = GET_METHOD,
        accept = APPLICATION_JSON_CONTENT_TYPE,
        content = null;

  underwriteAcceptHeader(headers, accept);

  request(host, uri, query, method, content, headers, responseType, callback);
}

export function post(host, uri, query, content, headers, responseType, callback) {
  if (typeof headers === FUNCTION) {
    callback = headers; ///

    responseType = null;

    headers = {};
  }

  if (typeof responseType === FUNCTION) {
    callback = responseType;  ///

    if (typeof headers === STRING) {
      responseType = headers; ///

      headers = {};
    } else {
      responseType = null
    }
  }

  const method = POST_METHOD,
        accept = APPLICATION_JSON_CONTENT_TYPE,
        contentType = APPLICATION_JSON_CONTENT_TYPE;

  underwriteAcceptHeader(headers, accept);

  underwriteContentTypeHeader(headers, contentType);

  request(host, uri, query, method, content, headers, responseType, callback);
}

export function request(host, uri, query, method, content, headers, responseType, callback) {
  const url = urlFromHostURIAndQuery(host, uri, query),
        accept = headers[ACCEPT_HEADER] || null,
        contentType = headers[CONTENT_TYPE_HEADER] || null,
        xmlHttpRequest = new XMLHttpRequest();

  if (contentType === APPLICATION_JSON_CONTENT_TYPE) {
    const json = content,  ///
          jsonString = JSON.stringify(json);

    content = jsonString;  ///
  }

  if (responseType !== null) {
    Object.assign(xmlHttpRequest, {
      responseType
    });
  }

  xmlHttpRequest.onreadystatechange = () => {
    const { readyState, status, response } = xmlHttpRequest,
          statusCode = status;

    if (readyState == 4) {
      let content = response;

      if (accept === APPLICATION_JSON_CONTENT_TYPE) {
        try {
          const jsonString = content,  ///
                json = JSON.parse(jsonString);

          content = json;  ///
        } catch (error) {
          content = null;
        }
      }

      callback(content, statusCode);
    }
  };

  xmlHttpRequest.open(method, url);

  if (accept !== null) {
    xmlHttpRequest.setRequestHeader(ACCEPT_HEADER, accept);
  }

  if (contentType !== null) {
    xmlHttpRequest.setRequestHeader(CONTENT_TYPE_HEADER, contentType);
  }

  (content !== null) ?
    xmlHttpRequest.send(content) :
      xmlHttpRequest.send();
}

export default {
  get,
  post,
  request
}

function underwriteAcceptHeader(headers, accept) {
  const name = ACCEPT_HEADER,  ///
        value = accept; ///

  underwrite(headers, name, value);
}

function underwriteContentTypeHeader(headers, contentTYpe) {
  const name = CONTENT_TYPE_HEADER,  ///
        value = contentTYpe; ///

  underwrite(headers, name, value);
}

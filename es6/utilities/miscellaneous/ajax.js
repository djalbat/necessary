'use strict';

const GET_METHOD = 'GET',
      POST_METHOD = 'POST';

export function get(host, uri, parameters, callback) {
  if (callback === undefined) {
    callback = parameters; ///
    parameters = {};
  }

  const method = GET_METHOD,
        body = undefined;

  request(host, uri, parameters, method, body, callback);
}

export function post(host, uri, json, parameters, callback) {
  if (callback === undefined) {
    callback = parameters; ///
    parameters = {};
  }

  const method = POST_METHOD,
        body = JSON.stringify(json);

  request(host, uri, parameters, method, body, callback);
}

function request(host, uri, parameters, method, body, callback) {
  const url = urlFromHostURIAndParameters(host, uri, parameters),
        xmlHttpRequest = new XMLHttpRequest();

  xmlHttpRequest.onreadystatechange = function() {
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

        callback(json);
      }
    }
  };

  xmlHttpRequest.open(method, url, true);

  xmlHttpRequest.setRequestHeader('content-type', 'application/json;charset=UTF-8');

  xmlHttpRequest.send(body);
}

function queryStringFromParameters(parameters) {
  const names = Object.keys(parameters),
        namesLength = names.length,
        lastIndex = namesLength - 1,
        queryString = names.reduce(function(queryString, name, index) {
          const value = parameters[name],
                encodedName = encodeURIComponent(name),
                encodedValue = encodeURIComponent(value),
                ampersandOrNothing = (index !== lastIndex) ? '&' : '';
  
          queryString += `${encodedName}=${encodedValue}${ampersandOrNothing}`;
  
          return queryString;
        }, '');

  return queryString;
}

function urlFromHostURIAndParameters(host, uri, parameters) {
  const queryString = queryStringFromParameters(parameters),
        url = (queryString === '') ?
              `${host}${uri}` :
                `${host}${uri}?${queryString}`;

  return url;
}

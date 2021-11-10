"use strict";

import { second } from "../utilities/array";
import { EMPTY_STRING } from "../constants";
import { COLON_CHARACTER, AMPERSAND_CHARACTER } from "../characters";

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
        index = secondMatch.indexOf(COLON_CHARACTER);

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

export function queryStringFromQuery(query) {
  const names = Object.keys(query),
        namesLength = names.length,
        lastIndex = namesLength - 1,
        queryString = names.reduce((queryString, name, index) => {
          const value = query[name],
                encodedName = encodeURIComponent(name),
                encodedValue = encodeURIComponent(value),
                ampersandOrNothing = (index !== lastIndex) ?
                                       AMPERSAND_CHARACTER :
                                         EMPTY_STRING;
  
          queryString += `${encodedName}=${encodedValue}${ampersandOrNothing}`;
  
          return queryString;
        }, EMPTY_STRING);

  return queryString;
}

export function urlFromHostURIAndQuery(host, uri, query) {
  const queryString = queryStringFromQuery(query),
        url = (queryString === EMPTY_STRING) ?
                `${host}${uri}` :
                  `${host}${uri}?${queryString}`;

  return url;
}

export default {
  overwrite,
  underwrite,
  portFromHost,
  secureFromHost,
  hostnameFromHost,
  queryStringFromQuery,
  urlFromHostURIAndQuery
};

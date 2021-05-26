"use strict";

import { AMPERSAND_CHARACTER, EMPTY_STRING } from "../constants";

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

export default {
  overwrite,
  underwrite,
  queryStringFromParameters
};

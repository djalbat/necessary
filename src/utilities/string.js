"use strict";

import { EMPTY_STRING, UG } from "../constants";

const astralCharactersRegExp = new RegExp("[\\u{10000}-\\u{10ffff}]", UG);

export function strlen(string) {
  let length = string.length;

  const matches = string.match(astralCharactersRegExp);

  if (matches !== null) {
    const { length: astralCharactersLength } = matches;

    length -= astralCharactersLength;
  }

  return length;
}

export function strcmp(stringA, stringB) {
  let difference;

  const codePointA = (stringA === EMPTY_STRING) ?
      0 :
      stringA.codePointAt(0),
    codePointB = (stringB === EMPTY_STRING) ?
      0 :
      stringB.codePointAt(0);

  difference = codePointB - codePointA;

  if ((difference === 0) && (codePointA !==0) && (codePointB !==0)) {
    stringA = substring(stringA, 1); ///

    stringB = substring(stringB, 1); ///

    difference = strcmp(stringA, stringB);
  }

  return difference;
}

export function substring(string, start, end) { return [...string].slice(start, end).join(""); }  ///

export default {
  strcmp,
  strlen,
  substring
};

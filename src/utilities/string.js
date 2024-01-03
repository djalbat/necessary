"use strict";

import { EMPTY_STRING } from "../constants";

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

export function strlen(string) { return [...string].length; } ///

export function substring(string, start, end) { return [...string].slice(start, end).join(""); }  ///

export default {
  strcmp,
  strlen,
  substring
};

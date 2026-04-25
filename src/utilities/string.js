"use strict";

export function strlen(string) {
  let length = 0;

  for (const _ of string) {
    length++;
  }

  return length;
}

export function strcmp(stringA, stringB) {
  let difference = 0;

  let naiveIndexA = 0,
      naiveIndexB = 0;

  const stringANaiveLength = stringA.length,
        stringBNaiveLength = stringB.length;

  while ((naiveIndexA < stringANaiveLength) || (naiveIndexB < stringBNaiveLength)) {
    const codePointA = (naiveIndexA < stringANaiveLength) ?
                         stringA.codePointAt(naiveIndexA) :
                           0,
          codePointB = (naiveIndexB < stringBNaiveLength) ?
                         stringB.codePointAt(naiveIndexB) :
                           0;

    difference = (codePointA - codePointB);

    if (difference !== 0) {
      break;
    }

    naiveIndexA += (codePointA > 0xFFFF) ?
                2 :
                  1;

    naiveIndexB += (codePointB > 0xFFFF) ?
                2 :
                  1;
  }

  return difference;
}

export function indexOf(string, searchString) {
  let index = -1;

  const searchStringLength = searchString.length;

  if (searchStringLength > 0) {
    const outerNaiveIndex = string.indexOf(searchString);

    if (outerNaiveIndex > -1) {
      index = 0;

      let innerNaiveIndex = 0;

      while (innerNaiveIndex < outerNaiveIndex) {
        const charCode = string.charCodeAt(innerNaiveIndex);

        innerNaiveIndex += ((charCode >= 0xD800) && (charCode <= 0xDBFF)) ?
                             2 :
                               1;

        index++;
      }
    }
  }

  return index;
}

export function substring(string, start, end = Infinity) {
  const stringNaiveLength = string.length;

  let index = 0,
      naiveIndex = 0,
      naiveStart = stringNaiveLength, ///
      naiveEnd = stringNaiveLength; ///

  while (naiveIndex < stringNaiveLength) {
    if (index === start) {
      naiveStart = naiveIndex;  ///
    }

    if (index === end) {
      naiveEnd = naiveIndex;  ///

      break;
    }

    const charCode = string.charCodeAt(naiveIndex);

    naiveIndex += ((charCode >= 0xD800) && (charCode <= 0xDBFF)) ?
                    2 :
                      1;

    index++;
  }

  if (index === start) {
    naiveStart = naiveIndex;  ///
  }

  if (index === end) {
    naiveEnd = naiveIndex;  ///
  }

  const substring = string.substring(naiveStart, naiveEnd);

  return substring;
}

export default {
  strcmp,
  strlen,
  indexOf,
  substring
};

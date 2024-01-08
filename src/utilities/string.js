"use strict";

import { EMPTY_STRING } from "../constants";

export function strlen(string) {
  let length = 0;

  const iterator = string[Symbol.iterator]();

  let character = iterator.next();

  while (!character.done) {
    character = iterator.next();

    length++
  }

  return length;
}

export function strcmp(stringA, stringB) {
  let difference;

  const iteratorA = stringA[Symbol.iterator](), ///
        iteratorB = stringB[Symbol.iterator](); ///

  let characterA = iteratorA.next(),
      characterB = iteratorB.next(),
      codePointA,
      codePointB;

  while (true) {
    codePointA = characterA.value ? ///
                   characterA.value.codePointAt(0) :
                     0;
    codePointB = characterB.value ? ///
                   characterB.value.codePointAt(0) :
                     0;

    difference = codePointB - codePointA;

    if (difference !== 0) {
      break;
    }

    if (characterA.done || characterB.done) {
      break;
    }

    characterA = iteratorA.next();
    characterB = iteratorB.next();
  }

  return difference;
}

export function substring(string, start, end = Infinity) {
  let index = 0;

  const iterator = string[Symbol.iterator](),
        characters = [];

  let character = iterator.next();

  while (!character.done) {
    if (index >= start) {
      characters.push(character.value); ///
    }

    index++

    if (index === end) {
      break;
    }

    character = iterator.next();
  }

  const substring = characters.join(EMPTY_STRING);

  return substring;
}

export default {
  strcmp,
  strlen,
  substring
};

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

export function indexOf(string, searchString) {
  let index = -1,
      found = false;

  const searchStringLength = strlen(searchString);

  if (searchStringLength > 0) {
    let character;

    const iterator = string[Symbol.iterator](),
          searchIterator = searchString[Symbol.iterator](),
          searchCharacter = searchIterator.next();

    character = iterator.next();

    index++;

    while (!character.done) {
      if (character.value === searchCharacter.value) {
        const start = index,  ///
              end = start + searchStringLength,
              subString = substring(string, start, end),
              difference = strcmp(subString, searchString);

        if (difference === 0) {
          found = true;

          break;
        }
      }

      character = iterator.next();

      index++
    }
  }

  if (!found) {
    index = -1;
  }

  return index;
}

export function substring(string, start, end = Infinity) {
  let index = 0;

  const iterator = string[Symbol.iterator](),
        characters = [];

  let character = iterator.next();

  while (!character.done) {
    if (index === end) {
      break;
    }

    if (index >= start) {
      characters.push(character.value); ///
    }

    index++

    character = iterator.next();
  }

  const substring = characters.join(EMPTY_STRING);

  return substring;
}

export default {
  strcmp,
  strlen,
  indexOf,
  substring
};

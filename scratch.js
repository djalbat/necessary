"use strict";

function substring(string, start, end = Infinity) {
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

    character = iterator.next();

    index++
  }

  const substring = characters.join("");

  return substring;
}

const then = Date.now()

for (let count = 0; count < 1000000; count++) {
  substring("ℝℚℤℕ 0123456789 ℝℚℤℕℝℚℤℕ 0123456789 ℝℚℤℕℝℚℤℕ 0123456789 ℝℚℤℕ", 13, 16)
}

const now = Date.now();

console.log(now - then);


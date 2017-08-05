'use strict';

function first(array) { return array[0]; }

function second(array) { return array[1]; }

function last(array) { return array[array.length - 1]; }

function tail(array) { return array.slice(1); }

function push(array1, array2) { Array.prototype.push.apply(array1, array2); }

function unshift(array1, array2) { Array.prototype.unshift.apply(array1, array2); }

function splice(array, start, deleteCount, itemsArray = []) {
  const args = [start, deleteCount, ...itemsArray],
        deletedItemsArray = Array.prototype.splice.apply(array, args);

  return deletedItemsArray;
}

function combine(array1, array2 = [], test) {
  array1 = array2.reduce(function(array1, element, index) {
    const passed = test(element, index);

    if (passed) {
      array1.push(element);
    }

    return array1;
  }, array1);

  return array1;
}

function forwardsForEach(array, callback) {
  array.forEach(function(element, index) {
    callback(element, index);
  });
}

function backwardsForEach(array, callback) {
  const arrayLength = array.length;

  for (var index = arrayLength - 1; index >= 0; index--) {
    const element = array[index];

    callback(element, index);
  }
}

module.exports = {
  first: first,
  second: second,
  last: last,
  tail: tail,
  push: push,
  unshift: unshift,
  splice: splice,
  combine: combine,
  forwardsForEach: forwardsForEach,
  backwardsForEach: backwardsForEach
};

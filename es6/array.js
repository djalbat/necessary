'use strict';

function first(array) { return array[0]; }

function second(array) { return array[1]; }

function third(array) { return array[2]; }

function fourth(array) { return array[3]; }

function fifth(array) { return array[4]; }

function last(array) { return array[array.length - 1]; }

function lastButOne(array) { return array[array.length - 2]; }

function tail(array) { return array.slice(1); }

function push(array1, array2) { Array.prototype.push.apply(array1, array2); }

function unshift(array1, array2) { Array.prototype.unshift.apply(array1, array2); }

function splice(array, start, deleteCount, itemsArray = []) {
  const args = [start, deleteCount, ...itemsArray],
        deletedItemsArray = Array.prototype.splice.apply(array, args);

  return deletedItemsArray;
}

function filter(array, test) {
  arrayUtil.backwardsForEach(array, function(element, index) {
    const passed = test(element, index),
        failed = !passed;

    if (failed) {  ///
      const start = index,  ///
          deleteCount = 1;

      array.splice(start, deleteCount);
    }
  });
}

function prune(array, test) {
  const found = array.some(function(element, index) {
    const passed = test(element, index);

    if (passed) {
      const start = index,  ///
          deleteCount = 1;

      array.splice(start, deleteCount);

      return true;
    }
  });

  return found;
}

function patch(array, test, element) {
  const found = array.some(function(element, index) {
    const passed = test(element, index);

    if (passed) {
      return true;
    }
  });


  if (!found) {
    array.push(element);
  }

  return found;
}

function augment(array1, array2, test) {
  array2.forEach(function(array1, element, index) {
    const passed = test(element, index);

    if (passed) {
      array1.push(element);
    }
  });

  return array1;
}

function separate(array, test, array1, array2) {
  array.forEach(function(element, index) {
    const passed = test(element, index);

    passed ?
      array1.push(element) :
        array2.push(element);
  });
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
  third: third,
  fourth: fourth,
  fifth: fifth,
  last: last,
  lastButOne: lastButOne,
  tail: tail,
  push: push,
  unshift: unshift,
  filter: filter,
  prune: prune,
  patch: patch,
  augment: augment,
  separate: separate,
  forwardsForEach: forwardsForEach,
  backwardsForEach: backwardsForEach
};

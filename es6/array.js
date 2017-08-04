'use strict';

class array {
  static first(array) { return array[0]; }

  static second(array) { return array[1]; }

  static last(array) { return array[array.length - 1]; }

  static tail(array) { return array.slice(1); }

  static push(array1, array2) { Array.prototype.push.apply(array1, array2); }

  static unshift(array1, array2) { Array.prototype.unshift.apply(array1, array2); }

  static splice(array, start, deleteCount, itemsArray = []) {
    const args = [start, deleteCount, ...itemsArray],
          deletedItemsArray = Array.prototype.splice.apply(array, args);

    return deletedItemsArray;
  }

  static combine(array1, array2 = [], test) {
    array1 = array2.reduce(function(array1, element, index) {
      const passed = test(element, index);

      if (passed) {
        array1.push(element);
      }

      return array1;
    }, array1);

    return array1;
  }
}

module.exports = array;

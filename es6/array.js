'use strict';

class array {
  static first(array) { return array[0]; }

  static second(array) { return array[1]; }

  static tail(array) { return array.slice(1); }
}

module.exports = array;

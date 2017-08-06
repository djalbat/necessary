'use strict';

function whilst(test, callback, done) {
  const next = function() {
    const passed = test();

    if (passed) {
      callback(next);
    } else {
      done();
    }
  };

  next();
}

function forEach(array, callback, done) {
  const arrayLength = array.length;
  
  let index = -1;

  const next = function() {
    index++;

    if (index === arrayLength) {
      done();
    } else {
      const element = array[index];

      callback(element, index, next);
    }
  };

  next();
}

module.exports = {
  whilst: whilst,
  forEach: forEach
};

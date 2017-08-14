'use strict';

function whilst(test, callback, done, context) {
  const next = function() {
    const passed = test(context);

    if (passed) {
      callback(next, context);
    } else {
      done();
    }
  };

  next();
}

function forEach(array, callback, done, context) {
  const arrayLength = array.length;
  
  let index = -1;

  const next = function() {
    index++;

    if (index === arrayLength) {
      done();
    } else {
      const element = array[index];

      callback(element, index, next, context);
    }
  };

  next();
}

module.exports = {
  whilst: whilst,
  forEach: forEach
};

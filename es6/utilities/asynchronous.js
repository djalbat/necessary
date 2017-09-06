'use strict';

function whilst(callback, done, context) {
  let index = -1;

  function next() {
    index++;

    const terminate = callback(next, done, context, index);

    if (terminate) {
      done();
    }
  }

  next();
}

function forEach(array, callback, done, context) {
  const arrayLength = array.length;

  let index = -1;

  function next() {
    index++;

    const terminate = (index === arrayLength);

    if (terminate) {
      done();
    } else {
      const element = array[index];

      callback(element, next, done, context, index);
    }
  }

  next();
}

function sequence(callbacks, done, context) {
  const callbacksLength = callbacks.length;

  let index = -1;

  function next() {
    index++;

    const terminate = (index === callbacksLength);

    if (terminate) {
      done();
    } else {
      const callback = callbacks[index];

      callback(next, done, context, index);
    }
  }

  next();
}

module.exports = {
  whilst: whilst,
  forEach: forEach,
  sequence: sequence
};

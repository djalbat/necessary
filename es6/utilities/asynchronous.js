'use strict';

function whilst(callback, done, context) {
  let count = -1;

  function next() {
    count++;

    const index = count,  ///
          terminate = callback(next, done, context, index);

    if (terminate) {
      done();
    }
  }

  next();
}

function forEach(array, callback, done, context) {
  const length = array.length;  ///

  let count = -1;

  function next() {
    count++;

    const terminate = (count === length);

    if (terminate) {
      done();
    } else {
      const index = count,  ///
            element = array[index];

      callback(element, next, done, context, index);
    }
  }

  next();
}

function sequence(callbacks, done, context) {
  const length = callbacks.length;  ///

  let count = -1;

  function next() {
    count++;

    const terminate = (count === length);

    if (terminate) {
      done();
    } else {
      const index = count,  ///
            callback = callbacks[index];

      callback(next, done, context, index);
    }
  }

  next();
}

function eventually(callbacks, done, context) {
  const length = callbacks.length;  ///

  let count = 0;

  function next() {
    count++;

    const terminate = (count === length);

    if (terminate) {
      done();
    }
  }

  callbacks.forEach(function(callback, index) {
    callback(next, done, context, index);
  });
}

function repeatedly(callback, length, done, context) {
  let count = 0;

  function next() {
    count++;

    const terminate = (count === length);

    if (terminate) {
      done();
    }
  }

  for (let index = 0; index < length; index++) {
    callback(next, done, context, index);
  }
}

module.exports = {
  whilst: whilst,
  forEach: forEach,
  sequence: sequence,
  eventually: eventually,
  repeatedly: repeatedly
};

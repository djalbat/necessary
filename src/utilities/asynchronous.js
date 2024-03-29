"use strict";

export function whilst(operation, done, context) {
  let count = -1;

  function next() {
    count++;

    const index = count,  ///
          terminate = operation(next, done, context, index);

    if (terminate) {
      done();
    }
  }

  next();
}

export function forEach(array, operation, done, context) {
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

      operation(element, next, done, context, index);
    }
  }

  next();
}

export function sequence(operations, done, context) {
  const length = operations.length;  ///

  let count = -1;

  function next() {
    count++;

    const terminate = (count === length);

    if (terminate) {
      done();
    } else {
      const index = count,  ///
            operation = operations[index];

      operation(next, done, context, index);
    }
  }

  next();
}

export function eventually(operations, done, context) {
  const length = operations.length;  ///

  let count = 0;

  function next() {
    count++;

    const terminate = (count === length);

    if (terminate) {
      done();
    }
  }

  operations.forEach((operation, index) => {
    operation(next, done, context, index);
  });
}

export function repeatedly(operation, length, done, context) {
  let count = 0;

  function next() {
    count++;

    const terminate = (count === length);

    if (terminate) {
      done();
    }
  }

  for (let index = 0; index < length; index++) {
    operation(next, done, context, index);
  }
}

export function forwardsForEach(array, operation, done, context) {
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

      operation(element, next, done, context, index);
    }
  }

  next();
}

export function backwardsForEach(array, operation, done, context) {
  const length = array.length;  ///

  let count = length;

  function next() {
    count--;

    const terminate = (count === -1);

    if (terminate) {
      done();
    } else {
      const index = count,  ///
            element = array[index];

      operation(element, next, done, context, index);
    }
  }

  next();
}

export default {
  whilst,
  forEach,
  sequence,
  eventually,
  repeatedly,
  forwardsForEach,
  backwardsForEach
};

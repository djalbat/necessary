"use strict";

export function whilst(operation, done, context) {
  function next(index) {
    operation(() => {
      next(index + 1);
    }, done, context, index);
  }

  const index = 0;

  next(index);
}

export function forEach(array, operation, done, context) {
  const length = array.length;  ///

  function next(index) {
    if (index === length) {
      done();

      return;
    }

    const element = array[index];

    operation(element, () => {
      next(index + 1);
    }, done, context, index);
  }

  const index = 0;

  next(index);
}

export function sequence(operations, done, context) {
  const length = operations.length;  ///

  function next(index) {
    if (index === length) {
      done();

      return;
    }

    const operation = operations[index];

    operation(() => {
      next(index + 1);
    }, done, context, index);
  }

  const index = 0;

  next(index);
}

export function eventually(operations, done, context) {
  const length = operations.length;

  if (length === 0) {
    done();

    return;
  }

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
  if (length === 0) {
    done();

    return;
  }

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

  function next(index) {
    if (index === length) {
      done();

      return;
    }

    const element = array[index];

    operation(element, () => {
      next(index + 1);
    }, done, context, index);
  }

  const index = 0;

  next(index);
}

export function backwardsForEach(array, operation, done, context) {
  const length = array.length;  ///

  function next(index) {
    if (index === -1) {
      done();

      return;
    }

    const element = array[index];

    operation(element, () => {
      next(index - 1);
    }, done, context, index);
  }

  const index = length - 1;

  next(index);
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

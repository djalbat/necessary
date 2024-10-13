"use strict";

export function first(array) { return array[0];}

export function second(array) { return array[1]; }

export function third(array) { return array[2]; }

export function fourth(array) { return array[3]; }

export function fifth(array) { return array[4]; }

export function sixth(array) { return array[5]; }

export function seventh(array) { return array[6]; }

export function eighth(array) { return array[7]; }

export function ninth(array) { return array[8]; }

export function tenth(array) { return array[9]; }

export function firstLast(array) { return array[array.length - 1]; }

export function secondLast(array) { return array[array.length - 2]; }

export function thirdLast(array) { return array[array.length - 3]; }

export function fourthLast(array) { return array[array.length - 4]; }

export function fifthLast(array) { return array[array.length - 5]; }

export function sixthLast(array) { return array[array.length - 6]; }

export function seventhLast(array) { return array[array.length - 7]; }

export function eighthLast(array) { return array[array.length - 8]; }

export function ninthLast(array) { return array[array.length - 9]; }

export function last(array) { return array[array.length - 1]; }

export function head(array) { return array.slice(0, 1); }

export function tail(array) { return array.slice(1); }

export function back(array) { return array.slice(array.length - 1); }

export function front(array) { return array.slice(0, Math.max(1, array.length - 1)); }

export function push(arrayA, arrayB) { Array.prototype.push.apply(arrayA, arrayB); }

export function unshift(arrayA, arrayB) { Array.prototype.unshift.apply(arrayA, arrayB); }

export function concat(arrayA, elementOrArray2) {
  const arrayB = (elementOrArray2 instanceof Array) ?
                    elementOrArray2 :
                     [ elementOrArray2 ];
  
  push(arrayA, arrayB);
}

export function clear(array) {
  const start = 0;
  
  return array.splice(start);
}

export function copy(arrayA, arrayB) {
  const start = 0,
        deleteCount = arrayB.length;  ///
  
  splice(arrayA, start, deleteCount, arrayB);
}

export function merge(arrayA, arrayB) { Array.prototype.push.apply(arrayA, arrayB); }

export function match(arrayA, arrayB, callback) {
  let matches = false;

  const arrayALength = arrayA.length,
        arrayBLength = arrayB.length;

  if (arrayALength === arrayBLength) {
    matches = arrayA.every((elementA, index) => {
      const elementB = arrayB[index],
            passed = callback(elementA, elementB, index);

      if (passed) {
        return true;
      }
    });
  }

  return matches;
}

export function correlate(arrayA, arrayB, callback) {
  arrayB = [  ///
    ...arrayB
  ];

  const correlates = arrayA.every((elementA) => {
    const elementB = extract(arrayB, (elementB) => {
      const result = callback(elementA, elementB);

      if (result) {
        return true;
      }
    }) || null;

    if (elementB !== null) {
      return true;
    }
  });

  return correlates;
}

export function find(array, callback) {
  const elements = [];

  forwardsForEach(array, (element, index) => {
    const passed = callback(element, index);

    if (passed) {
      elements.push(element);
    }
  });

  return elements;
}

export function replace(array, element, callback) {
  let start;
  
  const found = array.some((element, index) => {
    const passed = callback(element, index);

    if (passed) {
      start = index;  ///
      
      return true;
    }
  });
  
  if (found) {
    const deleteCount = 1;

    array.splice(start, deleteCount, element);
  }

  return found;
}

export function splice(arrayA, start, deleteCount = Infinity, arrayB = []) {
  const args = [ start, deleteCount, ...arrayB ],
        deletedElements = Array.prototype.splice.apply(arrayA, args);

  return deletedElements;
}

export function filter(array, callback) {
  const deletedElements = [];
  
  backwardsForEach(array, (element, index) => {
    const passed = callback(element, index);

    if (!passed) {
      const start = index,  ///
            deleteCount = 1,
            deletedElements = array.splice(start, deleteCount),
            firstDeletedElement = first(deletedElements);
      
      deletedElements.unshift(firstDeletedElement);  ///
    }
  });
  
  return deletedElements;
}

export function prune(array, callback) {
  let deletedElement = undefined;
  
  array.some((element, index) => {
    const passed = callback(element, index);

    if (!passed) {
      const start = index,  ///
            deleteCount = 1,
            deletedElements = array.splice(start, deleteCount),
            firstDeletedElement = first(deletedElements);
      
      deletedElement = firstDeletedElement;  ///

      return true;
    }
  });
  
  return deletedElement;
}

export function extract(array, callback) {
  let deletedElement = undefined;

  array.some((element, index) => {
    const passed = callback(element, index);

    if (passed) {
      const start = index,  ///
            deleteCount = 1,
            deletedElements = array.splice(start, deleteCount),
            firstDeletedElement = first(deletedElements);

      deletedElement = firstDeletedElement;  ///

      return true;
    }
  });

  return deletedElement;
}

export function patch(array, element, callback) {
  const found = array.some((element, index) => {
    const passed = callback(element, index);

    if (passed) {
      return true;
    }
  });


  if (found) {
    array.push(element);
  }

  return found;
}

export function compress(array, callback) {
  let index1 = 0,
      length = array.length;

  while (index1 < length) {
    const elementB = array[index1];

    for (let index2 = length - 1; index2 > index1; index2--) {
      const elementA = array[index2],
            passed = callback(elementA, elementB);

      if (passed) {
        const start = index2, ///
              deleteCount = 1;

        array.splice(start, deleteCount);
      }
    }

    index1++;

    length = array.length;
  }
}

export function combine(arrayA, arrayB, callback) {
  const array = [
    ...arrayA,
    ...arrayB
  ];

  compress(array, callback);

  return array;
}

export function reverse(array) {
  array = [ ///
    ...array
  ].reverse();

  return array;
}

export function augment(arrayA, arrayB, callback) {
  arrayB.forEach((element, index) => {
    const passed = callback(element, index);

    if (passed) {
      arrayA.push(element);
    }
  });
}

export function separate(array, arrayA, arrayB, callback) {
  array.forEach((element, index) => {
    const passed = callback(element, index);

    passed ?
      arrayA.push(element) :
        arrayB.push(element);
  });
}

export function forwardsFind(array, callback) {
  const arrayLength = array.length;

  for (let index = 0; index < arrayLength; index++) {
    const element = array[index],
          passed = callback(element, index);

    if (passed) {
      return element;
    }
  }

  return false;
}

export function backwardsFind(array, callback) {
  const arrayLength = array.length;

  for (let index = arrayLength - 1; index >= 0; index--) {
    const element = array[index],
          passed = callback(element, index);

    if (passed) {
      return element;
    }
  }

  return false;
}

export function forwardsSome(array, callback) {
  const arrayLength = array.length;

  for (let index = 0; index < arrayLength; index++) {
    const element = array[index],
          passed = callback(element, index);
    
    if (passed) {
      return true;
    }
  }

  return false;
}

export function backwardsSome(array, callback) {
  const arrayLength = array.length;

  for (let index = arrayLength - 1; index >= 0; index--) {
    const element = array[index],
          passed = callback(element, index);

    if (passed) {
      return true;
    }
  }

  return false;
}

export function forwardsEvery(array, callback) {
  const arrayLength = array.length;

  for (let index = 0; index < arrayLength; index++) {
    const element = array[index],
          passed = callback(element, index);

    if (!passed) {
      return false;
    }
  }

  return true;
}

export function backwardsEvery(array, callback) {
  const arrayLength = array.length;

  for (let index = arrayLength - 1; index >= 0; index--) {
    const element = array[index],
          passed = callback(element, index);

    if (!passed) {
      return false;
    }
  }

  return true;
}

export function forwardsReduce(array, callback, initialValue) {
  let value = initialValue; ///

  const arrayLength = array.length;

  for (let index = 0; index < arrayLength; index++) {
    const element = array[index];

    value = callback(value, element, index);
  }

  return value;
}

export function backwardsReduce(array, callback, initialValue) {
  let value = initialValue; ///

  const arrayLength = array.length;

  for (let index = arrayLength - 1; index >= 0; index--) {
    const element = array[index];

    value = callback(value, element, index);
  }

  return value;
}

export function forwardsForEach(array, callback) {
  const arrayLength = array.length;

  for (let index = 0; index < arrayLength; index++) {
    const element = array[index];

    callback(element, index);
  }
}

export function backwardsForEach(array, callback) {
  const arrayLength = array.length;

  for (let index = arrayLength - 1; index >= 0; index--) {
    const element = array[index];

    callback(element, index);
  }
}

export default {
  first,
  second,
  third,
  fourth,
  fifth,
  sixth,
  seventh,
  eighth,
  ninth,
  firstLast,
  secondLast,
  thirdLast,
  fourthLast,
  fifthLast,
  sixthLast,
  seventhLast,
  eighthLast,
  ninthLast,
  last,
  head,
  tail,
  back,
  front,
  push,
  unshift,
  concat,
  clear,
  copy,
  merge,
  match,
  correlate,
  find,
  replace,
  splice,
  filter,
  prune,
  extract,
  patch,
  compress,
  combine,
  reverse,
  augment,
  separate,
  forwardsFind,
  backwardsFind,
  forwardsSome,
  backwardsSome,
  forwardsEvery,
  backwardsEvery,
  forwardsReduce,
  backwardsReduce,
  forwardsForEach,
  backwardsForEach
};

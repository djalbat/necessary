'use strict';

function first(array) { return array[0]; }

function second(array) { return array[1]; }

function third(array) { return array[2]; }

function fourth(array) { return array[3]; }

function fifth(array) { return array[4]; }

function fifthLast(array) { return array[array.length - 5]; }

function fourthLast(array) { return array[array.length - 4]; }

function thirdLast(array) { return array[array.length - 3]; }

function secondLast(array) { return array[array.length - 2]; }

function last(array) { return array[array.length - 1]; }

function tail(array) { return array.slice(1); }

function push(array1, array2) { Array.prototype.push.apply(array1, array2); }

function unshift(array1, array2) { Array.prototype.unshift.apply(array1, array2); }

function concat(array1, array2) {
  if (!(array2 instanceof Array)) {
    array2 = [array2];
  }

  const start = 0,
        deleteCount = 0;

  splice(array1, start, deleteCount, array2);
}

function clear(array) {
  const start = 0;
  
  return array.splice(start);
}

function copy(array1, array2) {
  const start = 0,
        deleteCount = array2.length;  ///
  
  splice(array1, start, deleteCount, array2);
}

function merge(array1, array2) {
  const start = array2.length,  ///
        deleteCount = 0;

  splice(array1, start, deleteCount, array2);
}

function splice(array1, start, deleteCount, array2 = []) {
  const args = [start, deleteCount, ...array2],
        deletedItemsArray = Array.prototype.splice.apply(array1, args);

  return deletedItemsArray;
}

function replace(array, element, test) {
  let start = -1;
  
  const found = array.some(function(element, index) {
    const passed = test(element, index);

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

function filter(array, test) {
  const filteredElements = [];
  
  backwardsForEach(array, function(element, index) {
    const passed = test(element, index);

    if (!passed) {
      const start = index,  ///
            deleteCount = 1,
            deletedElements = array.splice(start, deleteCount),
            firstDeletedElement = first(deletedElements);
      
      filteredElements.unshift(firstDeletedElement);  ///
    }
  });
  
  return filteredElements;
}

function find(array, test) {
  const elements = [];

  forwardsForEach(array, function(element, index) {
    const passed = test(element, index);

    if (passed) {
      elements.push(element);
    }
  });

  return elements;
}

function prune(array, test) {
  let prunedElement = undefined;
  
  array.some(function(element, index) {
    const passed = test(element, index);

    if (passed) {
      const start = index,  ///
            deleteCount = 1,
            deletedElements = array.splice(start, deleteCount),
            firstDeletedElement = first(deletedElements);
      
      prunedElement = firstDeletedElement;  ///

      return true;
    }
  });
  
  return prunedElement;
}

function patch(array, element, test) {
  const found = array.some(function(element, index) {
    const passed = test(element, index);

    if (passed) {
      return true;
    }
  });


  if (found) {
    array.push(element);
  }

  return found;
}

function augment(array1, array2, test) {
  array2.forEach(function(element, index) {
    const passed = test(element, index);

    if (passed) {
      array1.push(element);
    }
  });
}

function separate(array, array1, array2, test) {
  array.forEach(function(element, index) {
    const passed = test(element, index);

    passed ?
      array1.push(element) :
        array2.push(element);
  });
}

function forwardsSome(array, callback) {
  const arrayLength = array.length;

  for (var index = 0; index < arrayLength; index++) {
    const element = array[index],
          result = callback(element, index);
    
    if (result) {
      return true;
    }
  }

  return false;
}

function backwardsSome(array, callback) {
  const arrayLength = array.length;

  for (var index = arrayLength - 1; index >= 0; index--) {
    const element = array[index],
          result = callback(element, index);

    if (result) {
      return true;
    }
  }

  return false;
}

function forwardsForEach(array, callback) {
  const arrayLength = array.length;

  for (var index = 0; index < arrayLength; index++) {
    const element = array[index];

    callback(element, index);
  }
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
  fifthLast: fifthLast,
  fourthLast: fourthLast,
  thirdLast: thirdLast,
  secondLast: secondLast,
  last: last,
  tail: tail,
  push: push,
  unshift: unshift,
  concat: concat,
  clear: clear,
  copy: copy,
  merge: merge,
  splice: splice,
  replace: replace,
  filter: filter,
  find: find,
  prune: prune,
  patch: patch,
  augment: augment,
  separate: separate,
  forwardsSome: forwardsSome,
  backwardsSome: backwardsSome,
  forwardsForEach: forwardsForEach,
  backwardsForEach: backwardsForEach
};

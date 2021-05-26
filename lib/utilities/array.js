"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.first = first;
exports.second = second;
exports.third = third;
exports.fourth = fourth;
exports.fifth = fifth;
exports.fifthLast = fifthLast;
exports.fourthLast = fourthLast;
exports.thirdLast = thirdLast;
exports.secondLast = secondLast;
exports.last = last;
exports.head = head;
exports.tail = tail;
exports.push = push;
exports.unshift = unshift;
exports.concat = concat;
exports.clear = clear;
exports.copy = copy;
exports.merge = merge;
exports.splice = splice;
exports.replace = replace;
exports.filter = filter;
exports.find = find;
exports.prune = prune;
exports.patch = patch;
exports.augment = augment;
exports.separate = separate;
exports.forwardsSome = forwardsSome;
exports.backwardsSome = backwardsSome;
exports.forwardsEvery = forwardsEvery;
exports.backwardsEvery = backwardsEvery;
exports.forwardsReduce = forwardsReduce;
exports.backwardsReduce = backwardsReduce;
exports.forwardsForEach = forwardsForEach;
exports.backwardsForEach = backwardsForEach;
exports.default = void 0;
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
        for(var i = 0, arr2 = new Array(arr.length); i < arr.length; i++){
            arr2[i] = arr[i];
        }
        return arr2;
    }
}
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
}
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}
function first(array) {
    return array[0];
}
function second(array) {
    return array[1];
}
function third(array) {
    return array[2];
}
function fourth(array) {
    return array[3];
}
function fifth(array) {
    return array[4];
}
function fifthLast(array) {
    return array[array.length - 5];
}
function fourthLast(array) {
    return array[array.length - 4];
}
function thirdLast(array) {
    return array[array.length - 3];
}
function secondLast(array) {
    return array[array.length - 2];
}
function last(array) {
    return array[array.length - 1];
}
function head(array) {
    return array.slice(0, 1);
}
function tail(array) {
    return array.slice(1);
}
function push(array1, array2) {
    Array.prototype.push.apply(array1, array2);
}
function unshift(array1, array2) {
    Array.prototype.unshift.apply(array1, array2);
}
function concat(array1, elementOrArray2) {
    var array2 = _instanceof(elementOrArray2, Array) ? elementOrArray2 : [
        elementOrArray2
    ];
    push(array1, array2);
}
function clear(array) {
    var start = 0;
    return array.splice(start);
}
function copy(array1, array2) {
    var start = 0, deleteCount = array2.length; ///
    splice(array1, start, deleteCount, array2);
}
function merge(array1, array2) {
    Array.prototype.push.apply(array1, array2);
}
function splice(array1, start, param, param1) {
    var deleteCount = param === void 0 ? Infinity : param, array2 = param1 === void 0 ? [] : param1;
    var args = [
        start,
        deleteCount
    ].concat(_toConsumableArray(array2)), deletedItemsArray = Array.prototype.splice.apply(array1, args);
    return deletedItemsArray;
}
function replace(array, element, test) {
    var start;
    var found = array.some(function(element1, index) {
        var passed = test(element1, index);
        if (passed) {
            start = index; ///
            return true;
        }
    });
    if (found) {
        var deleteCount = 1;
        array.splice(start, deleteCount, element);
    }
    return found;
}
function filter(array, test) {
    var filteredElements = [];
    backwardsForEach(array, function(element, index) {
        var passed = test(element, index);
        if (!passed) {
            var start = index, deleteCount = 1, deletedElements = array.splice(start, deleteCount), firstDeletedElement = first(deletedElements);
            filteredElements.unshift(firstDeletedElement); ///
        }
    });
    return filteredElements;
}
function find(array, test) {
    var elements = [];
    forwardsForEach(array, function(element, index) {
        var passed = test(element, index);
        if (passed) {
            elements.push(element);
        }
    });
    return elements;
}
function prune(array, test) {
    var prunedElement = undefined;
    array.some(function(element, index) {
        var passed = test(element, index);
        if (!passed) {
            var start = index, deleteCount = 1, deletedElements = array.splice(start, deleteCount), firstDeletedElement = first(deletedElements);
            prunedElement = firstDeletedElement; ///
            return true;
        }
    });
    return prunedElement;
}
function patch(array, element, test) {
    var found = array.some(function(element1, index) {
        var passed = test(element1, index);
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
        var passed = test(element, index);
        if (passed) {
            array1.push(element);
        }
    });
}
function separate(array, array1, array2, test) {
    array.forEach(function(element, index) {
        var passed = test(element, index);
        passed ? array1.push(element) : array2.push(element);
    });
}
function forwardsSome(array, callback) {
    var arrayLength = array.length;
    for(var index = 0; index < arrayLength; index++){
        var element = array[index], result = callback(element, index);
        if (result) {
            return true;
        }
    }
    return false;
}
function backwardsSome(array, callback) {
    var arrayLength = array.length;
    for(var index = arrayLength - 1; index >= 0; index--){
        var element = array[index], result = callback(element, index);
        if (result) {
            return true;
        }
    }
    return false;
}
function forwardsEvery(array, callback) {
    var arrayLength = array.length;
    for(var index = 0; index < arrayLength; index++){
        var element = array[index], result = callback(element, index);
        if (!result) {
            return false;
        }
    }
    return true;
}
function backwardsEvery(array, callback) {
    var arrayLength = array.length;
    for(var index = arrayLength - 1; index >= 0; index--){
        var element = array[index], result = callback(element, index);
        if (!result) {
            return false;
        }
    }
    return true;
}
function forwardsReduce(array, callback, initialValue) {
    var value = initialValue;
    forwardsForEach(array, function(element, index) {
        value = callback(value, element, index);
    });
    return value;
}
function backwardsReduce(array, callback, initialValue) {
    var value = initialValue;
    backwardsForEach(array, function(element, index) {
        value = callback(value, element, index);
    });
    return value;
}
function forwardsForEach(array, callback) {
    var arrayLength = array.length;
    for(var index = 0; index < arrayLength; index++){
        var element = array[index];
        callback(element, index);
    }
}
function backwardsForEach(array, callback) {
    var arrayLength = array.length;
    for(var index = arrayLength - 1; index >= 0; index--){
        var element = array[index];
        callback(element, index);
    }
}
var _default = {
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
    head: head,
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
    forwardsEvery: forwardsEvery,
    backwardsEvery: backwardsEvery,
    forwardsReduce: forwardsReduce,
    backwardsReduce: backwardsReduce,
    forwardsForEach: forwardsForEach,
    backwardsForEach: backwardsForEach
};
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvYXJyYXkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBmaXJzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbMF07fVxuXG5leHBvcnQgZnVuY3Rpb24gc2Vjb25kKGFycmF5KSB7IHJldHVybiBhcnJheVsxXTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gdGhpcmQoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzJdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3VydGgoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzNdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBmaWZ0aChhcnJheSkgeyByZXR1cm4gYXJyYXlbNF07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpZnRoTGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gNV07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvdXJ0aExhc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5W2FycmF5Lmxlbmd0aCAtIDRdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiB0aGlyZExhc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5W2FycmF5Lmxlbmd0aCAtIDNdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBzZWNvbmRMYXN0KGFycmF5KSB7IHJldHVybiBhcnJheVthcnJheS5sZW5ndGggLSAyXTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gbGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gMV07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGhlYWQoYXJyYXkpIHsgcmV0dXJuIGFycmF5LnNsaWNlKDAsIDEpOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiB0YWlsKGFycmF5KSB7IHJldHVybiBhcnJheS5zbGljZSgxKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gcHVzaChhcnJheTEsIGFycmF5MikgeyBBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseShhcnJheTEsIGFycmF5Mik7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIHVuc2hpZnQoYXJyYXkxLCBhcnJheTIpIHsgQXJyYXkucHJvdG90eXBlLnVuc2hpZnQuYXBwbHkoYXJyYXkxLCBhcnJheTIpOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25jYXQoYXJyYXkxLCBlbGVtZW50T3JBcnJheTIpIHtcbiAgY29uc3QgYXJyYXkyID0gKGVsZW1lbnRPckFycmF5MiBpbnN0YW5jZW9mIEFycmF5KSA/XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRPckFycmF5MiA6XG4gICAgICAgICAgICAgICAgICAgICBbZWxlbWVudE9yQXJyYXkyXTtcbiAgXG4gIHB1c2goYXJyYXkxLCBhcnJheTIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xlYXIoYXJyYXkpIHtcbiAgY29uc3Qgc3RhcnQgPSAwO1xuICBcbiAgcmV0dXJuIGFycmF5LnNwbGljZShzdGFydCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb3B5KGFycmF5MSwgYXJyYXkyKSB7XG4gIGNvbnN0IHN0YXJ0ID0gMCxcbiAgICAgICAgZGVsZXRlQ291bnQgPSBhcnJheTIubGVuZ3RoOyAgLy8vXG4gIFxuICBzcGxpY2UoYXJyYXkxLCBzdGFydCwgZGVsZXRlQ291bnQsIGFycmF5Mik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXJnZShhcnJheTEsIGFycmF5MikgeyBBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseShhcnJheTEsIGFycmF5Mik7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIHNwbGljZShhcnJheTEsIHN0YXJ0LCBkZWxldGVDb3VudCA9IEluZmluaXR5LCBhcnJheTIgPSBbXSkge1xuICBjb25zdCBhcmdzID0gW3N0YXJ0LCBkZWxldGVDb3VudCwgLi4uYXJyYXkyXSxcbiAgICAgICAgZGVsZXRlZEl0ZW1zQXJyYXkgPSBBcnJheS5wcm90b3R5cGUuc3BsaWNlLmFwcGx5KGFycmF5MSwgYXJncyk7XG5cbiAgcmV0dXJuIGRlbGV0ZWRJdGVtc0FycmF5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVwbGFjZShhcnJheSwgZWxlbWVudCwgdGVzdCkge1xuICBsZXQgc3RhcnQ7XG4gIFxuICBjb25zdCBmb3VuZCA9IGFycmF5LnNvbWUoKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgcGFzc2VkID0gdGVzdChlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAocGFzc2VkKSB7XG4gICAgICBzdGFydCA9IGluZGV4OyAgLy8vXG4gICAgICBcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG4gIFxuICBpZiAoZm91bmQpIHtcbiAgICBjb25zdCBkZWxldGVDb3VudCA9IDE7XG5cbiAgICBhcnJheS5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50LCBlbGVtZW50KTtcbiAgfVxuXG4gIHJldHVybiBmb3VuZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbHRlcihhcnJheSwgdGVzdCkge1xuICBjb25zdCBmaWx0ZXJlZEVsZW1lbnRzID0gW107XG4gIFxuICBiYWNrd2FyZHNGb3JFYWNoKGFycmF5LCAoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBwYXNzZWQgPSB0ZXN0KGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmICghcGFzc2VkKSB7XG4gICAgICBjb25zdCBzdGFydCA9IGluZGV4LCAgLy8vXG4gICAgICAgICAgICBkZWxldGVDb3VudCA9IDEsXG4gICAgICAgICAgICBkZWxldGVkRWxlbWVudHMgPSBhcnJheS5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50KSxcbiAgICAgICAgICAgIGZpcnN0RGVsZXRlZEVsZW1lbnQgPSBmaXJzdChkZWxldGVkRWxlbWVudHMpO1xuICAgICAgXG4gICAgICBmaWx0ZXJlZEVsZW1lbnRzLnVuc2hpZnQoZmlyc3REZWxldGVkRWxlbWVudCk7ICAvLy9cbiAgICB9XG4gIH0pO1xuICBcbiAgcmV0dXJuIGZpbHRlcmVkRWxlbWVudHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaW5kKGFycmF5LCB0ZXN0KSB7XG4gIGNvbnN0IGVsZW1lbnRzID0gW107XG5cbiAgZm9yd2FyZHNGb3JFYWNoKGFycmF5LCAoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBwYXNzZWQgPSB0ZXN0KGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmIChwYXNzZWQpIHtcbiAgICAgIGVsZW1lbnRzLnB1c2goZWxlbWVudCk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gZWxlbWVudHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcnVuZShhcnJheSwgdGVzdCkge1xuICBsZXQgcHJ1bmVkRWxlbWVudCA9IHVuZGVmaW5lZDtcbiAgXG4gIGFycmF5LnNvbWUoKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgcGFzc2VkID0gdGVzdChlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAoIXBhc3NlZCkge1xuICAgICAgY29uc3Qgc3RhcnQgPSBpbmRleCwgIC8vL1xuICAgICAgICAgICAgZGVsZXRlQ291bnQgPSAxLFxuICAgICAgICAgICAgZGVsZXRlZEVsZW1lbnRzID0gYXJyYXkuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCksXG4gICAgICAgICAgICBmaXJzdERlbGV0ZWRFbGVtZW50ID0gZmlyc3QoZGVsZXRlZEVsZW1lbnRzKTtcbiAgICAgIFxuICAgICAgcHJ1bmVkRWxlbWVudCA9IGZpcnN0RGVsZXRlZEVsZW1lbnQ7ICAvLy9cblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcbiAgXG4gIHJldHVybiBwcnVuZWRFbGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGF0Y2goYXJyYXksIGVsZW1lbnQsIHRlc3QpIHtcbiAgY29uc3QgZm91bmQgPSBhcnJheS5zb21lKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHBhc3NlZCA9IHRlc3QoZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuXG4gIGlmIChmb3VuZCkge1xuICAgIGFycmF5LnB1c2goZWxlbWVudCk7XG4gIH1cblxuICByZXR1cm4gZm91bmQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhdWdtZW50KGFycmF5MSwgYXJyYXkyLCB0ZXN0KSB7XG4gIGFycmF5Mi5mb3JFYWNoKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHBhc3NlZCA9IHRlc3QoZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgYXJyYXkxLnB1c2goZWxlbWVudCk7XG4gICAgfVxuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlcGFyYXRlKGFycmF5LCBhcnJheTEsIGFycmF5MiwgdGVzdCkge1xuICBhcnJheS5mb3JFYWNoKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHBhc3NlZCA9IHRlc3QoZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgcGFzc2VkID9cbiAgICAgIGFycmF5MS5wdXNoKGVsZW1lbnQpIDpcbiAgICAgICAgYXJyYXkyLnB1c2goZWxlbWVudCk7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9yd2FyZHNTb21lKGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYXJyYXlMZW5ndGg7IGluZGV4KyspIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdLFxuICAgICAgICAgIHJlc3VsdCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcbiAgICBcbiAgICBpZiAocmVzdWx0KSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBiYWNrd2FyZHNTb21lKGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IGFycmF5TGVuZ3RoIC0gMTsgaW5kZXggPj0gMDsgaW5kZXgtLSkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF0sXG4gICAgICAgICAgcmVzdWx0ID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHJlc3VsdCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9yd2FyZHNFdmVyeShhcnJheSwgY2FsbGJhY2spIHtcbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGFycmF5TGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XSxcbiAgICAgICAgICByZXN1bHQgPSBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAoIXJlc3VsdCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYmFja3dhcmRzRXZlcnkoYXJyYXksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gYXJyYXlMZW5ndGggLSAxOyBpbmRleCA+PSAwOyBpbmRleC0tKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XSxcbiAgICAgICAgICByZXN1bHQgPSBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAoIXJlc3VsdCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9yd2FyZHNSZWR1Y2UoYXJyYXksIGNhbGxiYWNrLCBpbml0aWFsVmFsdWUpIHtcbiAgbGV0IHZhbHVlID0gaW5pdGlhbFZhbHVlO1xuXG4gIGZvcndhcmRzRm9yRWFjaChhcnJheSwgKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgdmFsdWUgPSBjYWxsYmFjayh2YWx1ZSwgZWxlbWVudCwgaW5kZXgpO1xuICB9KTtcblxuICByZXR1cm4gdmFsdWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBiYWNrd2FyZHNSZWR1Y2UoYXJyYXksIGNhbGxiYWNrLCBpbml0aWFsVmFsdWUpIHtcbiAgbGV0IHZhbHVlID0gaW5pdGlhbFZhbHVlO1xuXG4gIGJhY2t3YXJkc0ZvckVhY2goYXJyYXksIChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIHZhbHVlID0gY2FsbGJhY2sodmFsdWUsIGVsZW1lbnQsIGluZGV4KTtcbiAgfSk7XG5cbiAgcmV0dXJuIHZhbHVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9yd2FyZHNGb3JFYWNoKGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYXJyYXlMZW5ndGg7IGluZGV4KyspIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdO1xuXG4gICAgY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBiYWNrd2FyZHNGb3JFYWNoKGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IGFycmF5TGVuZ3RoIC0gMTsgaW5kZXggPj0gMDsgaW5kZXgtLSkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF07XG5cbiAgICBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBmaXJzdCxcbiAgc2Vjb25kLFxuICB0aGlyZCxcbiAgZm91cnRoLFxuICBmaWZ0aCxcbiAgZmlmdGhMYXN0LFxuICBmb3VydGhMYXN0LFxuICB0aGlyZExhc3QsXG4gIHNlY29uZExhc3QsXG4gIGxhc3QsXG4gIGhlYWQsXG4gIHRhaWwsXG4gIHB1c2gsXG4gIHVuc2hpZnQsXG4gIGNvbmNhdCxcbiAgY2xlYXIsXG4gIGNvcHksXG4gIG1lcmdlLFxuICBzcGxpY2UsXG4gIHJlcGxhY2UsXG4gIGZpbHRlcixcbiAgZmluZCxcbiAgcHJ1bmUsXG4gIHBhdGNoLFxuICBhdWdtZW50LFxuICBzZXBhcmF0ZSxcbiAgZm9yd2FyZHNTb21lLFxuICBiYWNrd2FyZHNTb21lLFxuICBmb3J3YXJkc0V2ZXJ5LFxuICBiYWNrd2FyZHNFdmVyeSxcbiAgZm9yd2FyZHNSZWR1Y2UsXG4gIGJhY2t3YXJkc1JlZHVjZSxcbiAgZm9yd2FyZHNGb3JFYWNoLFxuICBiYWNrd2FyZHNGb3JFYWNoXG59O1xuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7UUFFSSxLQUFLLEdBQUwsS0FBSztRQUVMLE1BQU0sR0FBTixNQUFNO1FBRU4sS0FBSyxHQUFMLEtBQUs7UUFFTCxNQUFNLEdBQU4sTUFBTTtRQUVOLEtBQUssR0FBTCxLQUFLO1FBRUwsU0FBUyxHQUFULFNBQVM7UUFFVCxVQUFVLEdBQVYsVUFBVTtRQUVWLFNBQVMsR0FBVCxTQUFTO1FBRVQsVUFBVSxHQUFWLFVBQVU7UUFFVixJQUFJLEdBQUosSUFBSTtRQUVKLElBQUksR0FBSixJQUFJO1FBRUosSUFBSSxHQUFKLElBQUk7UUFFSixJQUFJLEdBQUosSUFBSTtRQUVKLE9BQU8sR0FBUCxPQUFPO1FBRVAsTUFBTSxHQUFOLE1BQU07UUFRTixLQUFLLEdBQUwsS0FBSztRQU1MLElBQUksR0FBSixJQUFJO1FBT0osS0FBSyxHQUFMLEtBQUs7UUFFTCxNQUFNLEdBQU4sTUFBTTtRQU9OLE9BQU8sR0FBUCxPQUFPO1FBc0JQLE1BQU0sR0FBTixNQUFNO1FBbUJOLElBQUksR0FBSixJQUFJO1FBY0osS0FBSyxHQUFMLEtBQUs7UUFx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
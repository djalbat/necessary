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
exports.back = back;
exports.front = front;
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
function back(array) {
    return array.slice(array.length - 1);
}
function front(array) {
    return array.slice(0, array.length - 1);
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
    back: back,
    front: front,
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvYXJyYXkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBmaXJzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbMF07fVxuXG5leHBvcnQgZnVuY3Rpb24gc2Vjb25kKGFycmF5KSB7IHJldHVybiBhcnJheVsxXTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gdGhpcmQoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzJdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3VydGgoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzNdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBmaWZ0aChhcnJheSkgeyByZXR1cm4gYXJyYXlbNF07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpZnRoTGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gNV07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvdXJ0aExhc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5W2FycmF5Lmxlbmd0aCAtIDRdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiB0aGlyZExhc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5W2FycmF5Lmxlbmd0aCAtIDNdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBzZWNvbmRMYXN0KGFycmF5KSB7IHJldHVybiBhcnJheVthcnJheS5sZW5ndGggLSAyXTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gbGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gMV07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGhlYWQoYXJyYXkpIHsgcmV0dXJuIGFycmF5LnNsaWNlKDAsIDEpOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiB0YWlsKGFycmF5KSB7IHJldHVybiBhcnJheS5zbGljZSgxKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gYmFjayhhcnJheSkgeyByZXR1cm4gYXJyYXkuc2xpY2UoYXJyYXkubGVuZ3RoIC0gMSk7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGZyb250KGFycmF5KSB7IHJldHVybiBhcnJheS5zbGljZSgwLCBhcnJheS5sZW5ndGggLSAxKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gcHVzaChhcnJheTEsIGFycmF5MikgeyBBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseShhcnJheTEsIGFycmF5Mik7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIHVuc2hpZnQoYXJyYXkxLCBhcnJheTIpIHsgQXJyYXkucHJvdG90eXBlLnVuc2hpZnQuYXBwbHkoYXJyYXkxLCBhcnJheTIpOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25jYXQoYXJyYXkxLCBlbGVtZW50T3JBcnJheTIpIHtcbiAgY29uc3QgYXJyYXkyID0gKGVsZW1lbnRPckFycmF5MiBpbnN0YW5jZW9mIEFycmF5KSA/XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRPckFycmF5MiA6XG4gICAgICAgICAgICAgICAgICAgICBbZWxlbWVudE9yQXJyYXkyXTtcbiAgXG4gIHB1c2goYXJyYXkxLCBhcnJheTIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xlYXIoYXJyYXkpIHtcbiAgY29uc3Qgc3RhcnQgPSAwO1xuICBcbiAgcmV0dXJuIGFycmF5LnNwbGljZShzdGFydCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb3B5KGFycmF5MSwgYXJyYXkyKSB7XG4gIGNvbnN0IHN0YXJ0ID0gMCxcbiAgICAgICAgZGVsZXRlQ291bnQgPSBhcnJheTIubGVuZ3RoOyAgLy8vXG4gIFxuICBzcGxpY2UoYXJyYXkxLCBzdGFydCwgZGVsZXRlQ291bnQsIGFycmF5Mik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXJnZShhcnJheTEsIGFycmF5MikgeyBBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseShhcnJheTEsIGFycmF5Mik7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIHNwbGljZShhcnJheTEsIHN0YXJ0LCBkZWxldGVDb3VudCA9IEluZmluaXR5LCBhcnJheTIgPSBbXSkge1xuICBjb25zdCBhcmdzID0gW3N0YXJ0LCBkZWxldGVDb3VudCwgLi4uYXJyYXkyXSxcbiAgICAgICAgZGVsZXRlZEl0ZW1zQXJyYXkgPSBBcnJheS5wcm90b3R5cGUuc3BsaWNlLmFwcGx5KGFycmF5MSwgYXJncyk7XG5cbiAgcmV0dXJuIGRlbGV0ZWRJdGVtc0FycmF5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVwbGFjZShhcnJheSwgZWxlbWVudCwgdGVzdCkge1xuICBsZXQgc3RhcnQ7XG4gIFxuICBjb25zdCBmb3VuZCA9IGFycmF5LnNvbWUoKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgcGFzc2VkID0gdGVzdChlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAocGFzc2VkKSB7XG4gICAgICBzdGFydCA9IGluZGV4OyAgLy8vXG4gICAgICBcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG4gIFxuICBpZiAoZm91bmQpIHtcbiAgICBjb25zdCBkZWxldGVDb3VudCA9IDE7XG5cbiAgICBhcnJheS5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50LCBlbGVtZW50KTtcbiAgfVxuXG4gIHJldHVybiBmb3VuZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbHRlcihhcnJheSwgdGVzdCkge1xuICBjb25zdCBmaWx0ZXJlZEVsZW1lbnRzID0gW107XG4gIFxuICBiYWNrd2FyZHNGb3JFYWNoKGFycmF5LCAoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBwYXNzZWQgPSB0ZXN0KGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmICghcGFzc2VkKSB7XG4gICAgICBjb25zdCBzdGFydCA9IGluZGV4LCAgLy8vXG4gICAgICAgICAgICBkZWxldGVDb3VudCA9IDEsXG4gICAgICAgICAgICBkZWxldGVkRWxlbWVudHMgPSBhcnJheS5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50KSxcbiAgICAgICAgICAgIGZpcnN0RGVsZXRlZEVsZW1lbnQgPSBmaXJzdChkZWxldGVkRWxlbWVudHMpO1xuICAgICAgXG4gICAgICBmaWx0ZXJlZEVsZW1lbnRzLnVuc2hpZnQoZmlyc3REZWxldGVkRWxlbWVudCk7ICAvLy9cbiAgICB9XG4gIH0pO1xuICBcbiAgcmV0dXJuIGZpbHRlcmVkRWxlbWVudHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaW5kKGFycmF5LCB0ZXN0KSB7XG4gIGNvbnN0IGVsZW1lbnRzID0gW107XG5cbiAgZm9yd2FyZHNGb3JFYWNoKGFycmF5LCAoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBwYXNzZWQgPSB0ZXN0KGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmIChwYXNzZWQpIHtcbiAgICAgIGVsZW1lbnRzLnB1c2goZWxlbWVudCk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gZWxlbWVudHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcnVuZShhcnJheSwgdGVzdCkge1xuICBsZXQgcHJ1bmVkRWxlbWVudCA9IHVuZGVmaW5lZDtcbiAgXG4gIGFycmF5LnNvbWUoKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgcGFzc2VkID0gdGVzdChlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAoIXBhc3NlZCkge1xuICAgICAgY29uc3Qgc3RhcnQgPSBpbmRleCwgIC8vL1xuICAgICAgICAgICAgZGVsZXRlQ291bnQgPSAxLFxuICAgICAgICAgICAgZGVsZXRlZEVsZW1lbnRzID0gYXJyYXkuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCksXG4gICAgICAgICAgICBmaXJzdERlbGV0ZWRFbGVtZW50ID0gZmlyc3QoZGVsZXRlZEVsZW1lbnRzKTtcbiAgICAgIFxuICAgICAgcHJ1bmVkRWxlbWVudCA9IGZpcnN0RGVsZXRlZEVsZW1lbnQ7ICAvLy9cblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcbiAgXG4gIHJldHVybiBwcnVuZWRFbGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGF0Y2goYXJyYXksIGVsZW1lbnQsIHRlc3QpIHtcbiAgY29uc3QgZm91bmQgPSBhcnJheS5zb21lKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHBhc3NlZCA9IHRlc3QoZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuXG4gIGlmIChmb3VuZCkge1xuICAgIGFycmF5LnB1c2goZWxlbWVudCk7XG4gIH1cblxuICByZXR1cm4gZm91bmQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhdWdtZW50KGFycmF5MSwgYXJyYXkyLCB0ZXN0KSB7XG4gIGFycmF5Mi5mb3JFYWNoKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHBhc3NlZCA9IHRlc3QoZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgYXJyYXkxLnB1c2goZWxlbWVudCk7XG4gICAgfVxuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlcGFyYXRlKGFycmF5LCBhcnJheTEsIGFycmF5MiwgdGVzdCkge1xuICBhcnJheS5mb3JFYWNoKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHBhc3NlZCA9IHRlc3QoZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgcGFzc2VkID9cbiAgICAgIGFycmF5MS5wdXNoKGVsZW1lbnQpIDpcbiAgICAgICAgYXJyYXkyLnB1c2goZWxlbWVudCk7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9yd2FyZHNTb21lKGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYXJyYXlMZW5ndGg7IGluZGV4KyspIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdLFxuICAgICAgICAgIHJlc3VsdCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcbiAgICBcbiAgICBpZiAocmVzdWx0KSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBiYWNrd2FyZHNTb21lKGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IGFycmF5TGVuZ3RoIC0gMTsgaW5kZXggPj0gMDsgaW5kZXgtLSkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF0sXG4gICAgICAgICAgcmVzdWx0ID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHJlc3VsdCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9yd2FyZHNFdmVyeShhcnJheSwgY2FsbGJhY2spIHtcbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGFycmF5TGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XSxcbiAgICAgICAgICByZXN1bHQgPSBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAoIXJlc3VsdCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYmFja3dhcmRzRXZlcnkoYXJyYXksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gYXJyYXlMZW5ndGggLSAxOyBpbmRleCA+PSAwOyBpbmRleC0tKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XSxcbiAgICAgICAgICByZXN1bHQgPSBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAoIXJlc3VsdCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9yd2FyZHNSZWR1Y2UoYXJyYXksIGNhbGxiYWNrLCBpbml0aWFsVmFsdWUpIHtcbiAgbGV0IHZhbHVlID0gaW5pdGlhbFZhbHVlO1xuXG4gIGZvcndhcmRzRm9yRWFjaChhcnJheSwgKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgdmFsdWUgPSBjYWxsYmFjayh2YWx1ZSwgZWxlbWVudCwgaW5kZXgpO1xuICB9KTtcblxuICByZXR1cm4gdmFsdWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBiYWNrd2FyZHNSZWR1Y2UoYXJyYXksIGNhbGxiYWNrLCBpbml0aWFsVmFsdWUpIHtcbiAgbGV0IHZhbHVlID0gaW5pdGlhbFZhbHVlO1xuXG4gIGJhY2t3YXJkc0ZvckVhY2goYXJyYXksIChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIHZhbHVlID0gY2FsbGJhY2sodmFsdWUsIGVsZW1lbnQsIGluZGV4KTtcbiAgfSk7XG5cbiAgcmV0dXJuIHZhbHVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9yd2FyZHNGb3JFYWNoKGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYXJyYXlMZW5ndGg7IGluZGV4KyspIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdO1xuXG4gICAgY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBiYWNrd2FyZHNGb3JFYWNoKGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IGFycmF5TGVuZ3RoIC0gMTsgaW5kZXggPj0gMDsgaW5kZXgtLSkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF07XG5cbiAgICBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBmaXJzdCxcbiAgc2Vjb25kLFxuICB0aGlyZCxcbiAgZm91cnRoLFxuICBmaWZ0aCxcbiAgZmlmdGhMYXN0LFxuICBmb3VydGhMYXN0LFxuICB0aGlyZExhc3QsXG4gIHNlY29uZExhc3QsXG4gIGxhc3QsXG4gIGhlYWQsXG4gIHRhaWwsXG4gIGJhY2ssXG4gIGZyb250LFxuICBwdXNoLFxuICB1bnNoaWZ0LFxuICBjb25jYXQsXG4gIGNsZWFyLFxuICBjb3B5LFxuICBtZXJnZSxcbiAgc3BsaWNlLFxuICByZXBsYWNlLFxuICBmaWx0ZXIsXG4gIGZpbmQsXG4gIHBydW5lLFxuICBwYXRjaCxcbiAgYXVnbWVudCxcbiAgc2VwYXJhdGUsXG4gIGZvcndhcmRzU29tZSxcbiAgYmFja3dhcmRzU29tZSxcbiAgZm9yd2FyZHNFdmVyeSxcbiAgYmFja3dhcmRzRXZlcnksXG4gIGZvcndhcmRzUmVkdWNlLFxuICBiYWNrd2FyZHNSZWR1Y2UsXG4gIGZvcndhcmRzRm9yRWFjaCxcbiAgYmFja3dhcmRzRm9yRWFjaFxufTtcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7O1FBRUksS0FBSyxHQUFMLEtBQUs7UUFFTCxNQUFNLEdBQU4sTUFBTTtRQUVOLEtBQUssR0FBTCxLQUFLO1FBRUwsTUFBTSxHQUFOLE1BQU07UUFFTixLQUFLLEdBQUwsS0FBSztRQUVMLFNBQVMsR0FBVCxTQUFTO1FBRVQsVUFBVSxHQUFWLFVBQVU7UUFFVixTQUFTLEdBQVQsU0FBUztRQUVULFVBQVUsR0FBVixVQUFVO1FBRVYsSUFBSSxHQUFKLElBQUk7UUFFSixJQUFJLEdBQUosSUFBSTtRQUVKLElBQUksR0FBSixJQUFJO1FBRUosSUFBSSxHQUFKLElBQUk7UUFFSixLQUFLLEdBQUwsS0FBSztRQUVMLElBQUksR0FBSixJQUFJO1FBRUosT0FBTyxHQUFQLE9BQU87UUFFUCxNQUFNLEdBQU4sTUFBTTtRQVFOLEtBQUssR0FBTCxLQUFLO1FBTUwsSUFBSSxHQUFKLElBQUk7UUFPSixLQUFLLEdBQUwsS0FBSztRQUVMLE1BQU0sR0FBTixNQUFNO1FBT04sT0FBTyxHQUFQLE9BQU87UUFzQlAsTUFBTSxHQUFOLE1BQU07UUFtQk4sSUFBSSxHQUFKLElBQUk7UUFjSixLQUFLLEdBQUwsS0FBSztRQXFCTCxLQUFLLEdBQUwsS0FBSztRQWlCTCxPQUFPLEdBQVAsT0FBTztRQVVQLFFBQVEsR0FBUixRQUFRO1FBVVIsWUFBWSxHQUFaLFlBQVk7UUFlWixhQUFhLEdBQWIsYUFBYTtRQWViLGFBQWEsR0FBYixhQUFhO1FBZWIsY0FBYyxHQUFkLGNBQWM7UUFlZCxjQUFjLEdBQWQsY0FBYztRQVVkLGVBQWUsR0FBZixlQUFlO1FBVWYsZUFBZSxHQUFmLGVBQWU7UUFVZixnQkFBZ0IsR0FBaEIsZ0JBQWdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztTQXpRaEIsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO1dBQVEsS0FBSyxDQUFDLENBQUM7QUFBRSxDQUFDO1NBRWhDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztXQUFRLEtBQUssQ0FBQyxDQUFDO0FBQUcsQ0FBQztTQUVsQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7V0FBUSxLQUFLLENBQUMsQ0FBQztBQUFHLENBQUM7U0FFakMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO1dBQVEsS0FBSyxDQUFDLENBQUM7QUFBRyxDQUFDO1NBRWxDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztXQUFRLEtBQUssQ0FBQyxDQUFDO0FBQUcsQ0FBQztTQUVqQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7V0FBUSxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDO0FBQUcsQ0FBQztTQUVwRCxVQUFVLENBQUMsS0FBSyxFQUFFLENBQUM7V0FBUSxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDO0FBQUcsQ0FBQztTQUVyRCxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7V0FBUSxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDO0FBQUcsQ0FBQztTQUVwRCxVQUFVLENBQUMsS0FBSyxFQUFFLENBQUM7V0FBUSxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDO0FBQUcsQ0FBQztTQUVyRCxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7V0FBUSxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDO0FBQUcsQ0FBQztTQUUvQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7V0FBUSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDO0FBQUcsQ0FBQztTQUV6QyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7V0FBUSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7QUFBRyxDQUFDO1NBRXRDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztXQUFRLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDO0FBQUcsQ0FBQztTQUVyRCxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7V0FBUSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUM7QUFBRyxDQUFDO1NBRXpELElBQUksQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLENBQUM7SUFBQyxLQUFLLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLE1BQU07QUFBRyxDQUFDO1NBRXBFLE9BQU8sQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLENBQUM7SUFBQyxLQUFLLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLE1BQU07QUFBRyxDQUFDO1NBRTFFLE1BQU0sQ0FBQyxNQUFNLEVBQUUsZUFBZSxFQUFFLENBQUM7SUFDL0MsR0FBSyxDQUFDLE1BQU0sR0FB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
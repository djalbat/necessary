"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    augment: function() {
        return augment;
    },
    back: function() {
        return back;
    },
    backwardsEvery: function() {
        return backwardsEvery;
    },
    backwardsFind: function() {
        return backwardsFind;
    },
    backwardsForEach: function() {
        return backwardsForEach;
    },
    backwardsReduce: function() {
        return backwardsReduce;
    },
    backwardsSome: function() {
        return backwardsSome;
    },
    clear: function() {
        return clear;
    },
    combine: function() {
        return combine;
    },
    compress: function() {
        return compress;
    },
    concat: function() {
        return concat;
    },
    copy: function() {
        return copy;
    },
    default: function() {
        return _default;
    },
    fifth: function() {
        return fifth;
    },
    fifthLast: function() {
        return fifthLast;
    },
    filter: function() {
        return filter;
    },
    find: function() {
        return find;
    },
    first: function() {
        return first;
    },
    firstLast: function() {
        return firstLast;
    },
    forwardsEvery: function() {
        return forwardsEvery;
    },
    forwardsFind: function() {
        return forwardsFind;
    },
    forwardsForEach: function() {
        return forwardsForEach;
    },
    forwardsReduce: function() {
        return forwardsReduce;
    },
    forwardsSome: function() {
        return forwardsSome;
    },
    fourth: function() {
        return fourth;
    },
    fourthLast: function() {
        return fourthLast;
    },
    front: function() {
        return front;
    },
    head: function() {
        return head;
    },
    last: function() {
        return last;
    },
    merge: function() {
        return merge;
    },
    patch: function() {
        return patch;
    },
    prune: function() {
        return prune;
    },
    push: function() {
        return push;
    },
    replace: function() {
        return replace;
    },
    second: function() {
        return second;
    },
    secondLast: function() {
        return secondLast;
    },
    separate: function() {
        return separate;
    },
    splice: function() {
        return splice;
    },
    tail: function() {
        return tail;
    },
    third: function() {
        return third;
    },
    thirdLast: function() {
        return thirdLast;
    },
    unshift: function() {
        return unshift;
    }
});
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
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
function firstLast(array) {
    return array[array.length - 1];
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
    return array.slice(0, Math.max(1, array.length - 1));
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
function splice(array1, start) {
    var deleteCount = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Infinity, array2 = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : [];
    var args = [
        start,
        deleteCount
    ].concat(_to_consumable_array(array2)), deletedItemsArray = Array.prototype.splice.apply(array1, args);
    return deletedItemsArray;
}
function replace(array, element, callback) {
    var start;
    var found = array.some(function(element, index) {
        var passed = callback(element, index);
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
function filter(array, callback) {
    var filteredElements = [];
    backwardsForEach(array, function(element, index) {
        var passed = callback(element, index);
        if (!passed) {
            var start = index, deleteCount = 1, deletedElements = array.splice(start, deleteCount), firstDeletedElement = first(deletedElements);
            filteredElements.unshift(firstDeletedElement); ///
        }
    });
    return filteredElements;
}
function find(array, callback) {
    var elements = [];
    forwardsForEach(array, function(element, index) {
        var passed = callback(element, index);
        if (passed) {
            elements.push(element);
        }
    });
    return elements;
}
function prune(array, callback) {
    var prunedElement = undefined;
    array.some(function(element, index) {
        var passed = callback(element, index);
        if (!passed) {
            var start = index, deleteCount = 1, deletedElements = array.splice(start, deleteCount), firstDeletedElement = first(deletedElements);
            prunedElement = firstDeletedElement; ///
            return true;
        }
    });
    return prunedElement;
}
function patch(array, element, callback) {
    var found = array.some(function(element, index) {
        var passed = callback(element, index);
        if (passed) {
            return true;
        }
    });
    if (found) {
        array.push(element);
    }
    return found;
}
function compress(array, callback) {
    var index1 = 0, length = array.length;
    while(index1 < length){
        var element1 = array[index1];
        for(var index2 = length - 1; index2 > index1; index2--){
            var element2 = array[index2], passed = callback(element2, element1);
            if (passed) {
                var start = index2, deleteCount = 1;
                array.splice(start, deleteCount);
            }
        }
        index1++;
        length = array.length;
    }
}
function combine(array1, array2, callback) {
    var array = _to_consumable_array(array1).concat(_to_consumable_array(array2));
    compress(array, callback);
    return array;
}
function augment(array1, array2, callback) {
    array2.forEach(function(element, index) {
        var passed = callback(element, index);
        if (passed) {
            array1.push(element);
        }
    });
}
function separate(array, array1, array2, callback) {
    array.forEach(function(element, index) {
        var passed = callback(element, index);
        passed ? array1.push(element) : array2.push(element);
    });
}
function forwardsFind(array, callback) {
    var arrayLength = array.length;
    for(var index = 0; index < arrayLength; index++){
        var element = array[index], passed = callback(element, index);
        if (passed) {
            return element;
        }
    }
    return false;
}
function backwardsFind(array, callback) {
    var arrayLength = array.length;
    for(var index = arrayLength - 1; index >= 0; index--){
        var element = array[index], passed = callback(element, index);
        if (passed) {
            return element;
        }
    }
    return false;
}
function forwardsSome(array, callback) {
    var arrayLength = array.length;
    for(var index = 0; index < arrayLength; index++){
        var element = array[index], passed = callback(element, index);
        if (passed) {
            return true;
        }
    }
    return false;
}
function backwardsSome(array, callback) {
    var arrayLength = array.length;
    for(var index = arrayLength - 1; index >= 0; index--){
        var element = array[index], passed = callback(element, index);
        if (passed) {
            return true;
        }
    }
    return false;
}
function forwardsEvery(array, callback) {
    var arrayLength = array.length;
    for(var index = 0; index < arrayLength; index++){
        var element = array[index], passed = callback(element, index);
        if (!passed) {
            return false;
        }
    }
    return true;
}
function backwardsEvery(array, callback) {
    var arrayLength = array.length;
    for(var index = arrayLength - 1; index >= 0; index--){
        var element = array[index], passed = callback(element, index);
        if (!passed) {
            return false;
        }
    }
    return true;
}
function forwardsReduce(array, callback, initialValue) {
    var value = initialValue; ///
    var arrayLength = array.length;
    for(var index = 0; index < arrayLength; index++){
        var element = array[index];
        value = callback(value, element, index);
    }
    return value;
}
function backwardsReduce(array, callback, initialValue) {
    var value = initialValue; ///
    var arrayLength = array.length;
    for(var index = arrayLength - 1; index >= 0; index--){
        var element = array[index];
        value = callback(value, element, index);
    }
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
    firstLast: firstLast,
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
    compress: compress,
    combine: combine,
    augment: augment,
    separate: separate,
    forwardsFind: forwardsFind,
    backwardsFind: backwardsFind,
    forwardsSome: forwardsSome,
    backwardsSome: backwardsSome,
    forwardsEvery: forwardsEvery,
    backwardsEvery: backwardsEvery,
    forwardsReduce: forwardsReduce,
    backwardsReduce: backwardsReduce,
    forwardsForEach: forwardsForEach,
    backwardsForEach: backwardsForEach
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvYXJyYXkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBmaXJzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbMF07fVxuXG5leHBvcnQgZnVuY3Rpb24gc2Vjb25kKGFycmF5KSB7IHJldHVybiBhcnJheVsxXTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gdGhpcmQoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzJdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3VydGgoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzNdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBmaWZ0aChhcnJheSkgeyByZXR1cm4gYXJyYXlbNF07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpZnRoTGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gNV07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvdXJ0aExhc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5W2FycmF5Lmxlbmd0aCAtIDRdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiB0aGlyZExhc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5W2FycmF5Lmxlbmd0aCAtIDNdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBzZWNvbmRMYXN0KGFycmF5KSB7IHJldHVybiBhcnJheVthcnJheS5sZW5ndGggLSAyXTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gZmlyc3RMYXN0KGFycmF5KSB7IHJldHVybiBhcnJheVthcnJheS5sZW5ndGggLSAxXTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gbGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gMV07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGhlYWQoYXJyYXkpIHsgcmV0dXJuIGFycmF5LnNsaWNlKDAsIDEpOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiB0YWlsKGFycmF5KSB7IHJldHVybiBhcnJheS5zbGljZSgxKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gYmFjayhhcnJheSkgeyByZXR1cm4gYXJyYXkuc2xpY2UoYXJyYXkubGVuZ3RoIC0gMSk7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGZyb250KGFycmF5KSB7IHJldHVybiBhcnJheS5zbGljZSgwLCBNYXRoLm1heCgxLCBhcnJheS5sZW5ndGggLSAxKSk7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIHB1c2goYXJyYXkxLCBhcnJheTIpIHsgQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkoYXJyYXkxLCBhcnJheTIpOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiB1bnNoaWZ0KGFycmF5MSwgYXJyYXkyKSB7IEFycmF5LnByb3RvdHlwZS51bnNoaWZ0LmFwcGx5KGFycmF5MSwgYXJyYXkyKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gY29uY2F0KGFycmF5MSwgZWxlbWVudE9yQXJyYXkyKSB7XG4gIGNvbnN0IGFycmF5MiA9IChlbGVtZW50T3JBcnJheTIgaW5zdGFuY2VvZiBBcnJheSkgP1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50T3JBcnJheTIgOlxuICAgICAgICAgICAgICAgICAgICAgWyBlbGVtZW50T3JBcnJheTIgXTtcbiAgXG4gIHB1c2goYXJyYXkxLCBhcnJheTIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xlYXIoYXJyYXkpIHtcbiAgY29uc3Qgc3RhcnQgPSAwO1xuICBcbiAgcmV0dXJuIGFycmF5LnNwbGljZShzdGFydCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb3B5KGFycmF5MSwgYXJyYXkyKSB7XG4gIGNvbnN0IHN0YXJ0ID0gMCxcbiAgICAgICAgZGVsZXRlQ291bnQgPSBhcnJheTIubGVuZ3RoOyAgLy8vXG4gIFxuICBzcGxpY2UoYXJyYXkxLCBzdGFydCwgZGVsZXRlQ291bnQsIGFycmF5Mik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXJnZShhcnJheTEsIGFycmF5MikgeyBBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseShhcnJheTEsIGFycmF5Mik7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIHNwbGljZShhcnJheTEsIHN0YXJ0LCBkZWxldGVDb3VudCA9IEluZmluaXR5LCBhcnJheTIgPSBbXSkge1xuICBjb25zdCBhcmdzID0gW3N0YXJ0LCBkZWxldGVDb3VudCwgLi4uYXJyYXkyXSxcbiAgICAgICAgZGVsZXRlZEl0ZW1zQXJyYXkgPSBBcnJheS5wcm90b3R5cGUuc3BsaWNlLmFwcGx5KGFycmF5MSwgYXJncyk7XG5cbiAgcmV0dXJuIGRlbGV0ZWRJdGVtc0FycmF5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVwbGFjZShhcnJheSwgZWxlbWVudCwgY2FsbGJhY2spIHtcbiAgbGV0IHN0YXJ0O1xuICBcbiAgY29uc3QgZm91bmQgPSBhcnJheS5zb21lKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmIChwYXNzZWQpIHtcbiAgICAgIHN0YXJ0ID0gaW5kZXg7ICAvLy9cbiAgICAgIFxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcbiAgXG4gIGlmIChmb3VuZCkge1xuICAgIGNvbnN0IGRlbGV0ZUNvdW50ID0gMTtcblxuICAgIGFycmF5LnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQsIGVsZW1lbnQpO1xuICB9XG5cbiAgcmV0dXJuIGZvdW5kO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmlsdGVyKGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBmaWx0ZXJlZEVsZW1lbnRzID0gW107XG4gIFxuICBiYWNrd2FyZHNGb3JFYWNoKGFycmF5LCAoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBwYXNzZWQgPSBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAoIXBhc3NlZCkge1xuICAgICAgY29uc3Qgc3RhcnQgPSBpbmRleCwgIC8vL1xuICAgICAgICAgICAgZGVsZXRlQ291bnQgPSAxLFxuICAgICAgICAgICAgZGVsZXRlZEVsZW1lbnRzID0gYXJyYXkuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCksXG4gICAgICAgICAgICBmaXJzdERlbGV0ZWRFbGVtZW50ID0gZmlyc3QoZGVsZXRlZEVsZW1lbnRzKTtcbiAgICAgIFxuICAgICAgZmlsdGVyZWRFbGVtZW50cy51bnNoaWZ0KGZpcnN0RGVsZXRlZEVsZW1lbnQpOyAgLy8vXG4gICAgfVxuICB9KTtcbiAgXG4gIHJldHVybiBmaWx0ZXJlZEVsZW1lbnRzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmluZChhcnJheSwgY2FsbGJhY2spIHtcbiAgY29uc3QgZWxlbWVudHMgPSBbXTtcblxuICBmb3J3YXJkc0ZvckVhY2goYXJyYXksIChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmIChwYXNzZWQpIHtcbiAgICAgIGVsZW1lbnRzLnB1c2goZWxlbWVudCk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gZWxlbWVudHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcnVuZShhcnJheSwgY2FsbGJhY2spIHtcbiAgbGV0IHBydW5lZEVsZW1lbnQgPSB1bmRlZmluZWQ7XG4gIFxuICBhcnJheS5zb21lKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmICghcGFzc2VkKSB7XG4gICAgICBjb25zdCBzdGFydCA9IGluZGV4LCAgLy8vXG4gICAgICAgICAgICBkZWxldGVDb3VudCA9IDEsXG4gICAgICAgICAgICBkZWxldGVkRWxlbWVudHMgPSBhcnJheS5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50KSxcbiAgICAgICAgICAgIGZpcnN0RGVsZXRlZEVsZW1lbnQgPSBmaXJzdChkZWxldGVkRWxlbWVudHMpO1xuICAgICAgXG4gICAgICBwcnVuZWRFbGVtZW50ID0gZmlyc3REZWxldGVkRWxlbWVudDsgIC8vL1xuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuICBcbiAgcmV0dXJuIHBydW5lZEVsZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXRjaChhcnJheSwgZWxlbWVudCwgY2FsbGJhY2spIHtcbiAgY29uc3QgZm91bmQgPSBhcnJheS5zb21lKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmIChwYXNzZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cblxuICBpZiAoZm91bmQpIHtcbiAgICBhcnJheS5wdXNoKGVsZW1lbnQpO1xuICB9XG5cbiAgcmV0dXJuIGZvdW5kO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tcHJlc3MoYXJyYXksIGNhbGxiYWNrKSB7XG4gIGxldCBpbmRleDEgPSAwLFxuICAgICAgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIHdoaWxlIChpbmRleDEgPCBsZW5ndGgpIHtcbiAgICBjb25zdCBlbGVtZW50MSA9IGFycmF5W2luZGV4MV07XG5cbiAgICBmb3IgKGxldCBpbmRleDIgPSBsZW5ndGggLSAxOyBpbmRleDIgPiBpbmRleDE7IGluZGV4Mi0tKSB7XG4gICAgICBjb25zdCBlbGVtZW50MiA9IGFycmF5W2luZGV4Ml0sXG4gICAgICAgICAgICBwYXNzZWQgPSBjYWxsYmFjayhlbGVtZW50MiwgZWxlbWVudDEpO1xuXG4gICAgICBpZiAocGFzc2VkKSB7XG4gICAgICAgIGNvbnN0IHN0YXJ0ID0gaW5kZXgyLCAvLy9cbiAgICAgICAgICAgICAgZGVsZXRlQ291bnQgPSAxO1xuXG4gICAgICAgIGFycmF5LnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGluZGV4MSsrO1xuXG4gICAgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21iaW5lKGFycmF5MSwgYXJyYXkyLCBjYWxsYmFjaykge1xuICBjb25zdCBhcnJheSA9IFtcbiAgICAuLi5hcnJheTEsXG4gICAgLi4uYXJyYXkyXG4gIF07XG5cbiAgY29tcHJlc3MoYXJyYXksIGNhbGxiYWNrKTtcblxuICByZXR1cm4gYXJyYXk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhdWdtZW50KGFycmF5MSwgYXJyYXkyLCBjYWxsYmFjaykge1xuICBhcnJheTIuZm9yRWFjaCgoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBwYXNzZWQgPSBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAocGFzc2VkKSB7XG4gICAgICBhcnJheTEucHVzaChlbGVtZW50KTtcbiAgICB9XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2VwYXJhdGUoYXJyYXksIGFycmF5MSwgYXJyYXkyLCBjYWxsYmFjaykge1xuICBhcnJheS5mb3JFYWNoKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcblxuICAgIHBhc3NlZCA/XG4gICAgICBhcnJheTEucHVzaChlbGVtZW50KSA6XG4gICAgICAgIGFycmF5Mi5wdXNoKGVsZW1lbnQpO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcndhcmRzRmluZChhcnJheSwgY2FsbGJhY2spIHtcbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGFycmF5TGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XSxcbiAgICAgICAgICBwYXNzZWQgPSBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAocGFzc2VkKSB7XG4gICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBiYWNrd2FyZHNGaW5kKGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IGFycmF5TGVuZ3RoIC0gMTsgaW5kZXggPj0gMDsgaW5kZXgtLSkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF0sXG4gICAgICAgICAgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9yd2FyZHNTb21lKGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYXJyYXlMZW5ndGg7IGluZGV4KyspIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdLFxuICAgICAgICAgIHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcbiAgICBcbiAgICBpZiAocGFzc2VkKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBiYWNrd2FyZHNTb21lKGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IGFycmF5TGVuZ3RoIC0gMTsgaW5kZXggPj0gMDsgaW5kZXgtLSkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF0sXG4gICAgICAgICAgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9yd2FyZHNFdmVyeShhcnJheSwgY2FsbGJhY2spIHtcbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGFycmF5TGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XSxcbiAgICAgICAgICBwYXNzZWQgPSBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAoIXBhc3NlZCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYmFja3dhcmRzRXZlcnkoYXJyYXksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gYXJyYXlMZW5ndGggLSAxOyBpbmRleCA+PSAwOyBpbmRleC0tKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XSxcbiAgICAgICAgICBwYXNzZWQgPSBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAoIXBhc3NlZCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9yd2FyZHNSZWR1Y2UoYXJyYXksIGNhbGxiYWNrLCBpbml0aWFsVmFsdWUpIHtcbiAgbGV0IHZhbHVlID0gaW5pdGlhbFZhbHVlOyAvLy9cblxuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYXJyYXlMZW5ndGg7IGluZGV4KyspIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdO1xuXG4gICAgdmFsdWUgPSBjYWxsYmFjayh2YWx1ZSwgZWxlbWVudCwgaW5kZXgpO1xuICB9XG5cbiAgcmV0dXJuIHZhbHVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYmFja3dhcmRzUmVkdWNlKGFycmF5LCBjYWxsYmFjaywgaW5pdGlhbFZhbHVlKSB7XG4gIGxldCB2YWx1ZSA9IGluaXRpYWxWYWx1ZTsgLy8vXG5cbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSBhcnJheUxlbmd0aCAtIDE7IGluZGV4ID49IDA7IGluZGV4LS0pIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdO1xuXG4gICAgdmFsdWUgPSBjYWxsYmFjayh2YWx1ZSwgZWxlbWVudCwgaW5kZXgpO1xuICB9XG5cbiAgcmV0dXJuIHZhbHVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9yd2FyZHNGb3JFYWNoKGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYXJyYXlMZW5ndGg7IGluZGV4KyspIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdO1xuXG4gICAgY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBiYWNrd2FyZHNGb3JFYWNoKGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IGFycmF5TGVuZ3RoIC0gMTsgaW5kZXggPj0gMDsgaW5kZXgtLSkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF07XG5cbiAgICBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBmaXJzdCxcbiAgc2Vjb25kLFxuICB0aGlyZCxcbiAgZm91cnRoLFxuICBmaWZ0aCxcbiAgZmlmdGhMYXN0LFxuICBmb3VydGhMYXN0LFxuICB0aGlyZExhc3QsXG4gIHNlY29uZExhc3QsXG4gIGZpcnN0TGFzdCxcbiAgbGFzdCxcbiAgaGVhZCxcbiAgdGFpbCxcbiAgYmFjayxcbiAgZnJvbnQsXG4gIHB1c2gsXG4gIHVuc2hpZnQsXG4gIGNvbmNhdCxcbiAgY2xlYXIsXG4gIGNvcHksXG4gIG1lcmdlLFxuICBzcGxpY2UsXG4gIHJlcGxhY2UsXG4gIGZpbHRlcixcbiAgZmluZCxcbiAgcHJ1bmUsXG4gIHBhdGNoLFxuICBjb21wcmVzcyxcbiAgY29tYmluZSxcbiAgYXVnbWVudCxcbiAgc2VwYXJhdGUsXG4gIGZvcndhcmRzRmluZCxcbiAgYmFja3dhcmRzRmluZCxcbiAgZm9yd2FyZHNTb21lLFxuICBiYWNrd2FyZHNTb21lLFxuICBmb3J3YXJkc0V2ZXJ5LFxuICBiYWNrd2FyZHNFdmVyeSxcbiAgZm9yd2FyZHNSZWR1Y2UsXG4gIGJhY2t3YXJkc1JlZHVjZSxcbiAgZm9yd2FyZHNGb3JFYWNoLFxuICBiYWNrd2FyZHNGb3JFYWNoXG59O1xuIl0sIm5hbWVzIjpbImF1Z21lbnQiLCJiYWNrIiwiYmFja3dhcmRzRXZlcnkiLCJiYWNrd2FyZHNGaW5kIiwiYmFja3dhcmRzRm9yRWFjaCIsImJhY2t3YXJkc1JlZHVjZSIsImJhY2t3YXJkc1NvbWUiLCJjbGVhciIsImNvbWJpbmUiLCJjb21wcmVzcyIsImNvbmNhdCIsImNvcHkiLCJmaWZ0aCIsImZpZnRoTGFzdCIsImZpbHRlciIsImZpbmQiLCJmaXJzdCIsImZpcnN0TGFzdCIsImZvcndhcmRzRXZlcnkiLCJmb3J3YXJkc0ZpbmQiLCJmb3J3YXJkc0ZvckVhY2giLCJmb3J3YXJkc1JlZHVjZSIsImZvcndhcmRzU29tZSIsImZvdXJ0aCIsImZvdXJ0aExhc3QiLCJmcm9udCIsImhlYWQiLCJsYXN0IiwibWVyZ2UiLCJwYXRjaCIsInBydW5lIiwicHVzaCIsInJlcGxhY2UiLCJzZWNvbmQiLCJzZWNvbmRMYXN0Iiwic2VwYXJhdGUiLCJzcGxpY2UiLCJ0YWlsIiwidGhpcmQiLCJ0aGlyZExhc3QiLCJ1bnNoaWZ0IiwiYXJyYXkiLCJsZW5ndGgiLCJzbGljZSIsIk1hdGgiLCJtYXgiLCJhcnJheTEiLCJhcnJheTIiLCJBcnJheSIsInByb3RvdHlwZSIsImFwcGx5IiwiZWxlbWVudE9yQXJyYXkyIiwic3RhcnQiLCJkZWxldGVDb3VudCIsIkluZmluaXR5IiwiYXJncyIsImRlbGV0ZWRJdGVtc0FycmF5IiwiZWxlbWVudCIsImNhbGxiYWNrIiwiZm91bmQiLCJzb21lIiwiaW5kZXgiLCJwYXNzZWQiLCJmaWx0ZXJlZEVsZW1lbnRzIiwiZGVsZXRlZEVsZW1lbnRzIiwiZmlyc3REZWxldGVkRWxlbWVudCIsImVsZW1lbnRzIiwicHJ1bmVkRWxlbWVudCIsInVuZGVmaW5lZCIsImluZGV4MSIsImVsZW1lbnQxIiwiaW5kZXgyIiwiZWxlbWVudDIiLCJmb3JFYWNoIiwiYXJyYXlMZW5ndGgiLCJpbml0aWFsVmFsdWUiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBbU1nQkEsT0FBTztlQUFQQTs7SUF2S0FDLElBQUk7ZUFBSkE7O0lBc1FBQyxjQUFjO2VBQWRBOztJQTVEQUMsYUFBYTtlQUFiQTs7SUFpSEFDLGdCQUFnQjtlQUFoQkE7O0lBeEJBQyxlQUFlO2VBQWZBOztJQTNEQUMsYUFBYTtlQUFiQTs7SUF4TkFDLEtBQUs7ZUFBTEE7O0lBNElBQyxPQUFPO2VBQVBBOztJQXpCQUMsUUFBUTtlQUFSQTs7SUEzSEFDLE1BQU07ZUFBTkE7O0lBY0FDLElBQUk7ZUFBSkE7O0lBK1NoQixPQTBDRTtlQTFDRjs7SUF2VmdCQyxLQUFLO2VBQUxBOztJQUVBQyxTQUFTO2VBQVRBOztJQTRFQUMsTUFBTTtlQUFOQTs7SUFtQkFDLElBQUk7ZUFBSkE7O0lBekdBQyxLQUFLO2VBQUxBOztJQWtCQUMsU0FBUztlQUFUQTs7SUErUEFDLGFBQWE7ZUFBYkE7O0lBNURBQyxZQUFZO2VBQVpBOztJQXNIQUMsZUFBZTtlQUFmQTs7SUE1QkFDLGNBQWM7ZUFBZEE7O0lBNURBQyxZ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
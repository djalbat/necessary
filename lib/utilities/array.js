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
    extract: function() {
        return extract;
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
    match: function() {
        return match;
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
function push(arrayA, arrayB) {
    Array.prototype.push.apply(arrayA, arrayB);
}
function unshift(arrayA, arrayB) {
    Array.prototype.unshift.apply(arrayA, arrayB);
}
function concat(arrayA, elementOrArray2) {
    var arrayB = _instanceof(elementOrArray2, Array) ? elementOrArray2 : [
        elementOrArray2
    ];
    push(arrayA, arrayB);
}
function clear(array) {
    var start = 0;
    return array.splice(start);
}
function copy(arrayA, arrayB) {
    var start = 0, deleteCount = arrayB.length; ///
    splice(arrayA, start, deleteCount, arrayB);
}
function merge(arrayA, arrayB) {
    Array.prototype.push.apply(arrayA, arrayB);
}
function match(arrayA, arrayB, callback) {
    var matches = false;
    var arrayALength = arrayA.length, arrayBLength = arrayB.length;
    if (arrayALength === arrayBLength) {
        matches = arrayA.every(function(elementA, index) {
            var elementB = arrayB[index], passed = callback(elementA, elementB, index);
            if (passed) {
                return true;
            }
        });
    }
    return matches;
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
function splice(arrayA, start) {
    var deleteCount = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Infinity, arrayB = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : [];
    var args = [
        start,
        deleteCount
    ].concat(_to_consumable_array(arrayB)), deletedElements = Array.prototype.splice.apply(arrayA, args);
    return deletedElements;
}
function filter(array, callback) {
    var deletedElements = [];
    backwardsForEach(array, function(element, index) {
        var passed = callback(element, index);
        if (!passed) {
            var start = index, deleteCount = 1, deletedElements = array.splice(start, deleteCount), firstDeletedElement = first(deletedElements);
            deletedElements.unshift(firstDeletedElement); ///
        }
    });
    return deletedElements;
}
function prune(array, callback) {
    var deletedElement = undefined;
    array.some(function(element, index) {
        var passed = callback(element, index);
        if (!passed) {
            var start = index, deleteCount = 1, deletedElements = array.splice(start, deleteCount), firstDeletedElement = first(deletedElements);
            deletedElement = firstDeletedElement; ///
            return true;
        }
    });
    return deletedElement;
}
function extract(array, callback) {
    var deletedElement = undefined;
    array.some(function(element, index) {
        var passed = callback(element, index);
        if (passed) {
            var start = index, deleteCount = 1, deletedElements = array.splice(start, deleteCount), firstDeletedElement = first(deletedElements);
            deletedElement = firstDeletedElement; ///
            return true;
        }
    });
    return deletedElement;
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
        var elementB = array[index1];
        for(var index2 = length - 1; index2 > index1; index2--){
            var elementA = array[index2], passed = callback(elementA, elementB);
            if (passed) {
                var start = index2, deleteCount = 1;
                array.splice(start, deleteCount);
            }
        }
        index1++;
        length = array.length;
    }
}
function combine(arrayA, arrayB, callback) {
    var array = _to_consumable_array(arrayA).concat(_to_consumable_array(arrayB));
    compress(array, callback);
    return array;
}
function augment(arrayA, arrayB, callback) {
    arrayB.forEach(function(element, index) {
        var passed = callback(element, index);
        if (passed) {
            arrayA.push(element);
        }
    });
}
function separate(array, arrayA, arrayB, callback) {
    array.forEach(function(element, index) {
        var passed = callback(element, index);
        passed ? arrayA.push(element) : arrayB.push(element);
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
    match: match,
    find: find,
    replace: replace,
    splice: splice,
    filter: filter,
    prune: prune,
    extract: extract,
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvYXJyYXkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBmaXJzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbMF07fVxuXG5leHBvcnQgZnVuY3Rpb24gc2Vjb25kKGFycmF5KSB7IHJldHVybiBhcnJheVsxXTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gdGhpcmQoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzJdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3VydGgoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzNdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBmaWZ0aChhcnJheSkgeyByZXR1cm4gYXJyYXlbNF07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpZnRoTGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gNV07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvdXJ0aExhc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5W2FycmF5Lmxlbmd0aCAtIDRdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiB0aGlyZExhc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5W2FycmF5Lmxlbmd0aCAtIDNdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBzZWNvbmRMYXN0KGFycmF5KSB7IHJldHVybiBhcnJheVthcnJheS5sZW5ndGggLSAyXTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gZmlyc3RMYXN0KGFycmF5KSB7IHJldHVybiBhcnJheVthcnJheS5sZW5ndGggLSAxXTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gbGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gMV07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGhlYWQoYXJyYXkpIHsgcmV0dXJuIGFycmF5LnNsaWNlKDAsIDEpOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiB0YWlsKGFycmF5KSB7IHJldHVybiBhcnJheS5zbGljZSgxKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gYmFjayhhcnJheSkgeyByZXR1cm4gYXJyYXkuc2xpY2UoYXJyYXkubGVuZ3RoIC0gMSk7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGZyb250KGFycmF5KSB7IHJldHVybiBhcnJheS5zbGljZSgwLCBNYXRoLm1heCgxLCBhcnJheS5sZW5ndGggLSAxKSk7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIHB1c2goYXJyYXlBLCBhcnJheUIpIHsgQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkoYXJyYXlBLCBhcnJheUIpOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiB1bnNoaWZ0KGFycmF5QSwgYXJyYXlCKSB7IEFycmF5LnByb3RvdHlwZS51bnNoaWZ0LmFwcGx5KGFycmF5QSwgYXJyYXlCKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gY29uY2F0KGFycmF5QSwgZWxlbWVudE9yQXJyYXkyKSB7XG4gIGNvbnN0IGFycmF5QiA9IChlbGVtZW50T3JBcnJheTIgaW5zdGFuY2VvZiBBcnJheSkgP1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50T3JBcnJheTIgOlxuICAgICAgICAgICAgICAgICAgICAgWyBlbGVtZW50T3JBcnJheTIgXTtcbiAgXG4gIHB1c2goYXJyYXlBLCBhcnJheUIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xlYXIoYXJyYXkpIHtcbiAgY29uc3Qgc3RhcnQgPSAwO1xuICBcbiAgcmV0dXJuIGFycmF5LnNwbGljZShzdGFydCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb3B5KGFycmF5QSwgYXJyYXlCKSB7XG4gIGNvbnN0IHN0YXJ0ID0gMCxcbiAgICAgICAgZGVsZXRlQ291bnQgPSBhcnJheUIubGVuZ3RoOyAgLy8vXG4gIFxuICBzcGxpY2UoYXJyYXlBLCBzdGFydCwgZGVsZXRlQ291bnQsIGFycmF5Qik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXJnZShhcnJheUEsIGFycmF5QikgeyBBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseShhcnJheUEsIGFycmF5Qik7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIG1hdGNoKGFycmF5QSwgYXJyYXlCLCBjYWxsYmFjaykge1xuICBsZXQgbWF0Y2hlcyA9IGZhbHNlO1xuXG4gIGNvbnN0IGFycmF5QUxlbmd0aCA9IGFycmF5QS5sZW5ndGgsXG4gICAgICAgIGFycmF5Qkxlbmd0aCA9IGFycmF5Qi5sZW5ndGg7XG5cbiAgaWYgKGFycmF5QUxlbmd0aCA9PT0gYXJyYXlCTGVuZ3RoKSB7XG4gICAgbWF0Y2hlcyA9IGFycmF5QS5ldmVyeSgoZWxlbWVudEEsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBlbGVtZW50QiA9IGFycmF5QltpbmRleF0sXG4gICAgICAgICAgICBwYXNzZWQgPSBjYWxsYmFjayhlbGVtZW50QSwgZWxlbWVudEIsIGluZGV4KTtcblxuICAgICAgaWYgKHBhc3NlZCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBtYXRjaGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmluZChhcnJheSwgY2FsbGJhY2spIHtcbiAgY29uc3QgZWxlbWVudHMgPSBbXTtcblxuICBmb3J3YXJkc0ZvckVhY2goYXJyYXksIChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmIChwYXNzZWQpIHtcbiAgICAgIGVsZW1lbnRzLnB1c2goZWxlbWVudCk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gZWxlbWVudHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXBsYWNlKGFycmF5LCBlbGVtZW50LCBjYWxsYmFjaykge1xuICBsZXQgc3RhcnQ7XG4gIFxuICBjb25zdCBmb3VuZCA9IGFycmF5LnNvbWUoKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgc3RhcnQgPSBpbmRleDsgIC8vL1xuICAgICAgXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuICBcbiAgaWYgKGZvdW5kKSB7XG4gICAgY29uc3QgZGVsZXRlQ291bnQgPSAxO1xuXG4gICAgYXJyYXkuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCwgZWxlbWVudCk7XG4gIH1cblxuICByZXR1cm4gZm91bmQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzcGxpY2UoYXJyYXlBLCBzdGFydCwgZGVsZXRlQ291bnQgPSBJbmZpbml0eSwgYXJyYXlCID0gW10pIHtcbiAgY29uc3QgYXJncyA9IFsgc3RhcnQsIGRlbGV0ZUNvdW50LCAuLi5hcnJheUIgXSxcbiAgICAgICAgZGVsZXRlZEVsZW1lbnRzID0gQXJyYXkucHJvdG90eXBlLnNwbGljZS5hcHBseShhcnJheUEsIGFyZ3MpO1xuXG4gIHJldHVybiBkZWxldGVkRWxlbWVudHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaWx0ZXIoYXJyYXksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGRlbGV0ZWRFbGVtZW50cyA9IFtdO1xuICBcbiAgYmFja3dhcmRzRm9yRWFjaChhcnJheSwgKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKCFwYXNzZWQpIHtcbiAgICAgIGNvbnN0IHN0YXJ0ID0gaW5kZXgsICAvLy9cbiAgICAgICAgICAgIGRlbGV0ZUNvdW50ID0gMSxcbiAgICAgICAgICAgIGRlbGV0ZWRFbGVtZW50cyA9IGFycmF5LnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQpLFxuICAgICAgICAgICAgZmlyc3REZWxldGVkRWxlbWVudCA9IGZpcnN0KGRlbGV0ZWRFbGVtZW50cyk7XG4gICAgICBcbiAgICAgIGRlbGV0ZWRFbGVtZW50cy51bnNoaWZ0KGZpcnN0RGVsZXRlZEVsZW1lbnQpOyAgLy8vXG4gICAgfVxuICB9KTtcbiAgXG4gIHJldHVybiBkZWxldGVkRWxlbWVudHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcnVuZShhcnJheSwgY2FsbGJhY2spIHtcbiAgbGV0IGRlbGV0ZWRFbGVtZW50ID0gdW5kZWZpbmVkO1xuICBcbiAgYXJyYXkuc29tZSgoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBwYXNzZWQgPSBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAoIXBhc3NlZCkge1xuICAgICAgY29uc3Qgc3RhcnQgPSBpbmRleCwgIC8vL1xuICAgICAgICAgICAgZGVsZXRlQ291bnQgPSAxLFxuICAgICAgICAgICAgZGVsZXRlZEVsZW1lbnRzID0gYXJyYXkuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCksXG4gICAgICAgICAgICBmaXJzdERlbGV0ZWRFbGVtZW50ID0gZmlyc3QoZGVsZXRlZEVsZW1lbnRzKTtcbiAgICAgIFxuICAgICAgZGVsZXRlZEVsZW1lbnQgPSBmaXJzdERlbGV0ZWRFbGVtZW50OyAgLy8vXG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG4gIFxuICByZXR1cm4gZGVsZXRlZEVsZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBleHRyYWN0KGFycmF5LCBjYWxsYmFjaykge1xuICBsZXQgZGVsZXRlZEVsZW1lbnQgPSB1bmRlZmluZWQ7XG5cbiAgYXJyYXkuc29tZSgoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBwYXNzZWQgPSBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAocGFzc2VkKSB7XG4gICAgICBjb25zdCBzdGFydCA9IGluZGV4LCAgLy8vXG4gICAgICAgICAgICBkZWxldGVDb3VudCA9IDEsXG4gICAgICAgICAgICBkZWxldGVkRWxlbWVudHMgPSBhcnJheS5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50KSxcbiAgICAgICAgICAgIGZpcnN0RGVsZXRlZEVsZW1lbnQgPSBmaXJzdChkZWxldGVkRWxlbWVudHMpO1xuXG4gICAgICBkZWxldGVkRWxlbWVudCA9IGZpcnN0RGVsZXRlZEVsZW1lbnQ7ICAvLy9cblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gZGVsZXRlZEVsZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXRjaChhcnJheSwgZWxlbWVudCwgY2FsbGJhY2spIHtcbiAgY29uc3QgZm91bmQgPSBhcnJheS5zb21lKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmIChwYXNzZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cblxuICBpZiAoZm91bmQpIHtcbiAgICBhcnJheS5wdXNoKGVsZW1lbnQpO1xuICB9XG5cbiAgcmV0dXJuIGZvdW5kO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tcHJlc3MoYXJyYXksIGNhbGxiYWNrKSB7XG4gIGxldCBpbmRleDEgPSAwLFxuICAgICAgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIHdoaWxlIChpbmRleDEgPCBsZW5ndGgpIHtcbiAgICBjb25zdCBlbGVtZW50QiA9IGFycmF5W2luZGV4MV07XG5cbiAgICBmb3IgKGxldCBpbmRleDIgPSBsZW5ndGggLSAxOyBpbmRleDIgPiBpbmRleDE7IGluZGV4Mi0tKSB7XG4gICAgICBjb25zdCBlbGVtZW50QSA9IGFycmF5W2luZGV4Ml0sXG4gICAgICAgICAgICBwYXNzZWQgPSBjYWxsYmFjayhlbGVtZW50QSwgZWxlbWVudEIpO1xuXG4gICAgICBpZiAocGFzc2VkKSB7XG4gICAgICAgIGNvbnN0IHN0YXJ0ID0gaW5kZXgyLCAvLy9cbiAgICAgICAgICAgICAgZGVsZXRlQ291bnQgPSAxO1xuXG4gICAgICAgIGFycmF5LnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGluZGV4MSsrO1xuXG4gICAgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21iaW5lKGFycmF5QSwgYXJyYXlCLCBjYWxsYmFjaykge1xuICBjb25zdCBhcnJheSA9IFtcbiAgICAuLi5hcnJheUEsXG4gICAgLi4uYXJyYXlCXG4gIF07XG5cbiAgY29tcHJlc3MoYXJyYXksIGNhbGxiYWNrKTtcblxuICByZXR1cm4gYXJyYXk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhdWdtZW50KGFycmF5QSwgYXJyYXlCLCBjYWxsYmFjaykge1xuICBhcnJheUIuZm9yRWFjaCgoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBwYXNzZWQgPSBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAocGFzc2VkKSB7XG4gICAgICBhcnJheUEucHVzaChlbGVtZW50KTtcbiAgICB9XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2VwYXJhdGUoYXJyYXksIGFycmF5QSwgYXJyYXlCLCBjYWxsYmFjaykge1xuICBhcnJheS5mb3JFYWNoKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcblxuICAgIHBhc3NlZCA/XG4gICAgICBhcnJheUEucHVzaChlbGVtZW50KSA6XG4gICAgICAgIGFycmF5Qi5wdXNoKGVsZW1lbnQpO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcndhcmRzRmluZChhcnJheSwgY2FsbGJhY2spIHtcbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGFycmF5TGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XSxcbiAgICAgICAgICBwYXNzZWQgPSBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAocGFzc2VkKSB7XG4gICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBiYWNrd2FyZHNGaW5kKGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IGFycmF5TGVuZ3RoIC0gMTsgaW5kZXggPj0gMDsgaW5kZXgtLSkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF0sXG4gICAgICAgICAgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9yd2FyZHNTb21lKGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYXJyYXlMZW5ndGg7IGluZGV4KyspIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdLFxuICAgICAgICAgIHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcbiAgICBcbiAgICBpZiAocGFzc2VkKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBiYWNrd2FyZHNTb21lKGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IGFycmF5TGVuZ3RoIC0gMTsgaW5kZXggPj0gMDsgaW5kZXgtLSkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF0sXG4gICAgICAgICAgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9yd2FyZHNFdmVyeShhcnJheSwgY2FsbGJhY2spIHtcbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGFycmF5TGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XSxcbiAgICAgICAgICBwYXNzZWQgPSBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAoIXBhc3NlZCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYmFja3dhcmRzRXZlcnkoYXJyYXksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gYXJyYXlMZW5ndGggLSAxOyBpbmRleCA+PSAwOyBpbmRleC0tKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XSxcbiAgICAgICAgICBwYXNzZWQgPSBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAoIXBhc3NlZCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9yd2FyZHNSZWR1Y2UoYXJyYXksIGNhbGxiYWNrLCBpbml0aWFsVmFsdWUpIHtcbiAgbGV0IHZhbHVlID0gaW5pdGlhbFZhbHVlOyAvLy9cblxuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYXJyYXlMZW5ndGg7IGluZGV4KyspIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdO1xuXG4gICAgdmFsdWUgPSBjYWxsYmFjayh2YWx1ZSwgZWxlbWVudCwgaW5kZXgpO1xuICB9XG5cbiAgcmV0dXJuIHZhbHVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYmFja3dhcmRzUmVkdWNlKGFycmF5LCBjYWxsYmFjaywgaW5pdGlhbFZhbHVlKSB7XG4gIGxldCB2YWx1ZSA9IGluaXRpYWxWYWx1ZTsgLy8vXG5cbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSBhcnJheUxlbmd0aCAtIDE7IGluZGV4ID49IDA7IGluZGV4LS0pIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdO1xuXG4gICAgdmFsdWUgPSBjYWxsYmFjayh2YWx1ZSwgZWxlbWVudCwgaW5kZXgpO1xuICB9XG5cbiAgcmV0dXJuIHZhbHVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9yd2FyZHNGb3JFYWNoKGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYXJyYXlMZW5ndGg7IGluZGV4KyspIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdO1xuXG4gICAgY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBiYWNrd2FyZHNGb3JFYWNoKGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IGFycmF5TGVuZ3RoIC0gMTsgaW5kZXggPj0gMDsgaW5kZXgtLSkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF07XG5cbiAgICBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBmaXJzdCxcbiAgc2Vjb25kLFxuICB0aGlyZCxcbiAgZm91cnRoLFxuICBmaWZ0aCxcbiAgZmlmdGhMYXN0LFxuICBmb3VydGhMYXN0LFxuICB0aGlyZExhc3QsXG4gIHNlY29uZExhc3QsXG4gIGZpcnN0TGFzdCxcbiAgbGFzdCxcbiAgaGVhZCxcbiAgdGFpbCxcbiAgYmFjayxcbiAgZnJvbnQsXG4gIHB1c2gsXG4gIHVuc2hpZnQsXG4gIGNvbmNhdCxcbiAgY2xlYXIsXG4gIGNvcHksXG4gIG1lcmdlLFxuICBtYXRjaCxcbiAgZmluZCxcbiAgcmVwbGFjZSxcbiAgc3BsaWNlLFxuICBmaWx0ZXIsXG4gIHBydW5lLFxuICBleHRyYWN0LFxuICBwYXRjaCxcbiAgY29tcHJlc3MsXG4gIGNvbWJpbmUsXG4gIGF1Z21lbnQsXG4gIHNlcGFyYXRlLFxuICBmb3J3YXJkc0ZpbmQsXG4gIGJhY2t3YXJkc0ZpbmQsXG4gIGZvcndhcmRzU29tZSxcbiAgYmFja3dhcmRzU29tZSxcbiAgZm9yd2FyZHNFdmVyeSxcbiAgYmFja3dhcmRzRXZlcnksXG4gIGZvcndhcmRzUmVkdWNlLFxuICBiYWNrd2FyZHNSZWR1Y2UsXG4gIGZvcndhcmRzRm9yRWFjaCxcbiAgYmFja3dhcmRzRm9yRWFjaFxufTtcbiJdLCJuYW1lcyI6WyJhdWdtZW50IiwiYmFjayIsImJhY2t3YXJkc0V2ZXJ5IiwiYmFja3dhcmRzRmluZCIsImJhY2t3YXJkc0ZvckVhY2giLCJiYWNrd2FyZHNSZWR1Y2UiLCJiYWNrd2FyZHNTb21lIiwiY2xlYXIiLCJjb21iaW5lIiwiY29tcHJlc3MiLCJjb25jYXQiLCJjb3B5IiwiZXh0cmFjdCIsImZpZnRoIiwiZmlmdGhMYXN0IiwiZmlsdGVyIiwiZmluZCIsImZpcnN0IiwiZmlyc3RMYXN0IiwiZm9yd2FyZHNFdmVyeSIsImZvcndhcmRzRmluZCIsImZvcndhcmRzRm9yRWFjaCIsImZvcndhcmRzUmVkdWNlIiwiZm9yd2FyZHNTb21lIiwiZm91cnRoIiwiZm91cnRoTGFzdCIsImZyb250IiwiaGVhZCIsImxhc3QiLCJtYXRjaCIsIm1lcmdlIiwicGF0Y2giLCJwcnVuZSIsInB1c2giLCJyZXBsYWNlIiwic2Vjb25kIiwic2Vjb25kTGFzdCIsInNlcGFyYXRlIiwic3BsaWNlIiwidGFpbCIsInRoaXJkIiwidGhpcmRMYXN0IiwidW5zaGlmdCIsImFycmF5IiwibGVuZ3RoIiwic2xpY2UiLCJNYXRoIiwibWF4IiwiYXJyYXlBIiwiYXJyYXlCIiwiQXJyYXkiLCJwcm90b3R5cGUiLCJhcHBseSIsImVsZW1lbnRPckFycmF5MiIsInN0YXJ0IiwiZGVsZXRlQ291bnQiLCJjYWxsYmFjayIsIm1hdGNoZXMiLCJhcnJheUFMZW5ndGgiLCJhcnJheUJMZW5ndGgiLCJldmVyeSIsImVsZW1lbnRBIiwiaW5kZXgiLCJlbGVtZW50QiIsInBhc3NlZCIsImVsZW1lbnRzIiwiZWxlbWVudCIsImZvdW5kIiwic29tZSIsIkluZmluaXR5IiwiYXJncyIsImRlbGV0ZWRFbGVtZW50cyIsImZpcnN0RGVsZXRlZEVsZW1lbnQiLCJkZWxldGVkRWxlbWVudCIsInVuZGVmaW5lZCIsImluZGV4MSIsImluZGV4MiIsImZvckVhY2giLCJhcnJheUxlbmd0aCIsImluaXRpYWxWYWx1ZSIsInZhbHVlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUE0T2dCQSxPQUFPO2VBQVBBOztJQWhOQUMsSUFBSTtlQUFKQTs7SUErU0FDLGNBQWM7ZUFBZEE7O0lBNURBQyxhQUFhO2VBQWJBOztJQWlIQUMsZ0JBQWdCO2VBQWhCQTs7SUF4QkFDLGVBQWU7ZUFBZkE7O0lBM0RBQyxhQUFhO2VBQWJBOztJQWpRQUMsS0FBSztlQUFMQTs7SUFxTEFDLE9BQU87ZUFBUEE7O0lBekJBQyxRQUFRO2VBQVJBOztJQXBLQUMsTUFBTTtlQUFOQTs7SUFjQUMsSUFBSTtlQUFKQTs7SUF3VmhCLE9BNENFO2VBNUNGOztJQXhPZ0JDLE9BQU87ZUFBUEE7O0lBeEpBQyxLQUFLO2VBQUxBOztJQUVBQyxTQUFTO2VBQVRBOztJQThHQUMsTUFBTTtlQUFOQTs7SUEzQ0FDLElBQUk7ZUFBSkE7O0lBN0VBQyxLQUFLO2VBQUxBOztJQWtC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
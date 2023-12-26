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
function splice(array1, start) {
    var deleteCount = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Infinity, array2 = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : [];
    var args = [
        start,
        deleteCount
    ].concat(_to_consumable_array(array2)), deletedElements = Array.prototype.splice.apply(array1, args);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvYXJyYXkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBmaXJzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbMF07fVxuXG5leHBvcnQgZnVuY3Rpb24gc2Vjb25kKGFycmF5KSB7IHJldHVybiBhcnJheVsxXTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gdGhpcmQoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzJdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3VydGgoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzNdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBmaWZ0aChhcnJheSkgeyByZXR1cm4gYXJyYXlbNF07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpZnRoTGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gNV07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvdXJ0aExhc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5W2FycmF5Lmxlbmd0aCAtIDRdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiB0aGlyZExhc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5W2FycmF5Lmxlbmd0aCAtIDNdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBzZWNvbmRMYXN0KGFycmF5KSB7IHJldHVybiBhcnJheVthcnJheS5sZW5ndGggLSAyXTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gZmlyc3RMYXN0KGFycmF5KSB7IHJldHVybiBhcnJheVthcnJheS5sZW5ndGggLSAxXTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gbGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gMV07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGhlYWQoYXJyYXkpIHsgcmV0dXJuIGFycmF5LnNsaWNlKDAsIDEpOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiB0YWlsKGFycmF5KSB7IHJldHVybiBhcnJheS5zbGljZSgxKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gYmFjayhhcnJheSkgeyByZXR1cm4gYXJyYXkuc2xpY2UoYXJyYXkubGVuZ3RoIC0gMSk7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGZyb250KGFycmF5KSB7IHJldHVybiBhcnJheS5zbGljZSgwLCBNYXRoLm1heCgxLCBhcnJheS5sZW5ndGggLSAxKSk7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIHB1c2goYXJyYXkxLCBhcnJheTIpIHsgQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkoYXJyYXkxLCBhcnJheTIpOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiB1bnNoaWZ0KGFycmF5MSwgYXJyYXkyKSB7IEFycmF5LnByb3RvdHlwZS51bnNoaWZ0LmFwcGx5KGFycmF5MSwgYXJyYXkyKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gY29uY2F0KGFycmF5MSwgZWxlbWVudE9yQXJyYXkyKSB7XG4gIGNvbnN0IGFycmF5MiA9IChlbGVtZW50T3JBcnJheTIgaW5zdGFuY2VvZiBBcnJheSkgP1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50T3JBcnJheTIgOlxuICAgICAgICAgICAgICAgICAgICAgWyBlbGVtZW50T3JBcnJheTIgXTtcbiAgXG4gIHB1c2goYXJyYXkxLCBhcnJheTIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xlYXIoYXJyYXkpIHtcbiAgY29uc3Qgc3RhcnQgPSAwO1xuICBcbiAgcmV0dXJuIGFycmF5LnNwbGljZShzdGFydCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb3B5KGFycmF5MSwgYXJyYXkyKSB7XG4gIGNvbnN0IHN0YXJ0ID0gMCxcbiAgICAgICAgZGVsZXRlQ291bnQgPSBhcnJheTIubGVuZ3RoOyAgLy8vXG4gIFxuICBzcGxpY2UoYXJyYXkxLCBzdGFydCwgZGVsZXRlQ291bnQsIGFycmF5Mik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXJnZShhcnJheTEsIGFycmF5MikgeyBBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseShhcnJheTEsIGFycmF5Mik7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbmQoYXJyYXksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGVsZW1lbnRzID0gW107XG5cbiAgZm9yd2FyZHNGb3JFYWNoKGFycmF5LCAoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBwYXNzZWQgPSBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAocGFzc2VkKSB7XG4gICAgICBlbGVtZW50cy5wdXNoKGVsZW1lbnQpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGVsZW1lbnRzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVwbGFjZShhcnJheSwgZWxlbWVudCwgY2FsbGJhY2spIHtcbiAgbGV0IHN0YXJ0O1xuICBcbiAgY29uc3QgZm91bmQgPSBhcnJheS5zb21lKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmIChwYXNzZWQpIHtcbiAgICAgIHN0YXJ0ID0gaW5kZXg7ICAvLy9cbiAgICAgIFxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcbiAgXG4gIGlmIChmb3VuZCkge1xuICAgIGNvbnN0IGRlbGV0ZUNvdW50ID0gMTtcblxuICAgIGFycmF5LnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQsIGVsZW1lbnQpO1xuICB9XG5cbiAgcmV0dXJuIGZvdW5kO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3BsaWNlKGFycmF5MSwgc3RhcnQsIGRlbGV0ZUNvdW50ID0gSW5maW5pdHksIGFycmF5MiA9IFtdKSB7XG4gIGNvbnN0IGFyZ3MgPSBbIHN0YXJ0LCBkZWxldGVDb3VudCwgLi4uYXJyYXkyIF0sXG4gICAgICAgIGRlbGV0ZWRFbGVtZW50cyA9IEFycmF5LnByb3RvdHlwZS5zcGxpY2UuYXBwbHkoYXJyYXkxLCBhcmdzKTtcblxuICByZXR1cm4gZGVsZXRlZEVsZW1lbnRzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmlsdGVyKGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBkZWxldGVkRWxlbWVudHMgPSBbXTtcbiAgXG4gIGJhY2t3YXJkc0ZvckVhY2goYXJyYXksIChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmICghcGFzc2VkKSB7XG4gICAgICBjb25zdCBzdGFydCA9IGluZGV4LCAgLy8vXG4gICAgICAgICAgICBkZWxldGVDb3VudCA9IDEsXG4gICAgICAgICAgICBkZWxldGVkRWxlbWVudHMgPSBhcnJheS5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50KSxcbiAgICAgICAgICAgIGZpcnN0RGVsZXRlZEVsZW1lbnQgPSBmaXJzdChkZWxldGVkRWxlbWVudHMpO1xuICAgICAgXG4gICAgICBkZWxldGVkRWxlbWVudHMudW5zaGlmdChmaXJzdERlbGV0ZWRFbGVtZW50KTsgIC8vL1xuICAgIH1cbiAgfSk7XG4gIFxuICByZXR1cm4gZGVsZXRlZEVsZW1lbnRzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJ1bmUoYXJyYXksIGNhbGxiYWNrKSB7XG4gIGxldCBkZWxldGVkRWxlbWVudCA9IHVuZGVmaW5lZDtcbiAgXG4gIGFycmF5LnNvbWUoKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKCFwYXNzZWQpIHtcbiAgICAgIGNvbnN0IHN0YXJ0ID0gaW5kZXgsICAvLy9cbiAgICAgICAgICAgIGRlbGV0ZUNvdW50ID0gMSxcbiAgICAgICAgICAgIGRlbGV0ZWRFbGVtZW50cyA9IGFycmF5LnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQpLFxuICAgICAgICAgICAgZmlyc3REZWxldGVkRWxlbWVudCA9IGZpcnN0KGRlbGV0ZWRFbGVtZW50cyk7XG4gICAgICBcbiAgICAgIGRlbGV0ZWRFbGVtZW50ID0gZmlyc3REZWxldGVkRWxlbWVudDsgIC8vL1xuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuICBcbiAgcmV0dXJuIGRlbGV0ZWRFbGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXh0cmFjdChhcnJheSwgY2FsbGJhY2spIHtcbiAgbGV0IGRlbGV0ZWRFbGVtZW50ID0gdW5kZWZpbmVkO1xuXG4gIGFycmF5LnNvbWUoKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgY29uc3Qgc3RhcnQgPSBpbmRleCwgIC8vL1xuICAgICAgICAgICAgZGVsZXRlQ291bnQgPSAxLFxuICAgICAgICAgICAgZGVsZXRlZEVsZW1lbnRzID0gYXJyYXkuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCksXG4gICAgICAgICAgICBmaXJzdERlbGV0ZWRFbGVtZW50ID0gZmlyc3QoZGVsZXRlZEVsZW1lbnRzKTtcblxuICAgICAgZGVsZXRlZEVsZW1lbnQgPSBmaXJzdERlbGV0ZWRFbGVtZW50OyAgLy8vXG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGRlbGV0ZWRFbGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGF0Y2goYXJyYXksIGVsZW1lbnQsIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGZvdW5kID0gYXJyYXkuc29tZSgoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBwYXNzZWQgPSBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAocGFzc2VkKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG5cbiAgaWYgKGZvdW5kKSB7XG4gICAgYXJyYXkucHVzaChlbGVtZW50KTtcbiAgfVxuXG4gIHJldHVybiBmb3VuZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXByZXNzKGFycmF5LCBjYWxsYmFjaykge1xuICBsZXQgaW5kZXgxID0gMCxcbiAgICAgIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICB3aGlsZSAoaW5kZXgxIDwgbGVuZ3RoKSB7XG4gICAgY29uc3QgZWxlbWVudDEgPSBhcnJheVtpbmRleDFdO1xuXG4gICAgZm9yIChsZXQgaW5kZXgyID0gbGVuZ3RoIC0gMTsgaW5kZXgyID4gaW5kZXgxOyBpbmRleDItLSkge1xuICAgICAgY29uc3QgZWxlbWVudDIgPSBhcnJheVtpbmRleDJdLFxuICAgICAgICAgICAgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudDIsIGVsZW1lbnQxKTtcblxuICAgICAgaWYgKHBhc3NlZCkge1xuICAgICAgICBjb25zdCBzdGFydCA9IGluZGV4MiwgLy8vXG4gICAgICAgICAgICAgIGRlbGV0ZUNvdW50ID0gMTtcblxuICAgICAgICBhcnJheS5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpbmRleDErKztcblxuICAgIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tYmluZShhcnJheTEsIGFycmF5MiwgY2FsbGJhY2spIHtcbiAgY29uc3QgYXJyYXkgPSBbXG4gICAgLi4uYXJyYXkxLFxuICAgIC4uLmFycmF5MlxuICBdO1xuXG4gIGNvbXByZXNzKGFycmF5LCBjYWxsYmFjayk7XG5cbiAgcmV0dXJuIGFycmF5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXVnbWVudChhcnJheTEsIGFycmF5MiwgY2FsbGJhY2spIHtcbiAgYXJyYXkyLmZvckVhY2goKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgYXJyYXkxLnB1c2goZWxlbWVudCk7XG4gICAgfVxuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlcGFyYXRlKGFycmF5LCBhcnJheTEsIGFycmF5MiwgY2FsbGJhY2spIHtcbiAgYXJyYXkuZm9yRWFjaCgoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBwYXNzZWQgPSBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG5cbiAgICBwYXNzZWQgP1xuICAgICAgYXJyYXkxLnB1c2goZWxlbWVudCkgOlxuICAgICAgICBhcnJheTIucHVzaChlbGVtZW50KTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3J3YXJkc0ZpbmQoYXJyYXksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhcnJheUxlbmd0aDsgaW5kZXgrKykge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF0sXG4gICAgICAgICAgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYmFja3dhcmRzRmluZChhcnJheSwgY2FsbGJhY2spIHtcbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSBhcnJheUxlbmd0aCAtIDE7IGluZGV4ID49IDA7IGluZGV4LS0pIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdLFxuICAgICAgICAgIHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmIChwYXNzZWQpIHtcbiAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcndhcmRzU29tZShhcnJheSwgY2FsbGJhY2spIHtcbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGFycmF5TGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XSxcbiAgICAgICAgICBwYXNzZWQgPSBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG4gICAgXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYmFja3dhcmRzU29tZShhcnJheSwgY2FsbGJhY2spIHtcbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSBhcnJheUxlbmd0aCAtIDE7IGluZGV4ID49IDA7IGluZGV4LS0pIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdLFxuICAgICAgICAgIHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmIChwYXNzZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcndhcmRzRXZlcnkoYXJyYXksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhcnJheUxlbmd0aDsgaW5kZXgrKykge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF0sXG4gICAgICAgICAgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKCFwYXNzZWQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJhY2t3YXJkc0V2ZXJ5KGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IGFycmF5TGVuZ3RoIC0gMTsgaW5kZXggPj0gMDsgaW5kZXgtLSkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF0sXG4gICAgICAgICAgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKCFwYXNzZWQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcndhcmRzUmVkdWNlKGFycmF5LCBjYWxsYmFjaywgaW5pdGlhbFZhbHVlKSB7XG4gIGxldCB2YWx1ZSA9IGluaXRpYWxWYWx1ZTsgLy8vXG5cbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGFycmF5TGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XTtcblxuICAgIHZhbHVlID0gY2FsbGJhY2sodmFsdWUsIGVsZW1lbnQsIGluZGV4KTtcbiAgfVxuXG4gIHJldHVybiB2YWx1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJhY2t3YXJkc1JlZHVjZShhcnJheSwgY2FsbGJhY2ssIGluaXRpYWxWYWx1ZSkge1xuICBsZXQgdmFsdWUgPSBpbml0aWFsVmFsdWU7IC8vL1xuXG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gYXJyYXlMZW5ndGggLSAxOyBpbmRleCA+PSAwOyBpbmRleC0tKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XTtcblxuICAgIHZhbHVlID0gY2FsbGJhY2sodmFsdWUsIGVsZW1lbnQsIGluZGV4KTtcbiAgfVxuXG4gIHJldHVybiB2YWx1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcndhcmRzRm9yRWFjaChhcnJheSwgY2FsbGJhY2spIHtcbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGFycmF5TGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XTtcblxuICAgIGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYmFja3dhcmRzRm9yRWFjaChhcnJheSwgY2FsbGJhY2spIHtcbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSBhcnJheUxlbmd0aCAtIDE7IGluZGV4ID49IDA7IGluZGV4LS0pIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdO1xuXG4gICAgY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZmlyc3QsXG4gIHNlY29uZCxcbiAgdGhpcmQsXG4gIGZvdXJ0aCxcbiAgZmlmdGgsXG4gIGZpZnRoTGFzdCxcbiAgZm91cnRoTGFzdCxcbiAgdGhpcmRMYXN0LFxuICBzZWNvbmRMYXN0LFxuICBmaXJzdExhc3QsXG4gIGxhc3QsXG4gIGhlYWQsXG4gIHRhaWwsXG4gIGJhY2ssXG4gIGZyb250LFxuICBwdXNoLFxuICB1bnNoaWZ0LFxuICBjb25jYXQsXG4gIGNsZWFyLFxuICBjb3B5LFxuICBtZXJnZSxcbiAgZmluZCxcbiAgcmVwbGFjZSxcbiAgc3BsaWNlLFxuICBmaWx0ZXIsXG4gIHBydW5lLFxuICBleHRyYWN0LFxuICBwYXRjaCxcbiAgY29tcHJlc3MsXG4gIGNvbWJpbmUsXG4gIGF1Z21lbnQsXG4gIHNlcGFyYXRlLFxuICBmb3J3YXJkc0ZpbmQsXG4gIGJhY2t3YXJkc0ZpbmQsXG4gIGZvcndhcmRzU29tZSxcbiAgYmFja3dhcmRzU29tZSxcbiAgZm9yd2FyZHNFdmVyeSxcbiAgYmFja3dhcmRzRXZlcnksXG4gIGZvcndhcmRzUmVkdWNlLFxuICBiYWNrd2FyZHNSZWR1Y2UsXG4gIGZvcndhcmRzRm9yRWFjaCxcbiAgYmFja3dhcmRzRm9yRWFjaFxufTtcbiJdLCJuYW1lcyI6WyJhdWdtZW50IiwiYmFjayIsImJhY2t3YXJkc0V2ZXJ5IiwiYmFja3dhcmRzRmluZCIsImJhY2t3YXJkc0ZvckVhY2giLCJiYWNrd2FyZHNSZWR1Y2UiLCJiYWNrd2FyZHNTb21lIiwiY2xlYXIiLCJjb21iaW5lIiwiY29tcHJlc3MiLCJjb25jYXQiLCJjb3B5IiwiZXh0cmFjdCIsImZpZnRoIiwiZmlmdGhMYXN0IiwiZmlsdGVyIiwiZmluZCIsImZpcnN0IiwiZmlyc3RMYXN0IiwiZm9yd2FyZHNFdmVyeSIsImZvcndhcmRzRmluZCIsImZvcndhcmRzRm9yRWFjaCIsImZvcndhcmRzUmVkdWNlIiwiZm9yd2FyZHNTb21lIiwiZm91cnRoIiwiZm91cnRoTGFzdCIsImZyb250IiwiaGVhZCIsImxhc3QiLCJtZXJnZSIsInBhdGNoIiwicHJ1bmUiLCJwdXNoIiwicmVwbGFjZSIsInNlY29uZCIsInNlY29uZExhc3QiLCJzZXBhcmF0ZSIsInNwbGljZSIsInRhaWwiLCJ0aGlyZCIsInRoaXJkTGFzdCIsInVuc2hpZnQiLCJhcnJheSIsImxlbmd0aCIsInNsaWNlIiwiTWF0aCIsIm1heCIsImFycmF5MSIsImFycmF5MiIsIkFycmF5IiwicHJvdG90eXBlIiwiYXBwbHkiLCJlbGVtZW50T3JBcnJheTIiLCJzdGFydCIsImRlbGV0ZUNvdW50IiwiY2FsbGJhY2siLCJlbGVtZW50cyIsImVsZW1lbnQiLCJpbmRleCIsInBhc3NlZCIsImZvdW5kIiwic29tZSIsIkluZmluaXR5IiwiYXJncyIsImRlbGV0ZWRFbGVtZW50cyIsImZpcnN0RGVsZXRlZEVsZW1lbnQiLCJkZWxldGVkRWxlbWVudCIsInVuZGVmaW5lZCIsImluZGV4MSIsImVsZW1lbnQxIiwiaW5kZXgyIiwiZWxlbWVudDIiLCJmb3JFYWNoIiwiYXJyYXlMZW5ndGgiLCJpbml0aWFsVmFsdWUiLCJ2YWx1ZSJdLCJt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
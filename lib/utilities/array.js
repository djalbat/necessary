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
    eighth: function() {
        return eighth;
    },
    eighthLast: function() {
        return eighthLast;
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
    ninth: function() {
        return ninth;
    },
    ninthLast: function() {
        return ninthLast;
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
    seventh: function() {
        return seventh;
    },
    seventhLast: function() {
        return seventhLast;
    },
    sixth: function() {
        return sixth;
    },
    sixthLast: function() {
        return sixthLast;
    },
    splice: function() {
        return splice;
    },
    tail: function() {
        return tail;
    },
    tenth: function() {
        return tenth;
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
function sixth(array) {
    return array[5];
}
function seventh(array) {
    return array[6];
}
function eighth(array) {
    return array[7];
}
function ninth(array) {
    return array[8];
}
function tenth(array) {
    return array[9];
}
function firstLast(array) {
    return array[array.length - 1];
}
function secondLast(array) {
    return array[array.length - 2];
}
function thirdLast(array) {
    return array[array.length - 3];
}
function fourthLast(array) {
    return array[array.length - 4];
}
function fifthLast(array) {
    return array[array.length - 5];
}
function sixthLast(array) {
    return array[array.length - 6];
}
function seventhLast(array) {
    return array[array.length - 7];
}
function eighthLast(array) {
    return array[array.length - 8];
}
function ninthLast(array) {
    return array[array.length - 9];
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
    sixth: sixth,
    seventh: seventh,
    eighth: eighth,
    ninth: ninth,
    firstLast: firstLast,
    secondLast: secondLast,
    thirdLast: thirdLast,
    fourthLast: fourthLast,
    fifthLast: fifthLast,
    sixthLast: sixthLast,
    seventhLast: seventhLast,
    eighthLast: eighthLast,
    ninthLast: ninthLast,
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvYXJyYXkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBmaXJzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbMF07fVxuXG5leHBvcnQgZnVuY3Rpb24gc2Vjb25kKGFycmF5KSB7IHJldHVybiBhcnJheVsxXTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gdGhpcmQoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzJdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3VydGgoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzNdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBmaWZ0aChhcnJheSkgeyByZXR1cm4gYXJyYXlbNF07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIHNpeHRoKGFycmF5KSB7IHJldHVybiBhcnJheVs1XTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gc2V2ZW50aChhcnJheSkgeyByZXR1cm4gYXJyYXlbNl07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGVpZ2h0aChhcnJheSkgeyByZXR1cm4gYXJyYXlbN107IH1cblxuZXhwb3J0IGZ1bmN0aW9uIG5pbnRoKGFycmF5KSB7IHJldHVybiBhcnJheVs4XTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gdGVudGgoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzldOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBmaXJzdExhc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5W2FycmF5Lmxlbmd0aCAtIDFdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBzZWNvbmRMYXN0KGFycmF5KSB7IHJldHVybiBhcnJheVthcnJheS5sZW5ndGggLSAyXTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gdGhpcmRMYXN0KGFycmF5KSB7IHJldHVybiBhcnJheVthcnJheS5sZW5ndGggLSAzXTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gZm91cnRoTGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gNF07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpZnRoTGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gNV07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIHNpeHRoTGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gNl07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldmVudGhMYXN0KGFycmF5KSB7IHJldHVybiBhcnJheVthcnJheS5sZW5ndGggLSA3XTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gZWlnaHRoTGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gOF07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIG5pbnRoTGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gOV07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGxhc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5W2FycmF5Lmxlbmd0aCAtIDFdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBoZWFkKGFycmF5KSB7IHJldHVybiBhcnJheS5zbGljZSgwLCAxKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gdGFpbChhcnJheSkgeyByZXR1cm4gYXJyYXkuc2xpY2UoMSk7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGJhY2soYXJyYXkpIHsgcmV0dXJuIGFycmF5LnNsaWNlKGFycmF5Lmxlbmd0aCAtIDEpOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBmcm9udChhcnJheSkgeyByZXR1cm4gYXJyYXkuc2xpY2UoMCwgTWF0aC5tYXgoMSwgYXJyYXkubGVuZ3RoIC0gMSkpOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBwdXNoKGFycmF5QSwgYXJyYXlCKSB7IEFycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KGFycmF5QSwgYXJyYXlCKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gdW5zaGlmdChhcnJheUEsIGFycmF5QikgeyBBcnJheS5wcm90b3R5cGUudW5zaGlmdC5hcHBseShhcnJheUEsIGFycmF5Qik7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbmNhdChhcnJheUEsIGVsZW1lbnRPckFycmF5Mikge1xuICBjb25zdCBhcnJheUIgPSAoZWxlbWVudE9yQXJyYXkyIGluc3RhbmNlb2YgQXJyYXkpID9cbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudE9yQXJyYXkyIDpcbiAgICAgICAgICAgICAgICAgICAgIFsgZWxlbWVudE9yQXJyYXkyIF07XG4gIFxuICBwdXNoKGFycmF5QSwgYXJyYXlCKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyKGFycmF5KSB7XG4gIGNvbnN0IHN0YXJ0ID0gMDtcbiAgXG4gIHJldHVybiBhcnJheS5zcGxpY2Uoc3RhcnQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29weShhcnJheUEsIGFycmF5Qikge1xuICBjb25zdCBzdGFydCA9IDAsXG4gICAgICAgIGRlbGV0ZUNvdW50ID0gYXJyYXlCLmxlbmd0aDsgIC8vL1xuICBcbiAgc3BsaWNlKGFycmF5QSwgc3RhcnQsIGRlbGV0ZUNvdW50LCBhcnJheUIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2UoYXJyYXlBLCBhcnJheUIpIHsgQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkoYXJyYXlBLCBhcnJheUIpOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBtYXRjaChhcnJheUEsIGFycmF5QiwgY2FsbGJhY2spIHtcbiAgbGV0IG1hdGNoZXMgPSBmYWxzZTtcblxuICBjb25zdCBhcnJheUFMZW5ndGggPSBhcnJheUEubGVuZ3RoLFxuICAgICAgICBhcnJheUJMZW5ndGggPSBhcnJheUIubGVuZ3RoO1xuXG4gIGlmIChhcnJheUFMZW5ndGggPT09IGFycmF5Qkxlbmd0aCkge1xuICAgIG1hdGNoZXMgPSBhcnJheUEuZXZlcnkoKGVsZW1lbnRBLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgZWxlbWVudEIgPSBhcnJheUJbaW5kZXhdLFxuICAgICAgICAgICAgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudEEsIGVsZW1lbnRCLCBpbmRleCk7XG5cbiAgICAgIGlmIChwYXNzZWQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gbWF0Y2hlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbmQoYXJyYXksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGVsZW1lbnRzID0gW107XG5cbiAgZm9yd2FyZHNGb3JFYWNoKGFycmF5LCAoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBwYXNzZWQgPSBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAocGFzc2VkKSB7XG4gICAgICBlbGVtZW50cy5wdXNoKGVsZW1lbnQpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGVsZW1lbnRzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVwbGFjZShhcnJheSwgZWxlbWVudCwgY2FsbGJhY2spIHtcbiAgbGV0IHN0YXJ0O1xuICBcbiAgY29uc3QgZm91bmQgPSBhcnJheS5zb21lKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmIChwYXNzZWQpIHtcbiAgICAgIHN0YXJ0ID0gaW5kZXg7ICAvLy9cbiAgICAgIFxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcbiAgXG4gIGlmIChmb3VuZCkge1xuICAgIGNvbnN0IGRlbGV0ZUNvdW50ID0gMTtcblxuICAgIGFycmF5LnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQsIGVsZW1lbnQpO1xuICB9XG5cbiAgcmV0dXJuIGZvdW5kO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3BsaWNlKGFycmF5QSwgc3RhcnQsIGRlbGV0ZUNvdW50ID0gSW5maW5pdHksIGFycmF5QiA9IFtdKSB7XG4gIGNvbnN0IGFyZ3MgPSBbIHN0YXJ0LCBkZWxldGVDb3VudCwgLi4uYXJyYXlCIF0sXG4gICAgICAgIGRlbGV0ZWRFbGVtZW50cyA9IEFycmF5LnByb3RvdHlwZS5zcGxpY2UuYXBwbHkoYXJyYXlBLCBhcmdzKTtcblxuICByZXR1cm4gZGVsZXRlZEVsZW1lbnRzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmlsdGVyKGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBkZWxldGVkRWxlbWVudHMgPSBbXTtcbiAgXG4gIGJhY2t3YXJkc0ZvckVhY2goYXJyYXksIChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmICghcGFzc2VkKSB7XG4gICAgICBjb25zdCBzdGFydCA9IGluZGV4LCAgLy8vXG4gICAgICAgICAgICBkZWxldGVDb3VudCA9IDEsXG4gICAgICAgICAgICBkZWxldGVkRWxlbWVudHMgPSBhcnJheS5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50KSxcbiAgICAgICAgICAgIGZpcnN0RGVsZXRlZEVsZW1lbnQgPSBmaXJzdChkZWxldGVkRWxlbWVudHMpO1xuICAgICAgXG4gICAgICBkZWxldGVkRWxlbWVudHMudW5zaGlmdChmaXJzdERlbGV0ZWRFbGVtZW50KTsgIC8vL1xuICAgIH1cbiAgfSk7XG4gIFxuICByZXR1cm4gZGVsZXRlZEVsZW1lbnRzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJ1bmUoYXJyYXksIGNhbGxiYWNrKSB7XG4gIGxldCBkZWxldGVkRWxlbWVudCA9IHVuZGVmaW5lZDtcbiAgXG4gIGFycmF5LnNvbWUoKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKCFwYXNzZWQpIHtcbiAgICAgIGNvbnN0IHN0YXJ0ID0gaW5kZXgsICAvLy9cbiAgICAgICAgICAgIGRlbGV0ZUNvdW50ID0gMSxcbiAgICAgICAgICAgIGRlbGV0ZWRFbGVtZW50cyA9IGFycmF5LnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQpLFxuICAgICAgICAgICAgZmlyc3REZWxldGVkRWxlbWVudCA9IGZpcnN0KGRlbGV0ZWRFbGVtZW50cyk7XG4gICAgICBcbiAgICAgIGRlbGV0ZWRFbGVtZW50ID0gZmlyc3REZWxldGVkRWxlbWVudDsgIC8vL1xuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuICBcbiAgcmV0dXJuIGRlbGV0ZWRFbGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXh0cmFjdChhcnJheSwgY2FsbGJhY2spIHtcbiAgbGV0IGRlbGV0ZWRFbGVtZW50ID0gdW5kZWZpbmVkO1xuXG4gIGFycmF5LnNvbWUoKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgY29uc3Qgc3RhcnQgPSBpbmRleCwgIC8vL1xuICAgICAgICAgICAgZGVsZXRlQ291bnQgPSAxLFxuICAgICAgICAgICAgZGVsZXRlZEVsZW1lbnRzID0gYXJyYXkuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCksXG4gICAgICAgICAgICBmaXJzdERlbGV0ZWRFbGVtZW50ID0gZmlyc3QoZGVsZXRlZEVsZW1lbnRzKTtcblxuICAgICAgZGVsZXRlZEVsZW1lbnQgPSBmaXJzdERlbGV0ZWRFbGVtZW50OyAgLy8vXG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGRlbGV0ZWRFbGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGF0Y2goYXJyYXksIGVsZW1lbnQsIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGZvdW5kID0gYXJyYXkuc29tZSgoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBwYXNzZWQgPSBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAocGFzc2VkKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG5cbiAgaWYgKGZvdW5kKSB7XG4gICAgYXJyYXkucHVzaChlbGVtZW50KTtcbiAgfVxuXG4gIHJldHVybiBmb3VuZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXByZXNzKGFycmF5LCBjYWxsYmFjaykge1xuICBsZXQgaW5kZXgxID0gMCxcbiAgICAgIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICB3aGlsZSAoaW5kZXgxIDwgbGVuZ3RoKSB7XG4gICAgY29uc3QgZWxlbWVudEIgPSBhcnJheVtpbmRleDFdO1xuXG4gICAgZm9yIChsZXQgaW5kZXgyID0gbGVuZ3RoIC0gMTsgaW5kZXgyID4gaW5kZXgxOyBpbmRleDItLSkge1xuICAgICAgY29uc3QgZWxlbWVudEEgPSBhcnJheVtpbmRleDJdLFxuICAgICAgICAgICAgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudEEsIGVsZW1lbnRCKTtcblxuICAgICAgaWYgKHBhc3NlZCkge1xuICAgICAgICBjb25zdCBzdGFydCA9IGluZGV4MiwgLy8vXG4gICAgICAgICAgICAgIGRlbGV0ZUNvdW50ID0gMTtcblxuICAgICAgICBhcnJheS5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpbmRleDErKztcblxuICAgIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tYmluZShhcnJheUEsIGFycmF5QiwgY2FsbGJhY2spIHtcbiAgY29uc3QgYXJyYXkgPSBbXG4gICAgLi4uYXJyYXlBLFxuICAgIC4uLmFycmF5QlxuICBdO1xuXG4gIGNvbXByZXNzKGFycmF5LCBjYWxsYmFjayk7XG5cbiAgcmV0dXJuIGFycmF5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXVnbWVudChhcnJheUEsIGFycmF5QiwgY2FsbGJhY2spIHtcbiAgYXJyYXlCLmZvckVhY2goKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgYXJyYXlBLnB1c2goZWxlbWVudCk7XG4gICAgfVxuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlcGFyYXRlKGFycmF5LCBhcnJheUEsIGFycmF5QiwgY2FsbGJhY2spIHtcbiAgYXJyYXkuZm9yRWFjaCgoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBwYXNzZWQgPSBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG5cbiAgICBwYXNzZWQgP1xuICAgICAgYXJyYXlBLnB1c2goZWxlbWVudCkgOlxuICAgICAgICBhcnJheUIucHVzaChlbGVtZW50KTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3J3YXJkc0ZpbmQoYXJyYXksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhcnJheUxlbmd0aDsgaW5kZXgrKykge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF0sXG4gICAgICAgICAgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYmFja3dhcmRzRmluZChhcnJheSwgY2FsbGJhY2spIHtcbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSBhcnJheUxlbmd0aCAtIDE7IGluZGV4ID49IDA7IGluZGV4LS0pIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdLFxuICAgICAgICAgIHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmIChwYXNzZWQpIHtcbiAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcndhcmRzU29tZShhcnJheSwgY2FsbGJhY2spIHtcbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGFycmF5TGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XSxcbiAgICAgICAgICBwYXNzZWQgPSBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG4gICAgXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYmFja3dhcmRzU29tZShhcnJheSwgY2FsbGJhY2spIHtcbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSBhcnJheUxlbmd0aCAtIDE7IGluZGV4ID49IDA7IGluZGV4LS0pIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdLFxuICAgICAgICAgIHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmIChwYXNzZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcndhcmRzRXZlcnkoYXJyYXksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhcnJheUxlbmd0aDsgaW5kZXgrKykge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF0sXG4gICAgICAgICAgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKCFwYXNzZWQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJhY2t3YXJkc0V2ZXJ5KGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IGFycmF5TGVuZ3RoIC0gMTsgaW5kZXggPj0gMDsgaW5kZXgtLSkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF0sXG4gICAgICAgICAgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKCFwYXNzZWQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcndhcmRzUmVkdWNlKGFycmF5LCBjYWxsYmFjaywgaW5pdGlhbFZhbHVlKSB7XG4gIGxldCB2YWx1ZSA9IGluaXRpYWxWYWx1ZTsgLy8vXG5cbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGFycmF5TGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XTtcblxuICAgIHZhbHVlID0gY2FsbGJhY2sodmFsdWUsIGVsZW1lbnQsIGluZGV4KTtcbiAgfVxuXG4gIHJldHVybiB2YWx1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJhY2t3YXJkc1JlZHVjZShhcnJheSwgY2FsbGJhY2ssIGluaXRpYWxWYWx1ZSkge1xuICBsZXQgdmFsdWUgPSBpbml0aWFsVmFsdWU7IC8vL1xuXG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gYXJyYXlMZW5ndGggLSAxOyBpbmRleCA+PSAwOyBpbmRleC0tKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XTtcblxuICAgIHZhbHVlID0gY2FsbGJhY2sodmFsdWUsIGVsZW1lbnQsIGluZGV4KTtcbiAgfVxuXG4gIHJldHVybiB2YWx1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcndhcmRzRm9yRWFjaChhcnJheSwgY2FsbGJhY2spIHtcbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGFycmF5TGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XTtcblxuICAgIGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYmFja3dhcmRzRm9yRWFjaChhcnJheSwgY2FsbGJhY2spIHtcbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSBhcnJheUxlbmd0aCAtIDE7IGluZGV4ID49IDA7IGluZGV4LS0pIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdO1xuXG4gICAgY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZmlyc3QsXG4gIHNlY29uZCxcbiAgdGhpcmQsXG4gIGZvdXJ0aCxcbiAgZmlmdGgsXG4gIHNpeHRoLFxuICBzZXZlbnRoLFxuICBlaWdodGgsXG4gIG5pbnRoLFxuICBmaXJzdExhc3QsXG4gIHNlY29uZExhc3QsXG4gIHRoaXJkTGFzdCxcbiAgZm91cnRoTGFzdCxcbiAgZmlmdGhMYXN0LFxuICBzaXh0aExhc3QsXG4gIHNldmVudGhMYXN0LFxuICBlaWdodGhMYXN0LFxuICBuaW50aExhc3QsXG4gIGxhc3QsXG4gIGhlYWQsXG4gIHRhaWwsXG4gIGJhY2ssXG4gIGZyb250LFxuICBwdXNoLFxuICB1bnNoaWZ0LFxuICBjb25jYXQsXG4gIGNsZWFyLFxuICBjb3B5LFxuICBtZXJnZSxcbiAgbWF0Y2gsXG4gIGZpbmQsXG4gIHJlcGxhY2UsXG4gIHNwbGljZSxcbiAgZmlsdGVyLFxuICBwcnVuZSxcbiAgZXh0cmFjdCxcbiAgcGF0Y2gsXG4gIGNvbXByZXNzLFxuICBjb21iaW5lLFxuICBhdWdtZW50LFxuICBzZXBhcmF0ZSxcbiAgZm9yd2FyZHNGaW5kLFxuICBiYWNrd2FyZHNGaW5kLFxuICBmb3J3YXJkc1NvbWUsXG4gIGJhY2t3YXJkc1NvbWUsXG4gIGZvcndhcmRzRXZlcnksXG4gIGJhY2t3YXJkc0V2ZXJ5LFxuICBmb3J3YXJkc1JlZHVjZSxcbiAgYmFja3dhcmRzUmVkdWNlLFxuICBmb3J3YXJkc0ZvckVhY2gsXG4gIGJhY2t3YXJkc0ZvckVhY2hcbn07XG4iXSwibmFtZXMiOlsiYXVnbWVudCIsImJhY2siLCJiYWNrd2FyZHNFdmVyeSIsImJhY2t3YXJkc0ZpbmQiLCJiYWNrd2FyZHNGb3JFYWNoIiwiYmFja3dhcmRzUmVkdWNlIiwiYmFja3dhcmRzU29tZSIsImNsZWFyIiwiY29tYmluZSIsImNvbXByZXNzIiwiY29uY2F0IiwiY29weSIsImVpZ2h0aCIsImVpZ2h0aExhc3QiLCJleHRyYWN0IiwiZmlmdGgiLCJmaWZ0aExhc3QiLCJmaWx0ZXIiLCJmaW5kIiwiZmlyc3QiLCJmaXJzdExhc3QiLCJmb3J3YXJkc0V2ZXJ5IiwiZm9yd2FyZHNGaW5kIiwiZm9yd2FyZHNGb3JFYWNoIiwiZm9yd2FyZHNSZWR1Y2UiLCJmb3J3YXJkc1NvbWUiLCJmb3VydGgiLCJmb3VydGhMYXN0IiwiZnJvbnQiLCJoZWFkIiwibGFzdCIsIm1hdGNoIiwibWVyZ2UiLCJuaW50aCIsIm5pbnRoTGFzdCIsInBhdGNoIiwicHJ1bmUiLCJwdXNoIiwicmVwbGFjZSIsInNlY29uZCIsInNlY29uZExhc3QiLCJzZXBhcmF0ZSIsInNldmVudGgiLCJzZXZlbnRoTGFzdCIsInNpeHRoIiwic2l4dGhMYXN0Iiwic3BsaWNlIiwidGFpbCIsInRlbnRoIiwidGhpcmQiLCJ0aGlyZExhc3QiLCJ1bnNoaWZ0IiwiYXJyYXkiLCJsZW5ndGgiLCJzbGljZSIsIk1hdGgiLCJtYXgiLCJhcnJheUEiLCJhcnJheUIiLCJBcnJheSIsInByb3RvdHlwZSIsImFwcGx5IiwiZWxlbWVudE9yQXJyYXkyIiwic3RhcnQiLCJkZWxldGVDb3VudCIsImNhbGxiYWNrIiwibWF0Y2hlcyIsImFycmF5QUxlbmd0aCIsImFycmF5Qkxlbmd0aCIsImV2ZXJ5IiwiZWxlbWVudEEiLCJpbmRleCIsImVsZW1lbnRCIiwicGFzc2VkIiwiZWxlbWVudHMiLCJlbGVtZW50IiwiZm91bmQiLCJzb21lIiwiSW5maW5pdHkiLCJhcmdzIiwiZGVsZXRlZEVsZW1lbnRzIiwiZmlyc3REZWxldGVkRWxlbWVudCIsImRlbGV0ZWRFbGVtZW50IiwidW5kZWZpbmVkIiwiaW5kZXgxIiwiaW5kZXgyIiwiZm9yRWFjaCIsImFycmF5TGVuZ3RoIiwiaW5pdGlhbFZhbHVlIiwidmFsdWUiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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
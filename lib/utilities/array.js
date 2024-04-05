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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvYXJyYXkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBmaXJzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbMF07fVxuXG5leHBvcnQgZnVuY3Rpb24gc2Vjb25kKGFycmF5KSB7IHJldHVybiBhcnJheVsxXTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gdGhpcmQoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzJdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3VydGgoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzNdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBmaWZ0aChhcnJheSkgeyByZXR1cm4gYXJyYXlbNF07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIHNpeHRoKGFycmF5KSB7IHJldHVybiBhcnJheVs1XTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gc2V2ZW50aChhcnJheSkgeyByZXR1cm4gYXJyYXlbNl07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGVpZ2h0aChhcnJheSkgeyByZXR1cm4gYXJyYXlbN107IH1cblxuZXhwb3J0IGZ1bmN0aW9uIG5pbnRoKGFycmF5KSB7IHJldHVybiBhcnJheVs4XTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gdGVudGgoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzldOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBmaXJzdExhc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5W2FycmF5Lmxlbmd0aCAtIDFdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBzZWNvbmRMYXN0KGFycmF5KSB7IHJldHVybiBhcnJheVthcnJheS5sZW5ndGggLSAyXTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gdGhpcmRMYXN0KGFycmF5KSB7IHJldHVybiBhcnJheVthcnJheS5sZW5ndGggLSAzXTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gZm91cnRoTGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gNF07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpZnRoTGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gNV07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIHNpeHRoTGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gNl07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldmVudGhMYXN0KGFycmF5KSB7IHJldHVybiBhcnJheVthcnJheS5sZW5ndGggLSA3XTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gZWlnaHRoTGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gOF07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIG5pbnRoTGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gOV07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGxhc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5W2FycmF5Lmxlbmd0aCAtIDFdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBoZWFkKGFycmF5KSB7IHJldHVybiBhcnJheS5zbGljZSgwLCAxKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gdGFpbChhcnJheSkgeyByZXR1cm4gYXJyYXkuc2xpY2UoMSk7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGJhY2soYXJyYXkpIHsgcmV0dXJuIGFycmF5LnNsaWNlKGFycmF5Lmxlbmd0aCAtIDEpOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBmcm9udChhcnJheSkgeyByZXR1cm4gYXJyYXkuc2xpY2UoMCwgTWF0aC5tYXgoMSwgYXJyYXkubGVuZ3RoIC0gMSkpOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBwdXNoKGFycmF5QSwgYXJyYXlCKSB7IEFycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KGFycmF5QSwgYXJyYXlCKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gdW5zaGlmdChhcnJheUEsIGFycmF5QikgeyBBcnJheS5wcm90b3R5cGUudW5zaGlmdC5hcHBseShhcnJheUEsIGFycmF5Qik7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbmNhdChhcnJheUEsIGVsZW1lbnRPckFycmF5Mikge1xuICBjb25zdCBhcnJheUIgPSAoZWxlbWVudE9yQXJyYXkyIGluc3RhbmNlb2YgQXJyYXkpID9cbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudE9yQXJyYXkyIDpcbiAgICAgICAgICAgICAgICAgICAgIFsgZWxlbWVudE9yQXJyYXkyIF07XG4gIFxuICBwdXNoKGFycmF5QSwgYXJyYXlCKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyKGFycmF5KSB7XG4gIGNvbnN0IHN0YXJ0ID0gMDtcbiAgXG4gIHJldHVybiBhcnJheS5zcGxpY2Uoc3RhcnQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29weShhcnJheUEsIGFycmF5Qikge1xuICBjb25zdCBzdGFydCA9IDAsXG4gICAgICAgIGRlbGV0ZUNvdW50ID0gYXJyYXlCLmxlbmd0aDsgIC8vL1xuICBcbiAgc3BsaWNlKGFycmF5QSwgc3RhcnQsIGRlbGV0ZUNvdW50LCBhcnJheUIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2UoYXJyYXlBLCBhcnJheUIpIHsgQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkoYXJyYXlBLCBhcnJheUIpOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBtYXRjaChhcnJheUEsIGFycmF5QiwgY2FsbGJhY2spIHtcbiAgbGV0IG1hdGNoZXMgPSBmYWxzZTtcblxuICBjb25zdCBhcnJheUFMZW5ndGggPSBhcnJheUEubGVuZ3RoLFxuICAgICAgICBhcnJheUJMZW5ndGggPSBhcnJheUIubGVuZ3RoO1xuXG4gIGlmIChhcnJheUFMZW5ndGggPT09IGFycmF5Qkxlbmd0aCkge1xuICAgIG1hdGNoZXMgPSBhcnJheUEuZXZlcnkoKGVsZW1lbnRBLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgZWxlbWVudEIgPSBhcnJheUJbaW5kZXhdLFxuICAgICAgICAgICAgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudEEsIGVsZW1lbnRCLCBpbmRleCk7XG5cbiAgICAgIGlmIChwYXNzZWQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gbWF0Y2hlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbmQoYXJyYXksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGVsZW1lbnRzID0gW107XG5cbiAgZm9yd2FyZHNGb3JFYWNoKGFycmF5LCAoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBwYXNzZWQgPSBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAocGFzc2VkKSB7XG4gICAgICBlbGVtZW50cy5wdXNoKGVsZW1lbnQpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGVsZW1lbnRzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVwbGFjZShhcnJheSwgZWxlbWVudCwgY2FsbGJhY2spIHtcbiAgbGV0IHN0YXJ0O1xuICBcbiAgY29uc3QgZm91bmQgPSBhcnJheS5zb21lKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmIChwYXNzZWQpIHtcbiAgICAgIHN0YXJ0ID0gaW5kZXg7ICAvLy9cbiAgICAgIFxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcbiAgXG4gIGlmIChmb3VuZCkge1xuICAgIGNvbnN0IGRlbGV0ZUNvdW50ID0gMTtcblxuICAgIGFycmF5LnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQsIGVsZW1lbnQpO1xuICB9XG5cbiAgcmV0dXJuIGZvdW5kO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3BsaWNlKGFycmF5QSwgc3RhcnQsIGRlbGV0ZUNvdW50ID0gSW5maW5pdHksIGFycmF5QiA9IFtdKSB7XG4gIGNvbnN0IGFyZ3MgPSBbIHN0YXJ0LCBkZWxldGVDb3VudCwgLi4uYXJyYXlCIF0sXG4gICAgICAgIGRlbGV0ZWRFbGVtZW50cyA9IEFycmF5LnByb3RvdHlwZS5zcGxpY2UuYXBwbHkoYXJyYXlBLCBhcmdzKTtcblxuICByZXR1cm4gZGVsZXRlZEVsZW1lbnRzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmlsdGVyKGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBkZWxldGVkRWxlbWVudHMgPSBbXTtcbiAgXG4gIGJhY2t3YXJkc0ZvckVhY2goYXJyYXksIChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmICghcGFzc2VkKSB7XG4gICAgICBjb25zdCBzdGFydCA9IGluZGV4LCAgLy8vXG4gICAgICAgICAgICBkZWxldGVDb3VudCA9IDEsXG4gICAgICAgICAgICBkZWxldGVkRWxlbWVudHMgPSBhcnJheS5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50KSxcbiAgICAgICAgICAgIGZpcnN0RGVsZXRlZEVsZW1lbnQgPSBmaXJzdChkZWxldGVkRWxlbWVudHMpO1xuICAgICAgXG4gICAgICBkZWxldGVkRWxlbWVudHMudW5zaGlmdChmaXJzdERlbGV0ZWRFbGVtZW50KTsgIC8vL1xuICAgIH1cbiAgfSk7XG4gIFxuICByZXR1cm4gZGVsZXRlZEVsZW1lbnRzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJ1bmUoYXJyYXksIGNhbGxiYWNrKSB7XG4gIGxldCBkZWxldGVkRWxlbWVudCA9IHVuZGVmaW5lZDtcbiAgXG4gIGFycmF5LnNvbWUoKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKCFwYXNzZWQpIHtcbiAgICAgIGNvbnN0IHN0YXJ0ID0gaW5kZXgsICAvLy9cbiAgICAgICAgICAgIGRlbGV0ZUNvdW50ID0gMSxcbiAgICAgICAgICAgIGRlbGV0ZWRFbGVtZW50cyA9IGFycmF5LnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQpLFxuICAgICAgICAgICAgZmlyc3REZWxldGVkRWxlbWVudCA9IGZpcnN0KGRlbGV0ZWRFbGVtZW50cyk7XG4gICAgICBcbiAgICAgIGRlbGV0ZWRFbGVtZW50ID0gZmlyc3REZWxldGVkRWxlbWVudDsgIC8vL1xuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuICBcbiAgcmV0dXJuIGRlbGV0ZWRFbGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXh0cmFjdChhcnJheSwgY2FsbGJhY2spIHtcbiAgbGV0IGRlbGV0ZWRFbGVtZW50ID0gdW5kZWZpbmVkO1xuXG4gIGFycmF5LnNvbWUoKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgY29uc3Qgc3RhcnQgPSBpbmRleCwgIC8vL1xuICAgICAgICAgICAgZGVsZXRlQ291bnQgPSAxLFxuICAgICAgICAgICAgZGVsZXRlZEVsZW1lbnRzID0gYXJyYXkuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCksXG4gICAgICAgICAgICBmaXJzdERlbGV0ZWRFbGVtZW50ID0gZmlyc3QoZGVsZXRlZEVsZW1lbnRzKTtcblxuICAgICAgZGVsZXRlZEVsZW1lbnQgPSBmaXJzdERlbGV0ZWRFbGVtZW50OyAgLy8vXG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGRlbGV0ZWRFbGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGF0Y2goYXJyYXksIGVsZW1lbnQsIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGZvdW5kID0gYXJyYXkuc29tZSgoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBwYXNzZWQgPSBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAocGFzc2VkKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG5cbiAgaWYgKGZvdW5kKSB7XG4gICAgYXJyYXkucHVzaChlbGVtZW50KTtcbiAgfVxuXG4gIHJldHVybiBmb3VuZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXByZXNzKGFycmF5LCBjYWxsYmFjaykge1xuICBsZXQgaW5kZXgxID0gMCxcbiAgICAgIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICB3aGlsZSAoaW5kZXgxIDwgbGVuZ3RoKSB7XG4gICAgY29uc3QgZWxlbWVudEIgPSBhcnJheVtpbmRleDFdO1xuXG4gICAgZm9yIChsZXQgaW5kZXgyID0gbGVuZ3RoIC0gMTsgaW5kZXgyID4gaW5kZXgxOyBpbmRleDItLSkge1xuICAgICAgY29uc3QgZWxlbWVudEEgPSBhcnJheVtpbmRleDJdLFxuICAgICAgICAgICAgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudEEsIGVsZW1lbnRCKTtcblxuICAgICAgaWYgKHBhc3NlZCkge1xuICAgICAgICBjb25zdCBzdGFydCA9IGluZGV4MiwgLy8vXG4gICAgICAgICAgICAgIGRlbGV0ZUNvdW50ID0gMTtcblxuICAgICAgICBhcnJheS5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpbmRleDErKztcblxuICAgIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tYmluZShhcnJheUEsIGFycmF5QiwgY2FsbGJhY2spIHtcbiAgY29uc3QgYXJyYXkgPSBbXG4gICAgLi4uYXJyYXlBLFxuICAgIC4uLmFycmF5QlxuICBdO1xuXG4gIGNvbXByZXNzKGFycmF5LCBjYWxsYmFjayk7XG5cbiAgcmV0dXJuIGFycmF5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXVnbWVudChhcnJheUEsIGFycmF5QiwgY2FsbGJhY2spIHtcbiAgYXJyYXlCLmZvckVhY2goKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgYXJyYXlBLnB1c2goZWxlbWVudCk7XG4gICAgfVxuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlcGFyYXRlKGFycmF5LCBhcnJheUEsIGFycmF5QiwgY2FsbGJhY2spIHtcbiAgYXJyYXkuZm9yRWFjaCgoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBwYXNzZWQgPSBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG5cbiAgICBwYXNzZWQgP1xuICAgICAgYXJyYXlBLnB1c2goZWxlbWVudCkgOlxuICAgICAgICBhcnJheUIucHVzaChlbGVtZW50KTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3J3YXJkc0ZpbmQoYXJyYXksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhcnJheUxlbmd0aDsgaW5kZXgrKykge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF0sXG4gICAgICAgICAgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYmFja3dhcmRzRmluZChhcnJheSwgY2FsbGJhY2spIHtcbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSBhcnJheUxlbmd0aCAtIDE7IGluZGV4ID49IDA7IGluZGV4LS0pIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdLFxuICAgICAgICAgIHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmIChwYXNzZWQpIHtcbiAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcndhcmRzU29tZShhcnJheSwgY2FsbGJhY2spIHtcbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGFycmF5TGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XSxcbiAgICAgICAgICBwYXNzZWQgPSBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG4gICAgXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYmFja3dhcmRzU29tZShhcnJheSwgY2FsbGJhY2spIHtcbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSBhcnJheUxlbmd0aCAtIDE7IGluZGV4ID49IDA7IGluZGV4LS0pIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdLFxuICAgICAgICAgIHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmIChwYXNzZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcndhcmRzRXZlcnkoYXJyYXksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhcnJheUxlbmd0aDsgaW5kZXgrKykge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF0sXG4gICAgICAgICAgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKCFwYXNzZWQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJhY2t3YXJkc0V2ZXJ5KGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IGFycmF5TGVuZ3RoIC0gMTsgaW5kZXggPj0gMDsgaW5kZXgtLSkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF0sXG4gICAgICAgICAgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKCFwYXNzZWQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcndhcmRzUmVkdWNlKGFycmF5LCBjYWxsYmFjaywgaW5pdGlhbFZhbHVlKSB7XG4gIGxldCB2YWx1ZSA9IGluaXRpYWxWYWx1ZTsgLy8vXG5cbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGFycmF5TGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XTtcblxuICAgIHZhbHVlID0gY2FsbGJhY2sodmFsdWUsIGVsZW1lbnQsIGluZGV4KTtcbiAgfVxuXG4gIHJldHVybiB2YWx1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJhY2t3YXJkc1JlZHVjZShhcnJheSwgY2FsbGJhY2ssIGluaXRpYWxWYWx1ZSkge1xuICBsZXQgdmFsdWUgPSBpbml0aWFsVmFsdWU7IC8vL1xuXG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gYXJyYXlMZW5ndGggLSAxOyBpbmRleCA+PSAwOyBpbmRleC0tKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XTtcblxuICAgIHZhbHVlID0gY2FsbGJhY2sodmFsdWUsIGVsZW1lbnQsIGluZGV4KTtcbiAgfVxuXG4gIHJldHVybiB2YWx1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcndhcmRzRm9yRWFjaChhcnJheSwgY2FsbGJhY2spIHtcbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGFycmF5TGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XTtcblxuICAgIGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYmFja3dhcmRzRm9yRWFjaChhcnJheSwgY2FsbGJhY2spIHtcbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSBhcnJheUxlbmd0aCAtIDE7IGluZGV4ID49IDA7IGluZGV4LS0pIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdO1xuXG4gICAgY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZmlyc3QsXG4gIHNlY29uZCxcbiAgdGhpcmQsXG4gIGZvdXJ0aCxcbiAgZmlmdGgsXG4gIGZpZnRoTGFzdCxcbiAgZm91cnRoTGFzdCxcbiAgdGhpcmRMYXN0LFxuICBzZWNvbmRMYXN0LFxuICBmaXJzdExhc3QsXG4gIGxhc3QsXG4gIGhlYWQsXG4gIHRhaWwsXG4gIGJhY2ssXG4gIGZyb250LFxuICBwdXNoLFxuICB1bnNoaWZ0LFxuICBjb25jYXQsXG4gIGNsZWFyLFxuICBjb3B5LFxuICBtZXJnZSxcbiAgbWF0Y2gsXG4gIGZpbmQsXG4gIHJlcGxhY2UsXG4gIHNwbGljZSxcbiAgZmlsdGVyLFxuICBwcnVuZSxcbiAgZXh0cmFjdCxcbiAgcGF0Y2gsXG4gIGNvbXByZXNzLFxuICBjb21iaW5lLFxuICBhdWdtZW50LFxuICBzZXBhcmF0ZSxcbiAgZm9yd2FyZHNGaW5kLFxuICBiYWNrd2FyZHNGaW5kLFxuICBmb3J3YXJkc1NvbWUsXG4gIGJhY2t3YXJkc1NvbWUsXG4gIGZvcndhcmRzRXZlcnksXG4gIGJhY2t3YXJkc0V2ZXJ5LFxuICBmb3J3YXJkc1JlZHVjZSxcbiAgYmFja3dhcmRzUmVkdWNlLFxuICBmb3J3YXJkc0ZvckVhY2gsXG4gIGJhY2t3YXJkc0ZvckVhY2hcbn07XG4iXSwibmFtZXMiOlsiYXVnbWVudCIsImJhY2siLCJiYWNrd2FyZHNFdmVyeSIsImJhY2t3YXJkc0ZpbmQiLCJiYWNrd2FyZHNGb3JFYWNoIiwiYmFja3dhcmRzUmVkdWNlIiwiYmFja3dhcmRzU29tZSIsImNsZWFyIiwiY29tYmluZSIsImNvbXByZXNzIiwiY29uY2F0IiwiY29weSIsImVpZ2h0aCIsImVpZ2h0aExhc3QiLCJleHRyYWN0IiwiZmlmdGgiLCJmaWZ0aExhc3QiLCJmaWx0ZXIiLCJmaW5kIiwiZmlyc3QiLCJmaXJzdExhc3QiLCJmb3J3YXJkc0V2ZXJ5IiwiZm9yd2FyZHNGaW5kIiwiZm9yd2FyZHNGb3JFYWNoIiwiZm9yd2FyZHNSZWR1Y2UiLCJmb3J3YXJkc1NvbWUiLCJmb3VydGgiLCJmb3VydGhMYXN0IiwiZnJvbnQiLCJoZWFkIiwibGFzdCIsIm1hdGNoIiwibWVyZ2UiLCJuaW50aCIsIm5pbnRoTGFzdCIsInBhdGNoIiwicHJ1bmUiLCJwdXNoIiwicmVwbGFjZSIsInNlY29uZCIsInNlY29uZExhc3QiLCJzZXBhcmF0ZSIsInNldmVudGgiLCJzZXZlbnRoTGFzdCIsInNpeHRoIiwic2l4dGhMYXN0Iiwic3BsaWNlIiwidGFpbCIsInRlbnRoIiwidGhpcmQiLCJ0aGlyZExhc3QiLCJ1bnNoaWZ0IiwiYXJyYXkiLCJsZW5ndGgiLCJzbGljZSIsIk1hdGgiLCJtYXgiLCJhcnJheUEiLCJhcnJheUIiLCJBcnJheSIsInByb3RvdHlwZSIsImFwcGx5IiwiZWxlbWVudE9yQXJyYXkyIiwic3RhcnQiLCJkZWxldGVDb3VudCIsImNhbGxiYWNrIiwibWF0Y2hlcyIsImFycmF5QUxlbmd0aCIsImFycmF5Qkxlbmd0aCIsImV2ZXJ5IiwiZWxlbWVudEEiLCJpbmRleCIsImVsZW1lbnRCIiwicGFzc2VkIiwiZWxlbWVudHMiLCJlbGVtZW50IiwiZm91bmQiLCJzb21lIiwiSW5maW5pdHkiLCJhcmdzIiwiZGVsZXRlZEVsZW1lbnRzIiwiZmlyc3REZWxldGVkRWxlbWVudCIsImRlbGV0ZWRFbGVtZW50IiwidW5kZWZpbmVkIiwiaW5kZXgxIiwiaW5kZXgyIiwiZm9yRWFjaCIsImFycmF5TGVuZ3RoIiwiaW5pdGlhbFZhbHVlIiwidmFsdWUiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUE4UGdCQSxPQUFPO2VBQVBBOztJQWhOQUMsSUFBSTtlQUFK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
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
    correlate: function() {
        return correlate;
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
    resolve: function() {
        return resolve;
    },
    reverse: function() {
        return reverse;
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
function correlate(arrayA, arrayB, callback) {
    arrayB = _to_consumable_array(arrayB);
    var correlates = arrayA.every(function(elementA) {
        var elementB = extract(arrayB, function(elementB) {
            var result = callback(elementA, elementB);
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
function resolve(arrayA, arrayB, callback) {
    var _loop = function() {
        var arrayALength = arrayA.length;
        if (arrayALength === 0) {
            return "break";
        }
        var resolved = false;
        arrayA.forEach(function(elementA) {
            var passed = callback(elementA);
            if (passed) {
                var elementB = elementA; ///
                arrayB.push(elementB);
                resolved = true;
            }
        });
        if (!resolved) {
            return "break";
        }
        filter(arrayA, function(elementA) {
            var arrayBIncludesElementA = arrayB.includes(elementA);
            if (!arrayBIncludesElementA) {
                return true;
            }
        });
    };
    var resolved;
    arrayA = _to_consumable_array(arrayA);
    for(;;){
        var _ret = _loop();
        if (_ret === "break") break;
    }
    var arrayALength = arrayA.length;
    resolved = arrayALength === 0;
    return resolved;
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
function reverse(array) {
    array = _to_consumable_array(array).reverse();
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
    correlate: correlate,
    resolve: resolve,
    find: find,
    replace: replace,
    splice: splice,
    filter: filter,
    prune: prune,
    extract: extract,
    patch: patch,
    compress: compress,
    combine: combine,
    reverse: reverse,
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvYXJyYXkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBmaXJzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbMF07fVxuXG5leHBvcnQgZnVuY3Rpb24gc2Vjb25kKGFycmF5KSB7IHJldHVybiBhcnJheVsxXTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gdGhpcmQoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzJdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3VydGgoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzNdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBmaWZ0aChhcnJheSkgeyByZXR1cm4gYXJyYXlbNF07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIHNpeHRoKGFycmF5KSB7IHJldHVybiBhcnJheVs1XTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gc2V2ZW50aChhcnJheSkgeyByZXR1cm4gYXJyYXlbNl07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGVpZ2h0aChhcnJheSkgeyByZXR1cm4gYXJyYXlbN107IH1cblxuZXhwb3J0IGZ1bmN0aW9uIG5pbnRoKGFycmF5KSB7IHJldHVybiBhcnJheVs4XTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gdGVudGgoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzldOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBmaXJzdExhc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5W2FycmF5Lmxlbmd0aCAtIDFdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBzZWNvbmRMYXN0KGFycmF5KSB7IHJldHVybiBhcnJheVthcnJheS5sZW5ndGggLSAyXTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gdGhpcmRMYXN0KGFycmF5KSB7IHJldHVybiBhcnJheVthcnJheS5sZW5ndGggLSAzXTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gZm91cnRoTGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gNF07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpZnRoTGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gNV07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIHNpeHRoTGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gNl07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldmVudGhMYXN0KGFycmF5KSB7IHJldHVybiBhcnJheVthcnJheS5sZW5ndGggLSA3XTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gZWlnaHRoTGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gOF07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIG5pbnRoTGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gOV07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGxhc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5W2FycmF5Lmxlbmd0aCAtIDFdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBoZWFkKGFycmF5KSB7IHJldHVybiBhcnJheS5zbGljZSgwLCAxKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gdGFpbChhcnJheSkgeyByZXR1cm4gYXJyYXkuc2xpY2UoMSk7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGJhY2soYXJyYXkpIHsgcmV0dXJuIGFycmF5LnNsaWNlKGFycmF5Lmxlbmd0aCAtIDEpOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBmcm9udChhcnJheSkgeyByZXR1cm4gYXJyYXkuc2xpY2UoMCwgTWF0aC5tYXgoMSwgYXJyYXkubGVuZ3RoIC0gMSkpOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBwdXNoKGFycmF5QSwgYXJyYXlCKSB7IEFycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KGFycmF5QSwgYXJyYXlCKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gdW5zaGlmdChhcnJheUEsIGFycmF5QikgeyBBcnJheS5wcm90b3R5cGUudW5zaGlmdC5hcHBseShhcnJheUEsIGFycmF5Qik7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbmNhdChhcnJheUEsIGVsZW1lbnRPckFycmF5Mikge1xuICBjb25zdCBhcnJheUIgPSAoZWxlbWVudE9yQXJyYXkyIGluc3RhbmNlb2YgQXJyYXkpID9cbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudE9yQXJyYXkyIDpcbiAgICAgICAgICAgICAgICAgICAgIFsgZWxlbWVudE9yQXJyYXkyIF07XG4gIFxuICBwdXNoKGFycmF5QSwgYXJyYXlCKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyKGFycmF5KSB7XG4gIGNvbnN0IHN0YXJ0ID0gMDtcbiAgXG4gIHJldHVybiBhcnJheS5zcGxpY2Uoc3RhcnQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29weShhcnJheUEsIGFycmF5Qikge1xuICBjb25zdCBzdGFydCA9IDAsXG4gICAgICAgIGRlbGV0ZUNvdW50ID0gYXJyYXlCLmxlbmd0aDsgIC8vL1xuICBcbiAgc3BsaWNlKGFycmF5QSwgc3RhcnQsIGRlbGV0ZUNvdW50LCBhcnJheUIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2UoYXJyYXlBLCBhcnJheUIpIHsgQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkoYXJyYXlBLCBhcnJheUIpOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBtYXRjaChhcnJheUEsIGFycmF5QiwgY2FsbGJhY2spIHtcbiAgbGV0IG1hdGNoZXMgPSBmYWxzZTtcblxuICBjb25zdCBhcnJheUFMZW5ndGggPSBhcnJheUEubGVuZ3RoLFxuICAgICAgICBhcnJheUJMZW5ndGggPSBhcnJheUIubGVuZ3RoO1xuXG4gIGlmIChhcnJheUFMZW5ndGggPT09IGFycmF5Qkxlbmd0aCkge1xuICAgIG1hdGNoZXMgPSBhcnJheUEuZXZlcnkoKGVsZW1lbnRBLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgZWxlbWVudEIgPSBhcnJheUJbaW5kZXhdLFxuICAgICAgICAgICAgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudEEsIGVsZW1lbnRCLCBpbmRleCk7XG5cbiAgICAgIGlmIChwYXNzZWQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gbWF0Y2hlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvcnJlbGF0ZShhcnJheUEsIGFycmF5QiwgY2FsbGJhY2spIHtcbiAgYXJyYXlCID0gWyAgLy8vXG4gICAgLi4uYXJyYXlCXG4gIF07XG5cbiAgY29uc3QgY29ycmVsYXRlcyA9IGFycmF5QS5ldmVyeSgoZWxlbWVudEEpID0+IHtcbiAgICBjb25zdCBlbGVtZW50QiA9IGV4dHJhY3QoYXJyYXlCLCAoZWxlbWVudEIpID0+IHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGNhbGxiYWNrKGVsZW1lbnRBLCBlbGVtZW50Qik7XG5cbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSkgfHwgbnVsbDtcblxuICAgIGlmIChlbGVtZW50QiAhPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gY29ycmVsYXRlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmUoYXJyYXlBLCBhcnJheUIsIGNhbGxiYWNrKSB7XG4gIGxldCByZXNvbHZlZDtcblxuICBhcnJheUEgPSBbICAvLy9cbiAgICAuLi5hcnJheUFcbiAgXTtcblxuICBmb3IgKDs7KSB7XG4gICAgY29uc3QgYXJyYXlBTGVuZ3RoID0gYXJyYXlBLmxlbmd0aDtcblxuICAgIGlmIChhcnJheUFMZW5ndGggPT09IDApIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGxldCByZXNvbHZlZCA9IGZhbHNlO1xuXG4gICAgYXJyYXlBLmZvckVhY2goKGVsZW1lbnRBKSA9PiB7XG4gICAgICBjb25zdCBwYXNzZWQgPSBjYWxsYmFjayhlbGVtZW50QSk7XG5cbiAgICAgIGlmIChwYXNzZWQpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudEIgPSBlbGVtZW50QTsgIC8vL1xuXG4gICAgICAgIGFycmF5Qi5wdXNoKGVsZW1lbnRCKTtcblxuICAgICAgICByZXNvbHZlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoIXJlc29sdmVkKSB7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBmaWx0ZXIoYXJyYXlBLCAoZWxlbWVudEEpID0+IHtcbiAgICAgIGNvbnN0IGFycmF5QkluY2x1ZGVzRWxlbWVudEEgPSBhcnJheUIuaW5jbHVkZXMoZWxlbWVudEEpO1xuXG4gICAgICBpZiAoIWFycmF5QkluY2x1ZGVzRWxlbWVudEEpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBjb25zdCBhcnJheUFMZW5ndGggPSBhcnJheUEubGVuZ3RoO1xuXG4gIHJlc29sdmVkID0gKGFycmF5QUxlbmd0aCA9PT0gMCk7XG5cbiAgcmV0dXJuIHJlc29sdmVkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmluZChhcnJheSwgY2FsbGJhY2spIHtcbiAgY29uc3QgZWxlbWVudHMgPSBbXTtcblxuICBmb3J3YXJkc0ZvckVhY2goYXJyYXksIChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmIChwYXNzZWQpIHtcbiAgICAgIGVsZW1lbnRzLnB1c2goZWxlbWVudCk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gZWxlbWVudHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXBsYWNlKGFycmF5LCBlbGVtZW50LCBjYWxsYmFjaykge1xuICBsZXQgc3RhcnQ7XG4gIFxuICBjb25zdCBmb3VuZCA9IGFycmF5LnNvbWUoKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgc3RhcnQgPSBpbmRleDsgIC8vL1xuICAgICAgXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuICBcbiAgaWYgKGZvdW5kKSB7XG4gICAgY29uc3QgZGVsZXRlQ291bnQgPSAxO1xuXG4gICAgYXJyYXkuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCwgZWxlbWVudCk7XG4gIH1cblxuICByZXR1cm4gZm91bmQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzcGxpY2UoYXJyYXlBLCBzdGFydCwgZGVsZXRlQ291bnQgPSBJbmZpbml0eSwgYXJyYXlCID0gW10pIHtcbiAgY29uc3QgYXJncyA9IFsgc3RhcnQsIGRlbGV0ZUNvdW50LCAuLi5hcnJheUIgXSxcbiAgICAgICAgZGVsZXRlZEVsZW1lbnRzID0gQXJyYXkucHJvdG90eXBlLnNwbGljZS5hcHBseShhcnJheUEsIGFyZ3MpO1xuXG4gIHJldHVybiBkZWxldGVkRWxlbWVudHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaWx0ZXIoYXJyYXksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGRlbGV0ZWRFbGVtZW50cyA9IFtdO1xuICBcbiAgYmFja3dhcmRzRm9yRWFjaChhcnJheSwgKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKCFwYXNzZWQpIHtcbiAgICAgIGNvbnN0IHN0YXJ0ID0gaW5kZXgsICAvLy9cbiAgICAgICAgICAgIGRlbGV0ZUNvdW50ID0gMSxcbiAgICAgICAgICAgIGRlbGV0ZWRFbGVtZW50cyA9IGFycmF5LnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQpLFxuICAgICAgICAgICAgZmlyc3REZWxldGVkRWxlbWVudCA9IGZpcnN0KGRlbGV0ZWRFbGVtZW50cyk7XG4gICAgICBcbiAgICAgIGRlbGV0ZWRFbGVtZW50cy51bnNoaWZ0KGZpcnN0RGVsZXRlZEVsZW1lbnQpOyAgLy8vXG4gICAgfVxuICB9KTtcbiAgXG4gIHJldHVybiBkZWxldGVkRWxlbWVudHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcnVuZShhcnJheSwgY2FsbGJhY2spIHtcbiAgbGV0IGRlbGV0ZWRFbGVtZW50ID0gdW5kZWZpbmVkO1xuICBcbiAgYXJyYXkuc29tZSgoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBwYXNzZWQgPSBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAoIXBhc3NlZCkge1xuICAgICAgY29uc3Qgc3RhcnQgPSBpbmRleCwgIC8vL1xuICAgICAgICAgICAgZGVsZXRlQ291bnQgPSAxLFxuICAgICAgICAgICAgZGVsZXRlZEVsZW1lbnRzID0gYXJyYXkuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCksXG4gICAgICAgICAgICBmaXJzdERlbGV0ZWRFbGVtZW50ID0gZmlyc3QoZGVsZXRlZEVsZW1lbnRzKTtcbiAgICAgIFxuICAgICAgZGVsZXRlZEVsZW1lbnQgPSBmaXJzdERlbGV0ZWRFbGVtZW50OyAgLy8vXG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG4gIFxuICByZXR1cm4gZGVsZXRlZEVsZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBleHRyYWN0KGFycmF5LCBjYWxsYmFjaykge1xuICBsZXQgZGVsZXRlZEVsZW1lbnQgPSB1bmRlZmluZWQ7XG5cbiAgYXJyYXkuc29tZSgoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBwYXNzZWQgPSBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAocGFzc2VkKSB7XG4gICAgICBjb25zdCBzdGFydCA9IGluZGV4LCAgLy8vXG4gICAgICAgICAgICBkZWxldGVDb3VudCA9IDEsXG4gICAgICAgICAgICBkZWxldGVkRWxlbWVudHMgPSBhcnJheS5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50KSxcbiAgICAgICAgICAgIGZpcnN0RGVsZXRlZEVsZW1lbnQgPSBmaXJzdChkZWxldGVkRWxlbWVudHMpO1xuXG4gICAgICBkZWxldGVkRWxlbWVudCA9IGZpcnN0RGVsZXRlZEVsZW1lbnQ7ICAvLy9cblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gZGVsZXRlZEVsZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXRjaChhcnJheSwgZWxlbWVudCwgY2FsbGJhY2spIHtcbiAgY29uc3QgZm91bmQgPSBhcnJheS5zb21lKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmIChwYXNzZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cblxuICBpZiAoZm91bmQpIHtcbiAgICBhcnJheS5wdXNoKGVsZW1lbnQpO1xuICB9XG5cbiAgcmV0dXJuIGZvdW5kO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tcHJlc3MoYXJyYXksIGNhbGxiYWNrKSB7XG4gIGxldCBpbmRleDEgPSAwLFxuICAgICAgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIHdoaWxlIChpbmRleDEgPCBsZW5ndGgpIHtcbiAgICBjb25zdCBlbGVtZW50QiA9IGFycmF5W2luZGV4MV07XG5cbiAgICBmb3IgKGxldCBpbmRleDIgPSBsZW5ndGggLSAxOyBpbmRleDIgPiBpbmRleDE7IGluZGV4Mi0tKSB7XG4gICAgICBjb25zdCBlbGVtZW50QSA9IGFycmF5W2luZGV4Ml0sXG4gICAgICAgICAgICBwYXNzZWQgPSBjYWxsYmFjayhlbGVtZW50QSwgZWxlbWVudEIpO1xuXG4gICAgICBpZiAocGFzc2VkKSB7XG4gICAgICAgIGNvbnN0IHN0YXJ0ID0gaW5kZXgyLCAvLy9cbiAgICAgICAgICAgICAgZGVsZXRlQ291bnQgPSAxO1xuXG4gICAgICAgIGFycmF5LnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGluZGV4MSsrO1xuXG4gICAgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21iaW5lKGFycmF5QSwgYXJyYXlCLCBjYWxsYmFjaykge1xuICBjb25zdCBhcnJheSA9IFtcbiAgICAuLi5hcnJheUEsXG4gICAgLi4uYXJyYXlCXG4gIF07XG5cbiAgY29tcHJlc3MoYXJyYXksIGNhbGxiYWNrKTtcblxuICByZXR1cm4gYXJyYXk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXZlcnNlKGFycmF5KSB7XG4gIGFycmF5ID0gWyAvLy9cbiAgICAuLi5hcnJheVxuICBdLnJldmVyc2UoKTtcblxuICByZXR1cm4gYXJyYXk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhdWdtZW50KGFycmF5QSwgYXJyYXlCLCBjYWxsYmFjaykge1xuICBhcnJheUIuZm9yRWFjaCgoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBwYXNzZWQgPSBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAocGFzc2VkKSB7XG4gICAgICBhcnJheUEucHVzaChlbGVtZW50KTtcbiAgICB9XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2VwYXJhdGUoYXJyYXksIGFycmF5QSwgYXJyYXlCLCBjYWxsYmFjaykge1xuICBhcnJheS5mb3JFYWNoKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcblxuICAgIHBhc3NlZCA/XG4gICAgICBhcnJheUEucHVzaChlbGVtZW50KSA6XG4gICAgICAgIGFycmF5Qi5wdXNoKGVsZW1lbnQpO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcndhcmRzRmluZChhcnJheSwgY2FsbGJhY2spIHtcbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGFycmF5TGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XSxcbiAgICAgICAgICBwYXNzZWQgPSBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAocGFzc2VkKSB7XG4gICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBiYWNrd2FyZHNGaW5kKGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IGFycmF5TGVuZ3RoIC0gMTsgaW5kZXggPj0gMDsgaW5kZXgtLSkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF0sXG4gICAgICAgICAgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9yd2FyZHNTb21lKGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYXJyYXlMZW5ndGg7IGluZGV4KyspIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdLFxuICAgICAgICAgIHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcbiAgICBcbiAgICBpZiAocGFzc2VkKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBiYWNrd2FyZHNTb21lKGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IGFycmF5TGVuZ3RoIC0gMTsgaW5kZXggPj0gMDsgaW5kZXgtLSkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF0sXG4gICAgICAgICAgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9yd2FyZHNFdmVyeShhcnJheSwgY2FsbGJhY2spIHtcbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGFycmF5TGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XSxcbiAgICAgICAgICBwYXNzZWQgPSBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAoIXBhc3NlZCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYmFja3dhcmRzRXZlcnkoYXJyYXksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gYXJyYXlMZW5ndGggLSAxOyBpbmRleCA+PSAwOyBpbmRleC0tKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XSxcbiAgICAgICAgICBwYXNzZWQgPSBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAoIXBhc3NlZCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9yd2FyZHNSZWR1Y2UoYXJyYXksIGNhbGxiYWNrLCBpbml0aWFsVmFsdWUpIHtcbiAgbGV0IHZhbHVlID0gaW5pdGlhbFZhbHVlOyAvLy9cblxuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYXJyYXlMZW5ndGg7IGluZGV4KyspIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdO1xuXG4gICAgdmFsdWUgPSBjYWxsYmFjayh2YWx1ZSwgZWxlbWVudCwgaW5kZXgpO1xuICB9XG5cbiAgcmV0dXJuIHZhbHVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYmFja3dhcmRzUmVkdWNlKGFycmF5LCBjYWxsYmFjaywgaW5pdGlhbFZhbHVlKSB7XG4gIGxldCB2YWx1ZSA9IGluaXRpYWxWYWx1ZTsgLy8vXG5cbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSBhcnJheUxlbmd0aCAtIDE7IGluZGV4ID49IDA7IGluZGV4LS0pIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdO1xuXG4gICAgdmFsdWUgPSBjYWxsYmFjayh2YWx1ZSwgZWxlbWVudCwgaW5kZXgpO1xuICB9XG5cbiAgcmV0dXJuIHZhbHVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9yd2FyZHNGb3JFYWNoKGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYXJyYXlMZW5ndGg7IGluZGV4KyspIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdO1xuXG4gICAgY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBiYWNrd2FyZHNGb3JFYWNoKGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IGFycmF5TGVuZ3RoIC0gMTsgaW5kZXggPj0gMDsgaW5kZXgtLSkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF07XG5cbiAgICBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBmaXJzdCxcbiAgc2Vjb25kLFxuICB0aGlyZCxcbiAgZm91cnRoLFxuICBmaWZ0aCxcbiAgc2l4dGgsXG4gIHNldmVudGgsXG4gIGVpZ2h0aCxcbiAgbmludGgsXG4gIGZpcnN0TGFzdCxcbiAgc2Vjb25kTGFzdCxcbiAgdGhpcmRMYXN0LFxuICBmb3VydGhMYXN0LFxuICBmaWZ0aExhc3QsXG4gIHNpeHRoTGFzdCxcbiAgc2V2ZW50aExhc3QsXG4gIGVpZ2h0aExhc3QsXG4gIG5pbnRoTGFzdCxcbiAgbGFzdCxcbiAgaGVhZCxcbiAgdGFpbCxcbiAgYmFjayxcbiAgZnJvbnQsXG4gIHB1c2gsXG4gIHVuc2hpZnQsXG4gIGNvbmNhdCxcbiAgY2xlYXIsXG4gIGNvcHksXG4gIG1lcmdlLFxuICBtYXRjaCxcbiAgY29ycmVsYXRlLFxuICByZXNvbHZlLFxuICBmaW5kLFxuICByZXBsYWNlLFxuICBzcGxpY2UsXG4gIGZpbHRlcixcbiAgcHJ1bmUsXG4gIGV4dHJhY3QsXG4gIHBhdGNoLFxuICBjb21wcmVzcyxcbiAgY29tYmluZSxcbiAgcmV2ZXJzZSxcbiAgYXVnbWVudCxcbiAgc2VwYXJhdGUsXG4gIGZvcndhcmRzRmluZCxcbiAgYmFja3dhcmRzRmluZCxcbiAgZm9yd2FyZHNTb21lLFxuICBiYWNrd2FyZHNTb21lLFxuICBmb3J3YXJkc0V2ZXJ5LFxuICBiYWNrd2FyZHNFdmVyeSxcbiAgZm9yd2FyZHNSZWR1Y2UsXG4gIGJhY2t3YXJkc1JlZHVjZSxcbiAgZm9yd2FyZHNGb3JFYWNoLFxuICBiYWNrd2FyZHNGb3JFYWNoXG59O1xuIl0sIm5hbWVzIjpbImF1Z21lbnQiLCJiYWNrIiwiYmFja3dhcmRzRXZlcnkiLCJiYWNrd2FyZHNGaW5kIiwiYmFja3dhcmRzRm9yRWFjaCIsImJhY2t3YXJkc1JlZHVjZSIsImJhY2t3YXJkc1NvbWUiLCJjbGVhciIsImNvbWJpbmUiLCJjb21wcmVzcyIsImNvbmNhdCIsImNvcHkiLCJjb3JyZWxhdGUiLCJlaWdodGgiLCJlaWdodGhMYXN0IiwiZXh0cmFjdCIsImZpZnRoIiwiZmlmdGhMYXN0IiwiZmlsdGVyIiwiZmluZCIsImZpcnN0IiwiZmlyc3RMYXN0IiwiZm9yd2FyZHNFdmVyeSIsImZvcndhcmRzRmluZCIsImZvcndhcmRzRm9yRWFjaCIsImZvcndhcmRzUmVkdWNlIiwiZm9yd2FyZHNTb21lIiwiZm91cnRoIiwiZm91cnRoTGFzdCIsImZyb250IiwiaGVhZCIsImxhc3QiLCJtYXRjaCIsIm1lcmdlIiwibmludGgiLCJuaW50aExhc3QiLCJwYXRjaCIsInBydW5lIiwicHVzaCIsInJlcGxhY2UiLCJyZXNvbHZlIiwicmV2ZXJzZSIsInNlY29uZCIsInNlY29uZExhc3QiLCJzZXBhcmF0ZSIsInNldmVudGgiLCJzZXZlbnRoTGFzdCIsInNpeHRoIiwic2l4dGhMYXN0Iiwic3BsaWNlIiwidGFpbCIsInRlbnRoIiwidGhpcmQiLCJ0aGlyZExhc3QiLCJ1bnNoaWZ0IiwiYXJyYXkiLCJsZW5ndGgiLCJzbGljZSIsIk1hdGgiLCJtYXgiLCJhcnJheUEiLCJhcnJheUIiLCJBcnJheSIsInByb3RvdHlwZSIsImFwcGx5IiwiZWxlbWVudE9yQXJyYXkyIiwic3RhcnQiLCJkZWxldGVDb3VudCIsImNhbGxiYWNrIiwibWF0Y2hlcyIsImFycmF5QUxlbmd0aCIsImFycmF5Qkxlbmd0aCIsImV2ZXJ5IiwiZWxlbWVudEEiLCJpbmRleCIsImVsZW1lbnRCIiwicGFzc2VkIiwiY29ycmVsYXRlcyIsInJlc3VsdCIsInJlc29sdmVkIiwiZm9yRWFjaCIsImFycmF5QkluY2x1ZGVzRWxlbWVudEEiLCJpbmNsdWRlcyIsImVsZW1lbnRzIiwiZWxlbWVudCIsImZvdW5kIiwic29tZSIsIkluZmluaXR5IiwiYXJncyIsImRlbGV0ZWRFbGVtZW50cyIsImZpcnN0RGVsZXRlZEVsZW1lbnQiLCJkZWxldGVkRWxlbWVudCIsInVuZGVmaW5lZCIsImluZGV4MSIsImluZGV4MiIs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
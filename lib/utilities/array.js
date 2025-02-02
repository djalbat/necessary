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
    compare: function() {
        return compare;
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
function compare(arrayA, arrayB, callback) {
    var coupled = false;
    var arrayALength = arrayA.length, arrayBLength = arrayB.length;
    if (arrayALength === arrayBLength) {
        arrayB = _to_consumable_array(arrayB);
        coupled = arrayA.every(function(elementA, index) {
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
    }
    return coupled;
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
    compare: compare,
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvYXJyYXkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBmaXJzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbMF07fVxuXG5leHBvcnQgZnVuY3Rpb24gc2Vjb25kKGFycmF5KSB7IHJldHVybiBhcnJheVsxXTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gdGhpcmQoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzJdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3VydGgoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzNdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBmaWZ0aChhcnJheSkgeyByZXR1cm4gYXJyYXlbNF07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIHNpeHRoKGFycmF5KSB7IHJldHVybiBhcnJheVs1XTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gc2V2ZW50aChhcnJheSkgeyByZXR1cm4gYXJyYXlbNl07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGVpZ2h0aChhcnJheSkgeyByZXR1cm4gYXJyYXlbN107IH1cblxuZXhwb3J0IGZ1bmN0aW9uIG5pbnRoKGFycmF5KSB7IHJldHVybiBhcnJheVs4XTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gdGVudGgoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzldOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBmaXJzdExhc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5W2FycmF5Lmxlbmd0aCAtIDFdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBzZWNvbmRMYXN0KGFycmF5KSB7IHJldHVybiBhcnJheVthcnJheS5sZW5ndGggLSAyXTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gdGhpcmRMYXN0KGFycmF5KSB7IHJldHVybiBhcnJheVthcnJheS5sZW5ndGggLSAzXTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gZm91cnRoTGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gNF07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpZnRoTGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gNV07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIHNpeHRoTGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gNl07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldmVudGhMYXN0KGFycmF5KSB7IHJldHVybiBhcnJheVthcnJheS5sZW5ndGggLSA3XTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gZWlnaHRoTGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gOF07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIG5pbnRoTGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gOV07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGxhc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5W2FycmF5Lmxlbmd0aCAtIDFdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBoZWFkKGFycmF5KSB7IHJldHVybiBhcnJheS5zbGljZSgwLCAxKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gdGFpbChhcnJheSkgeyByZXR1cm4gYXJyYXkuc2xpY2UoMSk7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGJhY2soYXJyYXkpIHsgcmV0dXJuIGFycmF5LnNsaWNlKGFycmF5Lmxlbmd0aCAtIDEpOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBmcm9udChhcnJheSkgeyByZXR1cm4gYXJyYXkuc2xpY2UoMCwgTWF0aC5tYXgoMSwgYXJyYXkubGVuZ3RoIC0gMSkpOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBwdXNoKGFycmF5QSwgYXJyYXlCKSB7IEFycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KGFycmF5QSwgYXJyYXlCKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gdW5zaGlmdChhcnJheUEsIGFycmF5QikgeyBBcnJheS5wcm90b3R5cGUudW5zaGlmdC5hcHBseShhcnJheUEsIGFycmF5Qik7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbmNhdChhcnJheUEsIGVsZW1lbnRPckFycmF5Mikge1xuICBjb25zdCBhcnJheUIgPSAoZWxlbWVudE9yQXJyYXkyIGluc3RhbmNlb2YgQXJyYXkpID9cbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudE9yQXJyYXkyIDpcbiAgICAgICAgICAgICAgICAgICAgIFsgZWxlbWVudE9yQXJyYXkyIF07XG4gIFxuICBwdXNoKGFycmF5QSwgYXJyYXlCKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyKGFycmF5KSB7XG4gIGNvbnN0IHN0YXJ0ID0gMDtcbiAgXG4gIHJldHVybiBhcnJheS5zcGxpY2Uoc3RhcnQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29weShhcnJheUEsIGFycmF5Qikge1xuICBjb25zdCBzdGFydCA9IDAsXG4gICAgICAgIGRlbGV0ZUNvdW50ID0gYXJyYXlCLmxlbmd0aDsgIC8vL1xuICBcbiAgc3BsaWNlKGFycmF5QSwgc3RhcnQsIGRlbGV0ZUNvdW50LCBhcnJheUIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2UoYXJyYXlBLCBhcnJheUIpIHsgQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkoYXJyYXlBLCBhcnJheUIpOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBtYXRjaChhcnJheUEsIGFycmF5QiwgY2FsbGJhY2spIHtcbiAgbGV0IG1hdGNoZXMgPSBmYWxzZTtcblxuICBjb25zdCBhcnJheUFMZW5ndGggPSBhcnJheUEubGVuZ3RoLFxuICAgICAgICBhcnJheUJMZW5ndGggPSBhcnJheUIubGVuZ3RoO1xuXG4gIGlmIChhcnJheUFMZW5ndGggPT09IGFycmF5Qkxlbmd0aCkge1xuICAgIG1hdGNoZXMgPSBhcnJheUEuZXZlcnkoKGVsZW1lbnRBLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgZWxlbWVudEIgPSBhcnJheUJbaW5kZXhdLFxuICAgICAgICAgICAgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudEEsIGVsZW1lbnRCLCBpbmRleCk7XG5cbiAgICAgIGlmIChwYXNzZWQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gbWF0Y2hlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBhcmUoYXJyYXlBLCBhcnJheUIsIGNhbGxiYWNrKSB7XG4gIGxldCBjb3VwbGVkID0gZmFsc2U7XG5cbiAgY29uc3QgYXJyYXlBTGVuZ3RoID0gYXJyYXlBLmxlbmd0aCxcbiAgICAgICAgYXJyYXlCTGVuZ3RoID0gYXJyYXlCLmxlbmd0aDtcblxuICBpZiAoYXJyYXlBTGVuZ3RoID09PSBhcnJheUJMZW5ndGgpIHtcbiAgICBhcnJheUIgPSBbICAvLy9cbiAgICAgIC4uLmFycmF5QlxuICAgIF07XG5cbiAgICBjb3VwbGVkID0gYXJyYXlBLmV2ZXJ5KChlbGVtZW50QSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IGVsZW1lbnRCID0gZXh0cmFjdChhcnJheUIsIChlbGVtZW50QikgPT4ge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBjYWxsYmFjayhlbGVtZW50QSwgZWxlbWVudEIpO1xuXG4gICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSkgfHwgbnVsbDtcblxuICAgICAgaWYgKGVsZW1lbnRCICE9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIGNvdXBsZWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb3JyZWxhdGUoYXJyYXlBLCBhcnJheUIsIGNhbGxiYWNrKSB7XG4gIGFycmF5QiA9IFsgIC8vL1xuICAgIC4uLmFycmF5QlxuICBdO1xuXG4gIGNvbnN0IGNvcnJlbGF0ZXMgPSBhcnJheUEuZXZlcnkoKGVsZW1lbnRBKSA9PiB7XG4gICAgY29uc3QgZWxlbWVudEIgPSBleHRyYWN0KGFycmF5QiwgKGVsZW1lbnRCKSA9PiB7XG4gICAgICBjb25zdCByZXN1bHQgPSBjYWxsYmFjayhlbGVtZW50QSwgZWxlbWVudEIpO1xuXG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pIHx8IG51bGw7XG5cbiAgICBpZiAoZWxlbWVudEIgIT09IG51bGwpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGNvcnJlbGF0ZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlKGFycmF5QSwgYXJyYXlCLCBjYWxsYmFjaykge1xuICBsZXQgcmVzb2x2ZWQ7XG5cbiAgYXJyYXlBID0gWyAgLy8vXG4gICAgLi4uYXJyYXlBXG4gIF07XG5cbiAgZm9yICg7Oykge1xuICAgIGNvbnN0IGFycmF5QUxlbmd0aCA9IGFycmF5QS5sZW5ndGg7XG5cbiAgICBpZiAoYXJyYXlBTGVuZ3RoID09PSAwKSB7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBsZXQgcmVzb2x2ZWQgPSBmYWxzZTtcblxuICAgIGFycmF5QS5mb3JFYWNoKChlbGVtZW50QSkgPT4ge1xuICAgICAgY29uc3QgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudEEpO1xuXG4gICAgICBpZiAocGFzc2VkKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnRCID0gZWxlbWVudEE7ICAvLy9cblxuICAgICAgICBhcnJheUIucHVzaChlbGVtZW50Qik7XG5cbiAgICAgICAgcmVzb2x2ZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKCFyZXNvbHZlZCkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgZmlsdGVyKGFycmF5QSwgKGVsZW1lbnRBKSA9PiB7XG4gICAgICBjb25zdCBhcnJheUJJbmNsdWRlc0VsZW1lbnRBID0gYXJyYXlCLmluY2x1ZGVzKGVsZW1lbnRBKTtcblxuICAgICAgaWYgKCFhcnJheUJJbmNsdWRlc0VsZW1lbnRBKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgY29uc3QgYXJyYXlBTGVuZ3RoID0gYXJyYXlBLmxlbmd0aDtcblxuICByZXNvbHZlZCA9IChhcnJheUFMZW5ndGggPT09IDApO1xuXG4gIHJldHVybiByZXNvbHZlZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbmQoYXJyYXksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGVsZW1lbnRzID0gW107XG5cbiAgZm9yd2FyZHNGb3JFYWNoKGFycmF5LCAoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBwYXNzZWQgPSBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAocGFzc2VkKSB7XG4gICAgICBlbGVtZW50cy5wdXNoKGVsZW1lbnQpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGVsZW1lbnRzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVwbGFjZShhcnJheSwgZWxlbWVudCwgY2FsbGJhY2spIHtcbiAgbGV0IHN0YXJ0O1xuICBcbiAgY29uc3QgZm91bmQgPSBhcnJheS5zb21lKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmIChwYXNzZWQpIHtcbiAgICAgIHN0YXJ0ID0gaW5kZXg7ICAvLy9cbiAgICAgIFxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcbiAgXG4gIGlmIChmb3VuZCkge1xuICAgIGNvbnN0IGRlbGV0ZUNvdW50ID0gMTtcblxuICAgIGFycmF5LnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQsIGVsZW1lbnQpO1xuICB9XG5cbiAgcmV0dXJuIGZvdW5kO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3BsaWNlKGFycmF5QSwgc3RhcnQsIGRlbGV0ZUNvdW50ID0gSW5maW5pdHksIGFycmF5QiA9IFtdKSB7XG4gIGNvbnN0IGFyZ3MgPSBbIHN0YXJ0LCBkZWxldGVDb3VudCwgLi4uYXJyYXlCIF0sXG4gICAgICAgIGRlbGV0ZWRFbGVtZW50cyA9IEFycmF5LnByb3RvdHlwZS5zcGxpY2UuYXBwbHkoYXJyYXlBLCBhcmdzKTtcblxuICByZXR1cm4gZGVsZXRlZEVsZW1lbnRzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmlsdGVyKGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBkZWxldGVkRWxlbWVudHMgPSBbXTtcbiAgXG4gIGJhY2t3YXJkc0ZvckVhY2goYXJyYXksIChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmICghcGFzc2VkKSB7XG4gICAgICBjb25zdCBzdGFydCA9IGluZGV4LCAgLy8vXG4gICAgICAgICAgICBkZWxldGVDb3VudCA9IDEsXG4gICAgICAgICAgICBkZWxldGVkRWxlbWVudHMgPSBhcnJheS5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50KSxcbiAgICAgICAgICAgIGZpcnN0RGVsZXRlZEVsZW1lbnQgPSBmaXJzdChkZWxldGVkRWxlbWVudHMpO1xuICAgICAgXG4gICAgICBkZWxldGVkRWxlbWVudHMudW5zaGlmdChmaXJzdERlbGV0ZWRFbGVtZW50KTsgIC8vL1xuICAgIH1cbiAgfSk7XG4gIFxuICByZXR1cm4gZGVsZXRlZEVsZW1lbnRzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJ1bmUoYXJyYXksIGNhbGxiYWNrKSB7XG4gIGxldCBkZWxldGVkRWxlbWVudCA9IHVuZGVmaW5lZDtcbiAgXG4gIGFycmF5LnNvbWUoKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKCFwYXNzZWQpIHtcbiAgICAgIGNvbnN0IHN0YXJ0ID0gaW5kZXgsICAvLy9cbiAgICAgICAgICAgIGRlbGV0ZUNvdW50ID0gMSxcbiAgICAgICAgICAgIGRlbGV0ZWRFbGVtZW50cyA9IGFycmF5LnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQpLFxuICAgICAgICAgICAgZmlyc3REZWxldGVkRWxlbWVudCA9IGZpcnN0KGRlbGV0ZWRFbGVtZW50cyk7XG4gICAgICBcbiAgICAgIGRlbGV0ZWRFbGVtZW50ID0gZmlyc3REZWxldGVkRWxlbWVudDsgIC8vL1xuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuICBcbiAgcmV0dXJuIGRlbGV0ZWRFbGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXh0cmFjdChhcnJheSwgY2FsbGJhY2spIHtcbiAgbGV0IGRlbGV0ZWRFbGVtZW50ID0gdW5kZWZpbmVkO1xuXG4gIGFycmF5LnNvbWUoKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgY29uc3Qgc3RhcnQgPSBpbmRleCwgIC8vL1xuICAgICAgICAgICAgZGVsZXRlQ291bnQgPSAxLFxuICAgICAgICAgICAgZGVsZXRlZEVsZW1lbnRzID0gYXJyYXkuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCksXG4gICAgICAgICAgICBmaXJzdERlbGV0ZWRFbGVtZW50ID0gZmlyc3QoZGVsZXRlZEVsZW1lbnRzKTtcblxuICAgICAgZGVsZXRlZEVsZW1lbnQgPSBmaXJzdERlbGV0ZWRFbGVtZW50OyAgLy8vXG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGRlbGV0ZWRFbGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGF0Y2goYXJyYXksIGVsZW1lbnQsIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGZvdW5kID0gYXJyYXkuc29tZSgoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBwYXNzZWQgPSBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAocGFzc2VkKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG5cbiAgaWYgKGZvdW5kKSB7XG4gICAgYXJyYXkucHVzaChlbGVtZW50KTtcbiAgfVxuXG4gIHJldHVybiBmb3VuZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXByZXNzKGFycmF5LCBjYWxsYmFjaykge1xuICBsZXQgaW5kZXgxID0gMCxcbiAgICAgIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICB3aGlsZSAoaW5kZXgxIDwgbGVuZ3RoKSB7XG4gICAgY29uc3QgZWxlbWVudEIgPSBhcnJheVtpbmRleDFdO1xuXG4gICAgZm9yIChsZXQgaW5kZXgyID0gbGVuZ3RoIC0gMTsgaW5kZXgyID4gaW5kZXgxOyBpbmRleDItLSkge1xuICAgICAgY29uc3QgZWxlbWVudEEgPSBhcnJheVtpbmRleDJdLFxuICAgICAgICAgICAgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudEEsIGVsZW1lbnRCKTtcblxuICAgICAgaWYgKHBhc3NlZCkge1xuICAgICAgICBjb25zdCBzdGFydCA9IGluZGV4MiwgLy8vXG4gICAgICAgICAgICAgIGRlbGV0ZUNvdW50ID0gMTtcblxuICAgICAgICBhcnJheS5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpbmRleDErKztcblxuICAgIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tYmluZShhcnJheUEsIGFycmF5QiwgY2FsbGJhY2spIHtcbiAgY29uc3QgYXJyYXkgPSBbXG4gICAgLi4uYXJyYXlBLFxuICAgIC4uLmFycmF5QlxuICBdO1xuXG4gIGNvbXByZXNzKGFycmF5LCBjYWxsYmFjayk7XG5cbiAgcmV0dXJuIGFycmF5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmV2ZXJzZShhcnJheSkge1xuICBhcnJheSA9IFsgLy8vXG4gICAgLi4uYXJyYXlcbiAgXS5yZXZlcnNlKCk7XG5cbiAgcmV0dXJuIGFycmF5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXVnbWVudChhcnJheUEsIGFycmF5QiwgY2FsbGJhY2spIHtcbiAgYXJyYXlCLmZvckVhY2goKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgYXJyYXlBLnB1c2goZWxlbWVudCk7XG4gICAgfVxuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlcGFyYXRlKGFycmF5LCBhcnJheUEsIGFycmF5QiwgY2FsbGJhY2spIHtcbiAgYXJyYXkuZm9yRWFjaCgoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBwYXNzZWQgPSBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG5cbiAgICBwYXNzZWQgP1xuICAgICAgYXJyYXlBLnB1c2goZWxlbWVudCkgOlxuICAgICAgICBhcnJheUIucHVzaChlbGVtZW50KTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3J3YXJkc0ZpbmQoYXJyYXksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhcnJheUxlbmd0aDsgaW5kZXgrKykge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF0sXG4gICAgICAgICAgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYmFja3dhcmRzRmluZChhcnJheSwgY2FsbGJhY2spIHtcbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSBhcnJheUxlbmd0aCAtIDE7IGluZGV4ID49IDA7IGluZGV4LS0pIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdLFxuICAgICAgICAgIHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmIChwYXNzZWQpIHtcbiAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcndhcmRzU29tZShhcnJheSwgY2FsbGJhY2spIHtcbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGFycmF5TGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XSxcbiAgICAgICAgICBwYXNzZWQgPSBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG4gICAgXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYmFja3dhcmRzU29tZShhcnJheSwgY2FsbGJhY2spIHtcbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSBhcnJheUxlbmd0aCAtIDE7IGluZGV4ID49IDA7IGluZGV4LS0pIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdLFxuICAgICAgICAgIHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmIChwYXNzZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcndhcmRzRXZlcnkoYXJyYXksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhcnJheUxlbmd0aDsgaW5kZXgrKykge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF0sXG4gICAgICAgICAgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKCFwYXNzZWQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJhY2t3YXJkc0V2ZXJ5KGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IGFycmF5TGVuZ3RoIC0gMTsgaW5kZXggPj0gMDsgaW5kZXgtLSkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF0sXG4gICAgICAgICAgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKCFwYXNzZWQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcndhcmRzUmVkdWNlKGFycmF5LCBjYWxsYmFjaywgaW5pdGlhbFZhbHVlKSB7XG4gIGxldCB2YWx1ZSA9IGluaXRpYWxWYWx1ZTsgLy8vXG5cbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGFycmF5TGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XTtcblxuICAgIHZhbHVlID0gY2FsbGJhY2sodmFsdWUsIGVsZW1lbnQsIGluZGV4KTtcbiAgfVxuXG4gIHJldHVybiB2YWx1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJhY2t3YXJkc1JlZHVjZShhcnJheSwgY2FsbGJhY2ssIGluaXRpYWxWYWx1ZSkge1xuICBsZXQgdmFsdWUgPSBpbml0aWFsVmFsdWU7IC8vL1xuXG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gYXJyYXlMZW5ndGggLSAxOyBpbmRleCA+PSAwOyBpbmRleC0tKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XTtcblxuICAgIHZhbHVlID0gY2FsbGJhY2sodmFsdWUsIGVsZW1lbnQsIGluZGV4KTtcbiAgfVxuXG4gIHJldHVybiB2YWx1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcndhcmRzRm9yRWFjaChhcnJheSwgY2FsbGJhY2spIHtcbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGFycmF5TGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XTtcblxuICAgIGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYmFja3dhcmRzRm9yRWFjaChhcnJheSwgY2FsbGJhY2spIHtcbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSBhcnJheUxlbmd0aCAtIDE7IGluZGV4ID49IDA7IGluZGV4LS0pIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdO1xuXG4gICAgY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZmlyc3QsXG4gIHNlY29uZCxcbiAgdGhpcmQsXG4gIGZvdXJ0aCxcbiAgZmlmdGgsXG4gIHNpeHRoLFxuICBzZXZlbnRoLFxuICBlaWdodGgsXG4gIG5pbnRoLFxuICBmaXJzdExhc3QsXG4gIHNlY29uZExhc3QsXG4gIHRoaXJkTGFzdCxcbiAgZm91cnRoTGFzdCxcbiAgZmlmdGhMYXN0LFxuICBzaXh0aExhc3QsXG4gIHNldmVudGhMYXN0LFxuICBlaWdodGhMYXN0LFxuICBuaW50aExhc3QsXG4gIGxhc3QsXG4gIGhlYWQsXG4gIHRhaWwsXG4gIGJhY2ssXG4gIGZyb250LFxuICBwdXNoLFxuICB1bnNoaWZ0LFxuICBjb25jYXQsXG4gIGNsZWFyLFxuICBjb3B5LFxuICBtZXJnZSxcbiAgbWF0Y2gsXG4gIGNvbXBhcmUsXG4gIGNvcnJlbGF0ZSxcbiAgcmVzb2x2ZSxcbiAgZmluZCxcbiAgcmVwbGFjZSxcbiAgc3BsaWNlLFxuICBmaWx0ZXIsXG4gIHBydW5lLFxuICBleHRyYWN0LFxuICBwYXRjaCxcbiAgY29tcHJlc3MsXG4gIGNvbWJpbmUsXG4gIHJldmVyc2UsXG4gIGF1Z21lbnQsXG4gIHNlcGFyYXRlLFxuICBmb3J3YXJkc0ZpbmQsXG4gIGJhY2t3YXJkc0ZpbmQsXG4gIGZvcndhcmRzU29tZSxcbiAgYmFja3dhcmRzU29tZSxcbiAgZm9yd2FyZHNFdmVyeSxcbiAgYmFja3dhcmRzRXZlcnksXG4gIGZvcndhcmRzUmVkdWNlLFxuICBiYWNrd2FyZHNSZWR1Y2UsXG4gIGZvcndhcmRzRm9yRWFjaCxcbiAgYmFja3dhcmRzRm9yRWFjaFxufTtcbiJdLCJuYW1lcyI6WyJhdWdtZW50IiwiYmFjayIsImJhY2t3YXJkc0V2ZXJ5IiwiYmFja3dhcmRzRmluZCIsImJhY2t3YXJkc0ZvckVhY2giLCJiYWNrd2FyZHNSZWR1Y2UiLCJiYWNrd2FyZHNTb21lIiwiY2xlYXIiLCJjb21iaW5lIiwiY29tcGFyZSIsImNvbXByZXNzIiwiY29uY2F0IiwiY29weSIsImNvcnJlbGF0ZSIsImVpZ2h0aCIsImVpZ2h0aExhc3QiLCJleHRyYWN0IiwiZmlmdGgiLCJmaWZ0aExhc3QiLCJmaWx0ZXIiLCJmaW5kIiwiZmlyc3QiLCJmaXJzdExhc3QiLCJmb3J3YXJkc0V2ZXJ5IiwiZm9yd2FyZHNGaW5kIiwiZm9yd2FyZHNGb3JFYWNoIiwiZm9yd2FyZHNSZWR1Y2UiLCJmb3J3YXJkc1NvbWUiLCJmb3VydGgiLCJmb3VydGhMYXN0IiwiZnJvbnQiLCJoZWFkIiwibGFzdCIsIm1hdGNoIiwibWVyZ2UiLCJuaW50aCIsIm5pbnRoTGFzdCIsInBhdGNoIiwicHJ1bmUiLCJwdXNoIiwicmVwbGFjZSIsInJlc29sdmUiLCJyZXZlcnNlIiwic2Vjb25kIiwic2Vjb25kTGFzdCIsInNlcGFyYXRlIiwic2V2ZW50aCIsInNldmVudGhMYXN0Iiwic2l4dGgiLCJzaXh0aExhc3QiLCJzcGxpY2UiLCJ0YWlsIiwidGVudGgiLCJ0aGlyZCIsInRoaXJkTGFzdCIsInVuc2hpZnQiLCJhcnJheSIsImxlbmd0aCIsInNsaWNlIiwiTWF0aCIsIm1heCIsImFycmF5QSIsImFycmF5QiIsIkFycmF5IiwicHJvdG90eXBlIiwiYXBwbHkiLCJlbGVtZW50T3JBcnJheTIiLCJzdGFydCIsImRlbGV0ZUNvdW50IiwiY2FsbGJhY2siLCJtYXRjaGVzIiwiYXJyYXlBTGVuZ3RoIiwiYXJyYXlCTGVuZ3RoIiwiZXZlcnkiLCJlbGVtZW50QSIsImluZGV4IiwiZWxlbWVudEIiLCJwYXNzZWQiLCJjb3VwbGVkIiwicmVzdWx0IiwiY29ycmVsYXRlcyIsInJlc29sdmVkIiwiZm9yRWFjaCIsImFycmF5QkluY2x1ZGVzRWxlbWVudEEiLCJpbmNsdWRlcyIsImVsZW1lbnRzIiwiZWxlbWVudCIsImZvdW5kIiwic29tZSIsIkluZmluaXR5IiwiYXJncyIsImRlbGV0ZWRFbGVtZW50cyIsImZpcnN0RGVsZXRlZEVsZW1lbnQiLCJkZWxldGVkRWxlbWVudCIsInVuZGVmaW5lZCIsImluZGV4MSIsImluZGV4MiIsImFycmF5TGVuZ3RoIiwiaW5pdGlhbFZhbHVlIiwidmFsdWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQXlXZ0JBLE9BQU87ZUFBUEE7O0lBM1RBQyxJQUFJO2VBQUpBOztJQTBaQUMsY0FBYztlQUFkQTs7SUE1REFDLGFBQWE7ZUFBYkE7O0lBaUhBQyxnQkFBZ0I7ZUFBaEJBOztJQXhCQUMsZUFBZTtlQUFmQTs7SUEzREFDLGFBQWE7ZUFBYkE7O0lBNVdBQyxLQUFLO2VBQUxBOztJQXdSQUMsT0FBTztlQUFQQTs7SUFyUEFDLE9BQU87ZUFBUEE7O0lBNE5BQyxRQUFRO2VBQVJB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
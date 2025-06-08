"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get augment () {
        return augment;
    },
    get back () {
        return back;
    },
    get backwardsEvery () {
        return backwardsEvery;
    },
    get backwardsFind () {
        return backwardsFind;
    },
    get backwardsFindIndex () {
        return backwardsFindIndex;
    },
    get backwardsForEach () {
        return backwardsForEach;
    },
    get backwardsReduce () {
        return backwardsReduce;
    },
    get backwardsSome () {
        return backwardsSome;
    },
    get clear () {
        return clear;
    },
    get combine () {
        return combine;
    },
    get compare () {
        return compare;
    },
    get compress () {
        return compress;
    },
    get concat () {
        return concat;
    },
    get copy () {
        return copy;
    },
    get correlate () {
        return correlate;
    },
    get default () {
        return _default;
    },
    get eighth () {
        return eighth;
    },
    get eighthLast () {
        return eighthLast;
    },
    get extract () {
        return extract;
    },
    get fifth () {
        return fifth;
    },
    get fifthLast () {
        return fifthLast;
    },
    get filter () {
        return filter;
    },
    get find () {
        return find;
    },
    get first () {
        return first;
    },
    get firstLast () {
        return firstLast;
    },
    get forwardsEvery () {
        return forwardsEvery;
    },
    get forwardsFind () {
        return forwardsFind;
    },
    get forwardsFindIndex () {
        return forwardsFindIndex;
    },
    get forwardsForEach () {
        return forwardsForEach;
    },
    get forwardsReduce () {
        return forwardsReduce;
    },
    get forwardsSome () {
        return forwardsSome;
    },
    get fourth () {
        return fourth;
    },
    get fourthLast () {
        return fourthLast;
    },
    get front () {
        return front;
    },
    get head () {
        return head;
    },
    get last () {
        return last;
    },
    get match () {
        return match;
    },
    get merge () {
        return merge;
    },
    get ninth () {
        return ninth;
    },
    get ninthLast () {
        return ninthLast;
    },
    get patch () {
        return patch;
    },
    get prune () {
        return prune;
    },
    get push () {
        return push;
    },
    get replace () {
        return replace;
    },
    get resolve () {
        return resolve;
    },
    get reverse () {
        return reverse;
    },
    get second () {
        return second;
    },
    get secondLast () {
        return secondLast;
    },
    get separate () {
        return separate;
    },
    get seventh () {
        return seventh;
    },
    get seventhLast () {
        return seventhLast;
    },
    get sixth () {
        return sixth;
    },
    get sixthLast () {
        return sixthLast;
    },
    get splice () {
        return splice;
    },
    get tail () {
        return tail;
    },
    get tenth () {
        return tenth;
    },
    get third () {
        return third;
    },
    get thirdLast () {
        return thirdLast;
    },
    get unshift () {
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
function forwardsFindIndex(array, callback) {
    var arrayLength = array.length;
    for(var index = 0; index < arrayLength; index++){
        var element = array[index], passed = callback(element, index);
        if (passed) {
            return index;
        }
    }
    return -1;
}
function backwardsFindIndex(array, callback) {
    var arrayLength = array.length;
    for(var index = arrayLength - 1; index >= 0; index--){
        var element = array[index], passed = callback(element, index);
        if (passed) {
            return index;
        }
    }
    return -1;
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
    backwardsForEach: backwardsForEach,
    forwardsFindIndex: forwardsFindIndex,
    backwardsFindIndex: backwardsFindIndex
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvYXJyYXkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBmaXJzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbMF07fVxuXG5leHBvcnQgZnVuY3Rpb24gc2Vjb25kKGFycmF5KSB7IHJldHVybiBhcnJheVsxXTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gdGhpcmQoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzJdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3VydGgoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzNdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBmaWZ0aChhcnJheSkgeyByZXR1cm4gYXJyYXlbNF07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIHNpeHRoKGFycmF5KSB7IHJldHVybiBhcnJheVs1XTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gc2V2ZW50aChhcnJheSkgeyByZXR1cm4gYXJyYXlbNl07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGVpZ2h0aChhcnJheSkgeyByZXR1cm4gYXJyYXlbN107IH1cblxuZXhwb3J0IGZ1bmN0aW9uIG5pbnRoKGFycmF5KSB7IHJldHVybiBhcnJheVs4XTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gdGVudGgoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzldOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBmaXJzdExhc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5W2FycmF5Lmxlbmd0aCAtIDFdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBzZWNvbmRMYXN0KGFycmF5KSB7IHJldHVybiBhcnJheVthcnJheS5sZW5ndGggLSAyXTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gdGhpcmRMYXN0KGFycmF5KSB7IHJldHVybiBhcnJheVthcnJheS5sZW5ndGggLSAzXTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gZm91cnRoTGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gNF07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpZnRoTGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gNV07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIHNpeHRoTGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gNl07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldmVudGhMYXN0KGFycmF5KSB7IHJldHVybiBhcnJheVthcnJheS5sZW5ndGggLSA3XTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gZWlnaHRoTGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gOF07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIG5pbnRoTGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gOV07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGxhc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5W2FycmF5Lmxlbmd0aCAtIDFdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBoZWFkKGFycmF5KSB7IHJldHVybiBhcnJheS5zbGljZSgwLCAxKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gdGFpbChhcnJheSkgeyByZXR1cm4gYXJyYXkuc2xpY2UoMSk7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGJhY2soYXJyYXkpIHsgcmV0dXJuIGFycmF5LnNsaWNlKGFycmF5Lmxlbmd0aCAtIDEpOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBmcm9udChhcnJheSkgeyByZXR1cm4gYXJyYXkuc2xpY2UoMCwgTWF0aC5tYXgoMSwgYXJyYXkubGVuZ3RoIC0gMSkpOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBwdXNoKGFycmF5QSwgYXJyYXlCKSB7IEFycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KGFycmF5QSwgYXJyYXlCKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gdW5zaGlmdChhcnJheUEsIGFycmF5QikgeyBBcnJheS5wcm90b3R5cGUudW5zaGlmdC5hcHBseShhcnJheUEsIGFycmF5Qik7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbmNhdChhcnJheUEsIGVsZW1lbnRPckFycmF5Mikge1xuICBjb25zdCBhcnJheUIgPSAoZWxlbWVudE9yQXJyYXkyIGluc3RhbmNlb2YgQXJyYXkpID9cbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudE9yQXJyYXkyIDpcbiAgICAgICAgICAgICAgICAgICAgIFsgZWxlbWVudE9yQXJyYXkyIF07XG4gIFxuICBwdXNoKGFycmF5QSwgYXJyYXlCKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyKGFycmF5KSB7XG4gIGNvbnN0IHN0YXJ0ID0gMDtcbiAgXG4gIHJldHVybiBhcnJheS5zcGxpY2Uoc3RhcnQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29weShhcnJheUEsIGFycmF5Qikge1xuICBjb25zdCBzdGFydCA9IDAsXG4gICAgICAgIGRlbGV0ZUNvdW50ID0gYXJyYXlCLmxlbmd0aDsgIC8vL1xuICBcbiAgc3BsaWNlKGFycmF5QSwgc3RhcnQsIGRlbGV0ZUNvdW50LCBhcnJheUIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2UoYXJyYXlBLCBhcnJheUIpIHsgQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkoYXJyYXlBLCBhcnJheUIpOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBtYXRjaChhcnJheUEsIGFycmF5QiwgY2FsbGJhY2spIHtcbiAgbGV0IG1hdGNoZXMgPSBmYWxzZTtcblxuICBjb25zdCBhcnJheUFMZW5ndGggPSBhcnJheUEubGVuZ3RoLFxuICAgICAgICBhcnJheUJMZW5ndGggPSBhcnJheUIubGVuZ3RoO1xuXG4gIGlmIChhcnJheUFMZW5ndGggPT09IGFycmF5Qkxlbmd0aCkge1xuICAgIG1hdGNoZXMgPSBhcnJheUEuZXZlcnkoKGVsZW1lbnRBLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgZWxlbWVudEIgPSBhcnJheUJbaW5kZXhdLFxuICAgICAgICAgICAgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudEEsIGVsZW1lbnRCLCBpbmRleCk7XG5cbiAgICAgIGlmIChwYXNzZWQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gbWF0Y2hlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBhcmUoYXJyYXlBLCBhcnJheUIsIGNhbGxiYWNrKSB7XG4gIGxldCBjb3VwbGVkID0gZmFsc2U7XG5cbiAgY29uc3QgYXJyYXlBTGVuZ3RoID0gYXJyYXlBLmxlbmd0aCxcbiAgICAgICAgYXJyYXlCTGVuZ3RoID0gYXJyYXlCLmxlbmd0aDtcblxuICBpZiAoYXJyYXlBTGVuZ3RoID09PSBhcnJheUJMZW5ndGgpIHtcbiAgICBhcnJheUIgPSBbICAvLy9cbiAgICAgIC4uLmFycmF5QlxuICAgIF07XG5cbiAgICBjb3VwbGVkID0gYXJyYXlBLmV2ZXJ5KChlbGVtZW50QSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IGVsZW1lbnRCID0gZXh0cmFjdChhcnJheUIsIChlbGVtZW50QikgPT4ge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBjYWxsYmFjayhlbGVtZW50QSwgZWxlbWVudEIpO1xuXG4gICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSkgfHwgbnVsbDtcblxuICAgICAgaWYgKGVsZW1lbnRCICE9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIGNvdXBsZWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb3JyZWxhdGUoYXJyYXlBLCBhcnJheUIsIGNhbGxiYWNrKSB7XG4gIGFycmF5QiA9IFsgIC8vL1xuICAgIC4uLmFycmF5QlxuICBdO1xuXG4gIGNvbnN0IGNvcnJlbGF0ZXMgPSBhcnJheUEuZXZlcnkoKGVsZW1lbnRBKSA9PiB7XG4gICAgY29uc3QgZWxlbWVudEIgPSBleHRyYWN0KGFycmF5QiwgKGVsZW1lbnRCKSA9PiB7XG4gICAgICBjb25zdCByZXN1bHQgPSBjYWxsYmFjayhlbGVtZW50QSwgZWxlbWVudEIpO1xuXG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pIHx8IG51bGw7XG5cbiAgICBpZiAoZWxlbWVudEIgIT09IG51bGwpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGNvcnJlbGF0ZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlKGFycmF5QSwgYXJyYXlCLCBjYWxsYmFjaykge1xuICBsZXQgcmVzb2x2ZWQ7XG5cbiAgYXJyYXlBID0gWyAgLy8vXG4gICAgLi4uYXJyYXlBXG4gIF07XG5cbiAgZm9yICg7Oykge1xuICAgIGNvbnN0IGFycmF5QUxlbmd0aCA9IGFycmF5QS5sZW5ndGg7XG5cbiAgICBpZiAoYXJyYXlBTGVuZ3RoID09PSAwKSB7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBsZXQgcmVzb2x2ZWQgPSBmYWxzZTtcblxuICAgIGFycmF5QS5mb3JFYWNoKChlbGVtZW50QSkgPT4ge1xuICAgICAgY29uc3QgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudEEpO1xuXG4gICAgICBpZiAocGFzc2VkKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnRCID0gZWxlbWVudEE7ICAvLy9cblxuICAgICAgICBhcnJheUIucHVzaChlbGVtZW50Qik7XG5cbiAgICAgICAgcmVzb2x2ZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKCFyZXNvbHZlZCkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgZmlsdGVyKGFycmF5QSwgKGVsZW1lbnRBKSA9PiB7XG4gICAgICBjb25zdCBhcnJheUJJbmNsdWRlc0VsZW1lbnRBID0gYXJyYXlCLmluY2x1ZGVzKGVsZW1lbnRBKTtcblxuICAgICAgaWYgKCFhcnJheUJJbmNsdWRlc0VsZW1lbnRBKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgY29uc3QgYXJyYXlBTGVuZ3RoID0gYXJyYXlBLmxlbmd0aDtcblxuICByZXNvbHZlZCA9IChhcnJheUFMZW5ndGggPT09IDApO1xuXG4gIHJldHVybiByZXNvbHZlZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbmQoYXJyYXksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGVsZW1lbnRzID0gW107XG5cbiAgZm9yd2FyZHNGb3JFYWNoKGFycmF5LCAoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBwYXNzZWQgPSBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAocGFzc2VkKSB7XG4gICAgICBlbGVtZW50cy5wdXNoKGVsZW1lbnQpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGVsZW1lbnRzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVwbGFjZShhcnJheSwgZWxlbWVudCwgY2FsbGJhY2spIHtcbiAgbGV0IHN0YXJ0O1xuICBcbiAgY29uc3QgZm91bmQgPSBhcnJheS5zb21lKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmIChwYXNzZWQpIHtcbiAgICAgIHN0YXJ0ID0gaW5kZXg7ICAvLy9cbiAgICAgIFxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcbiAgXG4gIGlmIChmb3VuZCkge1xuICAgIGNvbnN0IGRlbGV0ZUNvdW50ID0gMTtcblxuICAgIGFycmF5LnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQsIGVsZW1lbnQpO1xuICB9XG5cbiAgcmV0dXJuIGZvdW5kO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3BsaWNlKGFycmF5QSwgc3RhcnQsIGRlbGV0ZUNvdW50ID0gSW5maW5pdHksIGFycmF5QiA9IFtdKSB7XG4gIGNvbnN0IGFyZ3MgPSBbIHN0YXJ0LCBkZWxldGVDb3VudCwgLi4uYXJyYXlCIF0sXG4gICAgICAgIGRlbGV0ZWRFbGVtZW50cyA9IEFycmF5LnByb3RvdHlwZS5zcGxpY2UuYXBwbHkoYXJyYXlBLCBhcmdzKTtcblxuICByZXR1cm4gZGVsZXRlZEVsZW1lbnRzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmlsdGVyKGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBkZWxldGVkRWxlbWVudHMgPSBbXTtcbiAgXG4gIGJhY2t3YXJkc0ZvckVhY2goYXJyYXksIChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmICghcGFzc2VkKSB7XG4gICAgICBjb25zdCBzdGFydCA9IGluZGV4LCAgLy8vXG4gICAgICAgICAgICBkZWxldGVDb3VudCA9IDEsXG4gICAgICAgICAgICBkZWxldGVkRWxlbWVudHMgPSBhcnJheS5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50KSxcbiAgICAgICAgICAgIGZpcnN0RGVsZXRlZEVsZW1lbnQgPSBmaXJzdChkZWxldGVkRWxlbWVudHMpO1xuICAgICAgXG4gICAgICBkZWxldGVkRWxlbWVudHMudW5zaGlmdChmaXJzdERlbGV0ZWRFbGVtZW50KTsgIC8vL1xuICAgIH1cbiAgfSk7XG4gIFxuICByZXR1cm4gZGVsZXRlZEVsZW1lbnRzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJ1bmUoYXJyYXksIGNhbGxiYWNrKSB7XG4gIGxldCBkZWxldGVkRWxlbWVudCA9IHVuZGVmaW5lZDtcbiAgXG4gIGFycmF5LnNvbWUoKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKCFwYXNzZWQpIHtcbiAgICAgIGNvbnN0IHN0YXJ0ID0gaW5kZXgsICAvLy9cbiAgICAgICAgICAgIGRlbGV0ZUNvdW50ID0gMSxcbiAgICAgICAgICAgIGRlbGV0ZWRFbGVtZW50cyA9IGFycmF5LnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQpLFxuICAgICAgICAgICAgZmlyc3REZWxldGVkRWxlbWVudCA9IGZpcnN0KGRlbGV0ZWRFbGVtZW50cyk7XG4gICAgICBcbiAgICAgIGRlbGV0ZWRFbGVtZW50ID0gZmlyc3REZWxldGVkRWxlbWVudDsgIC8vL1xuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuICBcbiAgcmV0dXJuIGRlbGV0ZWRFbGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXh0cmFjdChhcnJheSwgY2FsbGJhY2spIHtcbiAgbGV0IGRlbGV0ZWRFbGVtZW50ID0gdW5kZWZpbmVkO1xuXG4gIGFycmF5LnNvbWUoKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgY29uc3Qgc3RhcnQgPSBpbmRleCwgIC8vL1xuICAgICAgICAgICAgZGVsZXRlQ291bnQgPSAxLFxuICAgICAgICAgICAgZGVsZXRlZEVsZW1lbnRzID0gYXJyYXkuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCksXG4gICAgICAgICAgICBmaXJzdERlbGV0ZWRFbGVtZW50ID0gZmlyc3QoZGVsZXRlZEVsZW1lbnRzKTtcblxuICAgICAgZGVsZXRlZEVsZW1lbnQgPSBmaXJzdERlbGV0ZWRFbGVtZW50OyAgLy8vXG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGRlbGV0ZWRFbGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGF0Y2goYXJyYXksIGVsZW1lbnQsIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGZvdW5kID0gYXJyYXkuc29tZSgoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBwYXNzZWQgPSBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAocGFzc2VkKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG5cbiAgaWYgKGZvdW5kKSB7XG4gICAgYXJyYXkucHVzaChlbGVtZW50KTtcbiAgfVxuXG4gIHJldHVybiBmb3VuZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXByZXNzKGFycmF5LCBjYWxsYmFjaykge1xuICBsZXQgaW5kZXgxID0gMCxcbiAgICAgIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICB3aGlsZSAoaW5kZXgxIDwgbGVuZ3RoKSB7XG4gICAgY29uc3QgZWxlbWVudEIgPSBhcnJheVtpbmRleDFdO1xuXG4gICAgZm9yIChsZXQgaW5kZXgyID0gbGVuZ3RoIC0gMTsgaW5kZXgyID4gaW5kZXgxOyBpbmRleDItLSkge1xuICAgICAgY29uc3QgZWxlbWVudEEgPSBhcnJheVtpbmRleDJdLFxuICAgICAgICAgICAgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudEEsIGVsZW1lbnRCKTtcblxuICAgICAgaWYgKHBhc3NlZCkge1xuICAgICAgICBjb25zdCBzdGFydCA9IGluZGV4MiwgLy8vXG4gICAgICAgICAgICAgIGRlbGV0ZUNvdW50ID0gMTtcblxuICAgICAgICBhcnJheS5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpbmRleDErKztcblxuICAgIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tYmluZShhcnJheUEsIGFycmF5QiwgY2FsbGJhY2spIHtcbiAgY29uc3QgYXJyYXkgPSBbXG4gICAgLi4uYXJyYXlBLFxuICAgIC4uLmFycmF5QlxuICBdO1xuXG4gIGNvbXByZXNzKGFycmF5LCBjYWxsYmFjayk7XG5cbiAgcmV0dXJuIGFycmF5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmV2ZXJzZShhcnJheSkge1xuICBhcnJheSA9IFsgLy8vXG4gICAgLi4uYXJyYXlcbiAgXS5yZXZlcnNlKCk7XG5cbiAgcmV0dXJuIGFycmF5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXVnbWVudChhcnJheUEsIGFycmF5QiwgY2FsbGJhY2spIHtcbiAgYXJyYXlCLmZvckVhY2goKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgYXJyYXlBLnB1c2goZWxlbWVudCk7XG4gICAgfVxuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlcGFyYXRlKGFycmF5LCBhcnJheUEsIGFycmF5QiwgY2FsbGJhY2spIHtcbiAgYXJyYXkuZm9yRWFjaCgoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBwYXNzZWQgPSBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG5cbiAgICBwYXNzZWQgP1xuICAgICAgYXJyYXlBLnB1c2goZWxlbWVudCkgOlxuICAgICAgICBhcnJheUIucHVzaChlbGVtZW50KTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3J3YXJkc0ZpbmQoYXJyYXksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhcnJheUxlbmd0aDsgaW5kZXgrKykge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF0sXG4gICAgICAgICAgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYmFja3dhcmRzRmluZChhcnJheSwgY2FsbGJhY2spIHtcbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSBhcnJheUxlbmd0aCAtIDE7IGluZGV4ID49IDA7IGluZGV4LS0pIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdLFxuICAgICAgICAgIHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmIChwYXNzZWQpIHtcbiAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcndhcmRzU29tZShhcnJheSwgY2FsbGJhY2spIHtcbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGFycmF5TGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XSxcbiAgICAgICAgICBwYXNzZWQgPSBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG4gICAgXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYmFja3dhcmRzU29tZShhcnJheSwgY2FsbGJhY2spIHtcbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSBhcnJheUxlbmd0aCAtIDE7IGluZGV4ID49IDA7IGluZGV4LS0pIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdLFxuICAgICAgICAgIHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmIChwYXNzZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcndhcmRzRXZlcnkoYXJyYXksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhcnJheUxlbmd0aDsgaW5kZXgrKykge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF0sXG4gICAgICAgICAgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKCFwYXNzZWQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJhY2t3YXJkc0V2ZXJ5KGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IGFycmF5TGVuZ3RoIC0gMTsgaW5kZXggPj0gMDsgaW5kZXgtLSkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF0sXG4gICAgICAgICAgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKCFwYXNzZWQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcndhcmRzUmVkdWNlKGFycmF5LCBjYWxsYmFjaywgaW5pdGlhbFZhbHVlKSB7XG4gIGxldCB2YWx1ZSA9IGluaXRpYWxWYWx1ZTsgLy8vXG5cbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGFycmF5TGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XTtcblxuICAgIHZhbHVlID0gY2FsbGJhY2sodmFsdWUsIGVsZW1lbnQsIGluZGV4KTtcbiAgfVxuXG4gIHJldHVybiB2YWx1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJhY2t3YXJkc1JlZHVjZShhcnJheSwgY2FsbGJhY2ssIGluaXRpYWxWYWx1ZSkge1xuICBsZXQgdmFsdWUgPSBpbml0aWFsVmFsdWU7IC8vL1xuXG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gYXJyYXlMZW5ndGggLSAxOyBpbmRleCA+PSAwOyBpbmRleC0tKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XTtcblxuICAgIHZhbHVlID0gY2FsbGJhY2sodmFsdWUsIGVsZW1lbnQsIGluZGV4KTtcbiAgfVxuXG4gIHJldHVybiB2YWx1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcndhcmRzRm9yRWFjaChhcnJheSwgY2FsbGJhY2spIHtcbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGFycmF5TGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XTtcblxuICAgIGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYmFja3dhcmRzRm9yRWFjaChhcnJheSwgY2FsbGJhY2spIHtcbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSBhcnJheUxlbmd0aCAtIDE7IGluZGV4ID49IDA7IGluZGV4LS0pIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdO1xuXG4gICAgY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3J3YXJkc0ZpbmRJbmRleChhcnJheSwgY2FsbGJhY2spIHtcbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGFycmF5TGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XSxcbiAgICAgICAgICBwYXNzZWQgPSBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAocGFzc2VkKSB7XG4gICAgICByZXR1cm4gaW5kZXg7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIC0xO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYmFja3dhcmRzRmluZEluZGV4KGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IGFycmF5TGVuZ3RoIC0gMTsgaW5kZXggPj0gMDsgaW5kZXgtLSkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF0sXG4gICAgICAgICAgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgcmV0dXJuIGluZGV4O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAtMTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBmaXJzdCxcbiAgc2Vjb25kLFxuICB0aGlyZCxcbiAgZm91cnRoLFxuICBmaWZ0aCxcbiAgc2l4dGgsXG4gIHNldmVudGgsXG4gIGVpZ2h0aCxcbiAgbmludGgsXG4gIGZpcnN0TGFzdCxcbiAgc2Vjb25kTGFzdCxcbiAgdGhpcmRMYXN0LFxuICBmb3VydGhMYXN0LFxuICBmaWZ0aExhc3QsXG4gIHNpeHRoTGFzdCxcbiAgc2V2ZW50aExhc3QsXG4gIGVpZ2h0aExhc3QsXG4gIG5pbnRoTGFzdCxcbiAgbGFzdCxcbiAgaGVhZCxcbiAgdGFpbCxcbiAgYmFjayxcbiAgZnJvbnQsXG4gIHB1c2gsXG4gIHVuc2hpZnQsXG4gIGNvbmNhdCxcbiAgY2xlYXIsXG4gIGNvcHksXG4gIG1lcmdlLFxuICBtYXRjaCxcbiAgY29tcGFyZSxcbiAgY29ycmVsYXRlLFxuICByZXNvbHZlLFxuICBmaW5kLFxuICByZXBsYWNlLFxuICBzcGxpY2UsXG4gIGZpbHRlcixcbiAgcHJ1bmUsXG4gIGV4dHJhY3QsXG4gIHBhdGNoLFxuICBjb21wcmVzcyxcbiAgY29tYmluZSxcbiAgcmV2ZXJzZSxcbiAgYXVnbWVudCxcbiAgc2VwYXJhdGUsXG4gIGZvcndhcmRzRmluZCxcbiAgYmFja3dhcmRzRmluZCxcbiAgZm9yd2FyZHNTb21lLFxuICBiYWNrd2FyZHNTb21lLFxuICBmb3J3YXJkc0V2ZXJ5LFxuICBiYWNrd2FyZHNFdmVyeSxcbiAgZm9yd2FyZHNSZWR1Y2UsXG4gIGJhY2t3YXJkc1JlZHVjZSxcbiAgZm9yd2FyZHNGb3JFYWNoLFxuICBiYWNrd2FyZHNGb3JFYWNoLFxuICBmb3J3YXJkc0ZpbmRJbmRleCxcbiAgYmFja3dhcmRzRmluZEluZGV4XG59O1xuIl0sIm5hbWVzIjpbImF1Z21lbnQiLCJiYWNrIiwiYmFja3dhcmRzRXZlcnkiLCJiYWNrd2FyZHNGaW5kIiwiYmFja3dhcmRzRmluZEluZGV4IiwiYmFja3dhcmRzRm9yRWFjaCIsImJhY2t3YXJkc1JlZHVjZSIsImJhY2t3YXJkc1NvbWUiLCJjbGVhciIsImNvbWJpbmUiLCJjb21wYXJlIiwiY29tcHJlc3MiLCJjb25jYXQiLCJjb3B5IiwiY29ycmVsYXRlIiwiZWlnaHRoIiwiZWlnaHRoTGFzdCIsImV4dHJhY3QiLCJmaWZ0aCIsImZpZnRoTGFzdCIsImZpbHRlciIsImZpbmQiLCJmaXJzdCIsImZpcnN0TGFzdCIsImZvcndhcmRzRXZlcnkiLCJmb3J3YXJkc0ZpbmQiLCJmb3J3YXJkc0ZpbmRJbmRleCIsImZvcndhcmRzRm9yRWFjaCIsImZvcndhcmRzUmVkdWNlIiwiZm9yd2FyZHNTb21lIiwiZm91cnRoIiwiZm91cnRoTGFzdCIsImZyb250IiwiaGVhZCIsImxhc3QiLCJtYXRjaCIsIm1lcmdlIiwibmludGgiLCJuaW50aExhc3QiLCJwYXRjaCIsInBydW5lIiwicHVzaCIsInJlcGxhY2UiLCJyZXNvbHZlIiwicmV2ZXJzZSIsInNlY29uZCIsInNlY29uZExhc3QiLCJzZXBhcmF0ZSIsInNldmVudGgiLCJzZXZlbnRoTGFzdCIsInNpeHRoIiwic2l4dGhMYXN0Iiwic3BsaWNlIiwidGFpbCIsInRlbnRoIiwidGhpcmQiLCJ0aGlyZExhc3QiLCJ1bnNoaWZ0IiwiYXJyYXkiLCJsZW5ndGgiLCJzbGljZSIsIk1hdGgiLCJtYXgiLCJhcnJheUEiLCJhcnJheUIiLCJBcnJheSIsInByb3RvdHlwZSIsImFwcGx5IiwiZWxlbWVudE9yQXJyYXkyIiwic3RhcnQiLCJkZWxldGVDb3VudCIsImNhbGxiYWNrIiwibWF0Y2hlcyIsImFycmF5QUxlbmd0aCIsImFycmF5Qkxlbmd0aCIsImV2ZXJ5IiwiZWxlbWVudEEiLCJpbmRleCIsImVsZW1lbnRCIiwicGFzc2VkIiwiY291cGxlZCIsInJlc3VsdCIsImNvcnJlbGF0ZXMiLCJyZXNvbHZlZCIsImZvckVhY2giLCJhcnJheUJJbmNsdWRlc0VsZW1lbnRBIiwiaW5jbHVkZXMiLCJlbGVtZW50cyIsImVsZW1lbnQiLCJmb3VuZCIsInNvbWUiLCJJbmZpbml0eSIsImFyZ3MiLCJkZWxldGVkRWxlbWVudHMiLCJmaXJzdERlbGV0ZWRFbGVtZW50IiwiZGVsZXRlZEVsZW1lbnQiLCJ1bmRlZmluZWQiLCJpbmRleDEiLCJpbmRleDIiLCJhcnJheUxlbmd0aCIsImluaXRpYWxWYWx1ZSIsInZhbHVlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7UUF5V2dCQTtlQUFBQTs7UUEzVEFDO2VBQUFBOztRQTBaQUM7ZUFBQUE7O1FBNURBQztlQUFBQTs7UUEwSUFDO2VBQUFBOztRQXpCQUM7ZUFBQUE7O1FBeEJBQztlQUFBQTs7UUEzREFDO2VBQUFBOztRQTVXQUM7ZUFBQUE7O1FBd1JBQztlQUFBQTs7UUFyUEFDO2VBQUFBOztRQTROQUM7ZUFBQUE7O1FBdlFBQztlQUFBQTs7UUFjQUM7ZUFBQUE7O1FBMERBQztlQUFBQTs7UUF1YWhCO2VBQUE7O1FBcmhCZ0JDO2VBQUFBOztRQW9CQUM7ZUFBQUE7O1FBbVBBQztlQUFBQTs7UUE3UUFDO2VBQUFBOztRQW9CQUM7ZUFBQUE7O1FBaU5BQztlQUFBQTs7UUEzQ0FDO2VBQUFBOztRQWxNQUM7ZUFBQUE7O1FBb0JBQztlQUFBQTs7UUFtYUFDO2VBQUFBOztRQTVEQUM7ZUFBQUE7O1FBMElBQztlQUFBQTs7UUFwQkFDO2VBQUFBOztRQTVC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
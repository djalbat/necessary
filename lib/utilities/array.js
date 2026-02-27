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
    const arrayB = elementOrArray2 instanceof Array ? elementOrArray2 : [
        elementOrArray2
    ];
    push(arrayA, arrayB);
}
function clear(array) {
    const start = 0;
    return array.splice(start);
}
function copy(arrayA, arrayB) {
    const start = 0, deleteCount = arrayB.length; ///
    splice(arrayA, start, deleteCount, arrayB);
}
function merge(arrayA, arrayB) {
    Array.prototype.push.apply(arrayA, arrayB);
}
function match(arrayA, arrayB, callback) {
    let matches = false;
    const arrayALength = arrayA.length, arrayBLength = arrayB.length;
    if (arrayALength === arrayBLength) {
        matches = arrayA.every((elementA, index)=>{
            const elementB = arrayB[index], passed = callback(elementA, elementB, index);
            if (passed) {
                return true;
            }
        });
    }
    return matches;
}
function compare(arrayA, arrayB, callback) {
    let coupled = false;
    const arrayALength = arrayA.length, arrayBLength = arrayB.length;
    if (arrayALength === arrayBLength) {
        arrayB = [
            ...arrayB
        ];
        coupled = arrayA.every((elementA, index)=>{
            const elementB = extract(arrayB, (elementB)=>{
                const result = callback(elementA, elementB);
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
    arrayB = [
        ...arrayB
    ];
    const correlates = arrayA.every((elementA)=>{
        const elementB = extract(arrayB, (elementB)=>{
            const result = callback(elementA, elementB);
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
    let resolved;
    arrayA = [
        ...arrayA
    ];
    for(;;){
        const arrayALength = arrayA.length;
        if (arrayALength === 0) {
            break;
        }
        let resolved = false;
        arrayA.forEach((elementA)=>{
            const passed = callback(elementA);
            if (passed) {
                const elementB = elementA; ///
                arrayB.push(elementB);
                resolved = true;
            }
        });
        if (!resolved) {
            break;
        }
        filter(arrayA, (elementA)=>{
            const arrayBIncludesElementA = arrayB.includes(elementA);
            if (!arrayBIncludesElementA) {
                return true;
            }
        });
    }
    const arrayALength = arrayA.length;
    resolved = arrayALength === 0;
    return resolved;
}
function find(array, callback) {
    const elements = [];
    forwardsForEach(array, (element, index)=>{
        const passed = callback(element, index);
        if (passed) {
            elements.push(element);
        }
    });
    return elements;
}
function replace(array, element, callback) {
    let start;
    const found = array.some((element, index)=>{
        const passed = callback(element, index);
        if (passed) {
            start = index; ///
            return true;
        }
    });
    if (found) {
        const deleteCount = 1;
        array.splice(start, deleteCount, element);
    }
    return found;
}
function splice(arrayA, start, deleteCount = Infinity, arrayB = []) {
    const args = [
        start,
        deleteCount,
        ...arrayB
    ], deletedElements = Array.prototype.splice.apply(arrayA, args);
    return deletedElements;
}
function filter(array, callback) {
    const deletedElements = [];
    backwardsForEach(array, (element, index)=>{
        const passed = callback(element, index);
        if (!passed) {
            const start = index, deleteCount = 1, deletedElements = array.splice(start, deleteCount), firstDeletedElement = first(deletedElements);
            deletedElements.unshift(firstDeletedElement); ///
        }
    });
    return deletedElements;
}
function prune(array, callback) {
    let deletedElement = undefined;
    array.some((element, index)=>{
        const passed = callback(element, index);
        if (!passed) {
            const start = index, deleteCount = 1, deletedElements = array.splice(start, deleteCount), firstDeletedElement = first(deletedElements);
            deletedElement = firstDeletedElement; ///
            return true;
        }
    });
    return deletedElement;
}
function extract(array, callback) {
    let deletedElement = undefined;
    array.some((element, index)=>{
        const passed = callback(element, index);
        if (passed) {
            const start = index, deleteCount = 1, deletedElements = array.splice(start, deleteCount), firstDeletedElement = first(deletedElements);
            deletedElement = firstDeletedElement; ///
            return true;
        }
    });
    return deletedElement;
}
function patch(array, element, callback) {
    const found = array.some((element, index)=>{
        const passed = callback(element, index);
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
    let index1 = 0, length = array.length;
    while(index1 < length){
        const elementB = array[index1];
        for(let index2 = length - 1; index2 > index1; index2--){
            const elementA = array[index2], passed = callback(elementA, elementB);
            if (!passed) {
                const start = index2, deleteCount = 1;
                array.splice(start, deleteCount);
            }
        }
        index1++;
        length = array.length;
    }
}
function combine(arrayA, arrayB, callback) {
    const array = [
        ...arrayA,
        ...arrayB
    ];
    compress(array, callback);
    return array;
}
function reverse(array) {
    array = [
        ...array
    ].reverse();
    return array;
}
function augment(arrayA, arrayB, callback) {
    arrayB.forEach((element, index)=>{
        const passed = callback(element, index);
        if (passed) {
            arrayA.push(element);
        }
    });
}
function separate(array, arrayA, arrayB, callback) {
    array.forEach((element, index)=>{
        const passed = callback(element, index);
        passed ? arrayA.push(element) : arrayB.push(element);
    });
}
function forwardsFind(array, callback) {
    const arrayLength = array.length;
    for(let index = 0; index < arrayLength; index++){
        const element = array[index], passed = callback(element, index);
        if (passed) {
            return element;
        }
    }
    return false;
}
function backwardsFind(array, callback) {
    const arrayLength = array.length;
    for(let index = arrayLength - 1; index >= 0; index--){
        const element = array[index], passed = callback(element, index);
        if (passed) {
            return element;
        }
    }
    return false;
}
function forwardsSome(array, callback) {
    const arrayLength = array.length;
    for(let index = 0; index < arrayLength; index++){
        const element = array[index], passed = callback(element, index);
        if (passed) {
            return true;
        }
    }
    return false;
}
function backwardsSome(array, callback) {
    const arrayLength = array.length;
    for(let index = arrayLength - 1; index >= 0; index--){
        const element = array[index], passed = callback(element, index);
        if (passed) {
            return true;
        }
    }
    return false;
}
function forwardsEvery(array, callback) {
    const arrayLength = array.length;
    for(let index = 0; index < arrayLength; index++){
        const element = array[index], passed = callback(element, index);
        if (!passed) {
            return false;
        }
    }
    return true;
}
function backwardsEvery(array, callback) {
    const arrayLength = array.length;
    for(let index = arrayLength - 1; index >= 0; index--){
        const element = array[index], passed = callback(element, index);
        if (!passed) {
            return false;
        }
    }
    return true;
}
function forwardsReduce(array, callback, initialValue) {
    let value = initialValue; ///
    const arrayLength = array.length;
    for(let index = 0; index < arrayLength; index++){
        const element = array[index];
        value = callback(value, element, index);
    }
    return value;
}
function backwardsReduce(array, callback, initialValue) {
    let value = initialValue; ///
    const arrayLength = array.length;
    for(let index = arrayLength - 1; index >= 0; index--){
        const element = array[index];
        value = callback(value, element, index);
    }
    return value;
}
function forwardsForEach(array, callback) {
    const arrayLength = array.length;
    for(let index = 0; index < arrayLength; index++){
        const element = array[index];
        callback(element, index);
    }
}
function backwardsForEach(array, callback) {
    const arrayLength = array.length;
    for(let index = arrayLength - 1; index >= 0; index--){
        const element = array[index];
        callback(element, index);
    }
}
function forwardsFindIndex(array, callback) {
    const arrayLength = array.length;
    for(let index = 0; index < arrayLength; index++){
        const element = array[index], passed = callback(element, index);
        if (passed) {
            return index;
        }
    }
    return -1;
}
function backwardsFindIndex(array, callback) {
    const arrayLength = array.length;
    for(let index = arrayLength - 1; index >= 0; index--){
        const element = array[index], passed = callback(element, index);
        if (passed) {
            return index;
        }
    }
    return -1;
}
const _default = {
    first,
    second,
    third,
    fourth,
    fifth,
    sixth,
    seventh,
    eighth,
    ninth,
    firstLast,
    secondLast,
    thirdLast,
    fourthLast,
    fifthLast,
    sixthLast,
    seventhLast,
    eighthLast,
    ninthLast,
    last,
    head,
    tail,
    back,
    front,
    push,
    unshift,
    concat,
    clear,
    copy,
    merge,
    match,
    compare,
    correlate,
    resolve,
    find,
    replace,
    splice,
    filter,
    prune,
    extract,
    patch,
    compress,
    combine,
    reverse,
    augment,
    separate,
    forwardsFind,
    backwardsFind,
    forwardsSome,
    backwardsSome,
    forwardsEvery,
    backwardsEvery,
    forwardsReduce,
    backwardsReduce,
    forwardsForEach,
    backwardsForEach,
    forwardsFindIndex,
    backwardsFindIndex
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvYXJyYXkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBmaXJzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbMF07fVxuXG5leHBvcnQgZnVuY3Rpb24gc2Vjb25kKGFycmF5KSB7IHJldHVybiBhcnJheVsxXTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gdGhpcmQoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzJdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3VydGgoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzNdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBmaWZ0aChhcnJheSkgeyByZXR1cm4gYXJyYXlbNF07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIHNpeHRoKGFycmF5KSB7IHJldHVybiBhcnJheVs1XTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gc2V2ZW50aChhcnJheSkgeyByZXR1cm4gYXJyYXlbNl07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGVpZ2h0aChhcnJheSkgeyByZXR1cm4gYXJyYXlbN107IH1cblxuZXhwb3J0IGZ1bmN0aW9uIG5pbnRoKGFycmF5KSB7IHJldHVybiBhcnJheVs4XTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gdGVudGgoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzldOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBmaXJzdExhc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5W2FycmF5Lmxlbmd0aCAtIDFdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBzZWNvbmRMYXN0KGFycmF5KSB7IHJldHVybiBhcnJheVthcnJheS5sZW5ndGggLSAyXTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gdGhpcmRMYXN0KGFycmF5KSB7IHJldHVybiBhcnJheVthcnJheS5sZW5ndGggLSAzXTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gZm91cnRoTGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gNF07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpZnRoTGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gNV07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIHNpeHRoTGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gNl07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldmVudGhMYXN0KGFycmF5KSB7IHJldHVybiBhcnJheVthcnJheS5sZW5ndGggLSA3XTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gZWlnaHRoTGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gOF07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIG5pbnRoTGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gOV07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGxhc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5W2FycmF5Lmxlbmd0aCAtIDFdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBoZWFkKGFycmF5KSB7IHJldHVybiBhcnJheS5zbGljZSgwLCAxKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gdGFpbChhcnJheSkgeyByZXR1cm4gYXJyYXkuc2xpY2UoMSk7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGJhY2soYXJyYXkpIHsgcmV0dXJuIGFycmF5LnNsaWNlKGFycmF5Lmxlbmd0aCAtIDEpOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBmcm9udChhcnJheSkgeyByZXR1cm4gYXJyYXkuc2xpY2UoMCwgTWF0aC5tYXgoMSwgYXJyYXkubGVuZ3RoIC0gMSkpOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBwdXNoKGFycmF5QSwgYXJyYXlCKSB7IEFycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KGFycmF5QSwgYXJyYXlCKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gdW5zaGlmdChhcnJheUEsIGFycmF5QikgeyBBcnJheS5wcm90b3R5cGUudW5zaGlmdC5hcHBseShhcnJheUEsIGFycmF5Qik7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbmNhdChhcnJheUEsIGVsZW1lbnRPckFycmF5Mikge1xuICBjb25zdCBhcnJheUIgPSAoZWxlbWVudE9yQXJyYXkyIGluc3RhbmNlb2YgQXJyYXkpID9cbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudE9yQXJyYXkyIDpcbiAgICAgICAgICAgICAgICAgICAgIFsgZWxlbWVudE9yQXJyYXkyIF07XG4gIFxuICBwdXNoKGFycmF5QSwgYXJyYXlCKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyKGFycmF5KSB7XG4gIGNvbnN0IHN0YXJ0ID0gMDtcbiAgXG4gIHJldHVybiBhcnJheS5zcGxpY2Uoc3RhcnQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29weShhcnJheUEsIGFycmF5Qikge1xuICBjb25zdCBzdGFydCA9IDAsXG4gICAgICAgIGRlbGV0ZUNvdW50ID0gYXJyYXlCLmxlbmd0aDsgIC8vL1xuICBcbiAgc3BsaWNlKGFycmF5QSwgc3RhcnQsIGRlbGV0ZUNvdW50LCBhcnJheUIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2UoYXJyYXlBLCBhcnJheUIpIHsgQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkoYXJyYXlBLCBhcnJheUIpOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBtYXRjaChhcnJheUEsIGFycmF5QiwgY2FsbGJhY2spIHtcbiAgbGV0IG1hdGNoZXMgPSBmYWxzZTtcblxuICBjb25zdCBhcnJheUFMZW5ndGggPSBhcnJheUEubGVuZ3RoLFxuICAgICAgICBhcnJheUJMZW5ndGggPSBhcnJheUIubGVuZ3RoO1xuXG4gIGlmIChhcnJheUFMZW5ndGggPT09IGFycmF5Qkxlbmd0aCkge1xuICAgIG1hdGNoZXMgPSBhcnJheUEuZXZlcnkoKGVsZW1lbnRBLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgZWxlbWVudEIgPSBhcnJheUJbaW5kZXhdLFxuICAgICAgICAgICAgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudEEsIGVsZW1lbnRCLCBpbmRleCk7XG5cbiAgICAgIGlmIChwYXNzZWQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gbWF0Y2hlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBhcmUoYXJyYXlBLCBhcnJheUIsIGNhbGxiYWNrKSB7XG4gIGxldCBjb3VwbGVkID0gZmFsc2U7XG5cbiAgY29uc3QgYXJyYXlBTGVuZ3RoID0gYXJyYXlBLmxlbmd0aCxcbiAgICAgICAgYXJyYXlCTGVuZ3RoID0gYXJyYXlCLmxlbmd0aDtcblxuICBpZiAoYXJyYXlBTGVuZ3RoID09PSBhcnJheUJMZW5ndGgpIHtcbiAgICBhcnJheUIgPSBbICAvLy9cbiAgICAgIC4uLmFycmF5QlxuICAgIF07XG5cbiAgICBjb3VwbGVkID0gYXJyYXlBLmV2ZXJ5KChlbGVtZW50QSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IGVsZW1lbnRCID0gZXh0cmFjdChhcnJheUIsIChlbGVtZW50QikgPT4ge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBjYWxsYmFjayhlbGVtZW50QSwgZWxlbWVudEIpO1xuXG4gICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSkgfHwgbnVsbDtcblxuICAgICAgaWYgKGVsZW1lbnRCICE9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIGNvdXBsZWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb3JyZWxhdGUoYXJyYXlBLCBhcnJheUIsIGNhbGxiYWNrKSB7XG4gIGFycmF5QiA9IFsgIC8vL1xuICAgIC4uLmFycmF5QlxuICBdO1xuXG4gIGNvbnN0IGNvcnJlbGF0ZXMgPSBhcnJheUEuZXZlcnkoKGVsZW1lbnRBKSA9PiB7XG4gICAgY29uc3QgZWxlbWVudEIgPSBleHRyYWN0KGFycmF5QiwgKGVsZW1lbnRCKSA9PiB7XG4gICAgICBjb25zdCByZXN1bHQgPSBjYWxsYmFjayhlbGVtZW50QSwgZWxlbWVudEIpO1xuXG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pIHx8IG51bGw7XG5cbiAgICBpZiAoZWxlbWVudEIgIT09IG51bGwpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGNvcnJlbGF0ZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlKGFycmF5QSwgYXJyYXlCLCBjYWxsYmFjaykge1xuICBsZXQgcmVzb2x2ZWQ7XG5cbiAgYXJyYXlBID0gWyAgLy8vXG4gICAgLi4uYXJyYXlBXG4gIF07XG5cbiAgZm9yICg7Oykge1xuICAgIGNvbnN0IGFycmF5QUxlbmd0aCA9IGFycmF5QS5sZW5ndGg7XG5cbiAgICBpZiAoYXJyYXlBTGVuZ3RoID09PSAwKSB7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBsZXQgcmVzb2x2ZWQgPSBmYWxzZTtcblxuICAgIGFycmF5QS5mb3JFYWNoKChlbGVtZW50QSkgPT4ge1xuICAgICAgY29uc3QgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudEEpO1xuXG4gICAgICBpZiAocGFzc2VkKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnRCID0gZWxlbWVudEE7ICAvLy9cblxuICAgICAgICBhcnJheUIucHVzaChlbGVtZW50Qik7XG5cbiAgICAgICAgcmVzb2x2ZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKCFyZXNvbHZlZCkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgZmlsdGVyKGFycmF5QSwgKGVsZW1lbnRBKSA9PiB7XG4gICAgICBjb25zdCBhcnJheUJJbmNsdWRlc0VsZW1lbnRBID0gYXJyYXlCLmluY2x1ZGVzKGVsZW1lbnRBKTtcblxuICAgICAgaWYgKCFhcnJheUJJbmNsdWRlc0VsZW1lbnRBKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgY29uc3QgYXJyYXlBTGVuZ3RoID0gYXJyYXlBLmxlbmd0aDtcblxuICByZXNvbHZlZCA9IChhcnJheUFMZW5ndGggPT09IDApO1xuXG4gIHJldHVybiByZXNvbHZlZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbmQoYXJyYXksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGVsZW1lbnRzID0gW107XG5cbiAgZm9yd2FyZHNGb3JFYWNoKGFycmF5LCAoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBwYXNzZWQgPSBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAocGFzc2VkKSB7XG4gICAgICBlbGVtZW50cy5wdXNoKGVsZW1lbnQpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGVsZW1lbnRzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVwbGFjZShhcnJheSwgZWxlbWVudCwgY2FsbGJhY2spIHtcbiAgbGV0IHN0YXJ0O1xuICBcbiAgY29uc3QgZm91bmQgPSBhcnJheS5zb21lKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmIChwYXNzZWQpIHtcbiAgICAgIHN0YXJ0ID0gaW5kZXg7ICAvLy9cbiAgICAgIFxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcbiAgXG4gIGlmIChmb3VuZCkge1xuICAgIGNvbnN0IGRlbGV0ZUNvdW50ID0gMTtcblxuICAgIGFycmF5LnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQsIGVsZW1lbnQpO1xuICB9XG5cbiAgcmV0dXJuIGZvdW5kO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3BsaWNlKGFycmF5QSwgc3RhcnQsIGRlbGV0ZUNvdW50ID0gSW5maW5pdHksIGFycmF5QiA9IFtdKSB7XG4gIGNvbnN0IGFyZ3MgPSBbIHN0YXJ0LCBkZWxldGVDb3VudCwgLi4uYXJyYXlCIF0sXG4gICAgICAgIGRlbGV0ZWRFbGVtZW50cyA9IEFycmF5LnByb3RvdHlwZS5zcGxpY2UuYXBwbHkoYXJyYXlBLCBhcmdzKTtcblxuICByZXR1cm4gZGVsZXRlZEVsZW1lbnRzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmlsdGVyKGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBkZWxldGVkRWxlbWVudHMgPSBbXTtcbiAgXG4gIGJhY2t3YXJkc0ZvckVhY2goYXJyYXksIChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmICghcGFzc2VkKSB7XG4gICAgICBjb25zdCBzdGFydCA9IGluZGV4LCAgLy8vXG4gICAgICAgICAgICBkZWxldGVDb3VudCA9IDEsXG4gICAgICAgICAgICBkZWxldGVkRWxlbWVudHMgPSBhcnJheS5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50KSxcbiAgICAgICAgICAgIGZpcnN0RGVsZXRlZEVsZW1lbnQgPSBmaXJzdChkZWxldGVkRWxlbWVudHMpO1xuICAgICAgXG4gICAgICBkZWxldGVkRWxlbWVudHMudW5zaGlmdChmaXJzdERlbGV0ZWRFbGVtZW50KTsgIC8vL1xuICAgIH1cbiAgfSk7XG4gIFxuICByZXR1cm4gZGVsZXRlZEVsZW1lbnRzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJ1bmUoYXJyYXksIGNhbGxiYWNrKSB7XG4gIGxldCBkZWxldGVkRWxlbWVudCA9IHVuZGVmaW5lZDtcbiAgXG4gIGFycmF5LnNvbWUoKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKCFwYXNzZWQpIHtcbiAgICAgIGNvbnN0IHN0YXJ0ID0gaW5kZXgsICAvLy9cbiAgICAgICAgICAgIGRlbGV0ZUNvdW50ID0gMSxcbiAgICAgICAgICAgIGRlbGV0ZWRFbGVtZW50cyA9IGFycmF5LnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQpLFxuICAgICAgICAgICAgZmlyc3REZWxldGVkRWxlbWVudCA9IGZpcnN0KGRlbGV0ZWRFbGVtZW50cyk7XG4gICAgICBcbiAgICAgIGRlbGV0ZWRFbGVtZW50ID0gZmlyc3REZWxldGVkRWxlbWVudDsgIC8vL1xuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuICBcbiAgcmV0dXJuIGRlbGV0ZWRFbGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXh0cmFjdChhcnJheSwgY2FsbGJhY2spIHtcbiAgbGV0IGRlbGV0ZWRFbGVtZW50ID0gdW5kZWZpbmVkO1xuXG4gIGFycmF5LnNvbWUoKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgY29uc3Qgc3RhcnQgPSBpbmRleCwgIC8vL1xuICAgICAgICAgICAgZGVsZXRlQ291bnQgPSAxLFxuICAgICAgICAgICAgZGVsZXRlZEVsZW1lbnRzID0gYXJyYXkuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCksXG4gICAgICAgICAgICBmaXJzdERlbGV0ZWRFbGVtZW50ID0gZmlyc3QoZGVsZXRlZEVsZW1lbnRzKTtcblxuICAgICAgZGVsZXRlZEVsZW1lbnQgPSBmaXJzdERlbGV0ZWRFbGVtZW50OyAgLy8vXG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGRlbGV0ZWRFbGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGF0Y2goYXJyYXksIGVsZW1lbnQsIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGZvdW5kID0gYXJyYXkuc29tZSgoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBwYXNzZWQgPSBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAocGFzc2VkKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG5cbiAgaWYgKGZvdW5kKSB7XG4gICAgYXJyYXkucHVzaChlbGVtZW50KTtcbiAgfVxuXG4gIHJldHVybiBmb3VuZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXByZXNzKGFycmF5LCBjYWxsYmFjaykge1xuICBsZXQgaW5kZXgxID0gMCxcbiAgICAgIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICB3aGlsZSAoaW5kZXgxIDwgbGVuZ3RoKSB7XG4gICAgY29uc3QgZWxlbWVudEIgPSBhcnJheVtpbmRleDFdO1xuXG4gICAgZm9yIChsZXQgaW5kZXgyID0gbGVuZ3RoIC0gMTsgaW5kZXgyID4gaW5kZXgxOyBpbmRleDItLSkge1xuICAgICAgY29uc3QgZWxlbWVudEEgPSBhcnJheVtpbmRleDJdLFxuICAgICAgICAgICAgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudEEsIGVsZW1lbnRCKTtcblxuICAgICAgaWYgKCFwYXNzZWQpIHtcbiAgICAgICAgY29uc3Qgc3RhcnQgPSBpbmRleDIsIC8vL1xuICAgICAgICAgICAgICBkZWxldGVDb3VudCA9IDE7XG5cbiAgICAgICAgYXJyYXkuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaW5kZXgxKys7XG5cbiAgICBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbWJpbmUoYXJyYXlBLCBhcnJheUIsIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGFycmF5ID0gW1xuICAgIC4uLmFycmF5QSxcbiAgICAuLi5hcnJheUJcbiAgXTtcblxuICBjb21wcmVzcyhhcnJheSwgY2FsbGJhY2spO1xuXG4gIHJldHVybiBhcnJheTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJldmVyc2UoYXJyYXkpIHtcbiAgYXJyYXkgPSBbIC8vL1xuICAgIC4uLmFycmF5XG4gIF0ucmV2ZXJzZSgpO1xuXG4gIHJldHVybiBhcnJheTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGF1Z21lbnQoYXJyYXlBLCBhcnJheUIsIGNhbGxiYWNrKSB7XG4gIGFycmF5Qi5mb3JFYWNoKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmIChwYXNzZWQpIHtcbiAgICAgIGFycmF5QS5wdXNoKGVsZW1lbnQpO1xuICAgIH1cbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXBhcmF0ZShhcnJheSwgYXJyYXlBLCBhcnJheUIsIGNhbGxiYWNrKSB7XG4gIGFycmF5LmZvckVhY2goKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgcGFzc2VkID9cbiAgICAgIGFycmF5QS5wdXNoKGVsZW1lbnQpIDpcbiAgICAgICAgYXJyYXlCLnB1c2goZWxlbWVudCk7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9yd2FyZHNGaW5kKGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYXJyYXlMZW5ndGg7IGluZGV4KyspIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdLFxuICAgICAgICAgIHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmIChwYXNzZWQpIHtcbiAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJhY2t3YXJkc0ZpbmQoYXJyYXksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gYXJyYXlMZW5ndGggLSAxOyBpbmRleCA+PSAwOyBpbmRleC0tKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XSxcbiAgICAgICAgICBwYXNzZWQgPSBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAocGFzc2VkKSB7XG4gICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3J3YXJkc1NvbWUoYXJyYXksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhcnJheUxlbmd0aDsgaW5kZXgrKykge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF0sXG4gICAgICAgICAgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuICAgIFxuICAgIGlmIChwYXNzZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJhY2t3YXJkc1NvbWUoYXJyYXksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gYXJyYXlMZW5ndGggLSAxOyBpbmRleCA+PSAwOyBpbmRleC0tKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XSxcbiAgICAgICAgICBwYXNzZWQgPSBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAocGFzc2VkKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3J3YXJkc0V2ZXJ5KGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYXJyYXlMZW5ndGg7IGluZGV4KyspIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdLFxuICAgICAgICAgIHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmICghcGFzc2VkKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBiYWNrd2FyZHNFdmVyeShhcnJheSwgY2FsbGJhY2spIHtcbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSBhcnJheUxlbmd0aCAtIDE7IGluZGV4ID49IDA7IGluZGV4LS0pIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdLFxuICAgICAgICAgIHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmICghcGFzc2VkKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3J3YXJkc1JlZHVjZShhcnJheSwgY2FsbGJhY2ssIGluaXRpYWxWYWx1ZSkge1xuICBsZXQgdmFsdWUgPSBpbml0aWFsVmFsdWU7IC8vL1xuXG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhcnJheUxlbmd0aDsgaW5kZXgrKykge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF07XG5cbiAgICB2YWx1ZSA9IGNhbGxiYWNrKHZhbHVlLCBlbGVtZW50LCBpbmRleCk7XG4gIH1cblxuICByZXR1cm4gdmFsdWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBiYWNrd2FyZHNSZWR1Y2UoYXJyYXksIGNhbGxiYWNrLCBpbml0aWFsVmFsdWUpIHtcbiAgbGV0IHZhbHVlID0gaW5pdGlhbFZhbHVlOyAvLy9cblxuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IGFycmF5TGVuZ3RoIC0gMTsgaW5kZXggPj0gMDsgaW5kZXgtLSkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF07XG5cbiAgICB2YWx1ZSA9IGNhbGxiYWNrKHZhbHVlLCBlbGVtZW50LCBpbmRleCk7XG4gIH1cblxuICByZXR1cm4gdmFsdWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3J3YXJkc0ZvckVhY2goYXJyYXksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhcnJheUxlbmd0aDsgaW5kZXgrKykge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF07XG5cbiAgICBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJhY2t3YXJkc0ZvckVhY2goYXJyYXksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gYXJyYXlMZW5ndGggLSAxOyBpbmRleCA+PSAwOyBpbmRleC0tKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XTtcblxuICAgIGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9yd2FyZHNGaW5kSW5kZXgoYXJyYXksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhcnJheUxlbmd0aDsgaW5kZXgrKykge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF0sXG4gICAgICAgICAgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgcmV0dXJuIGluZGV4O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAtMTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJhY2t3YXJkc0ZpbmRJbmRleChhcnJheSwgY2FsbGJhY2spIHtcbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSBhcnJheUxlbmd0aCAtIDE7IGluZGV4ID49IDA7IGluZGV4LS0pIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdLFxuICAgICAgICAgIHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmIChwYXNzZWQpIHtcbiAgICAgIHJldHVybiBpbmRleDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gLTE7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZmlyc3QsXG4gIHNlY29uZCxcbiAgdGhpcmQsXG4gIGZvdXJ0aCxcbiAgZmlmdGgsXG4gIHNpeHRoLFxuICBzZXZlbnRoLFxuICBlaWdodGgsXG4gIG5pbnRoLFxuICBmaXJzdExhc3QsXG4gIHNlY29uZExhc3QsXG4gIHRoaXJkTGFzdCxcbiAgZm91cnRoTGFzdCxcbiAgZmlmdGhMYXN0LFxuICBzaXh0aExhc3QsXG4gIHNldmVudGhMYXN0LFxuICBlaWdodGhMYXN0LFxuICBuaW50aExhc3QsXG4gIGxhc3QsXG4gIGhlYWQsXG4gIHRhaWwsXG4gIGJhY2ssXG4gIGZyb250LFxuICBwdXNoLFxuICB1bnNoaWZ0LFxuICBjb25jYXQsXG4gIGNsZWFyLFxuICBjb3B5LFxuICBtZXJnZSxcbiAgbWF0Y2gsXG4gIGNvbXBhcmUsXG4gIGNvcnJlbGF0ZSxcbiAgcmVzb2x2ZSxcbiAgZmluZCxcbiAgcmVwbGFjZSxcbiAgc3BsaWNlLFxuICBmaWx0ZXIsXG4gIHBydW5lLFxuICBleHRyYWN0LFxuICBwYXRjaCxcbiAgY29tcHJlc3MsXG4gIGNvbWJpbmUsXG4gIHJldmVyc2UsXG4gIGF1Z21lbnQsXG4gIHNlcGFyYXRlLFxuICBmb3J3YXJkc0ZpbmQsXG4gIGJhY2t3YXJkc0ZpbmQsXG4gIGZvcndhcmRzU29tZSxcbiAgYmFja3dhcmRzU29tZSxcbiAgZm9yd2FyZHNFdmVyeSxcbiAgYmFja3dhcmRzRXZlcnksXG4gIGZvcndhcmRzUmVkdWNlLFxuICBiYWNrd2FyZHNSZWR1Y2UsXG4gIGZvcndhcmRzRm9yRWFjaCxcbiAgYmFja3dhcmRzRm9yRWFjaCxcbiAgZm9yd2FyZHNGaW5kSW5kZXgsXG4gIGJhY2t3YXJkc0ZpbmRJbmRleFxufTtcbiJdLCJuYW1lcyI6WyJhdWdtZW50IiwiYmFjayIsImJhY2t3YXJkc0V2ZXJ5IiwiYmFja3dhcmRzRmluZCIsImJhY2t3YXJkc0ZpbmRJbmRleCIsImJhY2t3YXJkc0ZvckVhY2giLCJiYWNrd2FyZHNSZWR1Y2UiLCJiYWNrd2FyZHNTb21lIiwiY2xlYXIiLCJjb21iaW5lIiwiY29tcGFyZSIsImNvbXByZXNzIiwiY29uY2F0IiwiY29weSIsImNvcnJlbGF0ZSIsImVpZ2h0aCIsImVpZ2h0aExhc3QiLCJleHRyYWN0IiwiZmlmdGgiLCJmaWZ0aExhc3QiLCJmaWx0ZXIiLCJmaW5kIiwiZmlyc3QiLCJmaXJzdExhc3QiLCJmb3J3YXJkc0V2ZXJ5IiwiZm9yd2FyZHNGaW5kIiwiZm9yd2FyZHNGaW5kSW5kZXgiLCJmb3J3YXJkc0ZvckVhY2giLCJmb3J3YXJkc1JlZHVjZSIsImZvcndhcmRzU29tZSIsImZvdXJ0aCIsImZvdXJ0aExhc3QiLCJmcm9udCIsImhlYWQiLCJsYXN0IiwibWF0Y2giLCJtZXJnZSIsIm5pbnRoIiwibmludGhMYXN0IiwicGF0Y2giLCJwcnVuZSIsInB1c2giLCJyZXBsYWNlIiwicmVzb2x2ZSIsInJldmVyc2UiLCJzZWNvbmQiLCJzZWNvbmRMYXN0Iiwic2VwYXJhdGUiLCJzZXZlbnRoIiwic2V2ZW50aExhc3QiLCJzaXh0aCIsInNpeHRoTGFzdCIsInNwbGljZSIsInRhaWwiLCJ0ZW50aCIsInRoaXJkIiwidGhpcmRMYXN0IiwidW5zaGlmdCIsImFycmF5IiwibGVuZ3RoIiwic2xpY2UiLCJNYXRoIiwibWF4IiwiYXJyYXlBIiwiYXJyYXlCIiwiQXJyYXkiLCJwcm90b3R5cGUiLCJhcHBseSIsImVsZW1lbnRPckFycmF5MiIsInN0YXJ0IiwiZGVsZXRlQ291bnQiLCJjYWxsYmFjayIsIm1hdGNoZXMiLCJhcnJheUFMZW5ndGgiLCJhcnJheUJMZW5ndGgiLCJldmVyeSIsImVsZW1lbnRBIiwiaW5kZXgiLCJlbGVtZW50QiIsInBhc3NlZCIsImNvdXBsZWQiLCJyZXN1bHQiLCJjb3JyZWxhdGVzIiwicmVzb2x2ZWQiLCJmb3JFYWNoIiwiYXJyYXlCSW5jbHVkZXNFbGVtZW50QSIsImluY2x1ZGVzIiwiZWxlbWVudHMiLCJlbGVtZW50IiwiZm91bmQiLCJzb21lIiwiSW5maW5pdHkiLCJhcmdzIiwiZGVsZXRlZEVsZW1lbnRzIiwiZmlyc3REZWxldGVkRWxlbWVudCIsImRlbGV0ZWRFbGVtZW50IiwidW5kZWZpbmVkIiwiaW5kZXgxIiwiaW5kZXgyIiwiYXJyYXlMZW5ndGgiLCJpbml0aWFsVmFsdWUiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBeVdnQkE7ZUFBQUE7O1FBM1RBQztlQUFBQTs7UUEwWkFDO2VBQUFBOztRQTVEQUM7ZUFBQUE7O1FBMElBQztlQUFBQTs7UUF6QkFDO2VBQUFBOztRQXhCQUM7ZUFBQUE7O1FBM0RBQztlQUFBQTs7UUE1V0FDO2VBQUFBOztRQXdSQUM7ZUFBQUE7O1FBclBBQztlQUFBQTs7UUE0TkFDO2VBQUFBOztRQXZRQUM7ZUFBQUE7O1FBY0FDO2VBQUFBOztRQTBEQUM7ZUFBQUE7O1FBdWFoQjtlQUFBOztRQXJoQmdCQztlQUFBQTs7UUFvQkFDO2VBQUFBOztRQW1QQUM7ZUFBQUE7O1FBN1FBQztlQUFBQTs7UUFvQkFDO2VBQUFBOztRQWlOQUM7ZUFBQUE7O1FBM0NBQztlQUFBQTs7UUFsTUFDO2VBQUFBOztRQW9CQUM7ZUFBQUE7O1FBbWFBQztlQUFBQTs7UUE1REFDO2VBQUFBOztRQTBJQUM7ZUFBQUE7O1FBcEJBQztlQUFBQTs7UUE1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
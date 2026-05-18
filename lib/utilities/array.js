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
    get one () {
        return one;
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
function one(array, callback) {
    let found = false;
    const arrayLength = array.length;
    for(let index = 0; index < arrayLength; index++){
        const element = array[index], passed = callback(element, index);
        if (passed) {
            if (!found) {
                found = true;
            } else {
                found = false;
                break;
            }
        }
    }
    return found;
}
function find(array, callback) {
    const elements = [];
    array.forEach((element, index)=>{
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
    let indexB = 0, length = array.length;
    while(indexB < length){
        const elementB = array[indexB];
        for(let indexA = length - 1; indexA > indexB; indexA--){
            const elementA = array[indexA], passed = callback(elementA, elementB);
            if (!passed) {
                const start = indexA, deleteCount = 1;
                array.splice(start, deleteCount);
            }
        }
        indexB++;
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
    one,
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvYXJyYXkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBmaXJzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbMF07fVxuXG5leHBvcnQgZnVuY3Rpb24gc2Vjb25kKGFycmF5KSB7IHJldHVybiBhcnJheVsxXTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gdGhpcmQoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzJdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3VydGgoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzNdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBmaWZ0aChhcnJheSkgeyByZXR1cm4gYXJyYXlbNF07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIHNpeHRoKGFycmF5KSB7IHJldHVybiBhcnJheVs1XTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gc2V2ZW50aChhcnJheSkgeyByZXR1cm4gYXJyYXlbNl07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGVpZ2h0aChhcnJheSkgeyByZXR1cm4gYXJyYXlbN107IH1cblxuZXhwb3J0IGZ1bmN0aW9uIG5pbnRoKGFycmF5KSB7IHJldHVybiBhcnJheVs4XTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gdGVudGgoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzldOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBmaXJzdExhc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5W2FycmF5Lmxlbmd0aCAtIDFdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBzZWNvbmRMYXN0KGFycmF5KSB7IHJldHVybiBhcnJheVthcnJheS5sZW5ndGggLSAyXTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gdGhpcmRMYXN0KGFycmF5KSB7IHJldHVybiBhcnJheVthcnJheS5sZW5ndGggLSAzXTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gZm91cnRoTGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gNF07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpZnRoTGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gNV07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIHNpeHRoTGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gNl07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldmVudGhMYXN0KGFycmF5KSB7IHJldHVybiBhcnJheVthcnJheS5sZW5ndGggLSA3XTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gZWlnaHRoTGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gOF07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIG5pbnRoTGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gOV07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGxhc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5W2FycmF5Lmxlbmd0aCAtIDFdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBoZWFkKGFycmF5KSB7IHJldHVybiBhcnJheS5zbGljZSgwLCAxKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gdGFpbChhcnJheSkgeyByZXR1cm4gYXJyYXkuc2xpY2UoMSk7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGJhY2soYXJyYXkpIHsgcmV0dXJuIGFycmF5LnNsaWNlKGFycmF5Lmxlbmd0aCAtIDEpOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBmcm9udChhcnJheSkgeyByZXR1cm4gYXJyYXkuc2xpY2UoMCwgTWF0aC5tYXgoMSwgYXJyYXkubGVuZ3RoIC0gMSkpOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBwdXNoKGFycmF5QSwgYXJyYXlCKSB7IEFycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KGFycmF5QSwgYXJyYXlCKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gdW5zaGlmdChhcnJheUEsIGFycmF5QikgeyBBcnJheS5wcm90b3R5cGUudW5zaGlmdC5hcHBseShhcnJheUEsIGFycmF5Qik7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbmNhdChhcnJheUEsIGVsZW1lbnRPckFycmF5Mikge1xuICBjb25zdCBhcnJheUIgPSAoZWxlbWVudE9yQXJyYXkyIGluc3RhbmNlb2YgQXJyYXkpID9cbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudE9yQXJyYXkyIDpcbiAgICAgICAgICAgICAgICAgICAgIFsgZWxlbWVudE9yQXJyYXkyIF07XG4gIFxuICBwdXNoKGFycmF5QSwgYXJyYXlCKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyKGFycmF5KSB7XG4gIGNvbnN0IHN0YXJ0ID0gMDtcbiAgXG4gIHJldHVybiBhcnJheS5zcGxpY2Uoc3RhcnQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29weShhcnJheUEsIGFycmF5Qikge1xuICBjb25zdCBzdGFydCA9IDAsXG4gICAgICAgIGRlbGV0ZUNvdW50ID0gYXJyYXlCLmxlbmd0aDsgIC8vL1xuICBcbiAgc3BsaWNlKGFycmF5QSwgc3RhcnQsIGRlbGV0ZUNvdW50LCBhcnJheUIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2UoYXJyYXlBLCBhcnJheUIpIHsgQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkoYXJyYXlBLCBhcnJheUIpOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBtYXRjaChhcnJheUEsIGFycmF5QiwgY2FsbGJhY2spIHtcbiAgbGV0IG1hdGNoZXMgPSBmYWxzZTtcblxuICBjb25zdCBhcnJheUFMZW5ndGggPSBhcnJheUEubGVuZ3RoLFxuICAgICAgICBhcnJheUJMZW5ndGggPSBhcnJheUIubGVuZ3RoO1xuXG4gIGlmIChhcnJheUFMZW5ndGggPT09IGFycmF5Qkxlbmd0aCkge1xuICAgIG1hdGNoZXMgPSBhcnJheUEuZXZlcnkoKGVsZW1lbnRBLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgZWxlbWVudEIgPSBhcnJheUJbaW5kZXhdLFxuICAgICAgICAgICAgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudEEsIGVsZW1lbnRCLCBpbmRleCk7XG5cbiAgICAgIGlmIChwYXNzZWQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gbWF0Y2hlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBhcmUoYXJyYXlBLCBhcnJheUIsIGNhbGxiYWNrKSB7XG4gIGxldCBjb3VwbGVkID0gZmFsc2U7XG5cbiAgY29uc3QgYXJyYXlBTGVuZ3RoID0gYXJyYXlBLmxlbmd0aCxcbiAgICAgICAgYXJyYXlCTGVuZ3RoID0gYXJyYXlCLmxlbmd0aDtcblxuICBpZiAoYXJyYXlBTGVuZ3RoID09PSBhcnJheUJMZW5ndGgpIHtcbiAgICBhcnJheUIgPSBbICAvLy9cbiAgICAgIC4uLmFycmF5QlxuICAgIF07XG5cbiAgICBjb3VwbGVkID0gYXJyYXlBLmV2ZXJ5KChlbGVtZW50QSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IGVsZW1lbnRCID0gZXh0cmFjdChhcnJheUIsIChlbGVtZW50QikgPT4ge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBjYWxsYmFjayhlbGVtZW50QSwgZWxlbWVudEIpO1xuXG4gICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSkgfHwgbnVsbDtcblxuICAgICAgaWYgKGVsZW1lbnRCICE9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIGNvdXBsZWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb3JyZWxhdGUoYXJyYXlBLCBhcnJheUIsIGNhbGxiYWNrKSB7XG4gIGFycmF5QiA9IFsgIC8vL1xuICAgIC4uLmFycmF5QlxuICBdO1xuXG4gIGNvbnN0IGNvcnJlbGF0ZXMgPSBhcnJheUEuZXZlcnkoKGVsZW1lbnRBKSA9PiB7XG4gICAgY29uc3QgZWxlbWVudEIgPSBleHRyYWN0KGFycmF5QiwgKGVsZW1lbnRCKSA9PiB7XG4gICAgICBjb25zdCByZXN1bHQgPSBjYWxsYmFjayhlbGVtZW50QSwgZWxlbWVudEIpO1xuXG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pIHx8IG51bGw7XG5cbiAgICBpZiAoZWxlbWVudEIgIT09IG51bGwpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGNvcnJlbGF0ZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlKGFycmF5QSwgYXJyYXlCLCBjYWxsYmFjaykge1xuICBsZXQgcmVzb2x2ZWQ7XG5cbiAgYXJyYXlBID0gWyAgLy8vXG4gICAgLi4uYXJyYXlBXG4gIF07XG5cbiAgZm9yICg7Oykge1xuICAgIGNvbnN0IGFycmF5QUxlbmd0aCA9IGFycmF5QS5sZW5ndGg7XG5cbiAgICBpZiAoYXJyYXlBTGVuZ3RoID09PSAwKSB7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBsZXQgcmVzb2x2ZWQgPSBmYWxzZTtcblxuICAgIGFycmF5QS5mb3JFYWNoKChlbGVtZW50QSkgPT4ge1xuICAgICAgY29uc3QgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudEEpO1xuXG4gICAgICBpZiAocGFzc2VkKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnRCID0gZWxlbWVudEE7ICAvLy9cblxuICAgICAgICBhcnJheUIucHVzaChlbGVtZW50Qik7XG5cbiAgICAgICAgcmVzb2x2ZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKCFyZXNvbHZlZCkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgZmlsdGVyKGFycmF5QSwgKGVsZW1lbnRBKSA9PiB7XG4gICAgICBjb25zdCBhcnJheUJJbmNsdWRlc0VsZW1lbnRBID0gYXJyYXlCLmluY2x1ZGVzKGVsZW1lbnRBKTtcblxuICAgICAgaWYgKCFhcnJheUJJbmNsdWRlc0VsZW1lbnRBKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgY29uc3QgYXJyYXlBTGVuZ3RoID0gYXJyYXlBLmxlbmd0aDtcblxuICByZXNvbHZlZCA9IChhcnJheUFMZW5ndGggPT09IDApO1xuXG4gIHJldHVybiByZXNvbHZlZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9uZShhcnJheSwgY2FsbGJhY2spIHtcbiAgbGV0IGZvdW5kID0gZmFsc2U7XG5cbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGFycmF5TGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XSxcbiAgICAgICAgICBwYXNzZWQgPSBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAocGFzc2VkKSB7XG4gICAgICBpZiAoIWZvdW5kKSB7XG4gICAgICAgIGZvdW5kID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZvdW5kID0gZmFsc2U7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZvdW5kO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmluZChhcnJheSwgY2FsbGJhY2spIHtcbiAgY29uc3QgZWxlbWVudHMgPSBbXTtcblxuICBhcnJheS5mb3JFYWNoKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmIChwYXNzZWQpIHtcbiAgICAgIGVsZW1lbnRzLnB1c2goZWxlbWVudCk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gZWxlbWVudHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXBsYWNlKGFycmF5LCBlbGVtZW50LCBjYWxsYmFjaykge1xuICBsZXQgc3RhcnQ7XG4gIFxuICBjb25zdCBmb3VuZCA9IGFycmF5LnNvbWUoKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgc3RhcnQgPSBpbmRleDsgIC8vL1xuICAgICAgXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuICBcbiAgaWYgKGZvdW5kKSB7XG4gICAgY29uc3QgZGVsZXRlQ291bnQgPSAxO1xuXG4gICAgYXJyYXkuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCwgZWxlbWVudCk7XG4gIH1cblxuICByZXR1cm4gZm91bmQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzcGxpY2UoYXJyYXlBLCBzdGFydCwgZGVsZXRlQ291bnQgPSBJbmZpbml0eSwgYXJyYXlCID0gW10pIHtcbiAgY29uc3QgYXJncyA9IFsgc3RhcnQsIGRlbGV0ZUNvdW50LCAuLi5hcnJheUIgXSxcbiAgICAgICAgZGVsZXRlZEVsZW1lbnRzID0gQXJyYXkucHJvdG90eXBlLnNwbGljZS5hcHBseShhcnJheUEsIGFyZ3MpO1xuXG4gIHJldHVybiBkZWxldGVkRWxlbWVudHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaWx0ZXIoYXJyYXksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGRlbGV0ZWRFbGVtZW50cyA9IFtdO1xuICBcbiAgYmFja3dhcmRzRm9yRWFjaChhcnJheSwgKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKCFwYXNzZWQpIHtcbiAgICAgIGNvbnN0IHN0YXJ0ID0gaW5kZXgsICAvLy9cbiAgICAgICAgICAgIGRlbGV0ZUNvdW50ID0gMSxcbiAgICAgICAgICAgIGRlbGV0ZWRFbGVtZW50cyA9IGFycmF5LnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQpLFxuICAgICAgICAgICAgZmlyc3REZWxldGVkRWxlbWVudCA9IGZpcnN0KGRlbGV0ZWRFbGVtZW50cyk7XG4gICAgICBcbiAgICAgIGRlbGV0ZWRFbGVtZW50cy51bnNoaWZ0KGZpcnN0RGVsZXRlZEVsZW1lbnQpOyAgLy8vXG4gICAgfVxuICB9KTtcbiAgXG4gIHJldHVybiBkZWxldGVkRWxlbWVudHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcnVuZShhcnJheSwgY2FsbGJhY2spIHtcbiAgbGV0IGRlbGV0ZWRFbGVtZW50ID0gdW5kZWZpbmVkO1xuICBcbiAgYXJyYXkuc29tZSgoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBwYXNzZWQgPSBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAoIXBhc3NlZCkge1xuICAgICAgY29uc3Qgc3RhcnQgPSBpbmRleCwgIC8vL1xuICAgICAgICAgICAgZGVsZXRlQ291bnQgPSAxLFxuICAgICAgICAgICAgZGVsZXRlZEVsZW1lbnRzID0gYXJyYXkuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCksXG4gICAgICAgICAgICBmaXJzdERlbGV0ZWRFbGVtZW50ID0gZmlyc3QoZGVsZXRlZEVsZW1lbnRzKTtcbiAgICAgIFxuICAgICAgZGVsZXRlZEVsZW1lbnQgPSBmaXJzdERlbGV0ZWRFbGVtZW50OyAgLy8vXG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG4gIFxuICByZXR1cm4gZGVsZXRlZEVsZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBleHRyYWN0KGFycmF5LCBjYWxsYmFjaykge1xuICBsZXQgZGVsZXRlZEVsZW1lbnQgPSB1bmRlZmluZWQ7XG5cbiAgYXJyYXkuc29tZSgoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBwYXNzZWQgPSBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAocGFzc2VkKSB7XG4gICAgICBjb25zdCBzdGFydCA9IGluZGV4LCAgLy8vXG4gICAgICAgICAgICBkZWxldGVDb3VudCA9IDEsXG4gICAgICAgICAgICBkZWxldGVkRWxlbWVudHMgPSBhcnJheS5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50KSxcbiAgICAgICAgICAgIGZpcnN0RGVsZXRlZEVsZW1lbnQgPSBmaXJzdChkZWxldGVkRWxlbWVudHMpO1xuXG4gICAgICBkZWxldGVkRWxlbWVudCA9IGZpcnN0RGVsZXRlZEVsZW1lbnQ7ICAvLy9cblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gZGVsZXRlZEVsZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXRjaChhcnJheSwgZWxlbWVudCwgY2FsbGJhY2spIHtcbiAgY29uc3QgZm91bmQgPSBhcnJheS5zb21lKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmIChwYXNzZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cblxuICBpZiAoZm91bmQpIHtcbiAgICBhcnJheS5wdXNoKGVsZW1lbnQpO1xuICB9XG5cbiAgcmV0dXJuIGZvdW5kO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tcHJlc3MoYXJyYXksIGNhbGxiYWNrKSB7XG4gIGxldCBpbmRleEIgPSAwLFxuICAgICAgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIHdoaWxlIChpbmRleEIgPCBsZW5ndGgpIHtcbiAgICBjb25zdCBlbGVtZW50QiA9IGFycmF5W2luZGV4Ql07XG5cbiAgICBmb3IgKGxldCBpbmRleEEgPSBsZW5ndGggLSAxOyBpbmRleEEgPiBpbmRleEI7IGluZGV4QS0tKSB7XG4gICAgICBjb25zdCBlbGVtZW50QSA9IGFycmF5W2luZGV4QV0sXG4gICAgICAgICAgICBwYXNzZWQgPSBjYWxsYmFjayhlbGVtZW50QSwgZWxlbWVudEIpO1xuXG4gICAgICBpZiAoIXBhc3NlZCkge1xuICAgICAgICBjb25zdCBzdGFydCA9IGluZGV4QSwgLy8vXG4gICAgICAgICAgICAgIGRlbGV0ZUNvdW50ID0gMTtcblxuICAgICAgICBhcnJheS5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpbmRleEIrKztcblxuICAgIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tYmluZShhcnJheUEsIGFycmF5QiwgY2FsbGJhY2spIHtcbiAgY29uc3QgYXJyYXkgPSBbXG4gICAgLi4uYXJyYXlBLFxuICAgIC4uLmFycmF5QlxuICBdO1xuXG4gIGNvbXByZXNzKGFycmF5LCBjYWxsYmFjayk7XG5cbiAgcmV0dXJuIGFycmF5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmV2ZXJzZShhcnJheSkge1xuICBhcnJheSA9IFsgLy8vXG4gICAgLi4uYXJyYXlcbiAgXS5yZXZlcnNlKCk7XG5cbiAgcmV0dXJuIGFycmF5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXVnbWVudChhcnJheUEsIGFycmF5QiwgY2FsbGJhY2spIHtcbiAgYXJyYXlCLmZvckVhY2goKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgYXJyYXlBLnB1c2goZWxlbWVudCk7XG4gICAgfVxuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlcGFyYXRlKGFycmF5LCBhcnJheUEsIGFycmF5QiwgY2FsbGJhY2spIHtcbiAgYXJyYXkuZm9yRWFjaCgoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBwYXNzZWQgPSBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG5cbiAgICBwYXNzZWQgP1xuICAgICAgYXJyYXlBLnB1c2goZWxlbWVudCkgOlxuICAgICAgICBhcnJheUIucHVzaChlbGVtZW50KTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3J3YXJkc0ZpbmQoYXJyYXksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhcnJheUxlbmd0aDsgaW5kZXgrKykge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF0sXG4gICAgICAgICAgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYmFja3dhcmRzRmluZChhcnJheSwgY2FsbGJhY2spIHtcbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSBhcnJheUxlbmd0aCAtIDE7IGluZGV4ID49IDA7IGluZGV4LS0pIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdLFxuICAgICAgICAgIHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmIChwYXNzZWQpIHtcbiAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcndhcmRzU29tZShhcnJheSwgY2FsbGJhY2spIHtcbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGFycmF5TGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XSxcbiAgICAgICAgICBwYXNzZWQgPSBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG4gICAgXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYmFja3dhcmRzU29tZShhcnJheSwgY2FsbGJhY2spIHtcbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSBhcnJheUxlbmd0aCAtIDE7IGluZGV4ID49IDA7IGluZGV4LS0pIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdLFxuICAgICAgICAgIHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmIChwYXNzZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcndhcmRzRXZlcnkoYXJyYXksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhcnJheUxlbmd0aDsgaW5kZXgrKykge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF0sXG4gICAgICAgICAgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKCFwYXNzZWQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJhY2t3YXJkc0V2ZXJ5KGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IGFycmF5TGVuZ3RoIC0gMTsgaW5kZXggPj0gMDsgaW5kZXgtLSkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF0sXG4gICAgICAgICAgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKCFwYXNzZWQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcndhcmRzUmVkdWNlKGFycmF5LCBjYWxsYmFjaywgaW5pdGlhbFZhbHVlKSB7XG4gIGxldCB2YWx1ZSA9IGluaXRpYWxWYWx1ZTsgLy8vXG5cbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGFycmF5TGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XTtcblxuICAgIHZhbHVlID0gY2FsbGJhY2sodmFsdWUsIGVsZW1lbnQsIGluZGV4KTtcbiAgfVxuXG4gIHJldHVybiB2YWx1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJhY2t3YXJkc1JlZHVjZShhcnJheSwgY2FsbGJhY2ssIGluaXRpYWxWYWx1ZSkge1xuICBsZXQgdmFsdWUgPSBpbml0aWFsVmFsdWU7IC8vL1xuXG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gYXJyYXlMZW5ndGggLSAxOyBpbmRleCA+PSAwOyBpbmRleC0tKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XTtcblxuICAgIHZhbHVlID0gY2FsbGJhY2sodmFsdWUsIGVsZW1lbnQsIGluZGV4KTtcbiAgfVxuXG4gIHJldHVybiB2YWx1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcndhcmRzRm9yRWFjaChhcnJheSwgY2FsbGJhY2spIHtcbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGFycmF5TGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XTtcblxuICAgIGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYmFja3dhcmRzRm9yRWFjaChhcnJheSwgY2FsbGJhY2spIHtcbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSBhcnJheUxlbmd0aCAtIDE7IGluZGV4ID49IDA7IGluZGV4LS0pIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdO1xuXG4gICAgY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3J3YXJkc0ZpbmRJbmRleChhcnJheSwgY2FsbGJhY2spIHtcbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGFycmF5TGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XSxcbiAgICAgICAgICBwYXNzZWQgPSBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAocGFzc2VkKSB7XG4gICAgICByZXR1cm4gaW5kZXg7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIC0xO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYmFja3dhcmRzRmluZEluZGV4KGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IGFycmF5TGVuZ3RoIC0gMTsgaW5kZXggPj0gMDsgaW5kZXgtLSkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF0sXG4gICAgICAgICAgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgcmV0dXJuIGluZGV4O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAtMTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBmaXJzdCxcbiAgc2Vjb25kLFxuICB0aGlyZCxcbiAgZm91cnRoLFxuICBmaWZ0aCxcbiAgc2l4dGgsXG4gIHNldmVudGgsXG4gIGVpZ2h0aCxcbiAgbmludGgsXG4gIGZpcnN0TGFzdCxcbiAgc2Vjb25kTGFzdCxcbiAgdGhpcmRMYXN0LFxuICBmb3VydGhMYXN0LFxuICBmaWZ0aExhc3QsXG4gIHNpeHRoTGFzdCxcbiAgc2V2ZW50aExhc3QsXG4gIGVpZ2h0aExhc3QsXG4gIG5pbnRoTGFzdCxcbiAgbGFzdCxcbiAgaGVhZCxcbiAgdGFpbCxcbiAgYmFjayxcbiAgZnJvbnQsXG4gIHB1c2gsXG4gIHVuc2hpZnQsXG4gIGNvbmNhdCxcbiAgY2xlYXIsXG4gIGNvcHksXG4gIG1lcmdlLFxuICBtYXRjaCxcbiAgY29tcGFyZSxcbiAgY29ycmVsYXRlLFxuICByZXNvbHZlLFxuICBvbmUsXG4gIGZpbmQsXG4gIHJlcGxhY2UsXG4gIHNwbGljZSxcbiAgZmlsdGVyLFxuICBwcnVuZSxcbiAgZXh0cmFjdCxcbiAgcGF0Y2gsXG4gIGNvbXByZXNzLFxuICBjb21iaW5lLFxuICByZXZlcnNlLFxuICBhdWdtZW50LFxuICBzZXBhcmF0ZSxcbiAgZm9yd2FyZHNGaW5kLFxuICBiYWNrd2FyZHNGaW5kLFxuICBmb3J3YXJkc1NvbWUsXG4gIGJhY2t3YXJkc1NvbWUsXG4gIGZvcndhcmRzRXZlcnksXG4gIGJhY2t3YXJkc0V2ZXJ5LFxuICBmb3J3YXJkc1JlZHVjZSxcbiAgYmFja3dhcmRzUmVkdWNlLFxuICBmb3J3YXJkc0ZvckVhY2gsXG4gIGJhY2t3YXJkc0ZvckVhY2gsXG4gIGZvcndhcmRzRmluZEluZGV4LFxuICBiYWNrd2FyZHNGaW5kSW5kZXhcbn07XG4iXSwibmFtZXMiOlsiYXVnbWVudCIsImJhY2siLCJiYWNrd2FyZHNFdmVyeSIsImJhY2t3YXJkc0ZpbmQiLCJiYWNrd2FyZHNGaW5kSW5kZXgiLCJiYWNrd2FyZHNGb3JFYWNoIiwiYmFja3dhcmRzUmVkdWNlIiwiYmFja3dhcmRzU29tZSIsImNsZWFyIiwiY29tYmluZSIsImNvbXBhcmUiLCJjb21wcmVzcyIsImNvbmNhdCIsImNvcHkiLCJjb3JyZWxhdGUiLCJlaWdodGgiLCJlaWdodGhMYXN0IiwiZXh0cmFjdCIsImZpZnRoIiwiZmlmdGhMYXN0IiwiZmlsdGVyIiwiZmluZCIsImZpcnN0IiwiZmlyc3RMYXN0IiwiZm9yd2FyZHNFdmVyeSIsImZvcndhcmRzRmluZCIsImZvcndhcmRzRmluZEluZGV4IiwiZm9yd2FyZHNGb3JFYWNoIiwiZm9yd2FyZHNSZWR1Y2UiLCJmb3J3YXJkc1NvbWUiLCJmb3VydGgiLCJmb3VydGhMYXN0IiwiZnJvbnQiLCJoZWFkIiwibGFzdCIsIm1hdGNoIiwibWVyZ2UiLCJuaW50aCIsIm5pbnRoTGFzdCIsIm9uZSIsInBhdGNoIiwicHJ1bmUiLCJwdXNoIiwicmVwbGFjZSIsInJlc29sdmUiLCJyZXZlcnNlIiwic2Vjb25kIiwic2Vjb25kTGFzdCIsInNlcGFyYXRlIiwic2V2ZW50aCIsInNldmVudGhMYXN0Iiwic2l4dGgiLCJzaXh0aExhc3QiLCJzcGxpY2UiLCJ0YWlsIiwidGVudGgiLCJ0aGlyZCIsInRoaXJkTGFzdCIsInVuc2hpZnQiLCJhcnJheSIsImxlbmd0aCIsInNsaWNlIiwiTWF0aCIsIm1heCIsImFycmF5QSIsImFycmF5QiIsIkFycmF5IiwicHJvdG90eXBlIiwiYXBwbHkiLCJlbGVtZW50T3JBcnJheTIiLCJzdGFydCIsImRlbGV0ZUNvdW50IiwiY2FsbGJhY2siLCJtYXRjaGVzIiwiYXJyYXlBTGVuZ3RoIiwiYXJyYXlCTGVuZ3RoIiwiZXZlcnkiLCJlbGVtZW50QSIsImluZGV4IiwiZWxlbWVudEIiLCJwYXNzZWQiLCJjb3VwbGVkIiwicmVzdWx0IiwiY29ycmVsYXRlcyIsInJlc29sdmVkIiwiZm9yRWFjaCIsImFycmF5QkluY2x1ZGVzRWxlbWVudEEiLCJpbmNsdWRlcyIsImZvdW5kIiwiYXJyYXlMZW5ndGgiLCJlbGVtZW50IiwiZWxlbWVudHMiLCJzb21lIiwiSW5maW5pdHkiLCJhcmdzIiwiZGVsZXRlZEVsZW1lbnRzIiwiZmlyc3REZWxldGVkRWxlbWVudCIsImRlbGV0ZWRFbGVtZW50IiwidW5kZWZpbmVkIiwiaW5kZXhCIiwiaW5kZXhBIiwiaW5pdGlhbFZhbHVlIiwidmFsdWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7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
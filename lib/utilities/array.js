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
    get clone () {
        return clone;
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
    get each () {
        return each;
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
    const arrayB = Array.isArray(elementOrArray2) ? elementOrArray2 : [
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
function each(array, callback) {
    let found = false;
    const arrayLength = array.length;
    for(let index = 0; index < arrayLength; index++){
        const element = array[index], passed = callback(element, index);
        if (passed) {
            found = true;
        } else {
            found = false;
            break;
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
function clone(array) {
    array = [
        ...array
    ];
    return array;
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
            const start = index, deleteCount = 1, deletedElement = array.splice(start, deleteCount).pop(); ///
            deletedElements.unshift(deletedElement); ///
        }
    });
    return deletedElements;
}
function prune(array, callback) {
    let deletedElement = undefined;
    array.some((element, index)=>{
        const passed = callback(element, index);
        if (!passed) {
            const start = index, deleteCount = 1;
            deletedElement = array.splice(start, deleteCount).pop(); ///
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
            const start = index, deleteCount = 1;
            deletedElement = array.splice(start, deleteCount).pop(); ///
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
    each,
    find,
    clone,
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvYXJyYXkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBmaXJzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbMF07fVxuXG5leHBvcnQgZnVuY3Rpb24gc2Vjb25kKGFycmF5KSB7IHJldHVybiBhcnJheVsxXTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gdGhpcmQoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzJdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3VydGgoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzNdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBmaWZ0aChhcnJheSkgeyByZXR1cm4gYXJyYXlbNF07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIHNpeHRoKGFycmF5KSB7IHJldHVybiBhcnJheVs1XTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gc2V2ZW50aChhcnJheSkgeyByZXR1cm4gYXJyYXlbNl07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGVpZ2h0aChhcnJheSkgeyByZXR1cm4gYXJyYXlbN107IH1cblxuZXhwb3J0IGZ1bmN0aW9uIG5pbnRoKGFycmF5KSB7IHJldHVybiBhcnJheVs4XTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gdGVudGgoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzldOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBmaXJzdExhc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5W2FycmF5Lmxlbmd0aCAtIDFdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBzZWNvbmRMYXN0KGFycmF5KSB7IHJldHVybiBhcnJheVthcnJheS5sZW5ndGggLSAyXTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gdGhpcmRMYXN0KGFycmF5KSB7IHJldHVybiBhcnJheVthcnJheS5sZW5ndGggLSAzXTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gZm91cnRoTGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gNF07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpZnRoTGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gNV07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIHNpeHRoTGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gNl07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldmVudGhMYXN0KGFycmF5KSB7IHJldHVybiBhcnJheVthcnJheS5sZW5ndGggLSA3XTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gZWlnaHRoTGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gOF07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIG5pbnRoTGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gOV07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGxhc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5W2FycmF5Lmxlbmd0aCAtIDFdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBoZWFkKGFycmF5KSB7IHJldHVybiBhcnJheS5zbGljZSgwLCAxKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gdGFpbChhcnJheSkgeyByZXR1cm4gYXJyYXkuc2xpY2UoMSk7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGJhY2soYXJyYXkpIHsgcmV0dXJuIGFycmF5LnNsaWNlKGFycmF5Lmxlbmd0aCAtIDEpOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBmcm9udChhcnJheSkgeyByZXR1cm4gYXJyYXkuc2xpY2UoMCwgTWF0aC5tYXgoMSwgYXJyYXkubGVuZ3RoIC0gMSkpOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBwdXNoKGFycmF5QSwgYXJyYXlCKSB7IEFycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KGFycmF5QSwgYXJyYXlCKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gdW5zaGlmdChhcnJheUEsIGFycmF5QikgeyBBcnJheS5wcm90b3R5cGUudW5zaGlmdC5hcHBseShhcnJheUEsIGFycmF5Qik7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbmNhdChhcnJheUEsIGVsZW1lbnRPckFycmF5Mikge1xuICBjb25zdCBhcnJheUIgPSBBcnJheS5pc0FycmF5KGVsZW1lbnRPckFycmF5MikgP1xuICAgICAgICAgICAgICAgICAgIGVsZW1lbnRPckFycmF5MiA6XG4gICAgICAgICAgICAgICAgICAgIFsgZWxlbWVudE9yQXJyYXkyIF07XG4gIFxuICBwdXNoKGFycmF5QSwgYXJyYXlCKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyKGFycmF5KSB7XG4gIGNvbnN0IHN0YXJ0ID0gMDtcbiAgXG4gIHJldHVybiBhcnJheS5zcGxpY2Uoc3RhcnQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29weShhcnJheUEsIGFycmF5Qikge1xuICBjb25zdCBzdGFydCA9IDAsXG4gICAgICAgIGRlbGV0ZUNvdW50ID0gYXJyYXlCLmxlbmd0aDsgIC8vL1xuICBcbiAgc3BsaWNlKGFycmF5QSwgc3RhcnQsIGRlbGV0ZUNvdW50LCBhcnJheUIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2UoYXJyYXlBLCBhcnJheUIpIHsgQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkoYXJyYXlBLCBhcnJheUIpOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBtYXRjaChhcnJheUEsIGFycmF5QiwgY2FsbGJhY2spIHtcbiAgbGV0IG1hdGNoZXMgPSBmYWxzZTtcblxuICBjb25zdCBhcnJheUFMZW5ndGggPSBhcnJheUEubGVuZ3RoLFxuICAgICAgICBhcnJheUJMZW5ndGggPSBhcnJheUIubGVuZ3RoO1xuXG4gIGlmIChhcnJheUFMZW5ndGggPT09IGFycmF5Qkxlbmd0aCkge1xuICAgIG1hdGNoZXMgPSBhcnJheUEuZXZlcnkoKGVsZW1lbnRBLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgZWxlbWVudEIgPSBhcnJheUJbaW5kZXhdLFxuICAgICAgICAgICAgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudEEsIGVsZW1lbnRCLCBpbmRleCk7XG5cbiAgICAgIGlmIChwYXNzZWQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gbWF0Y2hlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBhcmUoYXJyYXlBLCBhcnJheUIsIGNhbGxiYWNrKSB7XG4gIGxldCBjb3VwbGVkID0gZmFsc2U7XG5cbiAgY29uc3QgYXJyYXlBTGVuZ3RoID0gYXJyYXlBLmxlbmd0aCxcbiAgICAgICAgYXJyYXlCTGVuZ3RoID0gYXJyYXlCLmxlbmd0aDtcblxuICBpZiAoYXJyYXlBTGVuZ3RoID09PSBhcnJheUJMZW5ndGgpIHtcbiAgICBhcnJheUIgPSBbICAvLy9cbiAgICAgIC4uLmFycmF5QlxuICAgIF07XG5cbiAgICBjb3VwbGVkID0gYXJyYXlBLmV2ZXJ5KChlbGVtZW50QSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IGVsZW1lbnRCID0gZXh0cmFjdChhcnJheUIsIChlbGVtZW50QikgPT4ge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBjYWxsYmFjayhlbGVtZW50QSwgZWxlbWVudEIpO1xuXG4gICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSkgfHwgbnVsbDtcblxuICAgICAgaWYgKGVsZW1lbnRCICE9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIGNvdXBsZWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb3JyZWxhdGUoYXJyYXlBLCBhcnJheUIsIGNhbGxiYWNrKSB7XG4gIGFycmF5QiA9IFsgIC8vL1xuICAgIC4uLmFycmF5QlxuICBdO1xuXG4gIGNvbnN0IGNvcnJlbGF0ZXMgPSBhcnJheUEuZXZlcnkoKGVsZW1lbnRBKSA9PiB7XG4gICAgY29uc3QgZWxlbWVudEIgPSBleHRyYWN0KGFycmF5QiwgKGVsZW1lbnRCKSA9PiB7XG4gICAgICBjb25zdCByZXN1bHQgPSBjYWxsYmFjayhlbGVtZW50QSwgZWxlbWVudEIpO1xuXG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pIHx8IG51bGw7XG5cbiAgICBpZiAoZWxlbWVudEIgIT09IG51bGwpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGNvcnJlbGF0ZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlKGFycmF5QSwgYXJyYXlCLCBjYWxsYmFjaykge1xuICBsZXQgcmVzb2x2ZWQ7XG5cbiAgYXJyYXlBID0gWyAgLy8vXG4gICAgLi4uYXJyYXlBXG4gIF07XG5cbiAgZm9yICg7Oykge1xuICAgIGNvbnN0IGFycmF5QUxlbmd0aCA9IGFycmF5QS5sZW5ndGg7XG5cbiAgICBpZiAoYXJyYXlBTGVuZ3RoID09PSAwKSB7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBsZXQgcmVzb2x2ZWQgPSBmYWxzZTtcblxuICAgIGFycmF5QS5mb3JFYWNoKChlbGVtZW50QSkgPT4ge1xuICAgICAgY29uc3QgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudEEpO1xuXG4gICAgICBpZiAocGFzc2VkKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnRCID0gZWxlbWVudEE7ICAvLy9cblxuICAgICAgICBhcnJheUIucHVzaChlbGVtZW50Qik7XG5cbiAgICAgICAgcmVzb2x2ZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKCFyZXNvbHZlZCkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgZmlsdGVyKGFycmF5QSwgKGVsZW1lbnRBKSA9PiB7XG4gICAgICBjb25zdCBhcnJheUJJbmNsdWRlc0VsZW1lbnRBID0gYXJyYXlCLmluY2x1ZGVzKGVsZW1lbnRBKTtcblxuICAgICAgaWYgKCFhcnJheUJJbmNsdWRlc0VsZW1lbnRBKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgY29uc3QgYXJyYXlBTGVuZ3RoID0gYXJyYXlBLmxlbmd0aDtcblxuICByZXNvbHZlZCA9IChhcnJheUFMZW5ndGggPT09IDApO1xuXG4gIHJldHVybiByZXNvbHZlZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9uZShhcnJheSwgY2FsbGJhY2spIHtcbiAgbGV0IGZvdW5kID0gZmFsc2U7XG5cbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGFycmF5TGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XSxcbiAgICAgICAgICBwYXNzZWQgPSBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAocGFzc2VkKSB7XG4gICAgICBpZiAoIWZvdW5kKSB7XG4gICAgICAgIGZvdW5kID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZvdW5kID0gZmFsc2U7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZvdW5kO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZWFjaChhcnJheSwgY2FsbGJhY2spIHtcbiAgbGV0IGZvdW5kID0gZmFsc2U7XG5cbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGFycmF5TGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XSxcbiAgICAgICAgICBwYXNzZWQgPSBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAocGFzc2VkKSB7XG4gICAgICBmb3VuZCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvdW5kID0gZmFsc2U7XG5cbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmb3VuZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbmQoYXJyYXksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGVsZW1lbnRzID0gW107XG5cbiAgYXJyYXkuZm9yRWFjaCgoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBwYXNzZWQgPSBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAocGFzc2VkKSB7XG4gICAgICBlbGVtZW50cy5wdXNoKGVsZW1lbnQpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGVsZW1lbnRzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xvbmUoYXJyYXkpIHtcbiAgYXJyYXkgPSBbIC8vL1xuICAgIC4uLmFycmF5XG4gIF07XG5cbiAgcmV0dXJuIGFycmF5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVwbGFjZShhcnJheSwgZWxlbWVudCwgY2FsbGJhY2spIHtcbiAgbGV0IHN0YXJ0O1xuICBcbiAgY29uc3QgZm91bmQgPSBhcnJheS5zb21lKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmIChwYXNzZWQpIHtcbiAgICAgIHN0YXJ0ID0gaW5kZXg7ICAvLy9cbiAgICAgIFxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcbiAgXG4gIGlmIChmb3VuZCkge1xuICAgIGNvbnN0IGRlbGV0ZUNvdW50ID0gMTtcblxuICAgIGFycmF5LnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQsIGVsZW1lbnQpO1xuICB9XG5cbiAgcmV0dXJuIGZvdW5kO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3BsaWNlKGFycmF5QSwgc3RhcnQsIGRlbGV0ZUNvdW50ID0gSW5maW5pdHksIGFycmF5QiA9IFtdKSB7XG4gIGNvbnN0IGFyZ3MgPSBbIHN0YXJ0LCBkZWxldGVDb3VudCwgLi4uYXJyYXlCIF0sXG4gICAgICAgIGRlbGV0ZWRFbGVtZW50cyA9IEFycmF5LnByb3RvdHlwZS5zcGxpY2UuYXBwbHkoYXJyYXlBLCBhcmdzKTtcblxuICByZXR1cm4gZGVsZXRlZEVsZW1lbnRzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmlsdGVyKGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBkZWxldGVkRWxlbWVudHMgPSBbXTtcbiAgXG4gIGJhY2t3YXJkc0ZvckVhY2goYXJyYXksIChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmICghcGFzc2VkKSB7XG4gICAgICBjb25zdCBzdGFydCA9IGluZGV4LCAgLy8vXG4gICAgICAgICAgICBkZWxldGVDb3VudCA9IDEsXG4gICAgICAgICAgICBkZWxldGVkRWxlbWVudCA9IGFycmF5LnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQpLnBvcCgpOyAgLy8vXG5cbiAgICAgIGRlbGV0ZWRFbGVtZW50cy51bnNoaWZ0KGRlbGV0ZWRFbGVtZW50KTsgIC8vL1xuICAgIH1cbiAgfSk7XG4gIFxuICByZXR1cm4gZGVsZXRlZEVsZW1lbnRzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJ1bmUoYXJyYXksIGNhbGxiYWNrKSB7XG4gIGxldCBkZWxldGVkRWxlbWVudCA9IHVuZGVmaW5lZDtcbiAgXG4gIGFycmF5LnNvbWUoKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKCFwYXNzZWQpIHtcbiAgICAgIGNvbnN0IHN0YXJ0ID0gaW5kZXgsICAvLy9cbiAgICAgICAgICAgIGRlbGV0ZUNvdW50ID0gMTtcblxuICAgICAgZGVsZXRlZEVsZW1lbnQgPSBhcnJheS5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50KS5wb3AoKTsgIC8vL1xuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuICBcbiAgcmV0dXJuIGRlbGV0ZWRFbGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXh0cmFjdChhcnJheSwgY2FsbGJhY2spIHtcbiAgbGV0IGRlbGV0ZWRFbGVtZW50ID0gdW5kZWZpbmVkO1xuXG4gIGFycmF5LnNvbWUoKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgY29uc3Qgc3RhcnQgPSBpbmRleCwgIC8vL1xuICAgICAgICAgICAgZGVsZXRlQ291bnQgPSAxO1xuXG4gICAgICBkZWxldGVkRWxlbWVudCA9IGFycmF5LnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQpLnBvcCgpOyAgLy8vXG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGRlbGV0ZWRFbGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGF0Y2goYXJyYXksIGVsZW1lbnQsIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGZvdW5kID0gYXJyYXkuc29tZSgoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBwYXNzZWQgPSBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAocGFzc2VkKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG5cbiAgaWYgKGZvdW5kKSB7XG4gICAgYXJyYXkucHVzaChlbGVtZW50KTtcbiAgfVxuXG4gIHJldHVybiBmb3VuZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXByZXNzKGFycmF5LCBjYWxsYmFjaykge1xuICBsZXQgaW5kZXhCID0gMCxcbiAgICAgIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICB3aGlsZSAoaW5kZXhCIDwgbGVuZ3RoKSB7XG4gICAgY29uc3QgZWxlbWVudEIgPSBhcnJheVtpbmRleEJdO1xuXG4gICAgZm9yIChsZXQgaW5kZXhBID0gbGVuZ3RoIC0gMTsgaW5kZXhBID4gaW5kZXhCOyBpbmRleEEtLSkge1xuICAgICAgY29uc3QgZWxlbWVudEEgPSBhcnJheVtpbmRleEFdLFxuICAgICAgICAgICAgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudEEsIGVsZW1lbnRCKTtcblxuICAgICAgaWYgKCFwYXNzZWQpIHtcbiAgICAgICAgY29uc3Qgc3RhcnQgPSBpbmRleEEsIC8vL1xuICAgICAgICAgICAgICBkZWxldGVDb3VudCA9IDE7XG5cbiAgICAgICAgYXJyYXkuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaW5kZXhCKys7XG5cbiAgICBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbWJpbmUoYXJyYXlBLCBhcnJheUIsIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGFycmF5ID0gW1xuICAgIC4uLmFycmF5QSxcbiAgICAuLi5hcnJheUJcbiAgXTtcblxuICBjb21wcmVzcyhhcnJheSwgY2FsbGJhY2spO1xuXG4gIHJldHVybiBhcnJheTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJldmVyc2UoYXJyYXkpIHtcbiAgYXJyYXkgPSBbIC8vL1xuICAgIC4uLmFycmF5XG4gIF0ucmV2ZXJzZSgpO1xuXG4gIHJldHVybiBhcnJheTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGF1Z21lbnQoYXJyYXlBLCBhcnJheUIsIGNhbGxiYWNrKSB7XG4gIGFycmF5Qi5mb3JFYWNoKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmIChwYXNzZWQpIHtcbiAgICAgIGFycmF5QS5wdXNoKGVsZW1lbnQpO1xuICAgIH1cbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXBhcmF0ZShhcnJheSwgYXJyYXlBLCBhcnJheUIsIGNhbGxiYWNrKSB7XG4gIGFycmF5LmZvckVhY2goKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgcGFzc2VkID9cbiAgICAgIGFycmF5QS5wdXNoKGVsZW1lbnQpIDpcbiAgICAgICAgYXJyYXlCLnB1c2goZWxlbWVudCk7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9yd2FyZHNGaW5kKGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYXJyYXlMZW5ndGg7IGluZGV4KyspIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdLFxuICAgICAgICAgIHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmIChwYXNzZWQpIHtcbiAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJhY2t3YXJkc0ZpbmQoYXJyYXksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gYXJyYXlMZW5ndGggLSAxOyBpbmRleCA+PSAwOyBpbmRleC0tKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XSxcbiAgICAgICAgICBwYXNzZWQgPSBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAocGFzc2VkKSB7XG4gICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3J3YXJkc1NvbWUoYXJyYXksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhcnJheUxlbmd0aDsgaW5kZXgrKykge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF0sXG4gICAgICAgICAgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuICAgIFxuICAgIGlmIChwYXNzZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJhY2t3YXJkc1NvbWUoYXJyYXksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gYXJyYXlMZW5ndGggLSAxOyBpbmRleCA+PSAwOyBpbmRleC0tKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XSxcbiAgICAgICAgICBwYXNzZWQgPSBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAocGFzc2VkKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3J3YXJkc0V2ZXJ5KGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYXJyYXlMZW5ndGg7IGluZGV4KyspIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdLFxuICAgICAgICAgIHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmICghcGFzc2VkKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBiYWNrd2FyZHNFdmVyeShhcnJheSwgY2FsbGJhY2spIHtcbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSBhcnJheUxlbmd0aCAtIDE7IGluZGV4ID49IDA7IGluZGV4LS0pIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdLFxuICAgICAgICAgIHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmICghcGFzc2VkKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3J3YXJkc1JlZHVjZShhcnJheSwgY2FsbGJhY2ssIGluaXRpYWxWYWx1ZSkge1xuICBsZXQgdmFsdWUgPSBpbml0aWFsVmFsdWU7IC8vL1xuXG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhcnJheUxlbmd0aDsgaW5kZXgrKykge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF07XG5cbiAgICB2YWx1ZSA9IGNhbGxiYWNrKHZhbHVlLCBlbGVtZW50LCBpbmRleCk7XG4gIH1cblxuICByZXR1cm4gdmFsdWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBiYWNrd2FyZHNSZWR1Y2UoYXJyYXksIGNhbGxiYWNrLCBpbml0aWFsVmFsdWUpIHtcbiAgbGV0IHZhbHVlID0gaW5pdGlhbFZhbHVlOyAvLy9cblxuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IGFycmF5TGVuZ3RoIC0gMTsgaW5kZXggPj0gMDsgaW5kZXgtLSkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF07XG5cbiAgICB2YWx1ZSA9IGNhbGxiYWNrKHZhbHVlLCBlbGVtZW50LCBpbmRleCk7XG4gIH1cblxuICByZXR1cm4gdmFsdWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3J3YXJkc0ZvckVhY2goYXJyYXksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhcnJheUxlbmd0aDsgaW5kZXgrKykge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF07XG5cbiAgICBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJhY2t3YXJkc0ZvckVhY2goYXJyYXksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gYXJyYXlMZW5ndGggLSAxOyBpbmRleCA+PSAwOyBpbmRleC0tKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XTtcblxuICAgIGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9yd2FyZHNGaW5kSW5kZXgoYXJyYXksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhcnJheUxlbmd0aDsgaW5kZXgrKykge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF0sXG4gICAgICAgICAgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgcmV0dXJuIGluZGV4O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAtMTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJhY2t3YXJkc0ZpbmRJbmRleChhcnJheSwgY2FsbGJhY2spIHtcbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSBhcnJheUxlbmd0aCAtIDE7IGluZGV4ID49IDA7IGluZGV4LS0pIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdLFxuICAgICAgICAgIHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmIChwYXNzZWQpIHtcbiAgICAgIHJldHVybiBpbmRleDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gLTE7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZmlyc3QsXG4gIHNlY29uZCxcbiAgdGhpcmQsXG4gIGZvdXJ0aCxcbiAgZmlmdGgsXG4gIHNpeHRoLFxuICBzZXZlbnRoLFxuICBlaWdodGgsXG4gIG5pbnRoLFxuICBmaXJzdExhc3QsXG4gIHNlY29uZExhc3QsXG4gIHRoaXJkTGFzdCxcbiAgZm91cnRoTGFzdCxcbiAgZmlmdGhMYXN0LFxuICBzaXh0aExhc3QsXG4gIHNldmVudGhMYXN0LFxuICBlaWdodGhMYXN0LFxuICBuaW50aExhc3QsXG4gIGxhc3QsXG4gIGhlYWQsXG4gIHRhaWwsXG4gIGJhY2ssXG4gIGZyb250LFxuICBwdXNoLFxuICB1bnNoaWZ0LFxuICBjb25jYXQsXG4gIGNsZWFyLFxuICBjb3B5LFxuICBtZXJnZSxcbiAgbWF0Y2gsXG4gIGNvbXBhcmUsXG4gIGNvcnJlbGF0ZSxcbiAgcmVzb2x2ZSxcbiAgb25lLFxuICBlYWNoLFxuICBmaW5kLFxuICBjbG9uZSxcbiAgcmVwbGFjZSxcbiAgc3BsaWNlLFxuICBmaWx0ZXIsXG4gIHBydW5lLFxuICBleHRyYWN0LFxuICBwYXRjaCxcbiAgY29tcHJlc3MsXG4gIGNvbWJpbmUsXG4gIHJldmVyc2UsXG4gIGF1Z21lbnQsXG4gIHNlcGFyYXRlLFxuICBmb3J3YXJkc0ZpbmQsXG4gIGJhY2t3YXJkc0ZpbmQsXG4gIGZvcndhcmRzU29tZSxcbiAgYmFja3dhcmRzU29tZSxcbiAgZm9yd2FyZHNFdmVyeSxcbiAgYmFja3dhcmRzRXZlcnksXG4gIGZvcndhcmRzUmVkdWNlLFxuICBiYWNrd2FyZHNSZWR1Y2UsXG4gIGZvcndhcmRzRm9yRWFjaCxcbiAgYmFja3dhcmRzRm9yRWFjaCxcbiAgZm9yd2FyZHNGaW5kSW5kZXgsXG4gIGJhY2t3YXJkc0ZpbmRJbmRleFxufTtcbiJdLCJuYW1lcyI6WyJhdWdtZW50IiwiYmFjayIsImJhY2t3YXJkc0V2ZXJ5IiwiYmFja3dhcmRzRmluZCIsImJhY2t3YXJkc0ZpbmRJbmRleCIsImJhY2t3YXJkc0ZvckVhY2giLCJiYWNrd2FyZHNSZWR1Y2UiLCJiYWNrd2FyZHNTb21lIiwiY2xlYXIiLCJjbG9uZSIsImNvbWJpbmUiLCJjb21wYXJlIiwiY29tcHJlc3MiLCJjb25jYXQiLCJjb3B5IiwiY29ycmVsYXRlIiwiZWFjaCIsImVpZ2h0aCIsImVpZ2h0aExhc3QiLCJleHRyYWN0IiwiZmlmdGgiLCJmaWZ0aExhc3QiLCJmaWx0ZXIiLCJmaW5kIiwiZmlyc3QiLCJmaXJzdExhc3QiLCJmb3J3YXJkc0V2ZXJ5IiwiZm9yd2FyZHNGaW5kIiwiZm9yd2FyZHNGaW5kSW5kZXgiLCJmb3J3YXJkc0ZvckVhY2giLCJmb3J3YXJkc1JlZHVjZSIsImZvcndhcmRzU29tZSIsImZvdXJ0aCIsImZvdXJ0aExhc3QiLCJmcm9udCIsImhlYWQiLCJsYXN0IiwibWF0Y2giLCJtZXJnZSIsIm5pbnRoIiwibmludGhMYXN0Iiwib25lIiwicGF0Y2giLCJwcnVuZSIsInB1c2giLCJyZXBsYWNlIiwicmVzb2x2ZSIsInJldmVyc2UiLCJzZWNvbmQiLCJzZWNvbmRMYXN0Iiwic2VwYXJhdGUiLCJzZXZlbnRoIiwic2V2ZW50aExhc3QiLCJzaXh0aCIsInNpeHRoTGFzdCIsInNwbGljZSIsInRhaWwiLCJ0ZW50aCIsInRoaXJkIiwidGhpcmRMYXN0IiwidW5zaGlmdCIsImFycmF5IiwibGVuZ3RoIiwic2xpY2UiLCJNYXRoIiwibWF4IiwiYXJyYXlBIiwiYXJyYXlCIiwiQXJyYXkiLCJwcm90b3R5cGUiLCJhcHBseSIsImVsZW1lbnRPckFycmF5MiIsImlzQXJyYXkiLCJzdGFydCIsImRlbGV0ZUNvdW50IiwiY2FsbGJhY2siLCJtYXRjaGVzIiwiYXJyYXlBTGVuZ3RoIiwiYXJyYXlCTGVuZ3RoIiwiZXZlcnkiLCJlbGVtZW50QSIsImluZGV4IiwiZWxlbWVudEIiLCJwYXNzZWQiLCJjb3VwbGVkIiwicmVzdWx0IiwiY29ycmVsYXRlcyIsInJlc29sdmVkIiwiZm9yRWFjaCIsImFycmF5QkluY2x1ZGVzRWxlbWVudEEiLCJpbmNsdWRlcyIsImZvdW5kIiwiYXJyYXlMZW5ndGgiLCJlbGVtZW50IiwiZWxlbWVudHMiLCJzb21lIiwiSW5maW5pdHkiLCJhcmdzIiwiZGVsZXRlZEVsZW1lbnRzIiwiZGVsZXRlZEVsZW1lbnQiLCJwb3AiLCJ1bmRlZmluZWQiLCJpbmRleEIiLCJpbmRleEEiLCJpbml0aWFsVmFsdWUiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBd1pnQkE7ZUFBQUE7O1FBMVdBQztlQUFBQTs7UUF5Y0FDO2VBQUFBOztRQTVEQUM7ZUFBQUE7O1FBMElBQztlQUFBQTs7UUF6QkFDO2VBQUFBOztRQXhCQUM7ZUFBQUE7O1FBM0RBQztlQUFBQTs7UUEzWkFDO2VBQUFBOztRQWdNQUM7ZUFBQUE7O1FBdUlBQztlQUFBQTs7UUFwU0FDO2VBQUFBOztRQTJRQUM7ZUFBQUE7O1FBdFRBQztlQUFBQTs7UUFjQUM7ZUFBQUE7O1FBMERBQztlQUFBQTs7UUFzZGhCO2VBQUE7O1FBelhnQkM7ZUFBQUE7O1FBM01BQztlQUFBQTs7UUFvQkFDO2VBQUFBOztRQW9TQUM7ZUFBQUE7O1FBOVRBQztlQUFBQTs7UUFvQkFDO2VBQUFBOztRQXFRQUM7ZUFBQUE7O1FBbkRBQztlQUFBQTs7UUE5T0FDO2VBQUFBOztRQW9CQUM7ZUFBQUE7O1FBa2RBQztlQUFBQTs7UUE1REFDO2VBQUFBOztRQTBJQUM7ZUFBQUE7O1FBcEJBQztlQUFBQTs7UUE1QkFDO2VBQUFBOztRQTVEQUM7ZUFBQUE7O1FBbGNBQztlQUFBQTs7UUFvQkFDO2VBQUFBOztRQW9CQUM7ZUFBQUE7O1FBTkFDO2VBQUFBOztRQUZBQztlQUFBQTs7UUFxQ0FDO2VBQUFBOztRQUZBQztlQUFBQTs7UUF6REFDO2VBQUFBOztRQW9CQUM7ZUFBQUE7O1FBOEpBQztlQUFBQTs7UUF1SkFDO2VBQUFBOztRQXRDQUM7ZUFBQUE7O1FBblFBQztlQUFBQTs7UUFvTkFDO2VBQUFBOztRQWxIQUM7ZUFBQUE7O1FBNFBBQztlQUFBQTs7UUE1WUFDO2VBQUFBOztRQW9CQUM7ZUFBQUE7O1FBMFlBQztlQUFBQTs7UUFwWkFDO2VBQUFBOztRQW9CQUM7ZUFBQUE7O1FBdEJBQztlQUFBQTs7UUFvQkFDO2VBQUFBOztRQTRQQUM7ZUFBQUE7O1FBaFBBQztlQUFBQTs7UUF4QkFDO2VBQUFBOztRQWRBQztlQUFBQTs7UUFvQkFDO2VBQUFBOztRQTBCQUM7ZUFBQUE7OztBQWxEVCxTQUFTcEMsTUFBTXFDLEtBQUs7SUFBSSxPQUFPQSxLQUFLLENBQUMsRUFBRTtBQUFDO0FBRXhDLFNBQVNiLE9BQU9hLEtBQUs7SUFBSSxPQUFPQSxLQUFLLENBQUMsRUFBRTtBQUFFO0FBRTFDLFNBQVNILE1BQU1HLEtBQUs7SUFBSSxPQUFPQSxLQUFLLENBQUMsRUFBRTtBQUFFO0FBRXpDLFNBQVM3QixPQUFPNkIsS0FBSztJQUFJLE9BQU9BLEtBQUssQ0FBQyxFQUFFO0FBQUU7QUFFMUMsU0FBU3pDLE1BQU15QyxLQUFLO0lBQUksT0FBT0EsS0FBSyxDQUFDLEVBQUU7QUFBRTtBQUV6QyxTQUFTUixNQUFNUSxLQUFLO0lBQUksT0FBT0EsS0FBSyxDQUFDLEVBQUU7QUFBRTtBQUV6QyxTQUFTVixRQUFRVSxLQUFLO0lBQUksT0FBT0EsS0FBSyxDQUFDLEVBQUU7QUFBRTtBQUUzQyxTQUFTNUMsT0FBTzRDLEtBQUs7SUFBSSxPQUFPQSxLQUFLLENBQUMsRUFBRTtBQUFFO0FBRTFDLFNBQVN0QixNQUFNc0IsS0FBSztJQUFJLE9BQU9BLEtBQUssQ0FBQyxFQUFFO0FBQUU7QUFFekMsU0FBU0osTUFBTUksS0FBSztJQUFJLE9BQU9BLEtBQUssQ0FBQyxFQUFFO0FBQUU7QUFFekMsU0FBU3BDLFVBQVVvQyxLQUFLO0lBQUksT0FBT0EsS0FBSyxDQUFDQSxNQUFNQyxNQUFNLEdBQUcsRUFBRTtBQUFFO0FBRTVELFNBQVNiLFdBQVdZLEtBQUs7SUFBSSxPQUFPQSxLQUFLLENBQUNBLE1BQU1DLE1BQU0sR0FBRyxFQUFFO0FBQUU7QUFFN0QsU0FBU0gsVUFBVUUsS0FBSztJQUFJLE9BQU9BLEtBQUssQ0FBQ0EsTUFBTUMsTUFBTSxHQUFHLEVBQUU7QUFBRTtBQUU1RCxTQUFTN0IsV0FBVzRCLEtBQUs7SUFBSSxPQUFPQSxLQUFLLENBQUNBLE1BQU1DLE1BQU0sR0FBRyxFQUFFO0FBQUU7QUFFN0QsU0FBU3pDLFVBQVV3QyxLQUFLO0lBQUksT0FBT0EsS0FBSyxDQUFDQSxNQUFNQyxNQUFNLEdBQUcsRUFBRTtBQUFFO0FBRTVELFNBQVNSLFVBQVVPLEtBQUs7SUFBSSxPQUFPQSxLQUFLLENBQUNBLE1BQU1DLE1BQU0sR0FBRyxFQUFFO0FBQUU7QUFFNUQsU0FBU1YsWUFBWVMsS0FBSztJQUFJLE9BQU9BLEtBQUssQ0FBQ0EsTUFBTUMsTUFBTSxHQUFHLEVBQUU7QUFBRTtBQUU5RCxTQUFTNUMsV0FBVzJDLEtBQUs7SUFBSSxPQUFPQSxLQUFLLENBQUNBLE1BQU1DLE1BQU0sR0FBRyxFQUFFO0FBQUU7QUFFN0QsU0FBU3RCLFVBQVVxQixLQUFLO0lBQUksT0FBT0EsS0FBSyxDQUFDQSxNQUFNQyxNQUFNLEdBQUcsRUFBRTtBQUFFO0FBRTVELFNBQVMxQixLQUFLeUIsS0FBSztJQUFJLE9BQU9BLEtBQUssQ0FBQ0EsTUFBTUMsTUFBTSxHQUFHLEVBQUU7QUFBRTtBQUV2RCxTQUFTM0IsS0FBSzBCLEtBQUs7SUFBSSxPQUFPQSxNQUFNRSxLQUFLLENBQUMsR0FBRztBQUFJO0FBRWpELFNBQVNQLEtBQUtLLEtBQUs7SUFBSSxPQUFPQSxNQUFNRSxLQUFLLENBQUM7QUFBSTtBQUU5QyxTQUFTOUQsS0FBSzRELEtBQUs7SUFBSSxPQUFPQSxNQUFNRSxLQUFLLENBQUNGLE1BQU1DLE1BQU0sR0FBRztBQUFJO0FBRTdELFNBQVM1QixNQUFNMkIsS0FBSztJQUFJLE9BQU9BLE1BQU1FLEtBQUssQ0FBQyxHQUFHQyxLQUFLQyxHQUFHLENBQUMsR0FBR0osTUFBTUMsTUFBTSxHQUFHO0FBQUs7QUFFOUUsU0FBU2xCLEtBQUtzQixNQUFNLEVBQUVDLE1BQU07SUFBSUMsTUFBTUMsU0FBUyxDQUFDekIsSUFBSSxDQUFDMEIsS0FBSyxDQUFDSixRQUFRQztBQUFTO0FBRTVFLFNBQVNQLFFBQVFNLE1BQU0sRUFBRUMsTUFBTTtJQUFJQyxNQUFNQyxTQUFTLENBQUNULE9BQU8sQ0FBQ1UsS0FBSyxDQUFDSixRQUFRQztBQUFTO0FBRWxGLFNBQVN0RCxPQUFPcUQsTUFBTSxFQUFFSyxlQUFlO0lBQzVDLE1BQU1KLFNBQVNDLE1BQU1JLE9BQU8sQ0FBQ0QsbUJBQ1pBLGtCQUNDO1FBQUVBO0tBQWlCO0lBRXJDM0IsS0FBS3NCLFFBQVFDO0FBQ2Y7QUFFTyxTQUFTM0QsTUFBTXFELEtBQUs7SUFDekIsTUFBTVksUUFBUTtJQUVkLE9BQU9aLE1BQU1OLE1BQU0sQ0FBQ2tCO0FBQ3RCO0FBRU8sU0FBUzNELEtBQUtvRCxNQUFNLEVBQUVDLE1BQU07SUFDakMsTUFBTU0sUUFBUSxHQUNSQyxjQUFjUCxPQUFPTCxNQUFNLEVBQUcsR0FBRztJQUV2Q1AsT0FBT1csUUFBUU8sT0FBT0MsYUFBYVA7QUFDckM7QUFFTyxTQUFTN0IsTUFBTTRCLE1BQU0sRUFBRUMsTUFBTTtJQUFJQyxNQUFNQyxTQUFTLENBQUN6QixJQUFJLENBQUMwQixLQUFLLENBQUNKLFFBQVFDO0FBQVM7QUFFN0UsU0FBUzlCLE1BQU02QixNQUFNLEVBQUVDLE1BQU0sRUFBRVEsUUFBUTtJQUM1QyxJQUFJQyxVQUFVO0lBRWQsTUFBTUMsZUFBZVgsT0FBT0osTUFBTSxFQUM1QmdCLGVBQWVYLE9BQU9MLE1BQU07SUFFbEMsSUFBSWUsaUJBQWlCQyxjQUFjO1FBQ2pDRixVQUFVVixPQUFPYSxLQUFLLENBQUMsQ0FBQ0MsVUFBVUM7WUFDaEMsTUFBTUMsV0FBV2YsTUFBTSxDQUFDYyxNQUFNLEVBQ3hCRSxTQUFTUixTQUFTSyxVQUFVRSxVQUFVRDtZQUU1QyxJQUFJRSxRQUFRO2dCQUNWLE9BQU87WUFDVDtRQUNGO0lBQ0Y7SUFFQSxPQUFPUDtBQUNUO0FBRU8sU0FBU2pFLFFBQVF1RCxNQUFNLEVBQUVDLE1BQU0sRUFBRVEsUUFBUTtJQUM5QyxJQUFJUyxVQUFVO0lBRWQsTUFBTVAsZUFBZVgsT0FBT0osTUFBTSxFQUM1QmdCLGVBQWVYLE9BQU9MLE1BQU07SUFFbEMsSUFBSWUsaUJBQWlCQyxjQUFjO1FBQ2pDWCxTQUFTO2VBQ0pBO1NBQ0o7UUFFRGlCLFVBQVVsQixPQUFPYSxLQUFLLENBQUMsQ0FBQ0MsVUFBVUM7WUFDaEMsTUFBTUMsV0FBVy9ELFFBQVFnRCxRQUFRLENBQUNlO2dCQUNoQyxNQUFNRyxTQUFTVixTQUFTSyxVQUFVRTtnQkFFbEMsSUFBSUcsUUFBUTtvQkFDVixPQUFPO2dCQUNUO1lBQ0YsTUFBTTtZQUVOLElBQUlILGFBQWEsTUFBTTtnQkFDckIsT0FBTztZQUNUO1FBQ0Y7SUFDRjtJQUVBLE9BQU9FO0FBQ1Q7QUFFTyxTQUFTckUsVUFBVW1ELE1BQU0sRUFBRUMsTUFBTSxFQUFFUSxRQUFRO0lBQ2hEUixTQUFTO1dBQ0pBO0tBQ0o7SUFFRCxNQUFNbUIsYUFBYXBCLE9BQU9hLEtBQUssQ0FBQyxDQUFDQztRQUMvQixNQUFNRSxXQUFXL0QsUUFBUWdELFFBQVEsQ0FBQ2U7WUFDaEMsTUFBTUcsU0FBU1YsU0FBU0ssVUFBVUU7WUFFbEMsSUFBSUcsUUFBUTtnQkFDVixPQUFPO1lBQ1Q7UUFDRixNQUFNO1FBRU4sSUFBSUgsYUFBYSxNQUFNO1lBQ3JCLE9BQU87UUFDVDtJQUNGO0lBRUEsT0FBT0k7QUFDVDtBQUVPLFNBQVN4QyxRQUFRb0IsTUFBTSxFQUFFQyxNQUFNLEVBQUVRLFFBQVE7SUFDOUMsSUFBSVk7SUFFSnJCLFNBQVM7V0FDSkE7S0FDSjtJQUVELE9BQVM7UUFDUCxNQUFNVyxlQUFlWCxPQUFPSixNQUFNO1FBRWxDLElBQUllLGlCQUFpQixHQUFHO1lBQ3RCO1FBQ0Y7UUFFQSxJQUFJVSxXQUFXO1FBRWZyQixPQUFPc0IsT0FBTyxDQUFDLENBQUNSO1lBQ2QsTUFBTUcsU0FBU1IsU0FBU0s7WUFFeEIsSUFBSUcsUUFBUTtnQkFDVixNQUFNRCxXQUFXRixVQUFXLEdBQUc7Z0JBRS9CYixPQUFPdkIsSUFBSSxDQUFDc0M7Z0JBRVpLLFdBQVc7WUFDYjtRQUNGO1FBRUEsSUFBSSxDQUFDQSxVQUFVO1lBQ2I7UUFDRjtRQUVBakUsT0FBTzRDLFFBQVEsQ0FBQ2M7WUFDZCxNQUFNUyx5QkFBeUJ0QixPQUFPdUIsUUFBUSxDQUFDVjtZQUUvQyxJQUFJLENBQUNTLHdCQUF3QjtnQkFDM0IsT0FBTztZQUNUO1FBQ0Y7SUFDRjtJQUVBLE1BQU1aLGVBQWVYLE9BQU9KLE1BQU07SUFFbEN5QixXQUFZVixpQkFBaUI7SUFFN0IsT0FBT1U7QUFDVDtBQUVPLFNBQVM5QyxJQUFJb0IsS0FBSyxFQUFFYyxRQUFRO0lBQ2pDLElBQUlnQixRQUFRO0lBRVosTUFBTUMsY0FBYy9CLE1BQU1DLE1BQU07SUFFaEMsSUFBSyxJQUFJbUIsUUFBUSxHQUFHQSxRQUFRVyxhQUFhWCxRQUFTO1FBQ2hELE1BQU1ZLFVBQVVoQyxLQUFLLENBQUNvQixNQUFNLEVBQ3RCRSxTQUFTUixTQUFTa0IsU0FBU1o7UUFFakMsSUFBSUUsUUFBUTtZQUNWLElBQUksQ0FBQ1EsT0FBTztnQkFDVkEsUUFBUTtZQUNWLE9BQU87Z0JBQ0xBLFFBQVE7Z0JBRVI7WUFDRjtRQUNGO0lBQ0Y7SUFFQSxPQUFPQTtBQUNUO0FBRU8sU0FBUzNFLEtBQUs2QyxLQUFLLEVBQUVjLFFBQVE7SUFDbEMsSUFBSWdCLFFBQVE7SUFFWixNQUFNQyxjQUFjL0IsTUFBTUMsTUFBTTtJQUVoQyxJQUFLLElBQUltQixRQUFRLEdBQUdBLFFBQVFXLGFBQWFYLFFBQVM7UUFDaEQsTUFBTVksVUFBVWhDLEtBQUssQ0FBQ29CLE1BQU0sRUFDdEJFLFNBQVNSLFNBQVNrQixTQUFTWjtRQUVqQyxJQUFJRSxRQUFRO1lBQ1ZRLFFBQVE7UUFDVixPQUFPO1lBQ0xBLFFBQVE7WUFFUjtRQUNGO0lBQ0Y7SUFFQSxPQUFPQTtBQUNUO0FBRU8sU0FBU3BFLEtBQUtzQyxLQUFLLEVBQUVjLFFBQVE7SUFDbEMsTUFBTW1CLFdBQVcsRUFBRTtJQUVuQmpDLE1BQU0yQixPQUFPLENBQUMsQ0FBQ0ssU0FBU1o7UUFDdEIsTUFBTUUsU0FBU1IsU0FBU2tCLFNBQVNaO1FBRWpDLElBQUlFLFFBQVE7WUFDVlcsU0FBU2xELElBQUksQ0FBQ2lEO1FBQ2hCO0lBQ0Y7SUFFQSxPQUFPQztBQUNUO0FBRU8sU0FBU3JGLE1BQU1vRCxLQUFLO0lBQ3pCQSxRQUFRO1dBQ0hBO0tBQ0o7SUFFRCxPQUFPQTtBQUNUO0FBRU8sU0FBU2hCLFFBQVFnQixLQUFLLEVBQUVnQyxPQUFPLEVBQUVsQixRQUFRO0lBQzlDLElBQUlGO0lBRUosTUFBTWtCLFFBQVE5QixNQUFNa0MsSUFBSSxDQUFDLENBQUNGLFNBQVNaO1FBQ2pDLE1BQU1FLFNBQVNSLFNBQVNrQixTQUFTWjtRQUVqQyxJQUFJRSxRQUFRO1lBQ1ZWLFFBQVFRLE9BQVEsR0FBRztZQUVuQixPQUFPO1FBQ1Q7SUFDRjtJQUVBLElBQUlVLE9BQU87UUFDVCxNQUFNakIsY0FBYztRQUVwQmIsTUFBTU4sTUFBTSxDQUFDa0IsT0FBT0MsYUFBYW1CO0lBQ25DO0lBRUEsT0FBT0Y7QUFDVDtBQUVPLFNBQVNwQyxPQUFPVyxNQUFNLEVBQUVPLEtBQUssRUFBRUMsY0FBY3NCLFFBQVEsRUFBRTdCLFNBQVMsRUFBRTtJQUN2RSxNQUFNOEIsT0FBTztRQUFFeEI7UUFBT0M7V0FBZ0JQO0tBQVEsRUFDeEMrQixrQkFBa0I5QixNQUFNQyxTQUFTLENBQUNkLE1BQU0sQ0FBQ2UsS0FBSyxDQUFDSixRQUFRK0I7SUFFN0QsT0FBT0M7QUFDVDtBQUVPLFNBQVM1RSxPQUFPdUMsS0FBSyxFQUFFYyxRQUFRO0lBQ3BDLE1BQU11QixrQkFBa0IsRUFBRTtJQUUxQjdGLGlCQUFpQndELE9BQU8sQ0FBQ2dDLFNBQVNaO1FBQ2hDLE1BQU1FLFNBQVNSLFNBQVNrQixTQUFTWjtRQUVqQyxJQUFJLENBQUNFLFFBQVE7WUFDWCxNQUFNVixRQUFRUSxPQUNSUCxjQUFjLEdBQ2R5QixpQkFBaUJ0QyxNQUFNTixNQUFNLENBQUNrQixPQUFPQyxhQUFhMEIsR0FBRyxJQUFLLEdBQUc7WUFFbkVGLGdCQUFnQnRDLE9BQU8sQ0FBQ3VDLGlCQUFrQixHQUFHO1FBQy9DO0lBQ0Y7SUFFQSxPQUFPRDtBQUNUO0FBRU8sU0FBU3ZELE1BQU1rQixLQUFLLEVBQUVjLFFBQVE7SUFDbkMsSUFBSXdCLGlCQUFpQkU7SUFFckJ4QyxNQUFNa0MsSUFBSSxDQUFDLENBQUNGLFNBQVNaO1FBQ25CLE1BQU1FLFNBQVNSLFNBQVNrQixTQUFTWjtRQUVqQyxJQUFJLENBQUNFLFFBQVE7WUFDWCxNQUFNVixRQUFRUSxPQUNSUCxjQUFjO1lBRXBCeUIsaUJBQWlCdEMsTUFBTU4sTUFBTSxDQUFDa0IsT0FBT0MsYUFBYTBCLEdBQUcsSUFBSyxHQUFHO1lBRTdELE9BQU87UUFDVDtJQUNGO0lBRUEsT0FBT0Q7QUFDVDtBQUVPLFNBQVNoRixRQUFRMEMsS0FBSyxFQUFFYyxRQUFRO0lBQ3JDLElBQUl3QixpQkFBaUJFO0lBRXJCeEMsTUFBTWtDLElBQUksQ0FBQyxDQUFDRixTQUFTWjtRQUNuQixNQUFNRSxTQUFTUixTQUFTa0IsU0FBU1o7UUFFakMsSUFBSUUsUUFBUTtZQUNWLE1BQU1WLFFBQVFRLE9BQ1JQLGNBQWM7WUFFcEJ5QixpQkFBaUJ0QyxNQUFNTixNQUFNLENBQUNrQixPQUFPQyxhQUFhMEIsR0FBRyxJQUFLLEdBQUc7WUFFN0QsT0FBTztRQUNUO0lBQ0Y7SUFFQSxPQUFPRDtBQUNUO0FBRU8sU0FBU3pELE1BQU1tQixLQUFLLEVBQUVnQyxPQUFPLEVBQUVsQixRQUFRO0lBQzVDLE1BQU1nQixRQUFROUIsTUFBTWtDLElBQUksQ0FBQyxDQUFDRixTQUFTWjtRQUNqQyxNQUFNRSxTQUFTUixTQUFTa0IsU0FBU1o7UUFFakMsSUFBSUUsUUFBUTtZQUNWLE9BQU87UUFDVDtJQUNGO0lBR0EsSUFBSVEsT0FBTztRQUNUOUIsTUFBTWpCLElBQUksQ0FBQ2lEO0lBQ2I7SUFFQSxPQUFPRjtBQUNUO0FBRU8sU0FBUy9FLFNBQVNpRCxLQUFLLEVBQUVjLFFBQVE7SUFDdEMsSUFBSTJCLFNBQVMsR0FDVHhDLFNBQVNELE1BQU1DLE1BQU07SUFFekIsTUFBT3dDLFNBQVN4QyxPQUFRO1FBQ3RCLE1BQU1vQixXQUFXckIsS0FBSyxDQUFDeUMsT0FBTztRQUU5QixJQUFLLElBQUlDLFNBQVN6QyxTQUFTLEdBQUd5QyxTQUFTRCxRQUFRQyxTQUFVO1lBQ3ZELE1BQU12QixXQUFXbkIsS0FBSyxDQUFDMEMsT0FBTyxFQUN4QnBCLFNBQVNSLFNBQVNLLFVBQVVFO1lBRWxDLElBQUksQ0FBQ0MsUUFBUTtnQkFDWCxNQUFNVixRQUFROEIsUUFDUjdCLGNBQWM7Z0JBRXBCYixNQUFNTixNQUFNLENBQUNrQixPQUFPQztZQUN0QjtRQUNGO1FBRUE0QjtRQUVBeEMsU0FBU0QsTUFBTUMsTUFBTTtJQUN2QjtBQUNGO0FBRU8sU0FBU3BELFFBQVF3RCxNQUFNLEVBQUVDLE1BQU0sRUFBRVEsUUFBUTtJQUM5QyxNQUFNZCxRQUFRO1dBQ1RLO1dBQ0FDO0tBQ0o7SUFFRHZELFNBQVNpRCxPQUFPYztJQUVoQixPQUFPZDtBQUNUO0FBRU8sU0FBU2QsUUFBUWMsS0FBSztJQUMzQkEsUUFBUTtXQUNIQTtLQUNKLENBQUNkLE9BQU87SUFFVCxPQUFPYztBQUNUO0FBRU8sU0FBUzdELFFBQVFrRSxNQUFNLEVBQUVDLE1BQU0sRUFBRVEsUUFBUTtJQUM5Q1IsT0FBT3FCLE9BQU8sQ0FBQyxDQUFDSyxTQUFTWjtRQUN2QixNQUFNRSxTQUFTUixTQUFTa0IsU0FBU1o7UUFFakMsSUFBSUUsUUFBUTtZQUNWakIsT0FBT3RCLElBQUksQ0FBQ2lEO1FBQ2Q7SUFDRjtBQUNGO0FBRU8sU0FBUzNDLFNBQVNXLEtBQUssRUFBRUssTUFBTSxFQUFFQyxNQUFNLEVBQUVRLFFBQVE7SUFDdERkLE1BQU0yQixPQUFPLENBQUMsQ0FBQ0ssU0FBU1o7UUFDdEIsTUFBTUUsU0FBU1IsU0FBU2tCLFNBQVNaO1FBRWpDRSxTQUNFakIsT0FBT3RCLElBQUksQ0FBQ2lELFdBQ1YxQixPQUFPdkIsSUFBSSxDQUFDaUQ7SUFDbEI7QUFDRjtBQUVPLFNBQVNsRSxhQUFha0MsS0FBSyxFQUFFYyxRQUFRO0lBQzFDLE1BQU1pQixjQUFjL0IsTUFBTUMsTUFBTTtJQUVoQyxJQUFLLElBQUltQixRQUFRLEdBQUdBLFFBQVFXLGFBQWFYLFFBQVM7UUFDaEQsTUFBTVksVUFBVWhDLEtBQUssQ0FBQ29CLE1BQU0sRUFDdEJFLFNBQVNSLFNBQVNrQixTQUFTWjtRQUVqQyxJQUFJRSxRQUFRO1lBQ1YsT0FBT1U7UUFDVDtJQUNGO0lBRUEsT0FBTztBQUNUO0FBRU8sU0FBUzFGLGNBQWMwRCxLQUFLLEVBQUVjLFFBQVE7SUFDM0MsTUFBTWlCLGNBQWMvQixNQUFNQyxNQUFNO0lBRWhDLElBQUssSUFBSW1CLFFBQVFXLGNBQWMsR0FBR1gsU0FBUyxHQUFHQSxRQUFTO1FBQ3JELE1BQU1ZLFVBQVVoQyxLQUFLLENBQUNvQixNQUFNLEVBQ3RCRSxTQUFTUixTQUFTa0IsU0FBU1o7UUFFakMsSUFBSUUsUUFBUTtZQUNWLE9BQU9VO1FBQ1Q7SUFDRjtJQUVBLE9BQU87QUFDVDtBQUVPLFNBQVM5RCxhQUFhOEIsS0FBSyxFQUFFYyxRQUFRO0lBQzFDLE1BQU1pQixjQUFjL0IsTUFBTUMsTUFBTTtJQUVoQyxJQUFLLElBQUltQixRQUFRLEdBQUdBLFFBQVFXLGFBQWFYLFFBQVM7UUFDaEQsTUFBTVksVUFBVWhDLEtBQUssQ0FBQ29CLE1BQU0sRUFDdEJFLFNBQVNSLFNBQVNrQixTQUFTWjtRQUVqQyxJQUFJRSxRQUFRO1lBQ1YsT0FBTztRQUNUO0lBQ0Y7SUFFQSxPQUFPO0FBQ1Q7QUFFTyxTQUFTNUUsY0FBY3NELEtBQUssRUFBRWMsUUFBUTtJQUMzQyxNQUFNaUIsY0FBYy9CLE1BQU1DLE1BQU07SUFFaEMsSUFBSyxJQUFJbUIsUUFBUVcsY0FBYyxHQUFHWCxTQUFTLEdBQUdBLFFBQVM7UUFDckQsTUFBTVksVUFBVWhDLEtBQUssQ0FBQ29CLE1BQU0sRUFDdEJFLFNBQVNSLFNBQVNrQixTQUFTWjtRQUVqQyxJQUFJRSxRQUFRO1lBQ1YsT0FBTztRQUNUO0lBQ0Y7SUFFQSxPQUFPO0FBQ1Q7QUFFTyxTQUFTekQsY0FBY21DLEtBQUssRUFBRWMsUUFBUTtJQUMzQyxNQUFNaUIsY0FBYy9CLE1BQU1DLE1BQU07SUFFaEMsSUFBSyxJQUFJbUIsUUFBUSxHQUFHQSxRQUFRVyxhQUFhWCxRQUFTO1FBQ2hELE1BQU1ZLFVBQVVoQyxLQUFLLENBQUNvQixNQUFNLEVBQ3RCRSxTQUFTUixTQUFTa0IsU0FBU1o7UUFFakMsSUFBSSxDQUFDRSxRQUFRO1lBQ1gsT0FBTztRQUNUO0lBQ0Y7SUFFQSxPQUFPO0FBQ1Q7QUFFTyxTQUFTakYsZUFBZTJELEtBQUssRUFBRWMsUUFBUTtJQUM1QyxNQUFNaUIsY0FBYy9CLE1BQU1DLE1BQU07SUFFaEMsSUFBSyxJQUFJbUIsUUFBUVcsY0FBYyxHQUFHWCxTQUFTLEdBQUdBLFFBQVM7UUFDckQsTUFBTVksVUFBVWhDLEtBQUssQ0FBQ29CLE1BQU0sRUFDdEJFLFNBQVNSLFNBQVNrQixTQUFTWjtRQUVqQyxJQUFJLENBQUNFLFFBQVE7WUFDWCxPQUFPO1FBQ1Q7SUFDRjtJQUVBLE9BQU87QUFDVDtBQUVPLFNBQVNyRCxlQUFlK0IsS0FBSyxFQUFFYyxRQUFRLEVBQUU2QixZQUFZO0lBQzFELElBQUlDLFFBQVFELGNBQWMsR0FBRztJQUU3QixNQUFNWixjQUFjL0IsTUFBTUMsTUFBTTtJQUVoQyxJQUFLLElBQUltQixRQUFRLEdBQUdBLFFBQVFXLGFBQWFYLFFBQVM7UUFDaEQsTUFBTVksVUFBVWhDLEtBQUssQ0FBQ29CLE1BQU07UUFFNUJ3QixRQUFROUIsU0FBUzhCLE9BQU9aLFNBQVNaO0lBQ25DO0lBRUEsT0FBT3dCO0FBQ1Q7QUFFTyxTQUFTbkcsZ0JBQWdCdUQsS0FBSyxFQUFFYyxRQUFRLEVBQUU2QixZQUFZO0lBQzNELElBQUlDLFFBQVFELGNBQWMsR0FBRztJQUU3QixNQUFNWixjQUFjL0IsTUFBTUMsTUFBTTtJQUVoQyxJQUFLLElBQUltQixRQUFRVyxjQUFjLEdBQUdYLFNBQVMsR0FBR0EsUUFBUztRQUNyRCxNQUFNWSxVQUFVaEMsS0FBSyxDQUFDb0IsTUFBTTtRQUU1QndCLFFBQVE5QixTQUFTOEIsT0FBT1osU0FBU1o7SUFDbkM7SUFFQSxPQUFPd0I7QUFDVDtBQUVPLFNBQVM1RSxnQkFBZ0JnQyxLQUFLLEVBQUVjLFFBQVE7SUFDN0MsTUFBTWlCLGNBQWMvQixNQUFNQyxNQUFNO0lBRWhDLElBQUssSUFBSW1CLFFBQVEsR0FBR0EsUUFBUVcsYUFBYVgsUUFBUztRQUNoRCxNQUFNWSxVQUFVaEMsS0FBSyxDQUFDb0IsTUFBTTtRQUU1Qk4sU0FBU2tCLFNBQVNaO0lBQ3BCO0FBQ0Y7QUFFTyxTQUFTNUUsaUJBQWlCd0QsS0FBSyxFQUFFYyxRQUFRO0lBQzlDLE1BQU1pQixjQUFjL0IsTUFBTUMsTUFBTTtJQUVoQyxJQUFLLElBQUltQixRQUFRVyxjQUFjLEdBQUdYLFNBQVMsR0FBR0EsUUFBUztRQUNyRCxNQUFNWSxVQUFVaEMsS0FBSyxDQUFDb0IsTUFBTTtRQUU1Qk4sU0FBU2tCLFNBQVNaO0lBQ3BCO0FBQ0Y7QUFFTyxTQUFTckQsa0JBQWtCaUMsS0FBSyxFQUFFYyxRQUFRO0lBQy9DLE1BQU1pQixjQUFjL0IsTUFBTUMsTUFBTTtJQUVoQyxJQUFLLElBQUltQixRQUFRLEdBQUdBLFFBQVFXLGFBQWFYLFFBQVM7UUFDaEQsTUFBTVksVUFBVWhDLEtBQUssQ0FBQ29CLE1BQU0sRUFDdEJFLFNBQVNSLFNBQVNrQixTQUFTWjtRQUVqQyxJQUFJRSxRQUFRO1lBQ1YsT0FBT0Y7UUFDVDtJQUNGO0lBRUEsT0FBTyxDQUFDO0FBQ1Y7QUFFTyxTQUFTN0UsbUJBQW1CeUQsS0FBSyxFQUFFYyxRQUFRO0lBQ2hELE1BQU1pQixjQUFjL0IsTUFBTUMsTUFBTTtJQUVoQyxJQUFLLElBQUltQixRQUFRVyxjQUFjLEdBQUdYLFNBQVMsR0FBR0EsUUFBUztRQUNyRCxNQUFNWSxVQUFVaEMsS0FBSyxDQUFDb0IsTUFBTSxFQUN0QkUsU0FBU1IsU0FBU2tCLFNBQVNaO1FBRWpDLElBQUlFLFFBQVE7WUFDVixPQUFPRjtRQUNUO0lBQ0Y7SUFFQSxPQUFPLENBQUM7QUFDVjtNQUVBLFdBQWU7SUFDYnpEO0lBQ0F3QjtJQUNBVTtJQUNBMUI7SUFDQVo7SUFDQWlDO0lBQ0FGO0lBQ0FsQztJQUNBc0I7SUFDQWQ7SUFDQXdCO0lBQ0FVO0lBQ0ExQjtJQUNBWjtJQUNBaUM7SUFDQUY7SUFDQWxDO0lBQ0FzQjtJQUNBSjtJQUNBRDtJQUNBcUI7SUFDQXZEO0lBQ0FpQztJQUNBVTtJQUNBZ0I7SUFDQS9DO0lBQ0FMO0lBQ0FNO0lBQ0F3QjtJQUNBRDtJQUNBMUI7SUFDQUk7SUFDQStCO0lBQ0FMO0lBQ0F6QjtJQUNBTztJQUNBZDtJQUNBb0M7SUFDQVU7SUFDQWpDO0lBQ0FxQjtJQUNBeEI7SUFDQXVCO0lBQ0E5QjtJQUNBRjtJQUNBcUM7SUFDQS9DO0lBQ0FrRDtJQUNBdkI7SUFDQXhCO0lBQ0E0QjtJQUNBeEI7SUFDQW1CO0lBQ0F4QjtJQUNBNEI7SUFDQXhCO0lBQ0F1QjtJQUNBeEI7SUFDQXVCO0lBQ0F4QjtBQUNGIn0=
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
    get intersection () {
        return intersection;
    },
    get last () {
        return last;
    },
    get leftDifference () {
        return leftDifference;
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
    get rightDifference () {
        return rightDifference;
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
    get union () {
        return union;
    },
    get unshift () {
        return unshift;
    },
    get zip () {
        return zip;
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
    return array.slice(-1);
}
function front(array) {
    return array.slice(0, -1);
}
function push(arrayA, arrayB) {
    return Array.prototype.push.apply(arrayA, arrayB);
}
function unshift(arrayA, arrayB) {
    return Array.prototype.unshift.apply(arrayA, arrayB);
}
function merge(arrayA, arrayB) {
    Array.prototype.push.apply(arrayA, arrayB);
}
function concat(arrayA, elementOrArray2) {
    const arrayB = Array.isArray(elementOrArray2) ? elementOrArray2 : [
        elementOrArray2
    ];
    Array.prototype.push.apply(arrayA, arrayB);
}
function splice(arrayA, start, deleteCount = Infinity, arrayB = []) {
    return Array.prototype.splice.call(arrayA, start, deleteCount, ...arrayB);
}
function clear(array) {
    const start = 0;
    return Array.prototype.splice.call(array, start);
}
function clone(array) {
    const start = 0;
    return Array.prototype.slice.call(array, start);
}
function reverse(array) {
    const start = 0;
    return Array.prototype.slice.call(array, start).reverse();
}
function copy(arrayA, arrayB) {
    const start = 0, deleteCount = arrayB.length; ///
    Array.prototype.splice.call(arrayA, start, deleteCount, ...arrayB);
}
function filter(array, callback) {
    const deletedElements = [], arrayLength = array.length;
    for(let index = arrayLength - 1; index >= 0; index--){
        const element = array[index], passed = callback(element, index);
        if (!passed) {
            const start = index, deleteCount = 1, deletedElement = Array.prototype.splice.call(array, start, deleteCount).pop();
            deletedElements.unshift(deletedElement);
        }
    }
    return deletedElements;
}
function prune(array, callback) {
    let deletedElement = undefined;
    Array.prototype.some.call(array, (element, index)=>{
        const passed = callback(element, index);
        if (!passed) {
            const start = index, deleteCount = 1;
            deletedElement = Array.prototype.splice.call(array, start, deleteCount).pop(); ///
            return true;
        }
    });
    return deletedElement;
}
function extract(array, callback) {
    let deletedElement = undefined;
    Array.prototype.some.call(array, (element, index)=>{
        const passed = callback(element, index);
        if (passed) {
            const start = index, deleteCount = 1;
            deletedElement = Array.prototype.splice.call(array, start, deleteCount).pop(); ///
            return true;
        }
    });
    return deletedElement;
}
function compress(array, callback) {
    let indexB = 0, arrayLength = array.length;
    while(indexB < arrayLength){
        const elementB = array[indexB];
        for(let indexA = arrayLength - 1; indexA > indexB; indexA--){
            const elementA = array[indexA], passed = callback(elementA, elementB);
            if (!passed) {
                const start = indexA, deleteCount = 1;
                Array.prototype.splice.call(array, start, deleteCount);
            }
        }
        indexB++;
        arrayLength = array.length;
    }
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
    const elements = [], arrayLength = array.length;
    for(let index = 0; index < arrayLength; index++){
        const element = array[index], passed = callback(element, index);
        if (passed) {
            elements.push(element);
        }
    }
    return elements;
}
function patch(arrayA, elementB, callback) {
    let found = false;
    const arrayALength = arrayA.length;
    for(let index = 0; index < arrayALength; index++){
        const elementA = arrayA[index], passed = callback(elementA, index);
        if (passed) {
            Array.prototype.push.call(arrayA, elementB);
            found = true;
            break;
        }
    }
    return found;
}
function replace(arrayA, elementB, callback) {
    let found = false;
    const arrayALength = arrayA.length;
    for(let index = 0; index < arrayALength; index++){
        const elementA = arrayA[index], passed = callback(elementA, index);
        if (passed) {
            const start = index, deleteCount = 1;
            Array.prototype.splice.call(arrayA, start, deleteCount, elementB);
            found = true;
            break;
        }
    }
    return found;
}
function zip(arrayA, arrayB, callback) {
    const array = Array.prototype.map.call(arrayA, (elementA, index)=>{
        const elementB = arrayB[index], element = callback(elementA, elementB, index);
        return element;
    });
    return array;
}
function match(arrayA, arrayB, callback) {
    let matches = false;
    const arrayALength = arrayA.length, arrayBLength = arrayB.length;
    if (arrayALength === arrayBLength) {
        matches = Array.prototype.every.call(arrayA, (elementA, index)=>{
            const elementB = arrayB[index], passed = callback(elementA, elementB, index);
            if (passed) {
                return true;
            }
        });
    }
    return matches;
}
function compare(arrayA, arrayB, callback) {
    let compares = false;
    const arrayALength = arrayA.length, arrayBLength = arrayB.length;
    if (arrayALength === arrayBLength) {
        arrayB = clone(arrayB); ///
        compares = Array.prototype.every.call(arrayA, (elementA)=>{
            const elementB = extract(arrayB, (elementB)=>{
                const passed = callback(elementA, elementB);
                if (passed) {
                    return true;
                }
            });
            if (elementB !== undefined) {
                return true;
            }
        });
    }
    return compares;
}
function correlate(arrayA, arrayB, callback) {
    let correlates;
    arrayB = clone(arrayB); ///
    correlates = Array.prototype.every.call(arrayA, (elementA)=>{
        const elementB = extract(arrayB, (elementB)=>{
            const passed = callback(elementA, elementB);
            if (passed) {
                return true;
            }
        });
        if (elementB !== undefined) {
            return true;
        }
    });
    return correlates;
}
function resolve(arrayA, arrayB, callback) {
    let resolved;
    arrayA = clone(arrayA); ///
    for(;;){
        const arrayALength = arrayA.length;
        if (arrayALength === 0) {
            break;
        }
        let resolved = false;
        Array.prototype.forEach.call(arrayA, (elementA)=>{
            const passed = callback(elementA);
            if (passed) {
                const elementB = elementA; ///
                Array.prototype.push.call(arrayB, elementB);
                resolved = true;
            }
        });
        if (!resolved) {
            break;
        }
        filter(arrayA, (elementA)=>{
            const arrayBIncludesElementA = Array.prototype.includes.call(arrayB, elementA);
            if (!arrayBIncludesElementA) {
                return true;
            }
        });
    }
    const arrayALength = arrayA.length;
    resolved = arrayALength === 0;
    return resolved;
}
function combine(arrayA, arrayB, callback) {
    arrayA = Array.prototype.slice.call(arrayA); ///
    arrayB = Array.prototype.slice.call(arrayB); ///
    const array = [
        ...arrayA,
        ...arrayB
    ];
    compress(array, callback);
    return array;
}
function augment(arrayA, arrayB, callback) {
    const arrayBLength = arrayB.length;
    for(let index = 0; index < arrayBLength; index++){
        const element = arrayB[index], passed = callback(element, index);
        if (passed) {
            Array.prototype.push.call(arrayA, element);
        }
    }
}
function separate(array, arrayA, arrayB, callback) {
    const arrayLength = array.length;
    for(let index = 0; index < arrayLength; index++){
        const element = array[index], passed = callback(element, index);
        if (passed) {
            Array.prototype.push.call(arrayA, element);
        } else {
            Array.prototype.push.call(arrayB, element);
        }
    }
}
function union(arrayA, arrayB, callback) {
    arrayA = Array.prototype.slice.call(arrayA); ///
    arrayB = Array.prototype.slice.call(arrayB); ///
    const combinedArray = [
        ...arrayA,
        ...arrayB
    ];
    const array = [], combinedArrayLength = combinedArray.length;
    for(let index = 0; index < combinedArrayLength; index++){
        let found = false;
        const arrayLength = array.length, combinedElement = combinedArray[index];
        for(let arrayIndex = 0; arrayIndex < arrayLength; arrayIndex++){
            const element = array[arrayIndex], passed = callback(element, combinedElement);
            if (passed) {
                found = true;
                break;
            }
        }
        if (!found) {
            Array.prototype.push.call(array, combinedElement);
        }
    }
    return array;
}
function intersection(arrayA, arrayB, callback) {
    const array = [], arrayALength = arrayA.length;
    for(let indexA = 0; indexA < arrayALength; indexA++){
        let found = false;
        const elementA = arrayA[indexA], arrayBLength = arrayB.length;
        for(let indexB = 0; indexB < arrayBLength; indexB++){
            const elementB = arrayB[indexB], passed = callback(elementA, elementB);
            if (passed) {
                found = true;
                break;
            }
        }
        if (found) {
            Array.prototype.push.call(array, elementA);
        }
    }
    return array;
}
function leftDifference(arrayA, arrayB, callback) {
    const array = [], arrayALength = arrayA.length;
    for(let indexA = 0; indexA < arrayALength; indexA++){
        let found = false;
        const elementA = arrayA[indexA], arrayBLength = arrayB.length;
        for(let indexB = 0; indexB < arrayBLength; indexB++){
            const elementB = arrayB[indexB], passed = callback(elementA, elementB);
            if (passed) {
                found = true;
                break;
            }
        }
        if (!found) {
            Array.prototype.push.call(array, elementA);
        }
    }
    return array;
}
function rightDifference(arrayA, arrayB, callback) {
    const array = [], arrayBLength = arrayB.length;
    for(let indexB = 0; indexB < arrayBLength; indexB++){
        let found = false;
        const elementB = arrayB[indexB], arrayALength = arrayA.length;
        for(let indexA = 0; indexA < arrayALength; indexA++){
            const elementA = arrayA[indexA], passed = callback(elementA, elementB);
            if (passed) {
                found = true;
                break;
            }
        }
        if (!found) {
            Array.prototype.push.call(array, elementB);
        }
    }
    return array;
}
function forwardsFind(array, callback) {
    const arrayLength = array.length;
    for(let index = 0; index < arrayLength; index++){
        const element = array[index], passed = callback(element, index);
        if (passed) {
            return element;
        }
    }
    return undefined;
}
function backwardsFind(array, callback) {
    const arrayLength = array.length;
    for(let index = arrayLength - 1; index >= 0; index--){
        const element = array[index], passed = callback(element, index);
        if (passed) {
            return element;
        }
    }
    return undefined;
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
    merge,
    clear,
    copy,
    zip,
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
    union,
    intersection,
    leftDifference,
    rightDifference,
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvYXJyYXkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBmaXJzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbMF07fVxuXG5leHBvcnQgZnVuY3Rpb24gc2Vjb25kKGFycmF5KSB7IHJldHVybiBhcnJheVsxXTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gdGhpcmQoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzJdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3VydGgoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzNdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBmaWZ0aChhcnJheSkgeyByZXR1cm4gYXJyYXlbNF07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIHNpeHRoKGFycmF5KSB7IHJldHVybiBhcnJheVs1XTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gc2V2ZW50aChhcnJheSkgeyByZXR1cm4gYXJyYXlbNl07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGVpZ2h0aChhcnJheSkgeyByZXR1cm4gYXJyYXlbN107IH1cblxuZXhwb3J0IGZ1bmN0aW9uIG5pbnRoKGFycmF5KSB7IHJldHVybiBhcnJheVs4XTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gdGVudGgoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzldOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBmaXJzdExhc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5W2FycmF5Lmxlbmd0aCAtIDFdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBzZWNvbmRMYXN0KGFycmF5KSB7IHJldHVybiBhcnJheVthcnJheS5sZW5ndGggLSAyXTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gdGhpcmRMYXN0KGFycmF5KSB7IHJldHVybiBhcnJheVthcnJheS5sZW5ndGggLSAzXTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gZm91cnRoTGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gNF07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpZnRoTGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gNV07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIHNpeHRoTGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gNl07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldmVudGhMYXN0KGFycmF5KSB7IHJldHVybiBhcnJheVthcnJheS5sZW5ndGggLSA3XTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gZWlnaHRoTGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gOF07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIG5pbnRoTGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gOV07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGxhc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5W2FycmF5Lmxlbmd0aCAtIDFdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBoZWFkKGFycmF5KSB7IHJldHVybiBhcnJheS5zbGljZSgwLCAxKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gdGFpbChhcnJheSkgeyByZXR1cm4gYXJyYXkuc2xpY2UoMSk7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGJhY2soYXJyYXkpIHsgcmV0dXJuIGFycmF5LnNsaWNlKC0xKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gZnJvbnQoYXJyYXkpIHsgcmV0dXJuIGFycmF5LnNsaWNlKDAsIC0xKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gcHVzaChhcnJheUEsIGFycmF5QikgeyByZXR1cm4gQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkoYXJyYXlBLCBhcnJheUIpOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiB1bnNoaWZ0KGFycmF5QSwgYXJyYXlCKSB7IHJldHVybiBBcnJheS5wcm90b3R5cGUudW5zaGlmdC5hcHBseShhcnJheUEsIGFycmF5Qik7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlKGFycmF5QSwgYXJyYXlCKSB7IEFycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KGFycmF5QSwgYXJyYXlCKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gY29uY2F0KGFycmF5QSwgZWxlbWVudE9yQXJyYXkyKSB7XG4gIGNvbnN0IGFycmF5QiA9IEFycmF5LmlzQXJyYXkoZWxlbWVudE9yQXJyYXkyKSA/XG4gICAgICAgICAgICAgICAgICAgZWxlbWVudE9yQXJyYXkyIDpcbiAgICAgICAgICAgICAgICAgICAgWyBlbGVtZW50T3JBcnJheTIgXTtcblxuICBBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseShhcnJheUEsIGFycmF5Qik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzcGxpY2UoYXJyYXlBLCBzdGFydCwgZGVsZXRlQ291bnQgPSBJbmZpbml0eSwgYXJyYXlCID0gW10pIHtcbiAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5zcGxpY2UuY2FsbChhcnJheUEsIHN0YXJ0LCBkZWxldGVDb3VudCwgLi4uYXJyYXlCKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyKGFycmF5KSB7XG4gIGNvbnN0IHN0YXJ0ID0gMDtcblxuICByZXR1cm4gQXJyYXkucHJvdG90eXBlLnNwbGljZS5jYWxsKGFycmF5LCBzdGFydCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbG9uZShhcnJheSkge1xuICBjb25zdCBzdGFydCA9IDA7XG5cbiAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFycmF5LCBzdGFydCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXZlcnNlKGFycmF5KSB7XG4gIGNvbnN0IHN0YXJ0ID0gMDtcblxuICByZXR1cm4gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJyYXksIHN0YXJ0KS5yZXZlcnNlKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb3B5KGFycmF5QSwgYXJyYXlCKSB7XG4gIGNvbnN0IHN0YXJ0ID0gMCxcbiAgICAgICAgZGVsZXRlQ291bnQgPSBhcnJheUIubGVuZ3RoOyAgLy8vXG5cbiAgQXJyYXkucHJvdG90eXBlLnNwbGljZS5jYWxsKGFycmF5QSwgc3RhcnQsIGRlbGV0ZUNvdW50LCAuLi5hcnJheUIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmlsdGVyKGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBkZWxldGVkRWxlbWVudHMgPSBbXSxcbiAgICAgICAgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSBhcnJheUxlbmd0aCAtIDE7IGluZGV4ID49IDA7IGluZGV4LS0pIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdLFxuICAgICAgICAgIHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmICghcGFzc2VkKSB7XG4gICAgICBjb25zdCBzdGFydCA9IGluZGV4LCAgLy8vXG4gICAgICAgICAgICBkZWxldGVDb3VudCA9IDEsXG4gICAgICAgICAgICBkZWxldGVkRWxlbWVudCA9IEFycmF5LnByb3RvdHlwZS5zcGxpY2UuY2FsbChhcnJheSwgc3RhcnQsIGRlbGV0ZUNvdW50KS5wb3AoKTtcblxuICAgICAgZGVsZXRlZEVsZW1lbnRzLnVuc2hpZnQoZGVsZXRlZEVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBkZWxldGVkRWxlbWVudHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcnVuZShhcnJheSwgY2FsbGJhY2spIHtcbiAgbGV0IGRlbGV0ZWRFbGVtZW50ID0gdW5kZWZpbmVkO1xuXG4gIEFycmF5LnByb3RvdHlwZS5zb21lLmNhbGwoYXJyYXksIChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmICghcGFzc2VkKSB7XG4gICAgICBjb25zdCBzdGFydCA9IGluZGV4LCAgLy8vXG4gICAgICAgICAgICBkZWxldGVDb3VudCA9IDE7XG5cbiAgICAgIGRlbGV0ZWRFbGVtZW50ID0gQXJyYXkucHJvdG90eXBlLnNwbGljZS5jYWxsKGFycmF5LCBzdGFydCwgZGVsZXRlQ291bnQpLnBvcCgpOyAgLy8vXG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGRlbGV0ZWRFbGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXh0cmFjdChhcnJheSwgY2FsbGJhY2spIHtcbiAgbGV0IGRlbGV0ZWRFbGVtZW50ID0gdW5kZWZpbmVkO1xuXG4gIEFycmF5LnByb3RvdHlwZS5zb21lLmNhbGwoYXJyYXksIChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmIChwYXNzZWQpIHtcbiAgICAgIGNvbnN0IHN0YXJ0ID0gaW5kZXgsICAvLy9cbiAgICAgICAgICAgIGRlbGV0ZUNvdW50ID0gMTtcblxuICAgICAgZGVsZXRlZEVsZW1lbnQgPSBBcnJheS5wcm90b3R5cGUuc3BsaWNlLmNhbGwoYXJyYXksIHN0YXJ0LCBkZWxldGVDb3VudCkucG9wKCk7ICAvLy9cblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gZGVsZXRlZEVsZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21wcmVzcyhhcnJheSwgY2FsbGJhY2spIHtcbiAgbGV0IGluZGV4QiA9IDAsXG4gICAgICBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICB3aGlsZSAoaW5kZXhCIDwgYXJyYXlMZW5ndGgpIHtcbiAgICBjb25zdCBlbGVtZW50QiA9IGFycmF5W2luZGV4Ql07XG5cbiAgICBmb3IgKGxldCBpbmRleEEgPSBhcnJheUxlbmd0aCAtIDE7IGluZGV4QSA+IGluZGV4QjsgaW5kZXhBLS0pIHtcbiAgICAgIGNvbnN0IGVsZW1lbnRBID0gYXJyYXlbaW5kZXhBXSxcbiAgICAgICAgICAgIHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnRBLCBlbGVtZW50Qik7XG5cbiAgICAgIGlmICghcGFzc2VkKSB7XG4gICAgICAgIGNvbnN0IHN0YXJ0ID0gaW5kZXhBLCAvLy9cbiAgICAgICAgICAgICAgZGVsZXRlQ291bnQgPSAxO1xuXG4gICAgICAgIEFycmF5LnByb3RvdHlwZS5zcGxpY2UuY2FsbChhcnJheSwgc3RhcnQsIGRlbGV0ZUNvdW50KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpbmRleEIrKztcblxuICAgIGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvbmUoYXJyYXksIGNhbGxiYWNrKSB7XG4gIGxldCBmb3VuZCA9IGZhbHNlO1xuXG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhcnJheUxlbmd0aDsgaW5kZXgrKykge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF0sXG4gICAgICAgICAgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgaWYgKCFmb3VuZCkge1xuICAgICAgICBmb3VuZCA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmb3VuZCA9IGZhbHNlO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmb3VuZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVhY2goYXJyYXksIGNhbGxiYWNrKSB7XG4gIGxldCBmb3VuZCA9IGZhbHNlO1xuXG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhcnJheUxlbmd0aDsgaW5kZXgrKykge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF0sXG4gICAgICAgICAgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgZm91bmQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBmb3VuZCA9IGZhbHNlO1xuXG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZm91bmQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaW5kKGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBlbGVtZW50cyA9IFtdLFxuICAgICAgICBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYXJyYXlMZW5ndGg7IGluZGV4KyspIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdLFxuICAgICAgICAgIHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmIChwYXNzZWQpIHtcbiAgICAgIGVsZW1lbnRzLnB1c2goZWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnRzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGF0Y2goYXJyYXlBLCBlbGVtZW50QiwgY2FsbGJhY2spIHtcbiAgbGV0IGZvdW5kID0gZmFsc2U7XG5cbiAgY29uc3QgYXJyYXlBTGVuZ3RoID0gYXJyYXlBLmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYXJyYXlBTGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgY29uc3QgZWxlbWVudEEgPSBhcnJheUFbaW5kZXhdLFxuICAgICAgICAgIHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnRBLCBpbmRleCk7XG5cbiAgICBpZiAocGFzc2VkKSB7XG4gICAgICBBcnJheS5wcm90b3R5cGUucHVzaC5jYWxsKGFycmF5QSwgZWxlbWVudEIpO1xuXG4gICAgICBmb3VuZCA9IHRydWU7XG5cbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmb3VuZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlcGxhY2UoYXJyYXlBLCBlbGVtZW50QiwgY2FsbGJhY2spIHtcbiAgbGV0IGZvdW5kID0gZmFsc2U7XG5cbiAgY29uc3QgYXJyYXlBTGVuZ3RoID0gYXJyYXlBLmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYXJyYXlBTGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgY29uc3QgZWxlbWVudEEgPSBhcnJheUFbaW5kZXhdLFxuICAgICAgICAgIHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnRBLCBpbmRleCk7XG5cbiAgICBpZiAocGFzc2VkKSB7XG4gICAgICBjb25zdCBzdGFydCA9IGluZGV4LCAgLy8vXG4gICAgICAgICAgICBkZWxldGVDb3VudCA9IDE7XG5cbiAgICAgIEFycmF5LnByb3RvdHlwZS5zcGxpY2UuY2FsbChhcnJheUEsIHN0YXJ0LCBkZWxldGVDb3VudCwgZWxlbWVudEIpO1xuXG4gICAgICBmb3VuZCA9IHRydWU7XG5cbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmb3VuZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHppcChhcnJheUEsIGFycmF5QiwgY2FsbGJhY2spIHtcbiAgY29uc3QgYXJyYXkgPSBBcnJheS5wcm90b3R5cGUubWFwLmNhbGwoYXJyYXlBLCAoZWxlbWVudEEsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgZWxlbWVudEIgPSBhcnJheUJbaW5kZXhdLFxuICAgICAgICAgIGVsZW1lbnQgPSBjYWxsYmFjayhlbGVtZW50QSwgZWxlbWVudEIsIGluZGV4KTtcblxuICAgIHJldHVybiBlbGVtZW50O1xuICB9KTtcblxuICByZXR1cm4gYXJyYXk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYXRjaChhcnJheUEsIGFycmF5QiwgY2FsbGJhY2spIHtcbiAgbGV0IG1hdGNoZXMgPSBmYWxzZTtcblxuICBjb25zdCBhcnJheUFMZW5ndGggPSBhcnJheUEubGVuZ3RoLFxuICAgIGFycmF5Qkxlbmd0aCA9IGFycmF5Qi5sZW5ndGg7XG5cbiAgaWYgKGFycmF5QUxlbmd0aCA9PT0gYXJyYXlCTGVuZ3RoKSB7XG4gICAgbWF0Y2hlcyA9IEFycmF5LnByb3RvdHlwZS5ldmVyeS5jYWxsKGFycmF5QSwgKGVsZW1lbnRBLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgZWxlbWVudEIgPSBhcnJheUJbaW5kZXhdLFxuICAgICAgICBwYXNzZWQgPSBjYWxsYmFjayhlbGVtZW50QSwgZWxlbWVudEIsIGluZGV4KTtcblxuICAgICAgaWYgKHBhc3NlZCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBtYXRjaGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tcGFyZShhcnJheUEsIGFycmF5QiwgY2FsbGJhY2spIHtcbiAgbGV0IGNvbXBhcmVzID0gZmFsc2U7XG5cbiAgY29uc3QgYXJyYXlBTGVuZ3RoID0gYXJyYXlBLmxlbmd0aCxcbiAgICAgICAgYXJyYXlCTGVuZ3RoID0gYXJyYXlCLmxlbmd0aDtcblxuICBpZiAoYXJyYXlBTGVuZ3RoID09PSBhcnJheUJMZW5ndGgpIHtcbiAgICBhcnJheUIgPSBjbG9uZShhcnJheUIpOyAvLy9cblxuICAgIGNvbXBhcmVzID0gQXJyYXkucHJvdG90eXBlLmV2ZXJ5LmNhbGwoYXJyYXlBLChlbGVtZW50QSkgPT4ge1xuICAgICAgY29uc3QgZWxlbWVudEIgPSBleHRyYWN0KGFycmF5QiwgKGVsZW1lbnRCKSA9PiB7XG4gICAgICAgIGNvbnN0IHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnRBLCBlbGVtZW50Qik7XG5cbiAgICAgICAgaWYgKHBhc3NlZCkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKGVsZW1lbnRCICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gY29tcGFyZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb3JyZWxhdGUoYXJyYXlBLCBhcnJheUIsIGNhbGxiYWNrKSB7XG4gIGxldCBjb3JyZWxhdGVzO1xuXG4gIGFycmF5QiA9IGNsb25lKGFycmF5Qik7IC8vL1xuXG4gIGNvcnJlbGF0ZXMgPSBBcnJheS5wcm90b3R5cGUuZXZlcnkuY2FsbChhcnJheUEsKGVsZW1lbnRBKSA9PiB7XG4gICAgY29uc3QgZWxlbWVudEIgPSBleHRyYWN0KGFycmF5QiwgKGVsZW1lbnRCKSA9PiB7XG4gICAgICBjb25zdCBwYXNzZWQgPSBjYWxsYmFjayhlbGVtZW50QSwgZWxlbWVudEIpO1xuXG4gICAgICBpZiAocGFzc2VkKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKGVsZW1lbnRCICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGNvcnJlbGF0ZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlKGFycmF5QSwgYXJyYXlCLCBjYWxsYmFjaykge1xuICBsZXQgcmVzb2x2ZWQ7XG5cbiAgYXJyYXlBID0gY2xvbmUoYXJyYXlBKTsgLy8vXG5cbiAgZm9yICg7Oykge1xuICAgIGNvbnN0IGFycmF5QUxlbmd0aCA9IGFycmF5QS5sZW5ndGg7XG5cbiAgICBpZiAoYXJyYXlBTGVuZ3RoID09PSAwKSB7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBsZXQgcmVzb2x2ZWQgPSBmYWxzZTtcblxuICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoYXJyYXlBLCAoZWxlbWVudEEpID0+IHtcbiAgICAgIGNvbnN0IHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnRBKTtcblxuICAgICAgaWYgKHBhc3NlZCkge1xuICAgICAgICBjb25zdCBlbGVtZW50QiA9IGVsZW1lbnRBOyAgLy8vXG5cbiAgICAgICAgQXJyYXkucHJvdG90eXBlLnB1c2guY2FsbChhcnJheUIsIGVsZW1lbnRCKTtcblxuICAgICAgICByZXNvbHZlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoIXJlc29sdmVkKSB7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBmaWx0ZXIoYXJyYXlBLCAoZWxlbWVudEEpID0+IHtcbiAgICAgIGNvbnN0IGFycmF5QkluY2x1ZGVzRWxlbWVudEEgPSBBcnJheS5wcm90b3R5cGUuaW5jbHVkZXMuY2FsbChhcnJheUIsIGVsZW1lbnRBKTtcblxuICAgICAgaWYgKCFhcnJheUJJbmNsdWRlc0VsZW1lbnRBKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgY29uc3QgYXJyYXlBTGVuZ3RoID0gYXJyYXlBLmxlbmd0aDtcblxuICByZXNvbHZlZCA9IChhcnJheUFMZW5ndGggPT09IDApO1xuXG4gIHJldHVybiByZXNvbHZlZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbWJpbmUoYXJyYXlBLCBhcnJheUIsIGNhbGxiYWNrKSB7XG4gIGFycmF5QSA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFycmF5QSk7ICAvLy9cbiAgYXJyYXlCID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJyYXlCKTsgIC8vL1xuXG4gIGNvbnN0IGFycmF5ID0gW1xuICAgIC4uLmFycmF5QSxcbiAgICAuLi5hcnJheUJcbiAgXTtcblxuICBjb21wcmVzcyhhcnJheSwgY2FsbGJhY2spO1xuXG4gIHJldHVybiBhcnJheTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGF1Z21lbnQoYXJyYXlBLCBhcnJheUIsIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGFycmF5Qkxlbmd0aCA9IGFycmF5Qi5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGFycmF5Qkxlbmd0aDsgaW5kZXgrKykge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheUJbaW5kZXhdLFxuICAgICAgICAgIHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmIChwYXNzZWQpIHtcbiAgICAgIEFycmF5LnByb3RvdHlwZS5wdXNoLmNhbGwoYXJyYXlBLCBlbGVtZW50KTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlcGFyYXRlKGFycmF5LCBhcnJheUEsIGFycmF5QiwgY2FsbGJhY2spIHtcbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGFycmF5TGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XSxcbiAgICAgICAgICBwYXNzZWQgPSBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAocGFzc2VkKSB7XG4gICAgICBBcnJheS5wcm90b3R5cGUucHVzaC5jYWxsKGFycmF5QSwgZWxlbWVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIEFycmF5LnByb3RvdHlwZS5wdXNoLmNhbGwoYXJyYXlCLCBlbGVtZW50KTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVuaW9uKGFycmF5QSwgYXJyYXlCLCBjYWxsYmFjaykge1xuICBhcnJheUEgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcnJheUEpOyAgLy8vXG4gIGFycmF5QiA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFycmF5Qik7ICAvLy9cblxuICBjb25zdCBjb21iaW5lZEFycmF5ID0gW1xuICAgIC4uLmFycmF5QSxcbiAgICAuLi5hcnJheUJcbiAgXTtcblxuICBjb25zdCBhcnJheSA9IFtdLFxuICAgICAgICBjb21iaW5lZEFycmF5TGVuZ3RoID0gY29tYmluZWRBcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGNvbWJpbmVkQXJyYXlMZW5ndGg7IGluZGV4KyspIHtcbiAgICBsZXQgZm91bmQgPSBmYWxzZTtcblxuICAgIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoLFxuICAgICAgICAgIGNvbWJpbmVkRWxlbWVudCA9IGNvbWJpbmVkQXJyYXlbaW5kZXhdO1xuXG4gICAgZm9yIChsZXQgYXJyYXlJbmRleCA9IDA7IGFycmF5SW5kZXggPCBhcnJheUxlbmd0aDsgYXJyYXlJbmRleCsrKSB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbYXJyYXlJbmRleF0sXG4gICAgICAgICAgICBwYXNzZWQgPSBjYWxsYmFjayhlbGVtZW50LCBjb21iaW5lZEVsZW1lbnQpO1xuXG4gICAgICBpZiAocGFzc2VkKSB7XG4gICAgICAgIGZvdW5kID0gdHJ1ZTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIWZvdW5kKSB7XG4gICAgICBBcnJheS5wcm90b3R5cGUucHVzaC5jYWxsKGFycmF5LCBjb21iaW5lZEVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBhcnJheTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGludGVyc2VjdGlvbihhcnJheUEsIGFycmF5QiwgY2FsbGJhY2spIHtcbiAgY29uc3QgYXJyYXkgPSBbXSxcbiAgICAgICAgYXJyYXlBTGVuZ3RoID0gYXJyYXlBLmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleEEgPSAwOyBpbmRleEEgPCBhcnJheUFMZW5ndGg7IGluZGV4QSsrKSB7XG4gICAgbGV0IGZvdW5kID0gZmFsc2U7XG5cbiAgICBjb25zdCBlbGVtZW50QSA9IGFycmF5QVtpbmRleEFdLFxuICAgICAgICAgIGFycmF5Qkxlbmd0aCA9IGFycmF5Qi5sZW5ndGg7XG5cbiAgICBmb3IgKGxldCBpbmRleEIgPSAwOyBpbmRleEIgPCBhcnJheUJMZW5ndGg7IGluZGV4QisrKSB7XG4gICAgICBjb25zdCBlbGVtZW50QiA9IGFycmF5QltpbmRleEJdLFxuICAgICAgICAgICAgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudEEsIGVsZW1lbnRCKTtcblxuICAgICAgaWYgKHBhc3NlZCkge1xuICAgICAgICBmb3VuZCA9IHRydWU7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGZvdW5kKSB7XG4gICAgICBBcnJheS5wcm90b3R5cGUucHVzaC5jYWxsKGFycmF5LCBlbGVtZW50QSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGFycmF5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGVmdERpZmZlcmVuY2UoYXJyYXlBLCBhcnJheUIsIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGFycmF5ID0gW10sXG4gICAgICAgIGFycmF5QUxlbmd0aCA9IGFycmF5QS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXhBID0gMDsgaW5kZXhBIDwgYXJyYXlBTGVuZ3RoOyBpbmRleEErKykge1xuICAgIGxldCBmb3VuZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgZWxlbWVudEEgPSBhcnJheUFbaW5kZXhBXSxcbiAgICAgICAgICBhcnJheUJMZW5ndGggPSBhcnJheUIubGVuZ3RoO1xuXG4gICAgZm9yIChsZXQgaW5kZXhCID0gMDsgaW5kZXhCIDwgYXJyYXlCTGVuZ3RoOyBpbmRleEIrKykge1xuICAgICAgY29uc3QgZWxlbWVudEIgPSBhcnJheUJbaW5kZXhCXSxcbiAgICAgICAgICAgIHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnRBLCBlbGVtZW50Qik7XG5cbiAgICAgIGlmIChwYXNzZWQpIHtcbiAgICAgICAgZm91bmQgPSB0cnVlO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghZm91bmQpIHtcbiAgICAgIEFycmF5LnByb3RvdHlwZS5wdXNoLmNhbGwoYXJyYXksIGVsZW1lbnRBKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYXJyYXk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByaWdodERpZmZlcmVuY2UoYXJyYXlBLCBhcnJheUIsIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGFycmF5ID0gW10sXG4gICAgICAgIGFycmF5Qkxlbmd0aCA9IGFycmF5Qi5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXhCID0gMDsgaW5kZXhCIDwgYXJyYXlCTGVuZ3RoOyBpbmRleEIrKykge1xuICAgIGxldCBmb3VuZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgZWxlbWVudEIgPSBhcnJheUJbaW5kZXhCXSxcbiAgICAgICAgICBhcnJheUFMZW5ndGggPSBhcnJheUEubGVuZ3RoO1xuXG4gICAgZm9yIChsZXQgaW5kZXhBID0gMDsgaW5kZXhBIDwgYXJyYXlBTGVuZ3RoOyBpbmRleEErKykge1xuICAgICAgY29uc3QgZWxlbWVudEEgPSBhcnJheUFbaW5kZXhBXSxcbiAgICAgICAgICAgIHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnRBLCBlbGVtZW50Qik7XG5cbiAgICAgIGlmIChwYXNzZWQpIHtcbiAgICAgICAgZm91bmQgPSB0cnVlO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghZm91bmQpIHtcbiAgICAgIEFycmF5LnByb3RvdHlwZS5wdXNoLmNhbGwoYXJyYXksIGVsZW1lbnRCKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYXJyYXk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3J3YXJkc0ZpbmQoYXJyYXksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhcnJheUxlbmd0aDsgaW5kZXgrKykge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF0sXG4gICAgICAgICAgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJhY2t3YXJkc0ZpbmQoYXJyYXksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gYXJyYXlMZW5ndGggLSAxOyBpbmRleCA+PSAwOyBpbmRleC0tKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XSxcbiAgICAgICAgICBwYXNzZWQgPSBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAocGFzc2VkKSB7XG4gICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9yd2FyZHNTb21lKGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYXJyYXlMZW5ndGg7IGluZGV4KyspIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdLFxuICAgICAgICAgIHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcbiAgICBcbiAgICBpZiAocGFzc2VkKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBiYWNrd2FyZHNTb21lKGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IGFycmF5TGVuZ3RoIC0gMTsgaW5kZXggPj0gMDsgaW5kZXgtLSkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF0sXG4gICAgICAgICAgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9yd2FyZHNFdmVyeShhcnJheSwgY2FsbGJhY2spIHtcbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGFycmF5TGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XSxcbiAgICAgICAgICBwYXNzZWQgPSBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAoIXBhc3NlZCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYmFja3dhcmRzRXZlcnkoYXJyYXksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gYXJyYXlMZW5ndGggLSAxOyBpbmRleCA+PSAwOyBpbmRleC0tKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XSxcbiAgICAgICAgICBwYXNzZWQgPSBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAoIXBhc3NlZCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9yd2FyZHNSZWR1Y2UoYXJyYXksIGNhbGxiYWNrLCBpbml0aWFsVmFsdWUpIHtcbiAgbGV0IHZhbHVlID0gaW5pdGlhbFZhbHVlOyAvLy9cblxuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYXJyYXlMZW5ndGg7IGluZGV4KyspIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdO1xuXG4gICAgdmFsdWUgPSBjYWxsYmFjayh2YWx1ZSwgZWxlbWVudCwgaW5kZXgpO1xuICB9XG5cbiAgcmV0dXJuIHZhbHVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYmFja3dhcmRzUmVkdWNlKGFycmF5LCBjYWxsYmFjaywgaW5pdGlhbFZhbHVlKSB7XG4gIGxldCB2YWx1ZSA9IGluaXRpYWxWYWx1ZTsgLy8vXG5cbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSBhcnJheUxlbmd0aCAtIDE7IGluZGV4ID49IDA7IGluZGV4LS0pIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdO1xuXG4gICAgdmFsdWUgPSBjYWxsYmFjayh2YWx1ZSwgZWxlbWVudCwgaW5kZXgpO1xuICB9XG5cbiAgcmV0dXJuIHZhbHVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9yd2FyZHNGb3JFYWNoKGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYXJyYXlMZW5ndGg7IGluZGV4KyspIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdO1xuXG4gICAgY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBiYWNrd2FyZHNGb3JFYWNoKGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IGFycmF5TGVuZ3RoIC0gMTsgaW5kZXggPj0gMDsgaW5kZXgtLSkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF07XG5cbiAgICBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcndhcmRzRmluZEluZGV4KGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYXJyYXlMZW5ndGg7IGluZGV4KyspIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdLFxuICAgICAgICAgIHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmIChwYXNzZWQpIHtcbiAgICAgIHJldHVybiBpbmRleDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gLTE7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBiYWNrd2FyZHNGaW5kSW5kZXgoYXJyYXksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gYXJyYXlMZW5ndGggLSAxOyBpbmRleCA+PSAwOyBpbmRleC0tKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XSxcbiAgICAgICAgICBwYXNzZWQgPSBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAocGFzc2VkKSB7XG4gICAgICByZXR1cm4gaW5kZXg7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIC0xO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGZpcnN0LFxuICBzZWNvbmQsXG4gIHRoaXJkLFxuICBmb3VydGgsXG4gIGZpZnRoLFxuICBzaXh0aCxcbiAgc2V2ZW50aCxcbiAgZWlnaHRoLFxuICBuaW50aCxcbiAgZmlyc3RMYXN0LFxuICBzZWNvbmRMYXN0LFxuICB0aGlyZExhc3QsXG4gIGZvdXJ0aExhc3QsXG4gIGZpZnRoTGFzdCxcbiAgc2l4dGhMYXN0LFxuICBzZXZlbnRoTGFzdCxcbiAgZWlnaHRoTGFzdCxcbiAgbmludGhMYXN0LFxuICBsYXN0LFxuICBoZWFkLFxuICB0YWlsLFxuICBiYWNrLFxuICBmcm9udCxcbiAgcHVzaCxcbiAgdW5zaGlmdCxcbiAgY29uY2F0LFxuICBtZXJnZSxcbiAgY2xlYXIsXG4gIGNvcHksXG4gIHppcCxcbiAgbWF0Y2gsXG4gIGNvbXBhcmUsXG4gIGNvcnJlbGF0ZSxcbiAgcmVzb2x2ZSxcbiAgb25lLFxuICBlYWNoLFxuICBmaW5kLFxuICBjbG9uZSxcbiAgcmVwbGFjZSxcbiAgc3BsaWNlLFxuICBmaWx0ZXIsXG4gIHBydW5lLFxuICBleHRyYWN0LFxuICBwYXRjaCxcbiAgY29tcHJlc3MsXG4gIGNvbWJpbmUsXG4gIHJldmVyc2UsXG4gIGF1Z21lbnQsXG4gIHNlcGFyYXRlLFxuICB1bmlvbixcbiAgaW50ZXJzZWN0aW9uLFxuICBsZWZ0RGlmZmVyZW5jZSxcbiAgcmlnaHREaWZmZXJlbmNlLFxuICBmb3J3YXJkc0ZpbmQsXG4gIGJhY2t3YXJkc0ZpbmQsXG4gIGZvcndhcmRzU29tZSxcbiAgYmFja3dhcmRzU29tZSxcbiAgZm9yd2FyZHNFdmVyeSxcbiAgYmFja3dhcmRzRXZlcnksXG4gIGZvcndhcmRzUmVkdWNlLFxuICBiYWNrd2FyZHNSZWR1Y2UsXG4gIGZvcndhcmRzRm9yRWFjaCxcbiAgYmFja3dhcmRzRm9yRWFjaCxcbiAgZm9yd2FyZHNGaW5kSW5kZXgsXG4gIGJhY2t3YXJkc0ZpbmRJbmRleFxufTtcbiJdLCJuYW1lcyI6WyJhdWdtZW50IiwiYmFjayIsImJhY2t3YXJkc0V2ZXJ5IiwiYmFja3dhcmRzRmluZCIsImJhY2t3YXJkc0ZpbmRJbmRleCIsImJhY2t3YXJkc0ZvckVhY2giLCJiYWNrd2FyZHNSZWR1Y2UiLCJiYWNrd2FyZHNTb21lIiwiY2xlYXIiLCJjbG9uZSIsImNvbWJpbmUiLCJjb21wYXJlIiwiY29tcHJlc3MiLCJjb25jYXQiLCJjb3B5IiwiY29ycmVsYXRlIiwiZWFjaCIsImVpZ2h0aCIsImVpZ2h0aExhc3QiLCJleHRyYWN0IiwiZmlmdGgiLCJmaWZ0aExhc3QiLCJmaWx0ZXIiLCJmaW5kIiwiZmlyc3QiLCJmaXJzdExhc3QiLCJmb3J3YXJkc0V2ZXJ5IiwiZm9yd2FyZHNGaW5kIiwiZm9yd2FyZHNGaW5kSW5kZXgiLCJmb3J3YXJkc0ZvckVhY2giLCJmb3J3YXJkc1JlZHVjZSIsImZvcndhcmRzU29tZSIsImZvdXJ0aCIsImZvdXJ0aExhc3QiLCJmcm9udCIsImhlYWQiLCJpbnRlcnNlY3Rpb24iLCJsYXN0IiwibGVmdERpZmZlcmVuY2UiLCJtYXRjaCIsIm1lcmdlIiwibmludGgiLCJuaW50aExhc3QiLCJvbmUiLCJwYXRjaCIsInBydW5lIiwicHVzaCIsInJlcGxhY2UiLCJyZXNvbHZlIiwicmV2ZXJzZSIsInJpZ2h0RGlmZmVyZW5jZSIsInNlY29uZCIsInNlY29uZExhc3QiLCJzZXBhcmF0ZSIsInNldmVudGgiLCJzZXZlbnRoTGFzdCIsInNpeHRoIiwic2l4dGhMYXN0Iiwic3BsaWNlIiwidGFpbCIsInRlbnRoIiwidGhpcmQiLCJ0aGlyZExhc3QiLCJ1bmlvbiIsInVuc2hpZnQiLCJ6aXAiLCJhcnJheSIsImxlbmd0aCIsInNsaWNlIiwiYXJyYXlBIiwiYXJyYXlCIiwiQXJyYXkiLCJwcm90b3R5cGUiLCJhcHBseSIsImVsZW1lbnRPckFycmF5MiIsImlzQXJyYXkiLCJzdGFydCIsImRlbGV0ZUNvdW50IiwiSW5maW5pdHkiLCJjYWxsIiwiY2FsbGJhY2siLCJkZWxldGVkRWxlbWVudHMiLCJhcnJheUxlbmd0aCIsImluZGV4IiwiZWxlbWVudCIsInBhc3NlZCIsImRlbGV0ZWRFbGVtZW50IiwicG9wIiwidW5kZWZpbmVkIiwic29tZSIsImluZGV4QiIsImVsZW1lbnRCIiwiaW5kZXhBIiwiZWxlbWVudEEiLCJmb3VuZCIsImVsZW1lbnRzIiwiYXJyYXlBTGVuZ3RoIiwibWFwIiwibWF0Y2hlcyIsImFycmF5Qkxlbmd0aCIsImV2ZXJ5IiwiY29tcGFyZXMiLCJjb3JyZWxhdGVzIiwicmVzb2x2ZWQiLCJmb3JFYWNoIiwiYXJyYXlCSW5jbHVkZXNFbGVtZW50QSIsImluY2x1ZGVzIiwiY29tYmluZWRBcnJheSIsImNvbWJpbmVkQXJyYXlMZW5ndGgiLCJjb21iaW5lZEVsZW1lbnQiLCJhcnJheUluZGV4IiwiaW5pdGlhbFZhbHVlIiwidmFsdWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQXFhZ0JBO2VBQUFBOztRQXZYQUM7ZUFBQUE7O1FBMGxCQUM7ZUFBQUE7O1FBNURBQztlQUFBQTs7UUEwSUFDO2VBQUFBOztR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
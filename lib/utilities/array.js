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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvYXJyYXkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBmaXJzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbMF07fVxuXG5leHBvcnQgZnVuY3Rpb24gc2Vjb25kKGFycmF5KSB7IHJldHVybiBhcnJheVsxXTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gdGhpcmQoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzJdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3VydGgoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzNdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBmaWZ0aChhcnJheSkgeyByZXR1cm4gYXJyYXlbNF07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIHNpeHRoKGFycmF5KSB7IHJldHVybiBhcnJheVs1XTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gc2V2ZW50aChhcnJheSkgeyByZXR1cm4gYXJyYXlbNl07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGVpZ2h0aChhcnJheSkgeyByZXR1cm4gYXJyYXlbN107IH1cblxuZXhwb3J0IGZ1bmN0aW9uIG5pbnRoKGFycmF5KSB7IHJldHVybiBhcnJheVs4XTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gdGVudGgoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzldOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBmaXJzdExhc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5W2FycmF5Lmxlbmd0aCAtIDFdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBzZWNvbmRMYXN0KGFycmF5KSB7IHJldHVybiBhcnJheVthcnJheS5sZW5ndGggLSAyXTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gdGhpcmRMYXN0KGFycmF5KSB7IHJldHVybiBhcnJheVthcnJheS5sZW5ndGggLSAzXTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gZm91cnRoTGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gNF07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpZnRoTGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gNV07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIHNpeHRoTGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gNl07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldmVudGhMYXN0KGFycmF5KSB7IHJldHVybiBhcnJheVthcnJheS5sZW5ndGggLSA3XTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gZWlnaHRoTGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gOF07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIG5pbnRoTGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gOV07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGxhc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5W2FycmF5Lmxlbmd0aCAtIDFdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBoZWFkKGFycmF5KSB7IHJldHVybiBhcnJheS5zbGljZSgwLCAxKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gdGFpbChhcnJheSkgeyByZXR1cm4gYXJyYXkuc2xpY2UoMSk7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGJhY2soYXJyYXkpIHsgcmV0dXJuIGFycmF5LnNsaWNlKC0xKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gZnJvbnQoYXJyYXkpIHsgcmV0dXJuIGFycmF5LnNsaWNlKDAsIC0xKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gcHVzaChhcnJheUEsIGFycmF5QikgeyByZXR1cm4gQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkoYXJyYXlBLCBhcnJheUIpOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiB1bnNoaWZ0KGFycmF5QSwgYXJyYXlCKSB7IHJldHVybiBBcnJheS5wcm90b3R5cGUudW5zaGlmdC5hcHBseShhcnJheUEsIGFycmF5Qik7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlKGFycmF5QSwgYXJyYXlCKSB7IEFycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KGFycmF5QSwgYXJyYXlCKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gY29uY2F0KGFycmF5QSwgZWxlbWVudE9yQXJyYXkyKSB7XG4gIGNvbnN0IGFycmF5QiA9IEFycmF5LmlzQXJyYXkoZWxlbWVudE9yQXJyYXkyKSA/XG4gICAgICAgICAgICAgICAgICAgZWxlbWVudE9yQXJyYXkyIDpcbiAgICAgICAgICAgICAgICAgICAgWyBlbGVtZW50T3JBcnJheTIgXTtcblxuICBBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseShhcnJheUEsIGFycmF5Qik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzcGxpY2UoYXJyYXlBLCBzdGFydCwgZGVsZXRlQ291bnQgPSBJbmZpbml0eSwgYXJyYXlCID0gW10pIHtcbiAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5zcGxpY2UuY2FsbChhcnJheUEsIHN0YXJ0LCBkZWxldGVDb3VudCwgLi4uYXJyYXlCKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyKGFycmF5KSB7XG4gIGNvbnN0IHN0YXJ0ID0gMDtcblxuICByZXR1cm4gQXJyYXkucHJvdG90eXBlLnNwbGljZS5jYWxsKGFycmF5LCBzdGFydCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbG9uZShhcnJheSkge1xuICBjb25zdCBzdGFydCA9IDA7XG5cbiAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFycmF5LCBzdGFydCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXZlcnNlKGFycmF5KSB7XG4gIGNvbnN0IHN0YXJ0ID0gMDtcblxuICByZXR1cm4gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJyYXksIHN0YXJ0KS5yZXZlcnNlKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb3B5KGFycmF5QSwgYXJyYXlCKSB7XG4gIGNvbnN0IHN0YXJ0ID0gMCxcbiAgICAgICAgZGVsZXRlQ291bnQgPSBhcnJheUIubGVuZ3RoOyAgLy8vXG5cbiAgQXJyYXkucHJvdG90eXBlLnNwbGljZS5jYWxsKGFycmF5QSwgc3RhcnQsIGRlbGV0ZUNvdW50LCAuLi5hcnJheUIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmlsdGVyKGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBkZWxldGVkRWxlbWVudHMgPSBbXSxcbiAgICAgICAgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSBhcnJheUxlbmd0aCAtIDE7IGluZGV4ID49IDA7IGluZGV4LS0pIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdLFxuICAgICAgICAgIHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmICghcGFzc2VkKSB7XG4gICAgICBjb25zdCBzdGFydCA9IGluZGV4LCAgLy8vXG4gICAgICAgICAgICBkZWxldGVDb3VudCA9IDEsXG4gICAgICAgICAgICBkZWxldGVkRWxlbWVudCA9IEFycmF5LnByb3RvdHlwZS5zcGxpY2UuY2FsbChhcnJheSwgc3RhcnQsIGRlbGV0ZUNvdW50KS5wb3AoKTtcblxuICAgICAgZGVsZXRlZEVsZW1lbnRzLnVuc2hpZnQoZGVsZXRlZEVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBkZWxldGVkRWxlbWVudHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcnVuZShhcnJheSwgY2FsbGJhY2spIHtcbiAgbGV0IGRlbGV0ZWRFbGVtZW50ID0gdW5kZWZpbmVkO1xuXG4gIEFycmF5LnByb3RvdHlwZS5zb21lLmNhbGwoYXJyYXksIChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmICghcGFzc2VkKSB7XG4gICAgICBjb25zdCBzdGFydCA9IGluZGV4LCAgLy8vXG4gICAgICAgICAgICBkZWxldGVDb3VudCA9IDE7XG5cbiAgICAgIGRlbGV0ZWRFbGVtZW50ID0gQXJyYXkucHJvdG90eXBlLnNwbGljZS5jYWxsKGFycmF5LCBzdGFydCwgZGVsZXRlQ291bnQpLnBvcCgpOyAgLy8vXG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGRlbGV0ZWRFbGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXh0cmFjdChhcnJheSwgY2FsbGJhY2spIHtcbiAgbGV0IGRlbGV0ZWRFbGVtZW50ID0gdW5kZWZpbmVkO1xuXG4gIEFycmF5LnByb3RvdHlwZS5zb21lLmNhbGwoYXJyYXksIChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmIChwYXNzZWQpIHtcbiAgICAgIGNvbnN0IHN0YXJ0ID0gaW5kZXgsICAvLy9cbiAgICAgICAgICAgIGRlbGV0ZUNvdW50ID0gMTtcblxuICAgICAgZGVsZXRlZEVsZW1lbnQgPSBBcnJheS5wcm90b3R5cGUuc3BsaWNlLmNhbGwoYXJyYXksIHN0YXJ0LCBkZWxldGVDb3VudCkucG9wKCk7ICAvLy9cblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gZGVsZXRlZEVsZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21wcmVzcyhhcnJheSwgY2FsbGJhY2spIHtcbiAgbGV0IGluZGV4QiA9IDAsXG4gICAgICBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICB3aGlsZSAoaW5kZXhCIDwgYXJyYXlMZW5ndGgpIHtcbiAgICBjb25zdCBlbGVtZW50QiA9IGFycmF5W2luZGV4Ql07XG5cbiAgICBmb3IgKGxldCBpbmRleEEgPSBhcnJheUxlbmd0aCAtIDE7IGluZGV4QSA+IGluZGV4QjsgaW5kZXhBLS0pIHtcbiAgICAgIGNvbnN0IGVsZW1lbnRBID0gYXJyYXlbaW5kZXhBXSxcbiAgICAgICAgICAgIHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnRBLCBlbGVtZW50Qik7XG5cbiAgICAgIGlmICghcGFzc2VkKSB7XG4gICAgICAgIGNvbnN0IHN0YXJ0ID0gaW5kZXhBLCAvLy9cbiAgICAgICAgICAgICAgZGVsZXRlQ291bnQgPSAxO1xuXG4gICAgICAgIEFycmF5LnByb3RvdHlwZS5zcGxpY2UuY2FsbChhcnJheSwgc3RhcnQsIGRlbGV0ZUNvdW50KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpbmRleEIrKztcblxuICAgIGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvbmUoYXJyYXksIGNhbGxiYWNrKSB7XG4gIGxldCBmb3VuZCA9IGZhbHNlO1xuXG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhcnJheUxlbmd0aDsgaW5kZXgrKykge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF0sXG4gICAgICAgICAgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgaWYgKCFmb3VuZCkge1xuICAgICAgICBmb3VuZCA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmb3VuZCA9IGZhbHNlO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmb3VuZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVhY2goYXJyYXksIGNhbGxiYWNrKSB7XG4gIGxldCBmb3VuZCA9IGZhbHNlO1xuXG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhcnJheUxlbmd0aDsgaW5kZXgrKykge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF0sXG4gICAgICAgICAgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgZm91bmQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBmb3VuZCA9IGZhbHNlO1xuXG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZm91bmQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaW5kKGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBlbGVtZW50cyA9IFtdLFxuICAgICAgICBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYXJyYXlMZW5ndGg7IGluZGV4KyspIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdLFxuICAgICAgICAgIHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmIChwYXNzZWQpIHtcbiAgICAgIGVsZW1lbnRzLnB1c2goZWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnRzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGF0Y2goYXJyYXlBLCBlbGVtZW50QiwgY2FsbGJhY2spIHtcbiAgbGV0IGZvdW5kID0gZmFsc2U7XG5cbiAgY29uc3QgYXJyYXlBTGVuZ3RoID0gYXJyYXlBLmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYXJyYXlBTGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgY29uc3QgZWxlbWVudEEgPSBhcnJheUFbaW5kZXhdLFxuICAgICAgICAgIHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnRBLCBpbmRleCk7XG5cbiAgICBpZiAocGFzc2VkKSB7XG4gICAgICBBcnJheS5wcm90b3R5cGUucHVzaC5jYWxsKGFycmF5QSwgZWxlbWVudEIpO1xuXG4gICAgICBmb3VuZCA9IHRydWU7XG5cbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmb3VuZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlcGxhY2UoYXJyYXlBLCBlbGVtZW50QiwgY2FsbGJhY2spIHtcbiAgbGV0IGZvdW5kID0gZmFsc2U7XG5cbiAgY29uc3QgYXJyYXlBTGVuZ3RoID0gYXJyYXlBLmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYXJyYXlBTGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgY29uc3QgZWxlbWVudEEgPSBhcnJheUFbaW5kZXhdLFxuICAgICAgICAgIHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnRBLCBpbmRleCk7XG5cbiAgICBpZiAocGFzc2VkKSB7XG4gICAgICBjb25zdCBzdGFydCA9IGluZGV4LCAgLy8vXG4gICAgICAgICAgICBkZWxldGVDb3VudCA9IDE7XG5cbiAgICAgIEFycmF5LnByb3RvdHlwZS5zcGxpY2UuY2FsbChhcnJheUEsIHN0YXJ0LCBkZWxldGVDb3VudCwgZWxlbWVudEIpO1xuXG4gICAgICBmb3VuZCA9IHRydWU7XG5cbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmb3VuZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1hdGNoKGFycmF5QSwgYXJyYXlCLCBjYWxsYmFjaykge1xuICBsZXQgbWF0Y2hlcyA9IGZhbHNlO1xuXG4gIGNvbnN0IGFycmF5QUxlbmd0aCA9IGFycmF5QS5sZW5ndGgsXG4gICAgICAgIGFycmF5Qkxlbmd0aCA9IGFycmF5Qi5sZW5ndGg7XG5cbiAgaWYgKGFycmF5QUxlbmd0aCA9PT0gYXJyYXlCTGVuZ3RoKSB7XG4gICAgbWF0Y2hlcyA9IEFycmF5LnByb3RvdHlwZS5ldmVyeS5jYWxsKGFycmF5QSwgKGVsZW1lbnRBLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgZWxlbWVudEIgPSBhcnJheUJbaW5kZXhdLFxuICAgICAgICAgICAgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudEEsIGVsZW1lbnRCLCBpbmRleCk7XG5cbiAgICAgIGlmIChwYXNzZWQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gbWF0Y2hlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBhcmUoYXJyYXlBLCBhcnJheUIsIGNhbGxiYWNrKSB7XG4gIGxldCBjb21wYXJlcyA9IGZhbHNlO1xuXG4gIGNvbnN0IGFycmF5QUxlbmd0aCA9IGFycmF5QS5sZW5ndGgsXG4gICAgICAgIGFycmF5Qkxlbmd0aCA9IGFycmF5Qi5sZW5ndGg7XG5cbiAgaWYgKGFycmF5QUxlbmd0aCA9PT0gYXJyYXlCTGVuZ3RoKSB7XG4gICAgYXJyYXlCID0gY2xvbmUoYXJyYXlCKTsgLy8vXG5cbiAgICBjb21wYXJlcyA9IEFycmF5LnByb3RvdHlwZS5ldmVyeS5jYWxsKGFycmF5QSwoZWxlbWVudEEpID0+IHtcbiAgICAgIGNvbnN0IGVsZW1lbnRCID0gZXh0cmFjdChhcnJheUIsIChlbGVtZW50QikgPT4ge1xuICAgICAgICBjb25zdCBwYXNzZWQgPSBjYWxsYmFjayhlbGVtZW50QSwgZWxlbWVudEIpO1xuXG4gICAgICAgIGlmIChwYXNzZWQpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmIChlbGVtZW50QiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIGNvbXBhcmVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29ycmVsYXRlKGFycmF5QSwgYXJyYXlCLCBjYWxsYmFjaykge1xuICBsZXQgY29ycmVsYXRlcztcblxuICBhcnJheUIgPSBjbG9uZShhcnJheUIpOyAvLy9cblxuICBjb3JyZWxhdGVzID0gQXJyYXkucHJvdG90eXBlLmV2ZXJ5LmNhbGwoYXJyYXlBLChlbGVtZW50QSkgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnRCID0gZXh0cmFjdChhcnJheUIsIChlbGVtZW50QikgPT4ge1xuICAgICAgY29uc3QgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudEEsIGVsZW1lbnRCKTtcblxuICAgICAgaWYgKHBhc3NlZCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChlbGVtZW50QiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBjb3JyZWxhdGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZShhcnJheUEsIGFycmF5QiwgY2FsbGJhY2spIHtcbiAgbGV0IHJlc29sdmVkO1xuXG4gIGFycmF5QSA9IGNsb25lKGFycmF5QSk7IC8vL1xuXG4gIGZvciAoOzspIHtcbiAgICBjb25zdCBhcnJheUFMZW5ndGggPSBhcnJheUEubGVuZ3RoO1xuXG4gICAgaWYgKGFycmF5QUxlbmd0aCA9PT0gMCkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgbGV0IHJlc29sdmVkID0gZmFsc2U7XG5cbiAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGFycmF5QSwgKGVsZW1lbnRBKSA9PiB7XG4gICAgICBjb25zdCBwYXNzZWQgPSBjYWxsYmFjayhlbGVtZW50QSk7XG5cbiAgICAgIGlmIChwYXNzZWQpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudEIgPSBlbGVtZW50QTsgIC8vL1xuXG4gICAgICAgIEFycmF5LnByb3RvdHlwZS5wdXNoLmNhbGwoYXJyYXlCLCBlbGVtZW50Qik7XG5cbiAgICAgICAgcmVzb2x2ZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKCFyZXNvbHZlZCkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgZmlsdGVyKGFycmF5QSwgKGVsZW1lbnRBKSA9PiB7XG4gICAgICBjb25zdCBhcnJheUJJbmNsdWRlc0VsZW1lbnRBID0gQXJyYXkucHJvdG90eXBlLmluY2x1ZGVzLmNhbGwoYXJyYXlCLCBlbGVtZW50QSk7XG5cbiAgICAgIGlmICghYXJyYXlCSW5jbHVkZXNFbGVtZW50QSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0IGFycmF5QUxlbmd0aCA9IGFycmF5QS5sZW5ndGg7XG5cbiAgcmVzb2x2ZWQgPSAoYXJyYXlBTGVuZ3RoID09PSAwKTtcblxuICByZXR1cm4gcmVzb2x2ZWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21iaW5lKGFycmF5QSwgYXJyYXlCLCBjYWxsYmFjaykge1xuICBhcnJheUEgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcnJheUEpOyAgLy8vXG4gIGFycmF5QiA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFycmF5Qik7ICAvLy9cblxuICBjb25zdCBhcnJheSA9IFtcbiAgICAuLi5hcnJheUEsXG4gICAgLi4uYXJyYXlCXG4gIF07XG5cbiAgY29tcHJlc3MoYXJyYXksIGNhbGxiYWNrKTtcblxuICByZXR1cm4gYXJyYXk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhdWdtZW50KGFycmF5QSwgYXJyYXlCLCBjYWxsYmFjaykge1xuICBjb25zdCBhcnJheUJMZW5ndGggPSBhcnJheUIubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhcnJheUJMZW5ndGg7IGluZGV4KyspIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlCW2luZGV4XSxcbiAgICAgICAgICBwYXNzZWQgPSBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAocGFzc2VkKSB7XG4gICAgICBBcnJheS5wcm90b3R5cGUucHVzaC5jYWxsKGFycmF5QSwgZWxlbWVudCk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXBhcmF0ZShhcnJheSwgYXJyYXlBLCBhcnJheUIsIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhcnJheUxlbmd0aDsgaW5kZXgrKykge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF0sXG4gICAgICAgICAgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgQXJyYXkucHJvdG90eXBlLnB1c2guY2FsbChhcnJheUEsIGVsZW1lbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBBcnJheS5wcm90b3R5cGUucHVzaC5jYWxsKGFycmF5QiwgZWxlbWVudCk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1bmlvbihhcnJheUEsIGFycmF5QiwgY2FsbGJhY2spIHtcbiAgYXJyYXlBID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJyYXlBKTsgIC8vL1xuICBhcnJheUIgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcnJheUIpOyAgLy8vXG5cbiAgY29uc3QgY29tYmluZWRBcnJheSA9IFtcbiAgICAuLi5hcnJheUEsXG4gICAgLi4uYXJyYXlCXG4gIF07XG5cbiAgY29uc3QgYXJyYXkgPSBbXSxcbiAgICAgICAgY29tYmluZWRBcnJheUxlbmd0aCA9IGNvbWJpbmVkQXJyYXkubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBjb21iaW5lZEFycmF5TGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgbGV0IGZvdW5kID0gZmFsc2U7XG5cbiAgICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aCxcbiAgICAgICAgICBjb21iaW5lZEVsZW1lbnQgPSBjb21iaW5lZEFycmF5W2luZGV4XTtcblxuICAgIGZvciAobGV0IGFycmF5SW5kZXggPSAwOyBhcnJheUluZGV4IDwgYXJyYXlMZW5ndGg7IGFycmF5SW5kZXgrKykge1xuICAgICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2FycmF5SW5kZXhdLFxuICAgICAgICAgICAgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudCwgY29tYmluZWRFbGVtZW50KTtcblxuICAgICAgaWYgKHBhc3NlZCkge1xuICAgICAgICBmb3VuZCA9IHRydWU7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFmb3VuZCkge1xuICAgICAgQXJyYXkucHJvdG90eXBlLnB1c2guY2FsbChhcnJheSwgY29tYmluZWRFbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYXJyYXk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbnRlcnNlY3Rpb24oYXJyYXlBLCBhcnJheUIsIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGFycmF5ID0gW10sXG4gICAgICAgIGFycmF5QUxlbmd0aCA9IGFycmF5QS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXhBID0gMDsgaW5kZXhBIDwgYXJyYXlBTGVuZ3RoOyBpbmRleEErKykge1xuICAgIGxldCBmb3VuZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgZWxlbWVudEEgPSBhcnJheUFbaW5kZXhBXSxcbiAgICAgICAgICBhcnJheUJMZW5ndGggPSBhcnJheUIubGVuZ3RoO1xuXG4gICAgZm9yIChsZXQgaW5kZXhCID0gMDsgaW5kZXhCIDwgYXJyYXlCTGVuZ3RoOyBpbmRleEIrKykge1xuICAgICAgY29uc3QgZWxlbWVudEIgPSBhcnJheUJbaW5kZXhCXSxcbiAgICAgICAgICAgIHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnRBLCBlbGVtZW50Qik7XG5cbiAgICAgIGlmIChwYXNzZWQpIHtcbiAgICAgICAgZm91bmQgPSB0cnVlO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChmb3VuZCkge1xuICAgICAgQXJyYXkucHJvdG90eXBlLnB1c2guY2FsbChhcnJheSwgZWxlbWVudEEpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBhcnJheTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxlZnREaWZmZXJlbmNlKGFycmF5QSwgYXJyYXlCLCBjYWxsYmFjaykge1xuICBjb25zdCBhcnJheSA9IFtdLFxuICAgICAgICBhcnJheUFMZW5ndGggPSBhcnJheUEubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4QSA9IDA7IGluZGV4QSA8IGFycmF5QUxlbmd0aDsgaW5kZXhBKyspIHtcbiAgICBsZXQgZm91bmQgPSBmYWxzZTtcblxuICAgIGNvbnN0IGVsZW1lbnRBID0gYXJyYXlBW2luZGV4QV0sXG4gICAgICAgICAgYXJyYXlCTGVuZ3RoID0gYXJyYXlCLmxlbmd0aDtcblxuICAgIGZvciAobGV0IGluZGV4QiA9IDA7IGluZGV4QiA8IGFycmF5Qkxlbmd0aDsgaW5kZXhCKyspIHtcbiAgICAgIGNvbnN0IGVsZW1lbnRCID0gYXJyYXlCW2luZGV4Ql0sXG4gICAgICAgICAgICBwYXNzZWQgPSBjYWxsYmFjayhlbGVtZW50QSwgZWxlbWVudEIpO1xuXG4gICAgICBpZiAocGFzc2VkKSB7XG4gICAgICAgIGZvdW5kID0gdHJ1ZTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIWZvdW5kKSB7XG4gICAgICBBcnJheS5wcm90b3R5cGUucHVzaC5jYWxsKGFycmF5LCBlbGVtZW50QSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGFycmF5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmlnaHREaWZmZXJlbmNlKGFycmF5QSwgYXJyYXlCLCBjYWxsYmFjaykge1xuICBjb25zdCBhcnJheSA9IFtdLFxuICAgICAgICBhcnJheUJMZW5ndGggPSBhcnJheUIubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4QiA9IDA7IGluZGV4QiA8IGFycmF5Qkxlbmd0aDsgaW5kZXhCKyspIHtcbiAgICBsZXQgZm91bmQgPSBmYWxzZTtcblxuICAgIGNvbnN0IGVsZW1lbnRCID0gYXJyYXlCW2luZGV4Ql0sXG4gICAgICAgICAgYXJyYXlBTGVuZ3RoID0gYXJyYXlBLmxlbmd0aDtcblxuICAgIGZvciAobGV0IGluZGV4QSA9IDA7IGluZGV4QSA8IGFycmF5QUxlbmd0aDsgaW5kZXhBKyspIHtcbiAgICAgIGNvbnN0IGVsZW1lbnRBID0gYXJyYXlBW2luZGV4QV0sXG4gICAgICAgICAgICBwYXNzZWQgPSBjYWxsYmFjayhlbGVtZW50QSwgZWxlbWVudEIpO1xuXG4gICAgICBpZiAocGFzc2VkKSB7XG4gICAgICAgIGZvdW5kID0gdHJ1ZTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIWZvdW5kKSB7XG4gICAgICBBcnJheS5wcm90b3R5cGUucHVzaC5jYWxsKGFycmF5LCBlbGVtZW50Qik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGFycmF5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9yd2FyZHNGaW5kKGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYXJyYXlMZW5ndGg7IGluZGV4KyspIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdLFxuICAgICAgICAgIHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmIChwYXNzZWQpIHtcbiAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBiYWNrd2FyZHNGaW5kKGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IGFycmF5TGVuZ3RoIC0gMTsgaW5kZXggPj0gMDsgaW5kZXgtLSkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF0sXG4gICAgICAgICAgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcndhcmRzU29tZShhcnJheSwgY2FsbGJhY2spIHtcbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGFycmF5TGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XSxcbiAgICAgICAgICBwYXNzZWQgPSBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG4gICAgXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYmFja3dhcmRzU29tZShhcnJheSwgY2FsbGJhY2spIHtcbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSBhcnJheUxlbmd0aCAtIDE7IGluZGV4ID49IDA7IGluZGV4LS0pIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdLFxuICAgICAgICAgIHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmIChwYXNzZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcndhcmRzRXZlcnkoYXJyYXksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhcnJheUxlbmd0aDsgaW5kZXgrKykge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF0sXG4gICAgICAgICAgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKCFwYXNzZWQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJhY2t3YXJkc0V2ZXJ5KGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IGFycmF5TGVuZ3RoIC0gMTsgaW5kZXggPj0gMDsgaW5kZXgtLSkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF0sXG4gICAgICAgICAgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKCFwYXNzZWQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcndhcmRzUmVkdWNlKGFycmF5LCBjYWxsYmFjaywgaW5pdGlhbFZhbHVlKSB7XG4gIGxldCB2YWx1ZSA9IGluaXRpYWxWYWx1ZTsgLy8vXG5cbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGFycmF5TGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XTtcblxuICAgIHZhbHVlID0gY2FsbGJhY2sodmFsdWUsIGVsZW1lbnQsIGluZGV4KTtcbiAgfVxuXG4gIHJldHVybiB2YWx1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJhY2t3YXJkc1JlZHVjZShhcnJheSwgY2FsbGJhY2ssIGluaXRpYWxWYWx1ZSkge1xuICBsZXQgdmFsdWUgPSBpbml0aWFsVmFsdWU7IC8vL1xuXG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gYXJyYXlMZW5ndGggLSAxOyBpbmRleCA+PSAwOyBpbmRleC0tKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XTtcblxuICAgIHZhbHVlID0gY2FsbGJhY2sodmFsdWUsIGVsZW1lbnQsIGluZGV4KTtcbiAgfVxuXG4gIHJldHVybiB2YWx1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcndhcmRzRm9yRWFjaChhcnJheSwgY2FsbGJhY2spIHtcbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGFycmF5TGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XTtcblxuICAgIGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYmFja3dhcmRzRm9yRWFjaChhcnJheSwgY2FsbGJhY2spIHtcbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSBhcnJheUxlbmd0aCAtIDE7IGluZGV4ID49IDA7IGluZGV4LS0pIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdO1xuXG4gICAgY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3J3YXJkc0ZpbmRJbmRleChhcnJheSwgY2FsbGJhY2spIHtcbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGFycmF5TGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XSxcbiAgICAgICAgICBwYXNzZWQgPSBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAocGFzc2VkKSB7XG4gICAgICByZXR1cm4gaW5kZXg7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIC0xO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYmFja3dhcmRzRmluZEluZGV4KGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IGFycmF5TGVuZ3RoIC0gMTsgaW5kZXggPj0gMDsgaW5kZXgtLSkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF0sXG4gICAgICAgICAgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgcmV0dXJuIGluZGV4O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAtMTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBmaXJzdCxcbiAgc2Vjb25kLFxuICB0aGlyZCxcbiAgZm91cnRoLFxuICBmaWZ0aCxcbiAgc2l4dGgsXG4gIHNldmVudGgsXG4gIGVpZ2h0aCxcbiAgbmludGgsXG4gIGZpcnN0TGFzdCxcbiAgc2Vjb25kTGFzdCxcbiAgdGhpcmRMYXN0LFxuICBmb3VydGhMYXN0LFxuICBmaWZ0aExhc3QsXG4gIHNpeHRoTGFzdCxcbiAgc2V2ZW50aExhc3QsXG4gIGVpZ2h0aExhc3QsXG4gIG5pbnRoTGFzdCxcbiAgbGFzdCxcbiAgaGVhZCxcbiAgdGFpbCxcbiAgYmFjayxcbiAgZnJvbnQsXG4gIHB1c2gsXG4gIHVuc2hpZnQsXG4gIGNvbmNhdCxcbiAgbWVyZ2UsXG4gIGNsZWFyLFxuICBjb3B5LFxuICBtYXRjaCxcbiAgY29tcGFyZSxcbiAgY29ycmVsYXRlLFxuICByZXNvbHZlLFxuICBvbmUsXG4gIGVhY2gsXG4gIGZpbmQsXG4gIGNsb25lLFxuICByZXBsYWNlLFxuICBzcGxpY2UsXG4gIGZpbHRlcixcbiAgcHJ1bmUsXG4gIGV4dHJhY3QsXG4gIHBhdGNoLFxuICBjb21wcmVzcyxcbiAgY29tYmluZSxcbiAgcmV2ZXJzZSxcbiAgYXVnbWVudCxcbiAgc2VwYXJhdGUsXG4gIHVuaW9uLFxuICBpbnRlcnNlY3Rpb24sXG4gIGxlZnREaWZmZXJlbmNlLFxuICByaWdodERpZmZlcmVuY2UsXG4gIGZvcndhcmRzRmluZCxcbiAgYmFja3dhcmRzRmluZCxcbiAgZm9yd2FyZHNTb21lLFxuICBiYWNrd2FyZHNTb21lLFxuICBmb3J3YXJkc0V2ZXJ5LFxuICBiYWNrd2FyZHNFdmVyeSxcbiAgZm9yd2FyZHNSZWR1Y2UsXG4gIGJhY2t3YXJkc1JlZHVjZSxcbiAgZm9yd2FyZHNGb3JFYWNoLFxuICBiYWNrd2FyZHNGb3JFYWNoLFxuICBmb3J3YXJkc0ZpbmRJbmRleCxcbiAgYmFja3dhcmRzRmluZEluZGV4XG59O1xuIl0sIm5hbWVzIjpbImF1Z21lbnQiLCJiYWNrIiwiYmFja3dhcmRzRXZlcnkiLCJiYWNrd2FyZHNGaW5kIiwiYmFja3dhcmRzRmluZEluZGV4IiwiYmFja3dhcmRzRm9yRWFjaCIsImJhY2t3YXJkc1JlZHVjZSIsImJhY2t3YXJkc1NvbWUiLCJjbGVhciIsImNsb25lIiwiY29tYmluZSIsImNvbXBhcmUiLCJjb21wcmVzcyIsImNvbmNhdCIsImNvcHkiLCJjb3JyZWxhdGUiLCJlYWNoIiwiZWlnaHRoIiwiZWlnaHRoTGFzdCIsImV4dHJhY3QiLCJmaWZ0aCIsImZpZnRoTGFzdCIsImZpbHRlciIsImZpbmQiLCJmaXJzdCIsImZpcnN0TGFzdCIsImZvcndhcmRzRXZlcnkiLCJmb3J3YXJkc0ZpbmQiLCJmb3J3YXJkc0ZpbmRJbmRleCIsImZvcndhcmRzRm9yRWFjaCIsImZvcndhcmRzUmVkdWNlIiwiZm9yd2FyZHNTb21lIiwiZm91cnRoIiwiZm91cnRoTGFzdCIsImZyb250IiwiaGVhZCIsImludGVyc2VjdGlvbiIsImxhc3QiLCJsZWZ0RGlmZmVyZW5jZSIsIm1hdGNoIiwibWVyZ2UiLCJuaW50aCIsIm5pbnRoTGFzdCIsIm9uZSIsInBhdGNoIiwicHJ1bmUiLCJwdXNoIiwicmVwbGFjZSIsInJlc29sdmUiLCJyZXZlcnNlIiwicmlnaHREaWZmZXJlbmNlIiwic2Vjb25kIiwic2Vjb25kTGFzdCIsInNlcGFyYXRlIiwic2V2ZW50aCIsInNldmVudGhMYXN0Iiwic2l4dGgiLCJzaXh0aExhc3QiLCJzcGxpY2UiLCJ0YWlsIiwidGVudGgiLCJ0aGlyZCIsInRoaXJkTGFzdCIsInVuaW9uIiwidW5zaGlmdCIsImFycmF5IiwibGVuZ3RoIiwic2xpY2UiLCJhcnJheUEiLCJhcnJheUIiLCJBcnJheSIsInByb3RvdHlwZSIsImFwcGx5IiwiZWxlbWVudE9yQXJyYXkyIiwiaXNBcnJheSIsInN0YXJ0IiwiZGVsZXRlQ291bnQiLCJJbmZpbml0eSIsImNhbGwiLCJjYWxsYmFjayIsImRlbGV0ZWRFbGVtZW50cyIsImFycmF5TGVuZ3RoIiwiaW5kZXgiLCJlbGVtZW50IiwicGFzc2VkIiwiZGVsZXRlZEVsZW1lbnQiLCJwb3AiLCJ1bmRlZmluZWQiLCJzb21lIiwiaW5kZXhCIiwiZWxlbWVudEIiLCJpbmRleEEiLCJlbGVtZW50QSIsImZvdW5kIiwiZWxlbWVudHMiLCJhcnJheUFMZW5ndGgiLCJtYXRjaGVzIiwiYXJyYXlCTGVuZ3RoIiwiZXZlcnkiLCJjb21wYXJlcyIsImNvcnJlbGF0ZXMiLCJyZXNvbHZlZCIsImZvckVhY2giLCJhcnJheUJJbmNsdWRlc0VsZW1lbnRBIiwiaW5jbHVkZXMiLCJjb21iaW5lZEFycmF5IiwiY29tYmluZWRBcnJheUxlbmd0aCIsImNvbWJpbmVkRWxlbWVudCIsImFycmF5SW5kZXgiLCJpbml0aWFsVmFsdWUiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBMFpnQkE7ZUFBQUE7O1FBNVdBQztlQUFBQTs7UUEra0JBQztlQUFBQTs7UUE1REFDO2VBQUFBOztRQTBJQUM7ZUFBQUE7O1FBekJBQztlQUFBQTs7UUF4QkFDO2VBQUFBOztRQTNEQUM7ZUFBQUE7O1FBM2hCQUM7ZUFBQUE7O1FBTUFDO2VBQUFBOztRQWtVQUM7ZUFBQUE7O1FBL0ZBQztlQUFBQTs7UUF0SkFDO2VBQUFBOztRQS9GQUM7ZUFBQUE7O1FBOEJBQztlQUFBQTs7UUFrUEFDO2VBQUFBOztRQWtaaEI7ZUFBQTs7UUFuaEJnQkM7ZUFBQUE7O1FBdkxBQztlQUFBQTs7UUFvQkFDO2VBQUFBOztRQWdHQUM7ZUFBQUE7O1FBMUhBQztlQUFBQTs7UUFvQkFDO2VBQUFBOztRQStEQUM7ZUFBQUE7O1FBK0hBQztlQUFBQTs7UUEx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
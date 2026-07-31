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
            const start = i, deleteCount = 1, deletedElement = Array.prototype.splice.call(array, start, deleteCount).pop();
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
    const array = [
        ...arrayA,
        ...arrayB
    ];
    compress(array, callback);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvYXJyYXkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBmaXJzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbMF07fVxuXG5leHBvcnQgZnVuY3Rpb24gc2Vjb25kKGFycmF5KSB7IHJldHVybiBhcnJheVsxXTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gdGhpcmQoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzJdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3VydGgoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzNdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBmaWZ0aChhcnJheSkgeyByZXR1cm4gYXJyYXlbNF07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIHNpeHRoKGFycmF5KSB7IHJldHVybiBhcnJheVs1XTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gc2V2ZW50aChhcnJheSkgeyByZXR1cm4gYXJyYXlbNl07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGVpZ2h0aChhcnJheSkgeyByZXR1cm4gYXJyYXlbN107IH1cblxuZXhwb3J0IGZ1bmN0aW9uIG5pbnRoKGFycmF5KSB7IHJldHVybiBhcnJheVs4XTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gdGVudGgoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzldOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBmaXJzdExhc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5W2FycmF5Lmxlbmd0aCAtIDFdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBzZWNvbmRMYXN0KGFycmF5KSB7IHJldHVybiBhcnJheVthcnJheS5sZW5ndGggLSAyXTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gdGhpcmRMYXN0KGFycmF5KSB7IHJldHVybiBhcnJheVthcnJheS5sZW5ndGggLSAzXTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gZm91cnRoTGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gNF07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpZnRoTGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gNV07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIHNpeHRoTGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gNl07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldmVudGhMYXN0KGFycmF5KSB7IHJldHVybiBhcnJheVthcnJheS5sZW5ndGggLSA3XTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gZWlnaHRoTGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gOF07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIG5pbnRoTGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gOV07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGxhc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5W2FycmF5Lmxlbmd0aCAtIDFdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBoZWFkKGFycmF5KSB7IHJldHVybiBhcnJheS5zbGljZSgwLCAxKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gdGFpbChhcnJheSkgeyByZXR1cm4gYXJyYXkuc2xpY2UoMSk7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGJhY2soYXJyYXkpIHsgcmV0dXJuIGFycmF5LnNsaWNlKC0xKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gZnJvbnQoYXJyYXkpIHsgcmV0dXJuIGFycmF5LnNsaWNlKDAsIC0xKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gcHVzaChhcnJheUEsIGFycmF5QikgeyByZXR1cm4gQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkoYXJyYXlBLCBhcnJheUIpOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiB1bnNoaWZ0KGFycmF5QSwgYXJyYXlCKSB7IHJldHVybiBBcnJheS5wcm90b3R5cGUudW5zaGlmdC5hcHBseShhcnJheUEsIGFycmF5Qik7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlKGFycmF5QSwgYXJyYXlCKSB7IEFycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KGFycmF5QSwgYXJyYXlCKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gY29uY2F0KGFycmF5QSwgZWxlbWVudE9yQXJyYXkyKSB7XG4gIGNvbnN0IGFycmF5QiA9IEFycmF5LmlzQXJyYXkoZWxlbWVudE9yQXJyYXkyKSA/XG4gICAgICAgICAgICAgICAgICAgZWxlbWVudE9yQXJyYXkyIDpcbiAgICAgICAgICAgICAgICAgICAgWyBlbGVtZW50T3JBcnJheTIgXTtcblxuICBBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseShhcnJheUEsIGFycmF5Qik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzcGxpY2UoYXJyYXlBLCBzdGFydCwgZGVsZXRlQ291bnQgPSBJbmZpbml0eSwgYXJyYXlCID0gW10pIHtcbiAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5zcGxpY2UuY2FsbChhcnJheUEsIHN0YXJ0LCBkZWxldGVDb3VudCwgLi4uYXJyYXlCKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyKGFycmF5KSB7XG4gIGNvbnN0IHN0YXJ0ID0gMDtcblxuICByZXR1cm4gQXJyYXkucHJvdG90eXBlLnNwbGljZS5jYWxsKGFycmF5LCBzdGFydCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbG9uZShhcnJheSkge1xuICBjb25zdCBzdGFydCA9IDA7XG5cbiAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFycmF5LCBzdGFydCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXZlcnNlKGFycmF5KSB7XG4gIGNvbnN0IHN0YXJ0ID0gMDtcblxuICByZXR1cm4gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJyYXksIHN0YXJ0KS5yZXZlcnNlKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb3B5KGFycmF5QSwgYXJyYXlCKSB7XG4gIGNvbnN0IHN0YXJ0ID0gMCxcbiAgICAgICAgZGVsZXRlQ291bnQgPSBhcnJheUIubGVuZ3RoOyAgLy8vXG5cbiAgQXJyYXkucHJvdG90eXBlLnNwbGljZS5jYWxsKGFycmF5QSwgc3RhcnQsIGRlbGV0ZUNvdW50LCAuLi5hcnJheUIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmlsdGVyKGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBkZWxldGVkRWxlbWVudHMgPSBbXSxcbiAgICAgICAgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSBhcnJheUxlbmd0aCAtIDE7IGluZGV4ID49IDA7IGluZGV4LS0pIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdLFxuICAgICAgICAgIHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmICghcGFzc2VkKSB7XG4gICAgICBjb25zdCBzdGFydCA9IGksXG4gICAgICAgICAgICBkZWxldGVDb3VudCA9IDEsXG4gICAgICAgICAgICBkZWxldGVkRWxlbWVudCA9IEFycmF5LnByb3RvdHlwZS5zcGxpY2UuY2FsbChhcnJheSwgc3RhcnQsIGRlbGV0ZUNvdW50KS5wb3AoKTtcblxuICAgICAgZGVsZXRlZEVsZW1lbnRzLnVuc2hpZnQoZGVsZXRlZEVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBkZWxldGVkRWxlbWVudHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcnVuZShhcnJheSwgY2FsbGJhY2spIHtcbiAgbGV0IGRlbGV0ZWRFbGVtZW50ID0gdW5kZWZpbmVkO1xuXG4gIEFycmF5LnByb3RvdHlwZS5zb21lLmNhbGwoYXJyYXksIChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmICghcGFzc2VkKSB7XG4gICAgICBjb25zdCBzdGFydCA9IGluZGV4LCAgLy8vXG4gICAgICAgICAgICBkZWxldGVDb3VudCA9IDE7XG5cbiAgICAgIGRlbGV0ZWRFbGVtZW50ID0gQXJyYXkucHJvdG90eXBlLnNwbGljZS5jYWxsKGFycmF5LCBzdGFydCwgZGVsZXRlQ291bnQpLnBvcCgpOyAgLy8vXG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGRlbGV0ZWRFbGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXh0cmFjdChhcnJheSwgY2FsbGJhY2spIHtcbiAgbGV0IGRlbGV0ZWRFbGVtZW50ID0gdW5kZWZpbmVkO1xuXG4gIEFycmF5LnByb3RvdHlwZS5zb21lLmNhbGwoYXJyYXksIChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmIChwYXNzZWQpIHtcbiAgICAgIGNvbnN0IHN0YXJ0ID0gaW5kZXgsICAvLy9cbiAgICAgICAgICAgIGRlbGV0ZUNvdW50ID0gMTtcblxuICAgICAgZGVsZXRlZEVsZW1lbnQgPSBBcnJheS5wcm90b3R5cGUuc3BsaWNlLmNhbGwoYXJyYXksIHN0YXJ0LCBkZWxldGVDb3VudCkucG9wKCk7ICAvLy9cblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gZGVsZXRlZEVsZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21wcmVzcyhhcnJheSwgY2FsbGJhY2spIHtcbiAgbGV0IGluZGV4QiA9IDAsXG4gICAgICBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICB3aGlsZSAoaW5kZXhCIDwgYXJyYXlMZW5ndGgpIHtcbiAgICBjb25zdCBlbGVtZW50QiA9IGFycmF5W2luZGV4Ql07XG5cbiAgICBmb3IgKGxldCBpbmRleEEgPSBhcnJheUxlbmd0aCAtIDE7IGluZGV4QSA+IGluZGV4QjsgaW5kZXhBLS0pIHtcbiAgICAgIGNvbnN0IGVsZW1lbnRBID0gYXJyYXlbaW5kZXhBXSxcbiAgICAgICAgICAgIHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnRBLCBlbGVtZW50Qik7XG5cbiAgICAgIGlmICghcGFzc2VkKSB7XG4gICAgICAgIGNvbnN0IHN0YXJ0ID0gaW5kZXhBLCAvLy9cbiAgICAgICAgICAgICAgZGVsZXRlQ291bnQgPSAxO1xuXG4gICAgICAgIEFycmF5LnByb3RvdHlwZS5zcGxpY2UuY2FsbChhcnJheSwgc3RhcnQsIGRlbGV0ZUNvdW50KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpbmRleEIrKztcblxuICAgIGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvbmUoYXJyYXksIGNhbGxiYWNrKSB7XG4gIGxldCBmb3VuZCA9IGZhbHNlO1xuXG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhcnJheUxlbmd0aDsgaW5kZXgrKykge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF0sXG4gICAgICAgICAgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgaWYgKCFmb3VuZCkge1xuICAgICAgICBmb3VuZCA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmb3VuZCA9IGZhbHNlO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmb3VuZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVhY2goYXJyYXksIGNhbGxiYWNrKSB7XG4gIGxldCBmb3VuZCA9IGZhbHNlO1xuXG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhcnJheUxlbmd0aDsgaW5kZXgrKykge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF0sXG4gICAgICAgICAgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgZm91bmQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBmb3VuZCA9IGZhbHNlO1xuXG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZm91bmQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaW5kKGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBlbGVtZW50cyA9IFtdLFxuICAgICAgICBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYXJyYXlMZW5ndGg7IGluZGV4KyspIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdLFxuICAgICAgICAgIHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmIChwYXNzZWQpIHtcbiAgICAgIGVsZW1lbnRzLnB1c2goZWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnRzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGF0Y2goYXJyYXlBLCBlbGVtZW50QiwgY2FsbGJhY2spIHtcbiAgbGV0IGZvdW5kID0gZmFsc2U7XG5cbiAgY29uc3QgYXJyYXlBTGVuZ3RoID0gYXJyYXlBLmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYXJyYXlBTGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgY29uc3QgZWxlbWVudEEgPSBhcnJheUFbaW5kZXhdLFxuICAgICAgICAgIHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnRBLCBpbmRleCk7XG5cbiAgICBpZiAocGFzc2VkKSB7XG4gICAgICBBcnJheS5wcm90b3R5cGUucHVzaC5jYWxsKGFycmF5QSwgZWxlbWVudEIpO1xuXG4gICAgICBmb3VuZCA9IHRydWU7XG5cbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmb3VuZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlcGxhY2UoYXJyYXlBLCBlbGVtZW50QiwgY2FsbGJhY2spIHtcbiAgbGV0IGZvdW5kID0gZmFsc2U7XG5cbiAgY29uc3QgYXJyYXlBTGVuZ3RoID0gYXJyYXlBLmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYXJyYXlBTGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgY29uc3QgZWxlbWVudEEgPSBhcnJheUFbaW5kZXhdLFxuICAgICAgICAgIHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnRBLCBpbmRleCk7XG5cbiAgICBpZiAocGFzc2VkKSB7XG4gICAgICBjb25zdCBzdGFydCA9IGluZGV4LCAgLy8vXG4gICAgICAgICAgICBkZWxldGVDb3VudCA9IDE7XG5cbiAgICAgIEFycmF5LnByb3RvdHlwZS5zcGxpY2UuY2FsbChhcnJheUEsIHN0YXJ0LCBkZWxldGVDb3VudCwgZWxlbWVudEIpO1xuXG4gICAgICBmb3VuZCA9IHRydWU7XG5cbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmb3VuZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1hdGNoKGFycmF5QSwgYXJyYXlCLCBjYWxsYmFjaykge1xuICBsZXQgbWF0Y2hlcyA9IGZhbHNlO1xuXG4gIGNvbnN0IGFycmF5QUxlbmd0aCA9IGFycmF5QS5sZW5ndGgsXG4gICAgICAgIGFycmF5Qkxlbmd0aCA9IGFycmF5Qi5sZW5ndGg7XG5cbiAgaWYgKGFycmF5QUxlbmd0aCA9PT0gYXJyYXlCTGVuZ3RoKSB7XG4gICAgbWF0Y2hlcyA9IEFycmF5LnByb3RvdHlwZS5ldmVyeS5jYWxsKGFycmF5QSwgKGVsZW1lbnRBLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgZWxlbWVudEIgPSBhcnJheUJbaW5kZXhdLFxuICAgICAgICAgICAgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudEEsIGVsZW1lbnRCLCBpbmRleCk7XG5cbiAgICAgIGlmIChwYXNzZWQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gbWF0Y2hlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBhcmUoYXJyYXlBLCBhcnJheUIsIGNhbGxiYWNrKSB7XG4gIGxldCBjb21wYXJlcyA9IGZhbHNlO1xuXG4gIGNvbnN0IGFycmF5QUxlbmd0aCA9IGFycmF5QS5sZW5ndGgsXG4gICAgICAgIGFycmF5Qkxlbmd0aCA9IGFycmF5Qi5sZW5ndGg7XG5cbiAgaWYgKGFycmF5QUxlbmd0aCA9PT0gYXJyYXlCTGVuZ3RoKSB7XG4gICAgYXJyYXlCID0gY2xvbmUoYXJyYXlCKTsgLy8vXG5cbiAgICBjb21wYXJlcyA9IEFycmF5LnByb3RvdHlwZS5ldmVyeS5jYWxsKGFycmF5QSwoZWxlbWVudEEpID0+IHtcbiAgICAgIGNvbnN0IGVsZW1lbnRCID0gZXh0cmFjdChhcnJheUIsIChlbGVtZW50QikgPT4ge1xuICAgICAgICBjb25zdCBwYXNzZWQgPSBjYWxsYmFjayhlbGVtZW50QSwgZWxlbWVudEIpO1xuXG4gICAgICAgIGlmIChwYXNzZWQpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmIChlbGVtZW50QiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIGNvbXBhcmVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29ycmVsYXRlKGFycmF5QSwgYXJyYXlCLCBjYWxsYmFjaykge1xuICBsZXQgY29ycmVsYXRlcztcblxuICBhcnJheUIgPSBjbG9uZShhcnJheUIpOyAvLy9cblxuICBjb3JyZWxhdGVzID0gQXJyYXkucHJvdG90eXBlLmV2ZXJ5LmNhbGwoYXJyYXlBLChlbGVtZW50QSkgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnRCID0gZXh0cmFjdChhcnJheUIsIChlbGVtZW50QikgPT4ge1xuICAgICAgY29uc3QgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudEEsIGVsZW1lbnRCKTtcblxuICAgICAgaWYgKHBhc3NlZCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChlbGVtZW50QiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBjb3JyZWxhdGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZShhcnJheUEsIGFycmF5QiwgY2FsbGJhY2spIHtcbiAgbGV0IHJlc29sdmVkO1xuXG4gIGFycmF5QSA9IGNsb25lKGFycmF5QSk7IC8vL1xuXG4gIGZvciAoOzspIHtcbiAgICBjb25zdCBhcnJheUFMZW5ndGggPSBhcnJheUEubGVuZ3RoO1xuXG4gICAgaWYgKGFycmF5QUxlbmd0aCA9PT0gMCkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgbGV0IHJlc29sdmVkID0gZmFsc2U7XG5cbiAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGFycmF5QSwgKGVsZW1lbnRBKSA9PiB7XG4gICAgICBjb25zdCBwYXNzZWQgPSBjYWxsYmFjayhlbGVtZW50QSk7XG5cbiAgICAgIGlmIChwYXNzZWQpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudEIgPSBlbGVtZW50QTsgIC8vL1xuXG4gICAgICAgIEFycmF5LnByb3RvdHlwZS5wdXNoLmNhbGwoYXJyYXlCLCBlbGVtZW50Qik7XG5cbiAgICAgICAgcmVzb2x2ZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKCFyZXNvbHZlZCkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgZmlsdGVyKGFycmF5QSwgKGVsZW1lbnRBKSA9PiB7XG4gICAgICBjb25zdCBhcnJheUJJbmNsdWRlc0VsZW1lbnRBID0gQXJyYXkucHJvdG90eXBlLmluY2x1ZGVzLmNhbGwoYXJyYXlCLCBlbGVtZW50QSk7XG5cbiAgICAgIGlmICghYXJyYXlCSW5jbHVkZXNFbGVtZW50QSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0IGFycmF5QUxlbmd0aCA9IGFycmF5QS5sZW5ndGg7XG5cbiAgcmVzb2x2ZWQgPSAoYXJyYXlBTGVuZ3RoID09PSAwKTtcblxuICByZXR1cm4gcmVzb2x2ZWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21iaW5lKGFycmF5QSwgYXJyYXlCLCBjYWxsYmFjaykge1xuICBjb25zdCBhcnJheSA9IFtcbiAgICAuLi5hcnJheUEsXG4gICAgLi4uYXJyYXlCXG4gIF07XG5cbiAgY29tcHJlc3MoYXJyYXksIGNhbGxiYWNrKTtcblxuICByZXR1cm4gYXJyYXk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhdWdtZW50KGFycmF5QSwgYXJyYXlCLCBjYWxsYmFjaykge1xuICBhcnJheUIuZm9yRWFjaCgoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBwYXNzZWQgPSBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAocGFzc2VkKSB7XG4gICAgICBhcnJheUEucHVzaChlbGVtZW50KTtcbiAgICB9XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2VwYXJhdGUoYXJyYXksIGFycmF5QSwgYXJyYXlCLCBjYWxsYmFjaykge1xuICBhcnJheS5mb3JFYWNoKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcblxuICAgIHBhc3NlZCA/XG4gICAgICBhcnJheUEucHVzaChlbGVtZW50KSA6XG4gICAgICAgIGFycmF5Qi5wdXNoKGVsZW1lbnQpO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcndhcmRzRmluZChhcnJheSwgY2FsbGJhY2spIHtcbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGFycmF5TGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XSxcbiAgICAgICAgICBwYXNzZWQgPSBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAocGFzc2VkKSB7XG4gICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBiYWNrd2FyZHNGaW5kKGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IGFycmF5TGVuZ3RoIC0gMTsgaW5kZXggPj0gMDsgaW5kZXgtLSkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF0sXG4gICAgICAgICAgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9yd2FyZHNTb21lKGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYXJyYXlMZW5ndGg7IGluZGV4KyspIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdLFxuICAgICAgICAgIHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcbiAgICBcbiAgICBpZiAocGFzc2VkKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBiYWNrd2FyZHNTb21lKGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IGFycmF5TGVuZ3RoIC0gMTsgaW5kZXggPj0gMDsgaW5kZXgtLSkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF0sXG4gICAgICAgICAgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9yd2FyZHNFdmVyeShhcnJheSwgY2FsbGJhY2spIHtcbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGFycmF5TGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XSxcbiAgICAgICAgICBwYXNzZWQgPSBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAoIXBhc3NlZCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYmFja3dhcmRzRXZlcnkoYXJyYXksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gYXJyYXlMZW5ndGggLSAxOyBpbmRleCA+PSAwOyBpbmRleC0tKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XSxcbiAgICAgICAgICBwYXNzZWQgPSBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAoIXBhc3NlZCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9yd2FyZHNSZWR1Y2UoYXJyYXksIGNhbGxiYWNrLCBpbml0aWFsVmFsdWUpIHtcbiAgbGV0IHZhbHVlID0gaW5pdGlhbFZhbHVlOyAvLy9cblxuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYXJyYXlMZW5ndGg7IGluZGV4KyspIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdO1xuXG4gICAgdmFsdWUgPSBjYWxsYmFjayh2YWx1ZSwgZWxlbWVudCwgaW5kZXgpO1xuICB9XG5cbiAgcmV0dXJuIHZhbHVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYmFja3dhcmRzUmVkdWNlKGFycmF5LCBjYWxsYmFjaywgaW5pdGlhbFZhbHVlKSB7XG4gIGxldCB2YWx1ZSA9IGluaXRpYWxWYWx1ZTsgLy8vXG5cbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSBhcnJheUxlbmd0aCAtIDE7IGluZGV4ID49IDA7IGluZGV4LS0pIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdO1xuXG4gICAgdmFsdWUgPSBjYWxsYmFjayh2YWx1ZSwgZWxlbWVudCwgaW5kZXgpO1xuICB9XG5cbiAgcmV0dXJuIHZhbHVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9yd2FyZHNGb3JFYWNoKGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYXJyYXlMZW5ndGg7IGluZGV4KyspIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdO1xuXG4gICAgY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBiYWNrd2FyZHNGb3JFYWNoKGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IGFycmF5TGVuZ3RoIC0gMTsgaW5kZXggPj0gMDsgaW5kZXgtLSkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF07XG5cbiAgICBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcndhcmRzRmluZEluZGV4KGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYXJyYXlMZW5ndGg7IGluZGV4KyspIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdLFxuICAgICAgICAgIHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmIChwYXNzZWQpIHtcbiAgICAgIHJldHVybiBpbmRleDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gLTE7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBiYWNrd2FyZHNGaW5kSW5kZXgoYXJyYXksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gYXJyYXlMZW5ndGggLSAxOyBpbmRleCA+PSAwOyBpbmRleC0tKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XSxcbiAgICAgICAgICBwYXNzZWQgPSBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAocGFzc2VkKSB7XG4gICAgICByZXR1cm4gaW5kZXg7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIC0xO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGZpcnN0LFxuICBzZWNvbmQsXG4gIHRoaXJkLFxuICBmb3VydGgsXG4gIGZpZnRoLFxuICBzaXh0aCxcbiAgc2V2ZW50aCxcbiAgZWlnaHRoLFxuICBuaW50aCxcbiAgZmlyc3RMYXN0LFxuICBzZWNvbmRMYXN0LFxuICB0aGlyZExhc3QsXG4gIGZvdXJ0aExhc3QsXG4gIGZpZnRoTGFzdCxcbiAgc2l4dGhMYXN0LFxuICBzZXZlbnRoTGFzdCxcbiAgZWlnaHRoTGFzdCxcbiAgbmludGhMYXN0LFxuICBsYXN0LFxuICBoZWFkLFxuICB0YWlsLFxuICBiYWNrLFxuICBmcm9udCxcbiAgcHVzaCxcbiAgdW5zaGlmdCxcbiAgY29uY2F0LFxuICBtZXJnZSxcbiAgY2xlYXIsXG4gIGNvcHksXG4gIG1hdGNoLFxuICBjb21wYXJlLFxuICBjb3JyZWxhdGUsXG4gIHJlc29sdmUsXG4gIG9uZSxcbiAgZWFjaCxcbiAgZmluZCxcbiAgY2xvbmUsXG4gIHJlcGxhY2UsXG4gIHNwbGljZSxcbiAgZmlsdGVyLFxuICBwcnVuZSxcbiAgZXh0cmFjdCxcbiAgcGF0Y2gsXG4gIGNvbXByZXNzLFxuICBjb21iaW5lLFxuICByZXZlcnNlLFxuICBhdWdtZW50LFxuICBzZXBhcmF0ZSxcbiAgZm9yd2FyZHNGaW5kLFxuICBiYWNrd2FyZHNGaW5kLFxuICBmb3J3YXJkc1NvbWUsXG4gIGJhY2t3YXJkc1NvbWUsXG4gIGZvcndhcmRzRXZlcnksXG4gIGJhY2t3YXJkc0V2ZXJ5LFxuICBmb3J3YXJkc1JlZHVjZSxcbiAgYmFja3dhcmRzUmVkdWNlLFxuICBmb3J3YXJkc0ZvckVhY2gsXG4gIGJhY2t3YXJkc0ZvckVhY2gsXG4gIGZvcndhcmRzRmluZEluZGV4LFxuICBiYWNrd2FyZHNGaW5kSW5kZXhcbn07XG4iXSwibmFtZXMiOlsiYXVnbWVudCIsImJhY2siLCJiYWNrd2FyZHNFdmVyeSIsImJhY2t3YXJkc0ZpbmQiLCJiYWNrd2FyZHNGaW5kSW5kZXgiLCJiYWNrd2FyZHNGb3JFYWNoIiwiYmFja3dhcmRzUmVkdWNlIiwiYmFja3dhcmRzU29tZSIsImNsZWFyIiwiY2xvbmUiLCJjb21iaW5lIiwiY29tcGFyZSIsImNvbXByZXNzIiwiY29uY2F0IiwiY29weSIsImNvcnJlbGF0ZSIsImVhY2giLCJlaWdodGgiLCJlaWdodGhMYXN0IiwiZXh0cmFjdCIsImZpZnRoIiwiZmlmdGhMYXN0IiwiZmlsdGVyIiwiZmluZCIsImZpcnN0IiwiZmlyc3RMYXN0IiwiZm9yd2FyZHNFdmVyeSIsImZvcndhcmRzRmluZCIsImZvcndhcmRzRmluZEluZGV4IiwiZm9yd2FyZHNGb3JFYWNoIiwiZm9yd2FyZHNSZWR1Y2UiLCJmb3J3YXJkc1NvbWUiLCJmb3VydGgiLCJmb3VydGhMYXN0IiwiZnJvbnQiLCJoZWFkIiwibGFzdCIsIm1hdGNoIiwibWVyZ2UiLCJuaW50aCIsIm5pbnRoTGFzdCIsIm9uZSIsInBhdGNoIiwicHJ1bmUiLCJwdXNoIiwicmVwbGFjZSIsInJlc29sdmUiLCJyZXZlcnNlIiwic2Vjb25kIiwic2Vjb25kTGFzdCIsInNlcGFyYXRlIiwic2V2ZW50aCIsInNldmVudGhMYXN0Iiwic2l4dGgiLCJzaXh0aExhc3QiLCJzcGxpY2UiLCJ0YWlsIiwidGVudGgiLCJ0aGlyZCIsInRoaXJkTGFzdCIsInVuc2hpZnQiLCJhcnJheSIsImxlbmd0aCIsInNsaWNlIiwiYXJyYXlBIiwiYXJyYXlCIiwiQXJyYXkiLCJwcm90b3R5cGUiLCJhcHBseSIsImVsZW1lbnRPckFycmF5MiIsImlzQXJyYXkiLCJzdGFydCIsImRlbGV0ZUNvdW50IiwiSW5maW5pdHkiLCJjYWxsIiwiY2FsbGJhY2siLCJkZWxldGVkRWxlbWVudHMiLCJhcnJheUxlbmd0aCIsImluZGV4IiwiZWxlbWVudCIsInBhc3NlZCIsImkiLCJkZWxldGVkRWxlbWVudCIsInBvcCIsInVuZGVmaW5lZCIsInNvbWUiLCJpbmRleEIiLCJlbGVtZW50QiIsImluZGV4QSIsImVsZW1lbnRBIiwiZm91bmQiLCJlbGVtZW50cyIsImFycmF5QUxlbmd0aCIsIm1hdGNoZXMiLCJhcnJheUJMZW5ndGgiLCJldmVyeSIsImNvbXBhcmVzIiwiY29ycmVsYXRlcyIsInJlc29sdmVkIiwiZm9yRWFjaCIsImFycmF5QkluY2x1ZGVzRWxlbWVudEEiLCJpbmNsdWRlcyIsImluaXRpYWxWYWx1ZSIsInZhbHVlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7UUF1WmdCQTtlQUFBQTs7UUF6V0FDO2VBQUFBOztRQXdjQUM7ZUFBQUE7O1FBNURBQztlQUFBQTs7UUEwSUFDO2VBQUFBOztR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
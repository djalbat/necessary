"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.first = first;
exports.second = second;
exports.third = third;
exports.fourth = fourth;
exports.fifth = fifth;
exports.fifthLast = fifthLast;
exports.fourthLast = fourthLast;
exports.thirdLast = thirdLast;
exports.secondLast = secondLast;
exports.last = last;
exports.head = head;
exports.tail = tail;
exports.back = back;
exports.front = front;
exports.push = push;
exports.unshift = unshift;
exports.concat = concat;
exports.clear = clear;
exports.copy = copy;
exports.merge = merge;
exports.splice = splice;
exports.replace = replace;
exports.filter = filter;
exports.find = find;
exports.prune = prune;
exports.patch = patch;
exports.augment = augment;
exports.separate = separate;
exports.forwardsSome = forwardsSome;
exports.backwardsSome = backwardsSome;
exports.forwardsEvery = forwardsEvery;
exports.backwardsEvery = backwardsEvery;
exports.forwardsReduce = forwardsReduce;
exports.backwardsReduce = backwardsReduce;
exports.forwardsForEach = forwardsForEach;
exports.backwardsForEach = backwardsForEach;
exports.default = void 0;
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
        for(var i = 0, arr2 = new Array(arr.length); i < arr.length; i++){
            arr2[i] = arr[i];
        }
        return arr2;
    }
}
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
}
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
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
function fifthLast(array) {
    return array[array.length - 5];
}
function fourthLast(array) {
    return array[array.length - 4];
}
function thirdLast(array) {
    return array[array.length - 3];
}
function secondLast(array) {
    return array[array.length - 2];
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
    return array.slice(0, array.length - 1);
}
function push(array1, array2) {
    Array.prototype.push.apply(array1, array2);
}
function unshift(array1, array2) {
    Array.prototype.unshift.apply(array1, array2);
}
function concat(array1, elementOrArray2) {
    var array2 = _instanceof(elementOrArray2, Array) ? elementOrArray2 : [
        elementOrArray2
    ];
    push(array1, array2);
}
function clear(array) {
    var start = 0;
    return array.splice(start);
}
function copy(array1, array2) {
    var start = 0, deleteCount = array2.length; ///
    splice(array1, start, deleteCount, array2);
}
function merge(array1, array2) {
    Array.prototype.push.apply(array1, array2);
}
function splice(array1, start, param, param1) {
    var deleteCount = param === void 0 ? Infinity : param, array2 = param1 === void 0 ? [] : param1;
    var args = [
        start,
        deleteCount
    ].concat(_toConsumableArray(array2)), deletedItemsArray = Array.prototype.splice.apply(array1, args);
    return deletedItemsArray;
}
function replace(array, element, test) {
    var start;
    var found = array.some(function(element, index) {
        var passed = test(element, index);
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
function filter(array, test) {
    var filteredElements = [];
    backwardsForEach(array, function(element, index) {
        var passed = test(element, index);
        if (!passed) {
            var start = index, deleteCount = 1, deletedElements = array.splice(start, deleteCount), firstDeletedElement = first(deletedElements);
            filteredElements.unshift(firstDeletedElement); ///
        }
    });
    return filteredElements;
}
function find(array, test) {
    var elements = [];
    forwardsForEach(array, function(element, index) {
        var passed = test(element, index);
        if (passed) {
            elements.push(element);
        }
    });
    return elements;
}
function prune(array, test) {
    var prunedElement = undefined;
    array.some(function(element, index) {
        var passed = test(element, index);
        if (!passed) {
            var start = index, deleteCount = 1, deletedElements = array.splice(start, deleteCount), firstDeletedElement = first(deletedElements);
            prunedElement = firstDeletedElement; ///
            return true;
        }
    });
    return prunedElement;
}
function patch(array, element, test) {
    var found = array.some(function(element, index) {
        var passed = test(element, index);
        if (passed) {
            return true;
        }
    });
    if (found) {
        array.push(element);
    }
    return found;
}
function augment(array1, array2, test) {
    array2.forEach(function(element, index) {
        var passed = test(element, index);
        if (passed) {
            array1.push(element);
        }
    });
}
function separate(array, array1, array2, test) {
    array.forEach(function(element, index) {
        var passed = test(element, index);
        passed ? array1.push(element) : array2.push(element);
    });
}
function forwardsSome(array, callback) {
    var arrayLength = array.length;
    for(var index = 0; index < arrayLength; index++){
        var element = array[index], result = callback(element, index);
        if (result) {
            return true;
        }
    }
    return false;
}
function backwardsSome(array, callback) {
    var arrayLength = array.length;
    for(var index = arrayLength - 1; index >= 0; index--){
        var element = array[index], result = callback(element, index);
        if (result) {
            return true;
        }
    }
    return false;
}
function forwardsEvery(array, callback) {
    var arrayLength = array.length;
    for(var index = 0; index < arrayLength; index++){
        var element = array[index], result = callback(element, index);
        if (!result) {
            return false;
        }
    }
    return true;
}
function backwardsEvery(array, callback) {
    var arrayLength = array.length;
    for(var index = arrayLength - 1; index >= 0; index--){
        var element = array[index], result = callback(element, index);
        if (!result) {
            return false;
        }
    }
    return true;
}
function forwardsReduce(array, callback, initialValue) {
    var value = initialValue;
    forwardsForEach(array, function(element, index) {
        value = callback(value, element, index);
    });
    return value;
}
function backwardsReduce(array, callback, initialValue) {
    var value = initialValue;
    backwardsForEach(array, function(element, index) {
        value = callback(value, element, index);
    });
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
    splice: splice,
    replace: replace,
    filter: filter,
    find: find,
    prune: prune,
    patch: patch,
    augment: augment,
    separate: separate,
    forwardsSome: forwardsSome,
    backwardsSome: backwardsSome,
    forwardsEvery: forwardsEvery,
    backwardsEvery: backwardsEvery,
    forwardsReduce: forwardsReduce,
    backwardsReduce: backwardsReduce,
    forwardsForEach: forwardsForEach,
    backwardsForEach: backwardsForEach
};
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvYXJyYXkuanMiXSwibmFtZXMiOlsiZmlyc3QiLCJhcnJheSIsInNlY29uZCIsInRoaXJkIiwiZm91cnRoIiwiZmlmdGgiLCJmaWZ0aExhc3QiLCJsZW5ndGgiLCJmb3VydGhMYXN0IiwidGhpcmRMYXN0Iiwic2Vjb25kTGFzdCIsImxhc3QiLCJoZWFkIiwic2xpY2UiLCJ0YWlsIiwiYmFjayIsImZyb250IiwicHVzaCIsImFycmF5MSIsImFycmF5MiIsIkFycmF5IiwicHJvdG90eXBlIiwiYXBwbHkiLCJ1bnNoaWZ0IiwiY29uY2F0IiwiZWxlbWVudE9yQXJyYXkyIiwiY2xlYXIiLCJzdGFydCIsInNwbGljZSIsImNvcHkiLCJkZWxldGVDb3VudCIsIm1lcmdlIiwiSW5maW5pdHkiLCJhcmdzIiwiZGVsZXRlZEl0ZW1zQXJyYXkiLCJyZXBsYWNlIiwiZWxlbWVudCIsInRlc3QiLCJmb3VuZCIsInNvbWUiLCJpbmRleCIsInBhc3NlZCIsImZpbHRlciIsImZpbHRlcmVkRWxlbWVudHMiLCJiYWNrd2FyZHNGb3JFYWNoIiwiZGVsZXRlZEVsZW1lbnRzIiwiZmlyc3REZWxldGVkRWxlbWVudCIsImZpbmQiLCJlbGVtZW50cyIsImZvcndhcmRzRm9yRWFjaCIsInBydW5lIiwicHJ1bmVkRWxlbWVudCIsInVuZGVmaW5lZCIsInBhdGNoIiwiYXVnbWVudCIsImZvckVhY2giLCJzZXBhcmF0ZSIsImZvcndhcmRzU29tZSIsImNhbGxiYWNrIiwiYXJyYXlMZW5ndGgiLCJyZXN1bHQiLCJiYWNrd2FyZHNTb21lIiwiZm9yd2FyZHNFdmVyeSIsImJhY2t3YXJkc0V2ZXJ5IiwiZm9yd2FyZHNSZWR1Y2UiLCJpbml0aWFsVmFsdWUiLCJ2YWx1ZSIsImJhY2t3YXJkc1JlZHVjZSJdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7OztRQUVJLEtBQUssR0FBTCxLQUFLO1FBRUwsTUFBTSxHQUFOLE1BQU07UUFFTixLQUFLLEdBQUwsS0FBSztRQUVMLE1BQU0sR0FBTixNQUFNO1FBRU4sS0FBSyxHQUFMLEtBQUs7UUFFTCxTQUFTLEdBQVQsU0FBUztRQUVULFVBQVUsR0FBVixVQUFVO1FBRVYsU0FBUyxHQUFULFNBQVM7UUFFVCxVQUFVLEdBQVYsVUFBVTtRQUVWLElBQUksR0FBSixJQUFJO1FBRUosSUFBSSxHQUFKLElBQUk7UUFFSixJQUFJLEdBQUosSUFBSTtRQUVKLElBQUksR0FBSixJQUFJO1FBRUosS0FBSyxHQUFMLEtBQUs7UUFFTCxJQUFJLEdBQUosSUFBSTtRQUVKLE9BQU8sR0FBUCxPQUFPO1FBRVAsTUFBTSxHQUFOLE1BQU07UUFRTixLQUFLLEdBQUwsS0FBSztRQU1MLElBQUksR0FBSixJQUFJO1FBT0osS0FBSyxHQUFMLEtBQUs7UUFFTCxNQUFNLEdBQU4sTUFBTTtRQU9OLE9BQU8sR0FBUCxPQUFPO1FBc0JQLE1BQU0sR0FBTixNQUFNO1FBbUJOLElBQUksR0FBSixJQUFJO1FBY0osS0FBSyxHQUFMLEtBQUs7UUFxQkwsS0FBSyxHQUFMLEtBQUs7UUFpQkwsT0FBTyxHQUFQLE9BQU87UUFVUCxRQUFRLEdBQVIsUUFBUTtRQVVSLFlBQVksR0FBWixZQUFZO1FBZVosYUFBYSxHQUFiLGFBQWE7UUFlYixhQUFhLEdBQWIsYUFBYTtRQWViLGNBQWMsR0FBZCxjQUFjO1FBZWQsY0FBYyxHQUFkLGNBQWM7UUFVZCxlQUFlLEdBQWYsZUFBZTtRQVVmLGVBQWUsR0FBZixlQUFlO1FBVWYsZ0JBQWdCLEdBQWhCLGdCQUFnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7U0F6UWhCLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUFFLENBQUM7U0FFaEMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQUcsQ0FBQztTQUVsQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7SUFBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7QUFBRyxDQUFDO1NBRWpDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUFHLENBQUM7U0FFbEMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQUcsQ0FBQztTQUVqQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7SUFBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQztBQUFHLENBQUM7U0FFcEQsVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUM7QUFBRyxDQUFDO1NBRXJELFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDO0FBQUcsQ0FBQztTQUVwRCxVQUFVLENBQUMsS0FBSyxFQUFFLENBQUM7SUFBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQztBQUFHLENBQUM7U0FFckQsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUM7QUFBRyxDQUFDO1NBRS9DLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDO0FBQUcsQ0FBQztTQUV6QyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7SUFBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQUcsQ0FBQztTQUV0QyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7SUFBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUM7QUFBRyxDQUFDO1NBRXJELEtBQUssQ0FBQyxLQUFLLEVB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
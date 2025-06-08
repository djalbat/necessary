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
    get backwardsForEach () {
        return backwardsForEach;
    },
    get default () {
        return _default;
    },
    get eventually () {
        return eventually;
    },
    get forEach () {
        return forEach;
    },
    get forwardsForEach () {
        return forwardsForEach;
    },
    get repeatedly () {
        return repeatedly;
    },
    get sequence () {
        return sequence;
    },
    get whilst () {
        return whilst;
    }
});
function whilst(operation, done, context) {
    var count = -1;
    function next() {
        count++;
        var index = count, terminate = operation(next, done, context, index);
        if (terminate) {
            done();
        }
    }
    next();
}
function forEach(array, operation, done, context) {
    var length = array.length; ///
    var count = -1;
    function next() {
        count++;
        var terminate = count === length;
        if (terminate) {
            done();
        } else {
            var index = count, element = array[index];
            operation(element, next, done, context, index);
        }
    }
    next();
}
function sequence(operations, done, context) {
    var length = operations.length; ///
    var count = -1;
    function next() {
        count++;
        var terminate = count === length;
        if (terminate) {
            done();
        } else {
            var index = count, operation = operations[index];
            operation(next, done, context, index);
        }
    }
    next();
}
function eventually(operations, done, context) {
    var length = operations.length; ///
    var count = 0;
    function next() {
        count++;
        var terminate = count === length;
        if (terminate) {
            done();
        }
    }
    operations.forEach(function(operation, index) {
        operation(next, done, context, index);
    });
}
function repeatedly(operation, length, done, context) {
    var count = 0;
    function next() {
        count++;
        var terminate = count === length;
        if (terminate) {
            done();
        }
    }
    for(var index = 0; index < length; index++){
        operation(next, done, context, index);
    }
}
function forwardsForEach(array, operation, done, context) {
    var length = array.length; ///
    var count = -1;
    function next() {
        count++;
        var terminate = count === length;
        if (terminate) {
            done();
        } else {
            var index = count, element = array[index];
            operation(element, next, done, context, index);
        }
    }
    next();
}
function backwardsForEach(array, operation, done, context) {
    var length = array.length; ///
    var count = length;
    function next() {
        count--;
        var terminate = count === -1;
        if (terminate) {
            done();
        } else {
            var index = count, element = array[index];
            operation(element, next, done, context, index);
        }
    }
    next();
}
var _default = {
    whilst: whilst,
    forEach: forEach,
    sequence: sequence,
    eventually: eventually,
    repeatedly: repeatedly,
    forwardsForEach: forwardsForEach,
    backwardsForEach: backwardsForEach
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvYXN5bmNocm9ub3VzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHdoaWxzdChvcGVyYXRpb24sIGRvbmUsIGNvbnRleHQpIHtcclxuICBsZXQgY291bnQgPSAtMTtcclxuXHJcbiAgZnVuY3Rpb24gbmV4dCgpIHtcclxuICAgIGNvdW50Kys7XHJcblxyXG4gICAgY29uc3QgaW5kZXggPSBjb3VudCwgIC8vL1xyXG4gICAgICAgICAgdGVybWluYXRlID0gb3BlcmF0aW9uKG5leHQsIGRvbmUsIGNvbnRleHQsIGluZGV4KTtcclxuXHJcbiAgICBpZiAodGVybWluYXRlKSB7XHJcbiAgICAgIGRvbmUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5leHQoKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZvckVhY2goYXJyYXksIG9wZXJhdGlvbiwgZG9uZSwgY29udGV4dCkge1xyXG4gIGNvbnN0IGxlbmd0aCA9IGFycmF5Lmxlbmd0aDsgIC8vL1xyXG5cclxuICBsZXQgY291bnQgPSAtMTtcclxuXHJcbiAgZnVuY3Rpb24gbmV4dCgpIHtcclxuICAgIGNvdW50Kys7XHJcblxyXG4gICAgY29uc3QgdGVybWluYXRlID0gKGNvdW50ID09PSBsZW5ndGgpO1xyXG5cclxuICAgIGlmICh0ZXJtaW5hdGUpIHtcclxuICAgICAgZG9uZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgaW5kZXggPSBjb3VudCwgIC8vL1xyXG4gICAgICAgICAgICBlbGVtZW50ID0gYXJyYXlbaW5kZXhdO1xyXG5cclxuICAgICAgb3BlcmF0aW9uKGVsZW1lbnQsIG5leHQsIGRvbmUsIGNvbnRleHQsIGluZGV4KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5leHQoKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNlcXVlbmNlKG9wZXJhdGlvbnMsIGRvbmUsIGNvbnRleHQpIHtcclxuICBjb25zdCBsZW5ndGggPSBvcGVyYXRpb25zLmxlbmd0aDsgIC8vL1xyXG5cclxuICBsZXQgY291bnQgPSAtMTtcclxuXHJcbiAgZnVuY3Rpb24gbmV4dCgpIHtcclxuICAgIGNvdW50Kys7XHJcblxyXG4gICAgY29uc3QgdGVybWluYXRlID0gKGNvdW50ID09PSBsZW5ndGgpO1xyXG5cclxuICAgIGlmICh0ZXJtaW5hdGUpIHtcclxuICAgICAgZG9uZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgaW5kZXggPSBjb3VudCwgIC8vL1xyXG4gICAgICAgICAgICBvcGVyYXRpb24gPSBvcGVyYXRpb25zW2luZGV4XTtcclxuXHJcbiAgICAgIG9wZXJhdGlvbihuZXh0LCBkb25lLCBjb250ZXh0LCBpbmRleCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZXh0KCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBldmVudHVhbGx5KG9wZXJhdGlvbnMsIGRvbmUsIGNvbnRleHQpIHtcclxuICBjb25zdCBsZW5ndGggPSBvcGVyYXRpb25zLmxlbmd0aDsgIC8vL1xyXG5cclxuICBsZXQgY291bnQgPSAwO1xyXG5cclxuICBmdW5jdGlvbiBuZXh0KCkge1xyXG4gICAgY291bnQrKztcclxuXHJcbiAgICBjb25zdCB0ZXJtaW5hdGUgPSAoY291bnQgPT09IGxlbmd0aCk7XHJcblxyXG4gICAgaWYgKHRlcm1pbmF0ZSkge1xyXG4gICAgICBkb25lKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvcGVyYXRpb25zLmZvckVhY2goKG9wZXJhdGlvbiwgaW5kZXgpID0+IHtcclxuICAgIG9wZXJhdGlvbihuZXh0LCBkb25lLCBjb250ZXh0LCBpbmRleCk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZXBlYXRlZGx5KG9wZXJhdGlvbiwgbGVuZ3RoLCBkb25lLCBjb250ZXh0KSB7XHJcbiAgbGV0IGNvdW50ID0gMDtcclxuXHJcbiAgZnVuY3Rpb24gbmV4dCgpIHtcclxuICAgIGNvdW50Kys7XHJcblxyXG4gICAgY29uc3QgdGVybWluYXRlID0gKGNvdW50ID09PSBsZW5ndGgpO1xyXG5cclxuICAgIGlmICh0ZXJtaW5hdGUpIHtcclxuICAgICAgZG9uZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgb3BlcmF0aW9uKG5leHQsIGRvbmUsIGNvbnRleHQsIGluZGV4KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmb3J3YXJkc0ZvckVhY2goYXJyYXksIG9wZXJhdGlvbiwgZG9uZSwgY29udGV4dCkge1xyXG4gIGNvbnN0IGxlbmd0aCA9IGFycmF5Lmxlbmd0aDsgIC8vL1xyXG5cclxuICBsZXQgY291bnQgPSAtMTtcclxuXHJcbiAgZnVuY3Rpb24gbmV4dCgpIHtcclxuICAgIGNvdW50Kys7XHJcblxyXG4gICAgY29uc3QgdGVybWluYXRlID0gKGNvdW50ID09PSBsZW5ndGgpO1xyXG5cclxuICAgIGlmICh0ZXJtaW5hdGUpIHtcclxuICAgICAgZG9uZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgaW5kZXggPSBjb3VudCwgIC8vL1xyXG4gICAgICAgICAgICBlbGVtZW50ID0gYXJyYXlbaW5kZXhdO1xyXG5cclxuICAgICAgb3BlcmF0aW9uKGVsZW1lbnQsIG5leHQsIGRvbmUsIGNvbnRleHQsIGluZGV4KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5leHQoKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGJhY2t3YXJkc0ZvckVhY2goYXJyYXksIG9wZXJhdGlvbiwgZG9uZSwgY29udGV4dCkge1xyXG4gIGNvbnN0IGxlbmd0aCA9IGFycmF5Lmxlbmd0aDsgIC8vL1xyXG5cclxuICBsZXQgY291bnQgPSBsZW5ndGg7XHJcblxyXG4gIGZ1bmN0aW9uIG5leHQoKSB7XHJcbiAgICBjb3VudC0tO1xyXG5cclxuICAgIGNvbnN0IHRlcm1pbmF0ZSA9IChjb3VudCA9PT0gLTEpO1xyXG5cclxuICAgIGlmICh0ZXJtaW5hdGUpIHtcclxuICAgICAgZG9uZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgaW5kZXggPSBjb3VudCwgIC8vL1xyXG4gICAgICAgICAgICBlbGVtZW50ID0gYXJyYXlbaW5kZXhdO1xyXG5cclxuICAgICAgb3BlcmF0aW9uKGVsZW1lbnQsIG5leHQsIGRvbmUsIGNvbnRleHQsIGluZGV4KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5leHQoKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIHdoaWxzdCxcclxuICBmb3JFYWNoLFxyXG4gIHNlcXVlbmNlLFxyXG4gIGV2ZW50dWFsbHksXHJcbiAgcmVwZWF0ZWRseSxcclxuICBmb3J3YXJkc0ZvckVhY2gsXHJcbiAgYmFja3dhcmRzRm9yRWFjaFxyXG59O1xyXG4iXSwibmFtZXMiOlsiYmFja3dhcmRzRm9yRWFjaCIsImV2ZW50dWFsbHkiLCJmb3JFYWNoIiwiZm9yd2FyZHNGb3JFYWNoIiwicmVwZWF0ZWRseSIsInNlcXVlbmNlIiwid2hpbHN0Iiwib3BlcmF0aW9uIiwiZG9uZSIsImNvbnRleHQiLCJjb3VudCIsIm5leHQiLCJpbmRleCIsInRlcm1pbmF0ZSIsImFycmF5IiwibGVuZ3RoIiwiZWxlbWVudCIsIm9wZXJhdGlvbnMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQThIZ0JBO2VBQUFBOztRQXVCaEI7ZUFBQTs7UUFwRmdCQztlQUFBQTs7UUE5Q0FDO2VBQUFBOztRQW9GQUM7ZUFBQUE7O1FBbEJBQztlQUFBQTs7UUEzQ0FDO2VBQUFBOztRQXhDQUM7ZUFBQUE7OztBQUFULFNBQVNBLE9BQU9DLFNBQVMsRUFBRUMsSUFBSSxFQUFFQyxPQUFPO0lBQzdDLElBQUlDLFFBQVEsQ0FBQztJQUViLFNBQVNDO1FBQ1BEO1FBRUEsSUFBTUUsUUFBUUYs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
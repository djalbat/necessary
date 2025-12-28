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
    if (length === 0) {
        done();
        return;
    }
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
    if (length === 0) {
        done();
        return;
    }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvYXN5bmNocm9ub3VzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHdoaWxzdChvcGVyYXRpb24sIGRvbmUsIGNvbnRleHQpIHtcclxuICBsZXQgY291bnQgPSAtMTtcclxuXHJcbiAgZnVuY3Rpb24gbmV4dCgpIHtcclxuICAgIGNvdW50Kys7XHJcblxyXG4gICAgY29uc3QgaW5kZXggPSBjb3VudCwgIC8vL1xyXG4gICAgICAgICAgdGVybWluYXRlID0gb3BlcmF0aW9uKG5leHQsIGRvbmUsIGNvbnRleHQsIGluZGV4KTtcclxuXHJcbiAgICBpZiAodGVybWluYXRlKSB7XHJcbiAgICAgIGRvbmUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5leHQoKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZvckVhY2goYXJyYXksIG9wZXJhdGlvbiwgZG9uZSwgY29udGV4dCkge1xyXG4gIGNvbnN0IGxlbmd0aCA9IGFycmF5Lmxlbmd0aDsgIC8vL1xyXG5cclxuICBsZXQgY291bnQgPSAtMTtcclxuXHJcbiAgZnVuY3Rpb24gbmV4dCgpIHtcclxuICAgIGNvdW50Kys7XHJcblxyXG4gICAgY29uc3QgdGVybWluYXRlID0gKGNvdW50ID09PSBsZW5ndGgpO1xyXG5cclxuICAgIGlmICh0ZXJtaW5hdGUpIHtcclxuICAgICAgZG9uZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgaW5kZXggPSBjb3VudCwgIC8vL1xyXG4gICAgICAgICAgICBlbGVtZW50ID0gYXJyYXlbaW5kZXhdO1xyXG5cclxuICAgICAgb3BlcmF0aW9uKGVsZW1lbnQsIG5leHQsIGRvbmUsIGNvbnRleHQsIGluZGV4KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5leHQoKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNlcXVlbmNlKG9wZXJhdGlvbnMsIGRvbmUsIGNvbnRleHQpIHtcclxuICBjb25zdCBsZW5ndGggPSBvcGVyYXRpb25zLmxlbmd0aDsgIC8vL1xyXG5cclxuICBsZXQgY291bnQgPSAtMTtcclxuXHJcbiAgZnVuY3Rpb24gbmV4dCgpIHtcclxuICAgIGNvdW50Kys7XHJcblxyXG4gICAgY29uc3QgdGVybWluYXRlID0gKGNvdW50ID09PSBsZW5ndGgpO1xyXG5cclxuICAgIGlmICh0ZXJtaW5hdGUpIHtcclxuICAgICAgZG9uZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgaW5kZXggPSBjb3VudCwgIC8vL1xyXG4gICAgICAgICAgICBvcGVyYXRpb24gPSBvcGVyYXRpb25zW2luZGV4XTtcclxuXHJcbiAgICAgIG9wZXJhdGlvbihuZXh0LCBkb25lLCBjb250ZXh0LCBpbmRleCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZXh0KCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBldmVudHVhbGx5KG9wZXJhdGlvbnMsIGRvbmUsIGNvbnRleHQpIHtcclxuICBjb25zdCBsZW5ndGggPSBvcGVyYXRpb25zLmxlbmd0aDsgIC8vL1xyXG5cclxuICBpZiAobGVuZ3RoID09PSAwKSB7XHJcbiAgICBkb25lKCk7XHJcblxyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgbGV0IGNvdW50ID0gMDtcclxuXHJcbiAgZnVuY3Rpb24gbmV4dCgpIHtcclxuICAgIGNvdW50Kys7XHJcblxyXG4gICAgY29uc3QgdGVybWluYXRlID0gKGNvdW50ID09PSBsZW5ndGgpO1xyXG5cclxuICAgIGlmICh0ZXJtaW5hdGUpIHtcclxuICAgICAgZG9uZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb3BlcmF0aW9ucy5mb3JFYWNoKChvcGVyYXRpb24sIGluZGV4KSA9PiB7XHJcbiAgICBvcGVyYXRpb24obmV4dCwgZG9uZSwgY29udGV4dCwgaW5kZXgpO1xyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVwZWF0ZWRseShvcGVyYXRpb24sIGxlbmd0aCwgZG9uZSwgY29udGV4dCkge1xyXG4gIGlmIChsZW5ndGggPT09IDApIHtcclxuICAgIGRvbmUoKTtcclxuXHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBsZXQgY291bnQgPSAwO1xyXG5cclxuICBmdW5jdGlvbiBuZXh0KCkge1xyXG4gICAgY291bnQrKztcclxuXHJcbiAgICBjb25zdCB0ZXJtaW5hdGUgPSAoY291bnQgPT09IGxlbmd0aCk7XHJcblxyXG4gICAgaWYgKHRlcm1pbmF0ZSkge1xyXG4gICAgICBkb25lKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICBvcGVyYXRpb24obmV4dCwgZG9uZSwgY29udGV4dCwgaW5kZXgpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZvcndhcmRzRm9yRWFjaChhcnJheSwgb3BlcmF0aW9uLCBkb25lLCBjb250ZXh0KSB7XHJcbiAgY29uc3QgbGVuZ3RoID0gYXJyYXkubGVuZ3RoOyAgLy8vXHJcblxyXG4gIGxldCBjb3VudCA9IC0xO1xyXG5cclxuICBmdW5jdGlvbiBuZXh0KCkge1xyXG4gICAgY291bnQrKztcclxuXHJcbiAgICBjb25zdCB0ZXJtaW5hdGUgPSAoY291bnQgPT09IGxlbmd0aCk7XHJcblxyXG4gICAgaWYgKHRlcm1pbmF0ZSkge1xyXG4gICAgICBkb25lKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBpbmRleCA9IGNvdW50LCAgLy8vXHJcbiAgICAgICAgICAgIGVsZW1lbnQgPSBhcnJheVtpbmRleF07XHJcblxyXG4gICAgICBvcGVyYXRpb24oZWxlbWVudCwgbmV4dCwgZG9uZSwgY29udGV4dCwgaW5kZXgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmV4dCgpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYmFja3dhcmRzRm9yRWFjaChhcnJheSwgb3BlcmF0aW9uLCBkb25lLCBjb250ZXh0KSB7XHJcbiAgY29uc3QgbGVuZ3RoID0gYXJyYXkubGVuZ3RoOyAgLy8vXHJcblxyXG4gIGxldCBjb3VudCA9IGxlbmd0aDtcclxuXHJcbiAgZnVuY3Rpb24gbmV4dCgpIHtcclxuICAgIGNvdW50LS07XHJcblxyXG4gICAgY29uc3QgdGVybWluYXRlID0gKGNvdW50ID09PSAtMSk7XHJcblxyXG4gICAgaWYgKHRlcm1pbmF0ZSkge1xyXG4gICAgICBkb25lKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBpbmRleCA9IGNvdW50LCAgLy8vXHJcbiAgICAgICAgICAgIGVsZW1lbnQgPSBhcnJheVtpbmRleF07XHJcblxyXG4gICAgICBvcGVyYXRpb24oZWxlbWVudCwgbmV4dCwgZG9uZSwgY29udGV4dCwgaW5kZXgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmV4dCgpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgd2hpbHN0LFxyXG4gIGZvckVhY2gsXHJcbiAgc2VxdWVuY2UsXHJcbiAgZXZlbnR1YWxseSxcclxuICByZXBlYXRlZGx5LFxyXG4gIGZvcndhcmRzRm9yRWFjaCxcclxuICBiYWNrd2FyZHNGb3JFYWNoXHJcbn07XHJcbiJdLCJuYW1lcyI6WyJiYWNrd2FyZHNGb3JFYWNoIiwiZXZlbnR1YWxseSIsImZvckVhY2giLCJmb3J3YXJkc0ZvckVhY2giLCJyZXBlYXRlZGx5Iiwic2VxdWVuY2UiLCJ3aGlsc3QiLCJvcGVyYXRpb24iLCJkb25lIiwiY29udGV4dCIsImNvdW50IiwibmV4dCIsImluZGV4IiwidGVybWluYXRlIiwiYXJyYXkiLCJsZW5ndGgiLCJlbGVtZW50Iiwib3BlcmF0aW9ucyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBMElnQkE7ZUFBQUE7O1FBdUJoQjtlQUFBOztRQWhHZ0JDO2VBQUFBOztRQTlDQUM7ZUFBQUE7O1FBZ0dBQztlQUFBQTs7UUF4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
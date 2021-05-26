"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.whilst = whilst;
exports.forEach = forEach;
exports.sequence = sequence;
exports.eventually = eventually;
exports.repeatedly = repeatedly;
exports.forwardsForEach = forwardsForEach;
exports.backwardsForEach = backwardsForEach;
exports.default = void 0;
function whilst(callback, done, context) {
    var count = -1;
    function next() {
        count++;
        var index = count, terminate = callback(next, done, context, index);
        if (terminate) {
            done();
        }
    }
    next();
}
function forEach(array, callback, done, context) {
    var length = array.length; ///
    var count = -1;
    function next() {
        count++;
        var terminate = count === length;
        if (terminate) {
            done();
        } else {
            var index = count, element = array[index];
            callback(element, next, done, context, index);
        }
    }
    next();
}
function sequence(callbacks, done, context) {
    var length = callbacks.length; ///
    var count = -1;
    function next() {
        count++;
        var terminate = count === length;
        if (terminate) {
            done();
        } else {
            var index = count, callback = callbacks[index];
            callback(next, done, context, index);
        }
    }
    next();
}
function eventually(callbacks, done, context) {
    var next = function next() {
        count++;
        var terminate = count === length;
        if (terminate) {
            done();
        }
    };
    var length = callbacks.length; ///
    var count = 0;
    callbacks.forEach(function(callback, index) {
        callback(next, done, context, index);
    });
}
function repeatedly(callback, length, done, context) {
    var next = function next() {
        count++;
        var terminate = count === length;
        if (terminate) {
            done();
        }
    };
    var count = 0;
    for(var index = 0; index < length; index++){
        callback(next, done, context, index);
    }
}
function forwardsForEach(array, callback, done, context) {
    var length = array.length; ///
    var count = -1;
    function next() {
        count++;
        var terminate = count === length;
        if (terminate) {
            done();
        } else {
            var index = count, element = array[index];
            callback(element, next, done, context, index);
        }
    }
    next();
}
function backwardsForEach(array, callback, done, context) {
    var length = array.length; ///
    var count = length;
    function next() {
        count--;
        var terminate = count === -1;
        if (terminate) {
            done();
        } else {
            var index = count, element = array[index];
            callback(element, next, done, context, index);
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
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvYXN5bmNocm9ub3VzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHdoaWxzdChjYWxsYmFjaywgZG9uZSwgY29udGV4dCkge1xyXG4gIGxldCBjb3VudCA9IC0xO1xyXG5cclxuICBmdW5jdGlvbiBuZXh0KCkge1xyXG4gICAgY291bnQrKztcclxuXHJcbiAgICBjb25zdCBpbmRleCA9IGNvdW50LCAgLy8vXHJcbiAgICAgICAgICB0ZXJtaW5hdGUgPSBjYWxsYmFjayhuZXh0LCBkb25lLCBjb250ZXh0LCBpbmRleCk7XHJcblxyXG4gICAgaWYgKHRlcm1pbmF0ZSkge1xyXG4gICAgICBkb25lKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZXh0KCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmb3JFYWNoKGFycmF5LCBjYWxsYmFjaywgZG9uZSwgY29udGV4dCkge1xyXG4gIGNvbnN0IGxlbmd0aCA9IGFycmF5Lmxlbmd0aDsgIC8vL1xyXG5cclxuICBsZXQgY291bnQgPSAtMTtcclxuXHJcbiAgZnVuY3Rpb24gbmV4dCgpIHtcclxuICAgIGNvdW50Kys7XHJcblxyXG4gICAgY29uc3QgdGVybWluYXRlID0gKGNvdW50ID09PSBsZW5ndGgpO1xyXG5cclxuICAgIGlmICh0ZXJtaW5hdGUpIHtcclxuICAgICAgZG9uZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgaW5kZXggPSBjb3VudCwgIC8vL1xyXG4gICAgICAgICAgICBlbGVtZW50ID0gYXJyYXlbaW5kZXhdO1xyXG5cclxuICAgICAgY2FsbGJhY2soZWxlbWVudCwgbmV4dCwgZG9uZSwgY29udGV4dCwgaW5kZXgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmV4dCgpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2VxdWVuY2UoY2FsbGJhY2tzLCBkb25lLCBjb250ZXh0KSB7XHJcbiAgY29uc3QgbGVuZ3RoID0gY2FsbGJhY2tzLmxlbmd0aDsgIC8vL1xyXG5cclxuICBsZXQgY291bnQgPSAtMTtcclxuXHJcbiAgZnVuY3Rpb24gbmV4dCgpIHtcclxuICAgIGNvdW50Kys7XHJcblxyXG4gICAgY29uc3QgdGVybWluYXRlID0gKGNvdW50ID09PSBsZW5ndGgpO1xyXG5cclxuICAgIGlmICh0ZXJtaW5hdGUpIHtcclxuICAgICAgZG9uZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgaW5kZXggPSBjb3VudCwgIC8vL1xyXG4gICAgICAgICAgICBjYWxsYmFjayA9IGNhbGxiYWNrc1tpbmRleF07XHJcblxyXG4gICAgICBjYWxsYmFjayhuZXh0LCBkb25lLCBjb250ZXh0LCBpbmRleCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZXh0KCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBldmVudHVhbGx5KGNhbGxiYWNrcywgZG9uZSwgY29udGV4dCkge1xyXG4gIGNvbnN0IGxlbmd0aCA9IGNhbGxiYWNrcy5sZW5ndGg7ICAvLy9cclxuXHJcbiAgbGV0IGNvdW50ID0gMDtcclxuXHJcbiAgZnVuY3Rpb24gbmV4dCgpIHtcclxuICAgIGNvdW50Kys7XHJcblxyXG4gICAgY29uc3QgdGVybWluYXRlID0gKGNvdW50ID09PSBsZW5ndGgpO1xyXG5cclxuICAgIGlmICh0ZXJtaW5hdGUpIHtcclxuICAgICAgZG9uZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2FsbGJhY2tzLmZvckVhY2goKGNhbGxiYWNrLCBpbmRleCkgPT4ge1xyXG4gICAgY2FsbGJhY2sobmV4dCwgZG9uZSwgY29udGV4dCwgaW5kZXgpO1xyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVwZWF0ZWRseShjYWxsYmFjaywgbGVuZ3RoLCBkb25lLCBjb250ZXh0KSB7XHJcbiAgbGV0IGNvdW50ID0gMDtcclxuXHJcbiAgZnVuY3Rpb24gbmV4dCgpIHtcclxuICAgIGNvdW50Kys7XHJcblxyXG4gICAgY29uc3QgdGVybWluYXRlID0gKGNvdW50ID09PSBsZW5ndGgpO1xyXG5cclxuICAgIGlmICh0ZXJtaW5hdGUpIHtcclxuICAgICAgZG9uZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgY2FsbGJhY2sobmV4dCwgZG9uZSwgY29udGV4dCwgaW5kZXgpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZvcndhcmRzRm9yRWFjaChhcnJheSwgY2FsbGJhY2ssIGRvbmUsIGNvbnRleHQpIHtcclxuICBjb25zdCBsZW5ndGggPSBhcnJheS5sZW5ndGg7ICAvLy9cclxuXHJcbiAgbGV0IGNvdW50ID0gLTE7XHJcblxyXG4gIGZ1bmN0aW9uIG5leHQoKSB7XHJcbiAgICBjb3VudCsrO1xyXG5cclxuICAgIGNvbnN0IHRlcm1pbmF0ZSA9IChjb3VudCA9PT0gbGVuZ3RoKTtcclxuXHJcbiAgICBpZiAodGVybWluYXRlKSB7XHJcbiAgICAgIGRvbmUoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGluZGV4ID0gY291bnQsICAvLy9cclxuICAgICAgICAgICAgZWxlbWVudCA9IGFycmF5W2luZGV4XTtcclxuXHJcbiAgICAgIGNhbGxiYWNrKGVsZW1lbnQsIG5leHQsIGRvbmUsIGNvbnRleHQsIGluZGV4KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5leHQoKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGJhY2t3YXJkc0ZvckVhY2goYXJyYXksIGNhbGxiYWNrLCBkb25lLCBjb250ZXh0KSB7XHJcbiAgY29uc3QgbGVuZ3RoID0gYXJyYXkubGVuZ3RoOyAgLy8vXHJcblxyXG4gIGxldCBjb3VudCA9IGxlbmd0aDtcclxuXHJcbiAgZnVuY3Rpb24gbmV4dCgpIHtcclxuICAgIGNvdW50LS07XHJcblxyXG4gICAgY29uc3QgdGVybWluYXRlID0gKGNvdW50ID09PSAtMSk7XHJcblxyXG4gICAgaWYgKHRlcm1pbmF0ZSkge1xyXG4gICAgICBkb25lKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBpbmRleCA9IGNvdW50LCAgLy8vXHJcbiAgICAgICAgICAgIGVsZW1lbnQgPSBhcnJheVtpbmRleF07XHJcblxyXG4gICAgICBjYWxsYmFjayhlbGVtZW50LCBuZXh0LCBkb25lLCBjb250ZXh0LCBpbmRleCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZXh0KCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICB3aGlsc3QsXHJcbiAgZm9yRWFjaCxcclxuICBzZXF1ZW5jZSxcclxuICBldmVudHVhbGx5LFxyXG4gIHJlcGVhdGVkbHksXHJcbiAgZm9yd2FyZHNGb3JFYWNoLFxyXG4gIGJhY2t3YXJkc0ZvckVhY2hcclxufTtcclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7UUFFSSxNQUFNLEdBQU4sTUFBTTtRQWlCTixPQUFPLEdBQVAsT0FBTztRQXVCUCxRQUFRLEdBQVIsUUFBUTtRQXVCUixVQUFVLEdBQVYsVUFBVTtRQW9CVixVQUFVLEdBQVYsVUFBVTtRQWtCVixlQUFlLEdBQWYsZUFBZTtRQXVCZixnQkFBZ0IsR0FBaEIsZ0JBQWdCOztTQTVIaEIsTUFBTSxDQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUUsT0FBTztRQUN4QyxLQUFLLElBQUksQ0FBQzthQUVMLElBQUk7UUFDWCxLQUFLO1lBRUMsS0FBSyxHQUFHLEtBQUssRUFDYixTQUFTLEdBQUcsUUFBUSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEtBQUs7WUFFakQsU0FBUztZQUNYLElBQUk7OztJQUlSLElBQUk7O1NBR1UsT0FBTyxDQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLE9BQU87UUFDOUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUFNLENB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
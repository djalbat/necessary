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
"use strict";
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi91dGlsaXRpZXMvYXN5bmNocm9ub3VzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHdoaWxzdChjYWxsYmFjaywgZG9uZSwgY29udGV4dCkge1xyXG4gIGxldCBjb3VudCA9IC0xO1xyXG5cclxuICBmdW5jdGlvbiBuZXh0KCkge1xyXG4gICAgY291bnQrKztcclxuXHJcbiAgICBjb25zdCBpbmRleCA9IGNvdW50LCAgLy8vXHJcbiAgICAgICAgICB0ZXJtaW5hdGUgPSBjYWxsYmFjayhuZXh0LCBkb25lLCBjb250ZXh0LCBpbmRleCk7XHJcblxyXG4gICAgaWYgKHRlcm1pbmF0ZSkge1xyXG4gICAgICBkb25lKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZXh0KCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmb3JFYWNoKGFycmF5LCBjYWxsYmFjaywgZG9uZSwgY29udGV4dCkge1xyXG4gIGNvbnN0IGxlbmd0aCA9IGFycmF5Lmxlbmd0aDsgIC8vL1xyXG5cclxuICBsZXQgY291bnQgPSAtMTtcclxuXHJcbiAgZnVuY3Rpb24gbmV4dCgpIHtcclxuICAgIGNvdW50Kys7XHJcblxyXG4gICAgY29uc3QgdGVybWluYXRlID0gKGNvdW50ID09PSBsZW5ndGgpO1xyXG5cclxuICAgIGlmICh0ZXJtaW5hdGUpIHtcclxuICAgICAgZG9uZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgaW5kZXggPSBjb3VudCwgIC8vL1xyXG4gICAgICAgICAgICBlbGVtZW50ID0gYXJyYXlbaW5kZXhdO1xyXG5cclxuICAgICAgY2FsbGJhY2soZWxlbWVudCwgbmV4dCwgZG9uZSwgY29udGV4dCwgaW5kZXgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmV4dCgpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2VxdWVuY2UoY2FsbGJhY2tzLCBkb25lLCBjb250ZXh0KSB7XHJcbiAgY29uc3QgbGVuZ3RoID0gY2FsbGJhY2tzLmxlbmd0aDsgIC8vL1xyXG5cclxuICBsZXQgY291bnQgPSAtMTtcclxuXHJcbiAgZnVuY3Rpb24gbmV4dCgpIHtcclxuICAgIGNvdW50Kys7XHJcblxyXG4gICAgY29uc3QgdGVybWluYXRlID0gKGNvdW50ID09PSBsZW5ndGgpO1xyXG5cclxuICAgIGlmICh0ZXJtaW5hdGUpIHtcclxuICAgICAgZG9uZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgaW5kZXggPSBjb3VudCwgIC8vL1xyXG4gICAgICAgICAgICBjYWxsYmFjayA9IGNhbGxiYWNrc1tpbmRleF07XHJcblxyXG4gICAgICBjYWxsYmFjayhuZXh0LCBkb25lLCBjb250ZXh0LCBpbmRleCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZXh0KCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBldmVudHVhbGx5KGNhbGxiYWNrcywgZG9uZSwgY29udGV4dCkge1xyXG4gIGNvbnN0IGxlbmd0aCA9IGNhbGxiYWNrcy5sZW5ndGg7ICAvLy9cclxuXHJcbiAgbGV0IGNvdW50ID0gMDtcclxuXHJcbiAgZnVuY3Rpb24gbmV4dCgpIHtcclxuICAgIGNvdW50Kys7XHJcblxyXG4gICAgY29uc3QgdGVybWluYXRlID0gKGNvdW50ID09PSBsZW5ndGgpO1xyXG5cclxuICAgIGlmICh0ZXJtaW5hdGUpIHtcclxuICAgICAgZG9uZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2FsbGJhY2tzLmZvckVhY2goKGNhbGxiYWNrLCBpbmRleCkgPT4ge1xyXG4gICAgY2FsbGJhY2sobmV4dCwgZG9uZSwgY29udGV4dCwgaW5kZXgpO1xyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVwZWF0ZWRseShjYWxsYmFjaywgbGVuZ3RoLCBkb25lLCBjb250ZXh0KSB7XHJcbiAgbGV0IGNvdW50ID0gMDtcclxuXHJcbiAgZnVuY3Rpb24gbmV4dCgpIHtcclxuICAgIGNvdW50Kys7XHJcblxyXG4gICAgY29uc3QgdGVybWluYXRlID0gKGNvdW50ID09PSBsZW5ndGgpO1xyXG5cclxuICAgIGlmICh0ZXJtaW5hdGUpIHtcclxuICAgICAgZG9uZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgY2FsbGJhY2sobmV4dCwgZG9uZSwgY29udGV4dCwgaW5kZXgpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZvcndhcmRzRm9yRWFjaChhcnJheSwgY2FsbGJhY2ssIGRvbmUsIGNvbnRleHQpIHtcclxuICBjb25zdCBsZW5ndGggPSBhcnJheS5sZW5ndGg7ICAvLy9cclxuXHJcbiAgbGV0IGNvdW50ID0gLTE7XHJcblxyXG4gIGZ1bmN0aW9uIG5leHQoKSB7XHJcbiAgICBjb3VudCsrO1xyXG5cclxuICAgIGNvbnN0IHRlcm1pbmF0ZSA9IChjb3VudCA9PT0gbGVuZ3RoKTtcclxuXHJcbiAgICBpZiAodGVybWluYXRlKSB7XHJcbiAgICAgIGRvbmUoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGluZGV4ID0gY291bnQsICAvLy9cclxuICAgICAgICAgICAgZWxlbWVudCA9IGFycmF5W2luZGV4XTtcclxuXHJcbiAgICAgIGNhbGxiYWNrKGVsZW1lbnQsIG5leHQsIGRvbmUsIGNvbnRleHQsIGluZGV4KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5leHQoKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGJhY2t3YXJkc0ZvckVhY2goYXJyYXksIGNhbGxiYWNrLCBkb25lLCBjb250ZXh0KSB7XHJcbiAgY29uc3QgbGVuZ3RoID0gYXJyYXkubGVuZ3RoOyAgLy8vXHJcblxyXG4gIGxldCBjb3VudCA9IGxlbmd0aDtcclxuXHJcbiAgZnVuY3Rpb24gbmV4dCgpIHtcclxuICAgIGNvdW50LS07XHJcblxyXG4gICAgY29uc3QgdGVybWluYXRlID0gKGNvdW50ID09PSAtMSk7XHJcblxyXG4gICAgaWYgKHRlcm1pbmF0ZSkge1xyXG4gICAgICBkb25lKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBpbmRleCA9IGNvdW50LCAgLy8vXHJcbiAgICAgICAgICAgIGVsZW1lbnQgPSBhcnJheVtpbmRleF07XHJcblxyXG4gICAgICBjYWxsYmFjayhlbGVtZW50LCBuZXh0LCBkb25lLCBjb250ZXh0LCBpbmRleCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZXh0KCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICB3aGlsc3QsXHJcbiAgZm9yRWFjaCxcclxuICBzZXF1ZW5jZSxcclxuICBldmVudHVhbGx5LFxyXG4gIHJlcGVhdGVkbHksXHJcbiAgZm9yd2FyZHNGb3JFYWNoLFxyXG4gIGJhY2t3YXJkc0ZvckVhY2hcclxufTtcclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztRQUVBLE1BQUEsR0FBQSxNQUFBO1FBaUJBLE9BQUEsR0FBQSxPQUFBO1FBdUJBLFFBQUEsR0FBQSxRQUFBO1FBdUJBLFVBQUEsR0FBQSxVQUFBO1FBb0JBLFVBQUEsR0FBQSxVQUFBO1FBa0JBLGVBQUEsR0FBQSxlQUFBO1FBdUJBLGdCQUFBLEdBQUEsZ0JBQUE7O0NBOUhBLFVBQUE7U0FFQSxNQUFBLENBQUEsUUFBQSxFQUFBLElBQUEsRUFBQSxPQUFBO1FBQ0EsS0FBQSxJQUFBLENBQUE7YUFFQSxJQUFBO0FBQ0EsYUFBQTtZQUVBLEtBQUEsR0FBQSxLQUFBLEVBQ0EsU0FBQSxHQUFBLFFBQUEsQ0FBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLE9BQUEsRUFBQSxLQUFBO1lBRUEsU0FBQTtBQUNBLGdCQUFBOzs7QUFJQSxRQUFBOztTQUdBLE9BQUEsQ0FBQSxLQUFBLEVBQUEsUUFBQSxFQUFBLElBQUEsRUFBQSxPQUFBO1FBQ0EsTUFBQSxHQUFBLEtBQUEsQ0FBQSxNQUFBLENBQUEsQ0FBQSxFQUFBLENBQUE7UUFFQSxLQUFBLElBQUEsQ0FBQTthQUVBLElBQUE7QUFDQSxhQUFBO1lBRUEsU0FBQSxHQUFBLEtBQUEsS0FBQSxNQUFBO1lBRUEsU0FBQTtBQUNBLGdCQUFBOztnQkFFQSxLQUFBLEdBQUEsS0FBQSxFQUNBLE9BQUEsR0FBQSxLQUFBLENBQUEsS0FBQTtBQUVBLG9CQUFBLENBQUEsT0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsT0FBQSxFQUFBLEtBQUE7OztBQUlBLFFBQUE7O1NBR0EsUUFBQSxDQUFBLFNBQUEsRUFBQSxJQUFBLEVBQUEsT0FBQTtRQUNBLE1BQUEsR0FBQSxTQUFBLENBQUEsTUFBQSxDQUFBLENBQUEsRUFBQSxDQUFBO1FBRUEsS0FBQSxJQUFBLENBQUE7YUFFQSxJQUFBO0FBQ0EsYUFBQTtZQUVBLFNBQUEsR0FBQSxLQUFBLEtBQUEsTUFBQTtZQUVBLFNBQUE7QUFDQSxnQkFBQTs7Z0JBRUEsS0FBQSxHQUFBLEtBQUEsRUFDQSxRQUFBLEdBQUEsU0FBQSxDQUFBLEtBQUE7QUFFQSxvQkFBQSxDQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsT0FBQSxFQUFBLEtBQUE7OztBQUlBLFFBQUE7O1NBR0EsVUFBQSxDQUFBLFNBQUEsRUFBQSxJQUFBLEVBQUEsT0FBQTtRQUtBLElBQUEsWUFBQSxJQUFBO0FBQ0EsYUFBQTtZQUVBLFNBQUEsR0FBQSxLQUFBLEtBQUEsTUFBQTtZQUVBLFNBQUE7QUFDQSxnQkFBQTs7O1FBVkEsTUFBQSxHQUFBLFNBQUEsQ0FBQSxNQUFBLENBQUEsQ0FBQSxFQUFBLENBQUE7UUFFQSxLQUFBLEdBQUEsQ0FBQTtBQVlBLGFBQUEsQ0FBQSxPQUFBLFVBQUEsUUFBQSxFQUFBLEtBQUE7QUFDQSxnQkFBQSxDQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsT0FBQSxFQUFBLEtBQUE7OztTQUlBLFVBQUEsQ0FBQSxRQUFBLEVBQUEsTUFBQSxFQUFBLElBQUEsRUFBQSxPQUFBO1FBR0EsSUFBQSxZQUFBLElBQUE7QUFDQSxhQUFBO1lBRUEsU0FBQSxHQUFBLEtBQUEsS0FBQSxNQUFBO1lBRUEsU0FBQTtBQUNBLGdCQUFBOzs7UUFSQSxLQUFBLEdBQUEsQ0FBQTtZQVlBLEtBQUEsR0FBQSxDQUFBLEVBQUEsS0FBQSxHQUFBLE1BQUEsRUFBQSxLQUFBO0FBQ0EsZ0JBQUEsQ0FBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLE9BQUEsRUFBQSxLQUFBOzs7U0FJQSxlQUFBLENBQUEsS0FBQSxFQUFBLFFBQUEsRUFBQSxJQUFBLEVBQUEsT0FBQTtRQUNBLE1BQUEsR0FBQSxLQUFBLENBQUEsTUFBQSxDQUFBLENBQUEsRUFBQSxDQUFBO1FBRUEsS0FBQSxJQUFBLENBQUE7YUFFQSxJQUFBO0FBQ0EsYUFBQTtZQUVBLFNBQUEsR0FBQSxLQUFBLEtBQUEsTUFBQTtZQUVBLFNBQUE7QUFDQSxnQkFBQTs7Z0JBRUEsS0FBQSxHQUFBLEtBQUEsRUFDQSxPQUFBLEdBQUEsS0FBQSxDQUFBLEtBQUE7QUFFQSxvQkFBQSxDQUFBLE9BQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLE9BQUEsRUFBQSxLQUFBOzs7QUFJQSxRQUFBOztTQUdBLGdCQUFBLENBQUEsS0FBQSxFQUFBLFFBQUEsRUFBQSxJQUFBLEVBQUEsT0FBQTtRQUNBLE1BQUEsR0FBQSxLQUFBLENBQUEsTUFBQSxDQUFBLENBQUEsRUFBQSxDQUFBO1FBRUEsS0FBQSxHQUFBLE1BQUE7YUFFQSxJQUFBO0FBQ0EsYUFBQTtZQUVBLFNBQUEsR0FBQSxLQUFBLE1BQUEsQ0FBQTtZQUVBLFNBQUE7QUFDQSxnQkFBQTs7Z0JBRUEsS0FBQSxHQUFBLEtBQUEsRUFDQSxPQUFBLEdBQUEsS0FBQSxDQUFBLEtBQUE7QUFFQSxvQkFBQSxDQUFBLE9BQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLE9BQUEsRUFBQSxLQUFBOzs7QUFJQSxRQUFBOzs7QUFJQSxVQUFBLEVBQUEsTUFBQTtBQUNBLFdBQUEsRUFBQSxPQUFBO0FBQ0EsWUFBQSxFQUFBLFFBQUE7QUFDQSxjQUFBLEVBQUEsVUFBQTtBQUNBLGNBQUEsRUFBQSxVQUFBO0FBQ0EsbUJBQUEsRUFBQSxlQUFBO0FBQ0Esb0JBQUEsRUFBQSxnQkFBQSJ9
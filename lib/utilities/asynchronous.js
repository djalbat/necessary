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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvYXN5bmNocm9ub3VzLmpzIl0sIm5hbWVzIjpbIndoaWxzdCIsImNhbGxiYWNrIiwiZG9uZSIsImNvbnRleHQiLCJjb3VudCIsIm5leHQiLCJpbmRleCIsInRlcm1pbmF0ZSIsImZvckVhY2giLCJhcnJheSIsImxlbmd0aCIsImVsZW1lbnQiLCJzZXF1ZW5jZSIsImNhbGxiYWNrcyIsImV2ZW50dWFsbHkiLCJyZXBlYXRlZGx5IiwiZm9yd2FyZHNGb3JFYWNoIiwiYmFja3dhcmRzRm9yRWFjaCJdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7OztRQUVJLE1BQU0sR0FBTixNQUFNO1FBaUJOLE9BQU8sR0FBUCxPQUFPO1FBdUJQLFFBQVEsR0FBUixRQUFRO1FBdUJSLFVBQVUsR0FBVixVQUFVO1FBb0JWLFVBQVUsR0FBVixVQUFVO1FBa0JWLGVBQWUsR0FBZixlQUFlO1FBdUJmLGdCQUFnQixHQUFoQixnQkFBZ0I7O1NBNUhoQixNQUFNLENBQUMsUUFBUSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsQ0FBQztJQUMvQyxHQUFHLENBQUMsS0FBSyxJQUFJLENBQUM7YUFFTCxJQUFJLEdBQUcsQ0FBQztRQUNmLEtBQUs7UUFFTCxHQUFLLENBQUMsS0FBSyxHQUFHLEtBQUssRUFDYixTQUFTLEdBQUcsUUFBUSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEtBQUs7UUFFckQsRUFBRSxFQUFFLFNBQVMsRUFBRSxDQUFDO1lBQ2QsSUFBSTtRQUNOLENBQUM7SUFDSCxDQUFDO0lBRUQsSUFBSTtBQUNOLENBQUM7U0FFZSxPQUFPLENBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLENBQUM7SUFDdkQsR0FBSyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFHLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztJQUVqQyxHQUFHLENBQUMsS0FBSyxJQUFJLENBQUM7YUFFTCxJQUFJ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
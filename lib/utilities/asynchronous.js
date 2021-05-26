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

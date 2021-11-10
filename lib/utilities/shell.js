"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.onETX = onETX;
exports.prompt = prompt;
exports.default = void 0;
var _asynchronous = require("../utilities/asynchronous");
var _eventTypes = require("../eventTypes");
var _constants = require("../constants");
var _defaults = require("../defaults");
var _characters = require("../characters");
function onETX(handler) {
    var offExt = function offExt() {
        process.stdin.removeListener(_eventTypes.DATA_EVENT_TYPE, dataHandler);
    };
    var dataHandler = function dataHandler(character) {
        if (character === _characters.ETX_CHARACTER) {
            handler();
        }
    };
    if (process.stdin.setRawMode) {
        var rawMode = true, encoding = _constants.UTF8;
        process.stdin.setRawMode(rawMode);
        process.stdin.setEncoding(encoding);
        process.stdin.addListener(_eventTypes.DATA_EVENT_TYPE, dataHandler);
        process.stdin.resume();
        return offExt;
    }
}
function prompt(options, callback) {
    var _answer = options.answer, answer = _answer === void 0 ? null : _answer;
    if (answer !== null) {
        callback(answer);
        return;
    }
    var _attempts = options.attempts, attempts = _attempts === void 0 ? _defaults.DEFAULT_ATTEMPTS : _attempts, context = {
        answer: answer,
        options: options,
        attempts: attempts
    };
    (0, _asynchronous).whilst(attempt, function() {
        var answer = context.answer;
        callback(answer);
    }, context);
}
var _default = {
    onETX: onETX,
    prompt: prompt
};
exports.default = _default;
function attempt(next, done, context) {
    var callback = function callback(answer) {
        var valid = validationFunction ? validationFunction(answer) : validationPattern.test(answer);
        if (valid) {
            Object.assign(context, {
                answer: answer
            });
            done();
        } else {
            console.log(errorMessage);
            Object.assign(context, {
                attempts: attempts
            });
            next();
        }
    };
    var attempts = context.attempts;
    var terminate = (attempts--) === 0;
    if (terminate) {
        done();
        return;
    }
    var options = context.options, _hidden = options.hidden, hidden = _hidden === void 0 ? false : _hidden, _encoding = options.encoding, encoding = _encoding === void 0 ? _defaults.DEFAULT_ENCODING : _encoding, description = options.description, errorMessage = options.errorMessage, _initialAnswer = options.initialAnswer, initialAnswer = _initialAnswer === void 0 ? _defaults.DEFAULT_INITIAL_ANSWER : _initialAnswer, _validationPattern = options.validationPattern, validationPattern = _validationPattern === void 0 ? null : _validationPattern, _validationFunction = options.validationFunction, validationFunction = _validationFunction === void 0 ? null : _validationFunction;
    input(initialAnswer, hidden, description, encoding, callback);
}
function input(initialAnswer, hidden, description, encoding, callback) {
    var answer = initialAnswer; ///
    hidden ? hiddenInput(answer, description, encoding, callback) : visibleInput(answer, description, encoding, callback);
}
function hiddenInput(answer, description, encoding, callback) {
    var rawMode = true;
    process.stdout.write(description);
    process.stdin.setEncoding(encoding);
    process.stdin.setRawMode(rawMode);
    process.stdin.on(_eventTypes.DATA_EVENT_TYPE, listener);
    process.stdin.resume();
    function listener(data) {
        var character = data.toString(encoding);
        switch(character){
            case _characters.LINE_FEED_CHARACTER:
            case _characters.CARRIAGE_RETURN_CHARACTER:
                process.stdout.write(_characters.LINE_FEED_CHARACTER);
                process.stdin.removeListener(_eventTypes.DATA_EVENT_TYPE, listener);
                process.stdin.pause();
                callback(answer);
                break;
            case _characters.BACKSPACE_CHARACTER:
                answer = answer.slice(0, answer.length - 1);
                break;
            default:
                answer += character;
                break;
            case _characters.ETX_CHARACTER:
                console.log(_constants.CTRL_C);
                process.exit();
        }
    }
}
function visibleInput(answer, description, encoding, callback) {
    var listener = function listener(data) {
        var answer = data.replace(/\n$/, _constants.EMPTY_STRING);
        process.stdin.pause();
        callback(answer);
    };
    process.stdout.write(description);
    process.stdout.write(answer);
    process.stdin.setEncoding(encoding);
    process.stdin.once(_eventTypes.DATA_EVENT_TYPE, listener);
    process.stdin.resume();
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvc2hlbGwuanMiXSwibmFtZXMiOlsid2hpbHN0IiwiREFUQV9FVkVOVF9UWVBFIiwiVVRGOCIsIkNUUkxfQyIsIkVNUFRZX1NUUklORyIsIkRFRkFVTFRfRU5DT0RJTkciLCJERUZBVUxUX0FUVEVNUFRTIiwiREVGQVVMVF9JTklUSUFMX0FOU1dFUiIsIkVUWF9DSEFSQUNURVIiLCJCQUNLU1BBQ0VfQ0hBUkFDVEVSIiwiTElORV9GRUVEX0NIQVJBQ1RFUiIsIkNBUlJJQUdFX1JFVFVSTl9DSEFSQUNURVIiLCJvbkVUWCIsImhhbmRsZXIiLCJwcm9jZXNzIiwic3RkaW4iLCJzZXRSYXdNb2RlIiwicmF3TW9kZSIsImVuY29kaW5nIiwic2V0RW5jb2RpbmciLCJhZGRMaXN0ZW5lciIsImRhdGFIYW5kbGVyIiwicmVzdW1lIiwib2ZmRXh0IiwicmVtb3ZlTGlzdGVuZXIiLCJjaGFyYWN0ZXIiLCJwcm9tcHQiLCJvcHRpb25zIiwiY2FsbGJhY2siLCJhbnN3ZXIiLCJhdHRlbXB0cyIsImNvbnRleHQiLCJhdHRlbXB0IiwibmV4dCIsImRvbmUiLCJ0ZXJtaW5hdGUiLCJoaWRkZW4iLCJkZXNjcmlwdGlvbiIsImVycm9yTWVzc2FnZSIsImluaXRpYWxBbnN3ZXIiLCJ2YWxpZGF0aW9uUGF0dGVybiIsInZhbGlkYXRpb25GdW5jdGlvbiIsImlucHV0IiwidmFsaWQiLCJ0ZXN0IiwiT2JqZWN0IiwiYXNzaWduIiwiY29uc29sZSIsImxvZyIsImhpZGRlbklucHV0IiwidmlzaWJsZUlucHV0Iiwic3Rkb3V0Iiwid3JpdGUiLCJvbiIsImxpc3RlbmVyIiwiZGF0YSIsInRvU3RyaW5nIiwicGF1c2UiLCJzbGljZSIsImxlbmd0aCIsImV4aXQiLCJvbmNlIiwicmVwbGFjZSJdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7OztRQVNJLEtBQUssR0FBTCxLQUFLO1FBMkJMLE1BQU0sR0FBTixNQUFNOztBQWxDQyxHQUEyQixDQUEzQixhQUEy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
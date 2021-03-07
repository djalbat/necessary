"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.onETX = onETX;
exports.prompt = prompt;
exports.default = void 0;
var _asynchronous = require("../utilities/asynchronous");
var _constants = require("../constants");
"use strict";
function onETX(handler) {
    var offExt = function offExt() {
        process.stdin.removeListener(event, dataHandler);
    };
    var dataHandler = function dataHandler(character) {
        if (character === _constants.ETX_CHARACTER) {
            handler();
        }
    };
    var event = _constants.DATA_EVENT;
    if (process.stdin.setRawMode) {
        var rawMode = true, encoding = _constants.UTF8_ENCODING;
        process.stdin.setRawMode(rawMode);
        process.stdin.setEncoding(encoding);
        process.stdin.resume();
        process.stdin.addListener(event, dataHandler);
        return offExt;
    }
}
function prompt(options, callback) {
    var _answer = options.answer, answer = _answer === void 0 ? null : _answer;
    if (answer !== null) {
        callback(answer);
        return;
    }
    answer = null;
    var _attempts = options.attempts, attempts = _attempts === void 0 ? _constants.DEFAULT_ATTEMPTS : _attempts, context = {
        answer: answer,
        attempts: attempts,
        options: options
    };
    _asynchronous.whilst(attempt, function() {
        var answer1 = context.answer;
        callback(answer1);
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
    var options = context.options, _hidden = options.hidden, hidden = _hidden === void 0 ? false : _hidden, _encoding = options.encoding, encoding = _encoding === void 0 ? _constants.DEFAULT_ENCODING : _encoding, description = options.description, errorMessage = options.errorMessage, _initialAnswer = options.initialAnswer, initialAnswer = _initialAnswer === void 0 ? _constants.DEFAULT_INITIAL_ANSWER : _initialAnswer, validationPattern = options.validationPattern, validationFunction = options.validationFunction;
    input(description, initialAnswer, encoding, hidden, callback);
}
function input(description, initialAnswer, encoding, hidden, callback) {
    var answer = initialAnswer; ///
    var event = _constants.DATA_EVENT, rawMode = true, offETX = onETX(function() {
        console.log(_constants.CTRL_C);
        process.exit();
    });
    process.stdin.setEncoding(encoding);
    process.stdin.setRawMode(rawMode);
    process.stdout.write(description);
    if (!hidden) {
        process.stdout.write(answer);
    }
    process.stdin.resume();
    process.stdin.on(event, listener);
    function listener(chunk) {
        var character = chunk.toString(encoding);
        switch(character){
            case _constants.LINE_FEED_CHARACTER:
            case _constants.CARRIAGE_RETURN_CHARACTER:
                process.stdout.write(_constants.LINE_FEED_CHARACTER);
                process.stdin.removeListener(event, listener);
                process.stdin.pause();
                offETX();
                callback(answer);
                break;
            case _constants.BACKSPACE_CHARACTER:
                answer = answer.slice(0, answer.length - 1);
                process.stdout.clearLine();
                process.stdout.cursorTo(0);
                process.stdout.write(description);
                if (!hidden) {
                    process.stdout.write(answer);
                }
                break;
            default:
                answer += character;
                if (!hidden) {
                    process.stdout.clearLine();
                    process.stdout.cursorTo(0);
                    process.stdout.write(description);
                    process.stdout.write(answer);
                }
                break;
        }
    }
}

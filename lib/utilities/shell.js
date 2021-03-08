"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.onETX = onETX;
exports.prompt = prompt;
exports.default = void 0;
var _asynchronous = require("../utilities/asynchronous");
var _constants = require("../constants");
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
    var _attempts = options.attempts, attempts = _attempts === void 0 ? _constants.DEFAULT_ATTEMPTS : _attempts, context = {
        answer: answer,
        options: options,
        attempts: attempts
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi91dGlsaXRpZXMvc2hlbGwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHdoaWxzdCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXN5bmNocm9ub3VzXCI7XG5cbmltcG9ydCB7IENUUkxfQyxcbiAgICAgICAgIERBVEFfRVZFTlQsXG4gICAgICAgICBVVEY4X0VOQ09ESU5HLFxuICAgICAgICAgRVRYX0NIQVJBQ1RFUixcbiAgICAgICAgIERFRkFVTFRfRU5DT0RJTkcsXG4gICAgICAgICBERUZBVUxUX0FUVEVNUFRTLFxuICAgICAgICAgQkFDS1NQQUNFX0NIQVJBQ1RFUixcbiAgICAgICAgIExJTkVfRkVFRF9DSEFSQUNURVIsXG4gICAgICAgICBERUZBVUxUX0lOSVRJQUxfQU5TV0VSLFxuICAgICAgICAgQ0FSUklBR0VfUkVUVVJOX0NIQVJBQ1RFUiB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG9uRVRYKGhhbmRsZXIpIHtcbiAgY29uc3QgZXZlbnQgPSBEQVRBX0VWRU5UO1xuXG4gIGlmIChwcm9jZXNzLnN0ZGluLnNldFJhd01vZGUpIHtcbiAgICBjb25zdCByYXdNb2RlID0gdHJ1ZSxcbiAgICAgICAgICBlbmNvZGluZyA9IFVURjhfRU5DT0RJTkc7XG5cbiAgICBwcm9jZXNzLnN0ZGluLnNldFJhd01vZGUocmF3TW9kZSk7XG4gICAgcHJvY2Vzcy5zdGRpbi5zZXRFbmNvZGluZyhlbmNvZGluZyk7XG5cbiAgICBwcm9jZXNzLnN0ZGluLnJlc3VtZSgpO1xuXG4gICAgcHJvY2Vzcy5zdGRpbi5hZGRMaXN0ZW5lcihldmVudCwgZGF0YUhhbmRsZXIpO1xuXG4gICAgcmV0dXJuIG9mZkV4dDtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9mZkV4dCgpIHtcbiAgICBwcm9jZXNzLnN0ZGluLnJlbW92ZUxpc3RlbmVyKGV2ZW50LCBkYXRhSGFuZGxlcik7XG4gIH1cblxuICBmdW5jdGlvbiBkYXRhSGFuZGxlcihjaGFyYWN0ZXIpIHtcbiAgICBpZiAoY2hhcmFjdGVyID09PSBFVFhfQ0hBUkFDVEVSKSB7XG4gICAgICBoYW5kbGVyKCk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9tcHQob3B0aW9ucywgY2FsbGJhY2spIHtcbiAgbGV0IHsgYW5zd2VyID0gbnVsbCB9ID0gb3B0aW9ucztcblxuICBpZiAoYW5zd2VyICE9PSBudWxsKSB7XG4gICAgY2FsbGJhY2soYW5zd2VyKTtcblxuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IHsgYXR0ZW1wdHMgPSBERUZBVUxUX0FUVEVNUFRTIH0gPSBvcHRpb25zLFxuICAgICAgICBjb250ZXh0ID0ge1xuICAgICAgICAgIGFuc3dlcixcbiAgICAgICAgICBvcHRpb25zLFxuICAgICAgICAgIGF0dGVtcHRzXG4gICAgICAgIH07XG5cbiAgd2hpbHN0KGF0dGVtcHQsICgpID0+IHtcbiAgICBjb25zdCB7IGFuc3dlciB9ID0gY29udGV4dDtcbiAgICBcbiAgICBjYWxsYmFjayhhbnN3ZXIpO1xuICB9LCBjb250ZXh0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBvbkVUWCxcbiAgcHJvbXB0XG59XG5cbmZ1bmN0aW9uIGF0dGVtcHQobmV4dCwgZG9uZSwgY29udGV4dCkge1xuICBsZXQgeyBhdHRlbXB0cyB9ID0gY29udGV4dDtcblxuICBjb25zdCB0ZXJtaW5hdGUgPSAoYXR0ZW1wdHMtLSA9PT0gMCk7XG4gIFxuICBpZiAodGVybWluYXRlKSB7XG4gICAgZG9uZSgpO1xuICAgIFxuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IHsgb3B0aW9ucyB9ID0gY29udGV4dCxcbiAgICAgICAgeyBoaWRkZW4gPSBmYWxzZSxcbiAgICAgICAgICBlbmNvZGluZyA9IERFRkFVTFRfRU5DT0RJTkcsXG4gICAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgICAgZXJyb3JNZXNzYWdlLFxuICAgICAgICAgIGluaXRpYWxBbnN3ZXIgPSBERUZBVUxUX0lOSVRJQUxfQU5TV0VSLFxuICAgICAgICAgIHZhbGlkYXRpb25QYXR0ZXJuLFxuICAgICAgICAgIHZhbGlkYXRpb25GdW5jdGlvbiB9ID0gb3B0aW9ucztcblxuICBpbnB1dChkZXNjcmlwdGlvbiwgaW5pdGlhbEFuc3dlciwgZW5jb2RpbmcsIGhpZGRlbiwgY2FsbGJhY2spO1xuXG4gIGZ1bmN0aW9uIGNhbGxiYWNrKGFuc3dlcikge1xuICAgIGNvbnN0IHZhbGlkID0gdmFsaWRhdGlvbkZ1bmN0aW9uID8gIC8vL1xuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uRnVuY3Rpb24oYW5zd2VyKSA6XG4gICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvblBhdHRlcm4udGVzdChhbnN3ZXIpO1xuXG4gICAgaWYgKHZhbGlkKSB7XG4gICAgICBPYmplY3QuYXNzaWduKGNvbnRleHQsIHtcbiAgICAgICAgYW5zd2VyXG4gICAgICB9KTtcblxuICAgICAgZG9uZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvck1lc3NhZ2UpO1xuXG4gICAgICBPYmplY3QuYXNzaWduKGNvbnRleHQsIHtcbiAgICAgICAgYXR0ZW1wdHNcbiAgICAgIH0pO1xuXG4gICAgICBuZXh0KCk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGlucHV0KGRlc2NyaXB0aW9uLCBpbml0aWFsQW5zd2VyLCBlbmNvZGluZywgaGlkZGVuLCBjYWxsYmFjaykge1xuICBsZXQgYW5zd2VyID0gaW5pdGlhbEFuc3dlcjsgLy8vXG5cbiAgY29uc3QgZXZlbnQgPSBEQVRBX0VWRU5ULFxuICAgICAgICByYXdNb2RlID0gdHJ1ZSxcbiAgICAgICAgb2ZmRVRYID0gb25FVFgoKCkgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKENUUkxfQyk7XG5cbiAgICAgICAgICBwcm9jZXNzLmV4aXQoKTtcbiAgICAgICAgfSk7XG5cbiAgcHJvY2Vzcy5zdGRpbi5zZXRFbmNvZGluZyhlbmNvZGluZyk7XG5cbiAgcHJvY2Vzcy5zdGRpbi5zZXRSYXdNb2RlKHJhd01vZGUpO1xuXG4gIHByb2Nlc3Muc3Rkb3V0LndyaXRlKGRlc2NyaXB0aW9uKTtcblxuICBpZiAoIWhpZGRlbikge1xuICAgIHByb2Nlc3Muc3Rkb3V0LndyaXRlKGFuc3dlcik7XG4gIH1cblxuICBwcm9jZXNzLnN0ZGluLnJlc3VtZSgpO1xuXG4gIHByb2Nlc3Muc3RkaW4ub24oZXZlbnQsIGxpc3RlbmVyKTtcblxuICBmdW5jdGlvbiBsaXN0ZW5lcihjaHVuaykge1xuICAgIGNvbnN0IGNoYXJhY3RlciA9IGNodW5rLnRvU3RyaW5nKGVuY29kaW5nKTtcblxuICAgIHN3aXRjaCAoY2hhcmFjdGVyKSB7XG4gICAgICBjYXNlIExJTkVfRkVFRF9DSEFSQUNURVIgOlxuICAgICAgY2FzZSBDQVJSSUFHRV9SRVRVUk5fQ0hBUkFDVEVSIDpcbiAgICAgICAgcHJvY2Vzcy5zdGRvdXQud3JpdGUoTElORV9GRUVEX0NIQVJBQ1RFUik7XG5cbiAgICAgICAgcHJvY2Vzcy5zdGRpbi5yZW1vdmVMaXN0ZW5lcihldmVudCwgbGlzdGVuZXIpO1xuXG4gICAgICAgIHByb2Nlc3Muc3RkaW4ucGF1c2UoKTtcblxuICAgICAgICBvZmZFVFgoKTtcblxuICAgICAgICBjYWxsYmFjayhhbnN3ZXIpO1xuXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIEJBQ0tTUEFDRV9DSEFSQUNURVIgOlxuICAgICAgICBhbnN3ZXIgPSBhbnN3ZXIuc2xpY2UoMCwgYW5zd2VyLmxlbmd0aCAtIDEpO1xuXG4gICAgICAgIHByb2Nlc3Muc3Rkb3V0LmNsZWFyTGluZSgpO1xuXG4gICAgICAgIHByb2Nlc3Muc3Rkb3V0LmN1cnNvclRvKDApO1xuXG4gICAgICAgIHByb2Nlc3Muc3Rkb3V0LndyaXRlKGRlc2NyaXB0aW9uKTtcblxuICAgICAgICBpZiAoIWhpZGRlbikge1xuICAgICAgICAgIHByb2Nlc3Muc3Rkb3V0LndyaXRlKGFuc3dlcik7XG4gICAgICAgIH1cblxuICAgICAgICBicmVhaztcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYW5zd2VyICs9IGNoYXJhY3RlcjtcblxuICAgICAgICBpZiAoIWhpZGRlbikge1xuICAgICAgICAgIHByb2Nlc3Muc3Rkb3V0LmNsZWFyTGluZSgpO1xuXG4gICAgICAgICAgcHJvY2Vzcy5zdGRvdXQuY3Vyc29yVG8oMCk7XG5cbiAgICAgICAgICBwcm9jZXNzLnN0ZG91dC53cml0ZShkZXNjcmlwdGlvbik7XG5cbiAgICAgICAgICBwcm9jZXNzLnN0ZG91dC53cml0ZShhbnN3ZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBQTs7OztRQWVBLEtBQUEsR0FBQSxLQUFBO1FBNEJBLE1BQUEsR0FBQSxNQUFBOztJQXpDQSxhQUFBO0lBV0EsVUFBQTtTQUVBLEtBQUEsQ0FBQSxPQUFBO1FBaUJBLE1BQUEsWUFBQSxNQUFBO0FBQ0EsZUFBQSxDQUFBLEtBQUEsQ0FBQSxjQUFBLENBQUEsS0FBQSxFQUFBLFdBQUE7O1FBR0EsV0FBQSxZQUFBLFdBQUEsQ0FBQSxTQUFBO1lBQ0EsU0FBQSxLQXhCQSxVQUFBO0FBeUJBLG1CQUFBOzs7UUF0QkEsS0FBQSxHQUhBLFVBQUE7UUFLQSxPQUFBLENBQUEsS0FBQSxDQUFBLFVBQUE7WUFDQSxPQUFBLEdBQUEsSUFBQSxFQUNBLFFBQUEsR0FQQSxVQUFBO0FBU0EsZUFBQSxDQUFBLEtBQUEsQ0FBQSxVQUFBLENBQUEsT0FBQTtBQUNBLGVBQUEsQ0FBQSxLQUFBLENBQUEsV0FBQSxDQUFBLFFBQUE7QUFFQSxlQUFBLENBQUEsS0FBQSxDQUFBLE1BQUE7QUFFQSxlQUFBLENBQUEsS0FBQSxDQUFBLFdBQUEsQ0FBQSxLQUFBLEVBQUEsV0FBQTtlQUVBLE1BQUE7OztTQWNBLE1BQUEsQ0FBQSxPQUFBLEVBQUEsUUFBQTtrQkFDQSxPQUFBLENBQUEsTUFBQSxF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
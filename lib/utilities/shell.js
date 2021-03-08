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
    input(initialAnswer, hidden, description, encoding, callback);
}
function input(initialAnswer, hidden, description, encoding, callback) {
    var answer = initialAnswer; ///
    hidden ? hiddenInput(answer, description, encoding, callback) : visibleInput(answer, description, encoding, callback);
}
function hiddenInput(answer, description, encoding, callback) {
    var event = _constants.DATA_EVENT, rawMode = true, offETX = onETX(function() {
        console.log(_constants.CTRL_C);
        process.exit();
    });
    process.stdout.write(description);
    process.stdin.setEncoding(encoding);
    process.stdin.setRawMode(rawMode);
    process.stdin.resume();
    process.stdin.on(event, listener);
    function listener(data) {
        var character = data.toString(encoding);
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
                break;
            default:
                answer += character;
                break;
        }
    }
}
function visibleInput(answer, description, encoding, callback) {
    var listener = function listener(data) {
        var answer1 = data; ///
        process.stdin.pause();
        callback(answer1);
    };
    process.stdout.write(description);
    process.stdout.write(answer);
    process.stdin.setEncoding(encoding);
    process.stdin.resume();
    process.stdin.once("data", listener);
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi91dGlsaXRpZXMvc2hlbGwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHdoaWxzdCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXN5bmNocm9ub3VzXCI7XG5cbmltcG9ydCB7IENUUkxfQyxcbiAgICAgICAgIERBVEFfRVZFTlQsXG4gICAgICAgICBVVEY4X0VOQ09ESU5HLFxuICAgICAgICAgRVRYX0NIQVJBQ1RFUixcbiAgICAgICAgIERFRkFVTFRfRU5DT0RJTkcsXG4gICAgICAgICBERUZBVUxUX0FUVEVNUFRTLFxuICAgICAgICAgQkFDS1NQQUNFX0NIQVJBQ1RFUixcbiAgICAgICAgIExJTkVfRkVFRF9DSEFSQUNURVIsXG4gICAgICAgICBERUZBVUxUX0lOSVRJQUxfQU5TV0VSLFxuICAgICAgICAgQ0FSUklBR0VfUkVUVVJOX0NIQVJBQ1RFUiB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG9uRVRYKGhhbmRsZXIpIHtcbiAgY29uc3QgZXZlbnQgPSBEQVRBX0VWRU5UO1xuXG4gIGlmIChwcm9jZXNzLnN0ZGluLnNldFJhd01vZGUpIHtcbiAgICBjb25zdCByYXdNb2RlID0gdHJ1ZSxcbiAgICAgICAgICBlbmNvZGluZyA9IFVURjhfRU5DT0RJTkc7XG5cbiAgICBwcm9jZXNzLnN0ZGluLnNldFJhd01vZGUocmF3TW9kZSk7XG4gICAgcHJvY2Vzcy5zdGRpbi5zZXRFbmNvZGluZyhlbmNvZGluZyk7XG5cbiAgICBwcm9jZXNzLnN0ZGluLnJlc3VtZSgpO1xuXG4gICAgcHJvY2Vzcy5zdGRpbi5hZGRMaXN0ZW5lcihldmVudCwgZGF0YUhhbmRsZXIpO1xuXG4gICAgcmV0dXJuIG9mZkV4dDtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9mZkV4dCgpIHtcbiAgICBwcm9jZXNzLnN0ZGluLnJlbW92ZUxpc3RlbmVyKGV2ZW50LCBkYXRhSGFuZGxlcik7XG4gIH1cblxuICBmdW5jdGlvbiBkYXRhSGFuZGxlcihjaGFyYWN0ZXIpIHtcbiAgICBpZiAoY2hhcmFjdGVyID09PSBFVFhfQ0hBUkFDVEVSKSB7XG4gICAgICBoYW5kbGVyKCk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9tcHQob3B0aW9ucywgY2FsbGJhY2spIHtcbiAgbGV0IHsgYW5zd2VyID0gbnVsbCB9ID0gb3B0aW9ucztcblxuICBpZiAoYW5zd2VyICE9PSBudWxsKSB7XG4gICAgY2FsbGJhY2soYW5zd2VyKTtcblxuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IHsgYXR0ZW1wdHMgPSBERUZBVUxUX0FUVEVNUFRTIH0gPSBvcHRpb25zLFxuICAgICAgICBjb250ZXh0ID0ge1xuICAgICAgICAgIGFuc3dlcixcbiAgICAgICAgICBvcHRpb25zLFxuICAgICAgICAgIGF0dGVtcHRzXG4gICAgICAgIH07XG5cbiAgd2hpbHN0KGF0dGVtcHQsICgpID0+IHtcbiAgICBjb25zdCB7IGFuc3dlciB9ID0gY29udGV4dDtcbiAgICBcbiAgICBjYWxsYmFjayhhbnN3ZXIpO1xuICB9LCBjb250ZXh0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBvbkVUWCxcbiAgcHJvbXB0XG59XG5cbmZ1bmN0aW9uIGF0dGVtcHQobmV4dCwgZG9uZSwgY29udGV4dCkge1xuICBsZXQgeyBhdHRlbXB0cyB9ID0gY29udGV4dDtcblxuICBjb25zdCB0ZXJtaW5hdGUgPSAoYXR0ZW1wdHMtLSA9PT0gMCk7XG4gIFxuICBpZiAodGVybWluYXRlKSB7XG4gICAgZG9uZSgpO1xuICAgIFxuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IHsgb3B0aW9ucyB9ID0gY29udGV4dCxcbiAgICAgICAgeyBoaWRkZW4gPSBmYWxzZSxcbiAgICAgICAgICBlbmNvZGluZyA9IERFRkFVTFRfRU5DT0RJTkcsXG4gICAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgICAgZXJyb3JNZXNzYWdlLFxuICAgICAgICAgIGluaXRpYWxBbnN3ZXIgPSBERUZBVUxUX0lOSVRJQUxfQU5TV0VSLFxuICAgICAgICAgIHZhbGlkYXRpb25QYXR0ZXJuLFxuICAgICAgICAgIHZhbGlkYXRpb25GdW5jdGlvbiB9ID0gb3B0aW9ucztcblxuICBpbnB1dChpbml0aWFsQW5zd2VyLCBoaWRkZW4sIGRlc2NyaXB0aW9uLCBlbmNvZGluZywgY2FsbGJhY2spO1xuXG4gIGZ1bmN0aW9uIGNhbGxiYWNrKGFuc3dlcikge1xuICAgIGNvbnN0IHZhbGlkID0gdmFsaWRhdGlvbkZ1bmN0aW9uID8gIC8vL1xuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uRnVuY3Rpb24oYW5zd2VyKSA6XG4gICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvblBhdHRlcm4udGVzdChhbnN3ZXIpO1xuXG4gICAgaWYgKHZhbGlkKSB7XG4gICAgICBPYmplY3QuYXNzaWduKGNvbnRleHQsIHtcbiAgICAgICAgYW5zd2VyXG4gICAgICB9KTtcblxuICAgICAgZG9uZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvck1lc3NhZ2UpO1xuXG4gICAgICBPYmplY3QuYXNzaWduKGNvbnRleHQsIHtcbiAgICAgICAgYXR0ZW1wdHNcbiAgICAgIH0pO1xuXG4gICAgICBuZXh0KCk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGlucHV0KGluaXRpYWxBbnN3ZXIsIGhpZGRlbiwgZGVzY3JpcHRpb24sIGVuY29kaW5nLCBjYWxsYmFjaykge1xuICBjb25zdCBhbnN3ZXIgPSBpbml0aWFsQW5zd2VyOyAvLy9cblxuICBoaWRkZW4gP1xuICAgIGhpZGRlbklucHV0KGFuc3dlciwgZGVzY3JpcHRpb24sIGVuY29kaW5nLCBjYWxsYmFjaykgOlxuICAgICAgdmlzaWJsZUlucHV0KGFuc3dlciwgZGVzY3JpcHRpb24sIGVuY29kaW5nLCBjYWxsYmFjayk7XG59XG5cbmZ1bmN0aW9uIGhpZGRlbklucHV0KGFuc3dlciwgZGVzY3JpcHRpb24sIGVuY29kaW5nLCBjYWxsYmFjaykge1xuICBjb25zdCBldmVudCA9IERBVEFfRVZFTlQsXG4gICAgICAgIHJhd01vZGUgPSB0cnVlLFxuICAgICAgICBvZmZFVFggPSBvbkVUWCgoKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coQ1RSTF9DKTtcblxuICAgICAgICAgIHByb2Nlc3MuZXhpdCgpO1xuICAgICAgICB9KTtcblxuICBwcm9jZXNzLnN0ZG91dC53cml0ZShkZXNjcmlwdGlvbik7XG5cbiAgcHJvY2Vzcy5zdGRpbi5zZXRFbmNvZGluZyhlbmNvZGluZyk7XG5cbiAgcHJvY2Vzcy5zdGRpbi5zZXRSYXdNb2RlKHJhd01vZGUpO1xuXG4gIHByb2Nlc3Muc3RkaW4ucmVzdW1lKCk7XG5cbiAgcHJvY2Vzcy5zdGRpbi5vbihldmVudCwgbGlzdGVuZXIpO1xuXG4gIGZ1bmN0aW9uIGxpc3RlbmVyKGRhdGEpIHtcbiAgICBjb25zdCBjaGFyYWN0ZXIgPSBkYXRhLnRvU3RyaW5nKGVuY29kaW5nKTtcblxuICAgIHN3aXRjaCAoY2hhcmFjdGVyKSB7XG4gICAgICBjYXNlIExJTkVfRkVFRF9DSEFSQUNURVIgOlxuICAgICAgY2FzZSBDQVJSSUFHRV9SRVRVUk5fQ0hBUkFDVEVSIDpcbiAgICAgICAgcHJvY2Vzcy5zdGRvdXQud3JpdGUoTElORV9GRUVEX0NIQVJBQ1RFUik7XG5cbiAgICAgICAgcHJvY2Vzcy5zdGRpbi5yZW1vdmVMaXN0ZW5lcihldmVudCwgbGlzdGVuZXIpO1xuXG4gICAgICAgIHByb2Nlc3Muc3RkaW4ucGF1c2UoKTtcblxuICAgICAgICBvZmZFVFgoKTtcblxuICAgICAgICBjYWxsYmFjayhhbnN3ZXIpO1xuXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIEJBQ0tTUEFDRV9DSEFSQUNURVIgOlxuICAgICAgICBhbnN3ZXIgPSBhbnN3ZXIuc2xpY2UoMCwgYW5zd2VyLmxlbmd0aCAtIDEpO1xuXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBhbnN3ZXIgKz0gY2hhcmFjdGVyO1xuXG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiB2aXNpYmxlSW5wdXQoYW5zd2VyLCBkZXNjcmlwdGlvbiwgZW5jb2RpbmcsIGNhbGxiYWNrKSB7XG4gIHByb2Nlc3Muc3Rkb3V0LndyaXRlKGRlc2NyaXB0aW9uKTtcblxuICBwcm9jZXNzLnN0ZG91dC53cml0ZShhbnN3ZXIpO1xuXG4gIHByb2Nlc3Muc3RkaW4uc2V0RW5jb2RpbmcoZW5jb2RpbmcpO1xuXG4gIHByb2Nlc3Muc3RkaW4ucmVzdW1lKCk7XG5cbiAgcHJvY2Vzcy5zdGRpbi5vbmNlKFwiZGF0YVwiLCBsaXN0ZW5lcik7XG5cbiAgZnVuY3Rpb24gbGlzdGVuZXIoZGF0YSkge1xuICAgIGNvbnN0IGFuc3dlciA9IGRhdGE7IC8vL1xuXG4gICAgcHJvY2Vzcy5zdGRpbi5wYXVzZSgpO1xuXG4gICAgY2FsbGJhY2soYW5zd2VyKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQUE7Ozs7UUFlQSxLQUFBLEdBQUEsS0FBQTtRQTRCQSxNQUFBLEdBQUEsTUFBQTs7SUF6Q0EsYUFBQTtJQVdBLFVBQUE7U0FFQSxLQUFBLENBQUEsT0FBQTtRQWlCQSxNQUFBLFlBQUEsTUFBQTtBQUNBLGVBQUEsQ0FBQSxLQUFBLENBQUEsY0FBQSxDQUFBLEtBQUEsRUFBQSxXQUFBOztRQUdBLFdBQUEsWUFBQSxXQUFBLENBQUEsU0FBQTtZQUNBLFNBQUEsS0F4QkEsVUFBQTtBQXlCQSxtQkFBQTs7O1FBdEJBLEtBQUEsR0FIQSxVQUFBO1FBS0EsT0FBQSxDQUFBLEtBQUEsQ0FBQSxVQUFBO1lBQ0EsT0FBQSxHQUFBLElBQUEsRUFDQSxRQUFBLEdBUEEsVUFBQTtBQVNBLGVBQUEsQ0FBQSxLQUFBLENBQUEsVUFBQSxDQUFBLE9BQUE7QUFDQSxlQUFBLENBQUEsS0FBQSxDQUFBLFdBQUEsQ0FBQSxRQUFBO0FBRUEsZUFBQSxDQUFBLEtBQUEsQ0FBQSxNQUFB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UUFBQTtlQUVBLFNBQUE7aUJBcklBLFVBQUE7aUJBQUEsVUFBQTtBQXdJQSx1QkFBQSxDQUFBLE1BQUEsQ0FBQSxLQUFBLENBeElBLFVBQUE7QUEwSUEsdUJBQUEsQ0FBQSxLQUFBLENBQUEsY0FBQSxDQUFBLEtBQUEsRUFBQSxRQUFBO0FBRUEsdUJBQUEsQ0FBQSxLQUFBLENBQUEsS0FBQTtBQUVBLHNCQUFBO0FBRUEsd0JBQUEsQ0FBQSxNQUFBOztpQkFoSkEsVUFBQTtBQXFKQSxzQkFBQSxHQUFBLE1BQUEsQ0FBQSxLQUFBLENBQUEsQ0FBQSxFQUFBLE1BQUEsQ0FBQSxNQUFBLEdBQUEsQ0FBQTs7O0FBS0Esc0JBQUEsSUFBQSxTQUFBOzs7OztTQU9BLFlBQUEsQ0FBQSxNQUFBLEVBQUEsV0FBQSxFQUFBLFFBQUEsRUFBQSxRQUFBO1FBV0EsUUFBQSxZQUFBLFFBQUEsQ0FBQSxJQUFBO1lBQ0EsT0FBQSxHQUFBLElBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQTtBQUVBLGVBQUEsQ0FBQSxLQUFBLENBQUEsS0FBQTtBQUVBLGdCQUFBLENBQUEsT0FBQTs7QUFmQSxXQUFBLENBQUEsTUFBQSxDQUFBLEtBQUEsQ0FBQSxXQUFBO0FBRUEsV0FBQSxDQUFBLE1BQUEsQ0FBQSxLQUFBLENBQUEsTUFBQTtBQUVBLFdBQUEsQ0FBQSxLQUFBLENBQUEsV0FBQSxDQUFBLFFBQUE7QUFFQSxXQUFBLENBQUEsS0FBQSxDQUFBLE1BQUE7QUFFQSxXQUFBLENBQUEsS0FBQSxDQUFBLElBQUEsRUFBQSxJQUFBLEdBQUEsUUFBQSJ9
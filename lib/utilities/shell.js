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
        process.stdin.addListener(event, dataHandler);
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
    var options = context.options, _hidden = options.hidden, hidden = _hidden === void 0 ? false : _hidden, _encoding = options.encoding, encoding = _encoding === void 0 ? _constants.DEFAULT_ENCODING : _encoding, description = options.description, errorMessage = options.errorMessage, _initialAnswer = options.initialAnswer, initialAnswer = _initialAnswer === void 0 ? _constants.DEFAULT_INITIAL_ANSWER : _initialAnswer, _validationPattern = options.validationPattern, validationPattern = _validationPattern === void 0 ? null : _validationPattern, _validationFunction = options.validationFunction, validationFunction = _validationFunction === void 0 ? null : _validationFunction;
    input(initialAnswer, hidden, description, encoding, callback);
}
function input(initialAnswer, hidden, description, encoding, callback) {
    var answer = initialAnswer; ///
    hidden ? hiddenInput(answer, description, encoding, callback) : visibleInput(answer, description, encoding, callback);
}
function hiddenInput(answer, description, encoding, callback) {
    var event = _constants.DATA_EVENT, rawMode = true;
    process.stdout.write(description);
    process.stdin.setEncoding(encoding);
    process.stdin.setRawMode(rawMode);
    process.stdin.on(event, listener);
    process.stdin.resume();
    function listener(data) {
        var character = data.toString(encoding);
        switch(character){
            case _constants.LINE_FEED_CHARACTER:
            case _constants.CARRIAGE_RETURN_CHARACTER:
                process.stdout.write(_constants.LINE_FEED_CHARACTER);
                process.stdin.removeListener(event, listener);
                process.stdin.pause();
                callback(answer);
                break;
            case _constants.BACKSPACE_CHARACTER:
                answer = answer.slice(0, answer.length - 1);
                break;
            default:
                answer += character;
                break;
            case _constants.ETX_CHARACTER:
                console.log(_constants.CTRL_C);
                process.exit();
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
    process.stdin.once(_constants.DATA_EVENT, listener);
    process.stdin.resume();
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvc2hlbGwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHdoaWxzdCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXN5bmNocm9ub3VzXCI7XG5cbmltcG9ydCB7IENUUkxfQyxcbiAgICAgICAgIERBVEFfRVZFTlQsXG4gICAgICAgICBVVEY4X0VOQ09ESU5HLFxuICAgICAgICAgRVRYX0NIQVJBQ1RFUixcbiAgICAgICAgIERFRkFVTFRfRU5DT0RJTkcsXG4gICAgICAgICBERUZBVUxUX0FUVEVNUFRTLFxuICAgICAgICAgQkFDS1NQQUNFX0NIQVJBQ1RFUixcbiAgICAgICAgIExJTkVfRkVFRF9DSEFSQUNURVIsXG4gICAgICAgICBERUZBVUxUX0lOSVRJQUxfQU5TV0VSLFxuICAgICAgICAgQ0FSUklBR0VfUkVUVVJOX0NIQVJBQ1RFUiB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG9uRVRYKGhhbmRsZXIpIHtcbiAgY29uc3QgZXZlbnQgPSBEQVRBX0VWRU5UO1xuXG4gIGlmIChwcm9jZXNzLnN0ZGluLnNldFJhd01vZGUpIHtcbiAgICBjb25zdCByYXdNb2RlID0gdHJ1ZSxcbiAgICAgICAgICBlbmNvZGluZyA9IFVURjhfRU5DT0RJTkc7XG5cbiAgICBwcm9jZXNzLnN0ZGluLnNldFJhd01vZGUocmF3TW9kZSk7XG5cbiAgICBwcm9jZXNzLnN0ZGluLnNldEVuY29kaW5nKGVuY29kaW5nKTtcblxuICAgIHByb2Nlc3Muc3RkaW4uYWRkTGlzdGVuZXIoZXZlbnQsIGRhdGFIYW5kbGVyKTtcblxuICAgIHByb2Nlc3Muc3RkaW4ucmVzdW1lKCk7XG5cbiAgICByZXR1cm4gb2ZmRXh0O1xuICB9XG5cbiAgZnVuY3Rpb24gb2ZmRXh0KCkge1xuICAgIHByb2Nlc3Muc3RkaW4ucmVtb3ZlTGlzdGVuZXIoZXZlbnQsIGRhdGFIYW5kbGVyKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRhdGFIYW5kbGVyKGNoYXJhY3Rlcikge1xuICAgIGlmIChjaGFyYWN0ZXIgPT09IEVUWF9DSEFSQUNURVIpIHtcbiAgICAgIGhhbmRsZXIoKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb21wdChvcHRpb25zLCBjYWxsYmFjaykge1xuICBsZXQgeyBhbnN3ZXIgPSBudWxsIH0gPSBvcHRpb25zO1xuXG4gIGlmIChhbnN3ZXIgIT09IG51bGwpIHtcbiAgICBjYWxsYmFjayhhbnN3ZXIpO1xuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgeyBhdHRlbXB0cyA9IERFRkFVTFRfQVRURU1QVFMgfSA9IG9wdGlvbnMsXG4gICAgICAgIGNvbnRleHQgPSB7XG4gICAgICAgICAgYW5zd2VyLFxuICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgYXR0ZW1wdHNcbiAgICAgICAgfTtcblxuICB3aGlsc3QoYXR0ZW1wdCwgKCkgPT4ge1xuICAgIGNvbnN0IHsgYW5zd2VyIH0gPSBjb250ZXh0O1xuICAgIFxuICAgIGNhbGxiYWNrKGFuc3dlcik7XG4gIH0sIGNvbnRleHQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG9uRVRYLFxuICBwcm9tcHRcbn1cblxuZnVuY3Rpb24gYXR0ZW1wdChuZXh0LCBkb25lLCBjb250ZXh0KSB7XG4gIGxldCB7IGF0dGVtcHRzIH0gPSBjb250ZXh0O1xuXG4gIGNvbnN0IHRlcm1pbmF0ZSA9IChhdHRlbXB0cy0tID09PSAwKTtcbiAgXG4gIGlmICh0ZXJtaW5hdGUpIHtcbiAgICBkb25lKCk7XG4gICAgXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgeyBvcHRpb25zIH0gPSBjb250ZXh0LFxuICAgICAgICB7IGhpZGRlbiA9IGZhbHNlLFxuICAgICAgICAgIGVuY29kaW5nID0gREVGQVVMVF9FTkNPRElORyxcbiAgICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgICBlcnJvck1lc3NhZ2UsXG4gICAgICAgICAgaW5pdGlhbEFuc3dlciA9IERFRkFVTFRfSU5JVElBTF9BTlNXRVIsXG4gICAgICAgICAgdmFsaWRhdGlvblBhdHRlcm4gPSBudWxsLFxuICAgICAgICAgIHZhbGlkYXRpb25GdW5jdGlvbiA9IG51bGwgfSA9IG9wdGlvbnM7XG5cbiAgaW5wdXQoaW5pdGlhbEFuc3dlciwgaGlkZGVuLCBkZXNjcmlwdGlvbiwgZW5jb2RpbmcsIGNhbGxiYWNrKTtcblxuICBmdW5jdGlvbiBjYWxsYmFjayhhbnN3ZXIpIHtcbiAgICBjb25zdCB2YWxpZCA9IHZhbGlkYXRpb25GdW5jdGlvbiA/ICAvLy9cbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbkZ1bmN0aW9uKGFuc3dlcikgOlxuICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25QYXR0ZXJuLnRlc3QoYW5zd2VyKTtcblxuICAgIGlmICh2YWxpZCkge1xuICAgICAgT2JqZWN0LmFzc2lnbihjb250ZXh0LCB7XG4gICAgICAgIGFuc3dlclxuICAgICAgfSk7XG5cbiAgICAgIGRvbmUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coZXJyb3JNZXNzYWdlKTtcblxuICAgICAgT2JqZWN0LmFzc2lnbihjb250ZXh0LCB7XG4gICAgICAgIGF0dGVtcHRzXG4gICAgICB9KTtcblxuICAgICAgbmV4dCgpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBpbnB1dChpbml0aWFsQW5zd2VyLCBoaWRkZW4sIGRlc2NyaXB0aW9uLCBlbmNvZGluZywgY2FsbGJhY2spIHtcbiAgY29uc3QgYW5zd2VyID0gaW5pdGlhbEFuc3dlcjsgLy8vXG5cbiAgaGlkZGVuID9cbiAgICBoaWRkZW5JbnB1dChhbnN3ZXIsIGRlc2NyaXB0aW9uLCBlbmNvZGluZywgY2FsbGJhY2spIDpcbiAgICAgIHZpc2libGVJbnB1dChhbnN3ZXIsIGRlc2NyaXB0aW9uLCBlbmNvZGluZywgY2FsbGJhY2spO1xufVxuXG5mdW5jdGlvbiBoaWRkZW5JbnB1dChhbnN3ZXIsIGRlc2NyaXB0aW9uLCBlbmNvZGluZywgY2FsbGJhY2spIHtcbiAgY29uc3QgZXZlbnQgPSBEQVRBX0VWRU5ULFxuICAgICAgICByYXdNb2RlID0gdHJ1ZTtcblxuICBwcm9jZXNzLnN0ZG91dC53cml0ZShkZXNjcmlwdGlvbik7XG5cbiAgcHJvY2Vzcy5zdGRpbi5zZXRFbmNvZGluZyhlbmNvZGluZyk7XG5cbiAgcHJvY2Vzcy5zdGRpbi5zZXRSYXdNb2RlKHJhd01vZGUpO1xuXG4gIHByb2Nlc3Muc3RkaW4ub24oZXZlbnQsIGxpc3RlbmVyKTtcblxuICBwcm9jZXNzLnN0ZGluLnJlc3VtZSgpO1xuXG4gIGZ1bmN0aW9uIGxpc3RlbmVyKGRhdGEpIHtcbiAgICBjb25zdCBjaGFyYWN0ZXIgPSBkYXRhLnRvU3RyaW5nKGVuY29kaW5nKTtcblxuICAgIHN3aXRjaCAoY2hhcmFjdGVyKSB7XG4gICAgICBjYXNlIExJTkVfRkVFRF9DSEFSQUNURVIgOlxuICAgICAgY2FzZSBDQVJSSUFHRV9SRVRVUk5fQ0hBUkFDVEVSIDpcbiAgICAgICAgcHJvY2Vzcy5zdGRvdXQud3JpdGUoTElORV9GRUVEX0NIQVJBQ1RFUik7XG5cbiAgICAgICAgcHJvY2Vzcy5zdGRpbi5yZW1vdmVMaXN0ZW5lcihldmVudCwgbGlzdGVuZXIpO1xuXG4gICAgICAgIHByb2Nlc3Muc3RkaW4ucGF1c2UoKTtcblxuICAgICAgICBjYWxsYmFjayhhbnN3ZXIpO1xuXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIEJBQ0tTUEFDRV9DSEFSQUNURVIgOlxuICAgICAgICBhbnN3ZXIgPSBhbnN3ZXIuc2xpY2UoMCwgYW5zd2VyLmxlbmd0aCAtIDEpO1xuXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBhbnN3ZXIgKz0gY2hhcmFjdGVyO1xuXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIEVUWF9DSEFSQUNURVIgOlxuICAgICAgICBjb25zb2xlLmxvZyhDVFJMX0MpO1xuXG4gICAgICAgIHByb2Nlc3MuZXhpdCgpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiB2aXNpYmxlSW5wdXQoYW5zd2VyLCBkZXNjcmlwdGlvbiwgZW5jb2RpbmcsIGNhbGxiYWNrKSB7XG4gIHByb2Nlc3Muc3Rkb3V0LndyaXRlKGRlc2NyaXB0aW9uKTtcblxuICBwcm9jZXNzLnN0ZG91dC53cml0ZShhbnN3ZXIpO1xuXG4gIHByb2Nlc3Muc3RkaW4uc2V0RW5jb2RpbmcoZW5jb2RpbmcpO1xuXG4gIHByb2Nlc3Muc3RkaW4ub25jZShEQVRBX0VWRU5ULCBsaXN0ZW5lcik7XG5cbiAgcHJvY2Vzcy5zdGRpbi5yZXN1bWUoKTtcblxuICBmdW5jdGlvbiBsaXN0ZW5lcihkYXRhKSB7XG4gICAgY29uc3QgYW5zd2VyID0gZGF0YTsgLy8vXG5cbiAgICBwcm9jZXNzLnN0ZGluLnBhdXNlKCk7XG5cbiAgICBjYWxsYmFjayhhbnN3ZXIpO1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBQTs7OztRQWVBLEtBQUEsR0FBQSxLQUFBO1FBNkJBLE1BQUEsR0FBQSxNQUFBOztJQTFDQSxhQUFBO0lBV0EsVUFBQTtTQUVBLEtBQUEsQ0FBQSxPQUFBO1FBa0JBLE1BQUEsWUFBQSxNQUFBO0FBQ0EsZUFBQSxDQUFBLEtBQUEsQ0FBQSxjQUFBLENBQUEsS0FBQSxFQUFBLFdBQUE7O1FBR0EsV0FBQSxZQUFBLFdBQUEsQ0FBQSxTQUFBO1lBQ0EsU0FBQSxLQXpCQSxVQUFBO0FBMEJBLG1CQUFBOzs7UUF2QkEsS0FBQSxHQUhBLFVBQUE7UUFLQSxPQUFBLENBQUEsS0FBQSxDQUFBLFVBQUE7WUFDQSxPQUFBLEdBQUEsSUFBQSxFQUNBLFFBQUEsR0FQQSxVQUFBO0FBU0EsZUFBQSxDQUFBLEtBQUEsQ0FBQSxVQUFBLENBQUEsT0FBQTtBQUVBLGVBQUEsQ0FBQSxLQUFBLENBQUEsV0FBQSxDQUFBLFFBQUE7QUFFQSxlQUFBLENBQUEsS0FBQSxDQUFBLFdBQUEsQ0FBQSxLQUFBLEVBQUEsV0FBQTtB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
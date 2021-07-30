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
    (0, _asynchronous).whilst(attempt, function() {
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
        var answer1 = data.replace(/\n$/, _constants.EMPTY_STRING);
        process.stdin.pause();
        callback(answer1);
    };
    process.stdout.write(description);
    process.stdout.write(answer);
    process.stdin.setEncoding(encoding);
    process.stdin.once(_constants.DATA_EVENT, listener);
    process.stdin.resume();
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvc2hlbGwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHdoaWxzdCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXN5bmNocm9ub3VzXCI7XG5cbmltcG9ydCB7IENUUkxfQyxcbiAgICAgICAgIERBVEFfRVZFTlQsXG4gICAgICAgICBFTVBUWV9TVFJJTkcsXG4gICAgICAgICBVVEY4X0VOQ09ESU5HLFxuICAgICAgICAgRVRYX0NIQVJBQ1RFUixcbiAgICAgICAgIERFRkFVTFRfRU5DT0RJTkcsXG4gICAgICAgICBERUZBVUxUX0FUVEVNUFRTLFxuICAgICAgICAgQkFDS1NQQUNFX0NIQVJBQ1RFUixcbiAgICAgICAgIExJTkVfRkVFRF9DSEFSQUNURVIsXG4gICAgICAgICBERUZBVUxUX0lOSVRJQUxfQU5TV0VSLFxuICAgICAgICAgQ0FSUklBR0VfUkVUVVJOX0NIQVJBQ1RFUiB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG9uRVRYKGhhbmRsZXIpIHtcbiAgY29uc3QgZXZlbnQgPSBEQVRBX0VWRU5UO1xuXG4gIGlmIChwcm9jZXNzLnN0ZGluLnNldFJhd01vZGUpIHtcbiAgICBjb25zdCByYXdNb2RlID0gdHJ1ZSxcbiAgICAgICAgICBlbmNvZGluZyA9IFVURjhfRU5DT0RJTkc7XG5cbiAgICBwcm9jZXNzLnN0ZGluLnNldFJhd01vZGUocmF3TW9kZSk7XG5cbiAgICBwcm9jZXNzLnN0ZGluLnNldEVuY29kaW5nKGVuY29kaW5nKTtcblxuICAgIHByb2Nlc3Muc3RkaW4uYWRkTGlzdGVuZXIoZXZlbnQsIGRhdGFIYW5kbGVyKTtcblxuICAgIHByb2Nlc3Muc3RkaW4ucmVzdW1lKCk7XG5cbiAgICByZXR1cm4gb2ZmRXh0O1xuICB9XG5cbiAgZnVuY3Rpb24gb2ZmRXh0KCkge1xuICAgIHByb2Nlc3Muc3RkaW4ucmVtb3ZlTGlzdGVuZXIoZXZlbnQsIGRhdGFIYW5kbGVyKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRhdGFIYW5kbGVyKGNoYXJhY3Rlcikge1xuICAgIGlmIChjaGFyYWN0ZXIgPT09IEVUWF9DSEFSQUNURVIpIHtcbiAgICAgIGhhbmRsZXIoKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb21wdChvcHRpb25zLCBjYWxsYmFjaykge1xuICBsZXQgeyBhbnN3ZXIgPSBudWxsIH0gPSBvcHRpb25zO1xuXG4gIGlmIChhbnN3ZXIgIT09IG51bGwpIHtcbiAgICBjYWxsYmFjayhhbnN3ZXIpO1xuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgeyBhdHRlbXB0cyA9IERFRkFVTFRfQVRURU1QVFMgfSA9IG9wdGlvbnMsXG4gICAgICAgIGNvbnRleHQgPSB7XG4gICAgICAgICAgYW5zd2VyLFxuICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgYXR0ZW1wdHNcbiAgICAgICAgfTtcblxuICB3aGlsc3QoYXR0ZW1wdCwgKCkgPT4ge1xuICAgIGNvbnN0IHsgYW5zd2VyIH0gPSBjb250ZXh0O1xuICAgIFxuICAgIGNhbGxiYWNrKGFuc3dlcik7XG4gIH0sIGNvbnRleHQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG9uRVRYLFxuICBwcm9tcHRcbn1cblxuZnVuY3Rpb24gYXR0ZW1wdChuZXh0LCBkb25lLCBjb250ZXh0KSB7XG4gIGxldCB7IGF0dGVtcHRzIH0gPSBjb250ZXh0O1xuXG4gIGNvbnN0IHRlcm1pbmF0ZSA9IChhdHRlbXB0cy0tID09PSAwKTtcbiAgXG4gIGlmICh0ZXJtaW5hdGUpIHtcbiAgICBkb25lKCk7XG4gICAgXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgeyBvcHRpb25zIH0gPSBjb250ZXh0LFxuICAgICAgICB7IGhpZGRlbiA9IGZhbHNlLFxuICAgICAgICAgIGVuY29kaW5nID0gREVGQVVMVF9FTkNPRElORyxcbiAgICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgICBlcnJvck1lc3NhZ2UsXG4gICAgICAgICAgaW5pdGlhbEFuc3dlciA9IERFRkFVTFRfSU5JVElBTF9BTlNXRVIsXG4gICAgICAgICAgdmFsaWRhdGlvblBhdHRlcm4gPSBudWxsLFxuICAgICAgICAgIHZhbGlkYXRpb25GdW5jdGlvbiA9IG51bGwgfSA9IG9wdGlvbnM7XG5cbiAgaW5wdXQoaW5pdGlhbEFuc3dlciwgaGlkZGVuLCBkZXNjcmlwdGlvbiwgZW5jb2RpbmcsIGNhbGxiYWNrKTtcblxuICBmdW5jdGlvbiBjYWxsYmFjayhhbnN3ZXIpIHtcbiAgICBjb25zdCB2YWxpZCA9IHZhbGlkYXRpb25GdW5jdGlvbiA/ICAvLy9cbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbkZ1bmN0aW9uKGFuc3dlcikgOlxuICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25QYXR0ZXJuLnRlc3QoYW5zd2VyKTtcblxuICAgIGlmICh2YWxpZCkge1xuICAgICAgT2JqZWN0LmFzc2lnbihjb250ZXh0LCB7XG4gICAgICAgIGFuc3dlclxuICAgICAgfSk7XG5cbiAgICAgIGRvbmUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coZXJyb3JNZXNzYWdlKTtcblxuICAgICAgT2JqZWN0LmFzc2lnbihjb250ZXh0LCB7XG4gICAgICAgIGF0dGVtcHRzXG4gICAgICB9KTtcblxuICAgICAgbmV4dCgpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBpbnB1dChpbml0aWFsQW5zd2VyLCBoaWRkZW4sIGRlc2NyaXB0aW9uLCBlbmNvZGluZywgY2FsbGJhY2spIHtcbiAgY29uc3QgYW5zd2VyID0gaW5pdGlhbEFuc3dlcjsgLy8vXG5cbiAgaGlkZGVuID9cbiAgICBoaWRkZW5JbnB1dChhbnN3ZXIsIGRlc2NyaXB0aW9uLCBlbmNvZGluZywgY2FsbGJhY2spIDpcbiAgICAgIHZpc2libGVJbnB1dChhbnN3ZXIsIGRlc2NyaXB0aW9uLCBlbmNvZGluZywgY2FsbGJhY2spO1xufVxuXG5mdW5jdGlvbiBoaWRkZW5JbnB1dChhbnN3ZXIsIGRlc2NyaXB0aW9uLCBlbmNvZGluZywgY2FsbGJhY2spIHtcbiAgY29uc3QgZXZlbnQgPSBEQVRBX0VWRU5ULFxuICAgICAgICByYXdNb2RlID0gdHJ1ZTtcblxuICBwcm9jZXNzLnN0ZG91dC53cml0ZShkZXNjcmlwdGlvbik7XG5cbiAgcHJvY2Vzcy5zdGRpbi5zZXRFbmNvZGluZyhlbmNvZGluZyk7XG5cbiAgcHJvY2Vzcy5zdGRpbi5zZXRSYXdNb2RlKHJhd01vZGUpO1xuXG4gIHByb2Nlc3Muc3RkaW4ub24oZXZlbnQsIGxpc3RlbmVyKTtcblxuICBwcm9jZXNzLnN0ZGluLnJlc3VtZSgpO1xuXG4gIGZ1bmN0aW9uIGxpc3RlbmVyKGRhdGEpIHtcbiAgICBjb25zdCBjaGFyYWN0ZXIgPSBkYXRhLnRvU3RyaW5nKGVuY29kaW5nKTtcblxuICAgIHN3aXRjaCAoY2hhcmFjdGVyKSB7XG4gICAgICBjYXNlIExJTkVfRkVFRF9DSEFSQUNURVIgOlxuICAgICAgY2FzZSBDQVJSSUFHRV9SRVRVUk5fQ0hBUkFDVEVSIDpcbiAgICAgICAgcHJvY2Vzcy5zdGRvdXQud3JpdGUoTElORV9GRUVEX0NIQVJBQ1RFUik7XG5cbiAgICAgICAgcHJvY2Vzcy5zdGRpbi5yZW1vdmVMaXN0ZW5lcihldmVudCwgbGlzdGVuZXIpO1xuXG4gICAgICAgIHByb2Nlc3Muc3RkaW4ucGF1c2UoKTtcblxuICAgICAgICBjYWxsYmFjayhhbnN3ZXIpO1xuXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIEJBQ0tTUEFDRV9DSEFSQUNURVIgOlxuICAgICAgICBhbnN3ZXIgPSBhbnN3ZXIuc2xpY2UoMCwgYW5zd2VyLmxlbmd0aCAtIDEpO1xuXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBhbnN3ZXIgKz0gY2hhcmFjdGVyO1xuXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIEVUWF9DSEFSQUNURVIgOlxuICAgICAgICBjb25zb2xlLmxvZyhDVFJMX0MpO1xuXG4gICAgICAgIHByb2Nlc3MuZXhpdCgpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiB2aXNpYmxlSW5wdXQoYW5zd2VyLCBkZXNjcmlwdGlvbiwgZW5jb2RpbmcsIGNhbGxiYWNrKSB7XG4gIHByb2Nlc3Muc3Rkb3V0LndyaXRlKGRlc2NyaXB0aW9uKTtcblxuICBwcm9jZXNzLnN0ZG91dC53cml0ZShhbnN3ZXIpO1xuXG4gIHByb2Nlc3Muc3RkaW4uc2V0RW5jb2RpbmcoZW5jb2RpbmcpO1xuXG4gIHByb2Nlc3Muc3RkaW4ub25jZShEQVRBX0VWRU5ULCBsaXN0ZW5lcik7XG5cbiAgcHJvY2Vzcy5zdGRpbi5yZXN1bWUoKTtcblxuICBmdW5jdGlvbiBsaXN0ZW5lcihkYXRhKSB7XG4gICAgY29uc3QgYW5zd2VyID0gZGF0YS5yZXBsYWNlKC9cXG4kLywgRU1QVFlfU1RSSU5HKTtcblxuICAgIHByb2Nlc3Muc3RkaW4ucGF1c2UoKTtcblxuICAgIGNhbGxiYWNrKGFuc3dlcik7XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7O1FBZ0JJLEtBQUssR0FBTCxLQUFLO1FBNkJMLE1BQU0sR0FBTixNQUFNOztBQTNDQyxHQUEyQixDQUEzQixhQUEyQjtBQVlSLEdBQWMsQ0FBZCxVQUFjO1NBRXhDLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQWtCckIsTUFBTSxZQUFOLE1BQU0sR0FBRyxDQUFDO1FBQ2pCLE9BQU8sQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxXQUFXO0lBQ2pELENBQUM7UUFFUSxXQUFXLFlBQVgsV0FBVyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQy9CLEVBQUUsRUFBRSxTQUFTLEtBekJ5QixVQUFjLGdCQXlCbkIsQ0FBQztZQUNoQyxPQUFPO1FBQ1QsQ0FBQztJQUNILENBQUM7SUF6QkQsR0FBSyxDQUFDLEtBQUssR0FINkIsVUFBYztJQUt0RCxFQUFFLEVBQUUsT0FBTyxDQUFDLEtBQUss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
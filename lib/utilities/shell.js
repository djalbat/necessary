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
        var answer1 = data.replace(/\n$/, _constants.EMPTY_STRING);
        process.stdin.pause();
        callback(answer1);
    };
    process.stdout.write(description);
    process.stdout.write(answer);
    process.stdin.setEncoding(encoding);
    process.stdin.once(_eventTypes.DATA_EVENT_TYPE, listener);
    process.stdin.resume();
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvc2hlbGwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHdoaWxzdCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXN5bmNocm9ub3VzXCI7XG5cbmltcG9ydCB7IERBVEFfRVZFTlRfVFlQRSB9IGZyb20gXCIuLi9ldmVudFR5cGVzXCI7XG5pbXBvcnQgeyBVVEY4LCBDVFJMX0MsIEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IERFRkFVTFRfRU5DT0RJTkcsIERFRkFVTFRfQVRURU1QVFMsIERFRkFVTFRfSU5JVElBTF9BTlNXRVIgfSBmcm9tIFwiLi4vZGVmYXVsdHNcIjtcbmltcG9ydCB7IEVUWF9DSEFSQUNURVIsIEJBQ0tTUEFDRV9DSEFSQUNURVIsIExJTkVfRkVFRF9DSEFSQUNURVIsIENBUlJJQUdFX1JFVFVSTl9DSEFSQUNURVIgfSBmcm9tIFwiLi4vY2hhcmFjdGVyc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gb25FVFgoaGFuZGxlcikge1xuICBpZiAocHJvY2Vzcy5zdGRpbi5zZXRSYXdNb2RlKSB7XG4gICAgY29uc3QgcmF3TW9kZSA9IHRydWUsXG4gICAgICAgICAgZW5jb2RpbmcgPSBVVEY4O1xuXG4gICAgcHJvY2Vzcy5zdGRpbi5zZXRSYXdNb2RlKHJhd01vZGUpO1xuXG4gICAgcHJvY2Vzcy5zdGRpbi5zZXRFbmNvZGluZyhlbmNvZGluZyk7XG5cbiAgICBwcm9jZXNzLnN0ZGluLmFkZExpc3RlbmVyKERBVEFfRVZFTlRfVFlQRSwgZGF0YUhhbmRsZXIpO1xuXG4gICAgcHJvY2Vzcy5zdGRpbi5yZXN1bWUoKTtcblxuICAgIHJldHVybiBvZmZFeHQ7XG4gIH1cblxuICBmdW5jdGlvbiBvZmZFeHQoKSB7XG4gICAgcHJvY2Vzcy5zdGRpbi5yZW1vdmVMaXN0ZW5lcihEQVRBX0VWRU5UX1RZUEUsIGRhdGFIYW5kbGVyKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRhdGFIYW5kbGVyKGNoYXJhY3Rlcikge1xuICAgIGlmIChjaGFyYWN0ZXIgPT09IEVUWF9DSEFSQUNURVIpIHtcbiAgICAgIGhhbmRsZXIoKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb21wdChvcHRpb25zLCBjYWxsYmFjaykge1xuICBsZXQgeyBhbnN3ZXIgPSBudWxsIH0gPSBvcHRpb25zO1xuXG4gIGlmIChhbnN3ZXIgIT09IG51bGwpIHtcbiAgICBjYWxsYmFjayhhbnN3ZXIpO1xuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgeyBhdHRlbXB0cyA9IERFRkFVTFRfQVRURU1QVFMgfSA9IG9wdGlvbnMsXG4gICAgICAgIGNvbnRleHQgPSB7XG4gICAgICAgICAgYW5zd2VyLFxuICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgYXR0ZW1wdHNcbiAgICAgICAgfTtcblxuICB3aGlsc3QoYXR0ZW1wdCwgKCkgPT4ge1xuICAgIGNvbnN0IHsgYW5zd2VyIH0gPSBjb250ZXh0O1xuICAgIFxuICAgIGNhbGxiYWNrKGFuc3dlcik7XG4gIH0sIGNvbnRleHQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG9uRVRYLFxuICBwcm9tcHRcbn1cblxuZnVuY3Rpb24gYXR0ZW1wdChuZXh0LCBkb25lLCBjb250ZXh0KSB7XG4gIGxldCB7IGF0dGVtcHRzIH0gPSBjb250ZXh0O1xuXG4gIGNvbnN0IHRlcm1pbmF0ZSA9IChhdHRlbXB0cy0tID09PSAwKTtcbiAgXG4gIGlmICh0ZXJtaW5hdGUpIHtcbiAgICBkb25lKCk7XG4gICAgXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgeyBvcHRpb25zIH0gPSBjb250ZXh0LFxuICAgICAgICB7IGhpZGRlbiA9IGZhbHNlLFxuICAgICAgICAgIGVuY29kaW5nID0gREVGQVVMVF9FTkNPRElORyxcbiAgICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgICBlcnJvck1lc3NhZ2UsXG4gICAgICAgICAgaW5pdGlhbEFuc3dlciA9IERFRkFVTFRfSU5JVElBTF9BTlNXRVIsXG4gICAgICAgICAgdmFsaWRhdGlvblBhdHRlcm4gPSBudWxsLFxuICAgICAgICAgIHZhbGlkYXRpb25GdW5jdGlvbiA9IG51bGwgfSA9IG9wdGlvbnM7XG5cbiAgaW5wdXQoaW5pdGlhbEFuc3dlciwgaGlkZGVuLCBkZXNjcmlwdGlvbiwgZW5jb2RpbmcsIGNhbGxiYWNrKTtcblxuICBmdW5jdGlvbiBjYWxsYmFjayhhbnN3ZXIpIHtcbiAgICBjb25zdCB2YWxpZCA9IHZhbGlkYXRpb25GdW5jdGlvbiA/ICAvLy9cbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbkZ1bmN0aW9uKGFuc3dlcikgOlxuICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25QYXR0ZXJuLnRlc3QoYW5zd2VyKTtcblxuICAgIGlmICh2YWxpZCkge1xuICAgICAgT2JqZWN0LmFzc2lnbihjb250ZXh0LCB7XG4gICAgICAgIGFuc3dlclxuICAgICAgfSk7XG5cbiAgICAgIGRvbmUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coZXJyb3JNZXNzYWdlKTtcblxuICAgICAgT2JqZWN0LmFzc2lnbihjb250ZXh0LCB7XG4gICAgICAgIGF0dGVtcHRzXG4gICAgICB9KTtcblxuICAgICAgbmV4dCgpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBpbnB1dChpbml0aWFsQW5zd2VyLCBoaWRkZW4sIGRlc2NyaXB0aW9uLCBlbmNvZGluZywgY2FsbGJhY2spIHtcbiAgY29uc3QgYW5zd2VyID0gaW5pdGlhbEFuc3dlcjsgLy8vXG5cbiAgaGlkZGVuID9cbiAgICBoaWRkZW5JbnB1dChhbnN3ZXIsIGRlc2NyaXB0aW9uLCBlbmNvZGluZywgY2FsbGJhY2spIDpcbiAgICAgIHZpc2libGVJbnB1dChhbnN3ZXIsIGRlc2NyaXB0aW9uLCBlbmNvZGluZywgY2FsbGJhY2spO1xufVxuXG5mdW5jdGlvbiBoaWRkZW5JbnB1dChhbnN3ZXIsIGRlc2NyaXB0aW9uLCBlbmNvZGluZywgY2FsbGJhY2spIHtcbiAgY29uc3QgcmF3TW9kZSA9IHRydWU7XG5cbiAgcHJvY2Vzcy5zdGRvdXQud3JpdGUoZGVzY3JpcHRpb24pO1xuXG4gIHByb2Nlc3Muc3RkaW4uc2V0RW5jb2RpbmcoZW5jb2RpbmcpO1xuXG4gIHByb2Nlc3Muc3RkaW4uc2V0UmF3TW9kZShyYXdNb2RlKTtcblxuICBwcm9jZXNzLnN0ZGluLm9uKERBVEFfRVZFTlRfVFlQRSwgbGlzdGVuZXIpO1xuXG4gIHByb2Nlc3Muc3RkaW4ucmVzdW1lKCk7XG5cbiAgZnVuY3Rpb24gbGlzdGVuZXIoZGF0YSkge1xuICAgIGNvbnN0IGNoYXJhY3RlciA9IGRhdGEudG9TdHJpbmcoZW5jb2RpbmcpO1xuXG4gICAgc3dpdGNoIChjaGFyYWN0ZXIpIHtcbiAgICAgIGNhc2UgTElORV9GRUVEX0NIQVJBQ1RFUiA6XG4gICAgICBjYXNlIENBUlJJQUdFX1JFVFVSTl9DSEFSQUNURVIgOlxuICAgICAgICBwcm9jZXNzLnN0ZG91dC53cml0ZShMSU5FX0ZFRURfQ0hBUkFDVEVSKTtcblxuICAgICAgICBwcm9jZXNzLnN0ZGluLnJlbW92ZUxpc3RlbmVyKERBVEFfRVZFTlRfVFlQRSwgbGlzdGVuZXIpO1xuXG4gICAgICAgIHByb2Nlc3Muc3RkaW4ucGF1c2UoKTtcblxuICAgICAgICBjYWxsYmFjayhhbnN3ZXIpO1xuXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIEJBQ0tTUEFDRV9DSEFSQUNURVIgOlxuICAgICAgICBhbnN3ZXIgPSBhbnN3ZXIuc2xpY2UoMCwgYW5zd2VyLmxlbmd0aCAtIDEpO1xuXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBhbnN3ZXIgKz0gY2hhcmFjdGVyO1xuXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIEVUWF9DSEFSQUNURVIgOlxuICAgICAgICBjb25zb2xlLmxvZyhDVFJMX0MpO1xuXG4gICAgICAgIHByb2Nlc3MuZXhpdCgpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiB2aXNpYmxlSW5wdXQoYW5zd2VyLCBkZXNjcmlwdGlvbiwgZW5jb2RpbmcsIGNhbGxiYWNrKSB7XG4gIHByb2Nlc3Muc3Rkb3V0LndyaXRlKGRlc2NyaXB0aW9uKTtcblxuICBwcm9jZXNzLnN0ZG91dC53cml0ZShhbnN3ZXIpO1xuXG4gIHByb2Nlc3Muc3RkaW4uc2V0RW5jb2RpbmcoZW5jb2RpbmcpO1xuXG4gIHByb2Nlc3Muc3RkaW4ub25jZShEQVRBX0VWRU5UX1RZUEUsIGxpc3RlbmVyKTtcblxuICBwcm9jZXNzLnN0ZGluLnJlc3VtZSgpO1xuXG4gIGZ1bmN0aW9uIGxpc3RlbmVyKGRhdGEpIHtcbiAgICBjb25zdCBhbnN3ZXIgPSBkYXRhLnJlcGxhY2UoL1xcbiQvLCBFTVBUWV9TVFJJTkcpO1xuXG4gICAgcHJvY2Vzcy5zdGRpbi5wYXVzZSgpO1xuXG4gICAgY2FsbGJhY2soYW5zd2VyKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7UUFTSSxLQUFLLEdBQUwsS0FBSztRQTJCTCxNQUFNLEdBQU4sTUFBTTs7QUFsQ0MsR0FBMkIsQ0FBM0IsYUFBMkI7QUFFbEIsR0FBZSxDQUFmLFdBQWU7QUFDSixHQUFjLENBQWQsVUFBYztBQUNrQixHQUFhLENBQWIsU0FBYTtBQUNXLEdBQWUsQ0FBZixXQUFlO1NBRWxHLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQWdCckIsTUFBTSxZQUFOLE1BQU0sR0FBRyxDQUFDO1FBQ2pCLE9BQU8sQ0FBQyxLQUFLLENBQUMsY0FBYyxDQXRCQSxXQUFlLGtCQXNCRyxXQUFXO0lBQzNELENBQUM7UUFFUSxXQUFXLFlBQVgsV0FBVyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQy9CLEVBQUUsRUFBRSxTQUFTLEtBdkJrRixXQUFlLGdCQXVCN0UsQ0FBQztZQUNoQyxPQUFPO1FBQ1QsQ0FBQztJQUNILENBQUM7SUF2QkQsRUFBRSxFQUFFLE9BQU8sQ0FB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
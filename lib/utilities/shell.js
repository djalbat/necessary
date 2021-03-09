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
    var options = context.options, _hidden = options.hidden, hidden = _hidden === void 0 ? false : _hidden, _encoding = options.encoding, encoding = _encoding === void 0 ? _constants.DEFAULT_ENCODING : _encoding, description = options.description, errorMessage = options.errorMessage, _initialAnswer = options.initialAnswer, initialAnswer = _initialAnswer === void 0 ? _constants.DEFAULT_INITIAL_ANSWER : _initialAnswer, validationPattern = options.validationPattern, validationFunction = options.validationFunction;
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvc2hlbGwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHdoaWxzdCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXN5bmNocm9ub3VzXCI7XG5cbmltcG9ydCB7IENUUkxfQyxcbiAgICAgICAgIERBVEFfRVZFTlQsXG4gICAgICAgICBVVEY4X0VOQ09ESU5HLFxuICAgICAgICAgRVRYX0NIQVJBQ1RFUixcbiAgICAgICAgIERFRkFVTFRfRU5DT0RJTkcsXG4gICAgICAgICBERUZBVUxUX0FUVEVNUFRTLFxuICAgICAgICAgQkFDS1NQQUNFX0NIQVJBQ1RFUixcbiAgICAgICAgIExJTkVfRkVFRF9DSEFSQUNURVIsXG4gICAgICAgICBERUZBVUxUX0lOSVRJQUxfQU5TV0VSLFxuICAgICAgICAgQ0FSUklBR0VfUkVUVVJOX0NIQVJBQ1RFUiB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG9uRVRYKGhhbmRsZXIpIHtcbiAgY29uc3QgZXZlbnQgPSBEQVRBX0VWRU5UO1xuXG4gIGlmIChwcm9jZXNzLnN0ZGluLnNldFJhd01vZGUpIHtcbiAgICBjb25zdCByYXdNb2RlID0gdHJ1ZSxcbiAgICAgICAgICBlbmNvZGluZyA9IFVURjhfRU5DT0RJTkc7XG5cbiAgICBwcm9jZXNzLnN0ZGluLnNldFJhd01vZGUocmF3TW9kZSk7XG5cbiAgICBwcm9jZXNzLnN0ZGluLnNldEVuY29kaW5nKGVuY29kaW5nKTtcblxuICAgIHByb2Nlc3Muc3RkaW4uYWRkTGlzdGVuZXIoZXZlbnQsIGRhdGFIYW5kbGVyKTtcblxuICAgIHByb2Nlc3Muc3RkaW4ucmVzdW1lKCk7XG5cbiAgICByZXR1cm4gb2ZmRXh0O1xuICB9XG5cbiAgZnVuY3Rpb24gb2ZmRXh0KCkge1xuICAgIHByb2Nlc3Muc3RkaW4ucmVtb3ZlTGlzdGVuZXIoZXZlbnQsIGRhdGFIYW5kbGVyKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRhdGFIYW5kbGVyKGNoYXJhY3Rlcikge1xuICAgIGlmIChjaGFyYWN0ZXIgPT09IEVUWF9DSEFSQUNURVIpIHtcbiAgICAgIGhhbmRsZXIoKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb21wdChvcHRpb25zLCBjYWxsYmFjaykge1xuICBsZXQgeyBhbnN3ZXIgPSBudWxsIH0gPSBvcHRpb25zO1xuXG4gIGlmIChhbnN3ZXIgIT09IG51bGwpIHtcbiAgICBjYWxsYmFjayhhbnN3ZXIpO1xuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgeyBhdHRlbXB0cyA9IERFRkFVTFRfQVRURU1QVFMgfSA9IG9wdGlvbnMsXG4gICAgICAgIGNvbnRleHQgPSB7XG4gICAgICAgICAgYW5zd2VyLFxuICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgYXR0ZW1wdHNcbiAgICAgICAgfTtcblxuICB3aGlsc3QoYXR0ZW1wdCwgKCkgPT4ge1xuICAgIGNvbnN0IHsgYW5zd2VyIH0gPSBjb250ZXh0O1xuICAgIFxuICAgIGNhbGxiYWNrKGFuc3dlcik7XG4gIH0sIGNvbnRleHQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG9uRVRYLFxuICBwcm9tcHRcbn1cblxuZnVuY3Rpb24gYXR0ZW1wdChuZXh0LCBkb25lLCBjb250ZXh0KSB7XG4gIGxldCB7IGF0dGVtcHRzIH0gPSBjb250ZXh0O1xuXG4gIGNvbnN0IHRlcm1pbmF0ZSA9IChhdHRlbXB0cy0tID09PSAwKTtcbiAgXG4gIGlmICh0ZXJtaW5hdGUpIHtcbiAgICBkb25lKCk7XG4gICAgXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgeyBvcHRpb25zIH0gPSBjb250ZXh0LFxuICAgICAgICB7IGhpZGRlbiA9IGZhbHNlLFxuICAgICAgICAgIGVuY29kaW5nID0gREVGQVVMVF9FTkNPRElORyxcbiAgICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgICBlcnJvck1lc3NhZ2UsXG4gICAgICAgICAgaW5pdGlhbEFuc3dlciA9IERFRkFVTFRfSU5JVElBTF9BTlNXRVIsXG4gICAgICAgICAgdmFsaWRhdGlvblBhdHRlcm4sXG4gICAgICAgICAgdmFsaWRhdGlvbkZ1bmN0aW9uIH0gPSBvcHRpb25zO1xuXG4gIGlucHV0KGluaXRpYWxBbnN3ZXIsIGhpZGRlbiwgZGVzY3JpcHRpb24sIGVuY29kaW5nLCBjYWxsYmFjayk7XG5cbiAgZnVuY3Rpb24gY2FsbGJhY2soYW5zd2VyKSB7XG4gICAgY29uc3QgdmFsaWQgPSB2YWxpZGF0aW9uRnVuY3Rpb24gPyAgLy8vXG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25GdW5jdGlvbihhbnN3ZXIpIDpcbiAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uUGF0dGVybi50ZXN0KGFuc3dlcik7XG5cbiAgICBpZiAodmFsaWQpIHtcbiAgICAgIE9iamVjdC5hc3NpZ24oY29udGV4dCwge1xuICAgICAgICBhbnN3ZXJcbiAgICAgIH0pO1xuXG4gICAgICBkb25lKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yTWVzc2FnZSk7XG5cbiAgICAgIE9iamVjdC5hc3NpZ24oY29udGV4dCwge1xuICAgICAgICBhdHRlbXB0c1xuICAgICAgfSk7XG5cbiAgICAgIG5leHQoKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gaW5wdXQoaW5pdGlhbEFuc3dlciwgaGlkZGVuLCBkZXNjcmlwdGlvbiwgZW5jb2RpbmcsIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGFuc3dlciA9IGluaXRpYWxBbnN3ZXI7IC8vL1xuXG4gIGhpZGRlbiA/XG4gICAgaGlkZGVuSW5wdXQoYW5zd2VyLCBkZXNjcmlwdGlvbiwgZW5jb2RpbmcsIGNhbGxiYWNrKSA6XG4gICAgICB2aXNpYmxlSW5wdXQoYW5zd2VyLCBkZXNjcmlwdGlvbiwgZW5jb2RpbmcsIGNhbGxiYWNrKTtcbn1cblxuZnVuY3Rpb24gaGlkZGVuSW5wdXQoYW5zd2VyLCBkZXNjcmlwdGlvbiwgZW5jb2RpbmcsIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGV2ZW50ID0gREFUQV9FVkVOVCxcbiAgICAgICAgcmF3TW9kZSA9IHRydWU7XG5cbiAgcHJvY2Vzcy5zdGRvdXQud3JpdGUoZGVzY3JpcHRpb24pO1xuXG4gIHByb2Nlc3Muc3RkaW4uc2V0RW5jb2RpbmcoZW5jb2RpbmcpO1xuXG4gIHByb2Nlc3Muc3RkaW4uc2V0UmF3TW9kZShyYXdNb2RlKTtcblxuICBwcm9jZXNzLnN0ZGluLm9uKGV2ZW50LCBsaXN0ZW5lcik7XG5cbiAgcHJvY2Vzcy5zdGRpbi5yZXN1bWUoKTtcblxuICBmdW5jdGlvbiBsaXN0ZW5lcihkYXRhKSB7XG4gICAgY29uc3QgY2hhcmFjdGVyID0gZGF0YS50b1N0cmluZyhlbmNvZGluZyk7XG5cbiAgICBzd2l0Y2ggKGNoYXJhY3Rlcikge1xuICAgICAgY2FzZSBMSU5FX0ZFRURfQ0hBUkFDVEVSIDpcbiAgICAgIGNhc2UgQ0FSUklBR0VfUkVUVVJOX0NIQVJBQ1RFUiA6XG4gICAgICAgIHByb2Nlc3Muc3Rkb3V0LndyaXRlKExJTkVfRkVFRF9DSEFSQUNURVIpO1xuXG4gICAgICAgIHByb2Nlc3Muc3RkaW4ucmVtb3ZlTGlzdGVuZXIoZXZlbnQsIGxpc3RlbmVyKTtcblxuICAgICAgICBwcm9jZXNzLnN0ZGluLnBhdXNlKCk7XG5cbiAgICAgICAgY2FsbGJhY2soYW5zd2VyKTtcblxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBCQUNLU1BBQ0VfQ0hBUkFDVEVSIDpcbiAgICAgICAgYW5zd2VyID0gYW5zd2VyLnNsaWNlKDAsIGFuc3dlci5sZW5ndGggLSAxKTtcblxuICAgICAgICBicmVhaztcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYW5zd2VyICs9IGNoYXJhY3RlcjtcblxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBFVFhfQ0hBUkFDVEVSIDpcbiAgICAgICAgY29uc29sZS5sb2coQ1RSTF9DKTtcblxuICAgICAgICBwcm9jZXNzLmV4aXQoKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gdmlzaWJsZUlucHV0KGFuc3dlciwgZGVzY3JpcHRpb24sIGVuY29kaW5nLCBjYWxsYmFjaykge1xuICBwcm9jZXNzLnN0ZG91dC53cml0ZShkZXNjcmlwdGlvbik7XG5cbiAgcHJvY2Vzcy5zdGRvdXQud3JpdGUoYW5zd2VyKTtcblxuICBwcm9jZXNzLnN0ZGluLnNldEVuY29kaW5nKGVuY29kaW5nKTtcblxuICBwcm9jZXNzLnN0ZGluLm9uY2UoREFUQV9FVkVOVCwgbGlzdGVuZXIpO1xuXG4gIHByb2Nlc3Muc3RkaW4ucmVzdW1lKCk7XG5cbiAgZnVuY3Rpb24gbGlzdGVuZXIoZGF0YSkge1xuICAgIGNvbnN0IGFuc3dlciA9IGRhdGE7IC8vL1xuXG4gICAgcHJvY2Vzcy5zdGRpbi5wYXVzZSgpO1xuXG4gICAgY2FsbGJhY2soYW5zd2VyKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQUE7Ozs7UUFlQSxLQUFBLEdBQUEsS0FBQTtRQTZCQSxNQUFBLEdBQUEsTUFBQTs7SUExQ0EsYUFBQTtJQVdBLFVBQUE7U0FFQSxLQUFBLENBQUEsT0FBQTtRQWtCQSxNQUFBLFlBQUEsTUFBQTtBQUNBLGVBQUEsQ0FBQSxLQUFBLENBQUEsY0FBQSxDQUFBLEtBQUEsRUFBQSxXQUFBOztRQUdBLFdBQUEsWUFBQSxXQUFBLENBQUEsU0FBQTtZQUNBLFNBQUEsS0F6QkEsVUFBQTtBQTBCQSxtQkFBQTs7O1FBdkJBLEtBQUEsR0FIQSxVQUFBO1FBS0EsT0FBQSxDQUFBLEtBQUEsQ0FBQSxVQUFBO1lBQ0EsT0FBQSxHQUFBLElBQUEsRUFDQSxRQUFBLEdBUEEsVUFBQTtBQVNBLGVBQUEsQ0FBQSxLQUFBLENBQUEsVUFBQSxDQUFBLE9BQUE7QUFFQSxlQUFBLENBQUEsS0FBQSxDQUFBLFdBQUEsQ0FBQSxRQUFBO0FBRUEsZUFBQSxDQUFBLEtBQUEsQ0FBQSxXQUFBLENBQUEsS0FBQSxFQUFBLFdBQUE7QUFFQSxlQUFBLENBQUEs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QUFBLENBQUEsS0FBQSxFQUFBLFFBQUE7QUFFQSx1QkFBQSxDQUFBLEtBQUEsQ0FBQSxLQUFBO0FBRUEsd0JBQUEsQ0FBQSxNQUFBOztpQkExSUEsVUFBQTtBQStJQSxzQkFBQSxHQUFBLE1BQUEsQ0FBQSxLQUFBLENBQUEsQ0FBQSxFQUFBLE1BQUEsQ0FBQSxNQUFBLEdBQUEsQ0FBQTs7O0FBS0Esc0JBQUEsSUFBQSxTQUFBOztpQkFwSkEsVUFBQTtBQXlKQSx1QkFBQSxDQUFBLEdBQUEsQ0F6SkEsVUFBQTtBQTJKQSx1QkFBQSxDQUFBLElBQUE7Ozs7U0FLQSxZQUFBLENBQUEsTUFBQSxFQUFBLFdBQUEsRUFBQSxRQUFBLEVBQUEsUUFBQTtRQVdBLFFBQUEsWUFBQSxRQUFBLENBQUEsSUFBQTtZQUNBLE9BQUEsR0FBQSxJQUFBLENBQUEsQ0FBQSxFQUFBLENBQUE7QUFFQSxlQUFBLENBQUEsS0FBQSxDQUFBLEtBQUE7QUFFQSxnQkFBQSxDQUFBLE9BQUE7O0FBZkEsV0FBQSxDQUFBLE1BQUEsQ0FBQSxLQUFBLENBQUEsV0FBQTtBQUVBLFdBQUEsQ0FBQSxNQUFBLENBQUEsS0FBQSxDQUFBLE1BQUE7QUFFQSxXQUFBLENBQUEsS0FBQSxDQUFBLFdBQUEsQ0FBQSxRQUFBO0FBRUEsV0FBQSxDQUFBLEtBQUEsQ0FBQSxJQUFBLENBdktBLFVBQUEsYUF1S0EsUUFBQTtBQUVBLFdBQUEsQ0FBQSxLQUFBLENBQUEsTUFBQSJ9
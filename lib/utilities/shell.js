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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVzNi91dGlsaXRpZXMvc2hlbGwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHdoaWxzdCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXN5bmNocm9ub3VzXCI7XG5cbmltcG9ydCB7IENUUkxfQyxcbiAgICAgICAgIERBVEFfRVZFTlQsXG4gICAgICAgICBVVEY4X0VOQ09ESU5HLFxuICAgICAgICAgRVRYX0NIQVJBQ1RFUixcbiAgICAgICAgIERFRkFVTFRfRU5DT0RJTkcsXG4gICAgICAgICBERUZBVUxUX0FUVEVNUFRTLFxuICAgICAgICAgQkFDS1NQQUNFX0NIQVJBQ1RFUixcbiAgICAgICAgIExJTkVfRkVFRF9DSEFSQUNURVIsXG4gICAgICAgICBERUZBVUxUX0lOSVRJQUxfQU5TV0VSLFxuICAgICAgICAgQ0FSUklBR0VfUkVUVVJOX0NIQVJBQ1RFUiB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG9uRVRYKGhhbmRsZXIpIHtcbiAgY29uc3QgZXZlbnQgPSBEQVRBX0VWRU5UO1xuXG4gIGlmIChwcm9jZXNzLnN0ZGluLnNldFJhd01vZGUpIHtcbiAgICBjb25zdCByYXdNb2RlID0gdHJ1ZSxcbiAgICAgICAgICBlbmNvZGluZyA9IFVURjhfRU5DT0RJTkc7XG5cbiAgICBwcm9jZXNzLnN0ZGluLnNldFJhd01vZGUocmF3TW9kZSk7XG4gICAgcHJvY2Vzcy5zdGRpbi5zZXRFbmNvZGluZyhlbmNvZGluZyk7XG5cbiAgICBwcm9jZXNzLnN0ZGluLnJlc3VtZSgpO1xuXG4gICAgcHJvY2Vzcy5zdGRpbi5hZGRMaXN0ZW5lcihldmVudCwgZGF0YUhhbmRsZXIpO1xuXG4gICAgcmV0dXJuIG9mZkV4dDtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9mZkV4dCgpIHtcbiAgICBwcm9jZXNzLnN0ZGluLnJlbW92ZUxpc3RlbmVyKGV2ZW50LCBkYXRhSGFuZGxlcik7XG4gIH1cblxuICBmdW5jdGlvbiBkYXRhSGFuZGxlcihjaGFyYWN0ZXIpIHtcbiAgICBpZiAoY2hhcmFjdGVyID09PSBFVFhfQ0hBUkFDVEVSKSB7XG4gICAgICBoYW5kbGVyKCk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9tcHQob3B0aW9ucywgY2FsbGJhY2spIHtcbiAgbGV0IHsgYW5zd2VyID0gbnVsbCB9ID0gb3B0aW9ucztcblxuICBpZiAoYW5zd2VyICE9PSBudWxsKSB7XG4gICAgY2FsbGJhY2soYW5zd2VyKTtcblxuICAgIHJldHVybjtcbiAgfVxuXG4gIGFuc3dlciA9IG51bGw7XG5cbiAgY29uc3QgeyBhdHRlbXB0cyA9IERFRkFVTFRfQVRURU1QVFMgfSA9IG9wdGlvbnMsXG4gICAgICAgIGNvbnRleHQgPSB7XG4gICAgICAgICAgYW5zd2VyLFxuICAgICAgICAgIGF0dGVtcHRzLFxuICAgICAgICAgIG9wdGlvbnNcbiAgICAgICAgfTtcblxuICB3aGlsc3QoYXR0ZW1wdCwgKCkgPT4ge1xuICAgIGNvbnN0IHsgYW5zd2VyIH0gPSBjb250ZXh0O1xuICAgIFxuICAgIGNhbGxiYWNrKGFuc3dlcik7XG4gIH0sIGNvbnRleHQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG9uRVRYLFxuICBwcm9tcHRcbn1cblxuZnVuY3Rpb24gYXR0ZW1wdChuZXh0LCBkb25lLCBjb250ZXh0KSB7XG4gIGxldCB7IGF0dGVtcHRzIH0gPSBjb250ZXh0O1xuXG4gIGNvbnN0IHRlcm1pbmF0ZSA9IChhdHRlbXB0cy0tID09PSAwKTtcbiAgXG4gIGlmICh0ZXJtaW5hdGUpIHtcbiAgICBkb25lKCk7XG4gICAgXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgeyBvcHRpb25zIH0gPSBjb250ZXh0LFxuICAgICAgICB7IGhpZGRlbiA9IGZhbHNlLFxuICAgICAgICAgIGVuY29kaW5nID0gREVGQVVMVF9FTkNPRElORyxcbiAgICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgICBlcnJvck1lc3NhZ2UsXG4gICAgICAgICAgaW5pdGlhbEFuc3dlciA9IERFRkFVTFRfSU5JVElBTF9BTlNXRVIsXG4gICAgICAgICAgdmFsaWRhdGlvblBhdHRlcm4sXG4gICAgICAgICAgdmFsaWRhdGlvbkZ1bmN0aW9uIH0gPSBvcHRpb25zO1xuXG4gIGlucHV0KGRlc2NyaXB0aW9uLCBpbml0aWFsQW5zd2VyLCBlbmNvZGluZywgaGlkZGVuLCBjYWxsYmFjayk7XG5cbiAgZnVuY3Rpb24gY2FsbGJhY2soYW5zd2VyKSB7XG4gICAgY29uc3QgdmFsaWQgPSB2YWxpZGF0aW9uRnVuY3Rpb24gPyAgLy8vXG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25GdW5jdGlvbihhbnN3ZXIpIDpcbiAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uUGF0dGVybi50ZXN0KGFuc3dlcik7XG5cbiAgICBpZiAodmFsaWQpIHtcbiAgICAgIE9iamVjdC5hc3NpZ24oY29udGV4dCwge1xuICAgICAgICBhbnN3ZXJcbiAgICAgIH0pO1xuXG4gICAgICBkb25lKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yTWVzc2FnZSk7XG5cbiAgICAgIE9iamVjdC5hc3NpZ24oY29udGV4dCwge1xuICAgICAgICBhdHRlbXB0c1xuICAgICAgfSk7XG5cbiAgICAgIG5leHQoKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gaW5wdXQoZGVzY3JpcHRpb24sIGluaXRpYWxBbnN3ZXIsIGVuY29kaW5nLCBoaWRkZW4sIGNhbGxiYWNrKSB7XG4gIGxldCBhbnN3ZXIgPSBpbml0aWFsQW5zd2VyOyAvLy9cblxuICBjb25zdCBldmVudCA9IERBVEFfRVZFTlQsXG4gICAgICAgIHJhd01vZGUgPSB0cnVlLFxuICAgICAgICBvZmZFVFggPSBvbkVUWCgoKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coQ1RSTF9DKTtcblxuICAgICAgICAgIHByb2Nlc3MuZXhpdCgpO1xuICAgICAgICB9KTtcblxuICBwcm9jZXNzLnN0ZGluLnNldEVuY29kaW5nKGVuY29kaW5nKTtcblxuICBwcm9jZXNzLnN0ZGluLnNldFJhd01vZGUocmF3TW9kZSk7XG5cbiAgcHJvY2Vzcy5zdGRvdXQud3JpdGUoZGVzY3JpcHRpb24pO1xuXG4gIGlmICghaGlkZGVuKSB7XG4gICAgcHJvY2Vzcy5zdGRvdXQud3JpdGUoYW5zd2VyKTtcbiAgfVxuXG4gIHByb2Nlc3Muc3RkaW4ucmVzdW1lKCk7XG5cbiAgcHJvY2Vzcy5zdGRpbi5vbihldmVudCwgbGlzdGVuZXIpO1xuXG4gIGZ1bmN0aW9uIGxpc3RlbmVyKGNodW5rKSB7XG4gICAgY29uc3QgY2hhcmFjdGVyID0gY2h1bmsudG9TdHJpbmcoZW5jb2RpbmcpO1xuXG4gICAgc3dpdGNoIChjaGFyYWN0ZXIpIHtcbiAgICAgIGNhc2UgTElORV9GRUVEX0NIQVJBQ1RFUiA6XG4gICAgICBjYXNlIENBUlJJQUdFX1JFVFVSTl9DSEFSQUNURVIgOlxuICAgICAgICBwcm9jZXNzLnN0ZG91dC53cml0ZShMSU5FX0ZFRURfQ0hBUkFDVEVSKTtcblxuICAgICAgICBwcm9jZXNzLnN0ZGluLnJlbW92ZUxpc3RlbmVyKGV2ZW50LCBsaXN0ZW5lcik7XG5cbiAgICAgICAgcHJvY2Vzcy5zdGRpbi5wYXVzZSgpO1xuXG4gICAgICAgIG9mZkVUWCgpO1xuXG4gICAgICAgIGNhbGxiYWNrKGFuc3dlcik7XG5cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgQkFDS1NQQUNFX0NIQVJBQ1RFUiA6XG4gICAgICAgIGFuc3dlciA9IGFuc3dlci5zbGljZSgwLCBhbnN3ZXIubGVuZ3RoIC0gMSk7XG5cbiAgICAgICAgcHJvY2Vzcy5zdGRvdXQuY2xlYXJMaW5lKCk7XG5cbiAgICAgICAgcHJvY2Vzcy5zdGRvdXQuY3Vyc29yVG8oMCk7XG5cbiAgICAgICAgcHJvY2Vzcy5zdGRvdXQud3JpdGUoZGVzY3JpcHRpb24pO1xuXG4gICAgICAgIGlmICghaGlkZGVuKSB7XG4gICAgICAgICAgcHJvY2Vzcy5zdGRvdXQud3JpdGUoYW5zd2VyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBhbnN3ZXIgKz0gY2hhcmFjdGVyO1xuXG4gICAgICAgIGlmICghaGlkZGVuKSB7XG4gICAgICAgICAgcHJvY2Vzcy5zdGRvdXQuY2xlYXJMaW5lKCk7XG5cbiAgICAgICAgICBwcm9jZXNzLnN0ZG91dC5jdXJzb3JUbygwKTtcblxuICAgICAgICAgIHByb2Nlc3Muc3Rkb3V0LndyaXRlKGRlc2NyaXB0aW9uKTtcblxuICAgICAgICAgIHByb2Nlc3Muc3Rkb3V0LndyaXRlKGFuc3dlcik7XG4gICAgICAgIH1cblxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O1FBZUEsS0FBQSxHQUFBLEtBQUE7UUE0QkEsTUFBQSxHQUFBLE1BQUE7O0lBekNBLGFBQUE7SUFXQSxVQUFBO0NBYkEsVUFBQTtTQWVBLEtBQUEsQ0FBQSxPQUFBO1FBaUJBLE1BQUEsWUFBQSxNQUFBO0FBQ0EsZUFBQSxDQUFBLEtBQUEsQ0FBQSxjQUFBLENBQUEsS0FBQSxFQUFBLFdBQUE7O1FBR0EsV0FBQSxZQUFBLFdBQUEsQ0FBQSxTQUFBO1lBQ0EsU0FBQSxLQXhCQSxVQUFBO0FBeUJBLG1CQUFBOzs7UUF0QkEsS0FBQSxHQUhBLFVBQUE7UUFLQSxPQUFBLENBQUEsS0FBQSxDQUFBLFVBQUE7WUFDQSxPQUFBLEdBQUEsSUFBQSxFQUNBLFFBQUEsR0FQQSxVQUFBO0FBU0EsZUFBQSxDQUFBLEtBQUEsQ0FBQSxVQUFBLENBQUEsT0FBQTtBQUNBLGVBQUEsQ0FBQSxLQUFBLENBQUEsV0FBQSxDQUFBLFFBQUE7QUFFQSxlQUFBLENBQUEsS0FBQSxDQUFBLE1BQUE7QUFFQSxlQUFBLENBQUEsS0FBQSxDQUFBLFdBQUEsQ0FBQSxLQUFBLEVBQUEsV0FBQTtlQUVBLE1BQUE7OztTQWNBLE1BQUEsQ0FBQSxPQUFBLEVBQUEsUUFBQTtrQkFDQSxP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
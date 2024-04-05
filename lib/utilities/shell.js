"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    default: function() {
        return _default;
    },
    onETX: function() {
        return onETX;
    },
    prompt: function() {
        return prompt;
    }
});
var _asynchronous = require("../utilities/asynchronous");
var _constants = require("../constants");
var _encodings = require("../encodings");
var _defaults = require("../defaults");
var _characters = require("../characters");
function onETX(handler) {
    if (process.stdin.setRawMode) {
        var rawMode = true, encoding = _encodings.UTF8_ENCODING;
        process.stdin.setRawMode(rawMode);
        process.stdin.setEncoding(encoding);
        process.stdin.addListener(_constants.DATA, listener);
        process.stdin.resume();
        return offExt;
    }
    function offExt() {
        process.stdin.removeListener(_constants.DATA, listener);
    }
    function listener(character) {
        if (character === _characters.ETX_CHARACTER) {
            handler();
        }
    }
}
function prompt(options, callback) {
    var _options_answer = options.answer, answer = _options_answer === void 0 ? null : _options_answer;
    if (answer !== null) {
        callback(answer);
        return;
    }
    var _options_attempts = options.attempts, attempts = _options_attempts === void 0 ? _defaults.DEFAULT_ATTEMPTS : _options_attempts, context = {
        answer: answer,
        options: options,
        attempts: attempts
    };
    (0, _asynchronous.whilst)(attempt, function() {
        var answer = context.answer;
        callback(answer);
    }, context);
}
var _default = {
    onETX: onETX,
    prompt: prompt
};
function attempt(next, done, context) {
    var attempts = context.attempts;
    var terminate = attempts-- === 0;
    if (terminate) {
        done();
        return;
    }
    var options = context.options, _options_hidden = options.hidden, hidden = _options_hidden === void 0 ? false : _options_hidden, _options_encoding = options.encoding, encoding = _options_encoding === void 0 ? _defaults.DEFAULT_ENCODING : _options_encoding, description = options.description, errorMessage = options.errorMessage, _options_initialAnswer = options.initialAnswer, initialAnswer = _options_initialAnswer === void 0 ? _defaults.DEFAULT_INITIAL_ANSWER : _options_initialAnswer, _options_validationPattern = options.validationPattern, validationPattern = _options_validationPattern === void 0 ? null : _options_validationPattern, _options_validationFunction = options.validationFunction, validationFunction = _options_validationFunction === void 0 ? null : _options_validationFunction;
    input(initialAnswer, hidden, description, encoding, callback);
    function callback(answer) {
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
    }
}
function input(initialAnswer, hidden, description, encoding, callback) {
    var answer = initialAnswer; ///
    var rawMode = true;
    process.stdout.write(description);
    if (!hidden) {
        process.stdout.write(initialAnswer);
    }
    process.stdin.setRawMode(rawMode);
    process.stdin.setEncoding(encoding);
    process.stdin.addListener(_constants.DATA, listener);
    process.stdin.resume();
    function listener(data) {
        var character = data.toString(encoding);
        switch(character){
            case _characters.NEW_LINE_CHARACTER:
            case _characters.CARRIAGE_RETURN_CHARACTER:
                {
                    process.stdout.write(_characters.NEW_LINE_CHARACTER);
                    process.stdin.removeListener(_constants.DATA, listener);
                    process.stdin.pause();
                    callback(answer);
                    break;
                }
            case _characters.UP_CHARACTER:
            case _characters.DOWN_CHARACTER:
            case _characters.LEFT_CHARACTER:
            case _characters.RIGHT_CHARACTER:
                {
                    break;
                }
            case _characters.BACKSPACE_CHARACTER:
                {
                    var answerLength = answer.length, start = 0, end = answerLength - 1;
                    answer = answer.slice(start, end);
                    if (!hidden) {
                        process.stdout.clearLine();
                        process.stdout.cursorTo(0);
                        process.stdout.write(description);
                        process.stdout.write(answer);
                    }
                    break;
                }
            default:
                answer += character;
                if (!hidden) {
                    process.stdout.write(character);
                }
                break;
            case _characters.ETX_CHARACTER:
                console.log(_characters.CTRL_C_CHARACTER);
                process.exit();
        }
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvc2hlbGwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHdoaWxzdCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXN5bmNocm9ub3VzXCI7XG5cbmltcG9ydCB7IERBVEEgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBVVEY4X0VOQ09ESU5HIH0gZnJvbSBcIi4uL2VuY29kaW5nc1wiO1xuaW1wb3J0IHsgREVGQVVMVF9FTkNPRElORywgREVGQVVMVF9BVFRFTVBUUywgREVGQVVMVF9JTklUSUFMX0FOU1dFUiB9IGZyb20gXCIuLi9kZWZhdWx0c1wiO1xuaW1wb3J0IHsgVVBfQ0hBUkFDVEVSLFxuICAgICAgICAgRVRYX0NIQVJBQ1RFUixcbiAgICAgICAgIERPV05fQ0hBUkFDVEVSLFxuICAgICAgICAgTEVGVF9DSEFSQUNURVIsXG4gICAgICAgICBSSUdIVF9DSEFSQUNURVIsXG4gICAgICAgICBDVFJMX0NfQ0hBUkFDVEVSLFxuICAgICAgICAgTkVXX0xJTkVfQ0hBUkFDVEVSLFxuICAgICAgICAgQkFDS1NQQUNFX0NIQVJBQ1RFUixcbiAgICAgICAgIENBUlJJQUdFX1JFVFVSTl9DSEFSQUNURVIgfSBmcm9tIFwiLi4vY2hhcmFjdGVyc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gb25FVFgoaGFuZGxlcikge1xuICBpZiAocHJvY2Vzcy5zdGRpbi5zZXRSYXdNb2RlKSB7XG4gICAgY29uc3QgcmF3TW9kZSA9IHRydWUsXG4gICAgICAgICAgZW5jb2RpbmcgPSBVVEY4X0VOQ09ESU5HO1xuXG4gICAgcHJvY2Vzcy5zdGRpbi5zZXRSYXdNb2RlKHJhd01vZGUpO1xuXG4gICAgcHJvY2Vzcy5zdGRpbi5zZXRFbmNvZGluZyhlbmNvZGluZyk7XG5cbiAgICBwcm9jZXNzLnN0ZGluLmFkZExpc3RlbmVyKERBVEEsIGxpc3RlbmVyKTtcblxuICAgIHByb2Nlc3Muc3RkaW4ucmVzdW1lKCk7XG5cbiAgICByZXR1cm4gb2ZmRXh0O1xuICB9XG5cbiAgZnVuY3Rpb24gb2ZmRXh0KCkge1xuICAgIHByb2Nlc3Muc3RkaW4ucmVtb3ZlTGlzdGVuZXIoREFUQSwgbGlzdGVuZXIpO1xuICB9XG5cbiAgZnVuY3Rpb24gbGlzdGVuZXIoY2hhcmFjdGVyKSB7XG4gICAgaWYgKGNoYXJhY3RlciA9PT0gRVRYX0NIQVJBQ1RFUikge1xuICAgICAgaGFuZGxlcigpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvbXB0KG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gIGxldCB7IGFuc3dlciA9IG51bGwgfSA9IG9wdGlvbnM7XG5cbiAgaWYgKGFuc3dlciAhPT0gbnVsbCkge1xuICAgIGNhbGxiYWNrKGFuc3dlcik7XG5cbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCB7IGF0dGVtcHRzID0gREVGQVVMVF9BVFRFTVBUUyB9ID0gb3B0aW9ucyxcbiAgICAgICAgY29udGV4dCA9IHtcbiAgICAgICAgICBhbnN3ZXIsXG4gICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICBhdHRlbXB0c1xuICAgICAgICB9O1xuXG4gIHdoaWxzdChhdHRlbXB0LCAoKSA9PiB7XG4gICAgY29uc3QgeyBhbnN3ZXIgfSA9IGNvbnRleHQ7XG4gICAgXG4gICAgY2FsbGJhY2soYW5zd2VyKTtcbiAgfSwgY29udGV4dCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgb25FVFgsXG4gIHByb21wdFxufVxuXG5mdW5jdGlvbiBhdHRlbXB0KG5leHQsIGRvbmUsIGNvbnRleHQpIHtcbiAgbGV0IHsgYXR0ZW1wdHMgfSA9IGNvbnRleHQ7XG5cbiAgY29uc3QgdGVybWluYXRlID0gKGF0dGVtcHRzLS0gPT09IDApO1xuICBcbiAgaWYgKHRlcm1pbmF0ZSkge1xuICAgIGRvbmUoKTtcbiAgICBcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCB7IG9wdGlvbnMgfSA9IGNvbnRleHQsXG4gICAgICAgIHsgaGlkZGVuID0gZmFsc2UsXG4gICAgICAgICAgZW5jb2RpbmcgPSBERUZBVUxUX0VOQ09ESU5HLFxuICAgICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgICAgIGVycm9yTWVzc2FnZSxcbiAgICAgICAgICBpbml0aWFsQW5zd2VyID0gREVGQVVMVF9JTklUSUFMX0FOU1dFUixcbiAgICAgICAgICB2YWxpZGF0aW9uUGF0dGVybiA9IG51bGwsXG4gICAgICAgICAgdmFsaWRhdGlvbkZ1bmN0aW9uID0gbnVsbCB9ID0gb3B0aW9ucztcblxuICBpbnB1dChpbml0aWFsQW5zd2VyLCBoaWRkZW4sIGRlc2NyaXB0aW9uLCBlbmNvZGluZywgY2FsbGJhY2spO1xuXG4gIGZ1bmN0aW9uIGNhbGxiYWNrKGFuc3dlcikge1xuICAgIGNvbnN0IHZhbGlkID0gdmFsaWRhdGlvbkZ1bmN0aW9uID8gIC8vL1xuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uRnVuY3Rpb24oYW5zd2VyKSA6XG4gICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvblBhdHRlcm4udGVzdChhbnN3ZXIpO1xuXG4gICAgaWYgKHZhbGlkKSB7XG4gICAgICBPYmplY3QuYXNzaWduKGNvbnRleHQsIHtcbiAgICAgICAgYW5zd2VyXG4gICAgICB9KTtcblxuICAgICAgZG9uZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvck1lc3NhZ2UpO1xuXG4gICAgICBPYmplY3QuYXNzaWduKGNvbnRleHQsIHtcbiAgICAgICAgYXR0ZW1wdHNcbiAgICAgIH0pO1xuXG4gICAgICBuZXh0KCk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGlucHV0KGluaXRpYWxBbnN3ZXIsIGhpZGRlbiwgZGVzY3JpcHRpb24sIGVuY29kaW5nLCBjYWxsYmFjaykge1xuICBsZXQgYW5zd2VyID0gaW5pdGlhbEFuc3dlcjsgLy8vXG5cbiAgY29uc3QgcmF3TW9kZSA9IHRydWU7XG5cbiAgcHJvY2Vzcy5zdGRvdXQud3JpdGUoZGVzY3JpcHRpb24pO1xuXG4gIGlmICghaGlkZGVuKSB7XG4gICAgcHJvY2Vzcy5zdGRvdXQud3JpdGUoaW5pdGlhbEFuc3dlcik7XG4gIH1cblxuICBwcm9jZXNzLnN0ZGluLnNldFJhd01vZGUocmF3TW9kZSk7XG5cbiAgcHJvY2Vzcy5zdGRpbi5zZXRFbmNvZGluZyhlbmNvZGluZyk7XG5cbiAgcHJvY2Vzcy5zdGRpbi5hZGRMaXN0ZW5lcihEQVRBLCBsaXN0ZW5lcik7XG5cbiAgcHJvY2Vzcy5zdGRpbi5yZXN1bWUoKTtcblxuICBmdW5jdGlvbiBsaXN0ZW5lcihkYXRhKSB7XG4gICAgY29uc3QgY2hhcmFjdGVyID0gZGF0YS50b1N0cmluZyhlbmNvZGluZyk7XG5cbiAgICBzd2l0Y2ggKGNoYXJhY3Rlcikge1xuICAgICAgY2FzZSBORVdfTElORV9DSEFSQUNURVI6XG4gICAgICBjYXNlIENBUlJJQUdFX1JFVFVSTl9DSEFSQUNURVI6IHtcbiAgICAgICAgcHJvY2Vzcy5zdGRvdXQud3JpdGUoTkVXX0xJTkVfQ0hBUkFDVEVSKTtcblxuICAgICAgICBwcm9jZXNzLnN0ZGluLnJlbW92ZUxpc3RlbmVyKERBVEEsIGxpc3RlbmVyKTtcblxuICAgICAgICBwcm9jZXNzLnN0ZGluLnBhdXNlKCk7XG5cbiAgICAgICAgY2FsbGJhY2soYW5zd2VyKTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBVUF9DSEFSQUNURVI6XG4gICAgICBjYXNlIERPV05fQ0hBUkFDVEVSOlxuICAgICAgY2FzZSBMRUZUX0NIQVJBQ1RFUjpcbiAgICAgIGNhc2UgUklHSFRfQ0hBUkFDVEVSOiB7XG4gICAgICAgIC8vL1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIEJBQ0tTUEFDRV9DSEFSQUNURVI6IHtcbiAgICAgICAgY29uc3QgYW5zd2VyTGVuZ3RoID0gYW5zd2VyLmxlbmd0aCxcbiAgICAgICAgICBzdGFydCA9IDAsXG4gICAgICAgICAgZW5kID0gYW5zd2VyTGVuZ3RoIC0gMTtcblxuICAgICAgICBhbnN3ZXIgPSBhbnN3ZXIuc2xpY2Uoc3RhcnQsIGVuZCk7XG5cbiAgICAgICAgaWYgKCFoaWRkZW4pIHtcbiAgICAgICAgICBwcm9jZXNzLnN0ZG91dC5jbGVhckxpbmUoKTtcblxuICAgICAgICAgIHByb2Nlc3Muc3Rkb3V0LmN1cnNvclRvKDApO1xuXG4gICAgICAgICAgcHJvY2Vzcy5zdGRvdXQud3JpdGUoZGVzY3JpcHRpb24pO1xuXG4gICAgICAgICAgcHJvY2Vzcy5zdGRvdXQud3JpdGUoYW5zd2VyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBhbnN3ZXIgKz0gY2hhcmFjdGVyO1xuXG4gICAgICAgIGlmICghaGlkZGVuKSB7XG4gICAgICAgICAgcHJvY2Vzcy5zdGRvdXQud3JpdGUoY2hhcmFjdGVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIEVUWF9DSEFSQUNURVI6XG4gICAgICAgIGNvbnNvbGUubG9nKENUUkxfQ19DSEFSQUNURVIpO1xuXG4gICAgICAgIHByb2Nlc3MuZXhpdCgpO1xuICAgIH1cbiAgfVxufSJdLCJuYW1lcyI6WyJvbkVUWCIsInByb21wdCIsImhhbmRsZXIiLCJwcm9jZXNzIiwic3RkaW4iLCJzZXRSYXdNb2RlIiwicmF3TW9kZSIsImVuY29kaW5nIiwiVVRGOF9FTkNPRElORyIsInNldEVuY29kaW5nIiwiYWRkTGlzdGVuZXIiLCJEQVRBIiwibGlzdGVuZXIiLCJyZXN1bWUiLCJvZmZFeHQiLCJyZW1vdmVMaXN0ZW5lciIsImNoYXJhY3RlciIsIkVUWF9DSEFSQUNURVIiLCJvcHRpb25zIiwiY2FsbGJhY2siLCJhbnN3ZXIiLCJhdHRlbXB0cyIsIkRFRkFVTFRfQVRURU1QVFMiLCJjb250ZXh0Iiwid2hpbHN0IiwiYXR0ZW1wdCIsIm5leHQiLCJkb25lIiwidGVybWluYXRlIiwiaGlkZGVuIiwiREVGQVVMVF9FTkNPRElORyIsImRlc2NyaXB0aW9uIiwiZXJyb3JNZXNzYWdlIiwiaW5pdGlhbEFuc3dlciIsIkRFRkFVTFRfSU5JVElBTF9BTlNXRVIiLCJ2YWxpZGF0aW9uUGF0dGVybiIsInZhbGlkYXRpb25GdW5jdGlvbiIsImlucHV0IiwidmFsaWQiLCJ0ZXN0IiwiT2JqZWN0IiwiYXNzaWduIiwiY29uc29sZSIsImxvZyIsInN0ZG91dCIsIndyaXRlIiwiZGF0YSIsInRvU3RyaW5nIiwiTkVXX0xJTkVfQ0hBUkFDVEVSIiwiQ0FSUklBR0VfUkVUVVJOX0NIQVJBQ1RFUiIsInBhdXNlIiwiVVBfQ0hBUkFDVEVSIiwiRE9XTl9DSEFSQUNURVIiLCJMRUZUX0NIQVJBQ1RFUiIsIlJJR0hUX0NIQVJBQ1RFUiIsIkJBQ0tTUEFDRV9DSEFSQUNURVIiLCJhbnN3ZXJMZW5ndGgiLCJsZW5ndGgiLCJzdGFydCIsImVuZCIsInNsaWNlIiwiY2xlYXJMaW5lIiwiY3Vyc29yVG8iLCJDVFJMX0NfQ0hBUkFDVEVSIiwiZXhpdCJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFtRUEsT0FHQztlQUhEOztJQWxEZ0JBLEtBQUs7ZUFBTEE7O0lBMkJBQyxNQUFNO2VBQU5BOzs7NEJBMUNPO3lCQUVGO3lCQUNTO3dCQUM2QzswQkFTakM7QUFFbkMsU0FBU0QsTUFBTUUsT0FBTztJQUMzQixJQUFJQyxRQUFRQyxLQUFLLENBQUNDLFVBQVUsRUFBRTtRQUM1QixJQUFNQyxVQUFVLE1BQ1ZDLFdBQVdDLHdCQUFhO1FBRTlCTCxRQUFRQyxLQUFLLENBQUNDLFVBQVUsQ0FBQ0M7UUFFekJILFFBQVFDLEtBQUssQ0FBQ0ssV0FBVyxDQUFD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
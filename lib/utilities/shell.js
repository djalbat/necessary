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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvc2hlbGwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHdoaWxzdCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXN5bmNocm9ub3VzXCI7XG5cbmltcG9ydCB7IERBVEEgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBVVEY4X0VOQ09ESU5HIH0gZnJvbSBcIi4uL2VuY29kaW5nc1wiO1xuaW1wb3J0IHsgREVGQVVMVF9FTkNPRElORywgREVGQVVMVF9BVFRFTVBUUywgREVGQVVMVF9JTklUSUFMX0FOU1dFUiB9IGZyb20gXCIuLi9kZWZhdWx0c1wiO1xuaW1wb3J0IHsgVVBfQ0hBUkFDVEVSLFxuICAgICAgICAgRVRYX0NIQVJBQ1RFUixcbiAgICAgICAgIERPV05fQ0hBUkFDVEVSLFxuICAgICAgICAgTEVGVF9DSEFSQUNURVIsXG4gICAgICAgICBSSUdIVF9DSEFSQUNURVIsXG4gICAgICAgICBDVFJMX0NfQ0hBUkFDVEVSLFxuICAgICAgICAgTkVXX0xJTkVfQ0hBUkFDVEVSLFxuICAgICAgICAgQkFDS1NQQUNFX0NIQVJBQ1RFUixcbiAgICAgICAgIENBUlJJQUdFX1JFVFVSTl9DSEFSQUNURVIgfSBmcm9tIFwiLi4vY2hhcmFjdGVyc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gb25FVFgoaGFuZGxlcikge1xuICBpZiAocHJvY2Vzcy5zdGRpbi5zZXRSYXdNb2RlKSB7XG4gICAgY29uc3QgcmF3TW9kZSA9IHRydWUsXG4gICAgICAgICAgZW5jb2RpbmcgPSBVVEY4X0VOQ09ESU5HO1xuXG4gICAgcHJvY2Vzcy5zdGRpbi5zZXRSYXdNb2RlKHJhd01vZGUpO1xuXG4gICAgcHJvY2Vzcy5zdGRpbi5zZXRFbmNvZGluZyhlbmNvZGluZyk7XG5cbiAgICBwcm9jZXNzLnN0ZGluLmFkZExpc3RlbmVyKERBVEEsIGxpc3RlbmVyKTtcblxuICAgIHByb2Nlc3Muc3RkaW4ucmVzdW1lKCk7XG5cbiAgICByZXR1cm4gb2ZmRXh0O1xuICB9XG5cbiAgZnVuY3Rpb24gb2ZmRXh0KCkge1xuICAgIHByb2Nlc3Muc3RkaW4ucmVtb3ZlTGlzdGVuZXIoREFUQSwgbGlzdGVuZXIpO1xuICB9XG5cbiAgZnVuY3Rpb24gbGlzdGVuZXIoY2hhcmFjdGVyKSB7XG4gICAgaWYgKGNoYXJhY3RlciA9PT0gRVRYX0NIQVJBQ1RFUikge1xuICAgICAgaGFuZGxlcigpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvbXB0KG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gIGxldCB7IGFuc3dlciA9IG51bGwgfSA9IG9wdGlvbnM7XG5cbiAgaWYgKGFuc3dlciAhPT0gbnVsbCkge1xuICAgIGNhbGxiYWNrKGFuc3dlcik7XG5cbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCB7IGF0dGVtcHRzID0gREVGQVVMVF9BVFRFTVBUUyB9ID0gb3B0aW9ucyxcbiAgICAgICAgY29udGV4dCA9IHtcbiAgICAgICAgICBhbnN3ZXIsXG4gICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICBhdHRlbXB0c1xuICAgICAgICB9O1xuXG4gIHdoaWxzdChhdHRlbXB0LCAoKSA9PiB7XG4gICAgY29uc3QgeyBhbnN3ZXIgfSA9IGNvbnRleHQ7XG4gICAgXG4gICAgY2FsbGJhY2soYW5zd2VyKTtcbiAgfSwgY29udGV4dCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgb25FVFgsXG4gIHByb21wdFxufVxuXG5mdW5jdGlvbiBhdHRlbXB0KG5leHQsIGRvbmUsIGNvbnRleHQpIHtcbiAgbGV0IHsgYXR0ZW1wdHMgfSA9IGNvbnRleHQ7XG5cbiAgY29uc3QgdGVybWluYXRlID0gKGF0dGVtcHRzLS0gPT09IDApO1xuICBcbiAgaWYgKHRlcm1pbmF0ZSkge1xuICAgIGRvbmUoKTtcbiAgICBcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCB7IG9wdGlvbnMgfSA9IGNvbnRleHQsXG4gICAgICAgIHsgaGlkZGVuID0gZmFsc2UsXG4gICAgICAgICAgZW5jb2RpbmcgPSBERUZBVUxUX0VOQ09ESU5HLFxuICAgICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgICAgIGVycm9yTWVzc2FnZSxcbiAgICAgICAgICBpbml0aWFsQW5zd2VyID0gREVGQVVMVF9JTklUSUFMX0FOU1dFUixcbiAgICAgICAgICB2YWxpZGF0aW9uUGF0dGVybiA9IG51bGwsXG4gICAgICAgICAgdmFsaWRhdGlvbkZ1bmN0aW9uID0gbnVsbCB9ID0gb3B0aW9ucztcblxuICBpbnB1dChpbml0aWFsQW5zd2VyLCBoaWRkZW4sIGRlc2NyaXB0aW9uLCBlbmNvZGluZywgY2FsbGJhY2spO1xuXG4gIGZ1bmN0aW9uIGNhbGxiYWNrKGFuc3dlcikge1xuICAgIGNvbnN0IHZhbGlkID0gdmFsaWRhdGlvbkZ1bmN0aW9uID8gIC8vL1xuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uRnVuY3Rpb24oYW5zd2VyKSA6XG4gICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvblBhdHRlcm4udGVzdChhbnN3ZXIpO1xuXG4gICAgaWYgKHZhbGlkKSB7XG4gICAgICBPYmplY3QuYXNzaWduKGNvbnRleHQsIHtcbiAgICAgICAgYW5zd2VyXG4gICAgICB9KTtcblxuICAgICAgZG9uZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvck1lc3NhZ2UpO1xuXG4gICAgICBPYmplY3QuYXNzaWduKGNvbnRleHQsIHtcbiAgICAgICAgYXR0ZW1wdHNcbiAgICAgIH0pO1xuXG4gICAgICBuZXh0KCk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGlucHV0KGluaXRpYWxBbnN3ZXIsIGhpZGRlbiwgZGVzY3JpcHRpb24sIGVuY29kaW5nLCBjYWxsYmFjaykge1xuICBsZXQgYW5zd2VyID0gaW5pdGlhbEFuc3dlcjsgLy8vXG5cbiAgY29uc3QgcmF3TW9kZSA9IHRydWU7XG5cbiAgcHJvY2Vzcy5zdGRvdXQud3JpdGUoZGVzY3JpcHRpb24pO1xuXG4gIGlmICghaGlkZGVuKSB7XG4gICAgcHJvY2Vzcy5zdGRvdXQud3JpdGUoaW5pdGlhbEFuc3dlcik7XG4gIH1cblxuICBwcm9jZXNzLnN0ZGluLnNldFJhd01vZGUocmF3TW9kZSk7XG5cbiAgcHJvY2Vzcy5zdGRpbi5zZXRFbmNvZGluZyhlbmNvZGluZyk7XG5cbiAgcHJvY2Vzcy5zdGRpbi5hZGRMaXN0ZW5lcihEQVRBLCBsaXN0ZW5lcik7XG5cbiAgcHJvY2Vzcy5zdGRpbi5yZXN1bWUoKTtcblxuICBmdW5jdGlvbiBsaXN0ZW5lcihkYXRhKSB7XG4gICAgY29uc3QgY2hhcmFjdGVyID0gZGF0YS50b1N0cmluZyhlbmNvZGluZyk7XG5cbiAgICBzd2l0Y2ggKGNoYXJhY3Rlcikge1xuICAgICAgY2FzZSBORVdfTElORV9DSEFSQUNURVI6XG4gICAgICBjYXNlIENBUlJJQUdFX1JFVFVSTl9DSEFSQUNURVI6IHtcbiAgICAgICAgcHJvY2Vzcy5zdGRvdXQud3JpdGUoTkVXX0xJTkVfQ0hBUkFDVEVSKTtcblxuICAgICAgICBwcm9jZXNzLnN0ZGluLnJlbW92ZUxpc3RlbmVyKERBVEEsIGxpc3RlbmVyKTtcblxuICAgICAgICBwcm9jZXNzLnN0ZGluLnBhdXNlKCk7XG5cbiAgICAgICAgY2FsbGJhY2soYW5zd2VyKTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBVUF9DSEFSQUNURVI6XG4gICAgICBjYXNlIERPV05fQ0hBUkFDVEVSOlxuICAgICAgY2FzZSBMRUZUX0NIQVJBQ1RFUjpcbiAgICAgIGNhc2UgUklHSFRfQ0hBUkFDVEVSOiB7XG4gICAgICAgIC8vL1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIEJBQ0tTUEFDRV9DSEFSQUNURVI6IHtcbiAgICAgICAgY29uc3QgYW5zd2VyTGVuZ3RoID0gYW5zd2VyLmxlbmd0aCxcbiAgICAgICAgICBzdGFydCA9IDAsXG4gICAgICAgICAgZW5kID0gYW5zd2VyTGVuZ3RoIC0gMTtcblxuICAgICAgICBhbnN3ZXIgPSBhbnN3ZXIuc2xpY2Uoc3RhcnQsIGVuZCk7XG5cbiAgICAgICAgaWYgKCFoaWRkZW4pIHtcbiAgICAgICAgICBwcm9jZXNzLnN0ZG91dC5jbGVhckxpbmUoKTtcblxuICAgICAgICAgIHByb2Nlc3Muc3Rkb3V0LmN1cnNvclRvKDApO1xuXG4gICAgICAgICAgcHJvY2Vzcy5zdGRvdXQud3JpdGUoZGVzY3JpcHRpb24pO1xuXG4gICAgICAgICAgcHJvY2Vzcy5zdGRvdXQud3JpdGUoYW5zd2VyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBhbnN3ZXIgKz0gY2hhcmFjdGVyO1xuXG4gICAgICAgIGlmICghaGlkZGVuKSB7XG4gICAgICAgICAgcHJvY2Vzcy5zdGRvdXQud3JpdGUoY2hhcmFjdGVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIEVUWF9DSEFSQUNURVI6XG4gICAgICAgIGNvbnNvbGUubG9nKENUUkxfQ19DSEFSQUNURVIpO1xuXG4gICAgICAgIHByb2Nlc3MuZXhpdCgpO1xuICAgIH1cbiAgfVxufSJdLCJuYW1lcyI6WyJvbkVUWCIsInByb21wdCIsImhhbmRsZXIiLCJwcm9jZXNzIiwic3RkaW4iLCJzZXRSYXdNb2RlIiwicmF3TW9kZSIsImVuY29kaW5nIiwiVVRGOF9FTkNPRElORyIsInNldEVuY29kaW5nIiwiYWRkTGlzdGVuZXIiLCJEQVRBIiwibGlzdGVuZXIiLCJyZXN1bWUiLCJvZmZFeHQiLCJyZW1vdmVMaXN0ZW5lciIsImNoYXJhY3RlciIsIkVUWF9DSEFSQUNURVIiLCJvcHRpb25zIiwiY2FsbGJhY2siLCJhbnN3ZXIiLCJhdHRlbXB0cyIsIkRFRkFVTFRfQVRURU1QVFMiLCJjb250ZXh0Iiwid2hpbHN0IiwiYXR0ZW1wdCIsIm5leHQiLCJkb25lIiwidGVybWluYXRlIiwiaGlkZGVuIiwiREVGQVVMVF9FTkNPRElORyIsImRlc2NyaXB0aW9uIiwiZXJyb3JNZXNzYWdlIiwiaW5pdGlhbEFuc3dlciIsIkRFRkFVTFRfSU5JVElBTF9BTlNXRVIiLCJ2YWxpZGF0aW9uUGF0dGVybiIsInZhbGlkYXRpb25GdW5jdGlvbiIsImlucHV0IiwidmFsaWQiLCJ0ZXN0IiwiT2JqZWN0IiwiYXNzaWduIiwiY29uc29sZSIsImxvZyIsInN0ZG91dCIsIndyaXRlIiwiZGF0YSIsInRvU3RyaW5nIiwiTkVXX0xJTkVfQ0hBUkFDVEVSIiwiQ0FSUklBR0VfUkVUVVJOX0NIQVJBQ1RFUiIsInBhdXNlIiwiVVBfQ0hBUkFDVEVSIiwiRE9XTl9DSEFSQUNURVIiLCJMRUZUX0NIQVJBQ1RFUiIsIlJJR0hUX0NIQVJBQ1RFUiIsIkJBQ0tTUEFDRV9DSEFSQUNURVIiLCJhbnN3ZXJMZW5ndGgiLCJsZW5ndGgiLCJzdGFydCIsImVuZCIsInNsaWNlIiwiY2xlYXJMaW5lIiwiY3Vyc29yVG8iLCJDVFJMX0NfQ0hBUkFDVEVSIiwiZXhpdCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBbUVBLE9BR0M7ZUFIRDs7SUFsRGdCQSxLQUFLO2VBQUxBOztJQTJCQUMsTUFBTTtlQUFOQTs7OzRCQTFDTzt5QkFFRjt5QkFDUzt3QkFDNkM7MEJBU2pDO0FBRW5DLFNBQVNELE1BQU1FLE9BQU87SUFDM0IsSUFBSUMsUUFBUUMsS0FBSyxDQUFDQyxVQUFVLEVBQUU7UUFDNUIsSUFBTUMsVUFBVSxNQUNWQyxXQUFXQyx3QkFBYTtRQUU5QkwsUUFBUUMsS0FBSyxDQUFDQyxVQUFVLENBQUNDO1FBRXpCSCxRQUFRQyxLQUFLLENBQUNLLFdBQVcsQ0FBQ0Y7UUFFMUJKLFFBQVFDLEtBQUssQ0FBQ00sV0FBVyxDQUFDQyxlQUFJLEVBQUVDO1FBRWhDVCxRQUFRQyxLQUFLLENBQUNTLE1BQU07UUFFcEIsT0FBT0M7SUFDVDtJQUVBLFNBQVNBO1FBQ1BYLFFBQVFDLEtBQUssQ0FBQ1csY0FBYyxDQUFDSixlQUFJLEVBQUVDO0lBQ3JDO0lBRUEs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
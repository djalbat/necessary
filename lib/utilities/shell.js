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
    prompt: function() {
        return prompt;
    }
});
var _asynchronous = require("../utilities/asynchronous");
var _constants = require("../constants");
var _defaults = require("../defaults");
var _characters = require("../characters");
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
            case _characters.ETX_CHARACTER:
                {
                    console.log(_characters.CTRL_C_CHARACTER);
                    process.exit();
                    break;
                }
            default:
                {
                    answer += character;
                    if (!hidden) {
                        process.stdout.write(character);
                    }
                    break;
                }
        }
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvc2hlbGwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHdoaWxzdCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXN5bmNocm9ub3VzXCI7XG5cbmltcG9ydCB7IERBVEEgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBERUZBVUxUX0VOQ09ESU5HLCBERUZBVUxUX0FUVEVNUFRTLCBERUZBVUxUX0lOSVRJQUxfQU5TV0VSIH0gZnJvbSBcIi4uL2RlZmF1bHRzXCI7XG5pbXBvcnQgeyBVUF9DSEFSQUNURVIsXG4gICAgICAgICBFVFhfQ0hBUkFDVEVSLFxuICAgICAgICAgRE9XTl9DSEFSQUNURVIsXG4gICAgICAgICBMRUZUX0NIQVJBQ1RFUixcbiAgICAgICAgIFJJR0hUX0NIQVJBQ1RFUixcbiAgICAgICAgIENUUkxfQ19DSEFSQUNURVIsXG4gICAgICAgICBORVdfTElORV9DSEFSQUNURVIsXG4gICAgICAgICBCQUNLU1BBQ0VfQ0hBUkFDVEVSLFxuICAgICAgICAgQ0FSUklBR0VfUkVUVVJOX0NIQVJBQ1RFUiB9IGZyb20gXCIuLi9jaGFyYWN0ZXJzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9tcHQob3B0aW9ucywgY2FsbGJhY2spIHtcbiAgbGV0IHsgYW5zd2VyID0gbnVsbCB9ID0gb3B0aW9ucztcblxuICBpZiAoYW5zd2VyICE9PSBudWxsKSB7XG4gICAgY2FsbGJhY2soYW5zd2VyKTtcblxuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IHsgYXR0ZW1wdHMgPSBERUZBVUxUX0FUVEVNUFRTIH0gPSBvcHRpb25zLFxuICAgICAgICBjb250ZXh0ID0ge1xuICAgICAgICAgIGFuc3dlcixcbiAgICAgICAgICBvcHRpb25zLFxuICAgICAgICAgIGF0dGVtcHRzXG4gICAgICAgIH07XG5cbiAgd2hpbHN0KGF0dGVtcHQsICgpID0+IHtcbiAgICBjb25zdCB7IGFuc3dlciB9ID0gY29udGV4dDtcbiAgICBcbiAgICBjYWxsYmFjayhhbnN3ZXIpO1xuICB9LCBjb250ZXh0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBwcm9tcHRcbn1cblxuZnVuY3Rpb24gYXR0ZW1wdChuZXh0LCBkb25lLCBjb250ZXh0KSB7XG4gIGxldCB7IGF0dGVtcHRzIH0gPSBjb250ZXh0O1xuXG4gIGNvbnN0IHRlcm1pbmF0ZSA9IChhdHRlbXB0cy0tID09PSAwKTtcbiAgXG4gIGlmICh0ZXJtaW5hdGUpIHtcbiAgICBkb25lKCk7XG4gICAgXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgeyBvcHRpb25zIH0gPSBjb250ZXh0LFxuICAgICAgICB7IGhpZGRlbiA9IGZhbHNlLFxuICAgICAgICAgIGVuY29kaW5nID0gREVGQVVMVF9FTkNPRElORyxcbiAgICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgICBlcnJvck1lc3NhZ2UsXG4gICAgICAgICAgaW5pdGlhbEFuc3dlciA9IERFRkFVTFRfSU5JVElBTF9BTlNXRVIsXG4gICAgICAgICAgdmFsaWRhdGlvblBhdHRlcm4gPSBudWxsLFxuICAgICAgICAgIHZhbGlkYXRpb25GdW5jdGlvbiA9IG51bGwgfSA9IG9wdGlvbnM7XG5cbiAgaW5wdXQoaW5pdGlhbEFuc3dlciwgaGlkZGVuLCBkZXNjcmlwdGlvbiwgZW5jb2RpbmcsIGNhbGxiYWNrKTtcblxuICBmdW5jdGlvbiBjYWxsYmFjayhhbnN3ZXIpIHtcbiAgICBjb25zdCB2YWxpZCA9IHZhbGlkYXRpb25GdW5jdGlvbiA/ICAvLy9cbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbkZ1bmN0aW9uKGFuc3dlcikgOlxuICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25QYXR0ZXJuLnRlc3QoYW5zd2VyKTtcblxuICAgIGlmICh2YWxpZCkge1xuICAgICAgT2JqZWN0LmFzc2lnbihjb250ZXh0LCB7XG4gICAgICAgIGFuc3dlclxuICAgICAgfSk7XG5cbiAgICAgIGRvbmUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coZXJyb3JNZXNzYWdlKTtcblxuICAgICAgT2JqZWN0LmFzc2lnbihjb250ZXh0LCB7XG4gICAgICAgIGF0dGVtcHRzXG4gICAgICB9KTtcblxuICAgICAgbmV4dCgpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBpbnB1dChpbml0aWFsQW5zd2VyLCBoaWRkZW4sIGRlc2NyaXB0aW9uLCBlbmNvZGluZywgY2FsbGJhY2spIHtcbiAgbGV0IGFuc3dlciA9IGluaXRpYWxBbnN3ZXI7IC8vL1xuXG4gIGNvbnN0IHJhd01vZGUgPSB0cnVlO1xuXG4gIHByb2Nlc3Muc3Rkb3V0LndyaXRlKGRlc2NyaXB0aW9uKTtcblxuICBpZiAoIWhpZGRlbikge1xuICAgIHByb2Nlc3Muc3Rkb3V0LndyaXRlKGluaXRpYWxBbnN3ZXIpO1xuICB9XG5cbiAgcHJvY2Vzcy5zdGRpbi5zZXRSYXdNb2RlKHJhd01vZGUpO1xuXG4gIHByb2Nlc3Muc3RkaW4uc2V0RW5jb2RpbmcoZW5jb2RpbmcpO1xuXG4gIHByb2Nlc3Muc3RkaW4uYWRkTGlzdGVuZXIoREFUQSwgbGlzdGVuZXIpO1xuXG4gIHByb2Nlc3Muc3RkaW4ucmVzdW1lKCk7XG5cbiAgZnVuY3Rpb24gbGlzdGVuZXIoZGF0YSkge1xuICAgIGNvbnN0IGNoYXJhY3RlciA9IGRhdGEudG9TdHJpbmcoZW5jb2RpbmcpO1xuXG4gICAgc3dpdGNoIChjaGFyYWN0ZXIpIHtcbiAgICAgIGNhc2UgTkVXX0xJTkVfQ0hBUkFDVEVSOlxuICAgICAgY2FzZSBDQVJSSUFHRV9SRVRVUk5fQ0hBUkFDVEVSOiB7XG4gICAgICAgIHByb2Nlc3Muc3Rkb3V0LndyaXRlKE5FV19MSU5FX0NIQVJBQ1RFUik7XG5cbiAgICAgICAgcHJvY2Vzcy5zdGRpbi5yZW1vdmVMaXN0ZW5lcihEQVRBLCBsaXN0ZW5lcik7XG5cbiAgICAgICAgcHJvY2Vzcy5zdGRpbi5wYXVzZSgpO1xuXG4gICAgICAgIGNhbGxiYWNrKGFuc3dlcik7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgVVBfQ0hBUkFDVEVSOlxuICAgICAgY2FzZSBET1dOX0NIQVJBQ1RFUjpcbiAgICAgIGNhc2UgTEVGVF9DSEFSQUNURVI6XG4gICAgICBjYXNlIFJJR0hUX0NIQVJBQ1RFUjoge1xuICAgICAgICAvLy9cblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBCQUNLU1BBQ0VfQ0hBUkFDVEVSOiB7XG4gICAgICAgIGNvbnN0IGFuc3dlckxlbmd0aCA9IGFuc3dlci5sZW5ndGgsXG4gICAgICAgICAgc3RhcnQgPSAwLFxuICAgICAgICAgIGVuZCA9IGFuc3dlckxlbmd0aCAtIDE7XG5cbiAgICAgICAgYW5zd2VyID0gYW5zd2VyLnNsaWNlKHN0YXJ0LCBlbmQpO1xuXG4gICAgICAgIGlmICghaGlkZGVuKSB7XG4gICAgICAgICAgcHJvY2Vzcy5zdGRvdXQuY2xlYXJMaW5lKCk7XG5cbiAgICAgICAgICBwcm9jZXNzLnN0ZG91dC5jdXJzb3JUbygwKTtcblxuICAgICAgICAgIHByb2Nlc3Muc3Rkb3V0LndyaXRlKGRlc2NyaXB0aW9uKTtcblxuICAgICAgICAgIHByb2Nlc3Muc3Rkb3V0LndyaXRlKGFuc3dlcik7XG4gICAgICAgIH1cblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBFVFhfQ0hBUkFDVEVSOiB7XG4gICAgICAgIGNvbnNvbGUubG9nKENUUkxfQ19DSEFSQUNURVIpO1xuXG4gICAgICAgIHByb2Nlc3MuZXhpdCgpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBkZWZhdWx0OiB7XG4gICAgICAgIGFuc3dlciArPSBjaGFyYWN0ZXI7XG5cbiAgICAgICAgaWYgKCFoaWRkZW4pIHtcbiAgICAgICAgICBwcm9jZXNzLnN0ZG91dC53cml0ZShjaGFyYWN0ZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG59Il0sIm5hbWVzIjpbInByb21wdCIsIm9wdGlvbnMiLCJjYWxsYmFjayIsImFuc3dlciIsImF0dGVtcHRzIiwiREVGQVVMVF9BVFRFTVBUUyIsImNvbnRleHQiLCJ3aGlsc3QiLCJhdHRlbXB0IiwibmV4dCIsImRvbmUiLCJ0ZXJtaW5hdGUiLCJoaWRkZW4iLCJlbmNvZGluZyIsIkRFRkFVTFRfRU5DT0RJTkciLCJkZXNjcmlwdGlvbiIsImVycm9yTWVzc2FnZSIsImluaXRpYWxBbnN3ZXIiLCJERUZBVUxUX0lOSVRJQUxfQU5TV0VSIiwidmFsaWRhdGlvblBhdHRlcm4iLCJ2YWxpZGF0aW9uRnVuY3Rpb24iLCJpbnB1dCIsInZhbGlkIiwidGVzdCIsIk9iamVjdCIsImFzc2lnbiIsImNvbnNvbGUiLCJsb2ciLCJyYXdNb2RlIiwicHJvY2VzcyIsInN0ZG91dCIsIndyaXRlIiwic3RkaW4iLCJzZXRSYXdNb2RlIiwic2V0RW5jb2RpbmciLCJhZGRMaXN0ZW5lciIsIkRBVEEiLCJsaXN0ZW5lciIsInJlc3VtZSIsImRhdGEiLCJjaGFyYWN0ZXIiLCJ0b1N0cmluZyIsIk5FV19MSU5FX0NIQVJBQ1RFUiIsIkNBUlJJQUdFX1JFVFVSTl9DSEFSQUNURVIiLCJyZW1vdmVMaXN0ZW5lciIsInBhdXNlIiwiVVBfQ0hBUkFDVEVSIiwiRE9XTl9DSEFSQUNURVIiLCJMRUZUX0NIQVJBQ1RFUiIsIlJJR0hUX0NIQVJBQ1RFUiIsIkJBQ0tTUEFDRV9DSEFSQUNURVIiLCJhbnN3ZXJMZW5ndGgiLCJsZW5ndGgiLCJzdGFydCIsImVuZCIsInNsaWNlIiwiY2xlYXJMaW5lIiwiY3Vyc29yVG8iLCJFVFhfQ0hBUkFDVEVSIiwiQ1RSTF9DX0NIQVJBQ1RFUiIsImV4aXQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQXVDQSxPQUVDO2VBRkQ7O0lBdkJnQkEsTUFBTTtlQUFOQTs7OzRCQWRPO3lCQUVGO3dCQUNzRDswQkFTakM7QUFFbkMsU0FBU0EsT0FBT0MsT0FBTyxFQUFFQyxRQUFR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
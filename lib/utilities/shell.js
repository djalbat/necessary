"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get default () {
        return _default;
    },
    get prompt () {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvc2hlbGwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHdoaWxzdCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXN5bmNocm9ub3VzXCI7XG5cbmltcG9ydCB7IERBVEEgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBERUZBVUxUX0VOQ09ESU5HLCBERUZBVUxUX0FUVEVNUFRTLCBERUZBVUxUX0lOSVRJQUxfQU5TV0VSIH0gZnJvbSBcIi4uL2RlZmF1bHRzXCI7XG5pbXBvcnQgeyBVUF9DSEFSQUNURVIsXG4gICAgICAgICBFVFhfQ0hBUkFDVEVSLFxuICAgICAgICAgRE9XTl9DSEFSQUNURVIsXG4gICAgICAgICBMRUZUX0NIQVJBQ1RFUixcbiAgICAgICAgIFJJR0hUX0NIQVJBQ1RFUixcbiAgICAgICAgIENUUkxfQ19DSEFSQUNURVIsXG4gICAgICAgICBORVdfTElORV9DSEFSQUNURVIsXG4gICAgICAgICBCQUNLU1BBQ0VfQ0hBUkFDVEVSLFxuICAgICAgICAgQ0FSUklBR0VfUkVUVVJOX0NIQVJBQ1RFUiB9IGZyb20gXCIuLi9jaGFyYWN0ZXJzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9tcHQob3B0aW9ucywgY2FsbGJhY2spIHtcbiAgbGV0IHsgYW5zd2VyID0gbnVsbCB9ID0gb3B0aW9ucztcblxuICBpZiAoYW5zd2VyICE9PSBudWxsKSB7XG4gICAgY2FsbGJhY2soYW5zd2VyKTtcblxuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IHsgYXR0ZW1wdHMgPSBERUZBVUxUX0FUVEVNUFRTIH0gPSBvcHRpb25zLFxuICAgICAgICBjb250ZXh0ID0ge1xuICAgICAgICAgIGFuc3dlcixcbiAgICAgICAgICBvcHRpb25zLFxuICAgICAgICAgIGF0dGVtcHRzXG4gICAgICAgIH07XG5cbiAgd2hpbHN0KGF0dGVtcHQsICgpID0+IHtcbiAgICBjb25zdCB7IGFuc3dlciB9ID0gY29udGV4dDtcbiAgICBcbiAgICBjYWxsYmFjayhhbnN3ZXIpO1xuICB9LCBjb250ZXh0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBwcm9tcHRcbn1cblxuZnVuY3Rpb24gYXR0ZW1wdChuZXh0LCBkb25lLCBjb250ZXh0KSB7XG4gIGxldCB7IGF0dGVtcHRzIH0gPSBjb250ZXh0O1xuXG4gIGNvbnN0IHRlcm1pbmF0ZSA9IChhdHRlbXB0cy0tID09PSAwKTtcbiAgXG4gIGlmICh0ZXJtaW5hdGUpIHtcbiAgICBkb25lKCk7XG4gICAgXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgeyBvcHRpb25zIH0gPSBjb250ZXh0LFxuICAgICAgICB7IGhpZGRlbiA9IGZhbHNlLFxuICAgICAgICAgIGVuY29kaW5nID0gREVGQVVMVF9FTkNPRElORyxcbiAgICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgICBlcnJvck1lc3NhZ2UsXG4gICAgICAgICAgaW5pdGlhbEFuc3dlciA9IERFRkFVTFRfSU5JVElBTF9BTlNXRVIsXG4gICAgICAgICAgdmFsaWRhdGlvblBhdHRlcm4gPSBudWxsLFxuICAgICAgICAgIHZhbGlkYXRpb25GdW5jdGlvbiA9IG51bGwgfSA9IG9wdGlvbnM7XG5cbiAgaW5wdXQoaW5pdGlhbEFuc3dlciwgaGlkZGVuLCBkZXNjcmlwdGlvbiwgZW5jb2RpbmcsIGNhbGxiYWNrKTtcblxuICBmdW5jdGlvbiBjYWxsYmFjayhhbnN3ZXIpIHtcbiAgICBjb25zdCB2YWxpZCA9IHZhbGlkYXRpb25GdW5jdGlvbiA/ICAvLy9cbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbkZ1bmN0aW9uKGFuc3dlcikgOlxuICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25QYXR0ZXJuLnRlc3QoYW5zd2VyKTtcblxuICAgIGlmICh2YWxpZCkge1xuICAgICAgT2JqZWN0LmFzc2lnbihjb250ZXh0LCB7XG4gICAgICAgIGFuc3dlclxuICAgICAgfSk7XG5cbiAgICAgIGRvbmUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coZXJyb3JNZXNzYWdlKTtcblxuICAgICAgT2JqZWN0LmFzc2lnbihjb250ZXh0LCB7XG4gICAgICAgIGF0dGVtcHRzXG4gICAgICB9KTtcblxuICAgICAgbmV4dCgpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBpbnB1dChpbml0aWFsQW5zd2VyLCBoaWRkZW4sIGRlc2NyaXB0aW9uLCBlbmNvZGluZywgY2FsbGJhY2spIHtcbiAgbGV0IGFuc3dlciA9IGluaXRpYWxBbnN3ZXI7IC8vL1xuXG4gIGNvbnN0IHJhd01vZGUgPSB0cnVlO1xuXG4gIHByb2Nlc3Muc3Rkb3V0LndyaXRlKGRlc2NyaXB0aW9uKTtcblxuICBpZiAoIWhpZGRlbikge1xuICAgIHByb2Nlc3Muc3Rkb3V0LndyaXRlKGluaXRpYWxBbnN3ZXIpO1xuICB9XG5cbiAgcHJvY2Vzcy5zdGRpbi5zZXRSYXdNb2RlKHJhd01vZGUpO1xuXG4gIHByb2Nlc3Muc3RkaW4uc2V0RW5jb2RpbmcoZW5jb2RpbmcpO1xuXG4gIHByb2Nlc3Muc3RkaW4uYWRkTGlzdGVuZXIoREFUQSwgbGlzdGVuZXIpO1xuXG4gIHByb2Nlc3Muc3RkaW4ucmVzdW1lKCk7XG5cbiAgZnVuY3Rpb24gbGlzdGVuZXIoZGF0YSkge1xuICAgIGNvbnN0IGNoYXJhY3RlciA9IGRhdGEudG9TdHJpbmcoZW5jb2RpbmcpO1xuXG4gICAgc3dpdGNoIChjaGFyYWN0ZXIpIHtcbiAgICAgIGNhc2UgTkVXX0xJTkVfQ0hBUkFDVEVSOlxuICAgICAgY2FzZSBDQVJSSUFHRV9SRVRVUk5fQ0hBUkFDVEVSOiB7XG4gICAgICAgIHByb2Nlc3Muc3Rkb3V0LndyaXRlKE5FV19MSU5FX0NIQVJBQ1RFUik7XG5cbiAgICAgICAgcHJvY2Vzcy5zdGRpbi5yZW1vdmVMaXN0ZW5lcihEQVRBLCBsaXN0ZW5lcik7XG5cbiAgICAgICAgcHJvY2Vzcy5zdGRpbi5wYXVzZSgpO1xuXG4gICAgICAgIGNhbGxiYWNrKGFuc3dlcik7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgVVBfQ0hBUkFDVEVSOlxuICAgICAgY2FzZSBET1dOX0NIQVJBQ1RFUjpcbiAgICAgIGNhc2UgTEVGVF9DSEFSQUNURVI6XG4gICAgICBjYXNlIFJJR0hUX0NIQVJBQ1RFUjoge1xuICAgICAgICAvLy9cblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBCQUNLU1BBQ0VfQ0hBUkFDVEVSOiB7XG4gICAgICAgIGNvbnN0IGFuc3dlckxlbmd0aCA9IGFuc3dlci5sZW5ndGgsXG4gICAgICAgICAgICAgIHN0YXJ0ID0gMCxcbiAgICAgICAgICAgICAgZW5kID0gYW5zd2VyTGVuZ3RoIC0gMTtcblxuICAgICAgICBhbnN3ZXIgPSBhbnN3ZXIuc2xpY2Uoc3RhcnQsIGVuZCk7XG5cbiAgICAgICAgaWYgKCFoaWRkZW4pIHtcbiAgICAgICAgICBwcm9jZXNzLnN0ZG91dC5jbGVhckxpbmUoKTtcblxuICAgICAgICAgIHByb2Nlc3Muc3Rkb3V0LmN1cnNvclRvKDApO1xuXG4gICAgICAgICAgcHJvY2Vzcy5zdGRvdXQud3JpdGUoZGVzY3JpcHRpb24pO1xuXG4gICAgICAgICAgcHJvY2Vzcy5zdGRvdXQud3JpdGUoYW5zd2VyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIEVUWF9DSEFSQUNURVI6IHtcbiAgICAgICAgY29uc29sZS5sb2coQ1RSTF9DX0NIQVJBQ1RFUik7XG5cbiAgICAgICAgcHJvY2Vzcy5leGl0KCk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgYW5zd2VyICs9IGNoYXJhY3RlcjtcblxuICAgICAgICBpZiAoIWhpZGRlbikge1xuICAgICAgICAgIHByb2Nlc3Muc3Rkb3V0LndyaXRlKGNoYXJhY3Rlcik7XG4gICAgICAgIH1cblxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0iXSwibmFtZXMiOlsicHJvbXB0Iiwib3B0aW9ucyIsImNhbGxiYWNrIiwiYW5zd2VyIiwiYXR0ZW1wdHMiLCJERUZBVUxUX0FUVEVNUFRTIiwiY29udGV4dCIsIndoaWxzdCIsImF0dGVtcHQiLCJuZXh0IiwiZG9uZSIsInRlcm1pbmF0ZSIsImhpZGRlbiIsImVuY29kaW5nIiwiREVGQVVMVF9FTkNPRElORyIsImRlc2NyaXB0aW9uIiwiZXJyb3JNZXNzYWdlIiwiaW5pdGlhbEFuc3dlciIsIkRFRkFVTFRfSU5JVElBTF9BTlNXRVIiLCJ2YWxpZGF0aW9uUGF0dGVybiIsInZhbGlkYXRpb25GdW5jdGlvbiIsImlucHV0IiwidmFsaWQiLCJ0ZXN0IiwiT2JqZWN0IiwiYXNzaWduIiwiY29uc29sZSIsImxvZyIsInJhd01vZGUiLCJwcm9jZXNzIiwic3Rkb3V0Iiwid3JpdGUiLCJzdGRpbiIsInNldFJhd01vZGUiLCJzZXRFbmNvZGluZyIsImFkZExpc3RlbmVyIiwiREFUQSIsImxpc3RlbmVyIiwicmVzdW1lIiwiZGF0YSIsImNoYXJhY3RlciIsInRvU3RyaW5nIiwiTkVXX0xJTkVfQ0hBUkFDVEVSIiwiQ0FSUklBR0VfUkVUVVJOX0NIQVJBQ1RFUiIsInJlbW92ZUxpc3RlbmVyIiwicGF1c2UiLCJVUF9DSEFSQUNURVIiLCJET1dOX0NIQVJBQ1RFUiIsIkxFRlRfQ0hBUkFDVEVSIiwiUklHSFRfQ0hBUkFDVEVSIiwiQkFDS1NQQUNFX0NIQVJBQ1RFUiIsImFuc3dlckxlbmd0aCIsImxlbmd0aCIsInN0YXJ0IiwiZW5kIiwic2xpY2UiLCJjbGVhckxpbmUiLCJjdXJzb3JUbyIsIkVUWF9DSEFSQUNURVIiLCJDVFJMX0NfQ0hBUkFDVEVSIiwiZXhpdCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBdUNBO2VBQUE7O1FBdkJnQkE7ZUFBQUE7Ozs0QkFkTzt5QkFFRjt3QkFDc0Q7MEJBU2pDO0FBRW5DLFNBQVNBLE9BQU9DLE9BQU8sRUFBRUMsUUFBUTtJQUN0QyxzQkFBd0JELFFBQWxCRSxRQUFBQSxzQ0FBUztJQUVmLElBQUlBLFdBQVcsTUFBTTtRQUNuQkQsU0FBU0M7UUFFVDtJQUNGO0lBRUEsd0JBQXdDRixRQUFoQ0csVUFBQUEsMENBQVdDLDBCQUFnQixzQkFDN0JDLFVBQVU7UUFDUkgsUUFBQUE7UUFDQUYsU0FBQUE7UUFDQUcsVUFBQUE7SUFDRjtJQUVORyxJQUFBQSxvQkFBTSxFQUFDQyxTQUFTO1FBQ2QsSUFBTSxBQUFFTCxTQUFXRyxRQUFYSDtRQUVSRCxTQUFTQztJQUNYLEdBQUdHO0FBQ0w7SUFFQSxXQUFlO0lBQ2JOLFFBQUFBO0FBQ0Y7QUFFQSxTQUFTUSxRQUFRQyxJQUFJLEVBQUVDLElBQUksRUFBRUosT0FBTztJQUNsQyxJQUFJLEFBQUVGLFdBQWFFLFFBQWJGO0lBRU4sSUFBTU8sWUFBYVAsZUFBZTtJQUVsQyxJQUFJTyxXQUFXO1FBQ2JEO1FBRUE7SUFDRjtJQUVBLElBQU0sQUFBRVQsVUFBWUssUUFBWkwsMkJBTzhCQSxRQU45QlcsUUFBQUEsc0NBQVMsNkNBTXFCWCxRQUw5QlksVUFBQUEsMENBQVdDLDBCQUFnQixzQkFDM0JDLGNBSThCZCxRQUo5QmMsYUFDQUMsZUFHOEJmLFFBSDlCZSx1Q0FHOEJmLFFBRjlCZ0IsZUFBQUEsb0RBQWdCQyxnQ0FBc0Isd0RBRVJqQixRQUQ5QmtCLG1CQUFBQSw0REFBb0IsaUVBQ1VsQixRQUE5Qm1CLG9CQUFBQSw4REFBcUI7SUFFN0JDLE1BQU1KLGVBQWVMLFFBQVFHLGFBQWFGLFVBQVVYO0lBRXBELFNBQVNBLFNBQVNDLE1BQU07UUFDdEIsSUFBTW1CLFFBQVFGLHFCQUNFQSxtQkFBbUJqQixVQUNqQmdCLGtCQUFrQkksSUFBSSxDQUFDcEI7UUFFekMsSUFBSW1CLE9BQU87WUFDVEUsT0FBT0MsTUFBTSxDQUFDbkIsU0FBUztnQkFDckJILFFBQUFBO1lBQ0Y7WUFFQU87UUFDRixPQUFPO1lBQ0xnQixRQUFRQyxHQUFHLENBQUNYO1lBRVpRLE9BQU9DLE1BQU0sQ0FBQ25CLFNBQVM7Z0JBQ3JCRixVQUFBQTtZQUNGO1lBRUFLO1FBQ0Y7SUFDRjtBQUNGO0FBRUEsU0FBU1ksTUFBTUosYUFBYSxFQUFFTCxNQUFNLEVBQUVHLFdBQVcsRUFBRUYsUUFBUSxFQUFFWCxRQUFRO0lBQ25FLElBQUlDLFNBQVNjLGVBQWUsR0FBRztJQUUvQixJQUFNVyxVQUFVO0lBRWhCQyxRQUFRQyxNQUFNLENBQUNDLEtBQUssQ0FBQ2hCO0lBRXJCLElBQUksQ0FBQ0gsUUFBUTtRQUNYaUIsUUFBUUMsTUFBTSxDQUFDQyxLQUFLLENBQUNkO0lBQ3ZCO0lBRUFZLFFBQVFHLEtBQUssQ0FBQ0MsVUFBVSxDQUFDTDtJQUV6QkMsUUFBUUcsS0FBSyxDQUFDRSxXQUFXLENBQUNyQjtJQUUxQmdCLFFBQVFHLEtBQUssQ0FBQ0csV0FBVyxDQUFDQyxlQUFJLEVBQUVDO0lBRWhDUixRQUFRRyxLQUFLLENBQUNNLE1BQU07SUFFcEIsU0FBU0QsU0FBU0UsSUFBSTtRQUNwQixJQUFNQyxZQUFZRCxLQUFLRSxRQUFRLENBQUM1QjtRQUVoQyxPQUFRMkI7WUFDTixLQUFLRSw4QkFBa0I7WUFDdkIsS0FBS0MscUNBQXlCO2dCQUFFO29CQUM5QmQsUUFBUUMsTUFBTSxDQUFDQyxLQUFLLENBQUNXLDhCQUFrQjtvQkFFdkNiLFFBQVFHLEtBQUssQ0FBQ1ksY0FBYyxDQUFDUixlQUFJLEVBQUVDO29CQUVuQ1IsUUFBUUcsS0FBSyxDQUFDYSxLQUFLO29CQUVuQjNDLFNBQVNDO29CQUVUO2dCQUNGO1lBRUEsS0FBSzJDLHdCQUFZO1lBQ2pCLEtBQUtDLDBCQUFjO1lBQ25CLEtBQUtDLDBCQUFjO1lBQ25CLEtBQUtDLDJCQUFlO2dCQUFFO29CQUdwQjtnQkFDRjtZQUVBLEtBQUtDLCtCQUFtQjtnQkFBRTtvQkFDeEIsSUFBTUMsZUFBZWhELE9BQU9pRCxNQUFNLEVBQzVCQyxRQUFRLEdBQ1JDLE1BQU1ILGVBQWU7b0JBRTNCaEQsU0FBU0EsT0FBT29ELEtBQUssQ0FBQ0YsT0FBT0M7b0JBRTdCLElBQUksQ0FBQzFDLFFBQVE7d0JBQ1hpQixRQUFRQyxNQUFNLENBQUMwQixTQUFTO3dCQUV4QjNCLFFBQVFDLE1BQU0sQ0FBQzJCLFFBQVEsQ0FBQzt3QkFFeEI1QixRQUFRQyxNQUFNLENBQUNDLEtBQUssQ0FBQ2hCO3dCQUVyQmMsUUFBUUMsTUFBTSxDQUFDQyxLQUFLLENBQUM1QjtvQkFDdkI7b0JBRUE7Z0JBQ0Y7WUFFQSxLQUFLdUQseUJBQWE7Z0JBQUU7b0JBQ2xCaEMsUUFBUUMsR0FBRyxDQUFDZ0MsNEJBQWdCO29CQUU1QjlCLFFBQVErQixJQUFJO29CQUVaO2dCQUNGO1lBRUE7Z0JBQVM7b0JBQ1B6RCxVQUFVcUM7b0JBRVYsSUFBSSxDQUFDNUIsUUFBUTt3QkFDWGlCLFFBQVFDLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDUztvQkFDdkI7b0JBRUE7Z0JBQ0Y7UUFDRjtJQUNGO0FBQ0YifQ==
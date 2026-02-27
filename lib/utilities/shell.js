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
const _asynchronous = require("../utilities/asynchronous");
const _constants = require("../constants");
const _defaults = require("../defaults");
const _characters = require("../characters");
function prompt(options, callback) {
    let { answer = null } = options;
    if (answer !== null) {
        callback(answer);
        return;
    }
    const { attempts = _defaults.DEFAULT_ATTEMPTS } = options, context = {
        answer,
        options,
        attempts
    };
    (0, _asynchronous.whilst)(attempt, ()=>{
        const { answer } = context;
        callback(answer);
    }, context);
}
const _default = {
    prompt
};
function attempt(next, done, context) {
    let { attempts } = context;
    const terminate = attempts-- === 0;
    if (terminate) {
        done();
        return;
    }
    const { options } = context, { hidden = false, encoding = _defaults.DEFAULT_ENCODING, description, errorMessage, initialAnswer = _defaults.DEFAULT_INITIAL_ANSWER, validationPattern = null, validationFunction = null } = options;
    input(initialAnswer, hidden, description, encoding, callback);
    function callback(answer) {
        const valid = validationFunction ? validationFunction(answer) : validationPattern.test(answer);
        if (valid) {
            Object.assign(context, {
                answer
            });
            done();
        } else {
            console.log(errorMessage);
            Object.assign(context, {
                attempts
            });
            next();
        }
    }
}
function input(initialAnswer, hidden, description, encoding, callback) {
    let answer = initialAnswer; ///
    const rawMode = true;
    process.stdout.write(description);
    if (!hidden) {
        process.stdout.write(initialAnswer);
    }
    process.stdin.setRawMode(rawMode);
    process.stdin.setEncoding(encoding);
    process.stdin.addListener(_constants.DATA, listener);
    process.stdin.resume();
    function listener(data) {
        const character = data.toString(encoding);
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
                    const answerLength = answer.length, start = 0, end = answerLength - 1;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvc2hlbGwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHdoaWxzdCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXN5bmNocm9ub3VzXCI7XG5cbmltcG9ydCB7IERBVEEgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBERUZBVUxUX0VOQ09ESU5HLCBERUZBVUxUX0FUVEVNUFRTLCBERUZBVUxUX0lOSVRJQUxfQU5TV0VSIH0gZnJvbSBcIi4uL2RlZmF1bHRzXCI7XG5pbXBvcnQgeyBVUF9DSEFSQUNURVIsXG4gICAgICAgICBFVFhfQ0hBUkFDVEVSLFxuICAgICAgICAgRE9XTl9DSEFSQUNURVIsXG4gICAgICAgICBMRUZUX0NIQVJBQ1RFUixcbiAgICAgICAgIFJJR0hUX0NIQVJBQ1RFUixcbiAgICAgICAgIENUUkxfQ19DSEFSQUNURVIsXG4gICAgICAgICBORVdfTElORV9DSEFSQUNURVIsXG4gICAgICAgICBCQUNLU1BBQ0VfQ0hBUkFDVEVSLFxuICAgICAgICAgQ0FSUklBR0VfUkVUVVJOX0NIQVJBQ1RFUiB9IGZyb20gXCIuLi9jaGFyYWN0ZXJzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9tcHQob3B0aW9ucywgY2FsbGJhY2spIHtcbiAgbGV0IHsgYW5zd2VyID0gbnVsbCB9ID0gb3B0aW9ucztcblxuICBpZiAoYW5zd2VyICE9PSBudWxsKSB7XG4gICAgY2FsbGJhY2soYW5zd2VyKTtcblxuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IHsgYXR0ZW1wdHMgPSBERUZBVUxUX0FUVEVNUFRTIH0gPSBvcHRpb25zLFxuICAgICAgICBjb250ZXh0ID0ge1xuICAgICAgICAgIGFuc3dlcixcbiAgICAgICAgICBvcHRpb25zLFxuICAgICAgICAgIGF0dGVtcHRzXG4gICAgICAgIH07XG5cbiAgd2hpbHN0KGF0dGVtcHQsICgpID0+IHtcbiAgICBjb25zdCB7IGFuc3dlciB9ID0gY29udGV4dDtcbiAgICBcbiAgICBjYWxsYmFjayhhbnN3ZXIpO1xuICB9LCBjb250ZXh0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBwcm9tcHRcbn1cblxuZnVuY3Rpb24gYXR0ZW1wdChuZXh0LCBkb25lLCBjb250ZXh0KSB7XG4gIGxldCB7IGF0dGVtcHRzIH0gPSBjb250ZXh0O1xuXG4gIGNvbnN0IHRlcm1pbmF0ZSA9IChhdHRlbXB0cy0tID09PSAwKTtcbiAgXG4gIGlmICh0ZXJtaW5hdGUpIHtcbiAgICBkb25lKCk7XG4gICAgXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgeyBvcHRpb25zIH0gPSBjb250ZXh0LFxuICAgICAgICB7IGhpZGRlbiA9IGZhbHNlLFxuICAgICAgICAgIGVuY29kaW5nID0gREVGQVVMVF9FTkNPRElORyxcbiAgICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgICBlcnJvck1lc3NhZ2UsXG4gICAgICAgICAgaW5pdGlhbEFuc3dlciA9IERFRkFVTFRfSU5JVElBTF9BTlNXRVIsXG4gICAgICAgICAgdmFsaWRhdGlvblBhdHRlcm4gPSBudWxsLFxuICAgICAgICAgIHZhbGlkYXRpb25GdW5jdGlvbiA9IG51bGwgfSA9IG9wdGlvbnM7XG5cbiAgaW5wdXQoaW5pdGlhbEFuc3dlciwgaGlkZGVuLCBkZXNjcmlwdGlvbiwgZW5jb2RpbmcsIGNhbGxiYWNrKTtcblxuICBmdW5jdGlvbiBjYWxsYmFjayhhbnN3ZXIpIHtcbiAgICBjb25zdCB2YWxpZCA9IHZhbGlkYXRpb25GdW5jdGlvbiA/ICAvLy9cbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbkZ1bmN0aW9uKGFuc3dlcikgOlxuICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25QYXR0ZXJuLnRlc3QoYW5zd2VyKTtcblxuICAgIGlmICh2YWxpZCkge1xuICAgICAgT2JqZWN0LmFzc2lnbihjb250ZXh0LCB7XG4gICAgICAgIGFuc3dlclxuICAgICAgfSk7XG5cbiAgICAgIGRvbmUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coZXJyb3JNZXNzYWdlKTtcblxuICAgICAgT2JqZWN0LmFzc2lnbihjb250ZXh0LCB7XG4gICAgICAgIGF0dGVtcHRzXG4gICAgICB9KTtcblxuICAgICAgbmV4dCgpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBpbnB1dChpbml0aWFsQW5zd2VyLCBoaWRkZW4sIGRlc2NyaXB0aW9uLCBlbmNvZGluZywgY2FsbGJhY2spIHtcbiAgbGV0IGFuc3dlciA9IGluaXRpYWxBbnN3ZXI7IC8vL1xuXG4gIGNvbnN0IHJhd01vZGUgPSB0cnVlO1xuXG4gIHByb2Nlc3Muc3Rkb3V0LndyaXRlKGRlc2NyaXB0aW9uKTtcblxuICBpZiAoIWhpZGRlbikge1xuICAgIHByb2Nlc3Muc3Rkb3V0LndyaXRlKGluaXRpYWxBbnN3ZXIpO1xuICB9XG5cbiAgcHJvY2Vzcy5zdGRpbi5zZXRSYXdNb2RlKHJhd01vZGUpO1xuXG4gIHByb2Nlc3Muc3RkaW4uc2V0RW5jb2RpbmcoZW5jb2RpbmcpO1xuXG4gIHByb2Nlc3Muc3RkaW4uYWRkTGlzdGVuZXIoREFUQSwgbGlzdGVuZXIpO1xuXG4gIHByb2Nlc3Muc3RkaW4ucmVzdW1lKCk7XG5cbiAgZnVuY3Rpb24gbGlzdGVuZXIoZGF0YSkge1xuICAgIGNvbnN0IGNoYXJhY3RlciA9IGRhdGEudG9TdHJpbmcoZW5jb2RpbmcpO1xuXG4gICAgc3dpdGNoIChjaGFyYWN0ZXIpIHtcbiAgICAgIGNhc2UgTkVXX0xJTkVfQ0hBUkFDVEVSOlxuICAgICAgY2FzZSBDQVJSSUFHRV9SRVRVUk5fQ0hBUkFDVEVSOiB7XG4gICAgICAgIHByb2Nlc3Muc3Rkb3V0LndyaXRlKE5FV19MSU5FX0NIQVJBQ1RFUik7XG5cbiAgICAgICAgcHJvY2Vzcy5zdGRpbi5yZW1vdmVMaXN0ZW5lcihEQVRBLCBsaXN0ZW5lcik7XG5cbiAgICAgICAgcHJvY2Vzcy5zdGRpbi5wYXVzZSgpO1xuXG4gICAgICAgIGNhbGxiYWNrKGFuc3dlcik7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgVVBfQ0hBUkFDVEVSOlxuICAgICAgY2FzZSBET1dOX0NIQVJBQ1RFUjpcbiAgICAgIGNhc2UgTEVGVF9DSEFSQUNURVI6XG4gICAgICBjYXNlIFJJR0hUX0NIQVJBQ1RFUjoge1xuICAgICAgICAvLy9cblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBCQUNLU1BBQ0VfQ0hBUkFDVEVSOiB7XG4gICAgICAgIGNvbnN0IGFuc3dlckxlbmd0aCA9IGFuc3dlci5sZW5ndGgsXG4gICAgICAgICAgICAgIHN0YXJ0ID0gMCxcbiAgICAgICAgICAgICAgZW5kID0gYW5zd2VyTGVuZ3RoIC0gMTtcblxuICAgICAgICBhbnN3ZXIgPSBhbnN3ZXIuc2xpY2Uoc3RhcnQsIGVuZCk7XG5cbiAgICAgICAgaWYgKCFoaWRkZW4pIHtcbiAgICAgICAgICBwcm9jZXNzLnN0ZG91dC5jbGVhckxpbmUoKTtcblxuICAgICAgICAgIHByb2Nlc3Muc3Rkb3V0LmN1cnNvclRvKDApO1xuXG4gICAgICAgICAgcHJvY2Vzcy5zdGRvdXQud3JpdGUoZGVzY3JpcHRpb24pO1xuXG4gICAgICAgICAgcHJvY2Vzcy5zdGRvdXQud3JpdGUoYW5zd2VyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIEVUWF9DSEFSQUNURVI6IHtcbiAgICAgICAgY29uc29sZS5sb2coQ1RSTF9DX0NIQVJBQ1RFUik7XG5cbiAgICAgICAgcHJvY2Vzcy5leGl0KCk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgYW5zd2VyICs9IGNoYXJhY3RlcjtcblxuICAgICAgICBpZiAoIWhpZGRlbikge1xuICAgICAgICAgIHByb2Nlc3Muc3Rkb3V0LndyaXRlKGNoYXJhY3Rlcik7XG4gICAgICAgIH1cblxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0iXSwibmFtZXMiOlsicHJvbXB0Iiwib3B0aW9ucyIsImNhbGxiYWNrIiwiYW5zd2VyIiwiYXR0ZW1wdHMiLCJERUZBVUxUX0FUVEVNUFRTIiwiY29udGV4dCIsIndoaWxzdCIsImF0dGVtcHQiLCJuZXh0IiwiZG9uZSIsInRlcm1pbmF0ZSIsImhpZGRlbiIsImVuY29kaW5nIiwiREVGQVVMVF9FTkNPRElORyIsImRlc2NyaXB0aW9uIiwiZXJyb3JNZXNzYWdlIiwiaW5pdGlhbEFuc3dlciIsIkRFRkFVTFRfSU5JVElBTF9BTlNXRVIiLCJ2YWxpZGF0aW9uUGF0dGVybiIsInZhbGlkYXRpb25GdW5jdGlvbiIsImlucHV0IiwidmFsaWQiLCJ0ZXN0IiwiT2JqZWN0IiwiYXNzaWduIiwiY29uc29sZSIsImxvZyIsInJhd01vZGUiLCJwcm9jZXNzIiwic3Rkb3V0Iiwid3JpdGUiLCJzdGRpbiIsInNldFJhd01vZGUiLCJzZXRFbmNvZGluZyIsImFkZExpc3RlbmVyIiwiREFUQSIsImxpc3RlbmVyIiwicmVzdW1lIiwiZGF0YSIsImNoYXJhY3RlciIsInRvU3RyaW5nIiwiTkVXX0xJTkVfQ0hBUkFDVEVSIiwiQ0FSUklBR0VfUkVUVVJOX0NIQVJBQ1RFUiIsInJlbW92ZUxpc3RlbmVyIiwicGF1c2UiLCJVUF9DSEFSQUNURVIiLCJET1dOX0NIQVJBQ1RFUiIsIkxFRlRfQ0hBUkFDVEVSIiwiUklHSFRfQ0hBUkFDVEVSIiwiQkFDS1NQQUNFX0NIQVJBQ1RFUiIsImFuc3dlckxlbmd0aCIsImxlbmd0aCIsInN0YXJ0IiwiZW5kIiwic2xpY2UiLCJjbGVhckxpbmUiLCJjdXJzb3JUbyIsIkVUWF9DSEFSQUNURVIiLCJDVFJMX0NfQ0hBUkFDVEVSIiwiZXhpdCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBdUNBO2VBQUE7O1FBdkJnQkE7ZUFBQUE7Ozs4QkFkTzsyQkFFRjswQkFDc0Q7NEJBU2pDO0FBRW5DLFNBQVNBLE9BQU9DLE9BQU8sRUFBRUMsUUFBUTtJ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
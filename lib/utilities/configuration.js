"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _array = require("../utilities/array");
var _defaults = require("../defaults");
var _fileSystem = require("../utilities/fileSystem");
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
if (!globalThis.rc) {
    globalThis.rc = _rc;
}
var rc = globalThis.rc;
var _default = {
    rc: rc
};
exports.default = _default;
var baseExtension = _defaults.DEFAULT_RC_BASE_EXTENSION;
function _rc(param) {
    var environmentNameOrArgv = param === void 0 ? null : param;
    var environment, environmentName, environmentNameOrArgvArgv = _instanceof(environmentNameOrArgv, Array);
    if (environmentNameOrArgvArgv) {
        var argv = environmentNameOrArgv; ///
        environmentName = environmentNameFromArgv(argv);
    } else {
        environmentName = environmentNameOrArgv; ///
    }
    var json = readRCFile(), environments = json.environments;
    if (environmentName === null) {
        var firstEnvironment = (0, _array).first(environments);
        environment = firstEnvironment; ///
    } else {
        environment = environments.find(function(environment1) {
            var name = environment1.name, found = name === environmentName;
            return found;
        });
    }
    delete environment.name;
    Object.assign(rc, environment);
    return environment;
}
function readRCFile() {
    var rcFilePath = rcFilePathFromNothing(), rcFileContent = (0, _fileSystem).readFile(rcFilePath), json = JSON.parse(rcFileContent);
    return json;
}
function writeRCFile(json) {
    var rcFilePath = rcFilePathFromNothing(), rdFileContent = JSON.stringify(json, null, "  ");
    (0, _fileSystem).writeFile(rcFilePath, rdFileContent);
}
function updateRCFile(addedProperties) {
    for(var _len = arguments.length, deletedPropertyNames = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
        deletedPropertyNames[_key - 1] = arguments[_key];
    }
    var json = readRCFile();
    if (addedProperties) {
        Object.assign(json, addedProperties);
    }
    deletedPropertyNames.forEach(function(deletedPropertyName) {
        delete json[deletedPropertyName];
    });
    writeRCFile(json);
}
function checkRCFileExists() {
    var rcFilePath = rcFilePathFromNothing(), rcFileExists = (0, _fileSystem).checkFileExists(rcFilePath);
    return rcFileExists;
}
function createVacuousRCFile() {
    var json = {
        "environments": [
            {
            }
        ]
    };
    writeRCFile(json);
}
function setRCBaseExtension(rcBaseExtension) {
    baseExtension = rcBaseExtension;
}
Object.assign(_rc, {
    readRCFile: readRCFile,
    writeRCFile: writeRCFile,
    updateRCFile: updateRCFile,
    checkRCFileExists: checkRCFileExists,
    createVacuousRCFile: createVacuousRCFile,
    setRCBaseExtension: setRCBaseExtension
});
function environmentNameFromArgv(argv) {
    var environmentName = null;
    argv.find(function(argument) {
        var matches = argument.match(/--environment=(.+)/), found = matches !== null;
        if (found) {
            var secondMatch = (0, _array).second(matches);
            environmentName = secondMatch;
        }
        return found;
    });
    return environmentName;
}
function rcFilePathFromNothing() {
    var rcFilePath = "./.".concat(baseExtension, "rc");
    return rcFilePath;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvY29uZmlndXJhdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgZmlyc3QsIHNlY29uZCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IERFRkFVTFRfUkNfQkFTRV9FWFRFTlNJT04gfSBmcm9tIFwiLi4vZGVmYXVsdHNcIjtcbmltcG9ydCB7IHJlYWRGaWxlLCB3cml0ZUZpbGUsIGNoZWNrRmlsZUV4aXN0cyB9IGZyb20gXCIuLi91dGlsaXRpZXMvZmlsZVN5c3RlbVwiO1xuXG5pZiAoIWdsb2JhbFRoaXMucmMpIHtcbiAgZ2xvYmFsVGhpcy5yYyA9IF9yYztcbn1cblxuY29uc3QgeyByYyB9ID0gZ2xvYmFsVGhpcztcblxuZXhwb3J0IGRlZmF1bHQge1xuICByY1xufTtcblxubGV0IGJhc2VFeHRlbnNpb24gPSBERUZBVUxUX1JDX0JBU0VfRVhURU5TSU9OO1xuXG5mdW5jdGlvbiBfcmMoZW52aXJvbm1lbnROYW1lT3JBcmd2ID0gbnVsbCkge1xuICBsZXQgZW52aXJvbm1lbnQsXG4gICAgICBlbnZpcm9ubWVudE5hbWUsXG4gICAgICBlbnZpcm9ubWVudE5hbWVPckFyZ3ZBcmd2ID0gKGVudmlyb25tZW50TmFtZU9yQXJndiBpbnN0YW5jZW9mIEFycmF5KTtcblxuICBpZiAoZW52aXJvbm1lbnROYW1lT3JBcmd2QXJndikge1xuICAgIGNvbnN0IGFyZ3YgPSBlbnZpcm9ubWVudE5hbWVPckFyZ3Y7IC8vL1xuXG4gICAgZW52aXJvbm1lbnROYW1lID0gZW52aXJvbm1lbnROYW1lRnJvbUFyZ3YoYXJndik7XG4gIH0gZWxzZSB7XG4gICAgZW52aXJvbm1lbnROYW1lID0gZW52aXJvbm1lbnROYW1lT3JBcmd2OyAgLy8vXG4gIH1cblxuICBjb25zdCBqc29uID0gcmVhZFJDRmlsZSgpLFxuICAgICAgICB7IGVudmlyb25tZW50cyB9ID0ganNvbjtcblxuICBpZiAoZW52aXJvbm1lbnROYW1lID09PSBudWxsKSB7XG4gICAgY29uc3QgZmlyc3RFbnZpcm9ubWVudCA9IGZpcnN0KGVudmlyb25tZW50cyk7XG5cbiAgICBlbnZpcm9ubWVudCA9IGZpcnN0RW52aXJvbm1lbnQ7IC8vL1xuICB9IGVsc2Uge1xuICAgIGVudmlyb25tZW50ID0gZW52aXJvbm1lbnRzLmZpbmQoKGVudmlyb25tZW50KSA9PiB7XG4gICAgICBjb25zdCB7IG5hbWUgfSA9IGVudmlyb25tZW50LFxuICAgICAgICAgICAgZm91bmQgPSAobmFtZSA9PT0gZW52aXJvbm1lbnROYW1lKTtcblxuICAgICAgcmV0dXJuIGZvdW5kO1xuICAgIH0pO1xuICB9XG5cbiAgZGVsZXRlIGVudmlyb25tZW50Lm5hbWU7XG5cbiAgT2JqZWN0LmFzc2lnbihyYywgZW52aXJvbm1lbnQpO1xuXG4gIHJldHVybiBlbnZpcm9ubWVudDtcbn1cblxuZnVuY3Rpb24gcmVhZFJDRmlsZSgpIHtcbiAgY29uc3QgcmNGaWxlUGF0aCA9IHJjRmlsZVBhdGhGcm9tTm90aGluZygpLFxuICAgICAgICByY0ZpbGVDb250ZW50ID0gcmVhZEZpbGUocmNGaWxlUGF0aCksXG4gICAgICAgIGpzb24gPSBKU09OLnBhcnNlKHJjRmlsZUNvbnRlbnQpO1xuXG4gIHJldHVybiBqc29uOyAgICAgIFxufVxuXG5mdW5jdGlvbiB3cml0ZVJDRmlsZShqc29uKSB7XG4gIGNvbnN0IHJjRmlsZVBhdGggPSByY0ZpbGVQYXRoRnJvbU5vdGhpbmcoKSxcbiAgICAgICAgcmRGaWxlQ29udGVudCA9IEpTT04uc3RyaW5naWZ5KGpzb24sIG51bGwsIFwiICBcIik7XG5cbiAgd3JpdGVGaWxlKHJjRmlsZVBhdGgsIHJkRmlsZUNvbnRlbnQpO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVSQ0ZpbGUoYWRkZWRQcm9wZXJ0aWVzLCAuLi5kZWxldGVkUHJvcGVydHlOYW1lcykge1xuICBsZXQganNvbiA9IHJlYWRSQ0ZpbGUoKTtcblxuICBpZiAoYWRkZWRQcm9wZXJ0aWVzKSB7XG4gICAgT2JqZWN0LmFzc2lnbihqc29uLCBhZGRlZFByb3BlcnRpZXMpO1xuICB9XG5cbiAgZGVsZXRlZFByb3BlcnR5TmFtZXMuZm9yRWFjaCgoZGVsZXRlZFByb3BlcnR5TmFtZSkgPT4ge1xuICAgIGRlbGV0ZSBqc29uW2RlbGV0ZWRQcm9wZXJ0eU5hbWVdO1xuICB9KTtcblxuICB3cml0ZVJDRmlsZShqc29uKTsgICAgICBcbn1cblxuZnVuY3Rpb24gY2hlY2tSQ0ZpbGVFeGlzdHMoKSB7XG4gIGNvbnN0IHJjRmlsZVBhdGggPSByY0ZpbGVQYXRoRnJvbU5vdGhpbmcoKSxcbiAgICAgICAgcmNGaWxlRXhpc3RzID0gY2hlY2tGaWxlRXhpc3RzKHJjRmlsZVBhdGgpO1xuXG4gIHJldHVybiByY0ZpbGVFeGlzdHM7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVZhY3VvdXNSQ0ZpbGUoKSB7XG4gIGNvbnN0IGpzb24gPSB7XG4gICAgXCJlbnZpcm9ubWVudHNcIjogW1xuICAgICAge31cbiAgICBdXG4gIH07XG5cbiAgd3JpdGVSQ0ZpbGUoanNvbik7XG59XG5cbmZ1bmN0aW9uIHNldFJDQmFzZUV4dGVuc2lvbihyY0Jhc2VFeHRlbnNpb24pIHsgYmFzZUV4dGVuc2lvbiA9IHJjQmFzZUV4dGVuc2lvbjsgfVxuXG5PYmplY3QuYXNzaWduKF9yYywge1xuICByZWFkUkNGaWxlLFxuICB3cml0ZVJDRmlsZSxcbiAgdXBkYXRlUkNGaWxlLFxuICBjaGVja1JDRmlsZUV4aXN0cyxcbiAgY3JlYXRlVmFjdW91c1JDRmlsZSxcbiAgc2V0UkNCYXNlRXh0ZW5zaW9uXG59KTtcblxuZnVuY3Rpb24gZW52aXJvbm1lbnROYW1lRnJvbUFyZ3YoYXJndikge1xuICBsZXQgZW52aXJvbm1lbnROYW1lID0gbnVsbDtcblxuICBhcmd2LmZpbmQoKGFyZ3VtZW50KSA9PiB7ICAvLy9cbiAgICBjb25zdCBtYXRjaGVzID0gYXJndW1lbnQubWF0Y2goLy0tZW52aXJvbm1lbnQ9KC4rKS8pLFxuICAgICAgICAgIGZvdW5kID0gKG1hdGNoZXMgIT09IG51bGwpO1xuXG4gICAgaWYgKGZvdW5kKSB7XG4gICAgICBjb25zdCBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKTtcblxuICAgICAgZW52aXJvbm1lbnROYW1lID0gc2Vjb25kTWF0Y2g7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZvdW5kO1xuICB9KTtcblxuICByZXR1cm4gZW52aXJvbm1lbnROYW1lO1xufVxuXG5mdW5jdGlvbiByY0ZpbGVQYXRoRnJvbU5vdGhpbmcoKSB7XG4gIGNvbnN0IHJjRmlsZVBhdGggPSBgLi8uJHtiYXNlRXh0ZW5zaW9ufXJjYDtcblxuICByZXR1cm4gcmNGaWxlUGF0aDtcbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztBQUVrQixHQUFvQixDQUFwQixNQUFvQjtBQUNSLEdBQWEsQ0FBYixTQUFhO0FBQ0YsR0FBeUIsQ0FBekIsV0FBeUI7Ozs7Ozs7O0FBRTlFLEVBQUUsR0FBRyxVQUFVLENBQUMsRUFBRSxFQUFFLENBQUM7SUFDbkIsVUFBVSxDQUFDLEVBQUUsR0FBRyxHQUFHO0FBQ3JCLENBQUM7QUFFRCxHQUFLLENBQUcsRUFBRSxHQUFLLFVBQVUsQ0FBakIsRUFBRTs7SUFHUixFQUFFLEVBQUYsRUFBRTs7O0FBR0osR0FBRyxDQUFDLGFBQWEsR0FieUIsU0FBYTtTQWU5QyxHQUFHLENBQUMsS0FBNEIsRUFBRSxDQUFDO1FBQS9CLHFCQUFxQixHQUFyQixLQUE0QixjQUFKLElBQUksR0FBNUIsS0FBNEI7SUFDdkMsR0FBRyxDQUFDLFdBQVcsRUFDWCxlQUFlLEVBQ2YseUJBQXlCLEdBQUksV0FBc0MsQ0FBdEMscUJBQXFCLEVBQVksS0FBSztJQUV2RSxFQUFFLEVBQUUseUJBQXlCLEVBQUUsQ0FBQztRQUM5QixHQUFLLENBQUMsSUFBSSxHQUFHLHFCQUFxQixDQUFFLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztRQUV2QyxlQUFlLEdBQUcsdUJBQXVCLENBQUMsSUFB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
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _path = _interopRequireDefault(require("path"));
var _array = require("../utilities/array");
var _constants = require("../constants");
var _fileSystem = require("../utilities/fileSystem");
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
"use strict";
if (!globalThis.rc) {
    globalThis.rc = _rc;
}
var rc = globalThis.rc;
var _default = rc;
exports.default = _default;
var pathResolver = _path.default.resolve, baseExtension = _constants.DEFAULT_RC_BASE_EXTENSION;
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
        var firstEnvironment = _array.first(environments);
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
    var absoluteRCFilePath = absoluteRCFilePathFromNothing(), fileContent = _fileSystem.readFile(absoluteRCFilePath), json = JSON.parse(fileContent);
    return json;
}
function writeRCFile(json) {
    var absoluteRCFilePath = absoluteRCFilePathFromNothing(), fileContent = JSON.stringify(json, null, "\\t");
    _fileSystem.writeFile(absoluteRCFilePath, fileContent);
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
    var absoluteRCFilePath = absoluteRCFilePathFromNothing(), rcFileExists = _fileSystem.checkFileExists(absoluteRCFilePath);
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
function setRCPathResolver(rcPathResolver) {
    pathResolver = rcPathResolver;
}
Object.assign(_rc, {
    readRCFile: readRCFile,
    writeRCFile: writeRCFile,
    updateRCFile: updateRCFile,
    checkRCFileExists: checkRCFileExists,
    createVacuousRCFile: createVacuousRCFile,
    setRCBaseExtension: setRCBaseExtension,
    setRCPathResolver: setRCPathResolver
});
function environmentNameFromArgv(argv) {
    var environmentName = null;
    argv.find(function(argument) {
        var matches = argument.match(/--environment=(.+)/), found = matches !== null;
        if (found) {
            var secondMatch = _array.second(matches);
            environmentName = secondMatch;
        }
        return found;
    });
    return environmentName;
}
function absoluteRCFilePathFromNothing() {
    var filePath = "./.".concat(baseExtension, "rc"), absoluteRCFilePath = pathResolver(filePath);
    return absoluteRCFilePath;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVzNi91dGlsaXRpZXMvY29uZmlndXJhdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcblxuaW1wb3J0IHsgZmlyc3QsIHNlY29uZCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IERFRkFVTFRfUkNfQkFTRV9FWFRFTlNJT04gfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyByZWFkRmlsZSwgd3JpdGVGaWxlLCBjaGVja0ZpbGVFeGlzdHMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2ZpbGVTeXN0ZW1cIjtcblxuaWYgKCFnbG9iYWxUaGlzLnJjKSB7XG4gIGdsb2JhbFRoaXMucmMgPSBfcmM7XG59XG5cbmNvbnN0IHsgcmMgfSA9IGdsb2JhbFRoaXM7XG5cbmV4cG9ydCBkZWZhdWx0IHJjO1xuXG5sZXQgcGF0aFJlc29sdmVyID0gcGF0aC5yZXNvbHZlLFxuICAgIGJhc2VFeHRlbnNpb24gPSBERUZBVUxUX1JDX0JBU0VfRVhURU5TSU9OO1xuXG5mdW5jdGlvbiBfcmMoZW52aXJvbm1lbnROYW1lT3JBcmd2ID0gbnVsbCkge1xuICBsZXQgZW52aXJvbm1lbnQsXG4gICAgICBlbnZpcm9ubWVudE5hbWUsXG4gICAgICBlbnZpcm9ubWVudE5hbWVPckFyZ3ZBcmd2ID0gKGVudmlyb25tZW50TmFtZU9yQXJndiBpbnN0YW5jZW9mIEFycmF5KTtcblxuICBpZiAoZW52aXJvbm1lbnROYW1lT3JBcmd2QXJndikge1xuICAgIGNvbnN0IGFyZ3YgPSBlbnZpcm9ubWVudE5hbWVPckFyZ3Y7IC8vL1xuXG4gICAgZW52aXJvbm1lbnROYW1lID0gZW52aXJvbm1lbnROYW1lRnJvbUFyZ3YoYXJndik7XG4gIH0gZWxzZSB7XG4gICAgZW52aXJvbm1lbnROYW1lID0gZW52aXJvbm1lbnROYW1lT3JBcmd2OyAgLy8vXG4gIH1cblxuICBjb25zdCBqc29uID0gcmVhZFJDRmlsZSgpLFxuICAgICAgICB7IGVudmlyb25tZW50cyB9ID0ganNvbjtcblxuICBpZiAoZW52aXJvbm1lbnROYW1lID09PSBudWxsKSB7XG4gICAgY29uc3QgZmlyc3RFbnZpcm9ubWVudCA9IGZpcnN0KGVudmlyb25tZW50cyk7XG5cbiAgICBlbnZpcm9ubWVudCA9IGZpcnN0RW52aXJvbm1lbnQ7IC8vL1xuICB9IGVsc2Uge1xuICAgIGVudmlyb25tZW50ID0gZW52aXJvbm1lbnRzLmZpbmQoKGVudmlyb25tZW50KSA9PiB7XG4gICAgICBjb25zdCB7IG5hbWUgfSA9IGVudmlyb25tZW50LFxuICAgICAgICAgICAgZm91bmQgPSAobmFtZSA9PT0gZW52aXJvbm1lbnROYW1lKTtcblxuICAgICAgcmV0dXJuIGZvdW5kO1xuICAgIH0pO1xuICB9XG5cbiAgZGVsZXRlIGVudmlyb25tZW50Lm5hbWU7XG5cbiAgT2JqZWN0LmFzc2lnbihyYywgZW52aXJvbm1lbnQpO1xuXG4gIHJldHVybiBlbnZpcm9ubWVudDtcbn1cblxuZnVuY3Rpb24gcmVhZFJDRmlsZSgpIHtcbiAgY29uc3QgYWJzb2x1dGVSQ0ZpbGVQYXRoID0gYWJzb2x1dGVSQ0ZpbGVQYXRoRnJvbU5vdGhpbmcoKSxcbiAgICAgICAgZmlsZUNvbnRlbnQgPSByZWFkRmlsZShhYnNvbHV0ZVJDRmlsZVBhdGgpLFxuICAgICAgICBqc29uID0gSlNPTi5wYXJzZShmaWxlQ29udGVudCk7XG5cbiAgcmV0dXJuIGpzb247ICAgICAgXG59XG5cbmZ1bmN0aW9uIHdyaXRlUkNGaWxlKGpzb24pIHtcbiAgY29uc3QgYWJzb2x1dGVSQ0ZpbGVQYXRoID0gYWJzb2x1dGVSQ0ZpbGVQYXRoRnJvbU5vdGhpbmcoKSxcbiAgICAgICAgZmlsZUNvbnRlbnQgPSBKU09OLnN0cmluZ2lmeShqc29uLCBudWxsLCBgXFx0YCk7XG5cbiAgd3JpdGVGaWxlKGFic29sdXRlUkNGaWxlUGF0aCwgZmlsZUNvbnRlbnQpO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVSQ0ZpbGUoYWRkZWRQcm9wZXJ0aWVzLCAuLi5kZWxldGVkUHJvcGVydHlOYW1lcykge1xuICBsZXQganNvbiA9IHJlYWRSQ0ZpbGUoKTtcblxuICBpZiAoYWRkZWRQcm9wZXJ0aWVzKSB7XG4gICAgT2JqZWN0LmFzc2lnbihqc29uLCBhZGRlZFByb3BlcnRpZXMpO1xuICB9XG5cbiAgZGVsZXRlZFByb3BlcnR5TmFtZXMuZm9yRWFjaCgoZGVsZXRlZFByb3BlcnR5TmFtZSkgPT4ge1xuICAgIGRlbGV0ZSBqc29uW2RlbGV0ZWRQcm9wZXJ0eU5hbWVdO1xuICB9KTtcblxuICB3cml0ZVJDRmlsZShqc29uKTsgICAgICBcbn1cblxuZnVuY3Rpb24gY2hlY2tSQ0ZpbGVFeGlzdHMoKSB7XG4gIGNvbnN0IGFic29sdXRlUkNGaWxlUGF0aCA9IGFic29sdXRlUkNGaWxlUGF0aEZyb21Ob3RoaW5nKCksXG4gICAgICAgIHJjRmlsZUV4aXN0cyA9IGNoZWNrRmlsZUV4aXN0cyhhYnNvbHV0ZVJDRmlsZVBhdGgpO1xuXG4gIHJldHVybiByY0ZpbGVFeGlzdHM7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVZhY3VvdXNSQ0ZpbGUoKSB7XG4gIGNvbnN0IGpzb24gPSB7XG4gICAgXCJlbnZpcm9ubWVudHNcIjogW1xuICAgICAge31cbiAgICBdXG4gIH07XG5cbiAgd3JpdGVSQ0ZpbGUoanNvbik7XG59XG5cbmZ1bmN0aW9uIHNldFJDQmFzZUV4dGVuc2lvbihyY0Jhc2VFeHRlbnNpb24pIHsgYmFzZUV4dGVuc2lvbiA9IHJjQmFzZUV4dGVuc2lvbjsgfVxuXG5mdW5jdGlvbiBzZXRSQ1BhdGhSZXNvbHZlcihyY1BhdGhSZXNvbHZlcikgeyBwYXRoUmVzb2x2ZXIgPSByY1BhdGhSZXNvbHZlcjsgfVxuXG5PYmplY3QuYXNzaWduKF9yYywge1xuICByZWFkUkNGaWxlLFxuICB3cml0ZVJDRmlsZSxcbiAgdXBkYXRlUkNGaWxlLFxuICBjaGVja1JDRmlsZUV4aXN0cyxcbiAgY3JlYXRlVmFjdW91c1JDRmlsZSxcbiAgc2V0UkNCYXNlRXh0ZW5zaW9uLFxuICBzZXRSQ1BhdGhSZXNvbHZlclxufSk7XG5cbmZ1bmN0aW9uIGVudmlyb25tZW50TmFtZUZyb21Bcmd2KGFyZ3YpIHtcbiAgbGV0IGVudmlyb25tZW50TmFtZSA9IG51bGw7XG5cbiAgYXJndi5maW5kKChhcmd1bWVudCkgPT4geyAgLy8vXG4gICAgY29uc3QgbWF0Y2hlcyA9IGFyZ3VtZW50Lm1hdGNoKC8tLWVudmlyb25tZW50PSguKykvKSxcbiAgICAgICAgICBmb3VuZCA9IChtYXRjaGVzICE9PSBudWxsKTtcblxuICAgIGlmIChmb3VuZCkge1xuICAgICAgY29uc3Qgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyk7XG5cbiAgICAgIGVudmlyb25tZW50TmFtZSA9IHNlY29uZE1hdGNoO1xuICAgIH1cblxuICAgIHJldHVybiBmb3VuZDtcbiAgfSk7XG5cbiAgcmV0dXJuIGVudmlyb25tZW50TmFtZTtcbn1cblxuZnVuY3Rpb24gYWJzb2x1dGVSQ0ZpbGVQYXRoRnJvbU5vdGhpbmcoKSB7XG4gIGNvbnN0IGZpbGVQYXRoID0gYC4vLiR7YmFzZUV4dGVuc2lvbn1yY2AsXG4gICAgICAgIGFic29sdXRlUkNGaWxlUGF0aCA9IHBhdGhSZXNvbHZlcihmaWxlUGF0aCk7XG5cbiAgcmV0dXJuIGFic29sdXRlUkNGaWxlUGF0aDtcbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztJQUVBLEtBQUE7SUFFQSxNQUFBO0lBQ0EsVUFBQTtJQUNBLFdBQUE7Ozs7Ozs7Ozs7Ozs7Q0FOQSxVQUFBO0tBUUEsVUFBQSxDQUFBLEVBQUE7QUFDQSxjQUFBLENBQUEsRUFBQSxHQUFBLEdBQUE7O0lBR0EsRUFBQSxHQUFBLFVBQUEsQ0FBQSxFQUFBO2VBRUEsRUFBQTs7SUFFQSxZQUFBLEdBZEEsS0FBQSxTQWNBLE9BQUEsRUFDQSxhQUFBLEdBWkEsVUFBQTtTQWNBLEdBQUEsQ0FBQSxLQUFBO1FBQUEscUJBQUEsR0FBQSxLQUFBLGNBQUEsSUFBQSxHQUFBLEtBQUE7UUFDQSxXQUFBLEVBQ0EsZUFBQSxFQUNBLHlCQUFBLEdBQUEsV0FBQSxDQUFBLHFCQUFBLEVBQUEsS0FBQTtRQUVBLHlCQUFBO1lBQ0EsSUFBQSxHQUFBLHFCQUFBLENBQUEsQ0FBQSxFQUFBLENBQUE7QUFFQSx1QkFBQSxHQUFBLHVCQUFBLENBQUEsSUFBQTs7QUFFQSx1QkFBQSxHQUFBLHFCQUFBLENBQUEsQ0FBQSxFQUFBLENBQUE7O1FBR0EsSUFBQSxHQUFBLFVBQUEsSUFDQSxZQUFBLEdBQUEsSUFBQSxDQUFBLFlBQUE7UUFFQSxlQUFBLEtBQUEsSUFBQTtZQUNBLGdCQUFBLEdBaENBLE1BQUEsT0FnQ0EsWUFBQTtBQUVBLG1CQUFBLEdBQUEsZ0JBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQTs7QUFFQSxtQkFBQSxHQUFBLFlBQUEsQ0FBQSxJQUFBLFVBQUEsWUFBQTtnQkFDQSxJQUFBLEdBQUEsWUFBQSxDQUFBLElBQUEsRUFDQSxLQUFBLEdBQUEsSUFBQSxLQUFBLGVBQUE7bUJBRUEsS0FBQTs7O1dBSUEsV0FBQSxDQUFBLElBQUE7QUFFQSxVQUFBLENBQUEsTUFBQSxDQUFBLEVBQUEsRUFBQSxXQUFBO1dBRUEsV0FBQTs7U0FHQSxVQUFBO1FBQ0Esa0JBQUEsR0FBQSw2QkFBQSxJQUNBLFdBQUEsR0FuREEsV0FBQSxVQW1EQSxrQkFBQSxHQUNBLElBQUEsR0FBQSxJQUFBLENBQUEsS0FBQSxDQUFBLFdBQUE7V0FFQSxJQUFBOztTQUdBLFdBQUEsQ0FBQSxJQUFBO1FBQ0Esa0JBQUEsR0FBQSw2QkFBQSxJQUNBLFdBQUEsR0FBQSxJQUFBLENBQUEsU0FBQSxDQUFBLElBQUEsRUFBQSxJQUFBLEdBQUEsR0FBQTtBQTNEQSxlQUFBLFdBNkRBLGtCQUFBLEVBQUEsV0FBQTs7U0FHQSxZQUFBLENBQUEsZUFBQTtZQUFBLElBQUEsR0FBQSxTQUFBLENBQUEsTUFBQSxFQUFBLG9CQUFBLGFBQUEsSUFBQSxHQUFBLENBQUEsR0FBQSxJQUFBLEdBQUEsQ0FBQSxHQUFBLENBQUEsR0FBQSxJQUFBLEdBQUEsQ0FBQSxFQUFBLElBQUEsR0FBQSxJQUFBLEVBQUEsSUFBQTtBQUFBLDRCQUFBLENBQUEsSUFBQSxHQUFBLENBQUEsSUFBQSxTQUFBLENBQUEsSUFBQTs7UUFDQSxJQUFBLEdBQUEsVUFBQTtRQUVBLGVBQUE7QUFDQSxjQUFBLENBQUEsTUFBQSxDQUFBLElBQUEsRUFBQSxlQUFBOztBQUdBLHdCQUFBLENBQUEsT0FBQSxVQUFBLG1CQUFBO2VBQ0EsSUFBQSxDQUFBLG1CQUFBOztBQUdBLGVBQUEsQ0FBQSxJQUFBOztTQUdBLGlCQUFBO1FBQ0Esa0JBQUEsR0FBQSw2QkFBQSxJQUNBLFlBQUEsR0FoRkEsV0FBQSxpQkFnRkEsa0JBQUE7V0FFQSxZQUFBOztTQUdBLG1CQUFBO1FBQ0EsSUFBQTtTQUNBLFlBQUE7Ozs7O0FBS0EsZUFBQSxDQUFBLElBQUE7O1NBR0Esa0JBQUEsQ0FBQSxlQUFBO0FBQUEsaUJBQUEsR0FBQSxlQUFBOztTQUVBLGlCQUFBLENBQUEsY0FBQTtBQUFBLGdCQUFBLEdBQUEsY0FBQTs7QUFFQSxNQUFBLENBQUEsTUFBQSxDQUFBLEdBQUE7QUFDQSxjQUFBLEVBQUEsVUFBQTtBQUNBLGVBQUEsRUFBQSxXQUFBO0FBQ0EsZ0JBQUEsRUFBQSxZQUFBO0FBQ0EscUJBQUEsRUFBQSxpQkFBQTtBQUNBLHVCQUFBLEVBQUEsbUJBQUE7QUFDQSxzQkFBQSxFQUFBLGtCQUFBO0FBQ0EscUJBQUEsRUFBQSxpQkFBQTs7U0FHQSx1QkFBQSxDQUFBLElBQUE7UUFDQSxlQUFBLEdBQUEsSUFBQTtBQUVBLFFBQUEsQ0FBQSxJQUFBLFVBQUEsUUFBQTtZQUNBLE9BQUEsR0FBQSxRQUFBLENBQUEsS0FBQSx3QkFDQSxLQUFBLEdBQUEsT0FBQSxLQUFBLElBQUE7WUFFQSxLQUFBO2dCQUNBLFdBQUEsR0F2SEEsTUFBQSxRQXVIQSxPQUFBO0FBRUEsMkJBQUEsR0FBQSxXQUFBOztlQUdBLEtBQUE7O1dBR0EsZUFBQTs7U0FHQSw2QkFBQTtRQUNBLFFBQUEsSUFBQSxHQUFBLEVBQUEsTUFBQSxDQUFBLGFBQUEsR0FBQSxFQUFBLElBQ0Esa0JBQUEsR0FBQSxZQUFBLENBQUEsUUFBQTtXQUVBLGtCQUFBIn0=
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
if (!globalThis.rc) {
    globalThis.rc = _rc;
}
var rc = globalThis.rc;
var _default = {
    rc: rc
};
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvY29uZmlndXJhdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcblxuaW1wb3J0IHsgZmlyc3QsIHNlY29uZCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IERFRkFVTFRfUkNfQkFTRV9FWFRFTlNJT04gfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyByZWFkRmlsZSwgd3JpdGVGaWxlLCBjaGVja0ZpbGVFeGlzdHMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2ZpbGVTeXN0ZW1cIjtcblxuaWYgKCFnbG9iYWxUaGlzLnJjKSB7XG4gIGdsb2JhbFRoaXMucmMgPSBfcmM7XG59XG5cbmNvbnN0IHsgcmMgfSA9IGdsb2JhbFRoaXM7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcmNcbn07XG5cbmxldCBwYXRoUmVzb2x2ZXIgPSBwYXRoLnJlc29sdmUsXG4gICAgYmFzZUV4dGVuc2lvbiA9IERFRkFVTFRfUkNfQkFTRV9FWFRFTlNJT047XG5cbmZ1bmN0aW9uIF9yYyhlbnZpcm9ubWVudE5hbWVPckFyZ3YgPSBudWxsKSB7XG4gIGxldCBlbnZpcm9ubWVudCxcbiAgICAgIGVudmlyb25tZW50TmFtZSxcbiAgICAgIGVudmlyb25tZW50TmFtZU9yQXJndkFyZ3YgPSAoZW52aXJvbm1lbnROYW1lT3JBcmd2IGluc3RhbmNlb2YgQXJyYXkpO1xuXG4gIGlmIChlbnZpcm9ubWVudE5hbWVPckFyZ3ZBcmd2KSB7XG4gICAgY29uc3QgYXJndiA9IGVudmlyb25tZW50TmFtZU9yQXJndjsgLy8vXG5cbiAgICBlbnZpcm9ubWVudE5hbWUgPSBlbnZpcm9ubWVudE5hbWVGcm9tQXJndihhcmd2KTtcbiAgfSBlbHNlIHtcbiAgICBlbnZpcm9ubWVudE5hbWUgPSBlbnZpcm9ubWVudE5hbWVPckFyZ3Y7ICAvLy9cbiAgfVxuXG4gIGNvbnN0IGpzb24gPSByZWFkUkNGaWxlKCksXG4gICAgICAgIHsgZW52aXJvbm1lbnRzIH0gPSBqc29uO1xuXG4gIGlmIChlbnZpcm9ubWVudE5hbWUgPT09IG51bGwpIHtcbiAgICBjb25zdCBmaXJzdEVudmlyb25tZW50ID0gZmlyc3QoZW52aXJvbm1lbnRzKTtcblxuICAgIGVudmlyb25tZW50ID0gZmlyc3RFbnZpcm9ubWVudDsgLy8vXG4gIH0gZWxzZSB7XG4gICAgZW52aXJvbm1lbnQgPSBlbnZpcm9ubWVudHMuZmluZCgoZW52aXJvbm1lbnQpID0+IHtcbiAgICAgIGNvbnN0IHsgbmFtZSB9ID0gZW52aXJvbm1lbnQsXG4gICAgICAgICAgICBmb3VuZCA9IChuYW1lID09PSBlbnZpcm9ubWVudE5hbWUpO1xuXG4gICAgICByZXR1cm4gZm91bmQ7XG4gICAgfSk7XG4gIH1cblxuICBkZWxldGUgZW52aXJvbm1lbnQubmFtZTtcblxuICBPYmplY3QuYXNzaWduKHJjLCBlbnZpcm9ubWVudCk7XG5cbiAgcmV0dXJuIGVudmlyb25tZW50O1xufVxuXG5mdW5jdGlvbiByZWFkUkNGaWxlKCkge1xuICBjb25zdCBhYnNvbHV0ZVJDRmlsZVBhdGggPSBhYnNvbHV0ZVJDRmlsZVBhdGhGcm9tTm90aGluZygpLFxuICAgICAgICBmaWxlQ29udGVudCA9IHJlYWRGaWxlKGFic29sdXRlUkNGaWxlUGF0aCksXG4gICAgICAgIGpzb24gPSBKU09OLnBhcnNlKGZpbGVDb250ZW50KTtcblxuICByZXR1cm4ganNvbjsgICAgICBcbn1cblxuZnVuY3Rpb24gd3JpdGVSQ0ZpbGUoanNvbikge1xuICBjb25zdCBhYnNvbHV0ZVJDRmlsZVBhdGggPSBhYnNvbHV0ZVJDRmlsZVBhdGhGcm9tTm90aGluZygpLFxuICAgICAgICBmaWxlQ29udGVudCA9IEpTT04uc3RyaW5naWZ5KGpzb24sIG51bGwsIGBcXHRgKTtcblxuICB3cml0ZUZpbGUoYWJzb2x1dGVSQ0ZpbGVQYXRoLCBmaWxlQ29udGVudCk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVJDRmlsZShhZGRlZFByb3BlcnRpZXMsIC4uLmRlbGV0ZWRQcm9wZXJ0eU5hbWVzKSB7XG4gIGxldCBqc29uID0gcmVhZFJDRmlsZSgpO1xuXG4gIGlmIChhZGRlZFByb3BlcnRpZXMpIHtcbiAgICBPYmplY3QuYXNzaWduKGpzb24sIGFkZGVkUHJvcGVydGllcyk7XG4gIH1cblxuICBkZWxldGVkUHJvcGVydHlOYW1lcy5mb3JFYWNoKChkZWxldGVkUHJvcGVydHlOYW1lKSA9PiB7XG4gICAgZGVsZXRlIGpzb25bZGVsZXRlZFByb3BlcnR5TmFtZV07XG4gIH0pO1xuXG4gIHdyaXRlUkNGaWxlKGpzb24pOyAgICAgIFxufVxuXG5mdW5jdGlvbiBjaGVja1JDRmlsZUV4aXN0cygpIHtcbiAgY29uc3QgYWJzb2x1dGVSQ0ZpbGVQYXRoID0gYWJzb2x1dGVSQ0ZpbGVQYXRoRnJvbU5vdGhpbmcoKSxcbiAgICAgICAgcmNGaWxlRXhpc3RzID0gY2hlY2tGaWxlRXhpc3RzKGFic29sdXRlUkNGaWxlUGF0aCk7XG5cbiAgcmV0dXJuIHJjRmlsZUV4aXN0cztcbn1cblxuZnVuY3Rpb24gY3JlYXRlVmFjdW91c1JDRmlsZSgpIHtcbiAgY29uc3QganNvbiA9IHtcbiAgICBcImVudmlyb25tZW50c1wiOiBbXG4gICAgICB7fVxuICAgIF1cbiAgfTtcblxuICB3cml0ZVJDRmlsZShqc29uKTtcbn1cblxuZnVuY3Rpb24gc2V0UkNCYXNlRXh0ZW5zaW9uKHJjQmFzZUV4dGVuc2lvbikgeyBiYXNlRXh0ZW5zaW9uID0gcmNCYXNlRXh0ZW5zaW9uOyB9XG5cbmZ1bmN0aW9uIHNldFJDUGF0aFJlc29sdmVyKHJjUGF0aFJlc29sdmVyKSB7IHBhdGhSZXNvbHZlciA9IHJjUGF0aFJlc29sdmVyOyB9XG5cbk9iamVjdC5hc3NpZ24oX3JjLCB7XG4gIHJlYWRSQ0ZpbGUsXG4gIHdyaXRlUkNGaWxlLFxuICB1cGRhdGVSQ0ZpbGUsXG4gIGNoZWNrUkNGaWxlRXhpc3RzLFxuICBjcmVhdGVWYWN1b3VzUkNGaWxlLFxuICBzZXRSQ0Jhc2VFeHRlbnNpb24sXG4gIHNldFJDUGF0aFJlc29sdmVyXG59KTtcblxuZnVuY3Rpb24gZW52aXJvbm1lbnROYW1lRnJvbUFyZ3YoYXJndikge1xuICBsZXQgZW52aXJvbm1lbnROYW1lID0gbnVsbDtcblxuICBhcmd2LmZpbmQoKGFyZ3VtZW50KSA9PiB7ICAvLy9cbiAgICBjb25zdCBtYXRjaGVzID0gYXJndW1lbnQubWF0Y2goLy0tZW52aXJvbm1lbnQ9KC4rKS8pLFxuICAgICAgICAgIGZvdW5kID0gKG1hdGNoZXMgIT09IG51bGwpO1xuXG4gICAgaWYgKGZvdW5kKSB7XG4gICAgICBjb25zdCBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKTtcblxuICAgICAgZW52aXJvbm1lbnROYW1lID0gc2Vjb25kTWF0Y2g7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZvdW5kO1xuICB9KTtcblxuICByZXR1cm4gZW52aXJvbm1lbnROYW1lO1xufVxuXG5mdW5jdGlvbiBhYnNvbHV0ZVJDRmlsZVBhdGhGcm9tTm90aGluZygpIHtcbiAgY29uc3QgZmlsZVBhdGggPSBgLi8uJHtiYXNlRXh0ZW5zaW9ufXJjYCxcbiAgICAgICAgYWJzb2x1dGVSQ0ZpbGVQYXRoID0gcGF0aFJlc29sdmVyKGZpbGVQYXRoKTtcblxuICByZXR1cm4gYWJzb2x1dGVSQ0ZpbGVQYXRoO1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQUE7Ozs7O0lBRUEsS0FBQTtJQUVBLE1BQUE7SUFDQSxVQUFBO0lBQ0EsV0FBQTs7Ozs7Ozs7Ozs7OztLQUVBLFVBQUEsQ0FBQSxFQUFBO0FBQ0EsY0FBQSxDQUFBLEVBQUEsR0FBQSxHQUFBOztJQUdBLEVBQUEsR0FBQSxVQUFBLENBQUEsRUFBQTs7QUFHQSxNQUFBLEVBQUEsRUFBQTs7O0lBR0EsWUFBQSxHQWhCQSxLQUFBLFNBZ0JBLE9BQUEsRUFDQSxhQUFBLEdBZEEsVUFBQTtTQWdCQSxHQUFBLENBQUEsS0FBQTtRQUFBLHFC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
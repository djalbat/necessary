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
    var absoluteRCFilePath = absoluteRCFilePathFromNothing(), fileContent = JSON.stringify(json, null, "  ");
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvY29uZmlndXJhdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcblxuaW1wb3J0IHsgZmlyc3QsIHNlY29uZCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IERFRkFVTFRfUkNfQkFTRV9FWFRFTlNJT04gfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyByZWFkRmlsZSwgd3JpdGVGaWxlLCBjaGVja0ZpbGVFeGlzdHMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2ZpbGVTeXN0ZW1cIjtcblxuaWYgKCFnbG9iYWxUaGlzLnJjKSB7XG4gIGdsb2JhbFRoaXMucmMgPSBfcmM7XG59XG5cbmNvbnN0IHsgcmMgfSA9IGdsb2JhbFRoaXM7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcmNcbn07XG5cbmxldCBwYXRoUmVzb2x2ZXIgPSBwYXRoLnJlc29sdmUsXG4gICAgYmFzZUV4dGVuc2lvbiA9IERFRkFVTFRfUkNfQkFTRV9FWFRFTlNJT047XG5cbmZ1bmN0aW9uIF9yYyhlbnZpcm9ubWVudE5hbWVPckFyZ3YgPSBudWxsKSB7XG4gIGxldCBlbnZpcm9ubWVudCxcbiAgICAgIGVudmlyb25tZW50TmFtZSxcbiAgICAgIGVudmlyb25tZW50TmFtZU9yQXJndkFyZ3YgPSAoZW52aXJvbm1lbnROYW1lT3JBcmd2IGluc3RhbmNlb2YgQXJyYXkpO1xuXG4gIGlmIChlbnZpcm9ubWVudE5hbWVPckFyZ3ZBcmd2KSB7XG4gICAgY29uc3QgYXJndiA9IGVudmlyb25tZW50TmFtZU9yQXJndjsgLy8vXG5cbiAgICBlbnZpcm9ubWVudE5hbWUgPSBlbnZpcm9ubWVudE5hbWVGcm9tQXJndihhcmd2KTtcbiAgfSBlbHNlIHtcbiAgICBlbnZpcm9ubWVudE5hbWUgPSBlbnZpcm9ubWVudE5hbWVPckFyZ3Y7ICAvLy9cbiAgfVxuXG4gIGNvbnN0IGpzb24gPSByZWFkUkNGaWxlKCksXG4gICAgICAgIHsgZW52aXJvbm1lbnRzIH0gPSBqc29uO1xuXG4gIGlmIChlbnZpcm9ubWVudE5hbWUgPT09IG51bGwpIHtcbiAgICBjb25zdCBmaXJzdEVudmlyb25tZW50ID0gZmlyc3QoZW52aXJvbm1lbnRzKTtcblxuICAgIGVudmlyb25tZW50ID0gZmlyc3RFbnZpcm9ubWVudDsgLy8vXG4gIH0gZWxzZSB7XG4gICAgZW52aXJvbm1lbnQgPSBlbnZpcm9ubWVudHMuZmluZCgoZW52aXJvbm1lbnQpID0+IHtcbiAgICAgIGNvbnN0IHsgbmFtZSB9ID0gZW52aXJvbm1lbnQsXG4gICAgICAgICAgICBmb3VuZCA9IChuYW1lID09PSBlbnZpcm9ubWVudE5hbWUpO1xuXG4gICAgICByZXR1cm4gZm91bmQ7XG4gICAgfSk7XG4gIH1cblxuICBkZWxldGUgZW52aXJvbm1lbnQubmFtZTtcblxuICBPYmplY3QuYXNzaWduKHJjLCBlbnZpcm9ubWVudCk7XG5cbiAgcmV0dXJuIGVudmlyb25tZW50O1xufVxuXG5mdW5jdGlvbiByZWFkUkNGaWxlKCkge1xuICBjb25zdCBhYnNvbHV0ZVJDRmlsZVBhdGggPSBhYnNvbHV0ZVJDRmlsZVBhdGhGcm9tTm90aGluZygpLFxuICAgICAgICBmaWxlQ29udGVudCA9IHJlYWRGaWxlKGFic29sdXRlUkNGaWxlUGF0aCksXG4gICAgICAgIGpzb24gPSBKU09OLnBhcnNlKGZpbGVDb250ZW50KTtcblxuICByZXR1cm4ganNvbjsgICAgICBcbn1cblxuZnVuY3Rpb24gd3JpdGVSQ0ZpbGUoanNvbikge1xuICBjb25zdCBhYnNvbHV0ZVJDRmlsZVBhdGggPSBhYnNvbHV0ZVJDRmlsZVBhdGhGcm9tTm90aGluZygpLFxuICAgICAgICBmaWxlQ29udGVudCA9IEpTT04uc3RyaW5naWZ5KGpzb24sIG51bGwsIFwiICBcIik7XG5cbiAgd3JpdGVGaWxlKGFic29sdXRlUkNGaWxlUGF0aCwgZmlsZUNvbnRlbnQpO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVSQ0ZpbGUoYWRkZWRQcm9wZXJ0aWVzLCAuLi5kZWxldGVkUHJvcGVydHlOYW1lcykge1xuICBsZXQganNvbiA9IHJlYWRSQ0ZpbGUoKTtcblxuICBpZiAoYWRkZWRQcm9wZXJ0aWVzKSB7XG4gICAgT2JqZWN0LmFzc2lnbihqc29uLCBhZGRlZFByb3BlcnRpZXMpO1xuICB9XG5cbiAgZGVsZXRlZFByb3BlcnR5TmFtZXMuZm9yRWFjaCgoZGVsZXRlZFByb3BlcnR5TmFtZSkgPT4ge1xuICAgIGRlbGV0ZSBqc29uW2RlbGV0ZWRQcm9wZXJ0eU5hbWVdO1xuICB9KTtcblxuICB3cml0ZVJDRmlsZShqc29uKTsgICAgICBcbn1cblxuZnVuY3Rpb24gY2hlY2tSQ0ZpbGVFeGlzdHMoKSB7XG4gIGNvbnN0IGFic29sdXRlUkNGaWxlUGF0aCA9IGFic29sdXRlUkNGaWxlUGF0aEZyb21Ob3RoaW5nKCksXG4gICAgICAgIHJjRmlsZUV4aXN0cyA9IGNoZWNrRmlsZUV4aXN0cyhhYnNvbHV0ZVJDRmlsZVBhdGgpO1xuXG4gIHJldHVybiByY0ZpbGVFeGlzdHM7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVZhY3VvdXNSQ0ZpbGUoKSB7XG4gIGNvbnN0IGpzb24gPSB7XG4gICAgXCJlbnZpcm9ubWVudHNcIjogW1xuICAgICAge31cbiAgICBdXG4gIH07XG5cbiAgd3JpdGVSQ0ZpbGUoanNvbik7XG59XG5cbmZ1bmN0aW9uIHNldFJDQmFzZUV4dGVuc2lvbihyY0Jhc2VFeHRlbnNpb24pIHsgYmFzZUV4dGVuc2lvbiA9IHJjQmFzZUV4dGVuc2lvbjsgfVxuXG5mdW5jdGlvbiBzZXRSQ1BhdGhSZXNvbHZlcihyY1BhdGhSZXNvbHZlcikgeyBwYXRoUmVzb2x2ZXIgPSByY1BhdGhSZXNvbHZlcjsgfVxuXG5PYmplY3QuYXNzaWduKF9yYywge1xuICByZWFkUkNGaWxlLFxuICB3cml0ZVJDRmlsZSxcbiAgdXBkYXRlUkNGaWxlLFxuICBjaGVja1JDRmlsZUV4aXN0cyxcbiAgY3JlYXRlVmFjdW91c1JDRmlsZSxcbiAgc2V0UkNCYXNlRXh0ZW5zaW9uLFxuICBzZXRSQ1BhdGhSZXNvbHZlclxufSk7XG5cbmZ1bmN0aW9uIGVudmlyb25tZW50TmFtZUZyb21Bcmd2KGFyZ3YpIHtcbiAgbGV0IGVudmlyb25tZW50TmFtZSA9IG51bGw7XG5cbiAgYXJndi5maW5kKChhcmd1bWVudCkgPT4geyAgLy8vXG4gICAgY29uc3QgbWF0Y2hlcyA9IGFyZ3VtZW50Lm1hdGNoKC8tLWVudmlyb25tZW50PSguKykvKSxcbiAgICAgICAgICBmb3VuZCA9IChtYXRjaGVzICE9PSBudWxsKTtcblxuICAgIGlmIChmb3VuZCkge1xuICAgICAgY29uc3Qgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyk7XG5cbiAgICAgIGVudmlyb25tZW50TmFtZSA9IHNlY29uZE1hdGNoO1xuICAgIH1cblxuICAgIHJldHVybiBmb3VuZDtcbiAgfSk7XG5cbiAgcmV0dXJuIGVudmlyb25tZW50TmFtZTtcbn1cblxuZnVuY3Rpb24gYWJzb2x1dGVSQ0ZpbGVQYXRoRnJvbU5vdGhpbmcoKSB7XG4gIGNvbnN0IGZpbGVQYXRoID0gYC4vLiR7YmFzZUV4dGVuc2lvbn1yY2AsXG4gICAgICAgIGFic29sdXRlUkNGaWxlUGF0aCA9IHBhdGhSZXNvbHZlcihmaWxlUGF0aCk7XG5cbiAgcmV0dXJuIGFic29sdXRlUkNGaWxlUGF0aDtcbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFBOzs7OztJQUVBLEtBQUE7SUFFQSxNQUFBO0lBQ0EsVUFBQTtJQUNBLFdBQUE7Ozs7Ozs7Ozs7Ozs7S0FFQSxVQUFBLENBQUEsRUFBQTtBQUNBLGNBQUEsQ0FBQSxFQUFBLEdBQUEsR0FBQTs7SUFHQSxFQUFBLEdBQUEsVUFBQSxDQUFBLEVBQUE7O0FBR0EsTUFBQSxFQUFBLEVBQUE7OztJQUdBLFlBQUEsR0FoQkEsS0FBQSxTQWdCQSxPQUFBLEVBQ0EsYUFBQSxHQWRBLFVBQUE7U0FnQkEsR0FBQSxDQUFBLEtBQUE7UUFBQSxxQkFBQSxHQUFBLEtBQUEsY0FBQSxJQUFBLEdBQUEsS0FBQTtRQUNBLFdBQUEsRUFDQSxlQUFBLEVBQ0EseUJBQUEsR0FBQSxXQUFBLENBQUEscUJBQUEsRUFBQSxLQUFBO1FBRUEseUJBQUE7WUFDQSxJQUFBLEdBQUEscUJBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQTtBQUVBLHVCQUFBLEdBQUEsdUJBQUEsQ0FBQSxJQUFBOztBQUVBLHVCQUFBLEdBQUEscUJBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQTs7UUFHQSxJQUFBLEdBQUEsVUFBQSxJQUNBLFlBQUEsR0FBQSxJQUFBLENBQUEsWUFBQTtRQUVBLGVBQUEsS0FBQSxJQUFBO1lBQ0EsZ0JBQUEsR0FsQ0EsTUFBQSxPQWtDQSxZQUFBO0FBRUEsbUJBQUEsR0FBQSxnQkFBQSxDQUFBLENBQUEsRUFBQSxDQUFBOztBQUVBLG1CQUFBLEdBQUEsWUFBQSxDQUFBLElBQUEsVUFBQSxZQUFBO2dCQUNBLElBQUEsR0FBQSxZQUFBLENBQUEsSUFBQSxFQUNBLEtBQUEsR0FBQSxJQUFBLEtBQUEsZUFBQTttQkFFQSxLQUFBOzs7V0FJQSxXQUFBLENBQUEsSUFBQTtBQUVBLFVBQUEsQ0FBQSxNQUFBLENBQUEsRUFBQSxFQUFBLFdBQUE7V0FFQSxXQUFBOztTQUdBLFVBQUE7UUFDQSxrQkFBQSxHQUFBLDZCQUFBLElBQ0EsV0FBQSxHQXJEQSxXQUFBLFVBcURBLGtCQUFBLEdBQ0EsSUFBQSxHQUFBLElBQUEsQ0FBQSxLQUFBLENBQUEsV0FBQTtXQUVBLElBQUE7O1NBR0EsV0FBQSxDQUFBLElBQUE7UUFDQSxrQkFBQSxHQUFBLDZCQUFBLElBQ0EsV0FBQSxHQUFBLElBQUEsQ0FBQSxTQUFBLENBQUEsSUFBQSxFQUFBLElBQUEsR0FBQSxFQUFBO0FBN0RBLGVBQUEsV0ErREEsa0JBQUEsRUFBQSxXQUFBOztTQUdBLFlBQUEsQ0FBQSxlQUFBO1lBQUEsSUFBQSxHQUFBLFNBQUEsQ0FBQSxNQUFBLEVBQUEsb0JBQUEsYUFBQSxJQUFBLEdBQUEsQ0FBQSxHQUFBLElBQUEsR0FBQSxDQUFBLEdBQUEsQ0FBQSxHQUFBLElBQUEsR0FBQSxDQUFBLEVBQUEsSUFBQSxHQUFBLElBQUEsRUFBQSxJQUFBO0FBQUEsNEJBQUEsQ0FBQSxJQUFBLEdBQUEsQ0FBQSxJQUFBLFNBQUEsQ0FBQSxJQUFBOztRQUNBLElBQUEsR0FBQSxVQUFBO1FBRUEsZUFBQTtBQUNBLGNBQUEsQ0FBQSxNQUFBLENBQUEsSUFBQSxFQUFBLGVBQUE7O0FBR0Esd0JBQUEsQ0FBQSxPQUFBLFVBQUEsbUJBQUE7ZUFDQSxJQUFBLENBQUEsbUJBQUE7O0FBR0EsZUFBQSxDQUFBLElBQUE7O1NBR0EsaUJBQUE7UUFDQSxrQkFBQSxHQUFBLDZCQUFBLElBQ0EsWUFBQSxHQWxGQSxXQUFBLGlCQWtGQSxrQkFBQTtXQUVBLFlBQUE7O1NBR0EsbUJBQUE7UUFDQSxJQUFBO1NBQ0EsWUFBQTs7Ozs7QUFLQSxlQUFBLENBQUEsSUFBQTs7U0FHQSxrQkFBQSxDQUFBLGVBQUE7QUFBQSxpQkFBQSxHQUFBLGVBQUE7O1NBRUEsaUJBQUEsQ0FBQSxjQUFBO0FBQUEsZ0JBQUEsR0FBQSxjQUFBOztBQUVBLE1BQUEsQ0FBQSxNQUFBLENBQUEsR0FBQTtBQUNBLGNBQUEsRUFBQSxVQUFBO0FBQ0EsZUFBQSxFQUFBLFdBQUE7QUFDQSxnQkFBQSxFQUFBLFlBQUE7QUFDQSxxQkFBQSxFQUFBLGlCQUFBO0FBQ0EsdUJBQUEsRUFBQSxtQkFBQTtBQUNBLHNCQUFBLEVBQUEsa0JBQUE7QUFDQSxxQkFBQSxFQUFBLGlCQUFBOztTQUdBLHVCQUFBLENBQUEsSUFBQTtRQUNBLGVBQUEsR0FBQSxJQUFBO0FBRUEsUUFBQSxDQUFBLElBQUEsVUFBQSxRQUFBO1lBQ0EsT0FBQSxHQUFBLFFBQUEsQ0FBQSxLQUFBLHdCQUNBLEtBQUEsR0FBQSxPQUFBLEtBQUEsSUFBQTtZQUVBLEtBQUE7Z0JBQ0EsV0FBQSxHQXpIQSxNQUFBLFFBeUhBLE9BQUE7QUFFQSwyQkFBQSxHQUFBLFdBQUE7O2VBR0EsS0FBQTs7V0FHQSxlQUFBOztTQUdBLDZCQUFBO1FBQ0EsUUFBQSxJQUFBLEdBQUEsRUFBQSxNQUFBLENBQUEsYUFBQSxHQUFBLEVBQUEsSUFDQSxrQkFBQSxHQUFBLFlBQUEsQ0FBQSxRQUFBO1dBRUEsa0JBQUEifQ==
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _array = require("../utilities/array");
var _defaults = require("../defaults");
var _fileSystem = require("../utilities/fileSystem");
var _constants = require("../constants");
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
if (!globalThis.rc) {
    globalThis.rc = _rc;
}
var rc = globalThis.rc;
var _default = {
    rc: rc
};
var baseExtension = _defaults.DEFAULT_RC_BASE_EXTENSION;
function _rc(environmentName) {
    environmentName = environmentName || environmentNameFromArgv() || environmentNameFromEnv(); ///
    var json = readRCFile();
    var environment = findEnvironment(json, environmentName);
    json = environment; ///
    replaceEnvironmentVariables(json);
    Object.assign(rc, environment);
}
function readRCFile() {
    var rcFilePath = rcFilePathFromNothing(), rcFileContent = (0, _fileSystem.readFile)(rcFilePath), json = JSON.parse(rcFileContent);
    return json;
}
function writeRCFile(json) {
    var rcFilePath = rcFilePathFromNothing(), rdFileContent = JSON.stringify(json, null, _constants.DOUBLE_SPACE);
    (0, _fileSystem.writeFile)(rcFilePath, rdFileContent);
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
    var rcFilePath = rcFilePathFromNothing(), rcFileExists = (0, _fileSystem.checkFileExists)(rcFilePath);
    return rcFileExists;
}
function createVacuousRCFile() {
    var environments = [], json = {
        environments: environments
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
function findEnvironment(json, environmentName) {
    var environment;
    var environments = json.environments;
    if (environmentName === null) {
        var firstEnvironment = (0, _array.first)(environments);
        environment = firstEnvironment; ///
    } else {
        environment = environments.find(function(environment) {
            var name = environment.name;
            if (name === environmentName) {
                return true;
            }
        });
    }
    delete environment.name;
    return environment;
}
function rcFilePathFromNothing() {
    var rcFilePath = "./.".concat(baseExtension, "rc");
    return rcFilePath;
}
function environmentNameFromEnv() {
    var environmentName = process.env[_constants.ENVIRONMENT] || null;
    return environmentName;
}
function environmentNameFromArgv() {
    var environmentName = null;
    process.argv.find(function(argument) {
        var matches = argument.match(/--environment=(.+)/), found = matches !== null;
        if (found) {
            var secondMatch = (0, _array.second)(matches);
            environmentName = secondMatch;
        }
        return found;
    });
    return environmentName;
}
function replaceEnvironmentVariable(string) {
    var value = null;
    var stringUpperCase = isStringUpperCase(string);
    if (stringUpperCase) {
        var name = string; ///
        value = process.env[name];
        if (value === undefined) {
            value = null;
        }
    }
    return value;
}
function replaceEnvironmentVariables(environment) {
    var json = environment;
    var jsonArray = isJSONArray(json), jsonObject = isJSONObject(json);
    if (false) {
    ///
    } else if (jsonArray) {
        var array = json, length = array.length;
        for(var index = 0; index < length; index++){
            var json1 = array[index], jsonString = isJSONString(json1);
            if (jsonString) {
                var string = json1, value = replaceEnvironmentVariable(string);
                if (value !== null) {
                    array[index] = value;
                }
            }
        }
    } else if (jsonObject) {
        var object = json; ///
        for(var name in object){
            var json2 = object[name], jsonString1 = isJSONString(json2);
            if (jsonString1) {
                var string1 = json2, value1 = replaceEnvironmentVariable(string1); ///
                if (value1 !== null) {
                    object[name] = value1;
                }
            } else {
                replaceEnvironmentVariables(json2);
            }
        }
    }
}
function isJSONArray(json) {
    var jsonArray = _instanceof(json, Array);
    return jsonArray;
}
function isJSONObject(json) {
    var jsonArray = isJSONArray(json), jsonPrimitive = isJSONPrimitive(json), jsonObject = !jsonArray && !jsonPrimitive;
    return jsonObject;
}
function isJSONString(json) {
    var jsonString = (typeof json === "undefined" ? "undefined" : _type_of(json)) === _constants.STRING;
    return jsonString;
}
function isJSONNumber(json) {
    var jsonNumber = (typeof json === "undefined" ? "undefined" : _type_of(json)) === _constants.NUMBER;
    return jsonNumber;
}
function isJSONBoolean(json) {
    var jsonBoolean = (typeof json === "undefined" ? "undefined" : _type_of(json)) === _constants.BOOLEAN;
    return jsonBoolean;
}
function isJSONPrimitive(json) {
    var jsonString = isJSONString(json), jsonNumber = isJSONNumber(json), jsonBoolean = isJSONBoolean(json), jsonPrimitive = jsonString || jsonNumber || jsonBoolean;
    return jsonPrimitive;
}
function isStringUpperCase(string) {
    var upperCaseString = string.toUpperCase(), stringUpperCase = string === upperCaseString;
    return stringUpperCase;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvY29uZmlndXJhdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgZmlyc3QsIHNlY29uZCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IERFRkFVTFRfUkNfQkFTRV9FWFRFTlNJT04gfSBmcm9tIFwiLi4vZGVmYXVsdHNcIjtcbmltcG9ydCB7IHJlYWRGaWxlLCB3cml0ZUZpbGUsIGNoZWNrRmlsZUV4aXN0cyB9IGZyb20gXCIuLi91dGlsaXRpZXMvZmlsZVN5c3RlbVwiO1xuaW1wb3J0IHsgU1RSSU5HLCBOVU1CRVIsIEJPT0xFQU4sIEVOVklST05NRU5ULCBET1VCTEVfU1BBQ0UgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmlmICghZ2xvYmFsVGhpcy5yYykge1xuICBnbG9iYWxUaGlzLnJjID0gX3JjO1xufVxuXG5jb25zdCB7IHJjIH0gPSBnbG9iYWxUaGlzO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHJjXG59O1xuXG5sZXQgYmFzZUV4dGVuc2lvbiA9IERFRkFVTFRfUkNfQkFTRV9FWFRFTlNJT047XG5cbmZ1bmN0aW9uIF9yYyhlbnZpcm9ubWVudE5hbWUpIHtcbiAgZW52aXJvbm1lbnROYW1lID0gZW52aXJvbm1lbnROYW1lIHx8IGVudmlyb25tZW50TmFtZUZyb21Bcmd2KCkgfHwgZW52aXJvbm1lbnROYW1lRnJvbUVudigpOyAvLy9cblxuICBsZXQganNvbiA9IHJlYWRSQ0ZpbGUoKTtcblxuICBjb25zdCBlbnZpcm9ubWVudCA9IGZpbmRFbnZpcm9ubWVudChqc29uLCBlbnZpcm9ubWVudE5hbWUpO1xuXG4gIGpzb24gPSBlbnZpcm9ubWVudDsgLy8vXG5cbiAgcmVwbGFjZUVudmlyb25tZW50VmFyaWFibGVzKGpzb24pO1xuXG4gIE9iamVjdC5hc3NpZ24ocmMsIGVudmlyb25tZW50KTtcbn1cblxuZnVuY3Rpb24gcmVhZFJDRmlsZSgpIHtcbiAgY29uc3QgcmNGaWxlUGF0aCA9IHJjRmlsZVBhdGhGcm9tTm90aGluZygpLFxuICAgICAgICByY0ZpbGVDb250ZW50ID0gcmVhZEZpbGUocmNGaWxlUGF0aCksXG4gICAgICAgIGpzb24gPSBKU09OLnBhcnNlKHJjRmlsZUNvbnRlbnQpO1xuXG4gIHJldHVybiBqc29uOyAgICAgIFxufVxuXG5mdW5jdGlvbiB3cml0ZVJDRmlsZShqc29uKSB7XG4gIGNvbnN0IHJjRmlsZVBhdGggPSByY0ZpbGVQYXRoRnJvbU5vdGhpbmcoKSxcbiAgICAgICAgcmRGaWxlQ29udGVudCA9IEpTT04uc3RyaW5naWZ5KGpzb24sIG51bGwsIERPVUJMRV9TUEFDRSk7XG5cbiAgd3JpdGVGaWxlKHJjRmlsZVBhdGgsIHJkRmlsZUNvbnRlbnQpO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVSQ0ZpbGUoYWRkZWRQcm9wZXJ0aWVzLCAuLi5kZWxldGVkUHJvcGVydHlOYW1lcykge1xuICBsZXQganNvbiA9IHJlYWRSQ0ZpbGUoKTtcblxuICBpZiAoYWRkZWRQcm9wZXJ0aWVzKSB7XG4gICAgT2JqZWN0LmFzc2lnbihqc29uLCBhZGRlZFByb3BlcnRpZXMpO1xuICB9XG5cbiAgZGVsZXRlZFByb3BlcnR5TmFtZXMuZm9yRWFjaCgoZGVsZXRlZFByb3BlcnR5TmFtZSkgPT4ge1xuICAgIGRlbGV0ZSBqc29uW2RlbGV0ZWRQcm9wZXJ0eU5hbWVdO1xuICB9KTtcblxuICB3cml0ZVJDRmlsZShqc29uKTsgICAgICBcbn1cblxuZnVuY3Rpb24gY2hlY2tSQ0ZpbGVFeGlzdHMoKSB7XG4gIGNvbnN0IHJjRmlsZVBhdGggPSByY0ZpbGVQYXRoRnJvbU5vdGhpbmcoKSxcbiAgICAgICAgcmNGaWxlRXhpc3RzID0gY2hlY2tGaWxlRXhpc3RzKHJjRmlsZVBhdGgpO1xuXG4gIHJldHVybiByY0ZpbGVFeGlzdHM7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVZhY3VvdXNSQ0ZpbGUoKSB7XG4gIGNvbnN0IGVudmlyb25tZW50cyA9IFtdLFxuICAgICAgICBqc29uID0ge1xuICAgICAgICAgIGVudmlyb25tZW50c1xuICAgICAgICB9O1xuXG4gIHdyaXRlUkNGaWxlKGpzb24pO1xufVxuXG5mdW5jdGlvbiBzZXRSQ0Jhc2VFeHRlbnNpb24ocmNCYXNlRXh0ZW5zaW9uKSB7IGJhc2VFeHRlbnNpb24gPSByY0Jhc2VFeHRlbnNpb247IH1cblxuT2JqZWN0LmFzc2lnbihfcmMsIHtcbiAgcmVhZFJDRmlsZSxcbiAgd3JpdGVSQ0ZpbGUsXG4gIHVwZGF0ZVJDRmlsZSxcbiAgY2hlY2tSQ0ZpbGVFeGlzdHMsXG4gIGNyZWF0ZVZhY3VvdXNSQ0ZpbGUsXG4gIHNldFJDQmFzZUV4dGVuc2lvblxufSk7XG5cbmZ1bmN0aW9uIGZpbmRFbnZpcm9ubWVudChqc29uLCBlbnZpcm9ubWVudE5hbWUpIHtcbiAgbGV0IGVudmlyb25tZW50O1xuXG4gIGNvbnN0IHsgZW52aXJvbm1lbnRzIH0gPSBqc29uO1xuXG4gIGlmIChlbnZpcm9ubWVudE5hbWUgPT09IG51bGwpIHtcbiAgICBjb25zdCBmaXJzdEVudmlyb25tZW50ID0gZmlyc3QoZW52aXJvbm1lbnRzKTtcblxuICAgIGVudmlyb25tZW50ID0gZmlyc3RFbnZpcm9ubWVudDsgLy8vXG4gIH0gZWxzZSB7XG4gICAgZW52aXJvbm1lbnQgPSBlbnZpcm9ubWVudHMuZmluZCgoZW52aXJvbm1lbnQpID0+IHtcbiAgICAgIGNvbnN0IHsgbmFtZSB9ID0gZW52aXJvbm1lbnQ7XG5cbiAgICAgIGlmKG5hbWUgPT09IGVudmlyb25tZW50TmFtZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGRlbGV0ZSBlbnZpcm9ubWVudC5uYW1lXG5cbiAgcmV0dXJuIGVudmlyb25tZW50O1xufVxuXG5mdW5jdGlvbiByY0ZpbGVQYXRoRnJvbU5vdGhpbmcoKSB7XG4gIGNvbnN0IHJjRmlsZVBhdGggPSBgLi8uJHtiYXNlRXh0ZW5zaW9ufXJjYDtcblxuICByZXR1cm4gcmNGaWxlUGF0aDtcbn1cblxuZnVuY3Rpb24gZW52aXJvbm1lbnROYW1lRnJvbUVudigpIHtcbiAgY29uc3QgZW52aXJvbm1lbnROYW1lID0gcHJvY2Vzcy5lbnZbRU5WSVJPTk1FTlRdIHx8IG51bGw7XG5cbiAgcmV0dXJuIGVudmlyb25tZW50TmFtZTtcbn1cblxuZnVuY3Rpb24gZW52aXJvbm1lbnROYW1lRnJvbUFyZ3YoKSB7XG4gIGxldCBlbnZpcm9ubWVudE5hbWUgPSBudWxsO1xuXG4gIHByb2Nlc3MuYXJndi5maW5kKChhcmd1bWVudCkgPT4geyAgLy8vXG4gICAgY29uc3QgbWF0Y2hlcyA9IGFyZ3VtZW50Lm1hdGNoKC8tLWVudmlyb25tZW50PSguKykvKSxcbiAgICAgICAgICBmb3VuZCA9IChtYXRjaGVzICE9PSBudWxsKTtcblxuICAgIGlmIChmb3VuZCkge1xuICAgICAgY29uc3Qgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyk7XG5cbiAgICAgIGVudmlyb25tZW50TmFtZSA9IHNlY29uZE1hdGNoO1xuICAgIH1cblxuICAgIHJldHVybiBmb3VuZDtcbiAgfSk7XG5cbiAgcmV0dXJuIGVudmlyb25tZW50TmFtZTtcbn1cblxuZnVuY3Rpb24gcmVwbGFjZUVudmlyb25tZW50VmFyaWFibGUoc3RyaW5nKSB7XG4gIGxldCB2YWx1ZSA9IG51bGw7XG5cbiAgY29uc3Qgc3RyaW5nVXBwZXJDYXNlID0gaXNTdHJpbmdVcHBlckNhc2Uoc3RyaW5nKTtcblxuICBpZiAoc3RyaW5nVXBwZXJDYXNlKSB7XG4gICAgY29uc3QgbmFtZSA9IHN0cmluZzsgIC8vL1xuXG4gICAgdmFsdWUgPSBwcm9jZXNzLmVudltuYW1lXTtcblxuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB2YWx1ZSA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHZhbHVlO1xufVxuXG5mdW5jdGlvbiByZXBsYWNlRW52aXJvbm1lbnRWYXJpYWJsZXMoZW52aXJvbm1lbnQpIHtcbiAgbGV0IGpzb24gPSBlbnZpcm9ubWVudDtcblxuICBjb25zdCBqc29uQXJyYXkgPSBpc0pTT05BcnJheShqc29uKSxcbiAgICAgICAganNvbk9iamVjdCA9IGlzSlNPTk9iamVjdChqc29uKTtcblxuICBpZiAoZmFsc2UpIHtcbiAgICAvLy9cbiAgfSBlbHNlIGlmIChqc29uQXJyYXkpIHtcbiAgICBjb25zdCBhcnJheSA9IGpzb24sIC8vL1xuICAgICAgICAgIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBsZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIGNvbnN0IGpzb24gPSBhcnJheVtpbmRleF0sXG4gICAgICAgICAgICBqc29uU3RyaW5nID0gaXNKU09OU3RyaW5nKGpzb24pO1xuXG4gICAgICBpZiAoanNvblN0cmluZykge1xuICAgICAgICBjb25zdCBzdHJpbmcgPSBqc29uLCAgLy8vXG4gICAgICAgICAgICAgIHZhbHVlID0gcmVwbGFjZUVudmlyb25tZW50VmFyaWFibGUoc3RyaW5nKTtcblxuICAgICAgICBpZiAodmFsdWUgIT09IG51bGwpIHtcbiAgICAgICAgICBhcnJheVtpbmRleF0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIGlmIChqc29uT2JqZWN0KSB7XG4gICAgY29uc3Qgb2JqZWN0ID0ganNvbjsgIC8vL1xuXG4gICAgZm9yIChsZXQgbmFtZSBpbiBvYmplY3QpIHtcbiAgICAgIGNvbnN0IGpzb24gPSBvYmplY3RbbmFtZV0sXG4gICAgICAgICAgICBqc29uU3RyaW5nID0gaXNKU09OU3RyaW5nKGpzb24pO1xuXG4gICAgICBpZiAoanNvblN0cmluZykge1xuICAgICAgICBjb25zdCBzdHJpbmcgPSBqc29uLCAgLy8vXG4gICAgICAgICAgICAgIHZhbHVlID0gcmVwbGFjZUVudmlyb25tZW50VmFyaWFibGUoc3RyaW5nKTsgIC8vL1xuXG4gICAgICAgIGlmICh2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgICAgIG9iamVjdFtuYW1lXSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgIHtcbiAgICAgICAgcmVwbGFjZUVudmlyb25tZW50VmFyaWFibGVzKGpzb24pO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBpc0pTT05BcnJheShqc29uKSB7XG4gIGNvbnN0IGpzb25BcnJheSA9IChqc29uIGluc3RhbmNlb2YgQXJyYXkpO1xuXG4gIHJldHVybiBqc29uQXJyYXk7XG59XG5cbmZ1bmN0aW9uIGlzSlNPTk9iamVjdChqc29uKSB7XG4gIGNvbnN0IGpzb25BcnJheSA9IGlzSlNPTkFycmF5KGpzb24pLFxuICAgICAgICBqc29uUHJpbWl0aXZlID0gaXNKU09OUHJpbWl0aXZlKGpzb24pLFxuICAgICAgICBqc29uT2JqZWN0ID0gKCFqc29uQXJyYXkgJiYgISBqc29uUHJpbWl0aXZlKTtcblxuICByZXR1cm4ganNvbk9iamVjdDtcbn1cblxuZnVuY3Rpb24gaXNKU09OU3RyaW5nKGpzb24pIHtcbiAgY29uc3QganNvblN0cmluZyA9ICh0eXBlb2YganNvbiA9PT0gU1RSSU5HKTtcblxuICByZXR1cm4ganNvblN0cmluZztcbn1cblxuZnVuY3Rpb24gaXNKU09OTnVtYmVyKGpzb24pIHtcbiAgY29uc3QganNvbk51bWJlciA9ICh0eXBlb2YganNvbiA9PT0gTlVNQkVSKTtcblxuICByZXR1cm4ganNvbk51bWJlcjtcbn1cblxuZnVuY3Rpb24gaXNKU09OQm9vbGVhbihqc29uKSB7XG4gIGNvbnN0IGpzb25Cb29sZWFuID0gKHR5cGVvZiBqc29uID09PSBCT09MRUFOKTtcblxuICByZXR1cm4ganNvbkJvb2xlYW47XG59XG5cbmZ1bmN0aW9uIGlzSlNPTlByaW1pdGl2ZShqc29uKSB7XG4gIGNvbnN0IGpzb25TdHJpbmcgPSBpc0pTT05TdHJpbmcoanNvbiksXG4gICAgICAgIGpzb25OdW1iZXIgPSBpc0pTT05OdW1iZXIoanNvbiksXG4gICAgICAgIGpzb25Cb29sZWFuID0gaXNKU09OQm9vbGVhbihqc29uKSxcbiAgICAgICAganNvblByaW1pdGl2ZSA9IChqc29uU3RyaW5nIHx8IGpzb25OdW1iZXIgfHwganNvbkJvb2xlYW4pO1xuXG4gIHJldHVybiBqc29uUHJpbWl0aXZlO1xufVxuXG5mdW5jdGlvbiBpc1N0cmluZ1VwcGVyQ2FzZShzdHJpbmcpIHtcbiAgY29uc3QgdXBwZXJDYXNlU3RyaW5nID0gc3RyaW5nLnRvVXBwZXJDYXNlKCksXG4gICAgICAgIHN0cmluZ1VwcGVyQ2FzZSA9IChzdHJpbmcgPT09IHVwcGVyQ2FzZVN0cmluZyk7XG5cbiAgcmV0dXJuIHN0cmluZ1VwcGVyQ2FzZTtcbn1cbiJdLCJuYW1lcyI6WyJnbG9iYWxUaGlzIiwicmMiLCJfcmMiLCJiYXNlRXh0ZW5zaW9uIiwiREVGQVVMVF9SQ19CQVNFX0VYVEVOU0lPTiIsImVudmlyb25tZW50TmFtZSIsImVudmlyb25tZW50TmFtZUZyb21Bcmd2IiwiZW52aXJvbm1lbnROYW1lRnJvbUVudiIsImpzb24iLCJyZWFkUkNGaWxlIiwiZW52aXJvbm1lbnQiLCJmaW5kRW52aXJvbm1lbnQiLCJyZXBsYWNlRW52aXJvbm1lbnRWYXJpYWJsZXMiLCJPYmplY3QiLCJhc3NpZ24iLCJyY0ZpbGVQYXRoIiwicmNGaWxlUGF0aEZyb21Ob3RoaW5nIiwicmNGaWxlQ29udGVudCIsInJlYWRGaWxlIiwiSlNPTiIsInBhcnNlIiwid3JpdGVSQ0ZpbGUiLCJyZEZpbGVDb250ZW50Iiwic3RyaW5naWZ5IiwiRE9VQkxFX1NQQUNFIiwid3JpdGVGaWxlIiwidXBkYXRlUkNGaWxlIiwiYWRkZWRQcm9wZXJ0aWVzIiwiZGVsZXRlZFByb3BlcnR5TmFtZXMiLCJmb3JFYWNoIiwiZGVsZXRlZFByb3BlcnR5TmFtZSIsImNoZWNrUkNGaWxlRXhpc3RzIiwicmNGaWxlRXhpc3RzIiwiY2hlY2tGaWxlRXhpc3RzIiwiY3JlYXRlVmFjdW91c1JDRmlsZSIsImVudmlyb25tZW50cyIsInNldFJDQmFzZUV4dGVuc2lvbiIsInJjQmFzZUV4dGVuc2lvbiIsImZpcnN0RW52aXJvbm1lbnQiLCJmaXJzdCIsImZpbmQiLCJuYW1lIiwicHJvY2VzcyIsImVudiIsIkVOVklST05NRU5UIiwiYXJndiIsImFyZ3VtZW50IiwibWF0Y2hlcyIsIm1hdGNoIiwiZm91bmQiLCJzZWNvbmRNYXRjaCIsInNlY29uZCIsInJlcGxhY2VFbnZpcm9ubWVudFZhcmlhYmxlIiwic3RyaW5nIiwidmFsdWUiLCJzdHJpbmdVcHBlckNhc2UiLCJpc1N0cmluZ1VwcGVyQ2FzZSIsInVuZGVmaW5lZCIsImpzb25BcnJheSIsImlzSlNPTkFycmF5IiwianNvbk9iamVjdCIsImlzSlNPTk9iamVjdCIsImFycmF5IiwibGVuZ3RoIiwiaW5kZXgiLCJqc29uU3RyaW5nIiwiaXNKU09OU3RyaW5nIiwib2JqZWN0IiwiQXJyYXkiLCJqc29uUHJpbWl0aXZlIiwiaXNKU09OUHJpbWl0aXZlIiwiU1RSSU5HIiwiaXNKU09OTnVtYmVyIiwianNvbk51bWJlciIsIk5VTUJFUiIsImlzSlNPTkJvb2xlYW4iLCJqc29uQm9vbGVhbiIsIkJPT0xFQU4iLCJ1cHBlckNhc2VTdHJpbmciLCJ0b1VwcGVyQ2FzZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBYUE7OztlQUFBOzs7cUJBWDhCO3dCQUNZOzBCQUNXO3lCQUNjOzs7Ozs7Ozs7Ozs7QUFFbkUsSUFBSSxDQUFDQSxXQUFXQyxFQUFFLEVBQUU7SUFDbEJELFdBQVdDLEVBQUUsR0FBR0M7QUFDbEI7QUFFQSxJQUFNLEFBQUVELEtBQU9ELFdBQVBDO0lBRVIsV0FBZTtJQUNiQSxJQUFBQTtBQUNGO0FBRUEsSUFBSUUsZ0JBQWdCQyxtQ0FBeUI7QUFFN0MsU0FBU0YsSUFBSUcsZUFBZTtJQUMxQkEsa0JBQWtCQSxtQkFBbUJDLDZCQUE2QkMsMEJBQTBCLEdBQUc7SUFFL0YsSUFBSUMsT0FBT0M7SUFFWCxJQUFNQyxjQUFjQyxnQkFBZ0JILE1BQU1IO0lBRTFDRyxPQUFPRSxhQUFhLEdBQUc7SUFFdkJFLDRCQUE0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
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
var _constants = require("../constants");
var _fileSystem = require("../utilities/fileSystem");
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
    var rcFilePath = rcFilePathFromNothing(), rdFileContent = JSON.stringify(json, null, "  ");
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
    var json = {
        "environments": [
            {}
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
        value = process.env[name] || null;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvY29uZmlndXJhdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgZmlyc3QsIHNlY29uZCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IERFRkFVTFRfUkNfQkFTRV9FWFRFTlNJT04gfSBmcm9tIFwiLi4vZGVmYXVsdHNcIjtcbmltcG9ydCB7IFNUUklORywgTlVNQkVSLCBCT09MRUFOLCBFTlZJUk9OTUVOVCB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IHJlYWRGaWxlLCB3cml0ZUZpbGUsIGNoZWNrRmlsZUV4aXN0cyB9IGZyb20gXCIuLi91dGlsaXRpZXMvZmlsZVN5c3RlbVwiO1xuXG5pZiAoIWdsb2JhbFRoaXMucmMpIHtcbiAgZ2xvYmFsVGhpcy5yYyA9IF9yYztcbn1cblxuY29uc3QgeyByYyB9ID0gZ2xvYmFsVGhpcztcblxuZXhwb3J0IGRlZmF1bHQge1xuICByY1xufTtcblxubGV0IGJhc2VFeHRlbnNpb24gPSBERUZBVUxUX1JDX0JBU0VfRVhURU5TSU9OO1xuXG5mdW5jdGlvbiBfcmMoZW52aXJvbm1lbnROYW1lKSB7XG4gIGVudmlyb25tZW50TmFtZSA9IGVudmlyb25tZW50TmFtZSB8fCBlbnZpcm9ubWVudE5hbWVGcm9tQXJndigpIHx8IGVudmlyb25tZW50TmFtZUZyb21FbnYoKTsgLy8vXG5cbiAgbGV0IGpzb24gPSByZWFkUkNGaWxlKCk7XG5cbiAgY29uc3QgZW52aXJvbm1lbnQgPSBmaW5kRW52aXJvbm1lbnQoanNvbiwgZW52aXJvbm1lbnROYW1lKTtcblxuICBqc29uID0gZW52aXJvbm1lbnQ7IC8vL1xuXG4gIHJlcGxhY2VFbnZpcm9ubWVudFZhcmlhYmxlcyhqc29uKTtcblxuICBPYmplY3QuYXNzaWduKHJjLCBlbnZpcm9ubWVudCk7XG59XG5cbmZ1bmN0aW9uIHJlYWRSQ0ZpbGUoKSB7XG4gIGNvbnN0IHJjRmlsZVBhdGggPSByY0ZpbGVQYXRoRnJvbU5vdGhpbmcoKSxcbiAgICAgICAgcmNGaWxlQ29udGVudCA9IHJlYWRGaWxlKHJjRmlsZVBhdGgpLFxuICAgICAgICBqc29uID0gSlNPTi5wYXJzZShyY0ZpbGVDb250ZW50KTtcblxuICByZXR1cm4ganNvbjsgICAgICBcbn1cblxuZnVuY3Rpb24gd3JpdGVSQ0ZpbGUoanNvbikge1xuICBjb25zdCByY0ZpbGVQYXRoID0gcmNGaWxlUGF0aEZyb21Ob3RoaW5nKCksXG4gICAgICAgIHJkRmlsZUNvbnRlbnQgPSBKU09OLnN0cmluZ2lmeShqc29uLCBudWxsLCBcIiAgXCIpO1xuXG4gIHdyaXRlRmlsZShyY0ZpbGVQYXRoLCByZEZpbGVDb250ZW50KTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlUkNGaWxlKGFkZGVkUHJvcGVydGllcywgLi4uZGVsZXRlZFByb3BlcnR5TmFtZXMpIHtcbiAgbGV0IGpzb24gPSByZWFkUkNGaWxlKCk7XG5cbiAgaWYgKGFkZGVkUHJvcGVydGllcykge1xuICAgIE9iamVjdC5hc3NpZ24oanNvbiwgYWRkZWRQcm9wZXJ0aWVzKTtcbiAgfVxuXG4gIGRlbGV0ZWRQcm9wZXJ0eU5hbWVzLmZvckVhY2goKGRlbGV0ZWRQcm9wZXJ0eU5hbWUpID0+IHtcbiAgICBkZWxldGUganNvbltkZWxldGVkUHJvcGVydHlOYW1lXTtcbiAgfSk7XG5cbiAgd3JpdGVSQ0ZpbGUoanNvbik7ICAgICAgXG59XG5cbmZ1bmN0aW9uIGNoZWNrUkNGaWxlRXhpc3RzKCkge1xuICBjb25zdCByY0ZpbGVQYXRoID0gcmNGaWxlUGF0aEZyb21Ob3RoaW5nKCksXG4gICAgICAgIHJjRmlsZUV4aXN0cyA9IGNoZWNrRmlsZUV4aXN0cyhyY0ZpbGVQYXRoKTtcblxuICByZXR1cm4gcmNGaWxlRXhpc3RzO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVWYWN1b3VzUkNGaWxlKCkge1xuICBjb25zdCBqc29uID0ge1xuICAgIFwiZW52aXJvbm1lbnRzXCI6IFtcbiAgICAgIHt9XG4gICAgXVxuICB9O1xuXG4gIHdyaXRlUkNGaWxlKGpzb24pO1xufVxuXG5mdW5jdGlvbiBzZXRSQ0Jhc2VFeHRlbnNpb24ocmNCYXNlRXh0ZW5zaW9uKSB7IGJhc2VFeHRlbnNpb24gPSByY0Jhc2VFeHRlbnNpb247IH1cblxuT2JqZWN0LmFzc2lnbihfcmMsIHtcbiAgcmVhZFJDRmlsZSxcbiAgd3JpdGVSQ0ZpbGUsXG4gIHVwZGF0ZVJDRmlsZSxcbiAgY2hlY2tSQ0ZpbGVFeGlzdHMsXG4gIGNyZWF0ZVZhY3VvdXNSQ0ZpbGUsXG4gIHNldFJDQmFzZUV4dGVuc2lvblxufSk7XG5cbmZ1bmN0aW9uIGZpbmRFbnZpcm9ubWVudChqc29uLCBlbnZpcm9ubWVudE5hbWUpIHtcbiAgbGV0IGVudmlyb25tZW50O1xuICBjb25zdCB7IGVudmlyb25tZW50cyB9ID0ganNvbjtcblxuICBpZiAoZW52aXJvbm1lbnROYW1lID09PSBudWxsKSB7XG4gICAgY29uc3QgZmlyc3RFbnZpcm9ubWVudCA9IGZpcnN0KGVudmlyb25tZW50cyk7XG5cbiAgICBlbnZpcm9ubWVudCA9IGZpcnN0RW52aXJvbm1lbnQ7IC8vL1xuICB9IGVsc2Uge1xuICAgIGVudmlyb25tZW50ID0gZW52aXJvbm1lbnRzLmZpbmQoKGVudmlyb25tZW50KSA9PiB7XG4gICAgICBjb25zdCB7IG5hbWUgfSA9IGVudmlyb25tZW50O1xuXG4gICAgICBpZihuYW1lID09PSBlbnZpcm9ubWVudE5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBkZWxldGUgZW52aXJvbm1lbnQubmFtZVxuXG4gIHJldHVybiBlbnZpcm9ubWVudDtcbn1cblxuZnVuY3Rpb24gcmNGaWxlUGF0aEZyb21Ob3RoaW5nKCkge1xuICBjb25zdCByY0ZpbGVQYXRoID0gYC4vLiR7YmFzZUV4dGVuc2lvbn1yY2A7XG5cbiAgcmV0dXJuIHJjRmlsZVBhdGg7XG59XG5cbmZ1bmN0aW9uIGVudmlyb25tZW50TmFtZUZyb21FbnYoKSB7XG4gIGNvbnN0IGVudmlyb25tZW50TmFtZSA9IHByb2Nlc3MuZW52W0VOVklST05NRU5UXSB8fCBudWxsO1xuXG4gIHJldHVybiBlbnZpcm9ubWVudE5hbWU7XG59XG5cbmZ1bmN0aW9uIGVudmlyb25tZW50TmFtZUZyb21Bcmd2KCkge1xuICBsZXQgZW52aXJvbm1lbnROYW1lID0gbnVsbDtcblxuICBwcm9jZXNzLmFyZ3YuZmluZCgoYXJndW1lbnQpID0+IHsgIC8vL1xuICAgIGNvbnN0IG1hdGNoZXMgPSBhcmd1bWVudC5tYXRjaCgvLS1lbnZpcm9ubWVudD0oLispLyksXG4gICAgICAgICAgZm91bmQgPSAobWF0Y2hlcyAhPT0gbnVsbCk7XG5cbiAgICBpZiAoZm91bmQpIHtcbiAgICAgIGNvbnN0IHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpO1xuXG4gICAgICBlbnZpcm9ubWVudE5hbWUgPSBzZWNvbmRNYXRjaDtcbiAgICB9XG5cbiAgICByZXR1cm4gZm91bmQ7XG4gIH0pO1xuXG4gIHJldHVybiBlbnZpcm9ubWVudE5hbWU7XG59XG5cbmZ1bmN0aW9uIHJlcGxhY2VFbnZpcm9ubWVudFZhcmlhYmxlKHN0cmluZykge1xuICBsZXQgdmFsdWUgPSBudWxsO1xuXG4gIGNvbnN0IHN0cmluZ1VwcGVyQ2FzZSA9IGlzU3RyaW5nVXBwZXJDYXNlKHN0cmluZyk7XG5cbiAgaWYgKHN0cmluZ1VwcGVyQ2FzZSkge1xuICAgIGNvbnN0IG5hbWUgPSBzdHJpbmc7ICAvLy9cblxuICAgIHZhbHVlID0gcHJvY2Vzcy5lbnZbbmFtZV0gfHwgbnVsbDtcbiAgfVxuXG4gIHJldHVybiB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gcmVwbGFjZUVudmlyb25tZW50VmFyaWFibGVzKGVudmlyb25tZW50KSB7XG4gIGxldCBqc29uID0gZW52aXJvbm1lbnQ7XG5cbiAgY29uc3QganNvbkFycmF5ID0gaXNKU09OQXJyYXkoanNvbiksXG4gICAgICAgIGpzb25PYmplY3QgPSBpc0pTT05PYmplY3QoanNvbik7XG5cbiAgaWYgKGZhbHNlKSB7XG4gICAgLy8vXG4gIH0gZWxzZSBpZiAoanNvbkFycmF5KSB7XG4gICAgY29uc3QgYXJyYXkgPSBqc29uLFxuICAgICAgICAgIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBsZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIGNvbnN0IGpzb24gPSBhcnJheVtpbmRleF0sXG4gICAgICAgICAgICBqc29uU3RyaW5nID0gaXNKU09OU3RyaW5nKGpzb24pO1xuXG4gICAgICBpZiAoanNvblN0cmluZykge1xuICAgICAgICBjb25zdCBzdHJpbmcgPSBqc29uLFxuICAgICAgICAgICAgICB2YWx1ZSA9IHJlcGxhY2VFbnZpcm9ubWVudFZhcmlhYmxlKHN0cmluZyk7XG5cbiAgICAgICAgaWYgKHZhbHVlICE9PSBudWxsKSB7XG4gICAgICAgICAgYXJyYXlbaW5kZXhdID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSBpZiAoanNvbk9iamVjdCkge1xuICAgIGNvbnN0IG9iamVjdCA9IGpzb247ICAvLy9cblxuICAgIGZvciAobGV0IG5hbWUgaW4gb2JqZWN0KSB7XG4gICAgICBjb25zdCBqc29uID0gb2JqZWN0W25hbWVdLFxuICAgICAgICAgICAganNvblN0cmluZyA9IGlzSlNPTlN0cmluZyhqc29uKTtcblxuICAgICAgaWYgKGpzb25TdHJpbmcpIHtcbiAgICAgICAgY29uc3Qgc3RyaW5nID0ganNvbiwgIC8vL1xuICAgICAgICAgICAgICB2YWx1ZSA9IHJlcGxhY2VFbnZpcm9ubWVudFZhcmlhYmxlKHN0cmluZyk7ICAvLy9cblxuICAgICAgICBpZiAodmFsdWUgIT09IG51bGwpIHtcbiAgICAgICAgICBvYmplY3RbbmFtZV0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlICB7XG4gICAgICAgIHJlcGxhY2VFbnZpcm9ubWVudFZhcmlhYmxlcyhqc29uKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gaXNKU09OQXJyYXkoanNvbikge1xuICBjb25zdCBqc29uQXJyYXkgPSAoanNvbiBpbnN0YW5jZW9mIEFycmF5KTtcblxuICByZXR1cm4ganNvbkFycmF5O1xufVxuXG5mdW5jdGlvbiBpc0pTT05PYmplY3QoanNvbikge1xuICBjb25zdCBqc29uQXJyYXkgPSBpc0pTT05BcnJheShqc29uKSxcbiAgICAgICAganNvblByaW1pdGl2ZSA9IGlzSlNPTlByaW1pdGl2ZShqc29uKSxcbiAgICAgICAganNvbk9iamVjdCA9ICghanNvbkFycmF5ICYmICEganNvblByaW1pdGl2ZSk7XG5cbiAgcmV0dXJuIGpzb25PYmplY3Q7XG59XG5cbmZ1bmN0aW9uIGlzSlNPTlN0cmluZyhqc29uKSB7XG4gIGNvbnN0IGpzb25TdHJpbmcgPSAodHlwZW9mIGpzb24gPT09IFNUUklORyk7XG5cbiAgcmV0dXJuIGpzb25TdHJpbmc7XG59XG5cbmZ1bmN0aW9uIGlzSlNPTk51bWJlcihqc29uKSB7XG4gIGNvbnN0IGpzb25OdW1iZXIgPSAodHlwZW9mIGpzb24gPT09IE5VTUJFUik7XG5cbiAgcmV0dXJuIGpzb25OdW1iZXI7XG59XG5cbmZ1bmN0aW9uIGlzSlNPTkJvb2xlYW4oanNvbikge1xuICBjb25zdCBqc29uQm9vbGVhbiA9ICh0eXBlb2YganNvbiA9PT0gQk9PTEVBTik7XG5cbiAgcmV0dXJuIGpzb25Cb29sZWFuO1xufVxuXG5mdW5jdGlvbiBpc0pTT05QcmltaXRpdmUoanNvbikge1xuICBjb25zdCBqc29uU3RyaW5nID0gaXNKU09OU3RyaW5nKGpzb24pLFxuICAgICAgICBqc29uTnVtYmVyID0gaXNKU09OTnVtYmVyKGpzb24pLFxuICAgICAgICBqc29uQm9vbGVhbiA9IGlzSlNPTkJvb2xlYW4oanNvbiksXG4gICAgICAgIGpzb25QcmltaXRpdmUgPSAoanNvblN0cmluZyB8fCBqc29uTnVtYmVyIHx8IGpzb25Cb29sZWFuKTtcblxuICByZXR1cm4ganNvblByaW1pdGl2ZTtcbn1cblxuZnVuY3Rpb24gaXNTdHJpbmdVcHBlckNhc2Uoc3RyaW5nKSB7XG4gIGNvbnN0IHVwcGVyQ2FzZVN0cmluZyA9IHN0cmluZy50b1VwcGVyQ2FzZSgpLFxuICAgICAgICBzdHJpbmdVcHBlckNhc2UgPSAoc3RyaW5nID09PSB1cHBlckNhc2VTdHJpbmcpO1xuXG4gIHJldHVybiBzdHJpbmdVcHBlckNhc2U7XG59XG4iXSwibmFtZXMiOlsiZ2xvYmFsVGhpcyIsInJjIiwiX3JjIiwiYmFzZUV4dGVuc2lvbiIsIkRFRkFVTFRfUkNfQkFTRV9FWFRFTlNJT04iLCJlbnZpcm9ubWVudE5hbWUiLCJlbnZpcm9ubWVudE5hbWVGcm9tQXJndiIsImVudmlyb25tZW50TmFtZUZyb21FbnYiLCJqc29uIiwicmVhZFJDRmlsZSIsImVudmlyb25tZW50IiwiZmluZEVudmlyb25tZW50IiwicmVwbGFjZUVudmlyb25tZW50VmFyaWFibGVzIiwiT2JqZWN0IiwiYXNzaWduIiwicmNGaWxlUGF0aCIsInJjRmlsZVBhdGhGcm9tTm90aGluZyIsInJjRmlsZUNvbnRlbnQiLCJyZWFkRmlsZSIsIkpTT04iLCJwYXJzZSIsIndyaXRlUkNGaWxlIiwicmRGaWxlQ29udGVudCIsInN0cmluZ2lmeSIsIndyaXRlRmlsZSIsInVwZGF0ZVJDRmlsZSIsImFkZGVkUHJvcGVydGllcyIsImRlbGV0ZWRQcm9wZXJ0eU5hbWVzIiwiZm9yRWFjaCIsImRlbGV0ZWRQcm9wZXJ0eU5hbWUiLCJjaGVja1JDRmlsZUV4aXN0cyIsInJjRmlsZUV4aXN0cyIsImNoZWNrRmlsZUV4aXN0cyIsImNyZWF0ZVZhY3VvdXNSQ0ZpbGUiLCJzZXRSQ0Jhc2VFeHRlbnNpb24iLCJyY0Jhc2VFeHRlbnNpb24iLCJlbnZpcm9ubWVudHMiLCJmaXJzdEVudmlyb25tZW50IiwiZmlyc3QiLCJmaW5kIiwibmFtZSIsInByb2Nlc3MiLCJlbnYiLCJFTlZJUk9OTUVOVCIsImFyZ3YiLCJhcmd1bWVudCIsIm1hdGNoZXMiLCJtYXRjaCIsImZvdW5kIiwic2Vjb25kTWF0Y2giLCJzZWNvbmQiLCJyZXBsYWNlRW52aXJvbm1lbnRWYXJpYWJsZSIsInN0cmluZyIsInZhbHVlIiwic3RyaW5nVXBwZXJDYXNlIiwiaXNTdHJpbmdVcHBlckNhc2UiLCJqc29uQXJyYXkiLCJpc0pTT05BcnJheSIsImpzb25PYmplY3QiLCJpc0pTT05PYmplY3QiLCJhcnJheSIsImxlbmd0aCIsImluZGV4IiwianNvblN0cmluZyIsImlzSlNPTlN0cmluZyIsIm9iamVjdCIsIkFycmF5IiwianNvblByaW1pdGl2ZSIsImlzSlNPTlByaW1pdGl2ZSIsIlNUUklORyIsImlzSlNPTk51bWJlciIsImpzb25OdW1iZXIiLCJOVU1CRVIiLCJpc0pTT05Cb29sZWFuIiwianNvbkJvb2xlYW4iLCJCT09MRUFOIiwidXBwZXJDYXNlU3RyaW5nIiwidG9VcHBlckNhc2UiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWFBOzs7ZUFBQTs7O3FCQVg4Qjt3QkFDWTt5QkFDVzswQkFDQTs7Ozs7Ozs7Ozs7O0FBRXJELElBQUksQ0FBQ0EsV0FBV0MsRUFBRSxFQUFFO0lBQ2xCRCxXQUFXQyxFQUFFLEdBQUdDO0FBQ2xCO0FBRUEsSUFBTSxBQUFFRCxLQUFPRCxXQUFQQztJQUVSLFdBQWU7SUFDYkEsSUFBQUE7QUFDRjtBQUVBLElBQUlFLGdCQUFnQkMsbUNBQXlCO0FBRTdDLFNBQVNGLElBQUlHLGVBQWU7SUFDMUJBLGtCQUFrQkEsbUJBQW1CQyw2QkFBNkJDLDBCQUEwQixHQUFHO0lBRS9GLElBQUlDLE9BQU9DO0lBRVgsSUFBTUMsY0FBY0MsZ0JBQWdCSCxNQUFNSDtJQUUxQ0csT0FBT0UsYUFBYSxHQUFHO0lBRXZCRSw0QkFBNEJKO0lBRTVCSyxPQUFPQyxNQUFNLENBQUNiLElBQUlTO0FBQ3BCO0FBRUEsU0FBU0Q7SUFDUCxJQUFNTSxhQUFhQyx5QkFDYkMsZ0JBQWdCQyxJQUFBQSxvQkFBUSxFQUFDSCxhQUN6QlAsT0FBT1csS0FBS0MsS0FBSyxDQUFD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
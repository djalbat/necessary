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
const _array = require("../utilities/array");
const _defaults = require("../defaults");
const _fileSystem = require("../utilities/fileSystem");
const _constants = require("../constants");
if (!globalThis.rc) {
    globalThis.rc = _rc;
}
const { rc } = globalThis;
const _default = {
    rc
};
let baseExtension = _defaults.DEFAULT_RC_BASE_EXTENSION;
function _rc(environmentName) {
    environmentName = environmentName || environmentNameFromArgv() || environmentNameFromEnv(); ///
    let json = readRCFile();
    const environment = findEnvironment(json, environmentName);
    json = environment; ///
    replaceEnvironmentVariables(json);
    Object.assign(rc, environment);
}
function readRCFile() {
    const rcFilePath = rcFilePathFromNothing(), rcFileContent = (0, _fileSystem.readFile)(rcFilePath), json = JSON.parse(rcFileContent);
    return json;
}
function writeRCFile(json) {
    const rcFilePath = rcFilePathFromNothing(), rdFileContent = JSON.stringify(json, null, _constants.DOUBLE_SPACE);
    (0, _fileSystem.writeFile)(rcFilePath, rdFileContent);
}
function updateRCFile(addedProperties, ...deletedPropertyNames) {
    let json = readRCFile();
    if (addedProperties) {
        Object.assign(json, addedProperties);
    }
    deletedPropertyNames.forEach((deletedPropertyName)=>{
        delete json[deletedPropertyName];
    });
    writeRCFile(json);
}
function checkRCFileExists() {
    const rcFilePath = rcFilePathFromNothing(), rcFileExists = (0, _fileSystem.checkFileExists)(rcFilePath);
    return rcFileExists;
}
function createVacuousRCFile() {
    const environments = [], json = {
        environments
    };
    writeRCFile(json);
}
function setRCBaseExtension(rcBaseExtension) {
    baseExtension = rcBaseExtension;
}
Object.assign(_rc, {
    readRCFile,
    writeRCFile,
    updateRCFile,
    checkRCFileExists,
    createVacuousRCFile,
    setRCBaseExtension
});
function findEnvironment(json, environmentName) {
    let environment;
    const { environments } = json;
    if (environmentName === null) {
        const firstEnvironment = (0, _array.first)(environments);
        environment = firstEnvironment; ///
    } else {
        environment = environments.find((environment)=>{
            const { name } = environment;
            if (name === environmentName) {
                return true;
            }
        });
    }
    delete environment.name;
    return environment;
}
function rcFilePathFromNothing() {
    const rcFilePath = `./.${baseExtension}rc`;
    return rcFilePath;
}
function environmentNameFromEnv() {
    const environmentName = process.env[_constants.ENVIRONMENT] || null;
    return environmentName;
}
function environmentNameFromArgv() {
    let environmentName = null;
    process.argv.find((argument)=>{
        const matches = argument.match(/--environment=(.+)/), found = matches !== null;
        if (found) {
            const secondMatch = (0, _array.second)(matches);
            environmentName = secondMatch;
        }
        return found;
    });
    return environmentName;
}
function replaceEnvironmentVariable(string) {
    let value = null;
    const stringUpperCase = isStringUpperCase(string);
    if (stringUpperCase) {
        const name = string; ///
        value = process.env[name];
        if (value === undefined) {
            value = null;
        }
    }
    return value;
}
function replaceEnvironmentVariables(environment) {
    let json = environment;
    const jsonArray = isJSONArray(json), jsonObject = isJSONObject(json);
    if (false) {
    ///
    } else if (jsonArray) {
        const array = json, length = array.length;
        for(let index = 0; index < length; index++){
            const json = array[index], jsonString = isJSONString(json);
            if (jsonString) {
                const string = json, value = replaceEnvironmentVariable(string);
                if (value !== null) {
                    array[index] = value;
                }
            }
        }
    } else if (jsonObject) {
        const object = json; ///
        for(let name in object){
            const json = object[name], jsonString = isJSONString(json);
            if (jsonString) {
                const string = json, value = replaceEnvironmentVariable(string); ///
                if (value !== null) {
                    object[name] = value;
                }
            } else {
                replaceEnvironmentVariables(json);
            }
        }
    }
}
function isJSONArray(json) {
    const jsonArray = json instanceof Array;
    return jsonArray;
}
function isJSONObject(json) {
    const jsonArray = isJSONArray(json), jsonPrimitive = isJSONPrimitive(json), jsonObject = !jsonArray && !jsonPrimitive;
    return jsonObject;
}
function isJSONString(json) {
    const jsonString = typeof json === _constants.STRING;
    return jsonString;
}
function isJSONNumber(json) {
    const jsonNumber = typeof json === _constants.NUMBER;
    return jsonNumber;
}
function isJSONBoolean(json) {
    const jsonBoolean = typeof json === _constants.BOOLEAN;
    return jsonBoolean;
}
function isJSONPrimitive(json) {
    const jsonString = isJSONString(json), jsonNumber = isJSONNumber(json), jsonBoolean = isJSONBoolean(json), jsonPrimitive = jsonString || jsonNumber || jsonBoolean;
    return jsonPrimitive;
}
function isStringUpperCase(string) {
    const upperCaseString = string.toUpperCase(), stringUpperCase = string === upperCaseString;
    return stringUpperCase;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvY29uZmlndXJhdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgZmlyc3QsIHNlY29uZCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IERFRkFVTFRfUkNfQkFTRV9FWFRFTlNJT04gfSBmcm9tIFwiLi4vZGVmYXVsdHNcIjtcbmltcG9ydCB7IHJlYWRGaWxlLCB3cml0ZUZpbGUsIGNoZWNrRmlsZUV4aXN0cyB9IGZyb20gXCIuLi91dGlsaXRpZXMvZmlsZVN5c3RlbVwiO1xuaW1wb3J0IHsgU1RSSU5HLCBOVU1CRVIsIEJPT0xFQU4sIEVOVklST05NRU5ULCBET1VCTEVfU1BBQ0UgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmlmICghZ2xvYmFsVGhpcy5yYykge1xuICBnbG9iYWxUaGlzLnJjID0gX3JjO1xufVxuXG5jb25zdCB7IHJjIH0gPSBnbG9iYWxUaGlzO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHJjXG59O1xuXG5sZXQgYmFzZUV4dGVuc2lvbiA9IERFRkFVTFRfUkNfQkFTRV9FWFRFTlNJT047XG5cbmZ1bmN0aW9uIF9yYyhlbnZpcm9ubWVudE5hbWUpIHtcbiAgZW52aXJvbm1lbnROYW1lID0gZW52aXJvbm1lbnROYW1lIHx8IGVudmlyb25tZW50TmFtZUZyb21Bcmd2KCkgfHwgZW52aXJvbm1lbnROYW1lRnJvbUVudigpOyAvLy9cblxuICBsZXQganNvbiA9IHJlYWRSQ0ZpbGUoKTtcblxuICBjb25zdCBlbnZpcm9ubWVudCA9IGZpbmRFbnZpcm9ubWVudChqc29uLCBlbnZpcm9ubWVudE5hbWUpO1xuXG4gIGpzb24gPSBlbnZpcm9ubWVudDsgLy8vXG5cbiAgcmVwbGFjZUVudmlyb25tZW50VmFyaWFibGVzKGpzb24pO1xuXG4gIE9iamVjdC5hc3NpZ24ocmMsIGVudmlyb25tZW50KTtcbn1cblxuZnVuY3Rpb24gcmVhZFJDRmlsZSgpIHtcbiAgY29uc3QgcmNGaWxlUGF0aCA9IHJjRmlsZVBhdGhGcm9tTm90aGluZygpLFxuICAgICAgICByY0ZpbGVDb250ZW50ID0gcmVhZEZpbGUocmNGaWxlUGF0aCksXG4gICAgICAgIGpzb24gPSBKU09OLnBhcnNlKHJjRmlsZUNvbnRlbnQpO1xuXG4gIHJldHVybiBqc29uOyAgICAgIFxufVxuXG5mdW5jdGlvbiB3cml0ZVJDRmlsZShqc29uKSB7XG4gIGNvbnN0IHJjRmlsZVBhdGggPSByY0ZpbGVQYXRoRnJvbU5vdGhpbmcoKSxcbiAgICAgICAgcmRGaWxlQ29udGVudCA9IEpTT04uc3RyaW5naWZ5KGpzb24sIG51bGwsIERPVUJMRV9TUEFDRSk7XG5cbiAgd3JpdGVGaWxlKHJjRmlsZVBhdGgsIHJkRmlsZUNvbnRlbnQpO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVSQ0ZpbGUoYWRkZWRQcm9wZXJ0aWVzLCAuLi5kZWxldGVkUHJvcGVydHlOYW1lcykge1xuICBsZXQganNvbiA9IHJlYWRSQ0ZpbGUoKTtcblxuICBpZiAoYWRkZWRQcm9wZXJ0aWVzKSB7XG4gICAgT2JqZWN0LmFzc2lnbihqc29uLCBhZGRlZFByb3BlcnRpZXMpO1xuICB9XG5cbiAgZGVsZXRlZFByb3BlcnR5TmFtZXMuZm9yRWFjaCgoZGVsZXRlZFByb3BlcnR5TmFtZSkgPT4ge1xuICAgIGRlbGV0ZSBqc29uW2RlbGV0ZWRQcm9wZXJ0eU5hbWVdO1xuICB9KTtcblxuICB3cml0ZVJDRmlsZShqc29uKTsgICAgICBcbn1cblxuZnVuY3Rpb24gY2hlY2tSQ0ZpbGVFeGlzdHMoKSB7XG4gIGNvbnN0IHJjRmlsZVBhdGggPSByY0ZpbGVQYXRoRnJvbU5vdGhpbmcoKSxcbiAgICAgICAgcmNGaWxlRXhpc3RzID0gY2hlY2tGaWxlRXhpc3RzKHJjRmlsZVBhdGgpO1xuXG4gIHJldHVybiByY0ZpbGVFeGlzdHM7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVZhY3VvdXNSQ0ZpbGUoKSB7XG4gIGNvbnN0IGVudmlyb25tZW50cyA9IFtdLFxuICAgICAgICBqc29uID0ge1xuICAgICAgICAgIGVudmlyb25tZW50c1xuICAgICAgICB9O1xuXG4gIHdyaXRlUkNGaWxlKGpzb24pO1xufVxuXG5mdW5jdGlvbiBzZXRSQ0Jhc2VFeHRlbnNpb24ocmNCYXNlRXh0ZW5zaW9uKSB7IGJhc2VFeHRlbnNpb24gPSByY0Jhc2VFeHRlbnNpb247IH1cblxuT2JqZWN0LmFzc2lnbihfcmMsIHtcbiAgcmVhZFJDRmlsZSxcbiAgd3JpdGVSQ0ZpbGUsXG4gIHVwZGF0ZVJDRmlsZSxcbiAgY2hlY2tSQ0ZpbGVFeGlzdHMsXG4gIGNyZWF0ZVZhY3VvdXNSQ0ZpbGUsXG4gIHNldFJDQmFzZUV4dGVuc2lvblxufSk7XG5cbmZ1bmN0aW9uIGZpbmRFbnZpcm9ubWVudChqc29uLCBlbnZpcm9ubWVudE5hbWUpIHtcbiAgbGV0IGVudmlyb25tZW50O1xuXG4gIGNvbnN0IHsgZW52aXJvbm1lbnRzIH0gPSBqc29uO1xuXG4gIGlmIChlbnZpcm9ubWVudE5hbWUgPT09IG51bGwpIHtcbiAgICBjb25zdCBmaXJzdEVudmlyb25tZW50ID0gZmlyc3QoZW52aXJvbm1lbnRzKTtcblxuICAgIGVudmlyb25tZW50ID0gZmlyc3RFbnZpcm9ubWVudDsgLy8vXG4gIH0gZWxzZSB7XG4gICAgZW52aXJvbm1lbnQgPSBlbnZpcm9ubWVudHMuZmluZCgoZW52aXJvbm1lbnQpID0+IHtcbiAgICAgIGNvbnN0IHsgbmFtZSB9ID0gZW52aXJvbm1lbnQ7XG5cbiAgICAgIGlmKG5hbWUgPT09IGVudmlyb25tZW50TmFtZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGRlbGV0ZSBlbnZpcm9ubWVudC5uYW1lXG5cbiAgcmV0dXJuIGVudmlyb25tZW50O1xufVxuXG5mdW5jdGlvbiByY0ZpbGVQYXRoRnJvbU5vdGhpbmcoKSB7XG4gIGNvbnN0IHJjRmlsZVBhdGggPSBgLi8uJHtiYXNlRXh0ZW5zaW9ufXJjYDtcblxuICByZXR1cm4gcmNGaWxlUGF0aDtcbn1cblxuZnVuY3Rpb24gZW52aXJvbm1lbnROYW1lRnJvbUVudigpIHtcbiAgY29uc3QgZW52aXJvbm1lbnROYW1lID0gcHJvY2Vzcy5lbnZbRU5WSVJPTk1FTlRdIHx8IG51bGw7XG5cbiAgcmV0dXJuIGVudmlyb25tZW50TmFtZTtcbn1cblxuZnVuY3Rpb24gZW52aXJvbm1lbnROYW1lRnJvbUFyZ3YoKSB7XG4gIGxldCBlbnZpcm9ubWVudE5hbWUgPSBudWxsO1xuXG4gIHByb2Nlc3MuYXJndi5maW5kKChhcmd1bWVudCkgPT4geyAgLy8vXG4gICAgY29uc3QgbWF0Y2hlcyA9IGFyZ3VtZW50Lm1hdGNoKC8tLWVudmlyb25tZW50PSguKykvKSxcbiAgICAgICAgICBmb3VuZCA9IChtYXRjaGVzICE9PSBudWxsKTtcblxuICAgIGlmIChmb3VuZCkge1xuICAgICAgY29uc3Qgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyk7XG5cbiAgICAgIGVudmlyb25tZW50TmFtZSA9IHNlY29uZE1hdGNoO1xuICAgIH1cblxuICAgIHJldHVybiBmb3VuZDtcbiAgfSk7XG5cbiAgcmV0dXJuIGVudmlyb25tZW50TmFtZTtcbn1cblxuZnVuY3Rpb24gcmVwbGFjZUVudmlyb25tZW50VmFyaWFibGUoc3RyaW5nKSB7XG4gIGxldCB2YWx1ZSA9IG51bGw7XG5cbiAgY29uc3Qgc3RyaW5nVXBwZXJDYXNlID0gaXNTdHJpbmdVcHBlckNhc2Uoc3RyaW5nKTtcblxuICBpZiAoc3RyaW5nVXBwZXJDYXNlKSB7XG4gICAgY29uc3QgbmFtZSA9IHN0cmluZzsgIC8vL1xuXG4gICAgdmFsdWUgPSBwcm9jZXNzLmVudltuYW1lXTtcblxuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB2YWx1ZSA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHZhbHVlO1xufVxuXG5mdW5jdGlvbiByZXBsYWNlRW52aXJvbm1lbnRWYXJpYWJsZXMoZW52aXJvbm1lbnQpIHtcbiAgbGV0IGpzb24gPSBlbnZpcm9ubWVudDtcblxuICBjb25zdCBqc29uQXJyYXkgPSBpc0pTT05BcnJheShqc29uKSxcbiAgICAgICAganNvbk9iamVjdCA9IGlzSlNPTk9iamVjdChqc29uKTtcblxuICBpZiAoZmFsc2UpIHtcbiAgICAvLy9cbiAgfSBlbHNlIGlmIChqc29uQXJyYXkpIHtcbiAgICBjb25zdCBhcnJheSA9IGpzb24sIC8vL1xuICAgICAgICAgIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBsZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIGNvbnN0IGpzb24gPSBhcnJheVtpbmRleF0sXG4gICAgICAgICAgICBqc29uU3RyaW5nID0gaXNKU09OU3RyaW5nKGpzb24pO1xuXG4gICAgICBpZiAoanNvblN0cmluZykge1xuICAgICAgICBjb25zdCBzdHJpbmcgPSBqc29uLCAgLy8vXG4gICAgICAgICAgICAgIHZhbHVlID0gcmVwbGFjZUVudmlyb25tZW50VmFyaWFibGUoc3RyaW5nKTtcblxuICAgICAgICBpZiAodmFsdWUgIT09IG51bGwpIHtcbiAgICAgICAgICBhcnJheVtpbmRleF0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIGlmIChqc29uT2JqZWN0KSB7XG4gICAgY29uc3Qgb2JqZWN0ID0ganNvbjsgIC8vL1xuXG4gICAgZm9yIChsZXQgbmFtZSBpbiBvYmplY3QpIHtcbiAgICAgIGNvbnN0IGpzb24gPSBvYmplY3RbbmFtZV0sXG4gICAgICAgICAgICBqc29uU3RyaW5nID0gaXNKU09OU3RyaW5nKGpzb24pO1xuXG4gICAgICBpZiAoanNvblN0cmluZykge1xuICAgICAgICBjb25zdCBzdHJpbmcgPSBqc29uLCAgLy8vXG4gICAgICAgICAgICAgIHZhbHVlID0gcmVwbGFjZUVudmlyb25tZW50VmFyaWFibGUoc3RyaW5nKTsgIC8vL1xuXG4gICAgICAgIGlmICh2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgICAgIG9iamVjdFtuYW1lXSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgIHtcbiAgICAgICAgcmVwbGFjZUVudmlyb25tZW50VmFyaWFibGVzKGpzb24pO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBpc0pTT05BcnJheShqc29uKSB7XG4gIGNvbnN0IGpzb25BcnJheSA9IChqc29uIGluc3RhbmNlb2YgQXJyYXkpO1xuXG4gIHJldHVybiBqc29uQXJyYXk7XG59XG5cbmZ1bmN0aW9uIGlzSlNPTk9iamVjdChqc29uKSB7XG4gIGNvbnN0IGpzb25BcnJheSA9IGlzSlNPTkFycmF5KGpzb24pLFxuICAgICAgICBqc29uUHJpbWl0aXZlID0gaXNKU09OUHJpbWl0aXZlKGpzb24pLFxuICAgICAgICBqc29uT2JqZWN0ID0gKCFqc29uQXJyYXkgJiYgISBqc29uUHJpbWl0aXZlKTtcblxuICByZXR1cm4ganNvbk9iamVjdDtcbn1cblxuZnVuY3Rpb24gaXNKU09OU3RyaW5nKGpzb24pIHtcbiAgY29uc3QganNvblN0cmluZyA9ICh0eXBlb2YganNvbiA9PT0gU1RSSU5HKTtcblxuICByZXR1cm4ganNvblN0cmluZztcbn1cblxuZnVuY3Rpb24gaXNKU09OTnVtYmVyKGpzb24pIHtcbiAgY29uc3QganNvbk51bWJlciA9ICh0eXBlb2YganNvbiA9PT0gTlVNQkVSKTtcblxuICByZXR1cm4ganNvbk51bWJlcjtcbn1cblxuZnVuY3Rpb24gaXNKU09OQm9vbGVhbihqc29uKSB7XG4gIGNvbnN0IGpzb25Cb29sZWFuID0gKHR5cGVvZiBqc29uID09PSBCT09MRUFOKTtcblxuICByZXR1cm4ganNvbkJvb2xlYW47XG59XG5cbmZ1bmN0aW9uIGlzSlNPTlByaW1pdGl2ZShqc29uKSB7XG4gIGNvbnN0IGpzb25TdHJpbmcgPSBpc0pTT05TdHJpbmcoanNvbiksXG4gICAgICAgIGpzb25OdW1iZXIgPSBpc0pTT05OdW1iZXIoanNvbiksXG4gICAgICAgIGpzb25Cb29sZWFuID0gaXNKU09OQm9vbGVhbihqc29uKSxcbiAgICAgICAganNvblByaW1pdGl2ZSA9IChqc29uU3RyaW5nIHx8IGpzb25OdW1iZXIgfHwganNvbkJvb2xlYW4pO1xuXG4gIHJldHVybiBqc29uUHJpbWl0aXZlO1xufVxuXG5mdW5jdGlvbiBpc1N0cmluZ1VwcGVyQ2FzZShzdHJpbmcpIHtcbiAgY29uc3QgdXBwZXJDYXNlU3RyaW5nID0gc3RyaW5nLnRvVXBwZXJDYXNlKCksXG4gICAgICAgIHN0cmluZ1VwcGVyQ2FzZSA9IChzdHJpbmcgPT09IHVwcGVyQ2FzZVN0cmluZyk7XG5cbiAgcmV0dXJuIHN0cmluZ1VwcGVyQ2FzZTtcbn1cbiJdLCJuYW1lcyI6WyJnbG9iYWxUaGlzIiwicmMiLCJfcmMiLCJiYXNlRXh0ZW5zaW9uIiwiREVGQVVMVF9SQ19CQVNFX0VYVEVOU0lPTiIsImVudmlyb25tZW50TmFtZSIsImVudmlyb25tZW50TmFtZUZyb21Bcmd2IiwiZW52aXJvbm1lbnROYW1lRnJvbUVudiIsImpzb24iLCJyZWFkUkNGaWxlIiwiZW52aXJvbm1lbnQiLCJmaW5kRW52aXJvbm1lbnQiLCJyZXBsYWNlRW52aXJvbm1lbnRWYXJpYWJsZXMiLCJPYmplY3QiLCJhc3NpZ24iLCJyY0ZpbGVQYXRoIiwicmNGaWxlUGF0aEZyb21Ob3RoaW5nIiwicmNGaWxlQ29udGVudCIsInJlYWRGaWxlIiwiSlNPTiIsInBhcnNlIiwid3JpdGVSQ0ZpbGUiLCJyZEZpbGVDb250ZW50Iiwic3RyaW5naWZ5IiwiRE9VQkxFX1NQQUNFIiwid3JpdGVGaWxlIiwidXBkYXRlUkNGaWxlIiwiYWRkZWRQcm9wZXJ0aWVzIiwiZGVsZXRlZFByb3BlcnR5TmFtZXMiLCJmb3JFYWNoIiwiZGVsZXRlZFByb3BlcnR5TmFtZSIsImNoZWNrUkNGaWxlRXhpc3RzIiwicmNGaWxlRXhpc3RzIiwiY2hlY2tGaWxlRXhpc3RzIiwiY3JlYXRlVmFjdW91c1JDRmlsZSIsImVudmlyb25tZW50cyIsInNldFJDQmFzZUV4dGVuc2lvbiIsInJjQmFzZUV4dGVuc2lvbiIsImZpcnN0RW52aXJvbm1lbnQiLCJmaXJzdCIsImZpbmQiLCJuYW1lIiwicHJvY2VzcyIsImVudiIsIkVOVklST05NRU5UIiwiYXJndiIsImFyZ3VtZW50IiwibWF0Y2hlcyIsIm1hdGNoIiwiZm91bmQiLCJzZWNvbmRNYXRjaCIsInNlY29uZCIsInJlcGxhY2VFbnZpcm9ubWVudFZhcmlhYmxlIiwic3RyaW5nIiwidmFsdWUiLCJzdHJpbmdVcHBlckNhc2UiLCJpc1N0cmluZ1VwcGVyQ2FzZSIsInVuZGVmaW5lZCIsImpzb25BcnJheSIsImlzSlNPTkFycmF5IiwianNvbk9iamVjdCIsImlzSlNPTk9iamVjdCIsImFycmF5IiwibGVuZ3RoIiwiaW5kZXgiLCJqc29uU3RyaW5nIiwiaXNKU09OU3RyaW5nIiwib2JqZWN0IiwiQXJyYXkiLCJqc29uUHJpbWl0aXZlIiwiaXNKU09OUHJpbWl0aXZlIiwiU1RSSU5HIiwiaXNKU09OTnVtYmVyIiwianNvbk51bWJlciIsIk5VTUJFUiIsImlzSlNPTkJvb2xlYW4iLCJqc29uQm9vbGVhbiIsIkJPT0xFQU4iLCJ1cHBlckNhc2VTdHJpbmciLCJ0b1VwcGVyQ2FzZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBYUE7OztlQUFBOzs7dUJBWDhCOzBCQUNZOzRCQUNXOzJCQUNjO0FBRW5FLElBQUksQ0FBQ0EsV0FBV0MsRUFBRSxFQUFFO0lBQ2xCRCxXQUFXQyxFQUFFLEdBQUdDO0FBQ2xCO0FBRUEsTUFBTSxFQUFFRCxFQUFFLEVBQUUsR0FBR0Q7TUFFZixXQUFlO0lBQ2JDO0FBQ0Y7QUFFQSxJQUFJRSxnQkFBZ0JDLG1DQUF5QjtBQUU3QyxTQUFTRixJQUFJRyxlQUFlO0lBQzFCQSxrQkFBa0JBLG1CQUFtQkMsNkJBQTZCQywwQkFBMEIsR0FBRztJQUUvRixJQUFJQyxPQUFPQztJQUVYLE1BQU1DLGNBQWNDLGdCQUFnQkgsTUFBTUg7SUFFMUNHLE9BQU9FLGFBQWEsR0FBRztJQUV2QkUsNEJBQTRCSjtJQUU1QkssT0FB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
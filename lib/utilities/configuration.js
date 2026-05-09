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
const _constants = require("../constants");
const _array = require("../utilities/array");
const _string = require("../utilities/string");
const _defaults = require("../defaults");
const _json = require("../utilities/json");
const _fileSystem = require("../utilities/fileSystem");
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
    const rcFilePath = rcFilePathFromNothing(), rdFileContent = JSON.stringify(json, null, 2);
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
    const stringUpperCase = (0, _string.isStringUpperCase)(string);
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
    const jsonArray = (0, _json.isArray)(json), jsonObject = (0, _json.isObject)(json);
    if (false) {
    ///
    } else if (jsonArray) {
        const array = json, length = array.length;
        for(let index = 0; index < length; index++){
            const json = array[index], jsonString = (0, _json.isString)(json);
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
            const json = object[name], jsonString = (0, _json.isString)(json);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvY29uZmlndXJhdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRU5WSVJPTk1FTlQgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBmaXJzdCwgc2Vjb25kIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgaXNTdHJpbmdVcHBlckNhc2UgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuaW1wb3J0IHsgREVGQVVMVF9SQ19CQVNFX0VYVEVOU0lPTiB9IGZyb20gXCIuLi9kZWZhdWx0c1wiO1xuaW1wb3J0IHsgaXNBcnJheSwgaXNPYmplY3QsIGlzU3RyaW5nIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9qc29uXCI7XG5pbXBvcnQgeyByZWFkRmlsZSwgd3JpdGVGaWxlLCBjaGVja0ZpbGVFeGlzdHMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2ZpbGVTeXN0ZW1cIjtcblxuaWYgKCFnbG9iYWxUaGlzLnJjKSB7XG4gIGdsb2JhbFRoaXMucmMgPSBfcmM7XG59XG5cbmNvbnN0IHsgcmMgfSA9IGdsb2JhbFRoaXM7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcmNcbn07XG5cbmxldCBiYXNlRXh0ZW5zaW9uID0gREVGQVVMVF9SQ19CQVNFX0VYVEVOU0lPTjtcblxuZnVuY3Rpb24gX3JjKGVudmlyb25tZW50TmFtZSkge1xuICBlbnZpcm9ubWVudE5hbWUgPSBlbnZpcm9ubWVudE5hbWUgfHwgZW52aXJvbm1lbnROYW1lRnJvbUFyZ3YoKSB8fCBlbnZpcm9ubWVudE5hbWVGcm9tRW52KCk7IC8vL1xuXG4gIGxldCBqc29uID0gcmVhZFJDRmlsZSgpO1xuXG4gIGNvbnN0IGVudmlyb25tZW50ID0gZmluZEVudmlyb25tZW50KGpzb24sIGVudmlyb25tZW50TmFtZSk7XG5cbiAganNvbiA9IGVudmlyb25tZW50OyAvLy9cblxuICByZXBsYWNlRW52aXJvbm1lbnRWYXJpYWJsZXMoanNvbik7XG5cbiAgT2JqZWN0LmFzc2lnbihyYywgZW52aXJvbm1lbnQpO1xufVxuXG5mdW5jdGlvbiByZWFkUkNGaWxlKCkge1xuICBjb25zdCByY0ZpbGVQYXRoID0gcmNGaWxlUGF0aEZyb21Ob3RoaW5nKCksXG4gICAgICAgIHJjRmlsZUNvbnRlbnQgPSByZWFkRmlsZShyY0ZpbGVQYXRoKSxcbiAgICAgICAganNvbiA9IEpTT04ucGFyc2UocmNGaWxlQ29udGVudCk7XG5cbiAgcmV0dXJuIGpzb247ICAgICAgXG59XG5cbmZ1bmN0aW9uIHdyaXRlUkNGaWxlKGpzb24pIHtcbiAgY29uc3QgcmNGaWxlUGF0aCA9IHJjRmlsZVBhdGhGcm9tTm90aGluZygpLFxuICAgICAgICByZEZpbGVDb250ZW50ID0gSlNPTi5zdHJpbmdpZnkoanNvbiwgbnVsbCwgMik7XG5cbiAgd3JpdGVGaWxlKHJjRmlsZVBhdGgsIHJkRmlsZUNvbnRlbnQpO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVSQ0ZpbGUoYWRkZWRQcm9wZXJ0aWVzLCAuLi5kZWxldGVkUHJvcGVydHlOYW1lcykge1xuICBsZXQganNvbiA9IHJlYWRSQ0ZpbGUoKTtcblxuICBpZiAoYWRkZWRQcm9wZXJ0aWVzKSB7XG4gICAgT2JqZWN0LmFzc2lnbihqc29uLCBhZGRlZFByb3BlcnRpZXMpO1xuICB9XG5cbiAgZGVsZXRlZFByb3BlcnR5TmFtZXMuZm9yRWFjaCgoZGVsZXRlZFByb3BlcnR5TmFtZSkgPT4ge1xuICAgIGRlbGV0ZSBqc29uW2RlbGV0ZWRQcm9wZXJ0eU5hbWVdO1xuICB9KTtcblxuICB3cml0ZVJDRmlsZShqc29uKTsgICAgICBcbn1cblxuZnVuY3Rpb24gY2hlY2tSQ0ZpbGVFeGlzdHMoKSB7XG4gIGNvbnN0IHJjRmlsZVBhdGggPSByY0ZpbGVQYXRoRnJvbU5vdGhpbmcoKSxcbiAgICAgICAgcmNGaWxlRXhpc3RzID0gY2hlY2tGaWxlRXhpc3RzKHJjRmlsZVBhdGgpO1xuXG4gIHJldHVybiByY0ZpbGVFeGlzdHM7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVZhY3VvdXNSQ0ZpbGUoKSB7XG4gIGNvbnN0IGVudmlyb25tZW50cyA9IFtdLFxuICAgICAgICBqc29uID0ge1xuICAgICAgICAgIGVudmlyb25tZW50c1xuICAgICAgICB9O1xuXG4gIHdyaXRlUkNGaWxlKGpzb24pO1xufVxuXG5mdW5jdGlvbiBzZXRSQ0Jhc2VFeHRlbnNpb24ocmNCYXNlRXh0ZW5zaW9uKSB7IGJhc2VFeHRlbnNpb24gPSByY0Jhc2VFeHRlbnNpb247IH1cblxuT2JqZWN0LmFzc2lnbihfcmMsIHtcbiAgcmVhZFJDRmlsZSxcbiAgd3JpdGVSQ0ZpbGUsXG4gIHVwZGF0ZVJDRmlsZSxcbiAgY2hlY2tSQ0ZpbGVFeGlzdHMsXG4gIGNyZWF0ZVZhY3VvdXNSQ0ZpbGUsXG4gIHNldFJDQmFzZUV4dGVuc2lvblxufSk7XG5cbmZ1bmN0aW9uIGZpbmRFbnZpcm9ubWVudChqc29uLCBlbnZpcm9ubWVudE5hbWUpIHtcbiAgbGV0IGVudmlyb25tZW50O1xuXG4gIGNvbnN0IHsgZW52aXJvbm1lbnRzIH0gPSBqc29uO1xuXG4gIGlmIChlbnZpcm9ubWVudE5hbWUgPT09IG51bGwpIHtcbiAgICBjb25zdCBmaXJzdEVudmlyb25tZW50ID0gZmlyc3QoZW52aXJvbm1lbnRzKTtcblxuICAgIGVudmlyb25tZW50ID0gZmlyc3RFbnZpcm9ubWVudDsgLy8vXG4gIH0gZWxzZSB7XG4gICAgZW52aXJvbm1lbnQgPSBlbnZpcm9ubWVudHMuZmluZCgoZW52aXJvbm1lbnQpID0+IHtcbiAgICAgIGNvbnN0IHsgbmFtZSB9ID0gZW52aXJvbm1lbnQ7XG5cbiAgICAgIGlmKG5hbWUgPT09IGVudmlyb25tZW50TmFtZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGRlbGV0ZSBlbnZpcm9ubWVudC5uYW1lXG5cbiAgcmV0dXJuIGVudmlyb25tZW50O1xufVxuXG5mdW5jdGlvbiByY0ZpbGVQYXRoRnJvbU5vdGhpbmcoKSB7XG4gIGNvbnN0IHJjRmlsZVBhdGggPSBgLi8uJHtiYXNlRXh0ZW5zaW9ufXJjYDtcblxuICByZXR1cm4gcmNGaWxlUGF0aDtcbn1cblxuZnVuY3Rpb24gZW52aXJvbm1lbnROYW1lRnJvbUVudigpIHtcbiAgY29uc3QgZW52aXJvbm1lbnROYW1lID0gcHJvY2Vzcy5lbnZbRU5WSVJPTk1FTlRdIHx8IG51bGw7XG5cbiAgcmV0dXJuIGVudmlyb25tZW50TmFtZTtcbn1cblxuZnVuY3Rpb24gZW52aXJvbm1lbnROYW1lRnJvbUFyZ3YoKSB7XG4gIGxldCBlbnZpcm9ubWVudE5hbWUgPSBudWxsO1xuXG4gIHByb2Nlc3MuYXJndi5maW5kKChhcmd1bWVudCkgPT4geyAgLy8vXG4gICAgY29uc3QgbWF0Y2hlcyA9IGFyZ3VtZW50Lm1hdGNoKC8tLWVudmlyb25tZW50PSguKykvKSxcbiAgICAgICAgICBmb3VuZCA9IChtYXRjaGVzICE9PSBudWxsKTtcblxuICAgIGlmIChmb3VuZCkge1xuICAgICAgY29uc3Qgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyk7XG5cbiAgICAgIGVudmlyb25tZW50TmFtZSA9IHNlY29uZE1hdGNoO1xuICAgIH1cblxuICAgIHJldHVybiBmb3VuZDtcbiAgfSk7XG5cbiAgcmV0dXJuIGVudmlyb25tZW50TmFtZTtcbn1cblxuZnVuY3Rpb24gcmVwbGFjZUVudmlyb25tZW50VmFyaWFibGUoc3RyaW5nKSB7XG4gIGxldCB2YWx1ZSA9IG51bGw7XG5cbiAgY29uc3Qgc3RyaW5nVXBwZXJDYXNlID0gaXNTdHJpbmdVcHBlckNhc2Uoc3RyaW5nKTtcblxuICBpZiAoc3RyaW5nVXBwZXJDYXNlKSB7XG4gICAgY29uc3QgbmFtZSA9IHN0cmluZzsgIC8vL1xuXG4gICAgdmFsdWUgPSBwcm9jZXNzLmVudltuYW1lXTtcblxuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB2YWx1ZSA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHZhbHVlO1xufVxuXG5mdW5jdGlvbiByZXBsYWNlRW52aXJvbm1lbnRWYXJpYWJsZXMoZW52aXJvbm1lbnQpIHtcbiAgbGV0IGpzb24gPSBlbnZpcm9ubWVudDtcblxuICBjb25zdCBqc29uQXJyYXkgPSBpc0FycmF5KGpzb24pLFxuICAgICAgICBqc29uT2JqZWN0ID0gaXNPYmplY3QoanNvbik7XG5cbiAgaWYgKGZhbHNlKSB7XG4gICAgLy8vXG4gIH0gZWxzZSBpZiAoanNvbkFycmF5KSB7XG4gICAgY29uc3QgYXJyYXkgPSBqc29uLCAvLy9cbiAgICAgICAgICBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICBjb25zdCBqc29uID0gYXJyYXlbaW5kZXhdLFxuICAgICAgICAgICAganNvblN0cmluZyA9IGlzU3RyaW5nKGpzb24pO1xuXG4gICAgICBpZiAoanNvblN0cmluZykge1xuICAgICAgICBjb25zdCBzdHJpbmcgPSBqc29uLCAgLy8vXG4gICAgICAgICAgICAgIHZhbHVlID0gcmVwbGFjZUVudmlyb25tZW50VmFyaWFibGUoc3RyaW5nKTtcblxuICAgICAgICBpZiAodmFsdWUgIT09IG51bGwpIHtcbiAgICAgICAgICBhcnJheVtpbmRleF0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIGlmIChqc29uT2JqZWN0KSB7XG4gICAgY29uc3Qgb2JqZWN0ID0ganNvbjsgIC8vL1xuXG4gICAgZm9yIChsZXQgbmFtZSBpbiBvYmplY3QpIHtcbiAgICAgIGNvbnN0IGpzb24gPSBvYmplY3RbbmFtZV0sXG4gICAgICAgICAgICBqc29uU3RyaW5nID0gaXNTdHJpbmcoanNvbik7XG5cbiAgICAgIGlmIChqc29uU3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IHN0cmluZyA9IGpzb24sICAvLy9cbiAgICAgICAgICAgICAgdmFsdWUgPSByZXBsYWNlRW52aXJvbm1lbnRWYXJpYWJsZShzdHJpbmcpOyAgLy8vXG5cbiAgICAgICAgaWYgKHZhbHVlICE9PSBudWxsKSB7XG4gICAgICAgICAgb2JqZWN0W25hbWVdID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSAge1xuICAgICAgICByZXBsYWNlRW52aXJvbm1lbnRWYXJpYWJsZXMoanNvbik7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXSwibmFtZXMiOlsiZ2xvYmFsVGhpcyIsInJjIiwiX3JjIiwiYmFzZUV4dGVuc2lvbiIsIkRFRkFVTFRfUkNfQkFTRV9FWFRFTlNJT04iLCJlbnZpcm9ubWVudE5hbWUiLCJlbnZpcm9ubWVudE5hbWVGcm9tQXJndiIsImVudmlyb25tZW50TmFtZUZyb21FbnYiLCJqc29uIiwicmVhZFJDRmlsZSIsImVudmlyb25tZW50IiwiZmluZEVudmlyb25tZW50IiwicmVwbGFjZUVudmlyb25tZW50VmFyaWFibGVzIiwiT2JqZWN0IiwiYXNzaWduIiwicmNGaWxlUGF0aCIsInJjRmlsZVBhdGhGcm9tTm90aGluZyIsInJjRmlsZUNvbnRlbnQiLCJyZWFkRmlsZSIsIkpTT04iLCJwYXJzZSIsIndyaXRlUkNGaWxlIiwicmRGaWxlQ29udGVudCIsInN0cmluZ2lmeSIsIndyaXRlRmlsZSIsInVwZGF0ZVJDRmlsZSIsImFkZGVkUHJvcGVydGllcyIsImRlbGV0ZWRQcm9wZXJ0eU5hbWVzIiwiZm9yRWFjaCIsImRlbGV0ZWRQcm9wZXJ0eU5hbWUiLCJjaGVja1JDRmlsZUV4aXN0cyIsInJjRmlsZUV4aXN0cyIsImNoZWNrRmlsZUV4aXN0cyIsImNyZWF0ZVZhY3VvdXNSQ0ZpbGUiLCJlbnZpcm9ubWVudHMiLCJzZXRSQ0Jhc2VFeHRlbnNpb24iLCJyY0Jhc2VFeHRlbnNpb24iLCJmaXJzdEVudmlyb25tZW50IiwiZmlyc3QiLCJmaW5kIiwibmFtZSIsInByb2Nlc3MiLCJlbnYiLCJFTlZJUk9OTUVOVCIsImFyZ3YiLCJhcmd1bWVudCIsIm1hdGNoZXMiLCJtYXRjaCIsImZvdW5kIiwic2Vjb25kTWF0Y2giLCJzZWNvbmQiLCJyZXBsYWNlRW52aXJvbm1lbnRWYXJpYWJsZSIsInN0cmluZyIsInZhbHVlIiwic3RyaW5nVXBwZXJDYXNlIiwiaXNTdHJpbmdVcHBlckNhc2UiLCJ1bmRlZmluZWQiLCJqc29uQXJyYXkiLCJpc0FycmF5IiwianNvbk9iamVjdCIsImlzT2JqZWN0IiwiYXJyYXkiLCJsZW5ndGgiLCJpbmRleCIsImpzb25TdHJpbmciLCJpc1N0cmluZyIsIm9iamVjdCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBZUE7OztlQUFBOzs7MkJBYjRCO3VCQUNFO3dCQUNJOzBCQUNRO3NCQUNFOzRCQUNTO0FBRXJELElBQUksQ0FBQ0EsV0FBV0MsRUFBRSxFQUFFO0lBQ2xCRCxXQUFXQyxFQUFFLEdBQUdDO0FBQ2xCO0FBRUEsTUFBTSxFQUFFRCxFQUFFLEVBQUUsR0FBR0Q7TUFFZixXQUFlO0lBQ2JDO0FBQ0Y7QUFFQSxJQUFJRSxnQkFBZ0JDLG1DQUF5QjtBQUU3QyxTQUFTRixJQUFJRyxlQUFlO0lBQzFCQSxrQkFBa0JBLG1CQUFtQkMsNkJBQTZCQywwQkFBMEIsR0FBRztJQUUvRixJQUFJQyxPQUFPQztJQUVYLE1BQU1DLGNBQWNDLGdCQUFnQkgsTUFBTUg7SUFFMUNHLE9BQU9FLGFBQWEsR0FBRztJQUV2QkUsNEJBQTRCSjtJQUU1QkssT0FBT0MsTUFBTSxDQUFDYixJQUFJUztBQUNwQjtBQUVBLFNBQVNEO0lBQ1AsTUFBTU0sYUFBYUMseUJBQ2JDLGdCQUFnQkMsSUFBQUEsb0JBQVEsRUFBQ0gsYUFDekJQLE9BQU9XLEtBQUtDLEtBQUssQ0FBQ0g7SUFFeEIsT0FBT1Q7QUFDVDtBQUVBLFNBQVNhLFlBQVliLElBQUk7SUFDdkIsTUFBTU8sYUFBYUMseUJBQ2JNLGdCQUFnQkgsS0FBS0ksU0FBUyxDQUFDZixNQUFNLE1BQU07SUFFakRnQixJQUFBQSxxQkFBUyxFQUFDVCxZQUFZTztBQUN4QjtBQUVBLFNBQVNHLGFBQWFDLGVBQWUsRUFBRSxHQUFHQyxv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
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
    const jsonString = JSON.stringify(json, null, 2), rcFilePath = rcFilePathFromNothing(), rdFileContent = jsonString; ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvY29uZmlndXJhdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRU5WSVJPTk1FTlQgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBmaXJzdCwgc2Vjb25kIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgaXNTdHJpbmdVcHBlckNhc2UgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuaW1wb3J0IHsgREVGQVVMVF9SQ19CQVNFX0VYVEVOU0lPTiB9IGZyb20gXCIuLi9kZWZhdWx0c1wiO1xuaW1wb3J0IHsgaXNBcnJheSwgaXNPYmplY3QsIGlzU3RyaW5nIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9qc29uXCI7XG5pbXBvcnQgeyByZWFkRmlsZSwgd3JpdGVGaWxlLCBjaGVja0ZpbGVFeGlzdHMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2ZpbGVTeXN0ZW1cIjtcblxuaWYgKCFnbG9iYWxUaGlzLnJjKSB7XG4gIGdsb2JhbFRoaXMucmMgPSBfcmM7XG59XG5cbmNvbnN0IHsgcmMgfSA9IGdsb2JhbFRoaXM7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcmNcbn07XG5cbmxldCBiYXNlRXh0ZW5zaW9uID0gREVGQVVMVF9SQ19CQVNFX0VYVEVOU0lPTjtcblxuZnVuY3Rpb24gX3JjKGVudmlyb25tZW50TmFtZSkge1xuICBlbnZpcm9ubWVudE5hbWUgPSBlbnZpcm9ubWVudE5hbWUgfHwgZW52aXJvbm1lbnROYW1lRnJvbUFyZ3YoKSB8fCBlbnZpcm9ubWVudE5hbWVGcm9tRW52KCk7IC8vL1xuXG4gIGxldCBqc29uID0gcmVhZFJDRmlsZSgpO1xuXG4gIGNvbnN0IGVudmlyb25tZW50ID0gZmluZEVudmlyb25tZW50KGpzb24sIGVudmlyb25tZW50TmFtZSk7XG5cbiAganNvbiA9IGVudmlyb25tZW50OyAvLy9cblxuICByZXBsYWNlRW52aXJvbm1lbnRWYXJpYWJsZXMoanNvbik7XG5cbiAgT2JqZWN0LmFzc2lnbihyYywgZW52aXJvbm1lbnQpO1xufVxuXG5mdW5jdGlvbiByZWFkUkNGaWxlKCkge1xuICBjb25zdCByY0ZpbGVQYXRoID0gcmNGaWxlUGF0aEZyb21Ob3RoaW5nKCksXG4gICAgICAgIHJjRmlsZUNvbnRlbnQgPSByZWFkRmlsZShyY0ZpbGVQYXRoKSxcbiAgICAgICAganNvbiA9IEpTT04ucGFyc2UocmNGaWxlQ29udGVudCk7XG5cbiAgcmV0dXJuIGpzb247ICAgICAgXG59XG5cbmZ1bmN0aW9uIHdyaXRlUkNGaWxlKGpzb24pIHtcbiAgY29uc3QganNvblN0cmluZyA9IEpTT04uc3RyaW5naWZ5KGpzb24sIG51bGwsIDIpLFxuICAgICAgICByY0ZpbGVQYXRoID0gcmNGaWxlUGF0aEZyb21Ob3RoaW5nKCksXG4gICAgICAgIHJkRmlsZUNvbnRlbnQgPSBqc29uU3RyaW5nOy8vL1xuXG4gIHdyaXRlRmlsZShyY0ZpbGVQYXRoLCByZEZpbGVDb250ZW50KTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlUkNGaWxlKGFkZGVkUHJvcGVydGllcywgLi4uZGVsZXRlZFByb3BlcnR5TmFtZXMpIHtcbiAgbGV0IGpzb24gPSByZWFkUkNGaWxlKCk7XG5cbiAgaWYgKGFkZGVkUHJvcGVydGllcykge1xuICAgIE9iamVjdC5hc3NpZ24oanNvbiwgYWRkZWRQcm9wZXJ0aWVzKTtcbiAgfVxuXG4gIGRlbGV0ZWRQcm9wZXJ0eU5hbWVzLmZvckVhY2goKGRlbGV0ZWRQcm9wZXJ0eU5hbWUpID0+IHtcbiAgICBkZWxldGUganNvbltkZWxldGVkUHJvcGVydHlOYW1lXTtcbiAgfSk7XG5cbiAgd3JpdGVSQ0ZpbGUoanNvbik7ICAgICAgXG59XG5cbmZ1bmN0aW9uIGNoZWNrUkNGaWxlRXhpc3RzKCkge1xuICBjb25zdCByY0ZpbGVQYXRoID0gcmNGaWxlUGF0aEZyb21Ob3RoaW5nKCksXG4gICAgICAgIHJjRmlsZUV4aXN0cyA9IGNoZWNrRmlsZUV4aXN0cyhyY0ZpbGVQYXRoKTtcblxuICByZXR1cm4gcmNGaWxlRXhpc3RzO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVWYWN1b3VzUkNGaWxlKCkge1xuICBjb25zdCBlbnZpcm9ubWVudHMgPSBbXSxcbiAgICAgICAganNvbiA9IHtcbiAgICAgICAgICBlbnZpcm9ubWVudHNcbiAgICAgICAgfTtcblxuICB3cml0ZVJDRmlsZShqc29uKTtcbn1cblxuZnVuY3Rpb24gc2V0UkNCYXNlRXh0ZW5zaW9uKHJjQmFzZUV4dGVuc2lvbikgeyBiYXNlRXh0ZW5zaW9uID0gcmNCYXNlRXh0ZW5zaW9uOyB9XG5cbk9iamVjdC5hc3NpZ24oX3JjLCB7XG4gIHJlYWRSQ0ZpbGUsXG4gIHdyaXRlUkNGaWxlLFxuICB1cGRhdGVSQ0ZpbGUsXG4gIGNoZWNrUkNGaWxlRXhpc3RzLFxuICBjcmVhdGVWYWN1b3VzUkNGaWxlLFxuICBzZXRSQ0Jhc2VFeHRlbnNpb25cbn0pO1xuXG5mdW5jdGlvbiBmaW5kRW52aXJvbm1lbnQoanNvbiwgZW52aXJvbm1lbnROYW1lKSB7XG4gIGxldCBlbnZpcm9ubWVudDtcblxuICBjb25zdCB7IGVudmlyb25tZW50cyB9ID0ganNvbjtcblxuICBpZiAoZW52aXJvbm1lbnROYW1lID09PSBudWxsKSB7XG4gICAgY29uc3QgZmlyc3RFbnZpcm9ubWVudCA9IGZpcnN0KGVudmlyb25tZW50cyk7XG5cbiAgICBlbnZpcm9ubWVudCA9IGZpcnN0RW52aXJvbm1lbnQ7IC8vL1xuICB9IGVsc2Uge1xuICAgIGVudmlyb25tZW50ID0gZW52aXJvbm1lbnRzLmZpbmQoKGVudmlyb25tZW50KSA9PiB7XG4gICAgICBjb25zdCB7IG5hbWUgfSA9IGVudmlyb25tZW50O1xuXG4gICAgICBpZihuYW1lID09PSBlbnZpcm9ubWVudE5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBkZWxldGUgZW52aXJvbm1lbnQubmFtZVxuXG4gIHJldHVybiBlbnZpcm9ubWVudDtcbn1cblxuZnVuY3Rpb24gcmNGaWxlUGF0aEZyb21Ob3RoaW5nKCkge1xuICBjb25zdCByY0ZpbGVQYXRoID0gYC4vLiR7YmFzZUV4dGVuc2lvbn1yY2A7XG5cbiAgcmV0dXJuIHJjRmlsZVBhdGg7XG59XG5cbmZ1bmN0aW9uIGVudmlyb25tZW50TmFtZUZyb21FbnYoKSB7XG4gIGNvbnN0IGVudmlyb25tZW50TmFtZSA9IHByb2Nlc3MuZW52W0VOVklST05NRU5UXSB8fCBudWxsO1xuXG4gIHJldHVybiBlbnZpcm9ubWVudE5hbWU7XG59XG5cbmZ1bmN0aW9uIGVudmlyb25tZW50TmFtZUZyb21Bcmd2KCkge1xuICBsZXQgZW52aXJvbm1lbnROYW1lID0gbnVsbDtcblxuICBwcm9jZXNzLmFyZ3YuZmluZCgoYXJndW1lbnQpID0+IHsgIC8vL1xuICAgIGNvbnN0IG1hdGNoZXMgPSBhcmd1bWVudC5tYXRjaCgvLS1lbnZpcm9ubWVudD0oLispLyksXG4gICAgICAgICAgZm91bmQgPSAobWF0Y2hlcyAhPT0gbnVsbCk7XG5cbiAgICBpZiAoZm91bmQpIHtcbiAgICAgIGNvbnN0IHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpO1xuXG4gICAgICBlbnZpcm9ubWVudE5hbWUgPSBzZWNvbmRNYXRjaDtcbiAgICB9XG5cbiAgICByZXR1cm4gZm91bmQ7XG4gIH0pO1xuXG4gIHJldHVybiBlbnZpcm9ubWVudE5hbWU7XG59XG5cbmZ1bmN0aW9uIHJlcGxhY2VFbnZpcm9ubWVudFZhcmlhYmxlKHN0cmluZykge1xuICBsZXQgdmFsdWUgPSBudWxsO1xuXG4gIGNvbnN0IHN0cmluZ1VwcGVyQ2FzZSA9IGlzU3RyaW5nVXBwZXJDYXNlKHN0cmluZyk7XG5cbiAgaWYgKHN0cmluZ1VwcGVyQ2FzZSkge1xuICAgIGNvbnN0IG5hbWUgPSBzdHJpbmc7ICAvLy9cblxuICAgIHZhbHVlID0gcHJvY2Vzcy5lbnZbbmFtZV07XG5cbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdmFsdWUgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gcmVwbGFjZUVudmlyb25tZW50VmFyaWFibGVzKGVudmlyb25tZW50KSB7XG4gIGxldCBqc29uID0gZW52aXJvbm1lbnQ7XG5cbiAgY29uc3QganNvbkFycmF5ID0gaXNBcnJheShqc29uKSxcbiAgICAgICAganNvbk9iamVjdCA9IGlzT2JqZWN0KGpzb24pO1xuXG4gIGlmIChmYWxzZSkge1xuICAgIC8vL1xuICB9IGVsc2UgaWYgKGpzb25BcnJheSkge1xuICAgIGNvbnN0IGFycmF5ID0ganNvbiwgLy8vXG4gICAgICAgICAgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgY29uc3QganNvbiA9IGFycmF5W2luZGV4XSxcbiAgICAgICAgICAgIGpzb25TdHJpbmcgPSBpc1N0cmluZyhqc29uKTtcblxuICAgICAgaWYgKGpzb25TdHJpbmcpIHtcbiAgICAgICAgY29uc3Qgc3RyaW5nID0ganNvbiwgIC8vL1xuICAgICAgICAgICAgICB2YWx1ZSA9IHJlcGxhY2VFbnZpcm9ubWVudFZhcmlhYmxlKHN0cmluZyk7XG5cbiAgICAgICAgaWYgKHZhbHVlICE9PSBudWxsKSB7XG4gICAgICAgICAgYXJyYXlbaW5kZXhdID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSBpZiAoanNvbk9iamVjdCkge1xuICAgIGNvbnN0IG9iamVjdCA9IGpzb247ICAvLy9cblxuICAgIGZvciAobGV0IG5hbWUgaW4gb2JqZWN0KSB7XG4gICAgICBjb25zdCBqc29uID0gb2JqZWN0W25hbWVdLFxuICAgICAgICAgICAganNvblN0cmluZyA9IGlzU3RyaW5nKGpzb24pO1xuXG4gICAgICBpZiAoanNvblN0cmluZykge1xuICAgICAgICBjb25zdCBzdHJpbmcgPSBqc29uLCAgLy8vXG4gICAgICAgICAgICAgIHZhbHVlID0gcmVwbGFjZUVudmlyb25tZW50VmFyaWFibGUoc3RyaW5nKTsgIC8vL1xuXG4gICAgICAgIGlmICh2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgICAgIG9iamVjdFtuYW1lXSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgIHtcbiAgICAgICAgcmVwbGFjZUVudmlyb25tZW50VmFyaWFibGVzKGpzb24pO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl0sIm5hbWVzIjpbImdsb2JhbFRoaXMiLCJyYyIsIl9yYyIsImJhc2VFeHRlbnNpb24iLCJERUZBVUxUX1JDX0JBU0VfRVhURU5TSU9OIiwiZW52aXJvbm1lbnROYW1lIiwiZW52aXJvbm1lbnROYW1lRnJvbUFyZ3YiLCJlbnZpcm9ubWVudE5hbWVGcm9tRW52IiwianNvbiIsInJlYWRSQ0ZpbGUiLCJlbnZpcm9ubWVudCIsImZpbmRFbnZpcm9ubWVudCIsInJlcGxhY2VFbnZpcm9ubWVudFZhcmlhYmxlcyIsIk9iamVjdCIsImFzc2lnbiIsInJjRmlsZVBhdGgiLCJyY0ZpbGVQYXRoRnJvbU5vdGhpbmciLCJyY0ZpbGVDb250ZW50IiwicmVhZEZpbGUiLCJKU09OIiwicGFyc2UiLCJ3cml0ZVJDRmlsZSIsImpzb25TdHJpbmciLCJzdHJpbmdpZnkiLCJyZEZpbGVDb250ZW50Iiwid3JpdGVGaWxlIiwidXBkYXRlUkNGaWxlIiwiYWRkZWRQcm9wZXJ0aWVzIiwiZGVsZXRlZFByb3BlcnR5TmFtZXMiLCJmb3JFYWNoIiwiZGVsZXRlZFByb3BlcnR5TmFtZSIsImNoZWNrUkNGaWxlRXhpc3RzIiwicmNGaWxlRXhpc3RzIiwiY2hlY2tGaWxlRXhpc3RzIiwiY3JlYXRlVmFjdW91c1JDRmlsZSIsImVudmlyb25tZW50cyIsInNldFJDQmFzZUV4dGVuc2lvbiIsInJjQmFzZUV4dGVuc2lvbiIsImZpcnN0RW52aXJvbm1lbnQiLCJmaXJzdCIsImZpbmQiLCJuYW1lIiwicHJvY2VzcyIsImVudiIsIkVOVklST05NRU5UIiwiYXJndiIsImFyZ3VtZW50IiwibWF0Y2hlcyIsIm1hdGNoIiwiZm91bmQiLCJzZWNvbmRNYXRjaCIsInNlY29uZCIsInJlcGxhY2VFbnZpcm9ubWVudFZhcmlhYmxlIiwic3RyaW5nIiwidmFsdWUiLCJzdHJpbmdVcHBlckNhc2UiLCJpc1N0cmluZ1VwcGVyQ2FzZSIsInVuZGVmaW5lZCIsImpzb25BcnJheSIsImlzQXJyYXkiLCJqc29uT2JqZWN0IiwiaXNPYmplY3QiLCJhcnJheSIsImxlbmd0aCIsImluZGV4IiwiaXNTdHJpbmciLCJvYmplY3QiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWVBOzs7ZUFBQTs7OzJCQWI0Qjt1QkFDRTt3QkFDSTswQkFDUTtzQkFDRTs0QkFDUztBQUVyRCxJQUFJLENBQUNBLFdBQVdDLEVBQUUsRUFBRTtJQUNsQkQsV0FBV0MsRUFBRSxHQUFHQztBQUNsQjtBQUVBLE1BQU0sRUFBRUQsRUFBRSxFQUFFLEdBQUdEO01BRWYsV0FBZTtJQUNiQztBQUNGO0FBRUEsSUFBSUUsZ0JBQWdCQyxtQ0FBeUI7QUFFN0MsU0FBU0YsSUFBSUcsZUFBZTtJQUMxQkEsa0JBQWtCQSxtQkFBbUJDLDZCQUE2QkMsMEJBQTBCLEdBQUc7SUFFL0YsSUFBSUMsT0FBT0M7SUFFWCxNQUFNQyxjQUFjQyxnQkFBZ0JILE1BQU1IO0lBRTFDRyxPQUFPRSxhQUFhLEdBQUc7SUFFdkJFLDRCQUE0Qko7SUFFNUJLLE9BQU9DLE1BQU0sQ0FBQ2IsSUFBSVM7QUFDcEI7QUFFQSxTQUFTRDtJQUNQLE1BQU1NLGFBQWFDLHlCQUNiQyxnQkFBZ0JDLElBQUFBLG9CQUFRLEVBQUNILGFBQ3pCUCxPQUFPVyxLQUFLQyxLQUFLLENBQUNIO0lBRXhCLE9BQU9UO0FBQ1Q7QUFFQSxTQUFTYSxZQUFZYixJQUFJO0lBQ3ZCLE1BQU1jLGFBQWFILEtBQUtJLFNBQVMsQ0FBQ2YsTUFBTSxNQUFNLElBQ3hDTyxhQUFhQyx5QkFDYlEsZ0JBQWdCRixZQUFXLEdBQUc7SUFFcENHLElBQUFB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
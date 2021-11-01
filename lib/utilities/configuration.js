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
        environment = environments.find(function(environment) {
            var name = environment.name, found = name === environmentName;
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvY29uZmlndXJhdGlvbi5qcyJdLCJuYW1lcyI6WyJmaXJzdCIsInNlY29uZCIsIkRFRkFVTFRfUkNfQkFTRV9FWFRFTlNJT04iLCJyZWFkRmlsZSIsIndyaXRlRmlsZSIsImNoZWNrRmlsZUV4aXN0cyIsImdsb2JhbFRoaXMiLCJyYyIsIl9yYyIsImJhc2VFeHRlbnNpb24iLCJlbnZpcm9ubWVudE5hbWVPckFyZ3YiLCJlbnZpcm9ubWVudCIsImVudmlyb25tZW50TmFtZSIsImVudmlyb25tZW50TmFtZU9yQXJndkFyZ3YiLCJBcnJheSIsImFyZ3YiLCJlbnZpcm9ubWVudE5hbWVGcm9tQXJndiIsImpzb24iLCJyZWFkUkNGaWxlIiwiZW52aXJvbm1lbnRzIiwiZmlyc3RFbnZpcm9ubWVudCIsImZpbmQiLCJuYW1lIiwiZm91bmQiLCJPYmplY3QiLCJhc3NpZ24iLCJyY0ZpbGVQYXRoIiwicmNGaWxlUGF0aEZyb21Ob3RoaW5nIiwicmNGaWxlQ29udGVudCIsIkpTT04iLCJwYXJzZSIsIndyaXRlUkNGaWxlIiwicmRGaWxlQ29udGVudCIsInN0cmluZ2lmeSIsInVwZGF0ZVJDRmlsZSIsImFkZGVkUHJvcGVydGllcyIsImRlbGV0ZWRQcm9wZXJ0eU5hbWVzIiwiZm9yRWFjaCIsImRlbGV0ZWRQcm9wZXJ0eU5hbWUiLCJjaGVja1JDRmlsZUV4aXN0cyIsInJjRmlsZUV4aXN0cyIsImNyZWF0ZVZhY3VvdXNSQ0ZpbGUiLCJzZXRSQ0Jhc2VFeHRlbnNpb24iLCJyY0Jhc2VFeHRlbnNpb24iLCJhcmd1bWVudCIsIm1hdGNoZXMiLCJtYXRjaCIsInNlY29uZE1hdGNoIl0sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztBQUVrQixHQUFvQixDQUFwQixNQUFvQjtBQUNSLEdBQWEsQ0FBYixTQUFhO0FBQ0YsR0FBeUIsQ0FBekIsV0FBeUI7Ozs7Ozs7O0FBRTlFLEVBQUUsR0FBRyxVQUFVLENBQUMsRUFBRSxFQUFFLENBQUM7SUFD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
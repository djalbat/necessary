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

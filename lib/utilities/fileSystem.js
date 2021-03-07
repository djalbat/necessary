"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.checkEntryExists = checkEntryExists;
exports.checkFileExists = checkFileExists;
exports.checkDirectoryExists = checkDirectoryExists;
exports.isEntryFile = isEntryFile;
exports.isEntryDirectory = isEntryDirectory;
exports.isDirectoryEmpty = isDirectoryEmpty;
exports.readDirectory = readDirectory;
exports.readFile = readFile;
exports.writeFile = writeFile;
exports.appendToFile = appendToFile;
exports.createDirectory = createDirectory;
exports.renameFile = renameFile;
exports.getStats = getStats;
exports.default = void 0;
var _fs = _interopRequireDefault(require("fs"));
var _constants = require("../constants");
var _path = require("../utilities/path");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
"use strict";
function checkEntryExists(entryPath) {
    var entryExists = _fs.default.existsSync(entryPath);
    return entryExists;
}
function checkFileExists(filePath) {
    var fileExists = false;
    var entryPath = filePath, entryExists = checkEntryExists(entryPath);
    if (entryExists) {
        var entryFile = isEntryFile(entryPath);
        if (entryFile) {
            fileExists = true;
        }
    }
    return fileExists;
}
function checkDirectoryExists(directoryPath) {
    var directoryExists = false;
    var entryPath = directoryPath, entryExists = checkEntryExists(entryPath);
    if (entryExists) {
        var entryDirectory = isEntryDirectory(entryPath);
        if (entryDirectory) {
            directoryExists = true;
        }
    }
    return directoryExists;
}
function isEntryFile(entryPath) {
    var stat = _fs.default.statSync(entryPath), entryDirectory = stat.isDirectory(), entryFile = !entryDirectory;
    return entryFile;
}
function isEntryDirectory(entryPath) {
    var stat = _fs.default.statSync(entryPath), entryDirectory = stat.isDirectory();
    return entryDirectory;
}
function isDirectoryEmpty(directoryPath) {
    var subEntryNames = readDirectory(directoryPath), subEntryNamesLength = subEntryNames.length, directoryEmpty = subEntryNamesLength === 0;
    return directoryEmpty;
}
function readDirectory(directoryPath) {
    var subEntryNames = _fs.default.readdirSync(directoryPath);
    return subEntryNames;
}
function readFile(filePath, param) {
    var encoding = param === void 0 ? _constants.UTF8_ENCODING : param;
    var options = {
        encoding: encoding
    }, content = _fs.default.readFileSync(filePath, options);
    return content;
}
function writeFile(filePath, content) {
    _fs.default.writeFileSync(filePath, content);
}
function appendToFile(filePath, content) {
    _fs.default.appendFileSync(filePath, content);
}
function createDirectory(directoryPath) {
    var directoryPathWithoutBottommostName = _path.pathWithoutBottommostNameFromPath(directoryPath);
    if (directoryPathWithoutBottommostName !== "." && directoryPathWithoutBottommostName !== null) {
        var parentDirectoryPath = directoryPathWithoutBottommostName, parentDirectoryExists = checkDirectoryExists(parentDirectoryPath);
        if (!parentDirectoryExists) {
            createDirectory(parentDirectoryPath);
        }
    }
    _fs.default.mkdirSync(directoryPath);
}
function renameFile(oldFilePath, newFilePath) {
    _fs.default.renameSync(oldFilePath, newFilePath);
}
function getStats(filePath) {
    return _fs.default.statSync(filePath);
}
var _default = {
    checkEntryExists: checkEntryExists,
    checkFileExists: checkFileExists,
    checkDirectoryExists: checkDirectoryExists,
    isEntryFile: isEntryFile,
    isEntryDirectory: isEntryDirectory,
    isDirectoryEmpty: isDirectoryEmpty,
    readDirectory: readDirectory,
    readFile: readFile,
    writeFile: writeFile,
    appendToFile: appendToFile,
    createDirectory: createDirectory,
    renameFile: renameFile,
    getStats: getStats
};
exports.default = _default;

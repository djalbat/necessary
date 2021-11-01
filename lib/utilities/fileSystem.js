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
var _defaults = require("../defaults");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
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
    var encoding = param === void 0 ? _defaults.DEFAULT_ENCODING : param;
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
    var recursive = true, options = {
        recursive: recursive
    };
    _fs.default.mkdirSync(directoryPath, options);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZmlsZVN5c3RlbS5qcyJdLCJuYW1lcyI6WyJmcyIsIkRFRkFVTFRfRU5DT0RJTkciLCJjaGVja0VudHJ5RXhpc3RzIiwiZW50cnlQYXRoIiwiZW50cnlFeGlzdHMiLCJleGlzdHNTeW5jIiwiY2hlY2tGaWxlRXhpc3RzIiwiZmlsZVBhdGgiLCJmaWxlRXhpc3RzIiwiZW50cnlGaWxlIiwiaXNFbnRyeUZpbGUiLCJjaGVja0RpcmVjdG9yeUV4aXN0cyIsImRpcmVjdG9yeVBhdGgiLCJkaXJlY3RvcnlFeGlzdHMiLCJlbnRyeURpcmVjdG9yeSIsImlzRW50cnlEaXJlY3RvcnkiLCJzdGF0Iiwic3RhdFN5bmMiLCJpc0RpcmVjdG9yeSIsImlzRGlyZWN0b3J5RW1wdHkiLCJzdWJFbnRyeU5hbWVzIiwicmVhZERpcmVjdG9yeSIsInN1YkVudHJ5TmFtZXNMZW5ndGgiLCJsZW5ndGgiLCJkaXJlY3RvcnlFbXB0eSIsInJlYWRkaXJTeW5jIiwicmVhZEZpbGUiLCJlbmNvZGluZyIsIm9wdGlvbnMiLCJjb250ZW50IiwicmVhZEZpbGVTeW5jIiwid3JpdGVGaWxlIiwid3JpdGVGaWxlU3luYyIsImFwcGVuZFRvRmlsZSIsImFwcGVuZEZpbGVTeW5jIiwiY3JlYXRlRGlyZWN0b3J5IiwicmVjdXJzaXZlIiwibWtkaXJTeW5jIiwicmVuYW1lRmlsZSIsIm9sZEZpbGVQYXRoIiwibmV3RmlsZVBhdGgiLCJyZW5hbWVTeW5jIiwiZ2V0U3RhdHMiXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7UUFNSSxnQkFBZ0IsR0FBaEIsZ0JBQWdCO1FBTWhCLGVBQWUsR0FBZixlQUFlO1FBaUJmLG9CQUFvQixHQUFwQixvQkFBb0I7UUFpQnBCLFdBQVcsR0FBWCxXQUFXO1FBUVgsZ0JBQWdCLEdBQWhCLGdCQUFnQjtRQU9oQixnQkFBZ0IsR0FBaEIsZ0JBQWdCO1FBUWhCLGFBQWEsR0FBYixhQUFhO1FBTWIsUUFBUSxHQUFSLFFBQVE7UUFTUixT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
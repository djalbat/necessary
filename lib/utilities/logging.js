"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.log = log;
exports.default = void 0;
var _path = _interopRequireDefault(require("path"));
var _array = require("../utilities/array");
var _path1 = require("../utilities/path");
var _fileSystem = require("../utilities/fileSystem");
var _constants = require("../constants");
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
var levels = [
    _constants.TRACE,
    _constants.DEBUG,
    _constants.INFO,
    _constants.WARNING,
    _constants.ERROR,
    _constants.FATAL, 
];
var logLevel = _constants.DEFAULT_LOG_LEVEL, logFileBaseName = _constants.DEFAULT_LOG_FILE_BASE_NAME, logDirectoryPath = _constants.DEFAULT_LOG_DIRECTORY_PATH;
function log(messageOrError, param) {
    var level = param === void 0 ? "" : param;
    var salientStackMessageIndex = 1;
    if (level !== "") {
        var levelIndex = levels.indexOf(level), logLevelIndex = levels.indexOf(logLevel);
        if (levelIndex < logLevelIndex) {
            return;
        }
        salientStackMessageIndex += 1;
        level = "".concat(level, " "); ///
    }
    var error, message;
    if (_instanceof(messageOrError, Error)) {
        error = messageOrError; ///
        var ref;
        ref = error, message = ref.message, ref;
    } else {
        message = messageOrError; ///
        error = new Error(message);
    }
    var stack = error.stack, stackMessages = stackMessagesFromStack(stack), pertinentStackMessage = stackMessages[salientStackMessageIndex], stackMessage = pertinentStackMessage, currentDateAndTimeString = getCurrentDateAndTimeString(), filePath = filePathFromStackMessage(stackMessage), lineNumber = lineNumberFromStackMessage(stackMessage), logMessage = "".concat(level).concat(currentDateAndTimeString, " ").concat(filePath, "(").concat(lineNumber, ") ").concat(message);
    console.log(logMessage);
    if (logDirectoryPath !== null) {
        rollOverLogFile();
        var logFilePath = getLogFilePath(), logFileContent = "".concat(logMessage, "\n");
        (0, _fileSystem).appendToFile(logFilePath, logFileContent);
    }
    return logMessage;
}
var _default = {
    log: log
};
exports.default = _default;
function trace(message) {
    return log(message, _constants.TRACE);
}
function debug(message) {
    return log(message, _constants.DEBUG);
}
function info(message) {
    return log(message, _constants.INFO);
}
function warning(message) {
    return log(message, _constants.WARNING);
}
function error(message) {
    return log(message, _constants.ERROR);
}
function fatal(message) {
    return log(message, _constants.FATAL);
}
function setLogLevel(level) {
    logLevel = level;
}
function setLogFileBaseName(fileBaseName) {
    logFileBaseName = fileBaseName;
}
function setLogDirectoryPath(directoryPath) {
    logDirectoryPath = directoryPath;
}
function setLogOptions(logOptions) {
    var level = logOptions.level, fileBaseName = logOptions.fileBaseName, directoryPath = logOptions.directoryPath;
    setLogLevel(level);
    setLogFileBaseName(fileBaseName);
    setLogDirectoryPath(directoryPath);
}
function getLogFileContent() {
    var logFilePath = getLogFilePath(), logFileContent = (0, _fileSystem).readFile(logFilePath);
    return logFileContent;
}
Object.assign(log, {
    TRACE: _constants.TRACE,
    DEBUG: _constants.DEBUG,
    INFO: _constants.INFO,
    WARNING: _constants.WARNING,
    ERROR: _constants.ERROR,
    FATAL: _constants.FATAL,
    trace: trace,
    debug: debug,
    info: info,
    warning: warning,
    error: error,
    fatal: fatal,
    setLogLevel: setLogLevel,
    setLogFileBaseName: setLogFileBaseName,
    setLogDirectoryPath: setLogDirectoryPath,
    setLogOptions: setLogOptions,
    getLogFileContent: getLogFileContent
});
function getLogFilePath() {
    var logFileName = "".concat(logFileBaseName, ".log"), logFilePath = (0, _path1).concatenatePaths(logDirectoryPath, logFileName);
    return logFilePath;
}
function getRolledOverLogFilePath() {
    var currentDateString = getCurrentDateString(), rolledOverLogFileName = "".concat(logFileBaseName, ".").concat(currentDateString, ".log"), rolledOverLogFilePath = (0, _path1).concatenatePaths(logDirectoryPath, rolledOverLogFileName);
    return rolledOverLogFilePath;
}
function getLogFileLastModifiedDate() {
    var logFilePath = getLogFilePath(), logFileStats = (0, _fileSystem).getStats(logFilePath), mtime = logFileStats.mtime, logFileLastModifiedDate = new Date(mtime); ///
    return logFileLastModifiedDate;
}
function rollOverLogFile() {
    var logFilePath = getLogFilePath(), logFileExists = (0, _fileSystem).checkFileExists(logFilePath);
    if (!logFileExists) {
        return;
    }
    var logFileLastModifiedDate = getLogFileLastModifiedDate(), logFileLastModifiedDateCurrentDate = isDateCurrentDate(logFileLastModifiedDate);
    if (!logFileLastModifiedDateCurrentDate) {
        var rolledOverLogFilePath = getRolledOverLogFilePath();
        (0, _fileSystem).renameFile(logFilePath, rolledOverLogFilePath);
    }
}
function isDateCurrentDate(date) {
    var currentDate = new Date(), dateString = date.toDateString(), currentDateString = currentDate.toDateString(), dateCurrentDate = dateString === currentDateString;
    return dateCurrentDate;
}
function getCurrentDateString() {
    var date = new Date(), day = padStartWithZeroes(date.getDate(), 2), month = padStartWithZeroes(date.getMonth() + 1, 2), year = date.getFullYear(), currentDateAndTimeString = "".concat(day, "-").concat(month, "-").concat(year);
    return currentDateAndTimeString;
}
function getCurrentDateAndTimeString() {
    var date = new Date(), day = padStartWithZeroes(date.getDate(), 2), month = padStartWithZeroes(date.getMonth() + 1, 2), year = date.getFullYear(), hours = padStartWithZeroes(date.getHours(), 2), minutes = padStartWithZeroes(date.getMinutes(), 2), seconds = padStartWithZeroes(date.getSeconds(), 2), milliseconds = padStartWithZeroes(date.getMilliseconds(), 3), currentDateAndTimeString = "".concat(day, "-").concat(month, "-").concat(year, " ").concat(hours, ":").concat(minutes, ":").concat(seconds, ".").concat(milliseconds);
    return currentDateAndTimeString;
}
function stackMessagesFromStack(stack) {
    var stackMessages = [], stackLines = stack.split(/\r\n|\n/);
    var stackMessage = "";
    stackLines.forEach(function(stackLine) {
        var matches = /^\s*at.*/.test(stackLine);
        stackMessage = stackMessage === "" ? stackLine : "".concat(stackMessage, "\n").concat(stackLine);
        if (matches) {
            stackMessages.push(stackMessage);
            stackMessage = "";
        }
    });
    return stackMessages;
}
function filePathFromStackMessage(stackMessage) {
    var matches = stackMessage.match(/(\/.+):\d+:\d+/m), secondMatch = (0, _array).second(matches), absoluteFilePath = secondMatch, currentWorkingDirectoryPath = _path.default.resolve("."), currentWorkingDirectoryPathLength = currentWorkingDirectoryPath.length, start = currentWorkingDirectoryPathLength + 1, filePath = absoluteFilePath.substr(start);
    return filePath;
}
function lineNumberFromStackMessage(stackMessage) {
    var matches = stackMessage.match(/:(\d+)/m), secondMatch = (0, _array).second(matches), lineNumber = secondMatch; ///
    return lineNumber;
}
function padStartWithZeroes(string, targetLength) {
    var padString = "0", paddedString = padStart(string, targetLength, padString);
    return paddedString;
}
function padStart(string, targetLength, padString) {
    var padding = "";
    for(var index = 0; index < targetLength; index++){
        padding += padString;
    }
    var paddedString = "".concat(padding).concat(string).substr(-targetLength);
    return paddedString;
}

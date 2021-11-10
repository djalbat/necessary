"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.log = log;
exports.default = void 0;
var _path = _interopRequireDefault(require("path"));
var _array = require("../utilities/array");
var _constants = require("../constants");
var _path1 = require("../utilities/path");
var _fileSystem = require("../utilities/fileSystem");
var _defaults = require("../defaults");
var _levels = require("../levels");
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
    _levels.TRACE_LEVEL,
    _levels.DEBUG_LEVEL,
    _levels.INFO_LEVEL,
    _levels.WARNING_LEVEL,
    _levels.ERROR_LEVEL,
    _levels.FATAL_LEVEL, 
];
var logLevel = _defaults.DEFAULT_LOG_LEVEL, logFileBaseName = _defaults.DEFAULT_LOG_FILE_BASE_NAME, logDirectoryPath = _defaults.DEFAULT_LOG_DIRECTORY_PATH;
function log(messageOrError, param) {
    var level = param === void 0 ? _constants.EMPTY_STRING : param;
    var salientStackMessageIndex = 1;
    if (level !== _constants.EMPTY_STRING) {
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
    return log(message, _levels.TRACE_LEVEL);
}
function debug(message) {
    return log(message, _levels.DEBUG_LEVEL);
}
function info(message) {
    return log(message, _levels.INFO_LEVEL);
}
function warning(message) {
    return log(message, _levels.WARNING_LEVEL);
}
function error(message) {
    return log(message, _levels.ERROR_LEVEL);
}
function fatal(message) {
    return log(message, _levels.FATAL_LEVEL);
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
    TRACE_LEVEL: _levels.TRACE_LEVEL,
    DEBUG_LEVEL: _levels.DEBUG_LEVEL,
    INFO_LEVEL: _levels.INFO_LEVEL,
    WARNING_LEVEL: _levels.WARNING_LEVEL,
    ERROR_LEVEL: _levels.ERROR_LEVEL,
    FATAL_LEVEL: _levels.FATAL_LEVEL,
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
    var stackMessage = _constants.EMPTY_STRING;
    stackLines.forEach(function(stackLine) {
        var matches = /^\s*at.*/.test(stackLine);
        stackMessage = stackMessage === _constants.EMPTY_STRING ? stackLine : "".concat(stackMessage, "\n").concat(stackLine);
        if (matches) {
            stackMessages.push(stackMessage);
            stackMessage = _constants.EMPTY_STRING;
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
    var padding = _constants.EMPTY_STRING;
    for(var index = 0; index < targetLength; index++){
        padding += padString;
    }
    var paddedString = "".concat(padding).concat(string).substr(-targetLength);
    return paddedString;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvbG9nZ2luZy5qcyJdLCJuYW1lcyI6WyJwYXRoIiwic2Vjb25kIiwiRU1QVFlfU1RSSU5HIiwiY29uY2F0ZW5hdGVQYXRocyIsImNoZWNrRmlsZUV4aXN0cyIsInJlYWRGaWxlIiwiYXBwZW5kVG9GaWxlIiwicmVuYW1lRmlsZSIsImdldFN0YXRzIiwiREVGQVVMVF9MT0dfTEVWRUwiLCJERUZBVUxUX0xPR19GSUxFX0JBU0VfTkFNRSIsIkRFRkFVTFRfTE9HX0RJUkVDVE9SWV9QQVRIIiwiVFJBQ0VfTEVWRUwiLCJERUJVR19MRVZFTCIsIklORk9fTEVWRUwiLCJXQVJOSU5HX0xFVkVMIiwiRVJST1JfTEVWRUwiLCJGQVRBTF9MRVZFTCIsImxldmVscyIsImxvZ0xldmVsIiwibG9nRmlsZUJhc2VOYW1lIiwibG9nRGlyZWN0b3J5UGF0aCIsImxvZyIsIm1lc3NhZ2VPckVycm9yIiwibGV2ZWwiLCJzYWxpZW50U3RhY2tNZXNzYWdlSW5kZXgiLCJsZXZlbEluZGV4IiwiaW5kZXhPZiIsImxvZ0xldmVsSW5kZXgiLCJlcnJvciIsIm1lc3NhZ2UiLCJFcnJvciIsInN0YWNrIiwic3RhY2tNZXNzYWdlcyIsInN0YWNrTWVzc2FnZXNGcm9tU3RhY2siLCJwZXJ0aW5lbnRTdGFja01lc3NhZ2UiLCJzdGFja01lc3NhZ2UiLCJjdXJyZW50RGF0ZUFuZFRpbWVTdHJpbmciLCJnZXRDdXJyZW50RGF0ZUFuZFRpbWVTdHJpbmciLCJmaWxlUGF0aCIsImZpbGVQYXRoRnJvbVN0YWNrTWVzc2FnZSIsImxpbmVOdW1iZXIiLCJsaW5lTnVtYmVyRnJvbVN0YWNrTWVzc2FnZSIsImxvZ01lc3NhZ2UiLCJjb25zb2xlIiwicm9sbE92ZXJMb2dGaWxlIiwibG9nRmlsZVBhdGgiLCJnZXRMb2dGaWxlUGF0aCIsImxvZ0ZpbGVDb250ZW50IiwidHJhY2UiLCJkZWJ1ZyIsImluZm8iLCJ3YXJuaW5nIiwiZmF0YWwiLCJzZXRMb2dMZXZlbCIsInNldExvZ0ZpbGVCYXNlTmFtZSIsImZpbGVCYXNlTmFtZSIsInNldExvZ0RpcmVjdG9yeVBhdGgiLCJkaXJlY3RvcnlQYXRoIiwic2V0TG9nT3B0aW9ucyIsImxvZ09wdGlvbnMiLCJnZXRMb2dGaWxlQ29udGVudCIsIk9iamVjdCIsImFzc2lnbiIsImxvZ0ZpbGVOYW1lIiwiZ2V0Um9sbGVkT3ZlckxvZ0ZpbGVQYXRoIiwiY3VycmVudERhdGVTdHJpbmciLCJnZXRDdXJyZW50RGF0ZVN0cmluZyIsInJvbGxlZE92ZXJMb2dGaWxlTmFtZSIsInJvbGxlZE92ZXJMb2dGaWxlUGF0aCIsImdldExvZ0ZpbGVMYXN0TW9kaWZpZWREYXRlIiwibG9nRmlsZVN0YXRzIiwibXRpbWUiLCJsb2dGaWxlTGFzdE1vZGlmaWVkRGF0ZSIsIkRhdGUiLCJsb2dGaWxlRXhpc3RzIiwibG9nRmlsZUxhc3RNb2RpZmllZERhdGVDdXJyZW50RGF0ZSIsImlzRGF0ZUN1cnJlbnREYXRlIiwiZGF0ZSIsImN1cnJlbnREYXRlIiwiZGF0ZVN0cmluZyIsInRvRGF0ZVN0cmluZyIsImRhdGVDdXJyZW50RGF0ZSIsImRheSIsInBhZFN0YXJ0V2l0aFplcm9lcyIsImdldERhdGUiLCJtb250aCIsImdldE1vbnRoIiwieWVhciIsImdldEZ1bGxZZWFyIiwiaG91cnMiLCJnZXRIb3VycyIsIm1pbnV0ZXMiLCJnZXRNaW51dGVzIiwic2Vjb25kcyIsImdldFNlY29uZHMiLCJtaWxsaXNlY29uZHMiLCJnZXRNaWxsaXNlY29uZHMiLCJzdGFja0xpbmVzIiwic3BsaXQiLCJmb3JFYWNoIiwic3RhY2tMaW5lIiwibWF0Y2hlcyIsInRlc3QiLCJwdXNoIiwibWF0Y2giLCJzZWNvbmRNYXRjaCIsImFic29sdXRlRmlsZVBhdGgiLCJjdXJyZW50V29ya2luZ0RpcmVjdG9yeVBhdGgiLCJyZXNvbHZlIiwiY3VycmVudFdvcmtpbmdEaXJlY3RvcnlQYXRoTGVuZ3RoIiwibGVuZ3RoIiwic3RhcnQiLCJzdWJzdHIiLCJzdHJpbmciLCJ0YXJnZXRMZW5ndGgiLCJwYWRTdHJpbmciLCJwYWRkZWRTdHJpbmciLCJwYWRTdGFydCIsInBhZGRpbmciLCJpbmRleCJdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7OztRQXdCSSxHQUFHLEdBQUgsR0FBRzs7QUF0QkYsR0FBTSxDQUFOLEtBQU07QUFFQSxHQUFvQixDQUFwQixNQUFvQjtBQUNkLEdBQWMsQ0FBZCxVQUFjO0FBQ1YsR0FBbUIsQ0FBbkIsTUFBbUI7QUFDMEIsR0FBeUIsQ0FBekIsV0FBeUI7QUFDYixHQUFhLENBQWIsU0FBYTtBQUNULEdBQVcsQ0FBWCxPQUFXOzs7Ozs7Ozs7Ozs7O0FBRXpHLEdBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQztJQUY4RSxPQUFXO0lBQVgsT0FBVztJQUFYLE9BQVc7SUFBWCxPQUFXO0lBQVgsT0FBVztJQUFYLE9BQVc7QUFTekcsQ0FBQztBQUVELEdBQUcsQ0FBQyxRQUFRLEdBWjhFLFNBQWEsb0JBYW5HLGVBQWUsR0FidUUsU0FBYSw2QkFjbkcsZ0JBQWdCLEdBZHNFLFNBQWE7U0FnQnZGLEdBQUcsQ0FBQyxjQUFjLEVBQUUsS0FBb0IsRUFBRSxDQUFDO1FBQXZCLEtBQUssR0FBTCxLQUFvQixjQW5CM0IsVUFBYyxnQkFtQlAsS0FBb0I7SUFDdEQsR0FBRyxDQUFDLHdCQUF3QixHQUFHLENBQUM7SUFFaEMsRUFBRSxFQUFFLEtBQUssS0F0QmtCLFVBQWMsZUFzQmIsQ0FBQztRQUMzQixHQUFLLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUNqQyxhQUFhLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxRQUFRO1FBRTdDLEVBQUUsRUFBRSxVQUFVLEdBQUcsYUFBYSxFQUFFLENBQUM7WUFDL0IsTUFBTTtRQUNSLENBQUM7UUFFRCx3QkFBd0IsSUFBSSxDQUFDO1FBRTdCLEtBQUssTUFBWSxNQUFDLENBQVAsS0FBSyxHQUFDLENBQUMsR0FBSSxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7SUFDM0IsQ0FBQztJQUVELEdBQUcsQ0FBQyxLQUFLLEVB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
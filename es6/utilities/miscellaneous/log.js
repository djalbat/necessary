"use strict";

import path from "path";

import { second } from "../../utilities/array";
import { concatenatePaths } from "../../utilities/path";
import { checkFileExists, readFile, appendToFile, renameFile, getStats } from "../../utilities/fileSystem";
import { TRACE, DEBUG, INFO, WARNING, ERROR, FATAL, DEFAULT_LOG_LEVEL, DEFAULT_LOG_FILE_BASE_NAME, DEFAULT_LOG_DIRECTORY_PATH } from "../../constants";

const levels = [
  TRACE,
  DEBUG,
  INFO,
  WARNING,
  ERROR,
  FATAL,
];

let logLevel = DEFAULT_LOG_LEVEL,
    logFileBaseName = DEFAULT_LOG_FILE_BASE_NAME,
    logDirectoryPath = DEFAULT_LOG_DIRECTORY_PATH;

export function log(messageOrError, level = "") {
  let salientStackMessageIndex = 1;

  if (level !== "") {
    const levelIndex = levels.indexOf(level),
          logLevelIndex = levels.indexOf(logLevel);

    if (levelIndex < logLevelIndex) {
      return;
    }

    salientStackMessageIndex += 1;

    level = `${level} `;  ///
  }

  let error,
      message;

  if (messageOrError instanceof Error) {
    error = messageOrError; ///

    ({ message } = error);
  } else {
    message = messageOrError; ///

    error = new Error(message);
  }

  const { stack } = error,
        stackMessages = stackMessagesFromStack(stack),
        pertinentStackMessage = stackMessages[salientStackMessageIndex],
        stackMessage = pertinentStackMessage, ///
        currentDateAndTimeString = getCurrentDateAndTimeString(),
        filePath = filePathFromStackMessage(stackMessage),
        lineNumber = lineNumberFromStackMessage(stackMessage),
        logMessage = `${level}${currentDateAndTimeString} ${filePath}(${lineNumber}) ${message}`;

  console.log(logMessage);

  if (logDirectoryPath !== null) {
    rollOverLogFile();

    const logFilePath = getLogFilePath(),
          logFileContent = `${logMessage}\n`;

    appendToFile(logFilePath, logFileContent);
  }

  return logMessage;
}

function trace(message) { return log(message, TRACE); }

function debug(message) { return log(message, DEBUG); }

function info(message) { return log(message, INFO); }

function warning(message) { return log(message, WARNING); }

function error(message) { return log(message, ERROR); }

function fatal(message) { return log(message, FATAL); }

function setLogLevel(level) { logLevel = level; }

function setLogFileBaseName(fileBaseName) { logFileBaseName = fileBaseName; }

function setLogDirectoryPath(directoryPath) { logDirectoryPath = directoryPath; }

function setLogOptions(logOptions) {
  const { level, fileBaseName, directoryPath } = logOptions;

  setLogLevel(level);

  setLogFileBaseName(fileBaseName);

  setLogDirectoryPath(directoryPath);
}

function getLogFileContent() {
  const logFilePath = getLogFilePath(),
        logFileContent = readFile(logFilePath);

  return logFileContent;
}

Object.assign(log, {
  TRACE,
  DEBUG,
  INFO,
  WARNING,
  ERROR,
  FATAL,
  trace,
  debug,
  info,
  warning,
  error,
  fatal,
  setLogLevel,
  setLogFileBaseName,
  setLogDirectoryPath,
  setLogOptions,
  getLogFileContent
});

function getLogFilePath() {
  const logFileName = `${logFileBaseName}.log`,
        logFilePath = concatenatePaths(logDirectoryPath, logFileName);

  return logFilePath;
}

function getRolledOverLogFilePath() {
  const currentDateString = getCurrentDateString(),
        rolledOverLogFileName = `${logFileBaseName}.${currentDateString}.log`,
        rolledOverLogFilePath = concatenatePaths(logDirectoryPath, rolledOverLogFileName);

  return rolledOverLogFilePath;
}

function getLogFileLastModifiedDate() {
  const logFilePath = getLogFilePath(),
        logFileStats = getStats(logFilePath),
        { mtime } = logFileStats,
        logFileLastModifiedDate = new Date(mtime);  ///

  return logFileLastModifiedDate;
}

function rollOverLogFile() {
  const logFilePath = getLogFilePath(),
        logFileExists = checkFileExists(logFilePath);

  if (!logFileExists) {
    return;
  }

  const logFileLastModifiedDate = getLogFileLastModifiedDate(),
        logFileLastModifiedDateCurrentDate = isDateCurrentDate(logFileLastModifiedDate);

  if (!logFileLastModifiedDateCurrentDate) {
    const rolledOverLogFilePath = getRolledOverLogFilePath();

    renameFile(logFilePath, rolledOverLogFilePath);
  }
}

function isDateCurrentDate(date) {
  const currentDate = new Date(),
        dateString = date.toDateString(),
        currentDateString = currentDate.toDateString(),
        dateCurrentDate = (dateString === currentDateString);

  return dateCurrentDate;
}

function getCurrentDateString() {
  const date = new Date(),
        day = padStartWithZeroes(date.getDate(), 2),  ///
        month = padStartWithZeroes(date.getMonth() + 1, 2), ///
        year = date.getFullYear(),
        currentDateAndTimeString = `${day}-${month}-${year}`;

  return currentDateAndTimeString;
}

function getCurrentDateAndTimeString() {
  const date = new Date(),
        day = padStartWithZeroes(date.getDate(), 2),  ///
        month = padStartWithZeroes(date.getMonth() + 1, 2), ///
        year = date.getFullYear(),
        hours = padStartWithZeroes(date.getHours(), 2),
        minutes = padStartWithZeroes(date.getMinutes(), 2),
        seconds = padStartWithZeroes(date.getSeconds(), 2),
        milliseconds = padStartWithZeroes(date.getMilliseconds(), 3),
        currentDateAndTimeString = `${day}-${month}-${year} ${hours}:${minutes}:${seconds}.${milliseconds}`;

  return currentDateAndTimeString;
}

function stackMessagesFromStack(stack) {
  const stackMessages = [],
        stackLines = stack.split(/\r\n|\n/);

  let stackMessage = "";

  stackLines.forEach((stackLine) => {
    const matches = /^\s*at.*/.test(stackLine);

    stackMessage = (stackMessage === "") ?
                      stackLine :
                        `${stackMessage}\n${stackLine}`;

    if (matches) {
      stackMessages.push(stackMessage);

      stackMessage = "";
    }
  });

  return stackMessages;
}

function filePathFromStackMessage(stackMessage) {
  const matches = stackMessage.match(/(\/.+):\d+:\d+/m),
        secondMatch = second(matches),
        absoluteFilePath = secondMatch,  ///
        currentWorkingDirectoryPath = path.resolve("."),  ///
        currentWorkingDirectoryPathLength = currentWorkingDirectoryPath.length,
        start = currentWorkingDirectoryPathLength + 1,  ///
        filePath = absoluteFilePath.substr(start);

  return filePath;
}

function lineNumberFromStackMessage(stackMessage) {
  const matches = stackMessage.match(/:(\d+)/m),
        secondMatch = second(matches),
        lineNumber = secondMatch; ///

  return lineNumber;
}

function padStartWithZeroes(string, targetLength) {
  const padString = "0",
        paddedString = padStart(string, targetLength, padString);

  return paddedString;
}

function padStart(string, targetLength, padString) {
  let padding = "";

  for (let index = 0; index < targetLength; index++) {
    padding += padString;
  }

  const paddedString = `${padding}${string}`.substr(-targetLength);

  return paddedString;
}

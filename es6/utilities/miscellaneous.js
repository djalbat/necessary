'use strict';

const path = require('path');

const pathUtilities = require('../utilities/path'),
      arrayUtilities = require('../utilities/array'),
      fileSystemUtilities = require('../utilities/fileSystem');

const { second } = arrayUtilities,
      { concatenatePaths } = pathUtilities,
      { doesFileExist, readFile, appendToFile, renameFile, getStats } = fileSystemUtilities;

const GET_METHOD = 'GET',
      POST_METHOD = 'POST',
      ETX_CHARACTER = '\u0003';

function log(message, level = '') {
  let pertinentStackMessageIndex = 2;

  if (level) { ///
    const levelIndex = levels.indexOf(level),
          logLevelIndex = levels.indexOf(logLevel);

    if (levelIndex > logLevelIndex) {
      return;
    }

    pertinentStackMessageIndex += 1;

    level = `${level} `;  ///
  }

  const error = new Error(),
      { stack } = error,
      stackMessages = stack.split(/\r\n|\n/),
      pertinentStackMessage = stackMessages[pertinentStackMessageIndex],
      currentDateAndTimeString = getCurrentDateAndTimeString(),
      filePath = filePathFromStackMessage(pertinentStackMessage),
      lineNumber = lineNumberFromStackMessage(pertinentStackMessage),
      logMessage = `${level}${currentDateAndTimeString} ${filePath}(${lineNumber}) ${message}`;

  console.log(logMessage);

  if (logDirectoryPath !== null) {
    rollOverLogFile();

    const logFilePath = getLogFilePath(),
          logFileContent = `${logMessage}\n`;

    appendToFile(logFilePath, logFileContent);
  }
}

function get(host, uri, parameters, callback) {
  if (callback === undefined) {
    callback = parameters; ///
    parameters = {};
  }

  const method = GET_METHOD,
        body = undefined;

  request(host, uri, parameters, method, body, callback);
}

function post(host, uri, json, parameters, callback) {
  if (callback === undefined) {
    callback = parameters; ///
    parameters = {};
  }

  const method = POST_METHOD,
        body = JSON.stringify(json);

  request(host, uri, parameters, method, body, callback);
}

function onETX(handler) {
  const { stdin } = process,
        { setRawMode } = stdin;

  if (setRawMode) {
    const rawMode = true,
          encoding = 'utf8';

    stdin.setRawMode(rawMode);
    stdin.setEncoding(encoding);

    stdin.resume();

    stdin.addListener('data', dataHandler);

    return offExt;
  }

  function offExt() {
    stdin.removeListener('data', dataHandler);
  }

  function dataHandler(character) {
    if (character === ETX_CHARACTER) {
      handler();
    }
  }
}

module.exports = {
  log: log,
  get: get,
  post: post,
  onETX: onETX
};

function request(host, uri, parameters, method, body, callback) {
  const url = urlFromHostURIAndParameters(host, uri, parameters),
        xmlHttpRequest = new XMLHttpRequest();

  xmlHttpRequest.onreadystatechange = function() {
    const { readyState, status, responseText } = xmlHttpRequest;

    if (readyState == 4) {
      if (status == 200) {
        const jsonString = responseText, ///
              json = JSON.parse(jsonString);

        callback(json);
      } else {
        callback(null);
      }
    }
  };

  xmlHttpRequest.open(method, url, true);

  xmlHttpRequest.send(body);
}

function urlFromHostURIAndParameters(host, uri, parameters) {
  const queryString = queryStringFromParameters(parameters),
        url = (queryString === '') ?
                `${host}/${uri}` :
                  `${host}/${uri}?${queryString}`;

  return url;
}

function queryStringFromParameters(parameters) {
  const names = Object.keys(parameters),
        namesLength = names.length,
        lastIndex = namesLength - 1,
        queryString = names.reduce(function(queryString, name, index) {
          const value = parameters[name],
                encodedName = encodeURIComponent(name),
                encodedValue = encodeURIComponent(value),
                ampersandOrNothing = (index !== lastIndex) ? '&' : '';
  
          queryString += `${encodedName}=${encodedValue}${ampersandOrNothing}`;
  
          return queryString;
        }, '');

  return queryString;
}

const TRACE = 'TRACE',
      DEBUG = 'DEBUG',
      INFO = 'INFO',
      WARNING = 'WARNING',
      ERROR = 'ERROR',
      FATAL = 'FATAL',
      levels = [
        TRACE,
        DEBUG,
        INFO,
        WARNING,
        ERROR,
        FATAL
      ],
      currentWorkingDirectoryPath = path.resolve('.'),  ///
      currentWorkingDirectoryPathLength = currentWorkingDirectoryPath.length;

let logLevel = WARNING,
    logFileBaseName = 'default',
    logDirectoryPath = null;

function fatal(message) { log(message, FATAL); }

function error(message) { log(message, ERROR); }

function warning(message) { log(message, WARNING); }

function info(message) { log(message, INFO); }

function debug(message) { log(message, DEBUG); }

function trace(message) { log(message, TRACE); }

function setLogLevel(level) {
  logLevel = level;
}

function setLogFileBaseName(fileBaeName) {
  logFileBaseName = fileBaeName;
}

function setLogDirectoryPath(directoryPath) {
  logDirectoryPath = directoryPath;
}

function getLogFileContent() {
  const logFilePath = getLogFilePath(),
        logFileContent = readFile(logFilePath);

  return logFileContent;
}

Object.assign(log, {
  FATAL: FATAL,
  ERROR: ERROR,
  WARNING: WARNING,
  INFO: INFO,
  DEBUG: DEBUG,
  TRACE: TRACE,
  fatal: fatal,
  error: error,
  warning: warning,
  info: info,
  debug: debug,
  trace: trace,
  setLogLevel: setLogLevel,
  setLogFileBaseName: setLogFileBaseName,
  setLogDirectoryPath: setLogDirectoryPath,
  getLogFileContent: getLogFileContent
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
        logFileExists = doesFileExist(logFilePath);

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

function filePathFromStackMessage(stackMessage) {
  const matches = stackMessage.match(/(\/.+)\:\d+\:\d+/),
        secondMatch = second(matches),
        absoluteFilePath = secondMatch,  ///
        start = currentWorkingDirectoryPathLength + 1,  ///
        filePath = absoluteFilePath.substr(start);

  return filePath;
}

function lineNumberFromStackMessage(stackMessage) {
  const matches = stackMessage.match(/\:(\d+)/),
        secondMatch = second(matches),
        lineNumber = secondMatch; ///

  return lineNumber;
}

function padStartWithZeroes(string, targetLength) {
  const padString = '0',
        paddedString = padStart(string, targetLength, padString);

  return paddedString;
}

function padStart(string, targetLength, padString) {
  let padding = '';

  for (let index = 0; index < targetLength; index++) {
    padding += padString;
  }

  const paddedString = `${padding}${string}`.substr(-targetLength);

  return paddedString;
}


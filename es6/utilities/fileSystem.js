'use strict';

const fs = require('fs');

function checkEntryExists(absolutePath) {
  const entryExists = fs.existsSync(absolutePath);

  return entryExists;
}

function checkFileExists(absoluteFilePath) {
  let fileExists = false;
  
  const absolutePath = absoluteFilePath, ///
        entryExists = checkEntryExists(absolutePath);
  
  if (entryExists) {
    const entryFile = isEntryFile(absolutePath);
    
    if (entryFile) {
      fileExists = true;
    }
  }
  
  return fileExists;
}

function checkDirectoryExists(absoluteDirectoryPath) {
  let directoryExists = false;

  const absolutePath = absoluteDirectoryPath, ///
        entryExists = checkEntryExists(absolutePath);

  if (entryExists) {
    const entryDirectory = isEntryDirectory(absolutePath);

    if (entryDirectory) {
      directoryExists = true;
    }
  }

  return directoryExists;
}

function isEntryFile(absolutePath) {
  const stat = fs.statSync(absolutePath),
        entryDirectory = stat.isDirectory(),
        entryFile = !entryDirectory;

  return entryFile;
}

function isEntryDirectory(absolutePath) {
  const stat = fs.statSync(absolutePath),
        entryDirectory = stat.isDirectory();

  return entryDirectory;
}

function isDirectoryEmpty(absoluteDirectoryPath) {
  const subEntryNames = readDirectory(absoluteDirectoryPath),
        subEntryNamesLength = subEntryNames.length,
        directoryEmpty = (subEntryNamesLength === 0);

  return directoryEmpty;
}

function readDirectory(absoluteDirectoryPath) {
  const subEntryNames = fs.readdirSync(absoluteDirectoryPath);

  return subEntryNames;
}

function readFile(absoluteFilePath, encoding = 'utf8') {
  const options = {
          encoding
        },
        content = fs.readFileSync(absoluteFilePath, options);

  return content;
}

function writeFile(absoluteFilePath, content) {
  fs.writeFileSync(absoluteFilePath, content);
}

function appendToFile(absoluteFilePath, content) {
  fs.appendFileSync(absoluteFilePath, content);
}

function createDirectory(absoluteDirectoryPath) {
  const recursive = true,
    options = {
      recursive
    };

  fs.mkdirSync(absoluteDirectoryPath, options);
}

function renameFile(oldAbsoluteFilePath, newAbsoluteFilePath) {
  fs.renameSync(oldAbsoluteFilePath, newAbsoluteFilePath);
}

function getStats(absoluteFilePath) {
  return fs.statSync(absoluteFilePath);
}

module.exports = {
  checkEntryExists,
  checkFileExists,
  checkDirectoryExists,
  isEntryFile,
  isEntryDirectory,
  isDirectoryEmpty,
  readDirectory,
  readFile,
  writeFile,
  appendToFile,
  createDirectory,
  renameFile,
  getStats
};

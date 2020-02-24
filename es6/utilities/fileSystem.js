'use strict';

const fs = require('fs');

function checkEntryExists(entryPath) {
  const entryExists = fs.existsSync(entryPath);

  return entryExists;
}

function checkFileExists(filePath) {
  let fileExists = false;
  
  const entryPath = filePath, ///
        entryExists = checkEntryExists(entryPath);
  
  if (entryExists) {
    const entryFile = isEntryFile(entryPath);
    
    if (entryFile) {
      fileExists = true;
    }
  }
  
  return fileExists;
}

function checkDirectoryExists(directoryPath) {
  let directoryExists = false;

  const entryPath = directoryPath, ///
        entryExists = checkEntryExists(entryPath);

  if (entryExists) {
    const entryDirectory = isEntryDirectory(entryPath);

    if (entryDirectory) {
      directoryExists = true;
    }
  }

  return directoryExists;
}

function isEntryFile(entryPath) {
  const stat = fs.statSync(entryPath),
        entryDirectory = stat.isDirectory(),
        entryFile = !entryDirectory;

  return entryFile;
}

function isEntryDirectory(entryPath) {
  const stat = fs.statSync(entryPath),
        entryDirectory = stat.isDirectory();

  return entryDirectory;
}

function isDirectoryEmpty(directoryPath) {
  const subEntryNames = readDirectory(directoryPath),
        subEntryNamesLength = subEntryNames.length,
        directoryEmpty = (subEntryNamesLength === 0);

  return directoryEmpty;
}

function readDirectory(directoryPath) {
  const subEntryNames = fs.readdirSync(directoryPath);

  return subEntryNames;
}

function readFile(filePath, encoding = 'utf8') {
  const options = {
          encoding
        },
        content = fs.readFileSync(filePath, options);

  return content;
}

function writeFile(filePath, content) {
  fs.writeFileSync(filePath, content);
}

function appendToFile(filePath, content) {
  fs.appendFileSync(filePath, content);
}

function createDirectory(directoryPath) {
  const recursive = true,
        options = {
          recursive
        };

  fs.mkdirSync(directoryPath, options);
}

function renameFile(oldFilePath, newFilePath) {
  fs.renameSync(oldFilePath, newFilePath);
}

function getStats(filePath) {
  return fs.statSync(filePath);
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

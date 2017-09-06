'use strict';

const fs = require('fs');

function entryExists(absoluteFilePath) {
  return fs.existsSync(absoluteFilePath);
}

function fileExists(absoluteFilePath) {
  return fs.existsSync(absoluteFilePath);
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

function writeFile(absoluteFilePath, content) {
  fs.writeFileSync(absoluteFilePath, content);
}

function readFile(absoluteFilePath, encoding = 'utf8') {
  const options = {
          encoding: encoding
        },
        content = fs.readFileSync(absoluteFilePath, options);

  return content;
}

function readDirectory(absoluteDirectoryPath) {
  const subEntryNames = fs.readdirSync(absoluteDirectoryPath);

  return subEntryNames;
}

module.exports = {
  entryExists: entryExists,
  fileExists: fileExists,
  isEntryDirectory: isEntryDirectory,
  isDirectoryEmpty: isDirectoryEmpty,
  writeFile: writeFile,
  readFile: readFile,
  readDirectory: readDirectory
};

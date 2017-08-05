'use strict';

const fs = require('fs');

function entryExists(absoluteFilePath) {
  return fs.existsSync(absoluteFilePath);
}

function isEntryDirectory(absolutePath) {
  const stat = fs.statSync(absolutePath),
        entryDirectory = stat.isDirectory();

  return entryDirectory;
}

function fileExists(absoluteFilePath) {
  return fs.existsSync(absoluteFilePath);
}

function readFile(absoluteFilePath, encoding = 'utf8') {
  const options = {
          encoding: encoding
        },
        content = fs.readFileSync(absoluteFilePath, options);

  return content;
}

function writeFile(absoluteFilePath, content) {
  fs.writeFileSync(absoluteFilePath, content);  
}

function readDirectory(absoluteDirectoryPath) {
  const subEntryNames = fs.readdirSync(absoluteDirectoryPath);

  return subEntryNames;
}

function isDirectoryEmpty(absoluteDirectoryPath) {
  const subEntryNames = readDirectory(absoluteDirectoryPath),
        subEntryNamesLength = subEntryNames.length,
        directoryEmpty = (subEntryNamesLength === 0);

  return directoryEmpty;
}

module.exports = {
  entryExists: entryExists,
  isEntryDirectory: isEntryDirectory,
  fileExists: fileExists,
  readFile: readFile,
  writeFile: writeFile,
  readDirectory: readDirectory,
  isDirectoryEmpty: isDirectoryEmpty
};

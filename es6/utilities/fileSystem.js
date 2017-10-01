'use strict';

const fs = require('fs');

function entryExists(absolutePath) {
  return fs.existsSync(absolutePath);
}

function fileExists(absoluteFilePath) {
  let fileExists = false;
  
  const absolutePath = absoluteFilePath, ///
        entryExists = entryExists(absolutePath);
  
  if (entryExists) {
    const entryFile = isEntryFile(absolutePath);
    
    if (entryFile) {
      fileExists = true;
    }
  }
  
  return fileExists;
}

function isEntryFile(absolutePath) {
  const stat = fs.statSync(absolutePath),
      entryDirectory = stat.isDirectory(),
      entryFile = !entryDirectory;

  return entryFile;
}

function directoryExists(absoluteDirectoryPath) {
  let directoryExists = false;

  const absolutePath = absoluteDirectoryPath, ///
        entryExists = entryExists(absolutePath);

  if (entryExists) {
    const entryDirectory = isEntryDirectory(absolutePath);

    if (entryDirectory) {
      directoryExists = true;
    }
  }

  return directoryExists;
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
          encoding: encoding
        },
        content = fs.readFileSync(absoluteFilePath, options);

  return content;
}

function writeFile(absoluteFilePath, content) {
  fs.writeFileSync(absoluteFilePath, content);
}

module.exports = {
  entryExists: entryExists,
  fileExists: fileExists,
  isEntryFile: isEntryFile,
  directoryExists: directoryExists,
  isEntryDirectory: isEntryDirectory,
  isDirectoryEmpty: isDirectoryEmpty,
  readDirectory: readDirectory,
  readFile: readFile,
  writeFile: writeFile
};

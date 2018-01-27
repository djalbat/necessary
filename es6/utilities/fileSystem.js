'use strict';

const fs = require('fs');

function doesEntryExist(absolutePath) {
  const entryExists = fs.existsSync(absolutePath);

  return entryExists;
}

function doesFileExist(absoluteFilePath) {
  let fileExists = false;
  
  const absolutePath = absoluteFilePath, ///
        entryExists = doesEntryExist(absolutePath);
  
  if (entryExists) {
    const entryFile = isEntryFile(absolutePath);
    
    if (entryFile) {
      fileExists = true;
    }
  }
  
  return fileExists;
}

function doesDirectoryExist(absoluteDirectoryPath) {
  let directoryExists = false;

  const absolutePath = absoluteDirectoryPath, ///
        entryExists = doesEntryExist(absolutePath);

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
          encoding: encoding
        },
        content = fs.readFileSync(absoluteFilePath, options);

  return content;
}

function writeFile(absoluteFilePath, content) {
  fs.writeFileSync(absoluteFilePath, content);
}

module.exports = {
  doesEntryExist: doesEntryExist,
  doesFileExist: doesFileExist,
  doesDirectoryExist: doesDirectoryExist,
  isEntryFile: isEntryFile,
  isEntryDirectory: isEntryDirectory,
  isDirectoryEmpty: isDirectoryEmpty,
  readDirectory: readDirectory,
  readFile: readFile,
  writeFile: writeFile
};

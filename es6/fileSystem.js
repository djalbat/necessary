'use strict';

const fs = require('fs');

function readFile(filePath, encoding = 'utf8') {
  const options = {
          encoding: encoding
        },
        content = fs.readFileSync(filePath, options);

  return content;
}

function readDirectory(directoryPath) {
  const entryNames = fs.readdirSync(directoryPath);

  return entryNames;
}

function fileExists(filePath) {
  return fs.existsSync(filePath);
}

module.exports = {
  readFile: readFile,
  readDirectory: readDirectory,
  fileExists: fileExists
};

"use strict";

import fs from "fs";

import { UTF8_ENCODING } from "../constants";

export function checkEntryExists(entryPath) {
  const entryExists = fs.existsSync(entryPath);

  return entryExists;
}

export function checkFileExists(filePath) {
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

export function checkDirectoryExists(directoryPath) {
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

export function isEntryFile(entryPath) {
  const stat = fs.statSync(entryPath),
        entryDirectory = stat.isDirectory(),
        entryFile = !entryDirectory;

  return entryFile;
}

export function isEntryDirectory(entryPath) {
  const stat = fs.statSync(entryPath),
        entryDirectory = stat.isDirectory();

  return entryDirectory;
}

export function isDirectoryEmpty(directoryPath) {
  const subEntryNames = readDirectory(directoryPath),
        subEntryNamesLength = subEntryNames.length,
        directoryEmpty = (subEntryNamesLength === 0);

  return directoryEmpty;
}

export function readDirectory(directoryPath) {
  const subEntryNames = fs.readdirSync(directoryPath);

  return subEntryNames;
}

export function readFile(filePath, encoding = UTF8_ENCODING) {
  const options = {
          encoding
        },
        content = fs.readFileSync(filePath, options);

  return content;
}

export function writeFile(filePath, content) {
  fs.writeFileSync(filePath, content);
}

export function appendToFile(filePath, content) {
  fs.appendFileSync(filePath, content);
}

export function createDirectory(directoryPath) {
  const recursive = true,
        options = {
          recursive
        };

  fs.mkdirSync(directoryPath, options);
}

export function renameFile(oldFilePath, newFilePath) {
  fs.renameSync(oldFilePath, newFilePath);
}

export function getStats(filePath) {
  return fs.statSync(filePath);
}

export default {
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

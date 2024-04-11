"use strict";

import fs from "fs";
import path from "path";

import { EMPTY_STRING } from "../constants";
import { DEFAULT_ENCODING } from "../defaults";

export function getEntryStats(entryPath) {
  const entryStats = fs.statSync(entryPath);

  return entryStats;
}

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
  const stats = getEntryStats(entryPath),
        entryFile = stats.isFile(); ///

  return entryFile;
}

export function isEntryDirectory(entryPath) {
  const stats = getEntryStats(entryPath),
        entryDirectory = stats.isDirectory(); ///

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

export function readFile(filePath, encoding = DEFAULT_ENCODING) {
  const options = {
          encoding
        },
        content = fs.readFileSync(filePath, options);

  return content;
}

export function copyFile(sourceFilePath, destinationFilepath) {
  fs.copyFileSync(sourceFilePath, destinationFilepath);
}

export function writeFile(filePath, content) {
  fs.writeFileSync(filePath, content);
}

export function appendToFile(filePath, content) {
  fs.appendFileSync(filePath, content);
}

export function createDirectory(directoryPath, recursive = true) {
  const options = {
    recursive
  };

  fs.mkdirSync(directoryPath, options);
}

export function createFile(filePath) {
  const content = EMPTY_STRING;

  fs.writeFileSync(filePath, content);
}

export function moveEntry(oldEntryPath, newEntryPath) {
  ensureParentDirectoryExists(newEntryPath);

  renameEntry(oldEntryPath, newEntryPath);
}

export function removeEntry(entryPath) {
  const force = true,
        recursive = true,
        options = {
          force,
          recursive
        };

  fs.rmSync(entryPath, options);
}

export function renameEntry(oldEntryPath, newEntryPath) {
  fs.renameSync(oldEntryPath, newEntryPath);
}

export default {
  getEntryStats,
  checkEntryExists,
  checkFileExists,
  checkDirectoryExists,
  isEntryFile,
  isEntryDirectory,
  isDirectoryEmpty,
  readDirectory,
  copyFile,
  readFile,
  writeFile,
  appendToFile,
  createDirectory,
  createFile,
  moveEntry,
  renameEntry,
  removeEntry
};

function ensureParentDirectoryExists(entryPath) {
  const parentDirectoryPath = path.dirname(entryPath), ///
        parentDirectoryExists = checkDirectoryExists(parentDirectoryPath);

  if (!parentDirectoryExists) {
    const recursive = true;

    createDirectory(parentDirectoryPath, recursive);
  }
}

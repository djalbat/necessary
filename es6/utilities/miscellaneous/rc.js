'use strict';

const path = require('path');

const arrayUtilities = require('../../utilities/array'),
      fileSystemUtilities = require('../../utilities/fileSystem');

const { first, second } = arrayUtilities,
      { readFile, writeFile, checkFileExists } = fileSystemUtilities;

let rcBaseExtension = '';

function rc(environmentNameOrArgv = null) {
  let environment,
      environmentName,
      environmentNameOrArgvArgv = (environmentNameOrArgv instanceof Array);

  if (environmentNameOrArgvArgv) {
    const argv = environmentNameOrArgv; ///

    environmentName = environmentNameFromArgv(argv);
  } else {
    environmentName = environmentNameOrArgv;  ///
  }

  const json = readRCFile(),
        { environments } = json;

  if (environmentName === null) {
    const firstEnvironment = first(environments);

    environment = firstEnvironment; ///
  } else {
    environment = environments.find(function(environment) {
      const { name } = environment,
            found = (name === environmentName);

      return found;
    });
  }

  delete environment.name;

  Object.assign(rc, environment);

  return environment;
}

function readRCFile() {
  const absoluteRCFilePath = absoluteRCFilePathFromNothing(),
        fileContent = readFile(absoluteRCFilePath),
        json = JSON.parse(fileContent);

  return json;      
}

function writeRCFile(json) {
  const absoluteRCFilePath = absoluteRCFilePathFromNothing(),
        fileContent = JSON.stringify(json, null, `\t`);

  writeFile(absoluteRCFilePath, fileContent);
}

function updateRCFile(addedProperties, ...deletedPropertyNames) {
  let json = readRCFile();

  if (addedProperties) {
    Object.assign(json, addedProperties);
  }

  deletedPropertyNames.forEach(function(deletedPropertyName) {
    delete json[deletedPropertyName];
  });

  writeRCFile(json);      
}

function doesRCFileExist() {
  const absoluteRCFilePath = absoluteRCFilePathFromNothing(),
        rcFileExists = checkFileExists(absoluteRCFilePath);

  return rcFileExists;
}

function setRCBaseExtension(baseExtension) { rcBaseExtension = baseExtension; }

Object.assign(rc, {
  readRCFile: readRCFile,
  writeRCFile: writeRCFile,
  updateRCFile: updateRCFile,
  doesRCFileExist: doesRCFileExist,
  setRCBaseExtension: setRCBaseExtension
});

module.exports = rc;

function environmentNameFromArgv(argv) {
  let environmentName = null;

  argv.find(function(argument) {  ///
    const matches = argument.match(/\-\-environment=(.+)/),
          found = (matches !== null);

    if (found) {
      const secondMatch = second(matches);

      environmentName = secondMatch;
    }

    return found;
  });

  return environmentName;
}

function absoluteRCFilePathFromNothing() {
  const filePath = `./.${rcBaseExtension}rc`,
        absoluteRCFilePath = path.resolve(filePath);

  return absoluteRCFilePath;
}
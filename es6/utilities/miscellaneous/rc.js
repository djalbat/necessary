'use strict';

const path = require('path');

const arrayUtilities = require('../../utilities/array'),
      fileSystemUtilities = require('../../utilities/fileSystem');

const { first, second } = arrayUtilities,
      { readFile, writeFile } = fileSystemUtilities;

let rcBaseExtension = '';

function rc(environmentNameOrArgv = null) {
  let environment,
      environmentName;

  if (environmentNameOrArgv instanceof Array) {
    const argv = environmentNameOrArgv;

    environmentName = environmentNameFromArgv(argv);
  } else {
    environmentName = environmentNameOrArgv;
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
  const filePath = `./.${rcBaseExtension}rc`,
        absoluteFilePath = path.resolve(filePath),
        fileContent = readFile(absoluteFilePath),
        json = JSON.parse(fileContent);

  return json;      
}

function writeRCFile(json) {
  const filePath = `./.${rcBaseExtension}rc`,
        absoluteFilePath = path.resolve(filePath),
        fileContent = JSON.stringify(json, null, `\t`);

  writeFile(absoluteFilePath, fileContent);
}

function updateRCFile(json) {
  const oldJSON = readRCFile(),
        newJSON = Object.assign(oldJSON, json);

  writeRCFile(newJSON);      
}

function setRCBaseExtension(baseExtension) { rcBaseExtension = baseExtension; }

Object.assign(rc, {
  readRCFile: readRCFile,
  writeRCFile: writeRCFile,
  updateRCFile: updateRCFile,
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

"use strict";

import { first, second } from "../utilities/array";
import { DEFAULT_RC_BASE_EXTENSION } from "../defaults";
import { readFile, writeFile, checkFileExists } from "../utilities/fileSystem";

if (!globalThis.rc) {
  globalThis.rc = _rc;
}

const { rc } = globalThis;

export default {
  rc
};

let baseExtension = DEFAULT_RC_BASE_EXTENSION;

function _rc(environmentNameOrArgv = null) {
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
    environment = environments.find((environment) => {
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
  const rcFilePath = rcFilePathFromNothing(),
        rcFileContent = readFile(rcFilePath),
        json = JSON.parse(rcFileContent);

  return json;      
}

function writeRCFile(json) {
  const rcFilePath = rcFilePathFromNothing(),
        rdFileContent = JSON.stringify(json, null, "  ");

  writeFile(rcFilePath, rdFileContent);
}

function updateRCFile(addedProperties, ...deletedPropertyNames) {
  let json = readRCFile();

  if (addedProperties) {
    Object.assign(json, addedProperties);
  }

  deletedPropertyNames.forEach((deletedPropertyName) => {
    delete json[deletedPropertyName];
  });

  writeRCFile(json);      
}

function checkRCFileExists() {
  const rcFilePath = rcFilePathFromNothing(),
        rcFileExists = checkFileExists(rcFilePath);

  return rcFileExists;
}

function createVacuousRCFile() {
  const json = {
    "environments": [
      {}
    ]
  };

  writeRCFile(json);
}

function setRCBaseExtension(rcBaseExtension) { baseExtension = rcBaseExtension; }

Object.assign(_rc, {
  readRCFile,
  writeRCFile,
  updateRCFile,
  checkRCFileExists,
  createVacuousRCFile,
  setRCBaseExtension
});

function environmentNameFromArgv(argv) {
  let environmentName = null;

  argv.find((argument) => {  ///
    const matches = argument.match(/--environment=(.+)/),
          found = (matches !== null);

    if (found) {
      const secondMatch = second(matches);

      environmentName = secondMatch;
    }

    return found;
  });

  return environmentName;
}

function rcFilePathFromNothing() {
  const rcFilePath = `./.${baseExtension}rc`;

  return rcFilePath;
}

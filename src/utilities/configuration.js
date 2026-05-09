"use strict";

import { ENVIRONMENT } from "../constants";
import { first, second } from "../utilities/array";
import { isStringUpperCase } from "../utilities/string";
import { DEFAULT_RC_BASE_EXTENSION } from "../defaults";
import { isArray, isObject, isString } from "../utilities/json";
import { readFile, writeFile, checkFileExists } from "../utilities/fileSystem";

if (!globalThis.rc) {
  globalThis.rc = _rc;
}

const { rc } = globalThis;

export default {
  rc
};

let baseExtension = DEFAULT_RC_BASE_EXTENSION;

function _rc(environmentName) {
  environmentName = environmentName || environmentNameFromArgv() || environmentNameFromEnv(); ///

  let json = readRCFile();

  const environment = findEnvironment(json, environmentName);

  json = environment; ///

  replaceEnvironmentVariables(json);

  Object.assign(rc, environment);
}

function readRCFile() {
  const rcFilePath = rcFilePathFromNothing(),
        rcFileContent = readFile(rcFilePath),
        json = JSON.parse(rcFileContent);

  return json;      
}

function writeRCFile(json) {
  const rcFilePath = rcFilePathFromNothing(),
        rdFileContent = JSON.stringify(json, null, 2);

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
  const environments = [],
        json = {
          environments
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

function findEnvironment(json, environmentName) {
  let environment;

  const { environments } = json;

  if (environmentName === null) {
    const firstEnvironment = first(environments);

    environment = firstEnvironment; ///
  } else {
    environment = environments.find((environment) => {
      const { name } = environment;

      if(name === environmentName) {
        return true;
      }
    });
  }

  delete environment.name

  return environment;
}

function rcFilePathFromNothing() {
  const rcFilePath = `./.${baseExtension}rc`;

  return rcFilePath;
}

function environmentNameFromEnv() {
  const environmentName = process.env[ENVIRONMENT] || null;

  return environmentName;
}

function environmentNameFromArgv() {
  let environmentName = null;

  process.argv.find((argument) => {  ///
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

function replaceEnvironmentVariable(string) {
  let value = null;

  const stringUpperCase = isStringUpperCase(string);

  if (stringUpperCase) {
    const name = string;  ///

    value = process.env[name];

    if (value === undefined) {
      value = null;
    }
  }

  return value;
}

function replaceEnvironmentVariables(environment) {
  let json = environment;

  const jsonArray = isArray(json),
        jsonObject = isObject(json);

  if (false) {
    ///
  } else if (jsonArray) {
    const array = json, ///
          length = array.length;

    for (let index = 0; index < length; index++) {
      const json = array[index],
            jsonString = isString(json);

      if (jsonString) {
        const string = json,  ///
              value = replaceEnvironmentVariable(string);

        if (value !== null) {
          array[index] = value;
        }
      }
    }
  } else if (jsonObject) {
    const object = json;  ///

    for (let name in object) {
      const json = object[name],
            jsonString = isString(json);

      if (jsonString) {
        const string = json,  ///
              value = replaceEnvironmentVariable(string);  ///

        if (value !== null) {
          object[name] = value;
        }
      } else  {
        replaceEnvironmentVariables(json);
      }
    }
  }
}

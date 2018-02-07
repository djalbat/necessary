'use strict';

const path = require('path');

const arrayUtilities = require('../../utilities/array'),
      fileSystemUtilities = require('../../utilities/fileSystem');

const { first } = arrayUtilities,
      { readFile } = fileSystemUtilities;

let rcBaseExtension = '';

function rc(environmentName = null) {
  const filePath = `./.${rcBaseExtension}rc`,
        absoluteFilePath = path.resolve(filePath),
        fileContent = readFile(absoluteFilePath),
        json = JSON.parse(fileContent),
        { environments } = json;

  let environment;

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

function setRCBaseExtension(baseExtension) { rcBaseExtension = baseExtension; }

Object.assign(rc, {
  setRCBaseExtension: setRCBaseExtension
});

rc();

module.exports = rc;

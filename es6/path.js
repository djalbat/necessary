'use strict';

const array = require('./array');

function isPathTopmostDirectoryName(path) {
  const topmostDirectoryName = pathUtil.topmostDirectoryNameFromPath(path),
        pathTopmostDirectoryName = (topmostDirectoryName === null); ///

  return pathTopmostDirectoryName;
}

function bottommostNameFromPath(path) {
  let bottommostName = null;

  const matches = path.match(/^.*\/([^\/]*$)/);

  if (matches !== null) {
    const secondMatch = array.second(matches);

    bottommostName = secondMatch;  ///
  }

  return bottommostName;
}

function topmostDirectoryNameFromPath(path) {
  let topmostDirectoryName = null;

  const matches = path.match(/^([^\/]*)\//);

  if (matches !== null) {
    const secondMatch = array.second(matches);

    topmostDirectoryName = secondMatch;  ///
  }

  return topmostDirectoryName;
}

function pathWithoutBottommostNameFromPath(path) {
  let pathWithoutBottommostName = null;

  const matches = path.match(/(^.*)\/[^\/]*$/);

  if (matches !== null) {
    const secondMatch = array.second(matches);

    pathWithoutBottommostName = secondMatch; ///
  }

  return pathWithoutBottommostName;
}

function pathWithoutTopmostDirectoryNameFromPath(path) {
  let pathWithoutTopmostDirectoryName = null;

  const matches = path.match(/^[^\/]*\/(.*$)/);

  if (matches !== null) {
    const secondMatch = array.second(matches);

    pathWithoutTopmostDirectoryName = secondMatch;
  }

  return pathWithoutTopmostDirectoryName;
}

module.exports = {
  isPathTopmostDirectoryName: isPathTopmostDirectoryName,
  bottommostNameFromPath: bottommostNameFromPath,
  topmostDirectoryNameFromPath: topmostDirectoryNameFromPath,
  pathWithoutBottommostNameFromPath: pathWithoutBottommostNameFromPath,
  pathWithoutTopmostDirectoryNameFromPath: pathWithoutTopmostDirectoryNameFromPath
};

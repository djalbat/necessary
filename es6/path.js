'use strict';

const array = require('./array');

const { second } = array;

function isPathTopmostDirectoryName(path) {
  const topmostDirectoryName = topmostDirectoryNameFromPath(path),
        pathTopmostDirectoryName = (topmostDirectoryName === null); ///

  return pathTopmostDirectoryName;
}

function bottommostNameFromPath(path) {
  let bottommostName = null;

  const matches = path.match(/^.*\/([^\/]*$)/);

  if (matches !== null) {
    const secondMatch = second(matches);

    bottommostName = secondMatch;  ///
  }

  return bottommostName;
}

function topmostDirectoryNameFromPath(path) {
  let topmostDirectoryName = null;

  const matches = path.match(/^([^\/]*)\//);

  if (matches !== null) {
    const secondMatch = second(matches);

    topmostDirectoryName = secondMatch;  ///
  }

  return topmostDirectoryName;
}

function pathWithoutBottommostNameFromPath(path) {
  let pathWithoutBottommostName = null;

  const matches = path.match(/(^.*)\/[^\/]*$/);

  if (matches !== null) {
    const secondMatch = second(matches);

    pathWithoutBottommostName = secondMatch; ///
  }

  return pathWithoutBottommostName;
}

function pathWithoutTopmostDirectoryNameFromPath(path) {
  let pathWithoutTopmostDirectoryName = null;

  const matches = path.match(/^[^\/]*\/(.*$)/);

  if (matches !== null) {
    const secondMatch = second(matches);

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

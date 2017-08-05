'use strict';

const array = require('./array');

const { second } = array;

function isPathTopmostDirectoryName(path) {
  const topmostDirectoryName = topmostDirectoryNameFromPath(path),
        pathTopmostDirectoryName = (topmostDirectoryName === null); ///

  return pathTopmostDirectoryName;
}

function combinePaths(path1, path2) {
  path1 = pathWithoutTrailingSlashFromPath(path1);  ///

  const combinedPath = `${path1}/${path2}`;

  return combinedPath;
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

function directoryPathFromPath(path) {
  const matches = path.match(/^(.*)\/[^\/]*$/),
        secondMatch = second(matches),
        directoryPath = secondMatch; ///

  return directoryPath;
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

function pathWithoutTrailingSlashFromPath(path) {
  const pathWithoutTrailingSlash = path.replace(/\/$/, '');

  return pathWithoutTrailingSlash;
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
  combinePaths: combinePaths,
  bottommostNameFromPath: bottommostNameFromPath,
  directoryPathFromPath: directoryPathFromPath,
  topmostDirectoryNameFromPath: topmostDirectoryNameFromPath,
  pathWithoutTrailingSlashFromPath: pathWithoutTrailingSlashFromPath,
  pathWithoutBottommostNameFromPath: pathWithoutBottommostNameFromPath,
  pathWithoutTopmostDirectoryNameFromPath: pathWithoutTopmostDirectoryNameFromPath
};

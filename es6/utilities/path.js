'use strict';

const arrayUtilities = require('../utilities/array');

const { first, second, last } = arrayUtilities;

function isPathName(path) {
  path = path.replace(/^\//,'').replace(/\/$/, ''); ///

  const pathName = (/\//.test(path) === true);

  return pathName;
}

function isPathTopmostName(path) {
  const pathName = isPathName(path),
        pathAbsolutePath = isPathAbsolutePath(path),
        pathTopmostName = (pathName && pathAbsolutePath);

  return pathTopmostName;
}

function isPathRelativePath(path) {
  const pathRelativePath = !/^\//.test(path);

  return pathRelativePath;
}

function isPathAbsolutePath(path) {
  const pathAbsolutePath = /^\//.test(path);

  return pathAbsolutePath;
}

function isTopmostNameInAbsolutePath(topmostName, absolutePath) {
  const regExp = new RegExp(`^${topmostName}(?:\\/.+)?$`),
        topmostNameInAbsolutePath = regExp.test(absolutePath);

  return topmostNameInAbsolutePath
}

function combinePaths(path, relativePath) {
  let combinedPath = null;

  const pathNames = path.split('/'),
        relativePathNames = relativePath.split('/');

  let lastPathName,
      firstRelativePathName = first(relativePathNames);

  if (firstRelativePathName === '.') {
    relativePathNames.shift();
  }

  firstRelativePathName = first(relativePathNames);
  lastPathName = last(pathNames);

  while ((firstRelativePathName === '..') && (lastPathName !== undefined)) {
    relativePathNames.shift();
    pathNames.pop();

    firstRelativePathName = first(relativePathNames);
    lastPathName = last(pathNames);
  }

  if (lastPathName !== undefined) {
    const pathNames = [].concat(pathNames).concat(relativePathNames);

    combinedPath = pathNames.join('/');
  }

  return combinedPath;
}

function concatenatePaths(path, relativePath) {
  path = path.replace(/\/$/, '');  ///

  const concatenatedPath = `${path}/${relativePath}`;

  return concatenatedPath;
}

function bottommostNameFromPath(path) {
  let bottommostName = null;

  const matches = path.match(/^.*\/([^\/]+\/?)$/);

  if (matches !== null) {
    const secondMatch = second(matches);

    bottommostName = secondMatch;  ///
  }

  return bottommostName;
}

function topmostDirectoryPathFromPath(path) {
  const matches = path.match(/^(.+)\/[^\/]+\/?$/),
        secondMatch = second(matches),
        topmostDirectoryPath = secondMatch; ///

  return topmostDirectoryPath;
}

function topmostDirectoryNameFromPath(path) {
  let topmostDirectoryName = null;

  const matches = path.match(/^([^\/]+)\/.+$/);

  if (matches !== null) {
    const secondMatch = second(matches);

    topmostDirectoryName = secondMatch;  ///
  }

  return topmostDirectoryName;
}

function pathWithoutBottommostNameFromPath(path) {
  let pathWithoutBottommostName = null;

  const matches = path.match(/^(.*)\/[^\/]+\/?$/);

  if (matches !== null) {
    const secondMatch = second(matches);

    pathWithoutBottommostName = secondMatch; ///
  }

  return pathWithoutBottommostName;
}

function pathWithoutTopmostDirectoryNameFromPath(path) {
  let pathWithoutTopmostDirectoryName = null;

  const matches = path.match(/^[^\/]+\/(.+)$/);

  if (matches !== null) {
    const secondMatch = second(matches);

    pathWithoutTopmostDirectoryName = secondMatch;
  }

  return pathWithoutTopmostDirectoryName;
}

module.exports = {
  isPathName,
  isPathTopmostName,
  isPathRelativePath,
  isPathAbsolutePath,
  isTopmostNameInAbsolutePath,
  combinePaths,
  concatenatePaths,
  bottommostNameFromPath,
  topmostDirectoryPathFromPath,
  topmostDirectoryNameFromPath,
  pathWithoutBottommostNameFromPath,
  pathWithoutTopmostDirectoryNameFromPath
};

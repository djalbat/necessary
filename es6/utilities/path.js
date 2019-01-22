'use strict';

const array = require('./array');

const { first, second, last } = array;

function isPathRelativePath(path) {
  const position = path.search(/^\.{1,2}\//),
        pathRelativePath = (position !== -1);

  return pathRelativePath;
}

function isPathAbsolutePath(path) {
  const pathRelativePath = isPathRelativePath(path),
        pathAbsolutePath = !pathRelativePath; ///

  return pathAbsolutePath;
}

function isPathTopmostDirectoryName(path) {
  const position = path.search(/^[^\/]+\/?$/),
        pathTopmostDirectoryName = (position !== -1);

  return pathTopmostDirectoryName;
}

function isTopmostDirectoryNameContainedInPath(topmostDirectoryName, path) {
  topmostDirectoryName = topmostDirectoryName.replace(/\/$/, ''); ///

  const regExp = new RegExp(`^${topmostDirectoryName}(?:\\/.+)?$`),
        position = path.search(regExp),
        topmostDirectoryNameContainedInFilePath = (position !== -1);

  return topmostDirectoryNameContainedInFilePath;
}

function combinePaths(directoryPath, relativePath) {
  let absolutePath = null;

  const directoryPathSubEntryNames = directoryPath.split('/'),
        relativeFilePathSubEntryNames = relativePath.split('/');

  let firstRelativeFilePathSubEntryName = first(relativeFilePathSubEntryNames),
      lastDirectoryPathSubEntryName;

  if (firstRelativeFilePathSubEntryName === '.') {
    relativeFilePathSubEntryNames.shift();
  }

  firstRelativeFilePathSubEntryName = first(relativeFilePathSubEntryNames);
  lastDirectoryPathSubEntryName = last(directoryPathSubEntryNames);

  while ((firstRelativeFilePathSubEntryName === '..') && (lastDirectoryPathSubEntryName !== undefined)) {
    relativeFilePathSubEntryNames.shift();
    directoryPathSubEntryNames.pop();

    firstRelativeFilePathSubEntryName = first(relativeFilePathSubEntryNames);
    lastDirectoryPathSubEntryName = last(directoryPathSubEntryNames);
  }

  if (lastDirectoryPathSubEntryName !== undefined) {
    const absoluteFilePathSubEntryNames = [].concat(directoryPathSubEntryNames).concat(relativeFilePathSubEntryNames);

    absolutePath = absoluteFilePathSubEntryNames.join('/');
  }

  return absolutePath;
}

function concatenatePaths(path1, path2) {
  path1 = path1.replace(/\/$/, '');  ///

  const combinedPath = `${path1}/${path2}`;

  return combinedPath;
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
        directoryPath = secondMatch; ///

  return directoryPath;
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

  const matches = path.match(/^.*\/[^\/]+\/?$/);

  if (matches !== null) {
    const firstMatch = first(matches);

    pathWithoutBottommostName = firstMatch; ///
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
  isPathRelativePath,
  isPathAbsolutePath,
  isPathTopmostDirectoryName,
  isTopmostDirectoryNameContainedInPath,
  combinePaths,
  concatenatePaths,
  bottommostNameFromPath,
  topmostDirectoryPathFromPath,
  topmostDirectoryNameFromPath,
  pathWithoutBottommostNameFromPath,
  pathWithoutTopmostDirectoryNameFromPath
};

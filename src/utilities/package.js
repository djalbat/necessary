"use strict";

const { PACKAGE_JSON } = require("../constants");

import { second } from "../utilities/array";
import { readFile } from "../utilities/fileSystem";
import { concatenatePaths } from "../utilities/path";

let packageJSON = null;

export function getName() {
  const packageJSON = getPackageJSON(),
        { name = null } = packageJSON;

  return name;
}

export function getAuthor() {
  const packageJSON = getPackageJSON(),
        { author = null } = packageJSON;

  return author;
}

export function getVersion() {
  const packageJSON = getPackageJSON(),
        { version = null } = packageJSON;

  return version;
}

export function getLicense() {
  const packageJSON = getPackageJSON(),
        { license = null } = packageJSON;

  return license;
}

export function getPackagePath(dirname = __dirname) {
  const matches = dirname.match(/^(.+)[\/\\]node_modules/),
        secondMatch = second(matches),
        packagePath = secondMatch; ///

  return packagePath;
}

export function getPackageJSON() {
  if (packageJSON === null) {
    const packagePath = getPackagePath(),
          packageJSONFilePath = concatenatePaths(packagePath, PACKAGE_JSON),
          packageJSONFileContent = readFile(packageJSONFilePath);

    packageJSON = JSON.parse(packageJSONFileContent);
  }

  return packageJSON;
}

export default {
  getName,
  getAuthor,
  getVersion,
  getLicense,
  getPackagePath,
  getPackageJSON
};

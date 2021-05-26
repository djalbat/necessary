"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isPathName = isPathName;
exports.isPathTopmostName = isPathTopmostName;
exports.isPathRelativePath = isPathRelativePath;
exports.isPathAbsolutePath = isPathAbsolutePath;
exports.isTopmostNameInAbsolutePath = isTopmostNameInAbsolutePath;
exports.combinePaths = combinePaths;
exports.concatenatePaths = concatenatePaths;
exports.bottommostNameFromPath = bottommostNameFromPath;
exports.topmostDirectoryPathFromPath = topmostDirectoryPathFromPath;
exports.topmostDirectoryNameFromPath = topmostDirectoryNameFromPath;
exports.pathWithoutBottommostNameFromPath = pathWithoutBottommostNameFromPath;
exports.pathWithoutTopmostDirectoryNameFromPath = pathWithoutTopmostDirectoryNameFromPath;
exports.default = void 0;
var _array = require("../utilities/array");
function isPathName(path) {
    path = path.replace(/^\//, "").replace(/\/$/, ""); ///
    var pathName = /\//.test(path) === false;
    return pathName;
}
function isPathTopmostName(path) {
    var pathName = isPathName(path), pathAbsolutePath = isPathAbsolutePath(path), pathTopmostName = pathName && pathAbsolutePath;
    return pathTopmostName;
}
function isPathRelativePath(path) {
    var pathRelativePath = !/^\//.test(path);
    return pathRelativePath;
}
function isPathAbsolutePath(path) {
    var pathAbsolutePath = /^\//.test(path);
    return pathAbsolutePath;
}
function isTopmostNameInAbsolutePath(topmostName, absolutePath) {
    var regExp = new RegExp("^".concat(topmostName, "(?:\\/.+)?$")), topmostNameInAbsolutePath = regExp.test(absolutePath);
    return topmostNameInAbsolutePath;
}
function combinePaths(path, relativePath) {
    var combinedPath = null;
    var pathNames = path.split(/\//), relativePathNames = relativePath.split(/\//);
    var lastPathName, firstRelativePathName = (0, _array).first(relativePathNames);
    if (firstRelativePathName === ".") {
        relativePathNames.shift();
    }
    firstRelativePathName = (0, _array).first(relativePathNames);
    lastPathName = (0, _array).last(pathNames);
    while(firstRelativePathName === ".." && lastPathName !== undefined){
        relativePathNames.shift();
        pathNames.pop();
        firstRelativePathName = (0, _array).first(relativePathNames);
        lastPathName = (0, _array).last(pathNames);
    }
    if (lastPathName !== undefined) {
        var combinedPathNames = [].concat(pathNames).concat(relativePathNames);
        combinedPath = combinedPathNames.join("/");
    }
    return combinedPath;
}
function concatenatePaths(path, relativePath) {
    path = path.replace(/\/$/, ""); ///
    var concatenatedPath = "".concat(path, "/").concat(relativePath);
    return concatenatedPath;
}
function bottommostNameFromPath(path) {
    var bottommostName = null;
    var matches = path.match(/^.*\/([^\/]+\/?)$/);
    if (matches !== null) {
        var secondMatch = (0, _array).second(matches);
        bottommostName = secondMatch; ///
    }
    return bottommostName;
}
function topmostDirectoryPathFromPath(path) {
    var matches = path.match(/^(.+)\/[^\/]+\/?$/), secondMatch = (0, _array).second(matches), topmostDirectoryPath = secondMatch; ///
    return topmostDirectoryPath;
}
function topmostDirectoryNameFromPath(path) {
    var topmostDirectoryName = null;
    var matches = path.match(/^([^\/]+)\/.+$/);
    if (matches !== null) {
        var secondMatch = (0, _array).second(matches);
        topmostDirectoryName = secondMatch; ///
    }
    return topmostDirectoryName;
}
function pathWithoutBottommostNameFromPath(path) {
    var pathWithoutBottommostName = null;
    var matches = path.match(/^(.*)\/[^\/]+\/?$/);
    if (matches !== null) {
        var secondMatch = (0, _array).second(matches);
        pathWithoutBottommostName = secondMatch; ///
    }
    return pathWithoutBottommostName;
}
function pathWithoutTopmostDirectoryNameFromPath(path) {
    var pathWithoutTopmostDirectoryName = null;
    var matches = path.match(/^[^\/]+\/(.+)$/);
    if (matches !== null) {
        var secondMatch = (0, _array).second(matches);
        pathWithoutTopmostDirectoryName = secondMatch;
    }
    return pathWithoutTopmostDirectoryName;
}
var _default = {
    isPathName: isPathName,
    isPathTopmostName: isPathTopmostName,
    isPathRelativePath: isPathRelativePath,
    isPathAbsolutePath: isPathAbsolutePath,
    isTopmostNameInAbsolutePath: isTopmostNameInAbsolutePath,
    combinePaths: combinePaths,
    concatenatePaths: concatenatePaths,
    bottommostNameFromPath: bottommostNameFromPath,
    topmostDirectoryPathFromPath: topmostDirectoryPathFromPath,
    topmostDirectoryNameFromPath: topmostDirectoryNameFromPath,
    pathWithoutBottommostNameFromPath: pathWithoutBottommostNameFromPath,
    pathWithoutTopmostDirectoryNameFromPath: pathWithoutTopmostDirectoryNameFromPath
};
exports.default = _default;

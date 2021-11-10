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
var _constants = require("../constants");
var _array = require("../utilities/array");
function isPathName(path) {
    path = path.replace(/^\//, _constants.EMPTY_STRING).replace(/\/$/, _constants.EMPTY_STRING); ///
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
    path = path.replace(/\/$/, _constants.EMPTY_STRING); ///
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcGF0aC5qcyJdLCJuYW1lcyI6WyJFTVBUWV9TVFJJTkciLCJmaXJzdCIsInNlY29uZCIsImxhc3QiLCJpc1BhdGhOYW1lIiwicGF0aCIsInJlcGxhY2UiLCJwYXRoTmFtZSIsInRlc3QiLCJpc1BhdGhUb3Btb3N0TmFtZSIsInBhdGhBYnNvbHV0ZVBhdGgiLCJpc1BhdGhBYnNvbHV0ZVBhdGgiLCJwYXRoVG9wbW9zdE5hbWUiLCJpc1BhdGhSZWxhdGl2ZVBhdGgiLCJwYXRoUmVsYXRpdmVQYXRoIiwiaXNUb3Btb3N0TmFtZUluQWJzb2x1dGVQYXRoIiwidG9wbW9zdE5hbWUiLCJhYnNvbHV0ZVBhdGgiLCJyZWdFeHAiLCJSZWdFeHAiLCJ0b3Btb3N0TmFtZUluQWJzb2x1dGVQYXRoIiwiY29tYmluZVBhdGhzIiwicmVsYXRpdmVQYXRoIiwiY29tYmluZWRQYXRoIiwicGF0aE5hbWVzIiwic3BsaXQiLCJyZWxhdGl2ZVBhdGhOYW1lcyIsImxhc3RQYXRoTmFtZSIsImZpcnN0UmVsYXRpdmVQYXRoTmFtZSIsInNoaWZ0IiwidW5kZWZpbmVkIiwicG9wIiwiY29tYmluZWRQYXRoTmFtZXMiLCJjb25jYXQiLCJqb2luIiwiY29uY2F0ZW5hdGVQYXRocyIsImNvbmNhdGVuYXRlZFBhdGgiLCJib3R0b21tb3N0TmFtZUZyb21QYXRoIiwiYm90dG9tbW9zdE5hbWUiLCJtYXRjaGVzIiwibWF0Y2giLCJzZWNvbmRNYXRjaCIsInRvcG1vc3REaXJlY3RvcnlQYXRoRnJvbVBhdGgiLCJ0b3Btb3N0RGlyZWN0b3J5UGF0aCIsInRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGgiLCJ0b3Btb3N0RGlyZWN0b3J5TmFtZSIsInBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWVGcm9tUGF0aCIsInBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWUiLCJwYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGgiLCJwYXRoV2l0aG91dFRv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
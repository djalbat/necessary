"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get bottommostNameFromPath () {
        return bottommostNameFromPath;
    },
    get combinePaths () {
        return combinePaths;
    },
    get concatenatePaths () {
        return concatenatePaths;
    },
    get default () {
        return _default;
    },
    get isPathAbsolutePath () {
        return isPathAbsolutePath;
    },
    get isPathName () {
        return isPathName;
    },
    get isPathRelativePath () {
        return isPathRelativePath;
    },
    get isPathTopmostName () {
        return isPathTopmostName;
    },
    get isTopmostNameInAbsolutePath () {
        return isTopmostNameInAbsolutePath;
    },
    get pathWithoutBottommostNameFromPath () {
        return pathWithoutBottommostNameFromPath;
    },
    get pathWithoutTopmostDirectoryNameFromPath () {
        return pathWithoutTopmostDirectoryNameFromPath;
    },
    get topmostDirectoryNameFromPath () {
        return topmostDirectoryNameFromPath;
    },
    get topmostDirectoryPathFromPath () {
        return topmostDirectoryPathFromPath;
    }
});
var _constants = require("../constants");
var _array = require("../utilities/array");
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
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
    var lastPathName, firstRelativePathName = (0, _array.first)(relativePathNames);
    if (firstRelativePathName === ".") {
        relativePathNames.shift();
    }
    firstRelativePathName = (0, _array.first)(relativePathNames);
    lastPathName = (0, _array.last)(pathNames);
    while(firstRelativePathName === ".." && lastPathName !== undefined){
        relativePathNames.shift();
        pathNames.pop();
        firstRelativePathName = (0, _array.first)(relativePathNames);
        lastPathName = (0, _array.last)(pathNames);
    }
    if (lastPathName !== undefined) {
        var combinedPathNames = [].concat(pathNames).concat(relativePathNames);
        combinedPath = combinedPathNames.join("/");
    }
    return combinedPath;
}
function concatenatePaths(path, relativePath) {
    for(var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
        remainingArguments[_key - 2] = arguments[_key];
    }
    var concatenatedPath;
    path = path.replace(/\/$/, _constants.EMPTY_STRING); ///
    concatenatedPath = "".concat(path, "/").concat(relativePath);
    var remainingAArgumentsLength = remainingArguments.length;
    if (remainingAArgumentsLength > 0) {
        var _$path = concatenatedPath, _$relativePath = remainingArguments.shift();
        concatenatedPath = concatenatePaths.apply(void 0, [
            _$path,
            _$relativePath
        ].concat(_to_consumable_array(remainingArguments)));
    }
    return concatenatedPath;
}
function bottommostNameFromPath(path) {
    var bottommostName = null;
    var matches = path.match(/^.*\/([^\/]+\/?)$/);
    if (matches !== null) {
        var secondMatch = (0, _array.second)(matches);
        bottommostName = secondMatch; ///
    }
    return bottommostName;
}
function topmostDirectoryPathFromPath(path) {
    var matches = path.match(/^(.+)\/[^\/]+\/?$/), secondMatch = (0, _array.second)(matches), topmostDirectoryPath = secondMatch; ///
    return topmostDirectoryPath;
}
function topmostDirectoryNameFromPath(path) {
    var topmostDirectoryName = null;
    var matches = path.match(/^([^\/]+)\/.+$/);
    if (matches !== null) {
        var secondMatch = (0, _array.second)(matches);
        topmostDirectoryName = secondMatch; ///
    }
    return topmostDirectoryName;
}
function pathWithoutBottommostNameFromPath(path) {
    var pathWithoutBottommostName = null;
    var matches = path.match(/^(.*)\/[^\/]+\/?$/);
    if (matches !== null) {
        var secondMatch = (0, _array.second)(matches);
        pathWithoutBottommostName = secondMatch; ///
    }
    return pathWithoutBottommostName;
}
function pathWithoutTopmostDirectoryNameFromPath(path) {
    var pathWithoutTopmostDirectoryName = null;
    var matches = path.match(/^[^\/]+\/(.+)$/);
    if (matches !== null) {
        var secondMatch = (0, _array.second)(matches);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcGF0aC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgZmlyc3QsIHNlY29uZCwgbGFzdCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGlzUGF0aE5hbWUocGF0aCkge1xuICBwYXRoID0gcGF0aC5yZXBsYWNlKC9eXFwvLywgRU1QVFlfU1RSSU5HKS5yZXBsYWNlKC9cXC8kLywgRU1QVFlfU1RSSU5HKTsgLy8vXG5cbiAgY29uc3QgcGF0aE5hbWUgPSAoL1xcLy8udGVzdChwYXRoKSA9PT0gZmFsc2UpO1xuXG4gIHJldHVybiBwYXRoTmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUGF0aFRvcG1vc3ROYW1lKHBhdGgpIHtcbiAgY29uc3QgcGF0aE5hbWUgPSBpc1BhdGhOYW1lKHBhdGgpLFxuICAgICAgICBwYXRoQWJzb2x1dGVQYXRoID0gaXNQYXRoQWJzb2x1dGVQYXRoKHBhdGgpLFxuICAgICAgICBwYXRoVG9wbW9zdE5hbWUgPSAocGF0aE5hbWUgJiYgcGF0aEFic29sdXRlUGF0aCk7XG5cbiAgcmV0dXJuIHBhdGhUb3Btb3N0TmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUGF0aFJlbGF0aXZlUGF0aChwYXRoKSB7XG4gIGNvbnN0IHBhdGhSZWxhdGl2ZVBhdGggPSAhL15cXC8vLnRlc3QocGF0aCk7XG5cbiAgcmV0dXJuIHBhdGhSZWxhdGl2ZVBhdGg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1BhdGhBYnNvbHV0ZVBhdGgocGF0aCkge1xuICBjb25zdCBwYXRoQWJzb2x1dGVQYXRoID0gL15cXC8vLnRlc3QocGF0aCk7XG5cbiAgcmV0dXJuIHBhdGhBYnNvbHV0ZVBhdGg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1RvcG1vc3ROYW1lSW5BYnNvbHV0ZVBhdGgodG9wbW9zdE5hbWUsIGFic29sdXRlUGF0aCkge1xuICBjb25zdCByZWdFeHAgPSBuZXcgUmVnRXhwKGBeJHt0b3Btb3N0TmFtZX0oPzpcXFxcLy4rKT8kYCksXG4gICAgICAgIHRvcG1vc3ROYW1lSW5BYnNvbHV0ZVBhdGggPSByZWdFeHAudGVzdChhYnNvbHV0ZVBhdGgpO1xuXG4gIHJldHVybiB0b3Btb3N0TmFtZUluQWJzb2x1dGVQYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21iaW5lUGF0aHMocGF0aCwgcmVsYXRpdmVQYXRoKSB7XG4gIGxldCBjb21iaW5lZFBhdGggPSBudWxsO1xuXG4gIGNvbnN0IHBhdGhOYW1lcyA9IHBhdGguc3BsaXQoL1xcLy8pLFxuICAgICAgICByZWxhdGl2ZVBhdGhOYW1lcyA9IHJlbGF0aXZlUGF0aC5zcGxpdCgvXFwvLyk7XG5cbiAgbGV0IGxhc3RQYXRoTmFtZSxcbiAgICAgIGZpcnN0UmVsYXRpdmVQYXRoTmFtZSA9IGZpcnN0KHJlbGF0aXZlUGF0aE5hbWVzKTtcblxuICBpZiAoZmlyc3RSZWxhdGl2ZVBhdGhOYW1lID09PSBcIi5cIikge1xuICAgIHJlbGF0aXZlUGF0aE5hbWVzLnNoaWZ0KCk7XG4gIH1cblxuICBmaXJzdFJlbGF0aXZlUGF0aE5hbWUgPSBmaXJzdChyZWxhdGl2ZVBhdGhOYW1lcyk7XG4gIGxhc3RQYXRoTmFtZSA9IGxhc3QocGF0aE5hbWVzKTtcblxuICB3aGlsZSAoKGZpcnN0UmVsYXRpdmVQYXRoTmFtZSA9PT0gXCIuLlwiKSAmJiAobGFzdFBhdGhOYW1lICE9PSB1bmRlZmluZWQpKSB7XG4gICAgcmVsYXRpdmVQYXRoTmFtZXMuc2hpZnQoKTtcbiAgICBwYXRoTmFtZXMucG9wKCk7XG5cbiAgICBmaXJzdFJlbGF0aXZlUGF0aE5hbWUgPSBmaXJzdChyZWxhdGl2ZVBhdGhOYW1lcyk7XG4gICAgbGFzdFBhdGhOYW1lID0gbGFzdChwYXRoTmFtZXMpO1xuICB9XG5cbiAgaWYgKGxhc3RQYXRoTmFtZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgY29uc3QgY29tYmluZWRQYXRoTmFtZXMgPSBbXS5jb25jYXQocGF0aE5hbWVzKS5jb25jYXQocmVsYXRpdmVQYXRoTmFtZXMpO1xuXG4gICAgY29tYmluZWRQYXRoID0gY29tYmluZWRQYXRoTmFtZXMuam9pbihcIi9cIik7XG4gIH1cblxuICByZXR1cm4gY29tYmluZWRQYXRoO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uY2F0ZW5hdGVQYXRocyhwYXRoLCByZWxhdGl2ZVBhdGgsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICBsZXQgY29uY2F0ZW5hdGVkUGF0aDtcblxuICBwYXRoID0gcGF0aC5yZXBsYWNlKC9cXC8kLywgRU1QVFlfU1RSSU5HKTsgIC8vL1xuXG4gIGNvbmNhdGVuYXRlZFBhdGggPSBgJHtwYXRofS8ke3JlbGF0aXZlUGF0aH1gO1xuXG4gIGNvbnN0IHJlbWFpbmluZ0FBcmd1bWVudHNMZW5ndGggPSByZW1haW5pbmdBcmd1bWVudHMubGVuZ3RoO1xuXG4gIGlmIChyZW1haW5pbmdBQXJndW1lbnRzTGVuZ3RoID4gMCkge1xuICAgIGNvbnN0IHBhdGggPSBjb25jYXRlbmF0ZWRQYXRoLCAgLy8vXG4gICAgICAgICAgcmVsYXRpdmVQYXRoID0gcmVtYWluaW5nQXJndW1lbnRzLnNoaWZ0KCk7XG5cbiAgICBjb25jYXRlbmF0ZWRQYXRoID0gY29uY2F0ZW5hdGVQYXRocyhwYXRoLCByZWxhdGl2ZVBhdGgsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG4gIH1cblxuICByZXR1cm4gY29uY2F0ZW5hdGVkUGF0aDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJvdHRvbW1vc3ROYW1lRnJvbVBhdGgocGF0aCkge1xuICBsZXQgYm90dG9tbW9zdE5hbWUgPSBudWxsO1xuXG4gIGNvbnN0IG1hdGNoZXMgPSBwYXRoLm1hdGNoKC9eLipcXC8oW15cXC9dK1xcLz8pJC8pO1xuXG4gIGlmIChtYXRjaGVzICE9PSBudWxsKSB7XG4gICAgY29uc3Qgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyk7XG5cbiAgICBib3R0b21tb3N0TmFtZSA9IHNlY29uZE1hdGNoOyAgLy8vXG4gIH1cblxuICByZXR1cm4gYm90dG9tbW9zdE5hbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b3Btb3N0RGlyZWN0b3J5UGF0aEZyb21QYXRoKHBhdGgpIHtcbiAgY29uc3QgbWF0Y2hlcyA9IHBhdGgubWF0Y2goL14oLispXFwvW15cXC9dK1xcLz8kLyksXG4gICAgICAgIHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpLFxuICAgICAgICB0b3Btb3N0RGlyZWN0b3J5UGF0aCA9IHNlY29uZE1hdGNoOyAvLy9cblxuICByZXR1cm4gdG9wbW9zdERpcmVjdG9yeVBhdGg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoKHBhdGgpIHtcbiAgbGV0IHRvcG1vc3REaXJlY3RvcnlOYW1lID0gbnVsbDtcblxuICBjb25zdCBtYXRjaGVzID0gcGF0aC5tYXRjaCgvXihbXlxcL10rKVxcLy4rJC8pO1xuXG4gIGlmIChtYXRjaGVzICE9PSBudWxsKSB7XG4gICAgY29uc3Qgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyk7XG5cbiAgICB0b3Btb3N0RGlyZWN0b3J5TmFtZSA9IHNlY29uZE1hdGNoOyAgLy8vXG4gIH1cblxuICByZXR1cm4gdG9wbW9zdERpcmVjdG9yeU5hbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lRnJvbVBhdGgocGF0aCkge1xuICBsZXQgcGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZSA9IG51bGw7XG5cbiAgY29uc3QgbWF0Y2hlcyA9IHBhdGgubWF0Y2goL14oLiopXFwvW15cXC9dK1xcLz8kLyk7XG5cbiAgaWYgKG1hdGNoZXMgIT09IG51bGwpIHtcbiAgICBjb25zdCBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKTtcblxuICAgIHBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWUgPSBzZWNvbmRNYXRjaDsgLy8vXG4gIH1cblxuICByZXR1cm4gcGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aChwYXRoKSB7XG4gIGxldCBwYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lID0gbnVsbDtcblxuICBjb25zdCBtYXRjaGVzID0gcGF0aC5tYXRjaCgvXlteXFwvXStcXC8oLispJC8pO1xuXG4gIGlmIChtYXRjaGVzICE9PSBudWxsKSB7XG4gICAgY29uc3Qgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyk7XG5cbiAgICBwYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lID0gc2Vjb25kTWF0Y2g7XG4gIH1cblxuICByZXR1cm4gcGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBpc1BhdGhOYW1lLFxuICBpc1BhdGhUb3Btb3N0TmFtZSxcbiAgaXNQYXRoUmVsYXRpdmVQYXRoLFxuICBpc1BhdGhBYnNvbHV0ZVBhdGgsXG4gIGlzVG9wbW9zdE5hbWVJbkFic29sdXRlUGF0aCxcbiAgY29tYmluZVBhdGhzLFxuICBjb25jYXRlbmF0ZVBhdGhzLFxuICBib3R0b21tb3N0TmFtZUZyb21QYXRoLFxuICB0b3Btb3N0RGlyZWN0b3J5UGF0aEZyb21QYXRoLFxuICB0b3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoLFxuICBwYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lRnJvbVBhdGgsXG4gIHBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aFxufTtcbiJdLCJuYW1lcyI6WyJib3R0b21tb3N0TmFtZUZyb21QYXRoIiwiY29tYmluZVBhdGhzIiwiY29uY2F0ZW5hdGVQYXRocyIsImlzUGF0aEFic29sdXRlUGF0aCIsImlzUGF0aE5hbWUiLCJpc1BhdGhSZWxhdGl2ZVBhdGgiLCJpc1BhdGhUb3Btb3N0TmFtZSIsImlzVG9wbW9zdE5hbWVJbkFic29sdXRlUGF0aCIsInBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWVGcm9tUGF0aCIsInBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aCIsInRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGgiLCJ0b3Btb3N0RGlyZWN0b3J5UGF0aEZyb21QYXRoIiwicGF0aCIsInJlcGxhY2UiLCJFTVBUWV9TVFJJTkciLCJwYXRoTmFtZSIsInRlc3QiLCJwYXRoQWJzb2x1dGVQYXRoIiwicGF0aFRvcG1vc3ROYW1lIiwicGF0aFJlbGF0aXZlUGF0aCIsInRvcG1vc3ROYW1lIiwiYWJzb2x1dGVQYXRoIiwicmVnRXhwIiwiUmVnRXhwIiwidG9wbW9zdE5hbWVJbkFic29sdXRlUGF0aCIsInJlbGF0aXZlUGF0aCIsImNvbWJpbmVkUGF0aCIsInBhdGhOYW1lcyIsInNwbGl0IiwicmVsYXRpdmVQYXRoTmFtZXMiLCJsYXN0UGF0aE5hbWUiLCJmaXJzdFJlbGF0aXZlUGF0aE5hbWUiLCJmaXJzdCIsInNoaWZ0IiwibGFzdCIsInVuZGVmaW5lZCIsInBvcCIsImNvbWJpbmVkUGF0aE5hbWVzIiwiY29uY2F0Iiwiam9pbiIsInJlbWFpbmluZ0FyZ3VtZW50cyIsImNvbmNhdGVuYXRlZFBhdGgiLCJyZW1haW5pbmdBQXJndW1lbnRzTGVuZ3RoIiwibGVuZ3RoIiwiYm90dG9tbW9zdE5hbWUiLCJtYXRjaGVzIiwibWF0Y2giLCJzZWNvbmRNYXRjaCIsInNlY29uZCIsInRvcG1vc3REaXJlY3RvcnlQYXRoIiwidG9wbW9zdERpcmVjdG9yeU5hbWUiLCJwYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lIiwicGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBNEZnQkE7ZUFBQUE7O1FBcERBQztlQUFBQTs7UUFpQ0FDO2VBQUFBOztRQW1GaEI7ZUFBQTs7UUFqSWdC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
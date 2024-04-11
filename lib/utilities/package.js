"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    default: function() {
        return _default;
    },
    getAuthor: function() {
        return getAuthor;
    },
    getLicense: function() {
        return getLicense;
    },
    getName: function() {
        return getName;
    },
    getPackageJSON: function() {
        return getPackageJSON;
    },
    getPackagePath: function() {
        return getPackagePath;
    },
    getVersion: function() {
        return getVersion;
    }
});
var _array = require("../utilities/array");
var _fileSystem = require("../utilities/fileSystem");
var _path = require("../utilities/path");
var PACKAGE_JSON = require("../constants").PACKAGE_JSON;
var packageJSON = null;
function getName() {
    var packageJSON = getPackageJSON(), _packageJSON_name = packageJSON.name, name = _packageJSON_name === void 0 ? null : _packageJSON_name;
    return name;
}
function getAuthor() {
    var packageJSON = getPackageJSON(), _packageJSON_author = packageJSON.author, author = _packageJSON_author === void 0 ? null : _packageJSON_author;
    return author;
}
function getVersion() {
    var packageJSON = getPackageJSON(), _packageJSON_version = packageJSON.version, version = _packageJSON_version === void 0 ? null : _packageJSON_version;
    return version;
}
function getLicense() {
    var packageJSON = getPackageJSON(), _packageJSON_license = packageJSON.license, license = _packageJSON_license === void 0 ? null : _packageJSON_license;
    return license;
}
function getPackagePath() {
    var dirname = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : __dirname;
    var matches = dirname.match(/^(.+)[\/\\]node_modules/), secondMatch = (0, _array.second)(matches), packagePath = secondMatch; ///
    return packagePath;
}
function getPackageJSON() {
    if (packageJSON === null) {
        var packagePath = getPackagePath(), packageJSONFilePath = (0, _path.concatenatePaths)(packagePath, PACKAGE_JSON), packageJSONFileContent = (0, _fileSystem.readFile)(packageJSONFilePath);
        packageJSON = JSON.parse(packageJSONFileContent);
    }
    return packageJSON;
}
var _default = {
    getName: getName,
    getAuthor: getAuthor,
    getVersion: getVersion,
    getLicense: getLicense,
    getPackagePath: getPackagePath,
    getPackageJSON: getPackageJSON
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcGFja2FnZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuY29uc3QgeyBQQUNLQUdFX0pTT04gfSA9IHJlcXVpcmUoXCIuLi9jb25zdGFudHNcIik7XG5cbmltcG9ydCB7IHNlY29uZCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IHJlYWRGaWxlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9maWxlU3lzdGVtXCI7XG5pbXBvcnQgeyBjb25jYXRlbmF0ZVBhdGhzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9wYXRoXCI7XG5cbmxldCBwYWNrYWdlSlNPTiA9IG51bGw7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXROYW1lKCkge1xuICBjb25zdCBwYWNrYWdlSlNPTiA9IGdldFBhY2thZ2VKU09OKCksXG4gICAgICAgIHsgbmFtZSA9IG51bGwgfSA9IHBhY2thZ2VKU09OO1xuXG4gIHJldHVybiBuYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QXV0aG9yKCkge1xuICBjb25zdCBwYWNrYWdlSlNPTiA9IGdldFBhY2thZ2VKU09OKCksXG4gICAgICAgIHsgYXV0aG9yID0gbnVsbCB9ID0gcGFja2FnZUpTT047XG5cbiAgcmV0dXJuIGF1dGhvcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFZlcnNpb24oKSB7XG4gIGNvbnN0IHBhY2thZ2VKU09OID0gZ2V0UGFja2FnZUpTT04oKSxcbiAgICAgICAgeyB2ZXJzaW9uID0gbnVsbCB9ID0gcGFja2FnZUpTT047XG5cbiAgcmV0dXJuIHZlcnNpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMaWNlbnNlKCkge1xuICBjb25zdCBwYWNrYWdlSlNPTiA9IGdldFBhY2thZ2VKU09OKCksXG4gICAgICAgIHsgbGljZW5zZSA9IG51bGwgfSA9IHBhY2thZ2VKU09OO1xuXG4gIHJldHVybiBsaWNlbnNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UGFja2FnZVBhdGgoZGlybmFtZSA9IF9fZGlybmFtZSkge1xuICBjb25zdCBtYXRjaGVzID0gZGlybmFtZS5tYXRjaCgvXiguKylbXFwvXFxcXF1ub2RlX21vZHVsZXMvKSxcbiAgICAgICAgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyksXG4gICAgICAgIHBhY2thZ2VQYXRoID0gc2Vjb25kTWF0Y2g7IC8vL1xuXG4gIHJldHVybiBwYWNrYWdlUGF0aDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFBhY2thZ2VKU09OKCkge1xuICBpZiAocGFja2FnZUpTT04gPT09IG51bGwpIHtcbiAgICBjb25zdCBwYWNrYWdlUGF0aCA9IGdldFBhY2thZ2VQYXRoKCksXG4gICAgICAgICAgcGFja2FnZUpTT05GaWxlUGF0aCA9IGNvbmNhdGVuYXRlUGF0aHMocGFja2FnZVBhdGgsIFBBQ0tBR0VfSlNPTiksXG4gICAgICAgICAgcGFja2FnZUpTT05GaWxlQ29udGVudCA9IHJlYWRGaWxlKHBhY2thZ2VKU09ORmlsZVBhdGgpO1xuXG4gICAgcGFja2FnZUpTT04gPSBKU09OLnBhcnNlKHBhY2thZ2VKU09ORmlsZUNvbnRlbnQpO1xuICB9XG5cbiAgcmV0dXJuIHBhY2thZ2VKU09OO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGdldE5hbWUsXG4gIGdldEF1dGhvcixcbiAgZ2V0VmVyc2lvbixcbiAgZ2V0TGljZW5zZSxcbiAgZ2V0UGFja2FnZVBhdGgsXG4gIGdldFBhY2thZ2VKU09OXG59O1xuIl0sIm5hbWVzIjpbImdldEF1dGhvciIsImdldExpY2Vuc2UiLCJnZXROYW1lIiwiZ2V0UGFja2FnZUpTT04iLCJnZXRQYWNrYWdlUGF0aCIsImdldFZlcnNpb24iLCJQQUNLQUdFX0pTT04iLCJyZXF1aXJlIiwicGFja2FnZUpTT04iLCJuYW1lIiwiYXV0aG9yIiwidmVyc2lvbiIsImxpY2Vuc2UiLCJkaXJuYW1lIiwiX19kaXJuYW1lIiwibWF0Y2hlcyIsIm1hdGNoIiwic2Vjb25kTWF0Y2giLCJzZWNvbmQiLCJwYWNrYWdlUGF0aCIsInBhY2thZ2VKU09ORmlsZVBhdGgiLCJjb25jYXRlbmF0ZVBhdGhzIiwicGFja2FnZUpTT05GaWxlQ29udGVudCIsInJlYWRGaWxlIiwiSlNPTiIsInBhcnNlIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQTBEQSxPQU9FO2VBUEY7O0lBekNnQkEsU0FBUztlQUFUQTs7SUFjQUMsVUFBVTtlQUFWQTs7SUFyQkFDLE9BQU87ZUFBUEE7O0lBb0NBQyxjQUFjO2VBQWRBOztJQVJBQyxjQUFjO2VBQWRBOztJQWRBQyxVQUFVO2VBQVZBOzs7cUJBcEJPOzBCQUNFO29CQUNRO0FBSmpDLElBQU0sQUFBRUMsZUFBaUJDLFFBQVEsZ0JBQXpCRDtBQU1SLElBQUlFLGNBQWM7QUFFWCxTQUFTTjtJQUNkLElBQU1NLGNBQWNMLHNDQUNJSyxZQUFoQkMsTUFBQUEsc0NBQU87SUFFZixPQUFPQTtBQUNUO0FBRU8sU0FBU1Q7SUFDZCxJQUFNUSxjQUFjTCx3Q0FDTUssWUFBbEJFLFFBQUFBLDBDQUFTO0lBRWpCLE9BQU9BO0FBQ1Q7QUFFTyxTQUFTTDtJQUNkLElBQU1HLGNBQWNMLHlDQUNPSyxZQUFuQkcsU0FBQUEsNENBQVU7SUFFbEIsT0FBT0E7QUFDVDtBQUVPLFNBQVNWO0lBQ2QsSUFBTU8sY0FBY0wseUNBQ09LLFlBQW5CSSxTQUFBQSw0Q0FBVTtJQUVsQixPQUFPQTtBQUNUO0FBRU8sU0FBU1I7UUFBZVMsVUFBQUEsaUVBQVVDO0lBQ3ZDLElBQU1DLFVBQVVGLFFBQVFHLEtBQUssQ0FBQyw0QkFDeEJDLGNBQWNDLElBQUFBLGFBQU0sRUFBQ0gsVUFDckJJLGNBQWNGLGFBQWEsR0FBRztJQUVwQyxPQUFPRTtBQUNUO0FBRU8sU0FBU2hCO0lBQ2QsSUFBSUssZ0JBQWdCLE1BQU07UUFDeEIsSUFBTVcsY0FBY2Ysa0JBQ2RnQixzQkFBc0JDLElBQUFBLHNCQUFnQixFQUFDRixhQUFhYixlQUNwRGdCLHlCQUF5QkMsSUFBQUEsb0JBQVEsRUFBQ0g7UUFFeENaLGNBQWNnQixLQUFLQyxLQUFLLENBQUNIO0lBQzNCO0lBRUEsT0FBT2Q7QUFDVDtJQUVBLFdBQWU7SUFDYk4sU0FBQUE7SUFDQUYsV0FBQUE7SUFDQUssWUFBQUE7SUFDQUosWUFBQUE7SUFDQUcsZ0JBQUFBO0lBQ0FELGdCQUFBQTtBQUNGIn0=
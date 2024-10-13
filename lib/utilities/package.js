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
    var matches = __dirname.match(/^(.+)[\/\\]node_modules/), secondMatch = (0, _array.second)(matches), packagePath = secondMatch; ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcGFja2FnZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuY29uc3QgeyBQQUNLQUdFX0pTT04gfSA9IHJlcXVpcmUoXCIuLi9jb25zdGFudHNcIik7XG5cbmltcG9ydCB7IHNlY29uZCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IHJlYWRGaWxlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9maWxlU3lzdGVtXCI7XG5pbXBvcnQgeyBjb25jYXRlbmF0ZVBhdGhzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9wYXRoXCI7XG5cbmxldCBwYWNrYWdlSlNPTiA9IG51bGw7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXROYW1lKCkge1xuICBjb25zdCBwYWNrYWdlSlNPTiA9IGdldFBhY2thZ2VKU09OKCksXG4gICAgICAgIHsgbmFtZSA9IG51bGwgfSA9IHBhY2thZ2VKU09OO1xuXG4gIHJldHVybiBuYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QXV0aG9yKCkge1xuICBjb25zdCBwYWNrYWdlSlNPTiA9IGdldFBhY2thZ2VKU09OKCksXG4gICAgICAgIHsgYXV0aG9yID0gbnVsbCB9ID0gcGFja2FnZUpTT047XG5cbiAgcmV0dXJuIGF1dGhvcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFZlcnNpb24oKSB7XG4gIGNvbnN0IHBhY2thZ2VKU09OID0gZ2V0UGFja2FnZUpTT04oKSxcbiAgICAgICAgeyB2ZXJzaW9uID0gbnVsbCB9ID0gcGFja2FnZUpTT047XG5cbiAgcmV0dXJuIHZlcnNpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMaWNlbnNlKCkge1xuICBjb25zdCBwYWNrYWdlSlNPTiA9IGdldFBhY2thZ2VKU09OKCksXG4gICAgICAgIHsgbGljZW5zZSA9IG51bGwgfSA9IHBhY2thZ2VKU09OO1xuXG4gIHJldHVybiBsaWNlbnNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UGFja2FnZVBhdGgoKSB7XG4gIGNvbnN0IG1hdGNoZXMgPSBfX2Rpcm5hbWUubWF0Y2goL14oLispW1xcL1xcXFxdbm9kZV9tb2R1bGVzLyksXG4gICAgICAgIHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpLFxuICAgICAgICBwYWNrYWdlUGF0aCA9IHNlY29uZE1hdGNoOyAvLy9cblxuICByZXR1cm4gcGFja2FnZVBhdGg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQYWNrYWdlSlNPTigpIHtcbiAgaWYgKHBhY2thZ2VKU09OID09PSBudWxsKSB7XG4gICAgY29uc3QgcGFja2FnZVBhdGggPSBnZXRQYWNrYWdlUGF0aCgpLFxuICAgICAgICAgIHBhY2thZ2VKU09ORmlsZVBhdGggPSBjb25jYXRlbmF0ZVBhdGhzKHBhY2thZ2VQYXRoLCBQQUNLQUdFX0pTT04pLFxuICAgICAgICAgIHBhY2thZ2VKU09ORmlsZUNvbnRlbnQgPSByZWFkRmlsZShwYWNrYWdlSlNPTkZpbGVQYXRoKTtcblxuICAgIHBhY2thZ2VKU09OID0gSlNPTi5wYXJzZShwYWNrYWdlSlNPTkZpbGVDb250ZW50KTtcbiAgfVxuXG4gIHJldHVybiBwYWNrYWdlSlNPTjtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBnZXROYW1lLFxuICBnZXRBdXRob3IsXG4gIGdldFZlcnNpb24sXG4gIGdldExpY2Vuc2UsXG4gIGdldFBhY2thZ2VQYXRoLFxuICBnZXRQYWNrYWdlSlNPTlxufTtcbiJdLCJuYW1lcyI6WyJnZXRBdXRob3IiLCJnZXRMaWNlbnNlIiwiZ2V0TmFtZSIsImdldFBhY2thZ2VKU09OIiwiZ2V0UGFja2FnZVBhdGgiLCJnZXRWZXJzaW9uIiwiUEFDS0FHRV9KU09OIiwicmVxdWlyZSIsInBhY2thZ2VKU09OIiwibmFtZSIsImF1dGhvciIsInZlcnNpb24iLCJsaWNlbnNlIiwibWF0Y2hlcyIsIl9fZGlybmFtZSIsIm1hdGNoIiwic2Vjb25kTWF0Y2giLCJzZWNvbmQiLCJwYWNrYWdlUGF0aCIsInBhY2thZ2VKU09ORmlsZVBhdGgiLCJjb25jYXRlbmF0ZVBhdGhzIiwicGFja2FnZUpTT05GaWxlQ29udGVudCIsInJlYWRGaWxlIiwiSlNPTiIsInBhcnNlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUEwREEsT0FPRTtlQVBGOztJQXpDZ0JBLFNBQVM7ZUFBVEE7O0lBY0FDLFVBQVU7ZUFBVkE7O0lBckJBQyxPQUFPO2VBQVBBOztJQW9DQUMsY0FBYztlQUFkQTs7SUFSQUMsY0FBYztlQUFkQTs7SUFkQUMsVUFBVTtlQUFWQTs7O3FCQXBCTzswQkFDRTtvQkFDUTtBQUpqQyxJQUFNLEFBQUVDLGVBQWlCQyxRQUFRLGdCQUF6QkQ7QUFNUixJQUFJRSxjQUFjO0FBRVgsU0FBU047SUFDZCxJQUFNTSxjQUFjTCxzQ0FDSUssWUFBaEJDLE1BQUFBLHNDQUFPO0lBRWYsT0FBT0E7QUFDVDtBQUVPLFNBQVNUO0lBQ2QsSUFBTVEsY0FBY0wsd0NBQ01LLFlBQWxCRSxRQUFBQSwwQ0FBUztJQUVqQixPQUFPQTtBQUNUO0FBRU8sU0FBU0w7SUFDZCxJQUFNRyxjQUFjTCx5Q0FDT0ssWUFBbkJHLFNBQUFBLDRDQUFVO0lBRWxCLE9BQU9BO0FBQ1Q7QUFFTyxTQUFTVjtJQUNkLElBQU1PLGNBQWNMLHlDQUNPSyxZQUFuQkksU0FBQUEsNENBQVU7SUFFbEIsT0FBT0E7QUFDVDtBQUVPLFNBQVNSO0lBQ2QsSUFBTVMsVUFBVUMsVUFBVUMsS0FBSyxDQUFDLDRCQUMxQkMsY0FBY0MsSUFBQUEsYUFBTSxFQUFDSixVQUNyQkssY0FBY0YsYUFBYSxHQUFHO0lBRXBDLE9BQU9FO0FBQ1Q7QUFFTyxTQUFTZjtJQUNkLElBQUlLLGdCQUFnQixNQUFNO1FBQ3hCLElBQU1VLGNBQWNkLGtCQUNkZSxzQkFBc0JDLElBQUFBLHNCQUFnQixFQUFDRixhQUFhWixlQUNwRGUseUJBQXlCQyxJQUFBQSxvQkFBUSxFQUFDSDtRQUV4Q1gsY0FBY2UsS0FBS0MsS0FBSyxDQUFDSDtJQUMzQjtJQUVBLE9BQU9iO0FBQ1Q7SUFFQSxXQUFlO0lBQ2JOLFNBQUFBO0lBQ0FGLFdBQUFBO0lBQ0FLLFlBQUFBO0lBQ0FKLFlBQUFBO0lBQ0FHLGdCQUFBQTtJQUNBRCxnQkFBQUE7QUFDRiJ9
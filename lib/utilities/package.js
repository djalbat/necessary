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
function getPackageJSON() {
    if (packageJSON === null) {
        var utilitiesDirectoryName = __dirname, matches = utilitiesDirectoryName.match(/^(.+)[\/\\]node_modules/), secondMatch = (0, _array.second)(matches), applicationDirectoryName = secondMatch, packageJSONFilePath = (0, _path.concatenatePaths)(applicationDirectoryName, PACKAGE_JSON), packageJSONFileContent = (0, _fileSystem.readFile)(packageJSONFilePath);
        packageJSON = JSON.parse(packageJSONFileContent);
    }
    return packageJSON;
}
var _default = {
    getName: getName,
    getAuthor: getAuthor,
    getVersion: getVersion,
    getLicense: getLicense,
    getPackageJSON: getPackageJSON
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcGFja2FnZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuY29uc3QgeyBQQUNLQUdFX0pTT04gfSA9IHJlcXVpcmUoXCIuLi9jb25zdGFudHNcIik7XG5cbmltcG9ydCB7IHNlY29uZCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IHJlYWRGaWxlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9maWxlU3lzdGVtXCI7XG5pbXBvcnQgeyBjb25jYXRlbmF0ZVBhdGhzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9wYXRoXCI7XG5cbmxldCBwYWNrYWdlSlNPTiA9IG51bGw7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXROYW1lKCkge1xuICBjb25zdCBwYWNrYWdlSlNPTiA9IGdldFBhY2thZ2VKU09OKCksXG4gICAgICAgIHsgbmFtZSA9IG51bGwgfSA9IHBhY2thZ2VKU09OO1xuXG4gIHJldHVybiBuYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QXV0aG9yKCkge1xuICBjb25zdCBwYWNrYWdlSlNPTiA9IGdldFBhY2thZ2VKU09OKCksXG4gICAgICAgIHsgYXV0aG9yID0gbnVsbCB9ID0gcGFja2FnZUpTT047XG5cbiAgcmV0dXJuIGF1dGhvcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFZlcnNpb24oKSB7XG4gIGNvbnN0IHBhY2thZ2VKU09OID0gZ2V0UGFja2FnZUpTT04oKSxcbiAgICAgICAgeyB2ZXJzaW9uID0gbnVsbCB9ID0gcGFja2FnZUpTT047XG5cbiAgcmV0dXJuIHZlcnNpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMaWNlbnNlKCkge1xuICBjb25zdCBwYWNrYWdlSlNPTiA9IGdldFBhY2thZ2VKU09OKCksXG4gICAgICAgIHsgbGljZW5zZSA9IG51bGwgfSA9IHBhY2thZ2VKU09OO1xuXG4gIHJldHVybiBsaWNlbnNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UGFja2FnZUpTT04oKSB7XG4gIGlmIChwYWNrYWdlSlNPTiA9PT0gbnVsbCkge1xuICAgIGNvbnN0IHV0aWxpdGllc0RpcmVjdG9yeU5hbWUgPSBfX2Rpcm5hbWUsIC8vL1xuICAgICAgICAgIG1hdGNoZXMgPSB1dGlsaXRpZXNEaXJlY3RvcnlOYW1lLm1hdGNoKC9eKC4rKVtcXC9cXFxcXW5vZGVfbW9kdWxlcy8pLFxuICAgICAgICAgIHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpLFxuICAgICAgICAgIGFwcGxpY2F0aW9uRGlyZWN0b3J5TmFtZSA9IHNlY29uZE1hdGNoLCAvLy9cbiAgICAgICAgICBwYWNrYWdlSlNPTkZpbGVQYXRoID0gY29uY2F0ZW5hdGVQYXRocyhhcHBsaWNhdGlvbkRpcmVjdG9yeU5hbWUsIFBBQ0tBR0VfSlNPTiksXG4gICAgICAgICAgcGFja2FnZUpTT05GaWxlQ29udGVudCA9IHJlYWRGaWxlKHBhY2thZ2VKU09ORmlsZVBhdGgpO1xuXG4gICAgcGFja2FnZUpTT04gPSBKU09OLnBhcnNlKHBhY2thZ2VKU09ORmlsZUNvbnRlbnQpO1xuICB9XG5cbiAgcmV0dXJuIHBhY2thZ2VKU09OO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGdldE5hbWUsXG4gIGdldEF1dGhvcixcbiAgZ2V0VmVyc2lvbixcbiAgZ2V0TGljZW5zZSxcbiAgZ2V0UGFja2FnZUpTT05cbn07XG4iXSwibmFtZXMiOlsiZ2V0QXV0aG9yIiwiZ2V0TGljZW5zZSIsImdldE5hbWUiLCJnZXRQYWNrYWdlSlNPTiIsImdldFZlcnNpb24iLCJQQUNLQUdFX0pTT04iLCJyZXF1aXJlIiwicGFja2FnZUpTT04iLCJuYW1lIiwiYXV0aG9yIiwidmVyc2lvbiIsImxpY2Vuc2UiLCJ1dGlsaXRpZXNEaXJlY3RvcnlOYW1lIiwiX19kaXJuYW1lIiwibWF0Y2hlcyIsIm1hdGNoIiwic2Vjb25kTWF0Y2giLCJzZWNvbmQiLCJhcHBsaWNhdGlvbkRpcmVjdG9yeU5hbWUiLCJwYWNrYWdlSlNPTkZpbGVQYXRoIiwiY29uY2F0ZW5hdGVQYXRocyIsInBhY2thZ2VKU09ORmlsZUNvbnRlbnQiLCJyZWFkRmlsZSIsIkpTT04iLCJwYXJzZSJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFxREEsT0FNRTtlQU5GOztJQXBDZ0JBLFNBQVM7ZUFBVEE7O0lBY0FDLFVBQVU7ZUFBVkE7O0lBckJBQyxPQUFPO2VBQVBBOztJQTRCQUMsY0FBYztlQUFkQTs7SUFkQUMsVUFBVTtlQUFWQTs7O3FCQXBCTzswQkFDRTtvQkFDUTtBQUpqQyxJQUFNLEFBQUVDLGVBQWlCQyxRQUFRLGdCQUF6QkQ7QUFNUixJQUFJRSxjQUFjO0FBRVgsU0FBU0w7SUFDZCxJQUFNSyxjQUFjSixzQ0FDSUksWUFBaEJDLE1BQUFBLHNDQUFPO0lBRWYsT0FBT0E7QUFDVDtBQUVPLFNBQVNSO0lBQ2QsSUFBTU8sY0FBY0osd0NBQ01JLFlBQWxCRSxRQUFBQSwwQ0FBUztJQUVqQixPQUFPQTtBQUNUO0FBRU8sU0FBU0w7SUFDZCxJQUFNRyxjQUFjSix5Q0FDT0ksWUFBbkJHLFNBQUFBLDRDQUFVO0lBRWxCLE9BQU9BO0FBQ1Q7QUFFTyxTQUFTVDtJQUNkLElBQU1NLGNBQWNKLHlDQUNPSSxZQUFuQkksU0FBQUEsNENBQVU7SUFFbEIsT0FBT0E7QUFDVDtBQUVPLFNBQVNSO0lBQ2QsSUFBSUksZ0JBQWdCLE1BQU07UUFDeEIsSUFBTUsseUJBQXlCQyxXQUN6QkMsVUFBVUYsdUJBQXVCRyxLQUFLLENBQUMsNEJBQ3ZDQyxjQUFjQyxJQUFBQSxhQUFNLEVBQUNILFVBQ3JCSSwyQkFBMkJGLGFBQzNCRyxzQkFBc0JDLElBQUFBLHNCQUFnQixFQUFDRiwwQkFBMEJiLGVBQ2pFZ0IseUJBQXlCQyxJQUFBQSxvQkFBUSxFQUFDSDtRQUV4Q1osY0FBY2dCLEtBQUtDLEtBQUssQ0FBQ0g7SUFDM0I7SUFFQSxPQUFPZDtBQUNUO0lBRUEsV0FBZTtJQUNiTCxTQUFBQTtJQUNBRixXQUFBQTtJQUNBSSxZQUFBQTtJQUNBSCxZQUFBQTtJQUNBRSxnQkFBQUE7QUFDRiJ9
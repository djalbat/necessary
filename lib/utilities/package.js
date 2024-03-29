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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcGFja2FnZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuY29uc3QgeyBQQUNLQUdFX0pTT04gfSA9IHJlcXVpcmUoXCIuLi9jb25zdGFudHNcIik7XG5cbmltcG9ydCB7IHNlY29uZCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IHJlYWRGaWxlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9maWxlU3lzdGVtXCI7XG5pbXBvcnQgeyBjb25jYXRlbmF0ZVBhdGhzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9wYXRoXCI7XG5cbmxldCBwYWNrYWdlSlNPTiA9IG51bGw7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXROYW1lKCkge1xuICBjb25zdCBwYWNrYWdlSlNPTiA9IGdldFBhY2thZ2VKU09OKCksXG4gICAgICAgIHsgbmFtZSA9IG51bGwgfSA9IHBhY2thZ2VKU09OO1xuXG4gIHJldHVybiBuYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QXV0aG9yKCkge1xuICBjb25zdCBwYWNrYWdlSlNPTiA9IGdldFBhY2thZ2VKU09OKCksXG4gICAgICAgIHsgYXV0aG9yID0gbnVsbCB9ID0gcGFja2FnZUpTT047XG5cbiAgcmV0dXJuIGF1dGhvcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFZlcnNpb24oKSB7XG4gIGNvbnN0IHBhY2thZ2VKU09OID0gZ2V0UGFja2FnZUpTT04oKSxcbiAgICAgICAgeyB2ZXJzaW9uID0gbnVsbCB9ID0gcGFja2FnZUpTT047XG5cbiAgcmV0dXJuIHZlcnNpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMaWNlbnNlKCkge1xuICBjb25zdCBwYWNrYWdlSlNPTiA9IGdldFBhY2thZ2VKU09OKCksXG4gICAgICAgIHsgbGljZW5zZSA9IG51bGwgfSA9IHBhY2thZ2VKU09OO1xuXG4gIHJldHVybiBsaWNlbnNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UGFja2FnZUpTT04oKSB7XG4gIGlmIChwYWNrYWdlSlNPTiA9PT0gbnVsbCkge1xuICAgIGNvbnN0IHV0aWxpdGllc0RpcmVjdG9yeU5hbWUgPSBfX2Rpcm5hbWUsIC8vL1xuICAgICAgICAgIG1hdGNoZXMgPSB1dGlsaXRpZXNEaXJlY3RvcnlOYW1lLm1hdGNoKC9eKC4rKVtcXC9cXFxcXW5vZGVfbW9kdWxlcy8pLFxuICAgICAgICAgIHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpLFxuICAgICAgICAgIGFwcGxpY2F0aW9uRGlyZWN0b3J5TmFtZSA9IHNlY29uZE1hdGNoLCAvLy9cbiAgICAgICAgICBwYWNrYWdlSlNPTkZpbGVQYXRoID0gY29uY2F0ZW5hdGVQYXRocyhhcHBsaWNhdGlvbkRpcmVjdG9yeU5hbWUsIFBBQ0tBR0VfSlNPTiksXG4gICAgICAgICAgcGFja2FnZUpTT05GaWxlQ29udGVudCA9IHJlYWRGaWxlKHBhY2thZ2VKU09ORmlsZVBhdGgpO1xuXG4gICAgcGFja2FnZUpTT04gPSBKU09OLnBhcnNlKHBhY2thZ2VKU09ORmlsZUNvbnRlbnQpO1xuICB9XG5cbiAgcmV0dXJuIHBhY2thZ2VKU09OO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGdldE5hbWUsXG4gIGdldEF1dGhvcixcbiAgZ2V0VmVyc2lvbixcbiAgZ2V0TGljZW5zZSxcbiAgZ2V0UGFja2FnZUpTT05cbn07XG4iXSwibmFtZXMiOlsiZ2V0QXV0aG9yIiwiZ2V0TGljZW5zZSIsImdldE5hbWUiLCJnZXRQYWNrYWdlSlNPTiIsImdldFZlcnNpb24iLCJQQUNLQUdFX0pTT04iLCJyZXF1aXJlIiwicGFja2FnZUpTT04iLCJuYW1lIiwiYXV0aG9yIiwidmVyc2lvbiIsImxpY2Vuc2UiLCJ1dGlsaXRpZXNEaXJlY3RvcnlOYW1lIiwiX19kaXJuYW1lIiwibWF0Y2hlcyIsIm1hdGNoIiwic2Vjb25kTWF0Y2giLCJzZWNvbmQiLCJhcHBsaWNhdGlvbkRpcmVjdG9yeU5hbWUiLCJwYWNrYWdlSlNPTkZpbGVQYXRoIiwiY29uY2F0ZW5hdGVQYXRocyIsInBhY2thZ2VKU09ORmlsZUNvbnRlbnQiLCJyZWFkRmlsZSIsIkpTT04iLCJwYXJzZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBcURBLE9BTUU7ZUFORjs7SUFwQ2dCQSxTQUFTO2VBQVRBOztJQWNBQyxVQUFVO2VBQVZBOztJQXJCQUMsT0FBTztlQUFQQTs7SUE0QkFDLGNBQWM7ZUFBZEE7O0lBZEFDLFVBQVU7ZUFBVkE7OztxQkFwQk87MEJBQ0U7b0JBQ1E7QUFKakMsSUFBTSxBQUFFQyxlQUFpQkMsUUFBUSxnQkFBekJEO0FBTVIsSUFBSUUsY0FBYztBQUVYLFNBQVNMO0lBQ2QsSUFBTUssY0FBY0osc0NBQ0lJLFlBQWhCQyxNQUFBQSxzQ0FBTztJQUVmLE9BQU9BO0FBQ1Q7QUFFTyxTQUFTUjtJQUNkLElBQU1PLGNBQWNKLHdDQUNNSSxZQUFsQkUsUUFBQUEsMENBQVM7SUFFakIsT0FBT0E7QUFDVDtBQUVPLFNBQVNMO0lBQ2QsSUFBTUcsY0FBY0oseUNBQ09JLFlBQW5CRyxTQUFBQSw0Q0FBVTtJQUVsQixPQUFPQTtBQUNUO0FBRU8sU0FBU1Q7SUFDZCxJQUFNTSxjQUFjSix5Q0FDT0ksWUFBbkJJLFNBQUFBLDRDQUFVO0lBRWxCLE9BQU9BO0FBQ1Q7QUFFTyxTQUFTUjtJQUNkLElBQUlJLGdCQUFnQixNQUFNO1FBQ3hCLElBQU1LLHlCQUF5QkMsV0FDekJDLFVBQVVGLHVCQUF1QkcsS0FBSyxDQUFDLDRCQUN2Q0MsY0FBY0MsSUFBQUEsYUFBTSxFQUFDSCxVQUNyQkksMkJBQTJCRixhQUMzQkcsc0JBQXNCQyxJQUFBQSxzQkFBZ0IsRUFBQ0YsMEJBQTBCYixlQUNqRWdCLHlCQUF5QkMsSUFBQUEsb0JBQVEsRUFBQ0g7UUFFeENaLGNBQWNnQixLQUFLQyxLQUFLLENBQUNIO0lBQzNCO0lBRUEsT0FBT2Q7QUFDVDtJQUVBLFdBQWU7SUFDYkwsU0FBQUE7SUFDQUYsV0FBQUE7SUFDQUksWUFBQUE7SUFDQUgsWUFBQUE7SUFDQUUsZ0JBQUFBO0FBQ0YifQ==
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
    getName: function() {
        return getName;
    },
    getAuthor: function() {
        return getAuthor;
    },
    getVersion: function() {
        return getVersion;
    },
    getLicense: function() {
        return getLicense;
    },
    getPackageJSON: function() {
        return getPackageJSON;
    },
    default: function() {
        return _default;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcGFja2FnZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuY29uc3QgeyBQQUNLQUdFX0pTT04gfSA9IHJlcXVpcmUoXCIuLi9jb25zdGFudHNcIik7XG5cbmltcG9ydCB7IHNlY29uZCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IHJlYWRGaWxlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9maWxlU3lzdGVtXCI7XG5pbXBvcnQgeyBjb25jYXRlbmF0ZVBhdGhzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9wYXRoXCI7XG5cbmxldCBwYWNrYWdlSlNPTiA9IG51bGw7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXROYW1lKCkge1xuICBjb25zdCBwYWNrYWdlSlNPTiA9IGdldFBhY2thZ2VKU09OKCksXG4gICAgeyBuYW1lID0gbnVsbCB9ID0gcGFja2FnZUpTT047XG5cbiAgcmV0dXJuIG5hbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRBdXRob3IoKSB7XG4gIGNvbnN0IHBhY2thZ2VKU09OID0gZ2V0UGFja2FnZUpTT04oKSxcbiAgICB7IGF1dGhvciA9IG51bGwgfSA9IHBhY2thZ2VKU09OO1xuXG4gIHJldHVybiBhdXRob3I7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRWZXJzaW9uKCkge1xuICBjb25zdCBwYWNrYWdlSlNPTiA9IGdldFBhY2thZ2VKU09OKCksXG4gICAgeyB2ZXJzaW9uID0gbnVsbCB9ID0gcGFja2FnZUpTT047XG5cbiAgcmV0dXJuIHZlcnNpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMaWNlbnNlKCkge1xuICBjb25zdCBwYWNrYWdlSlNPTiA9IGdldFBhY2thZ2VKU09OKCksXG4gICAgeyBsaWNlbnNlID0gbnVsbCB9ID0gcGFja2FnZUpTT047XG5cbiAgcmV0dXJuIGxpY2Vuc2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQYWNrYWdlSlNPTigpIHtcbiAgaWYgKHBhY2thZ2VKU09OID09PSBudWxsKSB7XG4gICAgY29uc3QgdXRpbGl0aWVzRGlyZWN0b3J5TmFtZSA9IF9fZGlybmFtZSwgLy8vXG4gICAgICAgICAgbWF0Y2hlcyA9IHV0aWxpdGllc0RpcmVjdG9yeU5hbWUubWF0Y2goL14oLispW1xcL1xcXFxdbm9kZV9tb2R1bGVzLyksXG4gICAgICAgICAgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyksXG4gICAgICAgICAgYXBwbGljYXRpb25EaXJlY3RvcnlOYW1lID0gc2Vjb25kTWF0Y2gsIC8vL1xuICAgICAgICAgIHBhY2thZ2VKU09ORmlsZVBhdGggPSBjb25jYXRlbmF0ZVBhdGhzKGFwcGxpY2F0aW9uRGlyZWN0b3J5TmFtZSwgUEFDS0FHRV9KU09OKSxcbiAgICAgICAgICBwYWNrYWdlSlNPTkZpbGVDb250ZW50ID0gcmVhZEZpbGUocGFja2FnZUpTT05GaWxlUGF0aCk7XG5cbiAgICBwYWNrYWdlSlNPTiA9IEpTT04ucGFyc2UocGFja2FnZUpTT05GaWxlQ29udGVudCk7XG4gIH1cblxuICByZXR1cm4gcGFja2FnZUpTT047XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZ2V0TmFtZSxcbiAgZ2V0QXV0aG9yLFxuICBnZXRWZXJzaW9uLFxuICBnZXRMaWNlbnNlLFxuICBnZXRQYWNrYWdlSlNPTlxufTtcbiJdLCJuYW1lcyI6WyJnZXROYW1lIiwiZ2V0QXV0aG9yIiwiZ2V0VmVyc2lvbiIsImdldExpY2Vuc2UiLCJnZXRQYWNrYWdlSlNPTiIsIlBBQ0tBR0VfSlNPTiIsInJlcXVpcmUiLCJwYWNrYWdlSlNPTiIsIm5hbWUiLCJhdXRob3IiLCJ2ZXJzaW9uIiwibGljZW5zZSIsInV0aWxpdGllc0RpcmVjdG9yeU5hbWUiLCJfX2Rpcm5hbWUiLCJtYXRjaGVzIiwibWF0Y2giLCJzZWNvbmRNYXRjaCIsInNlY29uZCIsImFwcGxpY2F0aW9uRGlyZWN0b3J5TmFtZSIsInBhY2thZ2VKU09ORmlsZVBhdGgiLCJjb25jYXRlbmF0ZVBhdGhzIiwicGFja2FnZUpTT05GaWxlQ29udGVudCIsInJlYWRGaWxlIiwiSlNPTiIsInBhcnNlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFVZ0JBLE9BQU87ZUFBUEE7O0lBT0FDLFNBQVM7ZUFBVEE7O0lBT0FDLFVBQVU7ZUFBVkE7O0lBT0FDLFVBQVU7ZUFBVkE7O0lBT0FDLGNBQWM7ZUFBZEE7O0lBZWhCLE9BTUU7ZUFORjs7O3FCQWpEdUI7MEJBQ0U7b0JBQ1E7QUFKakMsSUFBTSxBQUFFQyxlQUFpQkMsUUFBUSxnQkFBekJEO0FBTVIsSUFBSUUsY0FBYztBQUVYLFNBQVNQO0lBQ2QsSUFBTU8sY0FBY0gsc0NBQ0FHLFlBQWhCQyxNQUFBQSxzQ0FBTztJQUVYLE9BQU9BO0FBQ1Q7QUFFTyxTQUFTUDtJQUNkLElBQU1NLGNBQWNILHdDQUNFRyxZQUFsQkUsUUFBQUEsMENBQVM7SUFFYixPQUFPQTtBQUNUO0FBRU8sU0FBU1A7SUFDZCxJQUFNSyxjQUFjSCx5Q0FDR0csWUFBbkJHLFNBQUFBLDRDQUFVO0lBRWQsT0FBT0E7QUFDVDtBQUVPLFNBQVNQO0lBQ2QsSUFBTUksY0FBY0gseUNBQ0dHLFlBQW5CSSxTQUFBQSw0Q0FBVTtJQUVkLE9BQU9BO0FBQ1Q7QUFFTyxTQUFTUDtJQUNkLElBQUlHLGdCQUFnQixNQUFNO1FBQ3hCLElBQU1LLHlCQUF5QkMsV0FDekJDLFVBQVVGLHVCQUF1QkcsS0FBSyxDQUFDLDRCQUN2Q0MsY0FBY0MsSUFBQUEsYUFBTSxFQUFDSCxVQUNyQkksMkJBQTJCRixhQUMzQkcsc0JBQXNCQyxJQUFBQSxzQkFBZ0IsRUFBQ0YsMEJBQTBCYixlQUNqRWdCLHlCQUF5QkMsSUFBQUEsb0JBQVEsRUFBQ0g7UUFFeENaLGNBQWNnQixLQUFLQyxLQUFLLENBQUNIO0lBQzNCO0lBRUEsT0FBT2Q7QUFDVDtJQUVBLFdBQWU7SUFDYlAsU0FBQUE7SUFDQUMsV0FBQUE7SUFDQUMsWUFBQUE7SUFDQUMsWUFBQUE7SUFDQUMsZ0JBQUFBO0FBQ0YifQ==
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
        var utilitiesDirectoryName = __dirname, matches = utilitiesDirectoryName.match(/^(.+)[\/\\]node_modules$/), secondMatch = (0, _array.second)(matches), applicationDirectoryName = secondMatch, packageJSONFilePath = (0, _path.concatenatePaths)(applicationDirectoryName, PACKAGE_JSON), packageJSONFile = (0, _fileSystem.readFile)(packageJSONFilePath);
        packageJSON = JSON.parse(packageJSONFile);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcGFja2FnZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuY29uc3QgeyBQQUNLQUdFX0pTT04gfSA9IHJlcXVpcmUoXCIuLi9jb25zdGFudHNcIik7XG5cbmltcG9ydCB7IHNlY29uZCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IHJlYWRGaWxlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9maWxlU3lzdGVtXCI7XG5pbXBvcnQgeyBjb25jYXRlbmF0ZVBhdGhzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9wYXRoXCI7XG5cbmxldCBwYWNrYWdlSlNPTiA9IG51bGw7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXROYW1lKCkge1xuICBjb25zdCBwYWNrYWdlSlNPTiA9IGdldFBhY2thZ2VKU09OKCksXG4gICAgeyBuYW1lID0gbnVsbCB9ID0gcGFja2FnZUpTT047XG5cbiAgcmV0dXJuIG5hbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRBdXRob3IoKSB7XG4gIGNvbnN0IHBhY2thZ2VKU09OID0gZ2V0UGFja2FnZUpTT04oKSxcbiAgICB7IGF1dGhvciA9IG51bGwgfSA9IHBhY2thZ2VKU09OO1xuXG4gIHJldHVybiBhdXRob3I7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRWZXJzaW9uKCkge1xuICBjb25zdCBwYWNrYWdlSlNPTiA9IGdldFBhY2thZ2VKU09OKCksXG4gICAgeyB2ZXJzaW9uID0gbnVsbCB9ID0gcGFja2FnZUpTT047XG5cbiAgcmV0dXJuIHZlcnNpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMaWNlbnNlKCkge1xuICBjb25zdCBwYWNrYWdlSlNPTiA9IGdldFBhY2thZ2VKU09OKCksXG4gICAgeyBsaWNlbnNlID0gbnVsbCB9ID0gcGFja2FnZUpTT047XG5cbiAgcmV0dXJuIGxpY2Vuc2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQYWNrYWdlSlNPTigpIHtcbiAgaWYgKHBhY2thZ2VKU09OID09PSBudWxsKSB7XG4gICAgY29uc3QgdXRpbGl0aWVzRGlyZWN0b3J5TmFtZSA9IF9fZGlybmFtZSwgLy8vXG4gICAgICAgICAgbWF0Y2hlcyA9IHV0aWxpdGllc0RpcmVjdG9yeU5hbWUubWF0Y2goL14oLispW1xcL1xcXFxdbm9kZV9tb2R1bGVzJC8pLFxuICAgICAgICAgIHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpLFxuICAgICAgICAgIGFwcGxpY2F0aW9uRGlyZWN0b3J5TmFtZSA9IHNlY29uZE1hdGNoLCAvLy9cbiAgICAgICAgICBwYWNrYWdlSlNPTkZpbGVQYXRoID0gY29uY2F0ZW5hdGVQYXRocyhhcHBsaWNhdGlvbkRpcmVjdG9yeU5hbWUsIFBBQ0tBR0VfSlNPTiksXG4gICAgICAgICAgcGFja2FnZUpTT05GaWxlID0gcmVhZEZpbGUocGFja2FnZUpTT05GaWxlUGF0aCk7XG5cbiAgICBwYWNrYWdlSlNPTiA9IEpTT04ucGFyc2UocGFja2FnZUpTT05GaWxlKTtcbiAgfVxuXG4gIHJldHVybiBwYWNrYWdlSlNPTjtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBnZXROYW1lLFxuICBnZXRBdXRob3IsXG4gIGdldFZlcnNpb24sXG4gIGdldExpY2Vuc2UsXG4gIGdldFBhY2thZ2VKU09OXG59O1xuIl0sIm5hbWVzIjpbImdldE5hbWUiLCJnZXRBdXRob3IiLCJnZXRWZXJzaW9uIiwiZ2V0TGljZW5zZSIsImdldFBhY2thZ2VKU09OIiwiUEFDS0FHRV9KU09OIiwicmVxdWlyZSIsInBhY2thZ2VKU09OIiwibmFtZSIsImF1dGhvciIsInZlcnNpb24iLCJsaWNlbnNlIiwidXRpbGl0aWVzRGlyZWN0b3J5TmFtZSIsIl9fZGlybmFtZSIsIm1hdGNoZXMiLCJtYXRjaCIsInNlY29uZE1hdGNoIiwic2Vjb25kIiwiYXBwbGljYXRpb25EaXJlY3RvcnlOYW1lIiwicGFja2FnZUpTT05GaWxlUGF0aCIsImNvbmNhdGVuYXRlUGF0aHMiLCJwYWNrYWdlSlNPTkZpbGUiLCJyZWFkRmlsZSIsIkpTT04iLCJwYXJzZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBVWdCQSxPQUFPO2VBQVBBOztJQU9BQyxTQUFTO2VBQVRBOztJQU9BQyxVQUFVO2VBQVZBOztJQU9BQyxVQUFVO2VBQVZBOztJQU9BQyxjQUFjO2VBQWRBOztJQWVoQixPQU1FO2VBTkY7OztxQkFqRHVCOzBCQUNFO29CQUNRO0FBSmpDLElBQU0sQUFBRUMsZUFBaUJDLFFBQVEsZ0JBQXpCRDtBQU1SLElBQUlFLGNBQWM7QUFFWCxTQUFTUDtJQUNkLElBQU1PLGNBQWNILHNDQUNBRyxZQUFoQkMsTUFBQUEsc0NBQU87SUFFWCxPQUFPQTtBQUNUO0FBRU8sU0FBU1A7SUFDZCxJQUFNTSxjQUFjSCx3Q0FDRUcsWUFBbEJFLFFBQUFBLDBDQUFTO0lBRWIsT0FBT0E7QUFDVDtBQUVPLFNBQVNQO0lBQ2QsSUFBTUssY0FBY0gseUNBQ0dHLFlBQW5CRyxTQUFBQSw0Q0FBVTtJQUVkLE9BQU9BO0FBQ1Q7QUFFTyxTQUFTUDtJQUNkLElBQU1JLGNBQWNILHlDQUNHRyxZQUFuQkksU0FBQUEsNENBQVU7SUFFZCxPQUFPQTtBQUNUO0FBRU8sU0FBU1A7SUFDZCxJQUFJRyxnQkFBZ0IsTUFBTTtRQUN4QixJQUFNSyx5QkFBeUJDLFdBQ3pCQyxVQUFVRix1QkFBdUJHLEtBQUssQ0FBQyw2QkFDdkNDLGNBQWNDLElBQUFBLGFBQU0sRUFBQ0gsVUFDckJJLDJCQUEyQkYsYUFDM0JHLHNCQUFzQkMsSUFBQUEsc0JBQWdCLEVBQUNGLDBCQUEwQmIsZUFDakVnQixrQkFBa0JDLElBQUFBLG9CQUFRLEVBQUNIO1FBRWpDWixjQUFjZ0IsS0FBS0MsS0FBSyxDQUFDSDtJQUMzQjtJQUVBLE9BQU9kO0FBQ1Q7SUFFQSxXQUFlO0lBQ2JQLFNBQUFBO0lBQ0FDLFdBQUFBO0lBQ0FDLFlBQUFBO0lBQ0FDLFlBQUFBO0lBQ0FDLGdCQUFBQTtBQUNGIn0=
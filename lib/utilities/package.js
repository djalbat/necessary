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
    get default () {
        return _default;
    },
    get getAuthor () {
        return getAuthor;
    },
    get getLicense () {
        return getLicense;
    },
    get getName () {
        return getName;
    },
    get getPackageJSON () {
        return getPackageJSON;
    },
    get getPackagePath () {
        return getPackagePath;
    },
    get getVersion () {
        return getVersion;
    }
});
const _array = require("../utilities/array");
const _fileSystem = require("../utilities/fileSystem");
const _path = require("../utilities/path");
const { PACKAGE_JSON } = require("../constants");
let packageJSON = null;
function getName() {
    const packageJSON = getPackageJSON(), { name = null } = packageJSON;
    return name;
}
function getAuthor() {
    const packageJSON = getPackageJSON(), { author = null } = packageJSON;
    return author;
}
function getVersion() {
    const packageJSON = getPackageJSON(), { version = null } = packageJSON;
    return version;
}
function getLicense() {
    const packageJSON = getPackageJSON(), { license = null } = packageJSON;
    return license;
}
function getPackagePath() {
    const matches = __dirname.match(/^(.+)[\/\\]node_modules/), secondMatch = (0, _array.second)(matches), packagePath = secondMatch; ///
    return packagePath;
}
function getPackageJSON() {
    if (packageJSON === null) {
        const packagePath = getPackagePath(), packageJSONFilePath = (0, _path.concatenatePaths)(packagePath, PACKAGE_JSON), packageJSONFileContent = (0, _fileSystem.readFile)(packageJSONFilePath);
        packageJSON = JSON.parse(packageJSONFileContent);
    }
    return packageJSON;
}
const _default = {
    getName,
    getAuthor,
    getVersion,
    getLicense,
    getPackagePath,
    getPackageJSON
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcGFja2FnZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuY29uc3QgeyBQQUNLQUdFX0pTT04gfSA9IHJlcXVpcmUoXCIuLi9jb25zdGFudHNcIik7XG5cbmltcG9ydCB7IHNlY29uZCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IHJlYWRGaWxlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9maWxlU3lzdGVtXCI7XG5pbXBvcnQgeyBjb25jYXRlbmF0ZVBhdGhzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9wYXRoXCI7XG5cbmxldCBwYWNrYWdlSlNPTiA9IG51bGw7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXROYW1lKCkge1xuICBjb25zdCBwYWNrYWdlSlNPTiA9IGdldFBhY2thZ2VKU09OKCksXG4gICAgICAgIHsgbmFtZSA9IG51bGwgfSA9IHBhY2thZ2VKU09OO1xuXG4gIHJldHVybiBuYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QXV0aG9yKCkge1xuICBjb25zdCBwYWNrYWdlSlNPTiA9IGdldFBhY2thZ2VKU09OKCksXG4gICAgICAgIHsgYXV0aG9yID0gbnVsbCB9ID0gcGFja2FnZUpTT047XG5cbiAgcmV0dXJuIGF1dGhvcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFZlcnNpb24oKSB7XG4gIGNvbnN0IHBhY2thZ2VKU09OID0gZ2V0UGFja2FnZUpTT04oKSxcbiAgICAgICAgeyB2ZXJzaW9uID0gbnVsbCB9ID0gcGFja2FnZUpTT047XG5cbiAgcmV0dXJuIHZlcnNpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMaWNlbnNlKCkge1xuICBjb25zdCBwYWNrYWdlSlNPTiA9IGdldFBhY2thZ2VKU09OKCksXG4gICAgICAgIHsgbGljZW5zZSA9IG51bGwgfSA9IHBhY2thZ2VKU09OO1xuXG4gIHJldHVybiBsaWNlbnNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UGFja2FnZVBhdGgoKSB7XG4gIGNvbnN0IG1hdGNoZXMgPSBfX2Rpcm5hbWUubWF0Y2goL14oLispW1xcL1xcXFxdbm9kZV9tb2R1bGVzLyksXG4gICAgICAgIHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpLFxuICAgICAgICBwYWNrYWdlUGF0aCA9IHNlY29uZE1hdGNoOyAvLy9cblxuICByZXR1cm4gcGFja2FnZVBhdGg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQYWNrYWdlSlNPTigpIHtcbiAgaWYgKHBhY2thZ2VKU09OID09PSBudWxsKSB7XG4gICAgY29uc3QgcGFja2FnZVBhdGggPSBnZXRQYWNrYWdlUGF0aCgpLFxuICAgICAgICAgIHBhY2thZ2VKU09ORmlsZVBhdGggPSBjb25jYXRlbmF0ZVBhdGhzKHBhY2thZ2VQYXRoLCBQQUNLQUdFX0pTT04pLFxuICAgICAgICAgIHBhY2thZ2VKU09ORmlsZUNvbnRlbnQgPSByZWFkRmlsZShwYWNrYWdlSlNPTkZpbGVQYXRoKTtcblxuICAgIHBhY2thZ2VKU09OID0gSlNPTi5wYXJzZShwYWNrYWdlSlNPTkZpbGVDb250ZW50KTtcbiAgfVxuXG4gIHJldHVybiBwYWNrYWdlSlNPTjtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBnZXROYW1lLFxuICBnZXRBdXRob3IsXG4gIGdldFZlcnNpb24sXG4gIGdldExpY2Vuc2UsXG4gIGdldFBhY2thZ2VQYXRoLFxuICBnZXRQYWNrYWdlSlNPTlxufTtcbiJdLCJuYW1lcyI6WyJnZXRBdXRob3IiLCJnZXRMaWNlbnNlIiwiZ2V0TmFtZSIsImdldFBhY2thZ2VKU09OIiwiZ2V0UGFja2FnZVBhdGgiLCJnZXRWZXJzaW9uIiwiUEFDS0FHRV9KU09OIiwicmVxdWlyZSIsInBhY2thZ2VKU09OIiwibmFtZSIsImF1dGhvciIsInZlcnNpb24iLCJsaWNlbnNlIiwibWF0Y2hlcyIsIl9fZGlybmFtZSIsIm1hdGNoIiwic2Vjb25kTWF0Y2giLCJzZWNvbmQiLCJwYWNrYWdlUGF0aCIsInBhY2thZ2VKU09ORmlsZVBhdGgiLCJjb25jYXRlbmF0ZVBhdGhzIiwicGFja2FnZUpTT05GaWxlQ29udGVudCIsInJlYWRGaWxlIiwiSlNPTiIsInBhcnNlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7UUEwREE7ZUFBQTs7UUF6Q2dCQTtlQUFBQTs7UUFjQUM7ZUFBQUE7O1FBckJBQztlQUFBQTs7UUFvQ0FDO2VBQUFBOztRQVJBQztlQUFBQTs7UUFkQUM7ZUFBQUE7Ozt1QkFwQk87NEJBQ0U7c0JBQ1E7QUFKakMsTUFBTSxFQUFFQyxZQUFZLEVBQUUsR0FBR0MsUUFBUTtBQU1qQyxJQUFJQyxjQUFjO0FBRVgsU0FBU047SUFDZCxNQUFNTSxjQUFjTCxrQkFDZCxFQUFFTSxPQUFPLElBQUksRUFBRSxHQUFHRDtJQUV4QixPQUFPQztBQUNUO0FBRU8sU0FBU1Q7SUFDZCxNQUFNUSxjQUFjTCxrQkFDZCxFQUFFTyxTQUFTLElBQUksRUFBRSxHQUFHRjtJQUUxQixPQUFPRTtBQUNUO0FBRU8sU0FBU0w7SUFDZCxNQUFNRyxjQUFjTCxrQkFDZCxFQUFFUSxVQUFVLElBQUksRUFBRSxHQUFHSDtJQUUzQixPQUFPRztBQUNUO0FBRU8sU0FBU1Y7SUFDZCxNQUFNTyxjQUFjTCxrQkFDZCxFQUFFUyxVQUFVLElBQUksRUFBRSxHQUFHSjtJQUUzQixPQUFPSTtBQUNUO0FBRU8sU0FBU1I7SUFDZCxNQUFNUyxVQUFVQyxVQUFVQyxLQUFLLENBQUMsNEJBQzFCQyxjQUFjQyxJQUFBQSxhQUFNLEVBQUNKLFVBQ3JCSyxjQUFjRixhQUFhLEdBQUc7SUFFcEMsT0FBT0U7QUFDVDtBQUVPLFNBQVNmO0lBQ2QsSUFBSUssZ0JBQWdCLE1BQU07UUFDeEIsTUFBTVUsY0FBY2Qsa0JBQ2RlLHNCQUFzQkMsSUFBQUEsc0JBQWdCLEVBQUNGLGFBQWFaLGVBQ3BEZSx5QkFBeUJDLElBQUFBLG9CQUFRLEVBQUNIO1FBRXhDWCxjQUFjZSxLQUFLQyxLQUFLLENBQUNIO0lBQzNCO0lBRUEsT0FBT2I7QUFDVDtNQUVBLFdBQWU7SUFDYk47SUFDQUY7SUFDQUs7SUFDQUo7SUFDQUc7SUFDQUQ7QUFDRiJ9
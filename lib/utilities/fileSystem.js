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
    get appendToFile () {
        return appendToFile;
    },
    get checkDirectoryExists () {
        return checkDirectoryExists;
    },
    get checkEntryExists () {
        return checkEntryExists;
    },
    get checkFileExists () {
        return checkFileExists;
    },
    get copyFile () {
        return copyFile;
    },
    get createDirectory () {
        return createDirectory;
    },
    get createFile () {
        return createFile;
    },
    get default () {
        return _default;
    },
    get getEntryStats () {
        return getEntryStats;
    },
    get isDirectoryEmpty () {
        return isDirectoryEmpty;
    },
    get isEntryDirectory () {
        return isEntryDirectory;
    },
    get isEntryFile () {
        return isEntryFile;
    },
    get moveEntry () {
        return moveEntry;
    },
    get readDirectory () {
        return readDirectory;
    },
    get readFile () {
        return readFile;
    },
    get removeEntry () {
        return removeEntry;
    },
    get renameEntry () {
        return renameEntry;
    },
    get writeFile () {
        return writeFile;
    }
});
var _fs = /*#__PURE__*/ _interop_require_default(require("fs"));
var _path = /*#__PURE__*/ _interop_require_default(require("path"));
var _constants = require("../constants");
var _defaults = require("../defaults");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function getEntryStats(entryPath) {
    var entryStats = _fs.default.statSync(entryPath);
    return entryStats;
}
function checkEntryExists(entryPath) {
    var entryExists = _fs.default.existsSync(entryPath);
    return entryExists;
}
function checkFileExists(filePath) {
    var fileExists = false;
    var entryPath = filePath, entryExists = checkEntryExists(entryPath);
    if (entryExists) {
        var entryFile = isEntryFile(entryPath);
        if (entryFile) {
            fileExists = true;
        }
    }
    return fileExists;
}
function checkDirectoryExists(directoryPath) {
    var directoryExists = false;
    var entryPath = directoryPath, entryExists = checkEntryExists(entryPath);
    if (entryExists) {
        var entryDirectory = isEntryDirectory(entryPath);
        if (entryDirectory) {
            directoryExists = true;
        }
    }
    return directoryExists;
}
function isEntryFile(entryPath) {
    var stats = getEntryStats(entryPath), entryFile = stats.isFile(); ///
    return entryFile;
}
function isEntryDirectory(entryPath) {
    var stats = getEntryStats(entryPath), entryDirectory = stats.isDirectory(); ///
    return entryDirectory;
}
function isDirectoryEmpty(directoryPath) {
    var subEntryNames = readDirectory(directoryPath), subEntryNamesLength = subEntryNames.length, directoryEmpty = subEntryNamesLength === 0;
    return directoryEmpty;
}
function readDirectory(directoryPath) {
    var subEntryNames = _fs.default.readdirSync(directoryPath);
    return subEntryNames;
}
function readFile(filePath) {
    var encoding = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _defaults.DEFAULT_ENCODING;
    var options = {
        encoding: encoding
    }, content = _fs.default.readFileSync(filePath, options);
    return content;
}
function copyFile(sourceFilePath, targetFilepath) {
    _fs.default.copyFileSync(sourceFilePath, targetFilepath);
}
function writeFile(filePath, content) {
    _fs.default.writeFileSync(filePath, content);
}
function appendToFile(filePath, content) {
    _fs.default.appendFileSync(filePath, content);
}
function createDirectory(directoryPath) {
    var recursive = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
    var options = {
        recursive: recursive
    };
    _fs.default.mkdirSync(directoryPath, options);
}
function createFile(filePath) {
    var content = _constants.EMPTY_STRING;
    _fs.default.writeFileSync(filePath, content);
}
function moveEntry(oldEntryPath, newEntryPath) {
    ensureParentDirectoryExists(newEntryPath);
    renameEntry(oldEntryPath, newEntryPath);
}
function removeEntry(entryPath) {
    var force = true, recursive = true, options = {
        force: force,
        recursive: recursive
    };
    _fs.default.rmSync(entryPath, options);
}
function renameEntry(oldEntryPath, newEntryPath) {
    _fs.default.renameSync(oldEntryPath, newEntryPath);
}
var _default = {
    getEntryStats: getEntryStats,
    checkEntryExists: checkEntryExists,
    checkFileExists: checkFileExists,
    checkDirectoryExists: checkDirectoryExists,
    isEntryFile: isEntryFile,
    isEntryDirectory: isEntryDirectory,
    isDirectoryEmpty: isDirectoryEmpty,
    readDirectory: readDirectory,
    copyFile: copyFile,
    readFile: readFile,
    writeFile: writeFile,
    appendToFile: appendToFile,
    createDirectory: createDirectory,
    createFile: createFile,
    moveEntry: moveEntry,
    renameEntry: renameEntry,
    removeEntry: removeEntry
};
function ensureParentDirectoryExists(entryPath) {
    var parentDirectoryPath = _path.default.dirname(entryPath), parentDirectoryExists = checkDirectoryExists(parentDirectoryPath);
    if (!parentDirectoryExists) {
        var recursive = true;
        createDirectory(parentDirectoryPath, recursive);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZmlsZVN5c3RlbS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGZzIGZyb20gXCJmc1wiO1xuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgREVGQVVMVF9FTkNPRElORyB9IGZyb20gXCIuLi9kZWZhdWx0c1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RW50cnlTdGF0cyhlbnRyeVBhdGgpIHtcbiAgY29uc3QgZW50cnlTdGF0cyA9IGZzLnN0YXRTeW5jKGVudHJ5UGF0aCk7XG5cbiAgcmV0dXJuIGVudHJ5U3RhdHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGVja0VudHJ5RXhpc3RzKGVudHJ5UGF0aCkge1xuICBjb25zdCBlbnRyeUV4aXN0cyA9IGZzLmV4aXN0c1N5bmMoZW50cnlQYXRoKTtcblxuICByZXR1cm4gZW50cnlFeGlzdHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGVja0ZpbGVFeGlzdHMoZmlsZVBhdGgpIHtcbiAgbGV0IGZpbGVFeGlzdHMgPSBmYWxzZTtcbiAgXG4gIGNvbnN0IGVudHJ5UGF0aCA9IGZpbGVQYXRoLCAvLy9cbiAgICAgICAgZW50cnlFeGlzdHMgPSBjaGVja0VudHJ5RXhpc3RzKGVudHJ5UGF0aCk7XG4gIFxuICBpZiAoZW50cnlFeGlzdHMpIHtcbiAgICBjb25zdCBlbnRyeUZpbGUgPSBpc0VudHJ5RmlsZShlbnRyeVBhdGgpO1xuICAgIFxuICAgIGlmIChlbnRyeUZpbGUpIHtcbiAgICAgIGZpbGVFeGlzdHMgPSB0cnVlO1xuICAgIH1cbiAgfVxuICBcbiAgcmV0dXJuIGZpbGVFeGlzdHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGVja0RpcmVjdG9yeUV4aXN0cyhkaXJlY3RvcnlQYXRoKSB7XG4gIGxldCBkaXJlY3RvcnlFeGlzdHMgPSBmYWxzZTtcblxuICBjb25zdCBlbnRyeVBhdGggPSBkaXJlY3RvcnlQYXRoLCAvLy9cbiAgICAgICAgZW50cnlFeGlzdHMgPSBjaGVja0VudHJ5RXhpc3RzKGVudHJ5UGF0aCk7XG5cbiAgaWYgKGVudHJ5RXhpc3RzKSB7XG4gICAgY29uc3QgZW50cnlEaXJlY3RvcnkgPSBpc0VudHJ5RGlyZWN0b3J5KGVudHJ5UGF0aCk7XG5cbiAgICBpZiAoZW50cnlEaXJlY3RvcnkpIHtcbiAgICAgIGRpcmVjdG9yeUV4aXN0cyA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRpcmVjdG9yeUV4aXN0cztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRW50cnlGaWxlKGVudHJ5UGF0aCkge1xuICBjb25zdCBzdGF0cyA9IGdldEVudHJ5U3RhdHMoZW50cnlQYXRoKSxcbiAgICAgICAgZW50cnlGaWxlID0gc3RhdHMuaXNGaWxlKCk7IC8vL1xuXG4gIHJldHVybiBlbnRyeUZpbGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0VudHJ5RGlyZWN0b3J5KGVudHJ5UGF0aCkge1xuICBjb25zdCBzdGF0cyA9IGdldEVudHJ5U3RhdHMoZW50cnlQYXRoKSxcbiAgICAgICAgZW50cnlEaXJlY3RvcnkgPSBzdGF0cy5pc0RpcmVjdG9yeSgpOyAvLy9cblxuICByZXR1cm4gZW50cnlEaXJlY3Rvcnk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0RpcmVjdG9yeUVtcHR5KGRpcmVjdG9yeVBhdGgpIHtcbiAgY29uc3Qgc3ViRW50cnlOYW1lcyA9IHJlYWREaXJlY3RvcnkoZGlyZWN0b3J5UGF0aCksXG4gICAgICAgIHN1YkVudHJ5TmFtZXNMZW5ndGggPSBzdWJFbnRyeU5hbWVzLmxlbmd0aCxcbiAgICAgICAgZGlyZWN0b3J5RW1wdHkgPSAoc3ViRW50cnlOYW1lc0xlbmd0aCA9PT0gMCk7XG5cbiAgcmV0dXJuIGRpcmVjdG9yeUVtcHR5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVhZERpcmVjdG9yeShkaXJlY3RvcnlQYXRoKSB7XG4gIGNvbnN0IHN1YkVudHJ5TmFtZXMgPSBmcy5yZWFkZGlyU3luYyhkaXJlY3RvcnlQYXRoKTtcblxuICByZXR1cm4gc3ViRW50cnlOYW1lcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlYWRGaWxlKGZpbGVQYXRoLCBlbmNvZGluZyA9IERFRkFVTFRfRU5DT0RJTkcpIHtcbiAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICBlbmNvZGluZ1xuICAgICAgICB9LFxuICAgICAgICBjb250ZW50ID0gZnMucmVhZEZpbGVTeW5jKGZpbGVQYXRoLCBvcHRpb25zKTtcblxuICByZXR1cm4gY29udGVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvcHlGaWxlKHNvdXJjZUZpbGVQYXRoLCB0YXJnZXRGaWxlcGF0aCkge1xuICBmcy5jb3B5RmlsZVN5bmMoc291cmNlRmlsZVBhdGgsIHRhcmdldEZpbGVwYXRoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHdyaXRlRmlsZShmaWxlUGF0aCwgY29udGVudCkge1xuICBmcy53cml0ZUZpbGVTeW5jKGZpbGVQYXRoLCBjb250ZW50KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFwcGVuZFRvRmlsZShmaWxlUGF0aCwgY29udGVudCkge1xuICBmcy5hcHBlbmRGaWxlU3luYyhmaWxlUGF0aCwgY29udGVudCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVEaXJlY3RvcnkoZGlyZWN0b3J5UGF0aCwgcmVjdXJzaXZlID0gdHJ1ZSkge1xuICBjb25zdCBvcHRpb25zID0ge1xuICAgIHJlY3Vyc2l2ZVxuICB9O1xuXG4gIGZzLm1rZGlyU3luYyhkaXJlY3RvcnlQYXRoLCBvcHRpb25zKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUZpbGUoZmlsZVBhdGgpIHtcbiAgY29uc3QgY29udGVudCA9IEVNUFRZX1NUUklORztcblxuICBmcy53cml0ZUZpbGVTeW5jKGZpbGVQYXRoLCBjb250ZW50KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1vdmVFbnRyeShvbGRFbnRyeVBhdGgsIG5ld0VudHJ5UGF0aCkge1xuICBlbnN1cmVQYXJlbnREaXJlY3RvcnlFeGlzdHMobmV3RW50cnlQYXRoKTtcblxuICByZW5hbWVFbnRyeShvbGRFbnRyeVBhdGgsIG5ld0VudHJ5UGF0aCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVFbnRyeShlbnRyeVBhdGgpIHtcbiAgY29uc3QgZm9yY2UgPSB0cnVlLFxuICAgICAgICByZWN1cnNpdmUgPSB0cnVlLFxuICAgICAgICBvcHRpb25zID0ge1xuICAgICAgICAgIGZvcmNlLFxuICAgICAgICAgIHJlY3Vyc2l2ZVxuICAgICAgICB9O1xuXG4gIGZzLnJtU3luYyhlbnRyeVBhdGgsIG9wdGlvbnMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuYW1lRW50cnkob2xkRW50cnlQYXRoLCBuZXdFbnRyeVBhdGgpIHtcbiAgZnMucmVuYW1lU3luYyhvbGRFbnRyeVBhdGgsIG5ld0VudHJ5UGF0aCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZ2V0RW50cnlTdGF0cyxcbiAgY2hlY2tFbnRyeUV4aXN0cyxcbiAgY2hlY2tGaWxlRXhpc3RzLFxuICBjaGVja0RpcmVjdG9yeUV4aXN0cyxcbiAgaXNFbnRyeUZpbGUsXG4gIGlzRW50cnlEaXJlY3RvcnksXG4gIGlzRGlyZWN0b3J5RW1wdHksXG4gIHJlYWREaXJlY3RvcnksXG4gIGNvcHlGaWxlLFxuICByZWFkRmlsZSxcbiAgd3JpdGVGaWxlLFxuICBhcHBlbmRUb0ZpbGUsXG4gIGNyZWF0ZURpcmVjdG9yeSxcbiAgY3JlYXRlRmlsZSxcbiAgbW92ZUVudHJ5LFxuICByZW5hbWVFbnRyeSxcbiAgcmVtb3ZlRW50cnlcbn07XG5cbmZ1bmN0aW9uIGVuc3VyZVBhcmVudERpcmVjdG9yeUV4aXN0cyhlbnRyeVBhdGgpIHtcbiAgY29uc3QgcGFyZW50RGlyZWN0b3J5UGF0aCA9IHBhdGguZGlybmFtZShlbnRyeVBhdGgpLCAvLy9cbiAgICAgICAgcGFyZW50RGlyZWN0b3J5RXhpc3RzID0gY2hlY2tEaXJlY3RvcnlFeGlzdHMocGFyZW50RGlyZWN0b3J5UGF0aCk7XG5cbiAgaWYgKCFwYXJlbnREaXJlY3RvcnlFeGlzdHMpIHtcbiAgICBjb25zdCByZWN1cnNpdmUgPSB0cnVlO1xuXG4gICAgY3JlYXRlRGlyZWN0b3J5KHBhcmVudERpcmVjdG9yeVBhdGgsIHJlY3Vyc2l2ZSk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJhcHBlbmRUb0ZpbGUiLCJjaGVja0RpcmVjdG9yeUV4aXN0cyIsImNoZWNrRW50cnlFeGlzdHMiLCJjaGVja0ZpbGVFeGlzdHMiLCJjb3B5RmlsZSIsImNyZWF0ZURpcmVjdG9yeSIsImNyZWF0ZUZpbGUiLCJnZXRFbnRyeVN0YXRzIiwiaXNEaXJlY3RvcnlFbXB0eSIsImlzRW50cnlEaXJlY3RvcnkiLCJpc0VudHJ5RmlsZSIsIm1vdmVFbnRyeSIsInJlYWREaXJlY3RvcnkiLCJyZWFkRmlsZSIsInJlbW92ZUVudHJ5IiwicmVuYW1lRW50cnkiLCJ3cml0ZUZpbGUiLCJlbnRyeVBhdGgiLCJlbnRyeVN0YXRzIiwiZnMiLCJzdGF0U3luYyIsImVudHJ5RXhpc3RzIiwiZXhpc3RzU3luYyIsImZpbGVQYXRoIiwiZmlsZUV4aXN0cyIsImVudHJ5RmlsZSIsImRpcmVjdG9yeVBhdGgiLCJkaXJlY3RvcnlFeGlzdHMiLCJlbnRyeURpcmVjdG9yeSIsInN0YXRzIiwiaXNGaWxlIiwiaXNEaXJlY3RvcnkiLCJzdWJFbnRyeU5hbWVzIiwic3ViRW50cnlOYW1lc0xlbmd0aCIsImxlbmd0aCIsImRpcmVjdG9yeUVtcHR5IiwicmVhZGRpclN5bmMiLCJlbmNvZGluZyIsIkRFRkFVTFRfRU5DT0RJTkciLCJvcHRpb25zIiwiY29udGVudCIsInJlYWRGaWxlU3luYyIsInNvdXJjZUZpbGVQYXRoIiwidGFyZ2V0RmlsZXBhdGgiLCJjb3B5RmlsZVN5bmMiLCJ3cml0ZUZpbGVTeW5jIiwiYXBwZW5kRmlsZVN5bmMiLCJyZWN1cnNpdmUiLCJta2RpclN5bmMiLCJFTVBUWV9TVFJJTkciLCJvbGRFbnRyeVBhdGgiLCJuZXdFbnRyeVBhdGgiLCJlbnN1cmVQYXJlbnREaXJlY3RvcnlFeGlzdHMiLCJmb3JjZSIsInJtU3luYyIsInJlbmFtZVN5bmMiLCJwYXJlbnREaXJlY3RvcnlQYXRoIiwicGF0aCIsImRpcm5hbWUiLCJwYXJlbnREaXJlY3RvcnlFeGlzdHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQW1HZ0JBO2VBQUFBOztRQTlEQUM7ZUFBQUE7O1FBdkJBQztlQUFBQTs7UUFNQUM7ZUFBQUE7O1FBdUVBQztlQUFBQTs7UUFZQUM7ZUFBQUE7O1FBUUFDO2VBQUFBOztRQTJCaEI7ZUFBQTs7UUFsSWdCQztlQUFBQTs7UUE0REFDO2VBQUFBOztRQVBBQztlQUFBQTs7UUFQQUM7ZUFBQUE7O1FBK0RBQztlQUFBQTs7UUF6Q0FDO2VBQUFBOztRQU1BQztlQUFBQTs7UUF5Q0FDO2VBQUFBOztRQVdBQztlQUFBQTs7UUF2Q0FDO2VBQUFBOzs7eURBN0ZEOzJEQUNFO3lCQUVZO3dCQUNJOzs7Ozs7QUFFMUIsU0FBU1QsY0FBY1UsU0FBUztJQUNyQyxJQUFNQyxhQUFhQyxXQUFFLENBQUNDLFFBQVEsQ0FBQ0g7SUFFL0IsT0FBT0M7QUFDVDtBQUVPLFNBQVNoQixpQkFBaUJlLFNBQVM7SUFDeEMsSUFBTUksY0FBY0YsV0FBRSxDQUFDRyxVQUFVLENBQUNMO0lBRWxDLE9BQU9JO0FBQ1Q7QUFFTyxTQUFTbEIsZ0JBQWdCb0IsUUFBUTtJQUN0QyxJQUFJQyxhQUFhO0lBRWpCLElBQU1QLFlBQVlNLFVBQ1pGLGNBQWNuQixpQkFBaUJlO0lBRXJDLElBQUlJLGFBQWE7UUFDZixJQUFNSSxZQUFZZixZQUFZTztRQUU5QixJQUFJUSxXQUFXO1lBQ2JELGFBQWE7UUFDZjtJQUNGO0lBRUEsT0FBT0E7QUFDVDtBQUVPLFNBQVN2QixxQkFBcUJ5QixhQUFhO0lBQ2hELElBQUlDLGtCQUFrQjtJQUV0QixJQUFNVixZQUFZUyxlQUNaTCxjQUFjbkIs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
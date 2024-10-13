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
    appendToFile: function() {
        return appendToFile;
    },
    checkDirectoryExists: function() {
        return checkDirectoryExists;
    },
    checkEntryExists: function() {
        return checkEntryExists;
    },
    checkFileExists: function() {
        return checkFileExists;
    },
    copyFile: function() {
        return copyFile;
    },
    createDirectory: function() {
        return createDirectory;
    },
    createFile: function() {
        return createFile;
    },
    default: function() {
        return _default;
    },
    getEntryStats: function() {
        return getEntryStats;
    },
    isDirectoryEmpty: function() {
        return isDirectoryEmpty;
    },
    isEntryDirectory: function() {
        return isEntryDirectory;
    },
    isEntryFile: function() {
        return isEntryFile;
    },
    moveEntry: function() {
        return moveEntry;
    },
    readDirectory: function() {
        return readDirectory;
    },
    readFile: function() {
        return readFile;
    },
    removeEntry: function() {
        return removeEntry;
    },
    renameEntry: function() {
        return renameEntry;
    },
    writeFile: function() {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZmlsZVN5c3RlbS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGZzIGZyb20gXCJmc1wiO1xuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgREVGQVVMVF9FTkNPRElORyB9IGZyb20gXCIuLi9kZWZhdWx0c1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RW50cnlTdGF0cyhlbnRyeVBhdGgpIHtcbiAgY29uc3QgZW50cnlTdGF0cyA9IGZzLnN0YXRTeW5jKGVudHJ5UGF0aCk7XG5cbiAgcmV0dXJuIGVudHJ5U3RhdHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGVja0VudHJ5RXhpc3RzKGVudHJ5UGF0aCkge1xuICBjb25zdCBlbnRyeUV4aXN0cyA9IGZzLmV4aXN0c1N5bmMoZW50cnlQYXRoKTtcblxuICByZXR1cm4gZW50cnlFeGlzdHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGVja0ZpbGVFeGlzdHMoZmlsZVBhdGgpIHtcbiAgbGV0IGZpbGVFeGlzdHMgPSBmYWxzZTtcbiAgXG4gIGNvbnN0IGVudHJ5UGF0aCA9IGZpbGVQYXRoLCAvLy9cbiAgICAgICAgZW50cnlFeGlzdHMgPSBjaGVja0VudHJ5RXhpc3RzKGVudHJ5UGF0aCk7XG4gIFxuICBpZiAoZW50cnlFeGlzdHMpIHtcbiAgICBjb25zdCBlbnRyeUZpbGUgPSBpc0VudHJ5RmlsZShlbnRyeVBhdGgpO1xuICAgIFxuICAgIGlmIChlbnRyeUZpbGUpIHtcbiAgICAgIGZpbGVFeGlzdHMgPSB0cnVlO1xuICAgIH1cbiAgfVxuICBcbiAgcmV0dXJuIGZpbGVFeGlzdHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGVja0RpcmVjdG9yeUV4aXN0cyhkaXJlY3RvcnlQYXRoKSB7XG4gIGxldCBkaXJlY3RvcnlFeGlzdHMgPSBmYWxzZTtcblxuICBjb25zdCBlbnRyeVBhdGggPSBkaXJlY3RvcnlQYXRoLCAvLy9cbiAgICAgICAgZW50cnlFeGlzdHMgPSBjaGVja0VudHJ5RXhpc3RzKGVudHJ5UGF0aCk7XG5cbiAgaWYgKGVudHJ5RXhpc3RzKSB7XG4gICAgY29uc3QgZW50cnlEaXJlY3RvcnkgPSBpc0VudHJ5RGlyZWN0b3J5KGVudHJ5UGF0aCk7XG5cbiAgICBpZiAoZW50cnlEaXJlY3RvcnkpIHtcbiAgICAgIGRpcmVjdG9yeUV4aXN0cyA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRpcmVjdG9yeUV4aXN0cztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRW50cnlGaWxlKGVudHJ5UGF0aCkge1xuICBjb25zdCBzdGF0cyA9IGdldEVudHJ5U3RhdHMoZW50cnlQYXRoKSxcbiAgICAgICAgZW50cnlGaWxlID0gc3RhdHMuaXNGaWxlKCk7IC8vL1xuXG4gIHJldHVybiBlbnRyeUZpbGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0VudHJ5RGlyZWN0b3J5KGVudHJ5UGF0aCkge1xuICBjb25zdCBzdGF0cyA9IGdldEVudHJ5U3RhdHMoZW50cnlQYXRoKSxcbiAgICAgICAgZW50cnlEaXJlY3RvcnkgPSBzdGF0cy5pc0RpcmVjdG9yeSgpOyAvLy9cblxuICByZXR1cm4gZW50cnlEaXJlY3Rvcnk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0RpcmVjdG9yeUVtcHR5KGRpcmVjdG9yeVBhdGgpIHtcbiAgY29uc3Qgc3ViRW50cnlOYW1lcyA9IHJlYWREaXJlY3RvcnkoZGlyZWN0b3J5UGF0aCksXG4gICAgICAgIHN1YkVudHJ5TmFtZXNMZW5ndGggPSBzdWJFbnRyeU5hbWVzLmxlbmd0aCxcbiAgICAgICAgZGlyZWN0b3J5RW1wdHkgPSAoc3ViRW50cnlOYW1lc0xlbmd0aCA9PT0gMCk7XG5cbiAgcmV0dXJuIGRpcmVjdG9yeUVtcHR5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVhZERpcmVjdG9yeShkaXJlY3RvcnlQYXRoKSB7XG4gIGNvbnN0IHN1YkVudHJ5TmFtZXMgPSBmcy5yZWFkZGlyU3luYyhkaXJlY3RvcnlQYXRoKTtcblxuICByZXR1cm4gc3ViRW50cnlOYW1lcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlYWRGaWxlKGZpbGVQYXRoLCBlbmNvZGluZyA9IERFRkFVTFRfRU5DT0RJTkcpIHtcbiAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICBlbmNvZGluZ1xuICAgICAgICB9LFxuICAgICAgICBjb250ZW50ID0gZnMucmVhZEZpbGVTeW5jKGZpbGVQYXRoLCBvcHRpb25zKTtcblxuICByZXR1cm4gY29udGVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvcHlGaWxlKHNvdXJjZUZpbGVQYXRoLCB0YXJnZXRGaWxlcGF0aCkge1xuICBmcy5jb3B5RmlsZVN5bmMoc291cmNlRmlsZVBhdGgsIHRhcmdldEZpbGVwYXRoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHdyaXRlRmlsZShmaWxlUGF0aCwgY29udGVudCkge1xuICBmcy53cml0ZUZpbGVTeW5jKGZpbGVQYXRoLCBjb250ZW50KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFwcGVuZFRvRmlsZShmaWxlUGF0aCwgY29udGVudCkge1xuICBmcy5hcHBlbmRGaWxlU3luYyhmaWxlUGF0aCwgY29udGVudCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVEaXJlY3RvcnkoZGlyZWN0b3J5UGF0aCwgcmVjdXJzaXZlID0gdHJ1ZSkge1xuICBjb25zdCBvcHRpb25zID0ge1xuICAgIHJlY3Vyc2l2ZVxuICB9O1xuXG4gIGZzLm1rZGlyU3luYyhkaXJlY3RvcnlQYXRoLCBvcHRpb25zKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUZpbGUoZmlsZVBhdGgpIHtcbiAgY29uc3QgY29udGVudCA9IEVNUFRZX1NUUklORztcblxuICBmcy53cml0ZUZpbGVTeW5jKGZpbGVQYXRoLCBjb250ZW50KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1vdmVFbnRyeShvbGRFbnRyeVBhdGgsIG5ld0VudHJ5UGF0aCkge1xuICBlbnN1cmVQYXJlbnREaXJlY3RvcnlFeGlzdHMobmV3RW50cnlQYXRoKTtcblxuICByZW5hbWVFbnRyeShvbGRFbnRyeVBhdGgsIG5ld0VudHJ5UGF0aCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVFbnRyeShlbnRyeVBhdGgpIHtcbiAgY29uc3QgZm9yY2UgPSB0cnVlLFxuICAgICAgICByZWN1cnNpdmUgPSB0cnVlLFxuICAgICAgICBvcHRpb25zID0ge1xuICAgICAgICAgIGZvcmNlLFxuICAgICAgICAgIHJlY3Vyc2l2ZVxuICAgICAgICB9O1xuXG4gIGZzLnJtU3luYyhlbnRyeVBhdGgsIG9wdGlvbnMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuYW1lRW50cnkob2xkRW50cnlQYXRoLCBuZXdFbnRyeVBhdGgpIHtcbiAgZnMucmVuYW1lU3luYyhvbGRFbnRyeVBhdGgsIG5ld0VudHJ5UGF0aCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZ2V0RW50cnlTdGF0cyxcbiAgY2hlY2tFbnRyeUV4aXN0cyxcbiAgY2hlY2tGaWxlRXhpc3RzLFxuICBjaGVja0RpcmVjdG9yeUV4aXN0cyxcbiAgaXNFbnRyeUZpbGUsXG4gIGlzRW50cnlEaXJlY3RvcnksXG4gIGlzRGlyZWN0b3J5RW1wdHksXG4gIHJlYWREaXJlY3RvcnksXG4gIGNvcHlGaWxlLFxuICByZWFkRmlsZSxcbiAgd3JpdGVGaWxlLFxuICBhcHBlbmRUb0ZpbGUsXG4gIGNyZWF0ZURpcmVjdG9yeSxcbiAgY3JlYXRlRmlsZSxcbiAgbW92ZUVudHJ5LFxuICByZW5hbWVFbnRyeSxcbiAgcmVtb3ZlRW50cnlcbn07XG5cbmZ1bmN0aW9uIGVuc3VyZVBhcmVudERpcmVjdG9yeUV4aXN0cyhlbnRyeVBhdGgpIHtcbiAgY29uc3QgcGFyZW50RGlyZWN0b3J5UGF0aCA9IHBhdGguZGlybmFtZShlbnRyeVBhdGgpLCAvLy9cbiAgICAgICAgcGFyZW50RGlyZWN0b3J5RXhpc3RzID0gY2hlY2tEaXJlY3RvcnlFeGlzdHMocGFyZW50RGlyZWN0b3J5UGF0aCk7XG5cbiAgaWYgKCFwYXJlbnREaXJlY3RvcnlFeGlzdHMpIHtcbiAgICBjb25zdCByZWN1cnNpdmUgPSB0cnVlO1xuXG4gICAgY3JlYXRlRGlyZWN0b3J5KHBhcmVudERpcmVjdG9yeVBhdGgsIHJlY3Vyc2l2ZSk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJhcHBlbmRUb0ZpbGUiLCJjaGVja0RpcmVjdG9yeUV4aXN0cyIsImNoZWNrRW50cnlFeGlzdHMiLCJjaGVja0ZpbGVFeGlzdHMiLCJjb3B5RmlsZSIsImNyZWF0ZURpcmVjdG9yeSIsImNyZWF0ZUZpbGUiLCJnZXRFbnRyeVN0YXRzIiwiaXNEaXJlY3RvcnlFbXB0eSIsImlzRW50cnlEaXJlY3RvcnkiLCJpc0VudHJ5RmlsZSIsIm1vdmVFbnRyeSIsInJlYWREaXJlY3RvcnkiLCJyZWFkRmlsZSIsInJlbW92ZUVudHJ5IiwicmVuYW1lRW50cnkiLCJ3cml0ZUZpbGUiLCJlbnRyeVBhdGgiLCJlbnRyeVN0YXRzIiwiZnMiLCJzdGF0U3luYyIsImVudHJ5RXhpc3RzIiwiZXhpc3RzU3luYyIsImZpbGVQYXRoIiwiZmlsZUV4aXN0cyIsImVudHJ5RmlsZSIsImRpcmVjdG9yeVBhdGgiLCJkaXJlY3RvcnlFeGlzdHMiLCJlbnRyeURpcmVjdG9yeSIsInN0YXRzIiwiaXNGaWxlIiwiaXNEaXJlY3RvcnkiLCJzdWJFbnRyeU5hbWVzIiwic3ViRW50cnlOYW1lc0xlbmd0aCIsImxlbmd0aCIsImRpcmVjdG9yeUVtcHR5IiwicmVhZGRpclN5bmMiLCJlbmNvZGluZyIsIkRFRkFVTFRfRU5DT0RJTkciLCJvcHRpb25zIiwiY29udGVudCIsInJlYWRGaWxlU3luYyIsInNvdXJjZUZpbGVQYXRoIiwidGFyZ2V0RmlsZXBhdGgiLCJjb3B5RmlsZVN5bmMiLCJ3cml0ZUZpbGVTeW5jIiwiYXBwZW5kRmlsZVN5bmMiLCJyZWN1cnNpdmUiLCJta2RpclN5bmMiLCJFTVBUWV9TVFJJTkciLCJvbGRFbnRyeVBhdGgiLCJuZXdFbnRyeVBhdGgiLCJlbnN1cmVQYXJlbnREaXJlY3RvcnlFeGlzdHMiLCJmb3JjZSIsInJtU3luYyIsInJlbmFtZVN5bmMiLCJwYXJlbnREaXJlY3RvcnlQYXRoIiwicGF0aCIsImRpcm5hbWUiLCJwYXJlbnREaXJlY3RvcnlFeGlzdHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQW1HZ0JBLFlBQVk7ZUFBWkE7O0lBOURBQyxvQkFBb0I7ZUFBcEJBOztJQXZCQUMsZ0JBQWdCO2VBQWhCQTs7SUFNQUMsZUFBZTtlQUFmQTs7SUF1RUFDLFFBQVE7ZUFBUkE7O0lBWUFDLGVBQWU7ZUFBZkE7O0lBUUFDLFVBQVU7ZUFBVkE7O0lBMkJoQixPQWtCRTtlQWxCRjs7SUFsSWdCQyxhQUFhO2VBQWJBOztJQTREQUMsZ0JBQWdCO2VBQWhCQTs7SUFQQUMsZ0JBQWdCO2VBQWhCQTs7SUFQQUMsV0FBVztlQUFYQTs7SUErREFDLFNBQVM7ZUFBVEE7O0lBekNBQyxhQUFhO2VBQWJBOztJQU1BQyxRQUFRO2VBQVJBOztJQXlDQUMsV0FBVztlQUFYQTs7SUFXQUMsV0FBVztlQUFYQTs7SUF2Q0FDLFNBQVM7ZUFBVEE7Ozt5REE3RkQ7MkRBQ0U7eUJBRVk7d0JBQ0k7Ozs7OztBQUUxQixTQUFTVCxjQUFjVSxTQUFTO0lBQ3JDLElBQU1DLGFBQWFDLFdBQUUsQ0FBQ0MsUUFBUSxDQUFDSDtJQUUvQixPQUFPQztBQUNUO0FBRU8sU0FBU2hCLGlCQUFpQmUsU0FBUztJQUN4QyxJQUFNSSxjQUFjRixXQUFFLENBQUNHLFVBQVUsQ0FBQ0w7SUFFbEMsT0FBT0k7QUFDVDtBQUVPLFNBQVNsQixnQkFBZ0JvQixRQUFRO0lBQ3RDLElBQUlDLGFBQWE7SUFFakIsSUFBTVAsWUFBWU0sVUFDWkYsY0FBY25CLGlCQUFpQmU7SUFFckMsSUFBSUksYUFBYTtRQUNmLElBQU1JLFlBQVlmLFlBQVlPO1FBRTlCLElBQUlRLFdBQVc7WUFDYkQsYUFB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
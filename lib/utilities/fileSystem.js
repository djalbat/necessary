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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZmlsZVN5c3RlbS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGZzIGZyb20gXCJmc1wiO1xuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgREVGQVVMVF9FTkNPRElORyB9IGZyb20gXCIuLi9kZWZhdWx0c1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RW50cnlTdGF0cyhlbnRyeVBhdGgpIHtcbiAgY29uc3QgZW50cnlTdGF0cyA9IGZzLnN0YXRTeW5jKGVudHJ5UGF0aCk7XG5cbiAgcmV0dXJuIGVudHJ5U3RhdHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGVja0VudHJ5RXhpc3RzKGVudHJ5UGF0aCkge1xuICBjb25zdCBlbnRyeUV4aXN0cyA9IGZzLmV4aXN0c1N5bmMoZW50cnlQYXRoKTtcblxuICByZXR1cm4gZW50cnlFeGlzdHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGVja0ZpbGVFeGlzdHMoZmlsZVBhdGgpIHtcbiAgbGV0IGZpbGVFeGlzdHMgPSBmYWxzZTtcbiAgXG4gIGNvbnN0IGVudHJ5UGF0aCA9IGZpbGVQYXRoLCAvLy9cbiAgICAgICAgZW50cnlFeGlzdHMgPSBjaGVja0VudHJ5RXhpc3RzKGVudHJ5UGF0aCk7XG4gIFxuICBpZiAoZW50cnlFeGlzdHMpIHtcbiAgICBjb25zdCBlbnRyeUZpbGUgPSBpc0VudHJ5RmlsZShlbnRyeVBhdGgpO1xuICAgIFxuICAgIGlmIChlbnRyeUZpbGUpIHtcbiAgICAgIGZpbGVFeGlzdHMgPSB0cnVlO1xuICAgIH1cbiAgfVxuICBcbiAgcmV0dXJuIGZpbGVFeGlzdHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGVja0RpcmVjdG9yeUV4aXN0cyhkaXJlY3RvcnlQYXRoKSB7XG4gIGxldCBkaXJlY3RvcnlFeGlzdHMgPSBmYWxzZTtcblxuICBjb25zdCBlbnRyeVBhdGggPSBkaXJlY3RvcnlQYXRoLCAvLy9cbiAgICAgICAgZW50cnlFeGlzdHMgPSBjaGVja0VudHJ5RXhpc3RzKGVudHJ5UGF0aCk7XG5cbiAgaWYgKGVudHJ5RXhpc3RzKSB7XG4gICAgY29uc3QgZW50cnlEaXJlY3RvcnkgPSBpc0VudHJ5RGlyZWN0b3J5KGVudHJ5UGF0aCk7XG5cbiAgICBpZiAoZW50cnlEaXJlY3RvcnkpIHtcbiAgICAgIGRpcmVjdG9yeUV4aXN0cyA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRpcmVjdG9yeUV4aXN0cztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRW50cnlGaWxlKGVudHJ5UGF0aCkge1xuICBjb25zdCBzdGF0cyA9IGdldEVudHJ5U3RhdHMoZW50cnlQYXRoKSxcbiAgICAgICAgZW50cnlGaWxlID0gc3RhdHMuaXNGaWxlKCk7IC8vL1xuXG4gIHJldHVybiBlbnRyeUZpbGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0VudHJ5RGlyZWN0b3J5KGVudHJ5UGF0aCkge1xuICBjb25zdCBzdGF0cyA9IGdldEVudHJ5U3RhdHMoZW50cnlQYXRoKSxcbiAgICAgICAgZW50cnlEaXJlY3RvcnkgPSBzdGF0cy5pc0RpcmVjdG9yeSgpOyAvLy9cblxuICByZXR1cm4gZW50cnlEaXJlY3Rvcnk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0RpcmVjdG9yeUVtcHR5KGRpcmVjdG9yeVBhdGgpIHtcbiAgY29uc3Qgc3ViRW50cnlOYW1lcyA9IHJlYWREaXJlY3RvcnkoZGlyZWN0b3J5UGF0aCksXG4gICAgICAgIHN1YkVudHJ5TmFtZXNMZW5ndGggPSBzdWJFbnRyeU5hbWVzLmxlbmd0aCxcbiAgICAgICAgZGlyZWN0b3J5RW1wdHkgPSAoc3ViRW50cnlOYW1lc0xlbmd0aCA9PT0gMCk7XG5cbiAgcmV0dXJuIGRpcmVjdG9yeUVtcHR5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVhZERpcmVjdG9yeShkaXJlY3RvcnlQYXRoKSB7XG4gIGNvbnN0IHN1YkVudHJ5TmFtZXMgPSBmcy5yZWFkZGlyU3luYyhkaXJlY3RvcnlQYXRoKTtcblxuICByZXR1cm4gc3ViRW50cnlOYW1lcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlYWRGaWxlKGZpbGVQYXRoLCBlbmNvZGluZyA9IERFRkFVTFRfRU5DT0RJTkcpIHtcbiAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICBlbmNvZGluZ1xuICAgICAgICB9LFxuICAgICAgICBjb250ZW50ID0gZnMucmVhZEZpbGVTeW5jKGZpbGVQYXRoLCBvcHRpb25zKTtcblxuICByZXR1cm4gY29udGVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHdyaXRlRmlsZShmaWxlUGF0aCwgY29udGVudCkge1xuICBmcy53cml0ZUZpbGVTeW5jKGZpbGVQYXRoLCBjb250ZW50KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFwcGVuZFRvRmlsZShmaWxlUGF0aCwgY29udGVudCkge1xuICBmcy5hcHBlbmRGaWxlU3luYyhmaWxlUGF0aCwgY29udGVudCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVEaXJlY3RvcnkoZGlyZWN0b3J5UGF0aCwgcmVjdXJzaXZlID0gdHJ1ZSkge1xuICBjb25zdCBvcHRpb25zID0ge1xuICAgIHJlY3Vyc2l2ZVxuICB9O1xuXG4gIGZzLm1rZGlyU3luYyhkaXJlY3RvcnlQYXRoLCBvcHRpb25zKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUZpbGUoZmlsZVBhdGgpIHtcbiAgY29uc3QgY29udGVudCA9IEVNUFRZX1NUUklORztcblxuICBmcy53cml0ZUZpbGVTeW5jKGZpbGVQYXRoLCBjb250ZW50KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1vdmVFbnRyeShvbGRFbnRyeVBhdGgsIG5ld0VudHJ5UGF0aCkge1xuICBlbnN1cmVQYXJlbnREaXJlY3RvcnlFeGlzdHMobmV3RW50cnlQYXRoKTtcblxuICByZW5hbWVFbnRyeShvbGRFbnRyeVBhdGgsIG5ld0VudHJ5UGF0aCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVFbnRyeShlbnRyeVBhdGgpIHtcbiAgY29uc3QgZm9yY2UgPSB0cnVlLFxuICAgICAgICByZWN1cnNpdmUgPSB0cnVlLFxuICAgICAgICBvcHRpb25zID0ge1xuICAgICAgICAgIGZvcmNlLFxuICAgICAgICAgIHJlY3Vyc2l2ZVxuICAgICAgICB9O1xuXG4gIGZzLnJtU3luYyhlbnRyeVBhdGgsIG9wdGlvbnMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuYW1lRW50cnkob2xkRW50cnlQYXRoLCBuZXdFbnRyeVBhdGgpIHtcbiAgZnMucmVuYW1lU3luYyhvbGRFbnRyeVBhdGgsIG5ld0VudHJ5UGF0aCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZ2V0RW50cnlTdGF0cyxcbiAgY2hlY2tFbnRyeUV4aXN0cyxcbiAgY2hlY2tGaWxlRXhpc3RzLFxuICBjaGVja0RpcmVjdG9yeUV4aXN0cyxcbiAgaXNFbnRyeUZpbGUsXG4gIGlzRW50cnlEaXJlY3RvcnksXG4gIGlzRGlyZWN0b3J5RW1wdHksXG4gIHJlYWREaXJlY3RvcnksXG4gIHJlYWRGaWxlLFxuICB3cml0ZUZpbGUsXG4gIGFwcGVuZFRvRmlsZSxcbiAgY3JlYXRlRGlyZWN0b3J5LFxuICBjcmVhdGVGaWxlLFxuICBtb3ZlRW50cnksXG4gIHJlbmFtZUVudHJ5LFxuICByZW1vdmVFbnRyeVxufTtcblxuZnVuY3Rpb24gZW5zdXJlUGFyZW50RGlyZWN0b3J5RXhpc3RzKGVudHJ5UGF0aCkge1xuICBjb25zdCBwYXJlbnREaXJlY3RvcnlQYXRoID0gcGF0aC5kaXJuYW1lKGVudHJ5UGF0aCksIC8vL1xuICAgICAgICBwYXJlbnREaXJlY3RvcnlFeGlzdHMgPSBjaGVja0RpcmVjdG9yeUV4aXN0cyhwYXJlbnREaXJlY3RvcnlQYXRoKTtcblxuICBpZiAoIXBhcmVudERpcmVjdG9yeUV4aXN0cykge1xuICAgIGNvbnN0IHJlY3Vyc2l2ZSA9IHRydWU7XG5cbiAgICBjcmVhdGVEaXJlY3RvcnkocGFyZW50RGlyZWN0b3J5UGF0aCwgcmVjdXJzaXZlKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbImFwcGVuZFRvRmlsZSIsImNoZWNrRGlyZWN0b3J5RXhpc3RzIiwiY2hlY2tFbnRyeUV4aXN0cyIsImNoZWNrRmlsZUV4aXN0cyIsImNyZWF0ZURpcmVjdG9yeSIsImNyZWF0ZUZpbGUiLCJnZXRFbnRyeVN0YXRzIiwiaXNEaXJlY3RvcnlFbXB0eSIsImlzRW50cnlEaXJlY3RvcnkiLCJpc0VudHJ5RmlsZSIsIm1vdmVFbnRyeSIsInJlYWREaXJlY3RvcnkiLCJyZWFkRmlsZSIsInJlbW92ZUVudHJ5IiwicmVuYW1lRW50cnkiLCJ3cml0ZUZpbGUiLCJlbnRyeVBhdGgiLCJlbnRyeVN0YXRzIiwiZnMiLCJzdGF0U3luYyIsImVudHJ5RXhpc3RzIiwiZXhpc3RzU3luYyIsImZpbGVQYXRoIiwiZmlsZUV4aXN0cyIsImVudHJ5RmlsZSIsImRpcmVjdG9yeVBhdGgiLCJkaXJlY3RvcnlFeGlzdHMiLCJlbnRyeURpcmVjdG9yeSIsInN0YXRzIiwiaXNGaWxlIiwiaXNEaXJlY3RvcnkiLCJzdWJFbnRyeU5hbWVzIiwic3ViRW50cnlOYW1lc0xlbmd0aCIsImxlbmd0aCIsImRpcmVjdG9yeUVtcHR5IiwicmVhZGRpclN5bmMiLCJlbmNvZGluZyIsIkRFRkFVTFRfRU5DT0RJTkciLCJvcHRpb25zIiwiY29udGVudCIsInJlYWRGaWxlU3luYyIsIndyaXRlRmlsZVN5bmMiLCJhcHBlbmRGaWxlU3luYyIsInJlY3Vyc2l2ZSIsIm1rZGlyU3luYyIsIkVNUFRZX1NUUklORyIsIm9sZEVudHJ5UGF0aCIsIm5ld0VudHJ5UGF0aCIsImVuc3VyZVBhcmVudERpcmVjdG9yeUV4aXN0cyIsImZvcmNlIiwicm1TeW5jIiwicmVuYW1lU3luYyIsInBhcmVudERpcmVjdG9yeVBhdGgiLCJwYXRoIiwiZGlybmFtZSIsInBhcmVudERpcmVjdG9yeUV4aXN0cyJdLCJtYXBwaW5n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
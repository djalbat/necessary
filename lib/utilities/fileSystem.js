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
function copyFile(sourceFilePath, destinationFilepath) {
    _fs.default.copyFileSync(sourceFilePath, destinationFilepath);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZmlsZVN5c3RlbS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGZzIGZyb20gXCJmc1wiO1xuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgREVGQVVMVF9FTkNPRElORyB9IGZyb20gXCIuLi9kZWZhdWx0c1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RW50cnlTdGF0cyhlbnRyeVBhdGgpIHtcbiAgY29uc3QgZW50cnlTdGF0cyA9IGZzLnN0YXRTeW5jKGVudHJ5UGF0aCk7XG5cbiAgcmV0dXJuIGVudHJ5U3RhdHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGVja0VudHJ5RXhpc3RzKGVudHJ5UGF0aCkge1xuICBjb25zdCBlbnRyeUV4aXN0cyA9IGZzLmV4aXN0c1N5bmMoZW50cnlQYXRoKTtcblxuICByZXR1cm4gZW50cnlFeGlzdHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGVja0ZpbGVFeGlzdHMoZmlsZVBhdGgpIHtcbiAgbGV0IGZpbGVFeGlzdHMgPSBmYWxzZTtcbiAgXG4gIGNvbnN0IGVudHJ5UGF0aCA9IGZpbGVQYXRoLCAvLy9cbiAgICAgICAgZW50cnlFeGlzdHMgPSBjaGVja0VudHJ5RXhpc3RzKGVudHJ5UGF0aCk7XG4gIFxuICBpZiAoZW50cnlFeGlzdHMpIHtcbiAgICBjb25zdCBlbnRyeUZpbGUgPSBpc0VudHJ5RmlsZShlbnRyeVBhdGgpO1xuICAgIFxuICAgIGlmIChlbnRyeUZpbGUpIHtcbiAgICAgIGZpbGVFeGlzdHMgPSB0cnVlO1xuICAgIH1cbiAgfVxuICBcbiAgcmV0dXJuIGZpbGVFeGlzdHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGVja0RpcmVjdG9yeUV4aXN0cyhkaXJlY3RvcnlQYXRoKSB7XG4gIGxldCBkaXJlY3RvcnlFeGlzdHMgPSBmYWxzZTtcblxuICBjb25zdCBlbnRyeVBhdGggPSBkaXJlY3RvcnlQYXRoLCAvLy9cbiAgICAgICAgZW50cnlFeGlzdHMgPSBjaGVja0VudHJ5RXhpc3RzKGVudHJ5UGF0aCk7XG5cbiAgaWYgKGVudHJ5RXhpc3RzKSB7XG4gICAgY29uc3QgZW50cnlEaXJlY3RvcnkgPSBpc0VudHJ5RGlyZWN0b3J5KGVudHJ5UGF0aCk7XG5cbiAgICBpZiAoZW50cnlEaXJlY3RvcnkpIHtcbiAgICAgIGRpcmVjdG9yeUV4aXN0cyA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRpcmVjdG9yeUV4aXN0cztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRW50cnlGaWxlKGVudHJ5UGF0aCkge1xuICBjb25zdCBzdGF0cyA9IGdldEVudHJ5U3RhdHMoZW50cnlQYXRoKSxcbiAgICAgICAgZW50cnlGaWxlID0gc3RhdHMuaXNGaWxlKCk7IC8vL1xuXG4gIHJldHVybiBlbnRyeUZpbGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0VudHJ5RGlyZWN0b3J5KGVudHJ5UGF0aCkge1xuICBjb25zdCBzdGF0cyA9IGdldEVudHJ5U3RhdHMoZW50cnlQYXRoKSxcbiAgICAgICAgZW50cnlEaXJlY3RvcnkgPSBzdGF0cy5pc0RpcmVjdG9yeSgpOyAvLy9cblxuICByZXR1cm4gZW50cnlEaXJlY3Rvcnk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0RpcmVjdG9yeUVtcHR5KGRpcmVjdG9yeVBhdGgpIHtcbiAgY29uc3Qgc3ViRW50cnlOYW1lcyA9IHJlYWREaXJlY3RvcnkoZGlyZWN0b3J5UGF0aCksXG4gICAgICAgIHN1YkVudHJ5TmFtZXNMZW5ndGggPSBzdWJFbnRyeU5hbWVzLmxlbmd0aCxcbiAgICAgICAgZGlyZWN0b3J5RW1wdHkgPSAoc3ViRW50cnlOYW1lc0xlbmd0aCA9PT0gMCk7XG5cbiAgcmV0dXJuIGRpcmVjdG9yeUVtcHR5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVhZERpcmVjdG9yeShkaXJlY3RvcnlQYXRoKSB7XG4gIGNvbnN0IHN1YkVudHJ5TmFtZXMgPSBmcy5yZWFkZGlyU3luYyhkaXJlY3RvcnlQYXRoKTtcblxuICByZXR1cm4gc3ViRW50cnlOYW1lcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlYWRGaWxlKGZpbGVQYXRoLCBlbmNvZGluZyA9IERFRkFVTFRfRU5DT0RJTkcpIHtcbiAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICBlbmNvZGluZ1xuICAgICAgICB9LFxuICAgICAgICBjb250ZW50ID0gZnMucmVhZEZpbGVTeW5jKGZpbGVQYXRoLCBvcHRpb25zKTtcblxuICByZXR1cm4gY29udGVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvcHlGaWxlKHNvdXJjZUZpbGVQYXRoLCBkZXN0aW5hdGlvbkZpbGVwYXRoKSB7XG4gIGZzLmNvcHlGaWxlU3luYyhzb3VyY2VGaWxlUGF0aCwgZGVzdGluYXRpb25GaWxlcGF0aCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB3cml0ZUZpbGUoZmlsZVBhdGgsIGNvbnRlbnQpIHtcbiAgZnMud3JpdGVGaWxlU3luYyhmaWxlUGF0aCwgY29udGVudCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBlbmRUb0ZpbGUoZmlsZVBhdGgsIGNvbnRlbnQpIHtcbiAgZnMuYXBwZW5kRmlsZVN5bmMoZmlsZVBhdGgsIGNvbnRlbnQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRGlyZWN0b3J5KGRpcmVjdG9yeVBhdGgsIHJlY3Vyc2l2ZSA9IHRydWUpIHtcbiAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICByZWN1cnNpdmVcbiAgfTtcblxuICBmcy5ta2RpclN5bmMoZGlyZWN0b3J5UGF0aCwgb3B0aW9ucyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVGaWxlKGZpbGVQYXRoKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBFTVBUWV9TVFJJTkc7XG5cbiAgZnMud3JpdGVGaWxlU3luYyhmaWxlUGF0aCwgY29udGVudCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtb3ZlRW50cnkob2xkRW50cnlQYXRoLCBuZXdFbnRyeVBhdGgpIHtcbiAgZW5zdXJlUGFyZW50RGlyZWN0b3J5RXhpc3RzKG5ld0VudHJ5UGF0aCk7XG5cbiAgcmVuYW1lRW50cnkob2xkRW50cnlQYXRoLCBuZXdFbnRyeVBhdGgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlRW50cnkoZW50cnlQYXRoKSB7XG4gIGNvbnN0IGZvcmNlID0gdHJ1ZSxcbiAgICAgICAgcmVjdXJzaXZlID0gdHJ1ZSxcbiAgICAgICAgb3B0aW9ucyA9IHtcbiAgICAgICAgICBmb3JjZSxcbiAgICAgICAgICByZWN1cnNpdmVcbiAgICAgICAgfTtcblxuICBmcy5ybVN5bmMoZW50cnlQYXRoLCBvcHRpb25zKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmFtZUVudHJ5KG9sZEVudHJ5UGF0aCwgbmV3RW50cnlQYXRoKSB7XG4gIGZzLnJlbmFtZVN5bmMob2xkRW50cnlQYXRoLCBuZXdFbnRyeVBhdGgpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGdldEVudHJ5U3RhdHMsXG4gIGNoZWNrRW50cnlFeGlzdHMsXG4gIGNoZWNrRmlsZUV4aXN0cyxcbiAgY2hlY2tEaXJlY3RvcnlFeGlzdHMsXG4gIGlzRW50cnlGaWxlLFxuICBpc0VudHJ5RGlyZWN0b3J5LFxuICBpc0RpcmVjdG9yeUVtcHR5LFxuICByZWFkRGlyZWN0b3J5LFxuICBjb3B5RmlsZSxcbiAgcmVhZEZpbGUsXG4gIHdyaXRlRmlsZSxcbiAgYXBwZW5kVG9GaWxlLFxuICBjcmVhdGVEaXJlY3RvcnksXG4gIGNyZWF0ZUZpbGUsXG4gIG1vdmVFbnRyeSxcbiAgcmVuYW1lRW50cnksXG4gIHJlbW92ZUVudHJ5XG59O1xuXG5mdW5jdGlvbiBlbnN1cmVQYXJlbnREaXJlY3RvcnlFeGlzdHMoZW50cnlQYXRoKSB7XG4gIGNvbnN0IHBhcmVudERpcmVjdG9yeVBhdGggPSBwYXRoLmRpcm5hbWUoZW50cnlQYXRoKSwgLy8vXG4gICAgICAgIHBhcmVudERpcmVjdG9yeUV4aXN0cyA9IGNoZWNrRGlyZWN0b3J5RXhpc3RzKHBhcmVudERpcmVjdG9yeVBhdGgpO1xuXG4gIGlmICghcGFyZW50RGlyZWN0b3J5RXhpc3RzKSB7XG4gICAgY29uc3QgcmVjdXJzaXZlID0gdHJ1ZTtcblxuICAgIGNyZWF0ZURpcmVjdG9yeShwYXJlbnREaXJlY3RvcnlQYXRoLCByZWN1cnNpdmUpO1xuICB9XG59XG4iXSwibmFtZXMiOlsiYXBwZW5kVG9GaWxlIiwiY2hlY2tEaXJlY3RvcnlFeGlzdHMiLCJjaGVja0VudHJ5RXhpc3RzIiwiY2hlY2tGaWxlRXhpc3RzIiwiY29weUZpbGUiLCJjcmVhdGVEaXJlY3RvcnkiLCJjcmVhdGVGaWxlIiwiZ2V0RW50cnlTdGF0cyIsImlzRGlyZWN0b3J5RW1wdHkiLCJpc0VudHJ5RGlyZWN0b3J5IiwiaXNFbnRyeUZpbGUiLCJtb3ZlRW50cnkiLCJyZWFkRGlyZWN0b3J5IiwicmVhZEZpbGUiLCJyZW1vdmVFbnRyeSIsInJlbmFtZUVudHJ5Iiwid3JpdGVGaWxlIiwiZW50cnlQYXRoIiwiZW50cnlTdGF0cyIsImZzIiwic3RhdFN5bmMiLCJlbnRyeUV4aXN0cyIsImV4aXN0c1N5bmMiLCJmaWxlUGF0aCIsImZpbGVFeGlzdHMiLCJlbnRyeUZpbGUiLCJkaXJlY3RvcnlQYXRoIiwiZGlyZWN0b3J5RXhpc3RzIiwiZW50cnlEaXJlY3RvcnkiLCJzdGF0cyIsImlzRmlsZSIsImlzRGlyZWN0b3J5Iiwic3ViRW50cnlOYW1lcyIsInN1YkVudHJ5TmFtZXNMZW5ndGgiLCJsZW5ndGgiLCJkaXJlY3RvcnlFbXB0eSIsInJlYWRkaXJTeW5jIiwiZW5jb2RpbmciLCJERUZBVUxUX0VOQ09ESU5HIiwib3B0aW9ucyIsImNvbnRlbnQiLCJyZWFkRmlsZVN5bmMiLCJzb3VyY2VGaWxlUGF0aCIsImRlc3RpbmF0aW9uRmlsZXBhdGgiLCJjb3B5RmlsZVN5bmMiLCJ3cml0ZUZpbGVTeW5jIiwiYXBwZW5kRmlsZVN5bmMiLCJyZWN1cnNpdmUiLCJta2RpclN5bmMiLCJFTVBUWV9TVFJJTkciLCJvbGRFbnRyeVBhdGgiLCJuZXdFbnRyeVBhdGgiLCJlbnN1cmVQYXJlbnREaXJlY3RvcnlFeGlzdHMiLCJmb3JjZSIsInJtU3luYyIsInJlbmFtZVN5bmMiLCJwYXJlbnREaXJlY3RvcnlQYXRoIiwicGF0aCIsImRpcm5hbWUiLCJwYXJlbnREaXJlY3RvcnlFeGlzdHMiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBbUdnQkEsWUFBWTtlQUFaQTs7SUE5REFDLG9CQUFvQjtlQUFwQkE7O0lBdkJBQyxnQkFBZ0I7ZUFBaEJBOztJQU1BQyxlQUFlO2VBQWZBOztJQXVFQUMsUUFBUTtlQUFSQTs7SUFZQUMsZUFBZTtlQUFmQTs7SUFRQUMsVUFBVTtlQUFWQTs7SUEyQmhCLE9Ba0JFO2VBbEJGOztJQWxJZ0JDLGFBQWE7ZUFBYkE7O0lBNERBQyxnQkFBZ0I7ZUFBaEJBOztJQVBBQyxnQkFBZ0I7ZUFBaEJBOztJQVBBQyxXQUFXO2VBQVhBOztJQStEQUMsU0FBUztlQUFUQTs7SUF6Q0FDLGFBQWE7ZUFBYkE7O0lBTUFDLFFBQVE7ZUFBUkE7O0lBeUNBQyxXQUFXO2VBQVhBOztJQVdBQyxXQUFXO2VBQVhBOztJQXZDQUMsU0FBUztlQUFUQTs7O3lEQTdGRDsyREFDRTt5QkFFWTt3QkFDSTs7Ozs7O0FBRTFCLFNBQVNULGNBQWNVLFNBQVM7SUFDckMsSUFBTUMsYUFBYUMsV0FBRSxDQUFDQyxRQUFRLENBQUNIO0lBRS9CLE9BQU9DO0FBQ1Q7QUFFTyxTQUFT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
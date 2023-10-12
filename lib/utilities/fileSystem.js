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
    checkEntryExists: function() {
        return checkEntryExists;
    },
    checkFileExists: function() {
        return checkFileExists;
    },
    checkDirectoryExists: function() {
        return checkDirectoryExists;
    },
    isEntryFile: function() {
        return isEntryFile;
    },
    isEntryDirectory: function() {
        return isEntryDirectory;
    },
    isDirectoryEmpty: function() {
        return isDirectoryEmpty;
    },
    readDirectory: function() {
        return readDirectory;
    },
    readFile: function() {
        return readFile;
    },
    writeFile: function() {
        return writeFile;
    },
    appendToFile: function() {
        return appendToFile;
    },
    createDirectory: function() {
        return createDirectory;
    },
    renameDirectory: function() {
        return renameDirectory;
    },
    moveDirectory: function() {
        return moveDirectory;
    },
    createFile: function() {
        return createFile;
    },
    renameFile: function() {
        return renameFile;
    },
    moveFile: function() {
        return moveFile;
    },
    removeEntry: function() {
        return removeEntry;
    },
    getStats: function() {
        return getStats;
    },
    default: function() {
        return _default;
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
    var stat = _fs.default.statSync(entryPath), entryDirectory = stat.isDirectory(), entryFile = !entryDirectory;
    return entryFile;
}
function isEntryDirectory(entryPath) {
    var stat = _fs.default.statSync(entryPath), entryDirectory = stat.isDirectory();
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
function renameDirectory(oldDirectoryPath, newDirectoryPath) {
    _fs.default.renameSync(oldDirectoryPath, newDirectoryPath);
}
function moveDirectory(oldDirectoryPath, newDirectoryPath) {
    ensureParentDirectoryExists(newDirectoryPath);
    renameDirectory(oldDirectoryPath, newDirectoryPath);
}
function createFile(filePath) {
    var content = _constants.EMPTY_STRING;
    _fs.default.writeFileSync(filePath, content);
}
function renameFile(oldFilePath, newFilePath) {
    _fs.default.renameSync(oldFilePath, newFilePath);
}
function moveFile(oldFilePath, newFilePath) {
    ensureParentFileExists(newFilePath);
    renameFile(oldFilePath, newFilePath);
}
function removeEntry(entryPath) {
    var force = true, recursive = true, options = {
        force: force,
        recursive: recursive
    };
    _fs.default.rmSync(entryPath, options);
}
function getStats(filePath) {
    return _fs.default.statSync(filePath);
}
var _default = {
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
    renameDirectory: renameDirectory,
    moveDirectory: moveDirectory,
    createFile: createFile,
    renameFile: renameFile,
    moveFile: moveFile,
    removeEntry: removeEntry,
    getStats: getStats
};
function ensureParentDirectoryExists(filePath) {
    var parentDirectoryPath = _path.default.dirname(filePath), parentDirectoryExists = checkDirectoryExists(parentDirectoryPath);
    if (!parentDirectoryExists) {
        createDirectory(parentDirectoryPath);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZmlsZVN5c3RlbS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGZzIGZyb20gXCJmc1wiO1xuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgREVGQVVMVF9FTkNPRElORyB9IGZyb20gXCIuLi9kZWZhdWx0c1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tFbnRyeUV4aXN0cyhlbnRyeVBhdGgpIHtcbiAgY29uc3QgZW50cnlFeGlzdHMgPSBmcy5leGlzdHNTeW5jKGVudHJ5UGF0aCk7XG5cbiAgcmV0dXJuIGVudHJ5RXhpc3RzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tGaWxlRXhpc3RzKGZpbGVQYXRoKSB7XG4gIGxldCBmaWxlRXhpc3RzID0gZmFsc2U7XG4gIFxuICBjb25zdCBlbnRyeVBhdGggPSBmaWxlUGF0aCwgLy8vXG4gICAgICAgIGVudHJ5RXhpc3RzID0gY2hlY2tFbnRyeUV4aXN0cyhlbnRyeVBhdGgpO1xuICBcbiAgaWYgKGVudHJ5RXhpc3RzKSB7XG4gICAgY29uc3QgZW50cnlGaWxlID0gaXNFbnRyeUZpbGUoZW50cnlQYXRoKTtcbiAgICBcbiAgICBpZiAoZW50cnlGaWxlKSB7XG4gICAgICBmaWxlRXhpc3RzID0gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgXG4gIHJldHVybiBmaWxlRXhpc3RzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tEaXJlY3RvcnlFeGlzdHMoZGlyZWN0b3J5UGF0aCkge1xuICBsZXQgZGlyZWN0b3J5RXhpc3RzID0gZmFsc2U7XG5cbiAgY29uc3QgZW50cnlQYXRoID0gZGlyZWN0b3J5UGF0aCwgLy8vXG4gICAgICAgIGVudHJ5RXhpc3RzID0gY2hlY2tFbnRyeUV4aXN0cyhlbnRyeVBhdGgpO1xuXG4gIGlmIChlbnRyeUV4aXN0cykge1xuICAgIGNvbnN0IGVudHJ5RGlyZWN0b3J5ID0gaXNFbnRyeURpcmVjdG9yeShlbnRyeVBhdGgpO1xuXG4gICAgaWYgKGVudHJ5RGlyZWN0b3J5KSB7XG4gICAgICBkaXJlY3RvcnlFeGlzdHMgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBkaXJlY3RvcnlFeGlzdHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0VudHJ5RmlsZShlbnRyeVBhdGgpIHtcbiAgY29uc3Qgc3RhdCA9IGZzLnN0YXRTeW5jKGVudHJ5UGF0aCksXG4gICAgICAgIGVudHJ5RGlyZWN0b3J5ID0gc3RhdC5pc0RpcmVjdG9yeSgpLFxuICAgICAgICBlbnRyeUZpbGUgPSAhZW50cnlEaXJlY3Rvcnk7XG5cbiAgcmV0dXJuIGVudHJ5RmlsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRW50cnlEaXJlY3RvcnkoZW50cnlQYXRoKSB7XG4gIGNvbnN0IHN0YXQgPSBmcy5zdGF0U3luYyhlbnRyeVBhdGgpLFxuICAgICAgICBlbnRyeURpcmVjdG9yeSA9IHN0YXQuaXNEaXJlY3RvcnkoKTtcblxuICByZXR1cm4gZW50cnlEaXJlY3Rvcnk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0RpcmVjdG9yeUVtcHR5KGRpcmVjdG9yeVBhdGgpIHtcbiAgY29uc3Qgc3ViRW50cnlOYW1lcyA9IHJlYWREaXJlY3RvcnkoZGlyZWN0b3J5UGF0aCksXG4gICAgICAgIHN1YkVudHJ5TmFtZXNMZW5ndGggPSBzdWJFbnRyeU5hbWVzLmxlbmd0aCxcbiAgICAgICAgZGlyZWN0b3J5RW1wdHkgPSAoc3ViRW50cnlOYW1lc0xlbmd0aCA9PT0gMCk7XG5cbiAgcmV0dXJuIGRpcmVjdG9yeUVtcHR5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVhZERpcmVjdG9yeShkaXJlY3RvcnlQYXRoKSB7XG4gIGNvbnN0IHN1YkVudHJ5TmFtZXMgPSBmcy5yZWFkZGlyU3luYyhkaXJlY3RvcnlQYXRoKTtcblxuICByZXR1cm4gc3ViRW50cnlOYW1lcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlYWRGaWxlKGZpbGVQYXRoLCBlbmNvZGluZyA9IERFRkFVTFRfRU5DT0RJTkcpIHtcbiAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICBlbmNvZGluZ1xuICAgICAgICB9LFxuICAgICAgICBjb250ZW50ID0gZnMucmVhZEZpbGVTeW5jKGZpbGVQYXRoLCBvcHRpb25zKTtcblxuICByZXR1cm4gY29udGVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHdyaXRlRmlsZShmaWxlUGF0aCwgY29udGVudCkge1xuICBmcy53cml0ZUZpbGVTeW5jKGZpbGVQYXRoLCBjb250ZW50KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFwcGVuZFRvRmlsZShmaWxlUGF0aCwgY29udGVudCkge1xuICBmcy5hcHBlbmRGaWxlU3luYyhmaWxlUGF0aCwgY29udGVudCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVEaXJlY3RvcnkoZGlyZWN0b3J5UGF0aCwgcmVjdXJzaXZlID0gdHJ1ZSkge1xuICBjb25zdCBvcHRpb25zID0ge1xuICAgIHJlY3Vyc2l2ZVxuICB9O1xuXG4gIGZzLm1rZGlyU3luYyhkaXJlY3RvcnlQYXRoLCBvcHRpb25zKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmFtZURpcmVjdG9yeShvbGREaXJlY3RvcnlQYXRoLCBuZXdEaXJlY3RvcnlQYXRoKSB7XG4gIGZzLnJlbmFtZVN5bmMob2xkRGlyZWN0b3J5UGF0aCwgbmV3RGlyZWN0b3J5UGF0aCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtb3ZlRGlyZWN0b3J5KG9sZERpcmVjdG9yeVBhdGgsIG5ld0RpcmVjdG9yeVBhdGgpIHtcbiAgZW5zdXJlUGFyZW50RGlyZWN0b3J5RXhpc3RzKG5ld0RpcmVjdG9yeVBhdGgpO1xuXG4gIHJlbmFtZURpcmVjdG9yeShvbGREaXJlY3RvcnlQYXRoLCBuZXdEaXJlY3RvcnlQYXRoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUZpbGUoZmlsZVBhdGgpIHtcbiAgY29uc3QgY29udGVudCA9IEVNUFRZX1NUUklORztcblxuICBmcy53cml0ZUZpbGVTeW5jKGZpbGVQYXRoLCBjb250ZW50KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmFtZUZpbGUob2xkRmlsZVBhdGgsIG5ld0ZpbGVQYXRoKSB7XG4gIGZzLnJlbmFtZVN5bmMob2xkRmlsZVBhdGgsIG5ld0ZpbGVQYXRoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1vdmVGaWxlKG9sZEZpbGVQYXRoLCBuZXdGaWxlUGF0aCkge1xuICBlbnN1cmVQYXJlbnRGaWxlRXhpc3RzKG5ld0ZpbGVQYXRoKTtcblxuICByZW5hbWVGaWxlKG9sZEZpbGVQYXRoLCBuZXdGaWxlUGF0aCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVFbnRyeShlbnRyeVBhdGgpIHtcbiAgY29uc3QgZm9yY2UgPSB0cnVlLFxuICAgICAgICByZWN1cnNpdmUgPSB0cnVlLFxuICAgICAgICBvcHRpb25zID0ge1xuICAgICAgICAgIGZvcmNlLFxuICAgICAgICAgIHJlY3Vyc2l2ZVxuICAgICAgICB9O1xuXG4gIGZzLnJtU3luYyhlbnRyeVBhdGgsIG9wdGlvbnMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3RhdHMoZmlsZVBhdGgpIHtcbiAgcmV0dXJuIGZzLnN0YXRTeW5jKGZpbGVQYXRoKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBjaGVja0VudHJ5RXhpc3RzLFxuICBjaGVja0ZpbGVFeGlzdHMsXG4gIGNoZWNrRGlyZWN0b3J5RXhpc3RzLFxuICBpc0VudHJ5RmlsZSxcbiAgaXNFbnRyeURpcmVjdG9yeSxcbiAgaXNEaXJlY3RvcnlFbXB0eSxcbiAgcmVhZERpcmVjdG9yeSxcbiAgcmVhZEZpbGUsXG4gIHdyaXRlRmlsZSxcbiAgYXBwZW5kVG9GaWxlLFxuICBjcmVhdGVEaXJlY3RvcnksXG4gIHJlbmFtZURpcmVjdG9yeSxcbiAgbW92ZURpcmVjdG9yeSxcbiAgY3JlYXRlRmlsZSxcbiAgcmVuYW1lRmlsZSxcbiAgbW92ZUZpbGUsXG4gIHJlbW92ZUVudHJ5LFxuICBnZXRTdGF0c1xufTtcblxuZnVuY3Rpb24gZW5zdXJlUGFyZW50RGlyZWN0b3J5RXhpc3RzKGZpbGVQYXRoKSB7XG4gIGNvbnN0IHBhcmVudERpcmVjdG9yeVBhdGggPSBwYXRoLmRpcm5hbWUoZmlsZVBhdGgpLCAvLy9cbiAgICAgICAgcGFyZW50RGlyZWN0b3J5RXhpc3RzID0gY2hlY2tEaXJlY3RvcnlFeGlzdHMocGFyZW50RGlyZWN0b3J5UGF0aCk7XG5cbiAgaWYgKCFwYXJlbnREaXJlY3RvcnlFeGlzdHMpIHtcbiAgICBjcmVhdGVEaXJlY3RvcnkocGFyZW50RGlyZWN0b3J5UGF0aCk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJjaGVja0VudHJ5RXhpc3RzIiwiY2hlY2tGaWxlRXhpc3RzIiwiY2hlY2tEaXJlY3RvcnlFeGlzdHMiLCJpc0VudHJ5RmlsZSIsImlzRW50cnlEaXJlY3RvcnkiLCJpc0RpcmVjdG9yeUVtcHR5IiwicmVhZERpcmVjdG9yeSIsInJlYWRGaWxlIiwid3JpdGVGaWxlIiwiYXBwZW5kVG9GaWxlIiwiY3JlYXRlRGlyZWN0b3J5IiwicmVuYW1lRGlyZWN0b3J5IiwibW92ZURpcmVjdG9yeSIsImNyZWF0ZUZpbGUiLCJyZW5hbWVGaWxlIiwibW92ZUZpbGUiLCJyZW1vdmVFbnRyeSIsImdldFN0YXRzIiwiZW50cnlQYXRoIiwiZW50cnlFeGlzdHMiLCJmcyIsImV4aXN0c1N5bmMiLCJmaWxlUGF0aCIsImZpbGVFeGlzdHMiLCJlbnRyeUZpbGUiLCJkaXJlY3RvcnlQYXRoIiwiZGlyZWN0b3J5RXhpc3RzIiwiZW50cnlEaXJlY3RvcnkiLCJzdGF0Iiwic3RhdFN5bmMiLCJpc0RpcmVjdG9yeSIsInN1YkVudHJ5TmFtZXMiLCJzdWJFbnRyeU5hbWVzTGVuZ3RoIiwibGVuZ3RoIiwiZGlyZWN0b3J5RW1wdHkiLCJyZWFkZGlyU3luYyIsImVuY29kaW5nIiwiREVGQVVMVF9FTkNPRElORyIsIm9wdGlvbnMiLCJjb250ZW50IiwicmVhZEZpbGVTeW5jIiwid3JpdGVGaWxlU3luYyIsImFwcGVuZEZpbGVTeW5jIiwicmVjdXJzaXZlIiwibWtkaXJTeW5jIiwib2xkRGlyZWN0b3J5UGF0aCIsIm5ld0RpcmVjdG9yeVBhdGgiLCJyZW5hbWVTeW5jIiwiZW5zdXJlUGFyZW50RGlyZWN0b3J5RXhpc3RzIiwiRU1QVFlfU1RSSU5HIiwib2xkRmlsZVBhdGgiLCJuZXdGaWxlUGF0aCIsImVuc3VyZVBhcmVudEZpbGVFeGlzdHMiLCJmb3JjZSIsInJtU3luYyIsInBhcmVudERpcmVjdG9yeVBhdGgiLCJwYXRoIiwiZGlybmFtZSIsInBhcmVudERpcmVjdG9yeUV4aXN0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBUWdCQSxnQkFBZ0I7ZUFBaEJBOztJQU1BQyxlQUFlO2VBQWZBOztJQWlCQUMsb0JBQW9CO2VBQXBCQTs7SUFpQkFDLFdBQVc7ZUFBWEE7O0lBUUFDLGdCQUFnQjtlQUFoQkE7O0lBT0FDLGdCQUFnQjtlQUFoQkE7O0lBUUFDLGFBQWE7ZUFBYkE7O0lBTUFDLFFBQVE7ZUFBUkE7O0lBU0FDLFNBQVM7ZUFBVEE7O0lBSUFDLFlBQVk7ZUFBWkE7O0lBSUFDLGVBQWU7ZUFBZkE7O0lBUUFDLGVBQWU7ZUFBZkE7O0lBSUFDLGFBQWE7ZUFBYkE7O0lBTUFDLFVBQVU7ZUFBVkE7O0lBTUFDLFVBQVU7ZUFBVkE7O0lBSUFDLFFBQVE7ZUFBUkE7O0lBTUFDLFdBQVc7ZUFBWEE7O0lBV0FDLFFBQVE7ZUFBUkE7O0lBSWhCLE9BbUJFO2VBbkJGOzs7eURBN0llOzJEQUNFO3lCQUVZO3dCQUNJOzs7Ozs7QUFFMUIsU0FBU2pCLGlCQUFpQmtCLFNBQVM7SUFDeEMsSUFBTUMsY0FBY0MsV0FBRSxDQUFDQyxVQUFVLENBQUNIO0lBRWxDLE9BQU9DO0FBQ1Q7QUFFTyxTQUFTbEIsZ0JBQWdCcUIsUUFBUTtJQUN0QyxJQUFJQyxhQUFhO0lBRWpCLElBQU1MLFlBQVlJLFVBQ1pILGNBQWNu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
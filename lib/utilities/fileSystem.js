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
    createFile: function() {
        return createFile;
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
    renameFile: function() {
        return renameFile;
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
function createFile(filePath) {
    var content = _constants.EMPTY_STRING;
    _fs.default.writeFileSync(filePath, content);
}
function appendToFile(filePath, content) {
    _fs.default.appendFileSync(filePath, content);
}
function createDirectory(directoryPath) {
    var recursive = true, options = {
        recursive: recursive
    };
    _fs.default.mkdirSync(directoryPath, options);
}
function renameDirectory(oldDirectoryPath, newDirectoryPath) {
    _fs.default.renameSync(oldDirectoryPath, newDirectoryPath);
}
function renameFile(oldFilePath, newFilePath) {
    _fs.default.renameSync(oldFilePath, newFilePath);
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
    createFile: createFile,
    appendToFile: appendToFile,
    createDirectory: createDirectory,
    reanmeDirectory: reanmeDirectory,
    renameFile: renameFile,
    removeEntry: removeEntry,
    getStats: getStats
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZmlsZVN5c3RlbS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGZzIGZyb20gXCJmc1wiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBERUZBVUxUX0VOQ09ESU5HIH0gZnJvbSBcIi4uL2RlZmF1bHRzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGVja0VudHJ5RXhpc3RzKGVudHJ5UGF0aCkge1xuICBjb25zdCBlbnRyeUV4aXN0cyA9IGZzLmV4aXN0c1N5bmMoZW50cnlQYXRoKTtcblxuICByZXR1cm4gZW50cnlFeGlzdHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGVja0ZpbGVFeGlzdHMoZmlsZVBhdGgpIHtcbiAgbGV0IGZpbGVFeGlzdHMgPSBmYWxzZTtcbiAgXG4gIGNvbnN0IGVudHJ5UGF0aCA9IGZpbGVQYXRoLCAvLy9cbiAgICAgICAgZW50cnlFeGlzdHMgPSBjaGVja0VudHJ5RXhpc3RzKGVudHJ5UGF0aCk7XG4gIFxuICBpZiAoZW50cnlFeGlzdHMpIHtcbiAgICBjb25zdCBlbnRyeUZpbGUgPSBpc0VudHJ5RmlsZShlbnRyeVBhdGgpO1xuICAgIFxuICAgIGlmIChlbnRyeUZpbGUpIHtcbiAgICAgIGZpbGVFeGlzdHMgPSB0cnVlO1xuICAgIH1cbiAgfVxuICBcbiAgcmV0dXJuIGZpbGVFeGlzdHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGVja0RpcmVjdG9yeUV4aXN0cyhkaXJlY3RvcnlQYXRoKSB7XG4gIGxldCBkaXJlY3RvcnlFeGlzdHMgPSBmYWxzZTtcblxuICBjb25zdCBlbnRyeVBhdGggPSBkaXJlY3RvcnlQYXRoLCAvLy9cbiAgICAgICAgZW50cnlFeGlzdHMgPSBjaGVja0VudHJ5RXhpc3RzKGVudHJ5UGF0aCk7XG5cbiAgaWYgKGVudHJ5RXhpc3RzKSB7XG4gICAgY29uc3QgZW50cnlEaXJlY3RvcnkgPSBpc0VudHJ5RGlyZWN0b3J5KGVudHJ5UGF0aCk7XG5cbiAgICBpZiAoZW50cnlEaXJlY3RvcnkpIHtcbiAgICAgIGRpcmVjdG9yeUV4aXN0cyA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRpcmVjdG9yeUV4aXN0cztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRW50cnlGaWxlKGVudHJ5UGF0aCkge1xuICBjb25zdCBzdGF0ID0gZnMuc3RhdFN5bmMoZW50cnlQYXRoKSxcbiAgICAgICAgZW50cnlEaXJlY3RvcnkgPSBzdGF0LmlzRGlyZWN0b3J5KCksXG4gICAgICAgIGVudHJ5RmlsZSA9ICFlbnRyeURpcmVjdG9yeTtcblxuICByZXR1cm4gZW50cnlGaWxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNFbnRyeURpcmVjdG9yeShlbnRyeVBhdGgpIHtcbiAgY29uc3Qgc3RhdCA9IGZzLnN0YXRTeW5jKGVudHJ5UGF0aCksXG4gICAgICAgIGVudHJ5RGlyZWN0b3J5ID0gc3RhdC5pc0RpcmVjdG9yeSgpO1xuXG4gIHJldHVybiBlbnRyeURpcmVjdG9yeTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRGlyZWN0b3J5RW1wdHkoZGlyZWN0b3J5UGF0aCkge1xuICBjb25zdCBzdWJFbnRyeU5hbWVzID0gcmVhZERpcmVjdG9yeShkaXJlY3RvcnlQYXRoKSxcbiAgICAgICAgc3ViRW50cnlOYW1lc0xlbmd0aCA9IHN1YkVudHJ5TmFtZXMubGVuZ3RoLFxuICAgICAgICBkaXJlY3RvcnlFbXB0eSA9IChzdWJFbnRyeU5hbWVzTGVuZ3RoID09PSAwKTtcblxuICByZXR1cm4gZGlyZWN0b3J5RW1wdHk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWFkRGlyZWN0b3J5KGRpcmVjdG9yeVBhdGgpIHtcbiAgY29uc3Qgc3ViRW50cnlOYW1lcyA9IGZzLnJlYWRkaXJTeW5jKGRpcmVjdG9yeVBhdGgpO1xuXG4gIHJldHVybiBzdWJFbnRyeU5hbWVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVhZEZpbGUoZmlsZVBhdGgsIGVuY29kaW5nID0gREVGQVVMVF9FTkNPRElORykge1xuICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgIGVuY29kaW5nXG4gICAgICAgIH0sXG4gICAgICAgIGNvbnRlbnQgPSBmcy5yZWFkRmlsZVN5bmMoZmlsZVBhdGgsIG9wdGlvbnMpO1xuXG4gIHJldHVybiBjb250ZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gd3JpdGVGaWxlKGZpbGVQYXRoLCBjb250ZW50KSB7XG4gIGZzLndyaXRlRmlsZVN5bmMoZmlsZVBhdGgsIGNvbnRlbnQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRmlsZShmaWxlUGF0aCkge1xuICBjb25zdCBjb250ZW50ID0gRU1QVFlfU1RSSU5HO1xuXG4gIGZzLndyaXRlRmlsZVN5bmMoZmlsZVBhdGgsIGNvbnRlbnQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXBwZW5kVG9GaWxlKGZpbGVQYXRoLCBjb250ZW50KSB7XG4gIGZzLmFwcGVuZEZpbGVTeW5jKGZpbGVQYXRoLCBjb250ZW50KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZURpcmVjdG9yeShkaXJlY3RvcnlQYXRoKSB7XG4gIGNvbnN0IHJlY3Vyc2l2ZSA9IHRydWUsXG4gICAgICAgIG9wdGlvbnMgPSB7XG4gICAgICAgICAgcmVjdXJzaXZlXG4gICAgICAgIH07XG5cbiAgZnMubWtkaXJTeW5jKGRpcmVjdG9yeVBhdGgsIG9wdGlvbnMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuYW1lRGlyZWN0b3J5KG9sZERpcmVjdG9yeVBhdGgsIG5ld0RpcmVjdG9yeVBhdGgpIHtcbiAgZnMucmVuYW1lU3luYyhvbGREaXJlY3RvcnlQYXRoLCBuZXdEaXJlY3RvcnlQYXRoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmFtZUZpbGUob2xkRmlsZVBhdGgsIG5ld0ZpbGVQYXRoKSB7XG4gIGZzLnJlbmFtZVN5bmMob2xkRmlsZVBhdGgsIG5ld0ZpbGVQYXRoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUVudHJ5KGVudHJ5UGF0aCkge1xuICBjb25zdCBmb3JjZSA9IHRydWUsXG4gICAgICAgIHJlY3Vyc2l2ZSA9IHRydWUsXG4gICAgICAgIG9wdGlvbnMgPSB7XG4gICAgICAgICAgZm9yY2UsXG4gICAgICAgICAgcmVjdXJzaXZlXG4gICAgICAgIH07XG5cbiAgZnMucm1TeW5jKGVudHJ5UGF0aCwgb3B0aW9ucyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTdGF0cyhmaWxlUGF0aCkge1xuICByZXR1cm4gZnMuc3RhdFN5bmMoZmlsZVBhdGgpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNoZWNrRW50cnlFeGlzdHMsXG4gIGNoZWNrRmlsZUV4aXN0cyxcbiAgY2hlY2tEaXJlY3RvcnlFeGlzdHMsXG4gIGlzRW50cnlGaWxlLFxuICBpc0VudHJ5RGlyZWN0b3J5LFxuICBpc0RpcmVjdG9yeUVtcHR5LFxuICByZWFkRGlyZWN0b3J5LFxuICByZWFkRmlsZSxcbiAgd3JpdGVGaWxlLFxuICBjcmVhdGVGaWxlLFxuICBhcHBlbmRUb0ZpbGUsXG4gIGNyZWF0ZURpcmVjdG9yeSxcbiAgcmVhbm1lRGlyZWN0b3J5LFxuICByZW5hbWVGaWxlLFxuICByZW1vdmVFbnRyeSxcbiAgZ2V0U3RhdHNcbn07XG4iXSwibmFtZXMiOlsiY2hlY2tFbnRyeUV4aXN0cyIsImNoZWNrRmlsZUV4aXN0cyIsImNoZWNrRGlyZWN0b3J5RXhpc3RzIiwiaXNFbnRyeUZpbGUiLCJpc0VudHJ5RGlyZWN0b3J5IiwiaXNEaXJlY3RvcnlFbXB0eSIsInJlYWREaXJlY3RvcnkiLCJyZWFkRmlsZSIsIndyaXRlRmlsZSIsImNyZWF0ZUZpbGUiLCJhcHBlbmRUb0ZpbGUiLCJjcmVhdGVEaXJlY3RvcnkiLCJyZW5hbWVEaXJlY3RvcnkiLCJyZW5hbWVGaWxlIiwicmVtb3ZlRW50cnkiLCJnZXRTdGF0cyIsImVudHJ5UGF0aCIsImVudHJ5RXhpc3RzIiwiZnMiLCJleGlzdHNTeW5jIiwiZmlsZVBhdGgiLCJmaWxlRXhpc3RzIiwiZW50cnlGaWxlIiwiZGlyZWN0b3J5UGF0aCIsImRpcmVjdG9yeUV4aXN0cyIsImVudHJ5RGlyZWN0b3J5Iiwic3RhdCIsInN0YXRTeW5jIiwiaXNEaXJlY3RvcnkiLCJzdWJFbnRyeU5hbWVzIiwic3ViRW50cnlOYW1lc0xlbmd0aCIsImxlbmd0aCIsImRpcmVjdG9yeUVtcHR5IiwicmVhZGRpclN5bmMiLCJlbmNvZGluZyIsIkRFRkFVTFRfRU5DT0RJTkciLCJvcHRpb25zIiwiY29udGVudCIsInJlYWRGaWxlU3luYyIsIndyaXRlRmlsZVN5bmMiLCJFTVBUWV9TVFJJTkciLCJhcHBlbmRGaWxlU3luYyIsInJlY3Vyc2l2ZSIsIm1rZGlyU3luYyIsIm9sZERpcmVjdG9yeVBhdGgiLCJuZXdEaXJlY3RvcnlQYXRoIiwicmVuYW1lU3luYyIsIm9sZEZpbGVQYXRoIiwibmV3RmlsZVBhdGgiLCJmb3JjZSIsInJtU3luYyIsInJlYW5tZURpcmVjdG9yeSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBT2dCQSxnQkFBZ0I7ZUFBaEJBOztJQU1BQyxlQUFlO2VBQWZBOztJQWlCQUMsb0JBQW9CO2VBQXBCQTs7SUFpQkFDLFdBQVc7ZUFBWEE7O0lBUUFDLGdCQUFnQjtlQUFoQkE7O0lBT0FDLGdCQUFnQjtlQUFoQkE7O0lBUUFDLGFBQWE7ZUFBYkE7O0lBTUFDLFFBQVE7ZUFBUkE7O0lBU0FDLFNBQVM7ZUFBVEE7O0lBSUFDLFVBQVU7ZUFBVkE7O0lBTUFDLFlBQVk7ZUFBWkE7O0lBSUFDLGVBQWU7ZUFBZkE7O0lBU0FDLGVBQWU7ZUFBZkE7O0lBSUFDLFVBQVU7ZUFBVkE7O0lBSUFDLFdBQVc7ZUFBWEE7O0lBV0FDLFFBQVE7ZUFBUkE7O0lBSWhCLE9BaUJFO2VBakJGOzs7eURBakllO3lCQUVjO3dCQUNJOzs7Ozs7QUFFMUIsU0FBU2YsaUJBQWlCZ0IsU0FBUztJQUN4QyxJQUFNQyxjQUFjQyxXQUFFLENBQUNDLFVBQVUs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
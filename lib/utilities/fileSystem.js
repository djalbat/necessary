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
const _fs = /*#__PURE__*/ _interop_require_default(require("fs"));
const _path = /*#__PURE__*/ _interop_require_default(require("path"));
const _constants = require("../constants");
const _defaults = require("../defaults");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function getEntryStats(entryPath) {
    const entryStats = _fs.default.statSync(entryPath);
    return entryStats;
}
function checkEntryExists(entryPath) {
    const entryExists = _fs.default.existsSync(entryPath);
    return entryExists;
}
function checkFileExists(filePath) {
    let fileExists = false;
    const entryPath = filePath, entryExists = checkEntryExists(entryPath);
    if (entryExists) {
        const entryFile = isEntryFile(entryPath);
        if (entryFile) {
            fileExists = true;
        }
    }
    return fileExists;
}
function checkDirectoryExists(directoryPath) {
    let directoryExists = false;
    const entryPath = directoryPath, entryExists = checkEntryExists(entryPath);
    if (entryExists) {
        const entryDirectory = isEntryDirectory(entryPath);
        if (entryDirectory) {
            directoryExists = true;
        }
    }
    return directoryExists;
}
function isEntryFile(entryPath) {
    const stats = getEntryStats(entryPath), entryFile = stats.isFile(); ///
    return entryFile;
}
function isEntryDirectory(entryPath) {
    const stats = getEntryStats(entryPath), entryDirectory = stats.isDirectory(); ///
    return entryDirectory;
}
function isDirectoryEmpty(directoryPath) {
    const subEntryNames = readDirectory(directoryPath), subEntryNamesLength = subEntryNames.length, directoryEmpty = subEntryNamesLength === 0;
    return directoryEmpty;
}
function readDirectory(directoryPath) {
    const subEntryNames = _fs.default.readdirSync(directoryPath);
    return subEntryNames;
}
function readFile(filePath, encoding = _defaults.DEFAULT_ENCODING) {
    const options = {
        encoding
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
function createDirectory(directoryPath, recursive = true) {
    const options = {
        recursive
    };
    _fs.default.mkdirSync(directoryPath, options);
}
function createFile(filePath) {
    const content = _constants.EMPTY_STRING;
    _fs.default.writeFileSync(filePath, content);
}
function moveEntry(oldEntryPath, newEntryPath) {
    ensureParentDirectoryExists(newEntryPath);
    renameEntry(oldEntryPath, newEntryPath);
}
function removeEntry(entryPath) {
    const force = true, recursive = true, options = {
        force,
        recursive
    };
    _fs.default.rmSync(entryPath, options);
}
function renameEntry(oldEntryPath, newEntryPath) {
    _fs.default.renameSync(oldEntryPath, newEntryPath);
}
const _default = {
    getEntryStats,
    checkEntryExists,
    checkFileExists,
    checkDirectoryExists,
    isEntryFile,
    isEntryDirectory,
    isDirectoryEmpty,
    readDirectory,
    copyFile,
    readFile,
    writeFile,
    appendToFile,
    createDirectory,
    createFile,
    moveEntry,
    renameEntry,
    removeEntry
};
function ensureParentDirectoryExists(entryPath) {
    const parentDirectoryPath = _path.default.dirname(entryPath), parentDirectoryExists = checkDirectoryExists(parentDirectoryPath);
    if (!parentDirectoryExists) {
        const recursive = true;
        createDirectory(parentDirectoryPath, recursive);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZmlsZVN5c3RlbS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGZzIGZyb20gXCJmc1wiO1xuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgREVGQVVMVF9FTkNPRElORyB9IGZyb20gXCIuLi9kZWZhdWx0c1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RW50cnlTdGF0cyhlbnRyeVBhdGgpIHtcbiAgY29uc3QgZW50cnlTdGF0cyA9IGZzLnN0YXRTeW5jKGVudHJ5UGF0aCk7XG5cbiAgcmV0dXJuIGVudHJ5U3RhdHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGVja0VudHJ5RXhpc3RzKGVudHJ5UGF0aCkge1xuICBjb25zdCBlbnRyeUV4aXN0cyA9IGZzLmV4aXN0c1N5bmMoZW50cnlQYXRoKTtcblxuICByZXR1cm4gZW50cnlFeGlzdHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGVja0ZpbGVFeGlzdHMoZmlsZVBhdGgpIHtcbiAgbGV0IGZpbGVFeGlzdHMgPSBmYWxzZTtcbiAgXG4gIGNvbnN0IGVudHJ5UGF0aCA9IGZpbGVQYXRoLCAvLy9cbiAgICAgICAgZW50cnlFeGlzdHMgPSBjaGVja0VudHJ5RXhpc3RzKGVudHJ5UGF0aCk7XG4gIFxuICBpZiAoZW50cnlFeGlzdHMpIHtcbiAgICBjb25zdCBlbnRyeUZpbGUgPSBpc0VudHJ5RmlsZShlbnRyeVBhdGgpO1xuICAgIFxuICAgIGlmIChlbnRyeUZpbGUpIHtcbiAgICAgIGZpbGVFeGlzdHMgPSB0cnVlO1xuICAgIH1cbiAgfVxuICBcbiAgcmV0dXJuIGZpbGVFeGlzdHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGVja0RpcmVjdG9yeUV4aXN0cyhkaXJlY3RvcnlQYXRoKSB7XG4gIGxldCBkaXJlY3RvcnlFeGlzdHMgPSBmYWxzZTtcblxuICBjb25zdCBlbnRyeVBhdGggPSBkaXJlY3RvcnlQYXRoLCAvLy9cbiAgICAgICAgZW50cnlFeGlzdHMgPSBjaGVja0VudHJ5RXhpc3RzKGVudHJ5UGF0aCk7XG5cbiAgaWYgKGVudHJ5RXhpc3RzKSB7XG4gICAgY29uc3QgZW50cnlEaXJlY3RvcnkgPSBpc0VudHJ5RGlyZWN0b3J5KGVudHJ5UGF0aCk7XG5cbiAgICBpZiAoZW50cnlEaXJlY3RvcnkpIHtcbiAgICAgIGRpcmVjdG9yeUV4aXN0cyA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRpcmVjdG9yeUV4aXN0cztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRW50cnlGaWxlKGVudHJ5UGF0aCkge1xuICBjb25zdCBzdGF0cyA9IGdldEVudHJ5U3RhdHMoZW50cnlQYXRoKSxcbiAgICAgICAgZW50cnlGaWxlID0gc3RhdHMuaXNGaWxlKCk7IC8vL1xuXG4gIHJldHVybiBlbnRyeUZpbGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0VudHJ5RGlyZWN0b3J5KGVudHJ5UGF0aCkge1xuICBjb25zdCBzdGF0cyA9IGdldEVudHJ5U3RhdHMoZW50cnlQYXRoKSxcbiAgICAgICAgZW50cnlEaXJlY3RvcnkgPSBzdGF0cy5pc0RpcmVjdG9yeSgpOyAvLy9cblxuICByZXR1cm4gZW50cnlEaXJlY3Rvcnk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0RpcmVjdG9yeUVtcHR5KGRpcmVjdG9yeVBhdGgpIHtcbiAgY29uc3Qgc3ViRW50cnlOYW1lcyA9IHJlYWREaXJlY3RvcnkoZGlyZWN0b3J5UGF0aCksXG4gICAgICAgIHN1YkVudHJ5TmFtZXNMZW5ndGggPSBzdWJFbnRyeU5hbWVzLmxlbmd0aCxcbiAgICAgICAgZGlyZWN0b3J5RW1wdHkgPSAoc3ViRW50cnlOYW1lc0xlbmd0aCA9PT0gMCk7XG5cbiAgcmV0dXJuIGRpcmVjdG9yeUVtcHR5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVhZERpcmVjdG9yeShkaXJlY3RvcnlQYXRoKSB7XG4gIGNvbnN0IHN1YkVudHJ5TmFtZXMgPSBmcy5yZWFkZGlyU3luYyhkaXJlY3RvcnlQYXRoKTtcblxuICByZXR1cm4gc3ViRW50cnlOYW1lcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlYWRGaWxlKGZpbGVQYXRoLCBlbmNvZGluZyA9IERFRkFVTFRfRU5DT0RJTkcpIHtcbiAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICBlbmNvZGluZ1xuICAgICAgICB9LFxuICAgICAgICBjb250ZW50ID0gZnMucmVhZEZpbGVTeW5jKGZpbGVQYXRoLCBvcHRpb25zKTtcblxuICByZXR1cm4gY29udGVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvcHlGaWxlKHNvdXJjZUZpbGVQYXRoLCB0YXJnZXRGaWxlcGF0aCkge1xuICBmcy5jb3B5RmlsZVN5bmMoc291cmNlRmlsZVBhdGgsIHRhcmdldEZpbGVwYXRoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHdyaXRlRmlsZShmaWxlUGF0aCwgY29udGVudCkge1xuICBmcy53cml0ZUZpbGVTeW5jKGZpbGVQYXRoLCBjb250ZW50KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFwcGVuZFRvRmlsZShmaWxlUGF0aCwgY29udGVudCkge1xuICBmcy5hcHBlbmRGaWxlU3luYyhmaWxlUGF0aCwgY29udGVudCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVEaXJlY3RvcnkoZGlyZWN0b3J5UGF0aCwgcmVjdXJzaXZlID0gdHJ1ZSkge1xuICBjb25zdCBvcHRpb25zID0ge1xuICAgIHJlY3Vyc2l2ZVxuICB9O1xuXG4gIGZzLm1rZGlyU3luYyhkaXJlY3RvcnlQYXRoLCBvcHRpb25zKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUZpbGUoZmlsZVBhdGgpIHtcbiAgY29uc3QgY29udGVudCA9IEVNUFRZX1NUUklORztcblxuICBmcy53cml0ZUZpbGVTeW5jKGZpbGVQYXRoLCBjb250ZW50KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1vdmVFbnRyeShvbGRFbnRyeVBhdGgsIG5ld0VudHJ5UGF0aCkge1xuICBlbnN1cmVQYXJlbnREaXJlY3RvcnlFeGlzdHMobmV3RW50cnlQYXRoKTtcblxuICByZW5hbWVFbnRyeShvbGRFbnRyeVBhdGgsIG5ld0VudHJ5UGF0aCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVFbnRyeShlbnRyeVBhdGgpIHtcbiAgY29uc3QgZm9yY2UgPSB0cnVlLFxuICAgICAgICByZWN1cnNpdmUgPSB0cnVlLFxuICAgICAgICBvcHRpb25zID0ge1xuICAgICAgICAgIGZvcmNlLFxuICAgICAgICAgIHJlY3Vyc2l2ZVxuICAgICAgICB9O1xuXG4gIGZzLnJtU3luYyhlbnRyeVBhdGgsIG9wdGlvbnMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuYW1lRW50cnkob2xkRW50cnlQYXRoLCBuZXdFbnRyeVBhdGgpIHtcbiAgZnMucmVuYW1lU3luYyhvbGRFbnRyeVBhdGgsIG5ld0VudHJ5UGF0aCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZ2V0RW50cnlTdGF0cyxcbiAgY2hlY2tFbnRyeUV4aXN0cyxcbiAgY2hlY2tGaWxlRXhpc3RzLFxuICBjaGVja0RpcmVjdG9yeUV4aXN0cyxcbiAgaXNFbnRyeUZpbGUsXG4gIGlzRW50cnlEaXJlY3RvcnksXG4gIGlzRGlyZWN0b3J5RW1wdHksXG4gIHJlYWREaXJlY3RvcnksXG4gIGNvcHlGaWxlLFxuICByZWFkRmlsZSxcbiAgd3JpdGVGaWxlLFxuICBhcHBlbmRUb0ZpbGUsXG4gIGNyZWF0ZURpcmVjdG9yeSxcbiAgY3JlYXRlRmlsZSxcbiAgbW92ZUVudHJ5LFxuICByZW5hbWVFbnRyeSxcbiAgcmVtb3ZlRW50cnlcbn07XG5cbmZ1bmN0aW9uIGVuc3VyZVBhcmVudERpcmVjdG9yeUV4aXN0cyhlbnRyeVBhdGgpIHtcbiAgY29uc3QgcGFyZW50RGlyZWN0b3J5UGF0aCA9IHBhdGguZGlybmFtZShlbnRyeVBhdGgpLCAvLy9cbiAgICAgICAgcGFyZW50RGlyZWN0b3J5RXhpc3RzID0gY2hlY2tEaXJlY3RvcnlFeGlzdHMocGFyZW50RGlyZWN0b3J5UGF0aCk7XG5cbiAgaWYgKCFwYXJlbnREaXJlY3RvcnlFeGlzdHMpIHtcbiAgICBjb25zdCByZWN1cnNpdmUgPSB0cnVlO1xuXG4gICAgY3JlYXRlRGlyZWN0b3J5KHBhcmVudERpcmVjdG9yeVBhdGgsIHJlY3Vyc2l2ZSk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJhcHBlbmRUb0ZpbGUiLCJjaGVja0RpcmVjdG9yeUV4aXN0cyIsImNoZWNrRW50cnlFeGlzdHMiLCJjaGVja0ZpbGVFeGlzdHMiLCJjb3B5RmlsZSIsImNyZWF0ZURpcmVjdG9yeSIsImNyZWF0ZUZpbGUiLCJnZXRFbnRyeVN0YXRzIiwiaXNEaXJlY3RvcnlFbXB0eSIsImlzRW50cnlEaXJlY3RvcnkiLCJpc0VudHJ5RmlsZSIsIm1vdmVFbnRyeSIsInJlYWREaXJlY3RvcnkiLCJyZWFkRmlsZSIsInJlbW92ZUVudHJ5IiwicmVuYW1lRW50cnkiLCJ3cml0ZUZpbGUiLCJlbnRyeVBhdGgiLCJlbnRyeVN0YXRzIiwiZnMiLCJzdGF0U3luYyIsImVudHJ5RXhpc3RzIiwiZXhpc3RzU3luYyIsImZpbGVQYXRoIiwiZmlsZUV4aXN0cyIsImVudHJ5RmlsZSIsImRpcmVjdG9yeVBhdGgiLCJkaXJlY3RvcnlFeGlzdHMiLCJlbnRyeURpcmVjdG9yeSIsInN0YXRzIiwiaXNGaWxlIiwiaXNEaXJlY3RvcnkiLCJzdWJFbnRyeU5hbWVzIiwic3ViRW50cnlOYW1lc0xlbmd0aCIsImxlbmd0aCIsImRpcmVjdG9yeUVtcHR5IiwicmVhZGRpclN5bmMiLCJlbmNvZGluZyIsIkRFRkFVTFRfRU5DT0RJTkciLCJvcHRpb25zIiwiY29udGVudCIsInJlYWRGaWxlU3luYyIsInNvdXJjZUZpbGVQYXRoIiwidGFyZ2V0RmlsZXBhdGgiLCJjb3B5RmlsZVN5bmMiLCJ3cml0ZUZpbGVTeW5jIiwiYXBwZW5kRmlsZVN5bmMiLCJyZWN1cnNpdmUiLCJta2RpclN5bmMiLCJFTVBUWV9TVFJJTkciLCJvbGRFbnRyeVBhdGgiLCJuZXdFbnRyeVBhdGgiLCJlbnN1cmVQYXJlbnREaXJlY3RvcnlFeGlzdHMiLCJmb3JjZSIsInJtU3luYyIsInJlbmFtZVN5bmMiLCJwYXJlbnREaXJlY3RvcnlQYXRoIiwicGF0aCIsImRpcm5hbWUiLCJwYXJlbnREaXJlY3RvcnlFeGlzdHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQW1HZ0JBO2VBQUFBOztRQTlEQUM7ZUFBQUE7O1FBdkJBQztlQUFBQTs7UUFNQUM7ZUFBQUE7O1FBdUVBQztlQUFBQTs7UUFZQUM7ZUFBQUE7O1FBUUFDO2VBQUFBOztRQTJCaEI7ZUFBQTs7UUFsSWdCQztlQUFBQTs7UUE0REFDO2VBQUFBOztRQVBBQztlQUFBQTs7UUFQQUM7ZUFBQUE7O1FBK0RBQztlQUFBQTs7UUF6Q0FDO2VBQUFBOztRQU1BQztlQUFBQTs7UUF5Q0FDO2VBQUFBOztRQVdBQztlQUFBQTs7UUF2Q0FDO2VBQUFBOzs7MkRBN0ZEOzZEQUNFOzJCQUVZOzBCQUNJOzs7Ozs7QUFFMUIsU0FBU1QsY0FBY1UsU0FBUztJQUNyQyxNQUFNQyxhQUFhQyxXQUFFLENBQUNDLFFBQVEsQ0FBQ0g7SUFFL0IsT0FBT0M7QUFDVDtBQUVPLFNBQVNoQixpQkFBaUJlLFNBQVM7SUFDeEMsTUFBTUksY0FBY0YsV0FBRSxDQUFDRyxVQUFVLENBQUNMO0lBRWxDLE9BQU9JO0FBQ1Q7QUFFTyxTQUFTbEIsZ0JBQWdCb0IsUUFBUTtJQUN0QyxJQUFJQyxhQUFhO0lBRWpCLE1BQU1QLFlBQVlNLFVBQ1pGLGNBQWNuQixpQkFBaUJlO0lBRXJDLElBQUlJLGFBQWE7UUFDZixNQUFNSSxZQUFZZixZQUFZTztRQUU5QixJQUFJUSxXQUFXO1lBQ2JELGFBQWE7UUFDZjtJQUNGO0lBRUEsT0FBT0E7QUFDVDtBQUVPLFNBQVN2QixxQkFBcUJ5QixhQUFhO0lBQ2hELElBQUlDLGtCQUFrQjtJQUV0QixNQUFNVixZQUFZUyxlQUNaTCxjQUFjbkIs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
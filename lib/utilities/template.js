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
    default: function() {
        return _default;
    },
    parseContent: function() {
        return parseContent;
    },
    parseFile: function() {
        return parseFile;
    },
    parseLine: function() {
        return parseLine;
    }
});
var _fileSystem = require("../utilities/fileSystem");
var _constants = require("../constants");
function parseFile(filePath, args, regex) {
    var content = (0, _fileSystem.readFile)(filePath), parsedContent = parseContent(content, args, regex);
    return parsedContent;
}
function parseContent(content, args, regex) {
    var lines = content.split("\n"), parsedLines = parseLines(lines, args, regex), parsedContent = parsedLines.join("\n");
    return parsedContent;
}
function parseLine(line, args) {
    var regex = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : /\${(.+?)}/g;
    var parsedLine = line.replace(regex, function(match, token) {
        var parsedToken = parseToken(token, args);
        return parsedToken;
    });
    return parsedLine;
}
var _default = {
    parseFile: parseFile,
    parseContent: parseContent,
    parseLine: parseLine
};
function parseLines(lines, args, regex) {
    var parsedLines = lines.map(function(line) {
        var parsedLine = parseLine(line, args, regex);
        return parsedLine;
    });
    return parsedLines;
}
function parseToken(token, args) {
    var parsedToken = _constants.EMPTY_STRING;
    if (args.hasOwnProperty(token)) {
        parsedToken = args[token];
    }
    return parsedToken;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvdGVtcGxhdGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHJlYWRGaWxlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9maWxlU3lzdGVtXCI7XG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUZpbGUoZmlsZVBhdGgsIGFyZ3MsIHJlZ2V4KSB7XG4gIGNvbnN0IGNvbnRlbnQgPSByZWFkRmlsZShmaWxlUGF0aCksXG4gICAgICAgIHBhcnNlZENvbnRlbnQgPSBwYXJzZUNvbnRlbnQoY29udGVudCwgYXJncywgcmVnZXgpO1xuXG4gIHJldHVybiBwYXJzZWRDb250ZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VDb250ZW50KGNvbnRlbnQsIGFyZ3MsIHJlZ2V4KSB7XG4gIGNvbnN0IGxpbmVzID0gY29udGVudC5zcGxpdChcIlxcblwiKSxcbiAgICAgICAgcGFyc2VkTGluZXMgPSBwYXJzZUxpbmVzKGxpbmVzLCBhcmdzLCByZWdleCksXG4gICAgICAgIHBhcnNlZENvbnRlbnQgPSBwYXJzZWRMaW5lcy5qb2luKFwiXFxuXCIpO1xuXG4gIHJldHVybiBwYXJzZWRDb250ZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VMaW5lKGxpbmUsIGFyZ3MsIHJlZ2V4ID0gL1xcJHsoLis/KX0vZykge1xuICBjb25zdCBwYXJzZWRMaW5lID0gbGluZS5yZXBsYWNlKHJlZ2V4LCAobWF0Y2gsIHRva2VuKSA9PiB7XG4gICAgY29uc3QgcGFyc2VkVG9rZW4gPSBwYXJzZVRva2VuKHRva2VuLCBhcmdzKTtcblxuICAgIHJldHVybiBwYXJzZWRUb2tlbjtcbiAgfSk7XG5cbiAgcmV0dXJuIHBhcnNlZExpbmU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcGFyc2VGaWxlLFxuICBwYXJzZUNvbnRlbnQsXG4gIHBhcnNlTGluZVxufTtcblxuZnVuY3Rpb24gcGFyc2VMaW5lcyhsaW5lcywgYXJncywgcmVnZXgpIHtcbiAgY29uc3QgcGFyc2VkTGluZXMgPSBsaW5lcy5tYXAoKGxpbmUpID0+IHtcbiAgICBjb25zdCBwYXJzZWRMaW5lID0gcGFyc2VMaW5lKGxpbmUsIGFyZ3MsIHJlZ2V4KTtcblxuICAgIHJldHVybiBwYXJzZWRMaW5lO1xuICB9KTtcblxuICByZXR1cm4gcGFyc2VkTGluZXM7XG59XG5cbmZ1bmN0aW9uIHBhcnNlVG9rZW4odG9rZW4sIGFyZ3MpIHtcbiAgbGV0IHBhcnNlZFRva2VuID0gRU1QVFlfU1RSSU5HO1xuXG4gIGlmIChhcmdzLmhhc093blByb3BlcnR5KHRva2VuKSkge1xuICAgIHBhcnNlZFRva2VuID0gYXJnc1t0b2tlbl07XG4gIH1cblxuICByZXR1cm4gcGFyc2VkVG9rZW47XG59XG4iXSwibmFtZXMiOlsicGFyc2VDb250ZW50IiwicGFyc2VGaWxlIiwicGFyc2VMaW5lIiwiZmlsZVBhdGgiLCJhcmdzIiwicmVnZXgiLCJjb250ZW50IiwicmVhZEZpbGUiLCJwYXJzZWRDb250ZW50IiwibGluZXMiLCJzcGxpdCIsInBhcnNlZExpbmVzIiwicGFyc2VMaW5lcyIsImpvaW4iLCJsaW5lIiwicGFyc2VkTGluZSIsInJlcGxhY2UiLCJtYXRjaCIsInRva2VuIiwicGFyc2VkVG9rZW4iLCJwYXJzZVRva2VuIiwibWFwIiwiRU1QVFlfU1RSSU5HIiwiaGFzT3duUHJvcGVydHkiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUE4QkEsT0FJRTtlQUpGOztJQWxCZ0JBLFlBQVk7ZUFBWkE7O0lBUEFDLFNBQVM7ZUFBVEE7O0lBZUFDLFNBQVM7ZUFBVEE7OzswQkFsQlM7eUJBQ0k7QUFFdEIsU0FBU0QsVUFBVUUsUUFBUSxFQUFFQyxJQUFJLEVBQUVDLEtBQUs7SUFDN0MsSUFBTUMsVUFBVUMsSUFBQUEsb0JBQVEsRUFBQ0osV0FDbkJLLGdCQUFnQlIsYUFBYU0sU0FBU0YsTUFBTUM7SUFFbEQsT0FBT0c7QUFDVDtBQUVPLFNBQVNSLGFBQWFNLE9BQU8sRUFBRUYsSUFBSSxFQUFFQyxLQUFLO0lBQy9DLElBQU1JLFFBQVFILFFBQVFJLEtBQUssQ0FBQyxPQUN0QkMsY0FBY0MsV0FBV0gsT0FBT0wsTUFBTUMsUUFDdENHLGdCQUFnQkcsWUFBWUUsSUFBSSxDQUFDO0lBRXZDLE9BQU9MO0FBQ1Q7QUFFTyxTQUFTTixVQUFVWSxJQUFJLEVBQUVWLElBQUk7UUFBRUMsUUFBQUEsaUVBQVE7SUFDNUMsSUFBTVUsYUFBYUQsS0FBS0UsT0FBTyxDQUFDWCxPQUFPLFNBQUNZLE9BQU9DO1FBQzdDLElBQU1DLGNBQWNDLFdBQVdGLE9BQU9kO1FBRXRDLE9BQU9lO0lBQ1Q7SUFFQSxPQUFPSjtBQUNUO0lBRUEsV0FBZTtJQUNiZCxXQUFBQTtJQUNBRCxjQUFBQTtJQUNBRSxXQUFBQTtBQUNGO0FBRUEsU0FBU1UsV0FBV0gsS0FBSyxFQUFFTCxJQUFJLEVBQUVDLEtBQUs7SUFDcEMsSUFBTU0sY0FBY0YsTUFBTVksR0FBRyxDQUFDLFNBQUNQO1FBQzdCLElBQU1DLGFBQWFiLFVBQVVZLE1BQU1WLE1BQU1DO1FBRXpDLE9BQU9VO0lBQ1Q7SUFFQSxPQUFPSjtBQUNUO0FBRUEsU0FBU1MsV0FBV0YsS0FBSyxFQUFFZCxJQUFJO0lBQzdCLElBQUllLGNBQWNHLHVCQUFZO0lBRTlCLElBQUlsQixLQUFLbUIsY0FBYyxDQUFDTCxRQUFRO1FBQzlCQyxjQUFjZixJQUFJLENBQUNjLE1BQU07SUFDM0I7SUFFQSxPQUFPQztBQUNUIn0=
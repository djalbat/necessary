"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parseFile = parseFile;
exports.parseContent = parseContent;
exports.parseLine = parseLine;
exports.default = void 0;
var _fileSystem = require("../utilities/fileSystem");
var _constants = require("../constants");
function parseFile(filePath, args, regex) {
    var content = (0, _fileSystem).readFile(filePath), parsedContent = parseContent(content, args, regex);
    return parsedContent;
}
function parseContent(content, args, regex) {
    var lines = content.split("\n"), parsedLines = parseLines(lines, args, regex), parsedContent = parsedLines.join("\n");
    return parsedContent;
}
function parseLine(line, args, param) {
    var regex = param === void 0 ? /\${(.+?)}/g : param;
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
exports.default = _default;
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvdGVtcGxhdGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHJlYWRGaWxlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9maWxlU3lzdGVtXCI7XG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUZpbGUoZmlsZVBhdGgsIGFyZ3MsIHJlZ2V4KSB7XG4gIGNvbnN0IGNvbnRlbnQgPSByZWFkRmlsZShmaWxlUGF0aCksXG4gICAgICAgIHBhcnNlZENvbnRlbnQgPSBwYXJzZUNvbnRlbnQoY29udGVudCwgYXJncywgcmVnZXgpO1xuXG4gIHJldHVybiBwYXJzZWRDb250ZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VDb250ZW50KGNvbnRlbnQsIGFyZ3MsIHJlZ2V4KSB7XG4gIGNvbnN0IGxpbmVzID0gY29udGVudC5zcGxpdChcIlxcblwiKSxcbiAgICAgICAgcGFyc2VkTGluZXMgPSBwYXJzZUxpbmVzKGxpbmVzLCBhcmdzLCByZWdleCksXG4gICAgICAgIHBhcnNlZENvbnRlbnQgPSBwYXJzZWRMaW5lcy5qb2luKFwiXFxuXCIpO1xuXG4gIHJldHVybiBwYXJzZWRDb250ZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VMaW5lKGxpbmUsIGFyZ3MsIHJlZ2V4ID0gL1xcJHsoLis/KX0vZykge1xuICBjb25zdCBwYXJzZWRMaW5lID0gbGluZS5yZXBsYWNlKHJlZ2V4LCAobWF0Y2gsIHRva2VuKSA9PiB7XG4gICAgY29uc3QgcGFyc2VkVG9rZW4gPSBwYXJzZVRva2VuKHRva2VuLCBhcmdzKTtcblxuICAgIHJldHVybiBwYXJzZWRUb2tlbjtcbiAgfSk7XG5cbiAgcmV0dXJuIHBhcnNlZExpbmU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcGFyc2VGaWxlLFxuICBwYXJzZUNvbnRlbnQsXG4gIHBhcnNlTGluZVxufTtcblxuZnVuY3Rpb24gcGFyc2VMaW5lcyhsaW5lcywgYXJncywgcmVnZXgpIHtcbiAgY29uc3QgcGFyc2VkTGluZXMgPSBsaW5lcy5tYXAoKGxpbmUpID0+IHtcbiAgICBjb25zdCBwYXJzZWRMaW5lID0gcGFyc2VMaW5lKGxpbmUsIGFyZ3MsIHJlZ2V4KTtcblxuICAgIHJldHVybiBwYXJzZWRMaW5lO1xuICB9KTtcblxuICByZXR1cm4gcGFyc2VkTGluZXM7XG59XG5cbmZ1bmN0aW9uIHBhcnNlVG9rZW4odG9rZW4sIGFyZ3MpIHtcbiAgbGV0IHBhcnNlZFRva2VuID0gRU1QVFlfU1RSSU5HO1xuXG4gIGlmIChhcmdzLmhhc093blByb3BlcnR5KHRva2VuKSkge1xuICAgIHBhcnNlZFRva2VuID0gYXJnc1t0b2tlbl07XG4gIH1cblxuICByZXR1cm4gcGFyc2VkVG9rZW47XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7OztRQUtJLFNBQVMsR0FBVCxTQUFTO1FBT1QsWUFBWSxHQUFaLFlBQVk7UUFRWixTQUFTLEdBQVQsU0FBUzs7SUFsQkEsV0FBeUI7SUFDckIsVUFBYztTQUUzQixTQUFTLENBQUMsUUFBUSxFQUFFLElBQUksRUFBRSxLQUFLO1FBQ3ZDLE9BQU8sT0FKVSxXQUF5QixXQUl2QixRQUFRLEdBQzNCLGFBQWEsR0FBRyxZQUFZLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxLQUFLO1dBRWhELGFBQWE7O1NBR04sWUFBWSxDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsS0FBSztRQUN6QyxLQUFLLEdBQUcsT0FBTyxDQUFDLEtBQUssRUFBQyxFQUFJLElBQzFCLFdBQVcsR0FBRyxVQUFVLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxLQUFLLEdBQzNDLGFBQWEsR0FBRyxXQUFXLENBQUMsSUFBSSxFQUFDLEVBQUk7V0FFcEMsYUFBYTs7U0FHTixTQUFTLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFvQjtRQUFwQixLQUFLLEdBQUwsS0FBb0IsNkJBQXBCLEtBQW9CO1FBQ2xELFVBQVUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssV0FBRyxLQUFLLEVBQUUsS0FBSztZQUM1QyxXQUFXLEdBQUcsVUFBVSxDQUFDLEtBQUssRUFBRSxJQUFJO2VBRW5DLFdBQVc7O1dBR2IsVUFBVTs7O0lBSWpCLFNBQVMsRUFBVCxTQUFTO0lBQ1QsWUFBWSxFQUFaLFlBQVk7SUFDWixTQUFTLEVBQVQsU0FBUzs7O1NBR0YsVUFBVSxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsS0FBSztRQUM5QixXQUFXLEdBQUcsS0FBSyxDQUFDLEdBQUcsVUFBRSxJQUFJO1lBQzNCLFVBQVUsR0FBRyxTQUFTLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLO2VBRXZDLFVBQVU7O1dBR1osV0FBVzs7U0FHWCxVQUFVLENBQUMsS0FBSyxFQUFFLElBQUk7UUFDekIsV0FBVyxHQTVDWSxVQUFjO1FBOENyQyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUs7UUFDM0IsV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLOztXQUduQixXQUFXIn0=
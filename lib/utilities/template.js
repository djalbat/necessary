"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parseFile = parseFile;
exports.parseContent = parseContent;
exports.parseLine = parseLine;
exports.default = void 0;
var _fileSystem = require("../utilities/fileSystem");
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
    var parsedToken = "";
    if (args.hasOwnProperty(token)) {
        parsedToken = args[token];
    }
    return parsedToken;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvdGVtcGxhdGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHJlYWRGaWxlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9maWxlU3lzdGVtXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUZpbGUoZmlsZVBhdGgsIGFyZ3MsIHJlZ2V4KSB7XG4gIGNvbnN0IGNvbnRlbnQgPSByZWFkRmlsZShmaWxlUGF0aCksXG4gICAgICAgIHBhcnNlZENvbnRlbnQgPSBwYXJzZUNvbnRlbnQoY29udGVudCwgYXJncywgcmVnZXgpO1xuXG4gIHJldHVybiBwYXJzZWRDb250ZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VDb250ZW50KGNvbnRlbnQsIGFyZ3MsIHJlZ2V4KSB7XG4gIGNvbnN0IGxpbmVzID0gY29udGVudC5zcGxpdChcIlxcblwiKSxcbiAgICAgICAgcGFyc2VkTGluZXMgPSBwYXJzZUxpbmVzKGxpbmVzLCBhcmdzLCByZWdleCksXG4gICAgICAgIHBhcnNlZENvbnRlbnQgPSBwYXJzZWRMaW5lcy5qb2luKFwiXFxuXCIpO1xuXG4gIHJldHVybiBwYXJzZWRDb250ZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VMaW5lKGxpbmUsIGFyZ3MsIHJlZ2V4ID0gL1xcJHsoLis/KX0vZykge1xuICBjb25zdCBwYXJzZWRMaW5lID0gbGluZS5yZXBsYWNlKHJlZ2V4LCAobWF0Y2gsIHRva2VuKSA9PiB7XG4gICAgY29uc3QgcGFyc2VkVG9rZW4gPSBwYXJzZVRva2VuKHRva2VuLCBhcmdzKTtcblxuICAgIHJldHVybiBwYXJzZWRUb2tlbjtcbiAgfSk7XG5cbiAgcmV0dXJuIHBhcnNlZExpbmU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcGFyc2VGaWxlLFxuICBwYXJzZUNvbnRlbnQsXG4gIHBhcnNlTGluZVxufTtcblxuZnVuY3Rpb24gcGFyc2VMaW5lcyhsaW5lcywgYXJncywgcmVnZXgpIHtcbiAgY29uc3QgcGFyc2VkTGluZXMgPSBsaW5lcy5tYXAoKGxpbmUpID0+IHtcbiAgICBjb25zdCBwYXJzZWRMaW5lID0gcGFyc2VMaW5lKGxpbmUsIGFyZ3MsIHJlZ2V4KTtcblxuICAgIHJldHVybiBwYXJzZWRMaW5lO1xuICB9KTtcblxuICByZXR1cm4gcGFyc2VkTGluZXM7XG59XG5cbmZ1bmN0aW9uIHBhcnNlVG9rZW4odG9rZW4sIGFyZ3MpIHtcbiAgbGV0IHBhcnNlZFRva2VuID0gXCJcIjtcblxuICBpZiAoYXJncy5oYXNPd25Qcm9wZXJ0eSh0b2tlbikpIHtcbiAgICBwYXJzZWRUb2tlbiA9IGFyZ3NbdG9rZW5dO1xuICB9XG5cbiAgcmV0dXJuIHBhcnNlZFRva2VuO1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7UUFJSSxTQUFTLEdBQVQsU0FBUztRQU9ULFlBQVksR0FBWixZQUFZO1FBUVosU0FBUyxHQUFULFNBQVM7O0lBakJBLFdBQXlCO1NBRWxDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsSUFBSSxFQUFFLEtBQUs7UUFDdkMsT0FBTyxPQUhVLFdBQXlCLFdBR3ZCLFFBQVEsR0FDM0IsYUFBYSxHQUFHLFlBQVksQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLEtBQUs7V0FFaEQsYUFBYTs7U0FHTixZQUFZLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxLQUFLO1FBQ3pDLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBSyxFQUFDLEVBQUksSUFDMUIsV0FBVyxHQUFHLFVBQVUsQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLEtBQUssR0FDM0MsYUFBYSxHQUFHLFdBQVcsQ0FBQyxJQUFJLEVBQUMsRUFBSTtXQUVwQyxhQUFhOztTQUdOLFNBQVMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQW9CO1FBQXBCLEtBQUssR0FBTCxLQUFvQiw2QkFBcEIsS0FBb0I7UUFDbEQsVUFBVSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxXQUFHLEtBQUssRUFBRSxLQUFLO1lBQzVDLFdBQVcsR0FBRyxVQUFVLENBQUMsS0FBSyxFQUFFLElBQUk7ZUFFbkMsV0FBVzs7V0FHYixVQUFVOzs7SUFJakIsU0FBUyxFQUFULFNBQVM7SUFDVCxZQUFZLEVBQVosWUFBWTtJQUNaLFNBQVMsRUFBVCxTQUFTOzs7U0FHRixVQUFVLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxLQUFLO1FBQzlCLFdBQVcsR0FBRyxLQUFLLENBQUMsR0FBRyxVQUFFLElBQUk7WUFDM0IsVUFBVSxHQUFHLFNBQVMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUs7ZUFFdkMsVUFBVTs7V0FHWixXQUFXOztTQUdYLFVBQVUsQ0FBQyxLQUFLLEVBQUUsSUFBSTtRQUN6QixXQUFXO1FBRVgsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLO1FBQzNCLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSzs7V0FHbkIsV0FBVyJ9
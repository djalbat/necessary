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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvdGVtcGxhdGUuanMiXSwibmFtZXMiOlsicmVhZEZpbGUiLCJFTVBUWV9TVFJJTkciLCJwYXJzZUZpbGUiLCJmaWxlUGF0aCIsImFyZ3MiLCJyZWdleCIsImNvbnRlbnQiLCJwYXJzZWRDb250ZW50IiwicGFyc2VDb250ZW50IiwibGluZXMiLCJzcGxpdCIsInBhcnNlZExpbmVzIiwicGFyc2VMaW5lcyIsImpvaW4iLCJwYXJzZUxpbmUiLCJsaW5lIiwicGFyc2VkTGluZSIsInJlcGxhY2UiLCJtYXRjaCIsInRva2VuIiwicGFyc2VkVG9rZW4iLCJwYXJzZVRva2VuIiwibWFwIiwiaGFzT3duUHJvcGVydHkiXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7UUFLSSxTQUFTLEdBQVQsU0FBUztRQU9ULFlBQVksR0FBWixZQUFZO1FBUVosU0FBUyxHQUFULFNBQVM7O0FBbEJBLEdBQXlCLENBQXpCLFdBQXlCO0FBQ3JCLEdBQWMsQ0FBZCxVQUFjO1NBRTNCLFNBQVMsQ0FBQyxRQUFRLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxDQUFDO0lBQ2hELEdBQUssQ0FBQyxPQUFPLE9BSlUsV0FBeUIsV0FJdkIsUUFBUSxHQUMzQixhQUFhLEdBQUcsWUFBWSxDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsS0FBSztJQUV2RCxNQUFNLENBQUMsYUFBYTtBQUN0QixDQUFDO1NBRWUsWUFBWSxDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLENBQUM7SUFDbEQsR0FBSyxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBSyxFQUFDLEVBQUksSUFDMUIsV0FBVyxHQUFHLFVBQVUsQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLEtBQUssR0FDM0MsYUFBYSxHQUFHLFdBQVcsQ0FBQyxJQUFJLEVBQUMsRUFBSTtJQUUzQyxNQUFNLENBQUMsYUFBYTtBQUN0QixDQUFDO1NBRWUsU0FBUyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBb0IsRUFBRSxDQUFDO1FBQXZCLEtBQUssR0FBTCxLQUFvQiw2QkFBcEIsS0FBb0I7SUFDeEQsR0FBSyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxRQUFRLENBQVAsS0FBSyxFQUFFLEtBQUssRUFBSyxDQUFDO1FBQ3hELEdBQUssQ0FBQyxXQUFXLEdBQUcsVUFBVSxDQUFDLEtBQUssRUFBRSxJQUFJO1FBRTFDLE1BQU0sQ0FBQyxXQUFXO0lBQ3BCLENBQUM7SUFFRCxNQUFNLENBQUMsVUFBVTtBQUNuQixDQUFDO2VBRWMsQ0FBQztJQUNkLFNBQVMsRUFBVCxTQUFTO0lBQ1QsWUFBWSxFQUFaLFlBQVk7SUFDWixTQUFTLEVBQVQsU0FBUztBQUNYLENBQUM7O1NBRVEsVUFBVSxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLENBQUM7SUFDdkMsR0FBSyxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBUCxJQUFJLEVBQUssQ0FBQztRQUN2QyxHQUFLLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUs7UUFFOUMsTUFBTSxDQUFDLFVBQVU7SUFDbkIsQ0FBQztJQUVELE1BQU0sQ0FBQyxXQUFXO0FBQ3BCLENBQUM7U0FFUSxVQUFVLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDO0lBQ2hDLEdBQUcsQ0FBQyxXQUFXLEdBNUNZLFVBQWM7SUE4Q3pDLEVBQUUsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssR0FBRyxDQUFDO1FBQy9CLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSztJQUMxQixDQUFDO0lBRUQsTUFBTSxDQUFDLFdBQVc7QUFDcEIsQ0FBQyJ9
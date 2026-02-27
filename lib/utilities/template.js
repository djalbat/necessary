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
    get default () {
        return _default;
    },
    get parseContent () {
        return parseContent;
    },
    get parseFile () {
        return parseFile;
    },
    get parseLine () {
        return parseLine;
    }
});
const _fileSystem = require("../utilities/fileSystem");
const _constants = require("../constants");
const _characters = require("../characters");
const defaultRegularExpression = /\${(.+?)}/g;
function parseFile(filePath, args, regularExpression = defaultRegularExpression) {
    const content = (0, _fileSystem.readFile)(filePath), parsedContent = parseContent(content, args, regularExpression);
    return parsedContent;
}
function parseContent(content, args, regularExpression = defaultRegularExpression) {
    const lines = content.split(_characters.NEW_LINE_CHARACTER), parsedLines = parseLines(lines, args, regularExpression), parsedContent = parsedLines.join(_characters.NEW_LINE_CHARACTER);
    return parsedContent;
}
function parseLine(line, args, regularExpression = defaultRegularExpression) {
    const parsedLine = line.replace(regularExpression, (match, token)=>{
        const parsedToken = parseToken(token, args);
        return parsedToken;
    });
    return parsedLine;
}
const _default = {
    parseFile,
    parseContent,
    parseLine
};
function parseLines(lines, args, regularExpression) {
    const parsedLines = lines.map((line)=>{
        const parsedLine = parseLine(line, args, regularExpression);
        return parsedLine;
    });
    return parsedLines;
}
function parseToken(token, args) {
    let parsedToken = _constants.EMPTY_STRING;
    if (args.hasOwnProperty(token)) {
        parsedToken = args[token];
    }
    return parsedToken;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvdGVtcGxhdGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHJlYWRGaWxlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9maWxlU3lzdGVtXCI7XG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBORVdfTElORV9DSEFSQUNURVIgfSBmcm9tIFwiLi4vY2hhcmFjdGVyc1wiO1xuXG5jb25zdCBkZWZhdWx0UmVndWxhckV4cHJlc3Npb24gPSAvXFwkeyguKz8pfS9nO1xuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VGaWxlKGZpbGVQYXRoLCBhcmdzLCByZWd1bGFyRXhwcmVzc2lvbiA9IGRlZmF1bHRSZWd1bGFyRXhwcmVzc2lvbikge1xuICBjb25zdCBjb250ZW50ID0gcmVhZEZpbGUoZmlsZVBhdGgpLFxuICAgICAgICBwYXJzZWRDb250ZW50ID0gcGFyc2VDb250ZW50KGNvbnRlbnQsIGFyZ3MsIHJlZ3VsYXJFeHByZXNzaW9uKTtcblxuICByZXR1cm4gcGFyc2VkQ29udGVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlQ29udGVudChjb250ZW50LCBhcmdzLCByZWd1bGFyRXhwcmVzc2lvbiA9IGRlZmF1bHRSZWd1bGFyRXhwcmVzc2lvbikge1xuICBjb25zdCBsaW5lcyA9IGNvbnRlbnQuc3BsaXQoTkVXX0xJTkVfQ0hBUkFDVEVSKSxcbiAgICAgICAgcGFyc2VkTGluZXMgPSBwYXJzZUxpbmVzKGxpbmVzLCBhcmdzLCByZWd1bGFyRXhwcmVzc2lvbiksXG4gICAgICAgIHBhcnNlZENvbnRlbnQgPSBwYXJzZWRMaW5lcy5qb2luKE5FV19MSU5FX0NIQVJBQ1RFUik7XG5cbiAgcmV0dXJuIHBhcnNlZENvbnRlbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUxpbmUobGluZSwgYXJncywgcmVndWxhckV4cHJlc3Npb24gPSBkZWZhdWx0UmVndWxhckV4cHJlc3Npb24pIHtcbiAgY29uc3QgcGFyc2VkTGluZSA9IGxpbmUucmVwbGFjZShyZWd1bGFyRXhwcmVzc2lvbiwgKG1hdGNoLCB0b2tlbikgPT4ge1xuICAgIGNvbnN0IHBhcnNlZFRva2VuID0gcGFyc2VUb2tlbih0b2tlbiwgYXJncyk7XG5cbiAgICByZXR1cm4gcGFyc2VkVG9rZW47XG4gIH0pO1xuXG4gIHJldHVybiBwYXJzZWRMaW5lO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHBhcnNlRmlsZSxcbiAgcGFyc2VDb250ZW50LFxuICBwYXJzZUxpbmVcbn07XG5cbmZ1bmN0aW9uIHBhcnNlTGluZXMobGluZXMsIGFyZ3MsIHJlZ3VsYXJFeHByZXNzaW9uKSB7XG4gIGNvbnN0IHBhcnNlZExpbmVzID0gbGluZXMubWFwKChsaW5lKSA9PiB7XG4gICAgY29uc3QgcGFyc2VkTGluZSA9IHBhcnNlTGluZShsaW5lLCBhcmdzLCByZWd1bGFyRXhwcmVzc2lvbik7XG5cbiAgICByZXR1cm4gcGFyc2VkTGluZTtcbiAgfSk7XG5cbiAgcmV0dXJuIHBhcnNlZExpbmVzO1xufVxuXG5mdW5jdGlvbiBwYXJzZVRva2VuKHRva2VuLCBhcmdzKSB7XG4gIGxldCBwYXJzZWRUb2tlbiA9IEVNUFRZX1NUUklORztcblxuICBpZiAoYXJncy5oYXNPd25Qcm9wZXJ0eSh0b2tlbikpIHtcbiAgICBwYXJzZWRUb2tlbiA9IGFyZ3NbdG9rZW5dO1xuICB9XG5cbiAgcmV0dXJuIHBhcnNlZFRva2VuO1xufVxuIl0sIm5hbWVzIjpbInBhcnNlQ29udGVudCIsInBhcnNlRmlsZSIsInBhcnNlTGluZSIsImRlZmF1bHRSZWd1bGFyRXhwcmVzc2lvbiIsImZpbGVQYXRoIiwiYXJncyIsInJlZ3VsYXJFeHByZXNzaW9uIiwiY29udGVudCIsInJlYWRGaWxlIiwicGFyc2VkQ29udGVudCIsImxpbmVzIiwic3BsaXQiLCJORVdfTElORV9DSEFSQUNURVIiLCJwYXJzZWRMaW5lcyIsInBhcnNlTGluZXMiLCJqb2luIiwibGluZSIsInBhcnNlZExpbmUiLCJyZXBsYWNlIiwibWF0Y2giLCJ0b2tlbiIsInBhcnNlZFRva2VuIiwicGFyc2VUb2tlbiIsIm1hcCIsIkVNUFRZX1NUUklORyIsImhhc093blByb3BlcnR5Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7UUFpQ0E7ZUFBQTs7UUFsQmdCQTtlQUFBQTs7UUFQQUM7ZUFBQUE7O1FBZUFDO2VBQUFBOzs7NEJBckJTOzJCQUNJOzRCQUNNO0FBRW5DLE1BQU1DLDJCQUEyQjtBQUUxQixTQUFTRixVQUFVRyxRQUFRLEVBQUVDLElBQUksRUFBRUMsb0JBQW9CSCx3QkFBd0I7SUFDcEYsTUFBTUksVUFBVUMsSUFBQUEsb0JBQVEsRUFBQ0osV0FDbkJLLGdCQUFnQlQsYUFBYU8sU0FBU0YsTUFBTUM7SUFFbEQsT0FBT0c7QUFDVDtBQUVPLFNBQVNULGFBQWFPLE9BQU8sRUFBRUYsSUFBSSxFQUFFQyxvQkFBb0JILHdCQUF3QjtJQUN0RixNQUFNTyxRQUFRSCxRQUFRSSxLQUFLLENBQUNDLDhCQUFrQixHQUN4Q0MsY0FBY0MsV0FBV0osT0FBT0wsTUFBTUMsb0JBQ3RDRyxnQkFBZ0JJLFlBQVlFLElBQUksQ0FBQ0gsOEJBQWtCO0lBRXpELE9BQU9IO0FBQ1Q7QUFFTyxTQUFTUCxVQUFVYyxJQUFJLEVBQUVYLElBQUksRUFBRUMsb0JBQW9CSCx3QkFBd0I7SUFDaEYsTUFBTWMsYUFBYUQsS0FBS0UsT0FBTyxDQUFDWixtQkFBbUIsQ0FBQ2EsT0FBT0M7UUFDekQsTUFBTUMsY0FBY0MsV0FBV0YsT0FBT2Y7UUFFdEMsT0FBT2dCO0lBQ1Q7SUFFQSxPQUFPSjtBQUNUO01BRUEsV0FBZTtJQUNiaEI7SUFDQUQ7SUFDQUU7QUFDRjtBQUVBLFNBQVNZLFdBQVdKLEtBQUssRUFBRUwsSUFBSSxFQUFFQyxpQkFBaUI7SUFDaEQsTUFBTU8sY0FBY0gsTUFBTWEsR0FBRyxDQUFDLENBQUNQO1FBQzdCLE1BQU1DLGFBQWFmLFVBQVVjLE1BQU1YLE1BQU1DO1FBRXpDLE9BQU9XO0lBQ1Q7SUFFQSxPQUFPSjtBQUNUO0FBRUEsU0FBU1MsV0FBV0YsS0FBSyxFQUFFZixJQUFJO0lBQzdCLElBQUlnQixjQUFjRyx1QkFBWTtJQUU5QixJQUFJbkIsS0FBS29CLGNBQWMsQ0FBQ0wsUUFBUTtRQUM5QkMsY0FBY2hCLElBQUksQ0FBQ2UsTUFBTTtJQUMzQjtJQUVBLE9BQU9DO0FBQ1QifQ==
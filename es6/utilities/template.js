'use strict';

const fileSystemUtilities = require('../utilities/fileSystem');

const { readFile } = fileSystemUtilities;

function parseFile(filePath, args, regex) {
  const content = readFile(filePath),
        parsedContent = parseContent(content, args, regex);

  return parsedContent;
}

function parseContent(content, args, regex) {
  const lines = content.split('\n'),
        parsedLines = parseLines(lines, args, regex),
        parsedContent = parsedLines.join('\n');

  return parsedContent;
}

function parseLine(line, args, regex = /\${(.+?)}/g) {
  const parsedLine = line.replace(regex, function(match, token) {
    const parsedToken = parseToken(token, args);

    return parsedToken;
  });

  return parsedLine;
}

module.exports = {
  parseFile,
  parseContent,
  parseLine
};

function parseLines(lines, args, regex) {
  const parsedLines = lines.map(function(line) {
    const parsedLine = parseLine(line, args, regex);

    return parsedLine;
  });

  return parsedLines;
}

function parseToken(token, args) {
  let parsedToken = '';

  if (args.hasOwnProperty(token)) {
    parsedToken = args[token];
  }

  return parsedToken;
}

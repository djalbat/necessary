'use strict';

const fileSystemUtilities = require('../utilities/fileSystem');

const { readFile } = fileSystemUtilities;

function parseFile(filePath, args) {
  const content = readFile(filePath),
        parsedContent = parseContent(content, args);

  return parsedContent;
}

function parseContent(content, args) {
  const lines = content.split('\n'),
        parsedLines = parseLines(lines, args),
        parsedContent = parsedLines.join('\n');

  return parsedContent;
}

function parseLine(line, args) {
  const parsedLine = line.replace(/\$\{(.+?)\}/g, function(match, token) {
    const parsedToken = parseToken(token, args);

    return parsedToken;
  });

  return parsedLine;
}

module.exports = {
  parseFile: parseFile,
  parseContent: parseContent,
  parseLine: parseLine
};

function parseLines(lines, args) {
  const parsedLines = lines.map(function(line) {
    const parsedLine = parseLine(line, args);

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

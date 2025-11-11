"use strict";

import { readFile } from "../utilities/fileSystem";
import { EMPTY_STRING } from "../constants";
import { NEW_LINE_CHARACTER } from "../characters";

const defaultRegularExpression = /\${(.+?)}/g;

export function parseFile(filePath, args, regularExpression = defaultRegularExpression) {
  const content = readFile(filePath),
        parsedContent = parseContent(content, args, regularExpression);

  return parsedContent;
}

export function parseContent(content, args, regularExpression = defaultRegularExpression) {
  const lines = content.split(NEW_LINE_CHARACTER),
        parsedLines = parseLines(lines, args, regularExpression),
        parsedContent = parsedLines.join(NEW_LINE_CHARACTER);

  return parsedContent;
}

export function parseLine(line, args, regularExpression = defaultRegularExpression) {
  const parsedLine = line.replace(regularExpression, (match, token) => {
    const parsedToken = parseToken(token, args);

    return parsedToken;
  });

  return parsedLine;
}

export default {
  parseFile,
  parseContent,
  parseLine
};

function parseLines(lines, args, regularExpression) {
  const parsedLines = lines.map((line) => {
    const parsedLine = parseLine(line, args, regularExpression);

    return parsedLine;
  });

  return parsedLines;
}

function parseToken(token, args) {
  let parsedToken = EMPTY_STRING;

  if (args.hasOwnProperty(token)) {
    parsedToken = args[token];
  }

  return parsedToken;
}

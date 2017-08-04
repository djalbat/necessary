'use strict';

const fs = require('fs');

class fileSystem {
  static readFile(filePath, encoding = 'utf8') {
    const options = {
            encoding: encoding
          },
          content = fs.readFileSync(filePath, options);

    return content;
  }

  static readDirectory(directoryPath) {
    const entryNames = fs.readdirSync(directoryPath);

    return entryNames;
  }

  static fileExists(filePath) {
    return fs.existsSync(filePath);
  }
}

module.exports = fileSystem;

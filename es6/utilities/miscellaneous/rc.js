'use strict';

const path = require('path');

const pathUtilities = require('../../utilities/path'),
      arrayUtilities = require('../../utilities/array'),
      fileSystemUtilities = require('../utilities/fileSystem');

const { second } = arrayUtilities,
      { concatenatePaths } = pathUtilities,
      { doesFileExist, readFile, appendToFile, renameFile, getStats } = fileSystemUtilities;

function rc(fileName) {

}

module.exports = {
  rc: rc
};

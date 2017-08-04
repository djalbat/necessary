'use strict';

const array = require('./array');

class pathUtil {
  static isPathTopmostDirectoryName(path) {
    const topmostDirectoryName = pathUtil.topmostDirectoryNameFromPath(path),
          pathTopmostDirectoryName = (topmostDirectoryName === null); ///

    return pathTopmostDirectoryName;
  }

  static bottommostNameFromPath(path) {
    let bottommostName = null;
    
    const matches = path.match(/^.*\/([^\/]*$)/);
    
    if (matches !== null) {
      const secondMatch = array.second(matches);
      
      bottommostName = secondMatch;  ///
    }

    return bottommostName;
  }

  static topmostDirectoryNameFromPath(path) {
    let topmostDirectoryName = null;
    
    const matches = path.match(/^([^\/]*)\//);

    if (matches !== null) {
      const secondMatch = array.second(matches);

      topmostDirectoryName = secondMatch;  ///
    }

    return topmostDirectoryName;
  }

  static pathWithoutBottommostNameFromPath(path) {
    let pathWithoutBottommostName = null;
    
    const matches = path.match(/(^.*)\/[^\/]*$/);

    if (matches !== null) {
      const secondMatch = array.second(matches);

      pathWithoutBottommostName = secondMatch; ///
    }

    return pathWithoutBottommostName;
  }

  static pathWithoutTopmostDirectoryNameFromPath(path) {
    let pathWithoutTopmostDirectoryName = null;
    
    const matches = path.match(/^[^\/]*\/(.*$)/);

    if (matches !== null) {
      const secondMatch = array.second(matches);

      pathWithoutTopmostDirectoryName = secondMatch;
    }

    return pathWithoutTopmostDirectoryName;
  }
}

module.exports = pathUtil;

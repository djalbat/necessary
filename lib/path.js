'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var array = require('./array');

var pathUtil = function () {
  function pathUtil() {
    _classCallCheck(this, pathUtil);
  }

  _createClass(pathUtil, null, [{
    key: 'isPathTopmostDirectoryName',
    value: function isPathTopmostDirectoryName(path) {
      var topmostDirectoryName = pathUtil.topmostDirectoryNameFromPath(path),
          pathTopmostDirectoryName = topmostDirectoryName === null; ///

      return pathTopmostDirectoryName;
    }
  }, {
    key: 'bottommostNameFromPath',
    value: function bottommostNameFromPath(path) {
      var bottommostName = null;

      var matches = path.match(/^.*\/([^\/]*$)/);

      if (matches !== null) {
        var secondMatch = array.second(matches);

        bottommostName = secondMatch; ///
      }

      return bottommostName;
    }
  }, {
    key: 'topmostDirectoryNameFromPath',
    value: function topmostDirectoryNameFromPath(path) {
      var topmostDirectoryName = null;

      var matches = path.match(/^([^\/]*)\//);

      if (matches !== null) {
        var secondMatch = array.second(matches);

        topmostDirectoryName = secondMatch; ///
      }

      return topmostDirectoryName;
    }
  }, {
    key: 'pathWithoutBottommostNameFromPath',
    value: function pathWithoutBottommostNameFromPath(path) {
      var pathWithoutBottommostName = null;

      var matches = path.match(/(^.*)\/[^\/]*$/);

      if (matches !== null) {
        var secondMatch = array.second(matches);

        pathWithoutBottommostName = secondMatch; ///
      }

      return pathWithoutBottommostName;
    }
  }, {
    key: 'pathWithoutTopmostDirectoryNameFromPath',
    value: function pathWithoutTopmostDirectoryNameFromPath(path) {
      var pathWithoutTopmostDirectoryName = null;

      var matches = path.match(/^[^\/]*\/(.*$)/);

      if (matches !== null) {
        var secondMatch = array.second(matches);

        pathWithoutTopmostDirectoryName = secondMatch;
      }

      return pathWithoutTopmostDirectoryName;
    }
  }]);

  return pathUtil;
}();

module.exports = pathUtil;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9wYXRoLmpzIl0sIm5hbWVzIjpbImFycmF5IiwicmVxdWlyZSIsInBhdGhVdGlsIiwicGF0aCIsInRvcG1vc3REaXJlY3RvcnlOYW1lIiwidG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aCIsInBhdGhUb3Btb3N0RGlyZWN0b3J5TmFtZSIsImJvdHRvbW1vc3ROYW1lIiwibWF0Y2hlcyIsIm1hdGNoIiwic2Vjb25kTWF0Y2giLCJzZWNvbmQiLCJwYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lIiwicGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxRQUFRQyxRQUFRLFNBQVIsQ0FBZDs7SUFFTUMsUTs7Ozs7OzsrQ0FDOEJDLEksRUFBTTtBQUN0QyxVQUFNQyx1QkFBdUJGLFNBQVNHLDRCQUFULENBQXNDRixJQUF0QyxDQUE3QjtBQUFBLFVBQ01HLDJCQUE0QkYseUJBQXlCLElBRDNELENBRHNDLENBRTRCOztBQUVsRSxhQUFPRSx3QkFBUDtBQUNEOzs7MkNBRTZCSCxJLEVBQU07QUFDbEMsVUFBSUksaUJBQWlCLElBQXJCOztBQUVBLFVBQU1DLFVBQVVMLEtBQUtNLEtBQUwsQ0FBVyxnQkFBWCxDQUFoQjs7QUFFQSxVQUFJRCxZQUFZLElBQWhCLEVBQXNCO0FBQ3BCLFlBQU1FLGNBQWNWLE1BQU1XLE1BQU4sQ0FBYUgsT0FBYixDQUFwQjs7QUFFQUQseUJBQWlCRyxXQUFqQixDQUhvQixDQUdXO0FBQ2hDOztBQUVELGFBQU9ILGNBQVA7QUFDRDs7O2lEQUVtQ0osSSxFQUFNO0FBQ3hDLFVBQUlDLHVCQUF1QixJQUEzQjs7QUFFQSxVQUFNSSxVQUFVTCxLQUFLTSxLQUFMLENBQVcsYUFBWCxDQUFoQjs7QUFFQSxVQUFJRCxZQUFZLElBQWhCLEVBQXNCO0FBQ3BCLFlBQU1FLGNBQWNWLE1BQU1XLE1BQU4sQ0FBYUgsT0FBYixDQUFwQjs7QUFFQUosK0JBQXVCTSxXQUF2QixDQUhvQixDQUdpQjtBQUN0Qzs7QUFFRCxhQUFPTixvQkFBUDtBQUNEOzs7c0RBRXdDRCxJLEVBQU07QUFDN0MsVUFBSVMsNEJBQTRCLElBQWhDOztBQUVBLFVBQU1KLFVBQVVMLEtBQUtNLEtBQUwsQ0FBVyxnQkFBWCxDQUFoQjs7QUFFQSxVQUFJRCxZQUFZLElBQWhCLEVBQXNCO0FBQ3BCLFlBQU1FLGNBQWNWLE1BQU1XLE1BQU4sQ0FBYUgsT0FBYixDQUFwQjs7QUFFQUksb0NBQTRCRixXQUE1QixDQUhvQixDQUdxQjtBQUMxQzs7QUFFRCxhQUFPRSx5QkFBUDtBQUNEOzs7NERBRThDVCxJLEVBQU07QUFDbkQsVUFBSVUsa0NBQWtDLElBQXRDOztBQUVBLFVBQU1MLFVBQVVMLEtBQUtNLEtBQUwsQ0FBVyxnQkFBWCxDQUFoQjs7QUFFQSxVQUFJRCxZQUFZLElBQWhCLEVBQXNCO0FBQ3BCLFlBQU1FLGNBQWNWLE1BQU1XLE1BQU4sQ0FBYUgsT0FBYixDQUFwQjs7QUFFQUssMENBQWtDSCxXQUFsQztBQUNEOztBQUVELGFBQU9HLCtCQUFQO0FBQ0Q7Ozs7OztBQUdIQyxPQUFPQyxPQUFQLEdBQWlCYixRQUFqQiIsImZpbGUiOiJwYXRoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBhcnJheSA9IHJlcXVpcmUoJy4vYXJyYXknKTtcblxuY2xhc3MgcGF0aFV0aWwge1xuICBzdGF0aWMgaXNQYXRoVG9wbW9zdERpcmVjdG9yeU5hbWUocGF0aCkge1xuICAgIGNvbnN0IHRvcG1vc3REaXJlY3RvcnlOYW1lID0gcGF0aFV0aWwudG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aChwYXRoKSxcbiAgICAgICAgICBwYXRoVG9wbW9zdERpcmVjdG9yeU5hbWUgPSAodG9wbW9zdERpcmVjdG9yeU5hbWUgPT09IG51bGwpOyAvLy9cblxuICAgIHJldHVybiBwYXRoVG9wbW9zdERpcmVjdG9yeU5hbWU7XG4gIH1cblxuICBzdGF0aWMgYm90dG9tbW9zdE5hbWVGcm9tUGF0aChwYXRoKSB7XG4gICAgbGV0IGJvdHRvbW1vc3ROYW1lID0gbnVsbDtcbiAgICBcbiAgICBjb25zdCBtYXRjaGVzID0gcGF0aC5tYXRjaCgvXi4qXFwvKFteXFwvXSokKS8pO1xuICAgIFxuICAgIGlmIChtYXRjaGVzICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzZWNvbmRNYXRjaCA9IGFycmF5LnNlY29uZChtYXRjaGVzKTtcbiAgICAgIFxuICAgICAgYm90dG9tbW9zdE5hbWUgPSBzZWNvbmRNYXRjaDsgIC8vL1xuICAgIH1cblxuICAgIHJldHVybiBib3R0b21tb3N0TmFtZTtcbiAgfVxuXG4gIHN0YXRpYyB0b3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoKHBhdGgpIHtcbiAgICBsZXQgdG9wbW9zdERpcmVjdG9yeU5hbWUgPSBudWxsO1xuICAgIFxuICAgIGNvbnN0IG1hdGNoZXMgPSBwYXRoLm1hdGNoKC9eKFteXFwvXSopXFwvLyk7XG5cbiAgICBpZiAobWF0Y2hlcyAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc2Vjb25kTWF0Y2ggPSBhcnJheS5zZWNvbmQobWF0Y2hlcyk7XG5cbiAgICAgIHRvcG1vc3REaXJlY3RvcnlOYW1lID0gc2Vjb25kTWF0Y2g7ICAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gdG9wbW9zdERpcmVjdG9yeU5hbWU7XG4gIH1cblxuICBzdGF0aWMgcGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZUZyb21QYXRoKHBhdGgpIHtcbiAgICBsZXQgcGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZSA9IG51bGw7XG4gICAgXG4gICAgY29uc3QgbWF0Y2hlcyA9IHBhdGgubWF0Y2goLyheLiopXFwvW15cXC9dKiQvKTtcblxuICAgIGlmIChtYXRjaGVzICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzZWNvbmRNYXRjaCA9IGFycmF5LnNlY29uZChtYXRjaGVzKTtcblxuICAgICAgcGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZSA9IHNlY29uZE1hdGNoOyAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gcGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZTtcbiAgfVxuXG4gIHN0YXRpYyBwYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGgocGF0aCkge1xuICAgIGxldCBwYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lID0gbnVsbDtcbiAgICBcbiAgICBjb25zdCBtYXRjaGVzID0gcGF0aC5tYXRjaCgvXlteXFwvXSpcXC8oLiokKS8pO1xuXG4gICAgaWYgKG1hdGNoZXMgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHNlY29uZE1hdGNoID0gYXJyYXkuc2Vjb25kKG1hdGNoZXMpO1xuXG4gICAgICBwYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lID0gc2Vjb25kTWF0Y2g7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBwYXRoVXRpbDtcbiJdfQ==
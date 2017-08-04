'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var fs = require('fs');

var fileSystem = function () {
  function fileSystem() {
    _classCallCheck(this, fileSystem);
  }

  _createClass(fileSystem, null, [{
    key: 'readFile',
    value: function readFile(filePath) {
      var encoding = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'utf8';

      var options = {
        encoding: encoding
      },
          content = fs.readFileSync(filePath, options);

      return content;
    }
  }, {
    key: 'readDirectory',
    value: function readDirectory(directoryPath) {
      var entryNames = fs.readdirSync(directoryPath);

      return entryNames;
    }
  }, {
    key: 'fileExists',
    value: function fileExists(filePath) {
      return fs.existsSync(filePath);
    }
  }]);

  return fileSystem;
}();

module.exports = fileSystem;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9maWxlU3lzdGVtLmpzIl0sIm5hbWVzIjpbImZzIiwicmVxdWlyZSIsImZpbGVTeXN0ZW0iLCJmaWxlUGF0aCIsImVuY29kaW5nIiwib3B0aW9ucyIsImNvbnRlbnQiLCJyZWFkRmlsZVN5bmMiLCJkaXJlY3RvcnlQYXRoIiwiZW50cnlOYW1lcyIsInJlYWRkaXJTeW5jIiwiZXhpc3RzU3luYyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxLQUFLQyxRQUFRLElBQVIsQ0FBWDs7SUFFTUMsVTs7Ozs7Ozs2QkFDWUMsUSxFQUE2QjtBQUFBLFVBQW5CQyxRQUFtQix1RUFBUixNQUFROztBQUMzQyxVQUFNQyxVQUFVO0FBQ1JELGtCQUFVQTtBQURGLE9BQWhCO0FBQUEsVUFHTUUsVUFBVU4sR0FBR08sWUFBSCxDQUFnQkosUUFBaEIsRUFBMEJFLE9BQTFCLENBSGhCOztBQUtBLGFBQU9DLE9BQVA7QUFDRDs7O2tDQUVvQkUsYSxFQUFlO0FBQ2xDLFVBQU1DLGFBQWFULEdBQUdVLFdBQUgsQ0FBZUYsYUFBZixDQUFuQjs7QUFFQSxhQUFPQyxVQUFQO0FBQ0Q7OzsrQkFFaUJOLFEsRUFBVTtBQUMxQixhQUFPSCxHQUFHVyxVQUFILENBQWNSLFFBQWQsQ0FBUDtBQUNEOzs7Ozs7QUFHSFMsT0FBT0MsT0FBUCxHQUFpQlgsVUFBakIiLCJmaWxlIjoiZmlsZVN5c3RlbS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZnMgPSByZXF1aXJlKCdmcycpO1xuXG5jbGFzcyBmaWxlU3lzdGVtIHtcbiAgc3RhdGljIHJlYWRGaWxlKGZpbGVQYXRoLCBlbmNvZGluZyA9ICd1dGY4Jykge1xuICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICBlbmNvZGluZzogZW5jb2RpbmdcbiAgICAgICAgICB9LFxuICAgICAgICAgIGNvbnRlbnQgPSBmcy5yZWFkRmlsZVN5bmMoZmlsZVBhdGgsIG9wdGlvbnMpO1xuXG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBzdGF0aWMgcmVhZERpcmVjdG9yeShkaXJlY3RvcnlQYXRoKSB7XG4gICAgY29uc3QgZW50cnlOYW1lcyA9IGZzLnJlYWRkaXJTeW5jKGRpcmVjdG9yeVBhdGgpO1xuXG4gICAgcmV0dXJuIGVudHJ5TmFtZXM7XG4gIH1cblxuICBzdGF0aWMgZmlsZUV4aXN0cyhmaWxlUGF0aCkge1xuICAgIHJldHVybiBmcy5leGlzdHNTeW5jKGZpbGVQYXRoKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZpbGVTeXN0ZW07XG4iXX0=
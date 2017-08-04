'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var async = function () {
  function async() {
    _classCallCheck(this, async);
  }

  _createClass(async, null, [{
    key: 'forEach',
    value: function forEach(array, callback, done) {
      var arrayLength = array.length;

      var index = -1;

      var next = function next() {
        index++;

        if (index === arrayLength) {
          if (done) {
            done();
          }
        } else {
          var element = array[index];

          callback(element, next);
        }
      };

      next();
    }
  }, {
    key: 'whilst',
    value: function whilst(test, callback, done) {
      var next = function next() {
        if (test()) {
          callback(next);
        } else {
          done();
        }
      };

      next();
    }
  }]);

  return async;
}();

module.exports = async;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9hc3luYy5qcyJdLCJuYW1lcyI6WyJhc3luYyIsImFycmF5IiwiY2FsbGJhY2siLCJkb25lIiwiYXJyYXlMZW5ndGgiLCJsZW5ndGgiLCJpbmRleCIsIm5leHQiLCJlbGVtZW50IiwidGVzdCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7SUFFTUEsSzs7Ozs7Ozs0QkFDV0MsSyxFQUFPQyxRLEVBQVVDLEksRUFBTTtBQUNwQyxVQUFNQyxjQUFjSCxNQUFNSSxNQUExQjs7QUFFQSxVQUFJQyxRQUFRLENBQUMsQ0FBYjs7QUFFQSxVQUFNQyxPQUFPLFNBQVBBLElBQU8sR0FBVztBQUN0QkQ7O0FBRUEsWUFBSUEsVUFBVUYsV0FBZCxFQUEyQjtBQUN6QixjQUFJRCxJQUFKLEVBQVU7QUFDUkE7QUFDRDtBQUNGLFNBSkQsTUFJTztBQUNMLGNBQU1LLFVBQVVQLE1BQU1LLEtBQU4sQ0FBaEI7O0FBRUFKLG1CQUFTTSxPQUFULEVBQWtCRCxJQUFsQjtBQUNEO0FBQ0YsT0FaRDs7QUFjQUE7QUFDRDs7OzJCQUVhRSxJLEVBQU1QLFEsRUFBVUMsSSxFQUFNO0FBQ2xDLFVBQU1JLE9BQU8sU0FBUEEsSUFBTyxHQUFXO0FBQ3RCLFlBQUlFLE1BQUosRUFBWTtBQUNWUCxtQkFBU0ssSUFBVDtBQUNELFNBRkQsTUFFTztBQUNMSjtBQUNEO0FBQ0YsT0FORDs7QUFRQUk7QUFDRDs7Ozs7O0FBR0hHLE9BQU9DLE9BQVAsR0FBaUJYLEtBQWpCIiwiZmlsZSI6ImFzeW5jLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxuY2xhc3MgYXN5bmMge1xyXG4gIHN0YXRpYyBmb3JFYWNoKGFycmF5LCBjYWxsYmFjaywgZG9uZSkge1xyXG4gICAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XHJcbiAgICBcclxuICAgIGxldCBpbmRleCA9IC0xO1xyXG5cclxuICAgIGNvbnN0IG5leHQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgaW5kZXgrKztcclxuXHJcbiAgICAgIGlmIChpbmRleCA9PT0gYXJyYXlMZW5ndGgpIHtcclxuICAgICAgICBpZiAoZG9uZSkge1xyXG4gICAgICAgICAgZG9uZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdO1xyXG5cclxuICAgICAgICBjYWxsYmFjayhlbGVtZW50LCBuZXh0KTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBuZXh0KCk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgd2hpbHN0KHRlc3QsIGNhbGxiYWNrLCBkb25lKSB7XHJcbiAgICBjb25zdCBuZXh0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgIGlmICh0ZXN0KCkpIHtcclxuICAgICAgICBjYWxsYmFjayhuZXh0KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBkb25lKCk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgbmV4dCgpO1xyXG4gIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBhc3luYztcclxuIl19
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

          callback(element, index, next);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9hc3luYy5qcyJdLCJuYW1lcyI6WyJhc3luYyIsImFycmF5IiwiY2FsbGJhY2siLCJkb25lIiwiYXJyYXlMZW5ndGgiLCJsZW5ndGgiLCJpbmRleCIsIm5leHQiLCJlbGVtZW50IiwidGVzdCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7SUFFTUEsSzs7Ozs7Ozs0QkFDV0MsSyxFQUFPQyxRLEVBQVVDLEksRUFBTTtBQUNwQyxVQUFNQyxjQUFjSCxNQUFNSSxNQUExQjs7QUFFQSxVQUFJQyxRQUFRLENBQUMsQ0FBYjs7QUFFQSxVQUFNQyxPQUFPLFNBQVBBLElBQU8sR0FBVztBQUN0QkQ7O0FBRUEsWUFBSUEsVUFBVUYsV0FBZCxFQUEyQjtBQUN6QixjQUFJRCxJQUFKLEVBQVU7QUFDUkE7QUFDRDtBQUNGLFNBSkQsTUFJTztBQUNMLGNBQU1LLFVBQVVQLE1BQU1LLEtBQU4sQ0FBaEI7O0FBRUFKLG1CQUFTTSxPQUFULEVBQWtCRixLQUFsQixFQUF5QkMsSUFBekI7QUFDRDtBQUNGLE9BWkQ7O0FBY0FBO0FBQ0Q7OzsyQkFFYUUsSSxFQUFNUCxRLEVBQVVDLEksRUFBTTtBQUNsQyxVQUFNSSxPQUFPLFNBQVBBLElBQU8sR0FBVztBQUN0QixZQUFJRSxNQUFKLEVBQVk7QUFDVlAsbUJBQVNLLElBQVQ7QUFDRCxTQUZELE1BRU87QUFDTEo7QUFDRDtBQUNGLE9BTkQ7O0FBUUFJO0FBQ0Q7Ozs7OztBQUdIRyxPQUFPQyxPQUFQLEdBQWlCWCxLQUFqQiIsImZpbGUiOiJhc3luYy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbmNsYXNzIGFzeW5jIHtcclxuICBzdGF0aWMgZm9yRWFjaChhcnJheSwgY2FsbGJhY2ssIGRvbmUpIHtcclxuICAgIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xyXG4gICAgXHJcbiAgICBsZXQgaW5kZXggPSAtMTtcclxuXHJcbiAgICBjb25zdCBuZXh0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgIGluZGV4Kys7XHJcblxyXG4gICAgICBpZiAoaW5kZXggPT09IGFycmF5TGVuZ3RoKSB7XHJcbiAgICAgICAgaWYgKGRvbmUpIHtcclxuICAgICAgICAgIGRvbmUoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XTtcclxuXHJcbiAgICAgICAgY2FsbGJhY2soZWxlbWVudCwgaW5kZXgsIG5leHQpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIG5leHQoKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyB3aGlsc3QodGVzdCwgY2FsbGJhY2ssIGRvbmUpIHtcclxuICAgIGNvbnN0IG5leHQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgaWYgKHRlc3QoKSkge1xyXG4gICAgICAgIGNhbGxiYWNrKG5leHQpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRvbmUoKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBuZXh0KCk7XHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGFzeW5jO1xyXG4iXX0=
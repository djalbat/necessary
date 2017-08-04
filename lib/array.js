'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var array = function () {
  function array() {
    _classCallCheck(this, array);
  }

  _createClass(array, null, [{
    key: 'first',
    value: function first(array) {
      return array[0];
    }
  }, {
    key: 'second',
    value: function second(array) {
      return array[1];
    }
  }, {
    key: 'last',
    value: function last(array) {
      return array[array.length - 1];
    }
  }, {
    key: 'tail',
    value: function tail(array) {
      return array.slice(1);
    }
  }, {
    key: 'push',
    value: function push(array1, array2) {
      Array.prototype.push.apply(array1, array2);
    }
  }, {
    key: 'unshift',
    value: function unshift(array1, array2) {
      Array.prototype.unshift.apply(array1, array2);
    }
  }, {
    key: 'splice',
    value: function splice(array, start, deleteCount) {
      var itemsArray = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];

      var args = [start, deleteCount].concat(_toConsumableArray(itemsArray)),
          deletedItemsArray = Array.prototype.splice.apply(array, args);

      return deletedItemsArray;
    }
  }, {
    key: 'combine',
    value: function combine(array1) {
      var array2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var test = arguments[2];

      array1 = array2.reduce(function (array1, element, index) {
        var passed = test(element, index);

        if (passed) {
          array1.push(element);
        }

        return array1;
      }, array1);

      return array1;
    }
  }, {
    key: 'forwardsForEach',
    value: function forwardsForEach(array, callback) {
      array.forEach(function (element, index) {
        callback(element, index);
      });
    }
  }, {
    key: 'backwardsForEach',
    value: function backwardsForEach(array, callback) {
      var arrayLength = array.length;

      for (var index = arrayLength - 1; index >= 0; index--) {
        var element = array[index];

        callback(element, index);
      }
    }
  }]);

  return array;
}();

module.exports = array;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9hcnJheS5qcyJdLCJuYW1lcyI6WyJhcnJheSIsImxlbmd0aCIsInNsaWNlIiwiYXJyYXkxIiwiYXJyYXkyIiwiQXJyYXkiLCJwcm90b3R5cGUiLCJwdXNoIiwiYXBwbHkiLCJ1bnNoaWZ0Iiwic3RhcnQiLCJkZWxldGVDb3VudCIsIml0ZW1zQXJyYXkiLCJhcmdzIiwiZGVsZXRlZEl0ZW1zQXJyYXkiLCJzcGxpY2UiLCJ0ZXN0IiwicmVkdWNlIiwiZWxlbWVudCIsImluZGV4IiwicGFzc2VkIiwiY2FsbGJhY2siLCJmb3JFYWNoIiwiYXJyYXlMZW5ndGgiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7SUFFTUEsSzs7Ozs7OzswQkFDU0EsSyxFQUFPO0FBQUUsYUFBT0EsTUFBTSxDQUFOLENBQVA7QUFBa0I7OzsyQkFFMUJBLEssRUFBTztBQUFFLGFBQU9BLE1BQU0sQ0FBTixDQUFQO0FBQWtCOzs7eUJBRTdCQSxLLEVBQU87QUFBRSxhQUFPQSxNQUFNQSxNQUFNQyxNQUFOLEdBQWUsQ0FBckIsQ0FBUDtBQUFpQzs7O3lCQUUxQ0QsSyxFQUFPO0FBQUUsYUFBT0EsTUFBTUUsS0FBTixDQUFZLENBQVosQ0FBUDtBQUF3Qjs7O3lCQUVqQ0MsTSxFQUFRQyxNLEVBQVE7QUFBRUMsWUFBTUMsU0FBTixDQUFnQkMsSUFBaEIsQ0FBcUJDLEtBQXJCLENBQTJCTCxNQUEzQixFQUFtQ0MsTUFBbkM7QUFBNkM7Ozs0QkFFNURELE0sRUFBUUMsTSxFQUFRO0FBQUVDLFlBQU1DLFNBQU4sQ0FBZ0JHLE9BQWhCLENBQXdCRCxLQUF4QixDQUE4QkwsTUFBOUIsRUFBc0NDLE1BQXRDO0FBQWdEOzs7MkJBRW5FSixLLEVBQU9VLEssRUFBT0MsVyxFQUE4QjtBQUFBLFVBQWpCQyxVQUFpQix1RUFBSixFQUFJOztBQUN4RCxVQUFNQyxRQUFRSCxLQUFSLEVBQWVDLFdBQWYsNEJBQStCQyxVQUEvQixFQUFOO0FBQUEsVUFDTUUsb0JBQW9CVCxNQUFNQyxTQUFOLENBQWdCUyxNQUFoQixDQUF1QlAsS0FBdkIsQ0FBNkJSLEtBQTdCLEVBQW9DYSxJQUFwQyxDQUQxQjs7QUFHQSxhQUFPQyxpQkFBUDtBQUNEOzs7NEJBRWNYLE0sRUFBMkI7QUFBQSxVQUFuQkMsTUFBbUIsdUVBQVYsRUFBVTtBQUFBLFVBQU5ZLElBQU07O0FBQ3hDYixlQUFTQyxPQUFPYSxNQUFQLENBQWMsVUFBU2QsTUFBVCxFQUFpQmUsT0FBakIsRUFBMEJDLEtBQTFCLEVBQWlDO0FBQ3RELFlBQU1DLFNBQVNKLEtBQUtFLE9BQUwsRUFBY0MsS0FBZCxDQUFmOztBQUVBLFlBQUlDLE1BQUosRUFBWTtBQUNWakIsaUJBQU9JLElBQVAsQ0FBWVcsT0FBWjtBQUNEOztBQUVELGVBQU9mLE1BQVA7QUFDRCxPQVJRLEVBUU5BLE1BUk0sQ0FBVDs7QUFVQSxhQUFPQSxNQUFQO0FBQ0Q7OztvQ0FFc0JILEssRUFBT3FCLFEsRUFBVTtBQUN0Q3JCLFlBQU1zQixPQUFOLENBQWMsVUFBU0osT0FBVCxFQUFrQkMsS0FBbEIsRUFBeUI7QUFDckNFLGlCQUFTSCxPQUFULEVBQWtCQyxLQUFsQjtBQUNELE9BRkQ7QUFHRDs7O3FDQUV1Qm5CLEssRUFBT3FCLFEsRUFBVTtBQUN2QyxVQUFNRSxjQUFjdkIsTUFBTUMsTUFBMUI7O0FBRUEsV0FBSyxJQUFJa0IsUUFBUUksY0FBYyxDQUEvQixFQUFrQ0osU0FBUyxDQUEzQyxFQUE4Q0EsT0FBOUMsRUFBdUQ7QUFDckQsWUFBTUQsVUFBVWxCLE1BQU1tQixLQUFOLENBQWhCOztBQUVBRSxpQkFBU0gsT0FBVCxFQUFrQkMsS0FBbEI7QUFDRDtBQUNGOzs7Ozs7QUFHSEssT0FBT0MsT0FBUCxHQUFpQnpCLEtBQWpCIiwiZmlsZSI6ImFycmF5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBhcnJheSB7XG4gIHN0YXRpYyBmaXJzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbMF07IH1cblxuICBzdGF0aWMgc2Vjb25kKGFycmF5KSB7IHJldHVybiBhcnJheVsxXTsgfVxuXG4gIHN0YXRpYyBsYXN0KGFycmF5KSB7IHJldHVybiBhcnJheVthcnJheS5sZW5ndGggLSAxXTsgfVxuXG4gIHN0YXRpYyB0YWlsKGFycmF5KSB7IHJldHVybiBhcnJheS5zbGljZSgxKTsgfVxuXG4gIHN0YXRpYyBwdXNoKGFycmF5MSwgYXJyYXkyKSB7IEFycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KGFycmF5MSwgYXJyYXkyKTsgfVxuXG4gIHN0YXRpYyB1bnNoaWZ0KGFycmF5MSwgYXJyYXkyKSB7IEFycmF5LnByb3RvdHlwZS51bnNoaWZ0LmFwcGx5KGFycmF5MSwgYXJyYXkyKTsgfVxuXG4gIHN0YXRpYyBzcGxpY2UoYXJyYXksIHN0YXJ0LCBkZWxldGVDb3VudCwgaXRlbXNBcnJheSA9IFtdKSB7XG4gICAgY29uc3QgYXJncyA9IFtzdGFydCwgZGVsZXRlQ291bnQsIC4uLml0ZW1zQXJyYXldLFxuICAgICAgICAgIGRlbGV0ZWRJdGVtc0FycmF5ID0gQXJyYXkucHJvdG90eXBlLnNwbGljZS5hcHBseShhcnJheSwgYXJncyk7XG5cbiAgICByZXR1cm4gZGVsZXRlZEl0ZW1zQXJyYXk7XG4gIH1cblxuICBzdGF0aWMgY29tYmluZShhcnJheTEsIGFycmF5MiA9IFtdLCB0ZXN0KSB7XG4gICAgYXJyYXkxID0gYXJyYXkyLnJlZHVjZShmdW5jdGlvbihhcnJheTEsIGVsZW1lbnQsIGluZGV4KSB7XG4gICAgICBjb25zdCBwYXNzZWQgPSB0ZXN0KGVsZW1lbnQsIGluZGV4KTtcblxuICAgICAgaWYgKHBhc3NlZCkge1xuICAgICAgICBhcnJheTEucHVzaChlbGVtZW50KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGFycmF5MTtcbiAgICB9LCBhcnJheTEpO1xuXG4gICAgcmV0dXJuIGFycmF5MTtcbiAgfVxuICBcbiAgc3RhdGljIGZvcndhcmRzRm9yRWFjaChhcnJheSwgY2FsbGJhY2spIHtcbiAgICBhcnJheS5mb3JFYWNoKGZ1bmN0aW9uKGVsZW1lbnQsIGluZGV4KSB7XG4gICAgICBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgYmFja3dhcmRzRm9yRWFjaChhcnJheSwgY2FsbGJhY2spIHtcbiAgICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICAgIGZvciAodmFyIGluZGV4ID0gYXJyYXlMZW5ndGggLSAxOyBpbmRleCA+PSAwOyBpbmRleC0tKSB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdO1xuXG4gICAgICBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG4gICAgfVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXk7XG4iXX0=
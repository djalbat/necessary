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
  }]);

  return array;
}();

module.exports = array;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9hcnJheS5qcyJdLCJuYW1lcyI6WyJhcnJheSIsImxlbmd0aCIsInNsaWNlIiwiYXJyYXkxIiwiYXJyYXkyIiwiQXJyYXkiLCJwcm90b3R5cGUiLCJwdXNoIiwiYXBwbHkiLCJ1bnNoaWZ0Iiwic3RhcnQiLCJkZWxldGVDb3VudCIsIml0ZW1zQXJyYXkiLCJhcmdzIiwiZGVsZXRlZEl0ZW1zQXJyYXkiLCJzcGxpY2UiLCJ0ZXN0IiwicmVkdWNlIiwiZWxlbWVudCIsImluZGV4IiwicGFzc2VkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0lBRU1BLEs7Ozs7Ozs7MEJBQ1NBLEssRUFBTztBQUFFLGFBQU9BLE1BQU0sQ0FBTixDQUFQO0FBQWtCOzs7MkJBRTFCQSxLLEVBQU87QUFBRSxhQUFPQSxNQUFNLENBQU4sQ0FBUDtBQUFrQjs7O3lCQUU3QkEsSyxFQUFPO0FBQUUsYUFBT0EsTUFBTUEsTUFBTUMsTUFBTixHQUFlLENBQXJCLENBQVA7QUFBaUM7Ozt5QkFFMUNELEssRUFBTztBQUFFLGFBQU9BLE1BQU1FLEtBQU4sQ0FBWSxDQUFaLENBQVA7QUFBd0I7Ozt5QkFFakNDLE0sRUFBUUMsTSxFQUFRO0FBQUVDLFlBQU1DLFNBQU4sQ0FBZ0JDLElBQWhCLENBQXFCQyxLQUFyQixDQUEyQkwsTUFBM0IsRUFBbUNDLE1BQW5DO0FBQTZDOzs7NEJBRTVERCxNLEVBQVFDLE0sRUFBUTtBQUFFQyxZQUFNQyxTQUFOLENBQWdCRyxPQUFoQixDQUF3QkQsS0FBeEIsQ0FBOEJMLE1BQTlCLEVBQXNDQyxNQUF0QztBQUFnRDs7OzJCQUVuRUosSyxFQUFPVSxLLEVBQU9DLFcsRUFBOEI7QUFBQSxVQUFqQkMsVUFBaUIsdUVBQUosRUFBSTs7QUFDeEQsVUFBTUMsUUFBUUgsS0FBUixFQUFlQyxXQUFmLDRCQUErQkMsVUFBL0IsRUFBTjtBQUFBLFVBQ01FLG9CQUFvQlQsTUFBTUMsU0FBTixDQUFnQlMsTUFBaEIsQ0FBdUJQLEtBQXZCLENBQTZCUixLQUE3QixFQUFvQ2EsSUFBcEMsQ0FEMUI7O0FBR0EsYUFBT0MsaUJBQVA7QUFDRDs7OzRCQUVjWCxNLEVBQTJCO0FBQUEsVUFBbkJDLE1BQW1CLHVFQUFWLEVBQVU7QUFBQSxVQUFOWSxJQUFNOztBQUN4Q2IsZUFBU0MsT0FBT2EsTUFBUCxDQUFjLFVBQVNkLE1BQVQsRUFBaUJlLE9BQWpCLEVBQTBCQyxLQUExQixFQUFpQztBQUN0RCxZQUFNQyxTQUFTSixLQUFLRSxPQUFMLEVBQWNDLEtBQWQsQ0FBZjs7QUFFQSxZQUFJQyxNQUFKLEVBQVk7QUFDVmpCLGlCQUFPSSxJQUFQLENBQVlXLE9BQVo7QUFDRDs7QUFFRCxlQUFPZixNQUFQO0FBQ0QsT0FSUSxFQVFOQSxNQVJNLENBQVQ7O0FBVUEsYUFBT0EsTUFBUDtBQUNEOzs7Ozs7QUFHSGtCLE9BQU9DLE9BQVAsR0FBaUJ0QixLQUFqQiIsImZpbGUiOiJhcnJheS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgYXJyYXkge1xuICBzdGF0aWMgZmlyc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzBdOyB9XG5cbiAgc3RhdGljIHNlY29uZChhcnJheSkgeyByZXR1cm4gYXJyYXlbMV07IH1cblxuICBzdGF0aWMgbGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gMV07IH1cblxuICBzdGF0aWMgdGFpbChhcnJheSkgeyByZXR1cm4gYXJyYXkuc2xpY2UoMSk7IH1cblxuICBzdGF0aWMgcHVzaChhcnJheTEsIGFycmF5MikgeyBBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseShhcnJheTEsIGFycmF5Mik7IH1cblxuICBzdGF0aWMgdW5zaGlmdChhcnJheTEsIGFycmF5MikgeyBBcnJheS5wcm90b3R5cGUudW5zaGlmdC5hcHBseShhcnJheTEsIGFycmF5Mik7IH1cblxuICBzdGF0aWMgc3BsaWNlKGFycmF5LCBzdGFydCwgZGVsZXRlQ291bnQsIGl0ZW1zQXJyYXkgPSBbXSkge1xuICAgIGNvbnN0IGFyZ3MgPSBbc3RhcnQsIGRlbGV0ZUNvdW50LCAuLi5pdGVtc0FycmF5XSxcbiAgICAgICAgICBkZWxldGVkSXRlbXNBcnJheSA9IEFycmF5LnByb3RvdHlwZS5zcGxpY2UuYXBwbHkoYXJyYXksIGFyZ3MpO1xuXG4gICAgcmV0dXJuIGRlbGV0ZWRJdGVtc0FycmF5O1xuICB9XG5cbiAgc3RhdGljIGNvbWJpbmUoYXJyYXkxLCBhcnJheTIgPSBbXSwgdGVzdCkge1xuICAgIGFycmF5MSA9IGFycmF5Mi5yZWR1Y2UoZnVuY3Rpb24oYXJyYXkxLCBlbGVtZW50LCBpbmRleCkge1xuICAgICAgY29uc3QgcGFzc2VkID0gdGVzdChlbGVtZW50LCBpbmRleCk7XG5cbiAgICAgIGlmIChwYXNzZWQpIHtcbiAgICAgICAgYXJyYXkxLnB1c2goZWxlbWVudCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBhcnJheTE7XG4gICAgfSwgYXJyYXkxKTtcblxuICAgIHJldHVybiBhcnJheTE7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheTtcbiJdfQ==
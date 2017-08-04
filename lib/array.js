'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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
    key: 'tail',
    value: function tail(array) {
      return array.slice(1);
    }
  }]);

  return array;
}();

module.exports = array;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9hcnJheS5qcyJdLCJuYW1lcyI6WyJhcnJheSIsInNsaWNlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztJQUVNQSxLOzs7Ozs7OzBCQUNTQSxLLEVBQU87QUFBRSxhQUFPQSxNQUFNLENBQU4sQ0FBUDtBQUFrQjs7OzJCQUUxQkEsSyxFQUFPO0FBQUUsYUFBT0EsTUFBTSxDQUFOLENBQVA7QUFBa0I7Ozt5QkFFN0JBLEssRUFBTztBQUFFLGFBQU9BLE1BQU1DLEtBQU4sQ0FBWSxDQUFaLENBQVA7QUFBd0I7Ozs7OztBQUcvQ0MsT0FBT0MsT0FBUCxHQUFpQkgsS0FBakIiLCJmaWxlIjoiYXJyYXkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNsYXNzIGFycmF5IHtcbiAgc3RhdGljIGZpcnN0KGFycmF5KSB7IHJldHVybiBhcnJheVswXTsgfVxuXG4gIHN0YXRpYyBzZWNvbmQoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzFdOyB9XG5cbiAgc3RhdGljIHRhaWwoYXJyYXkpIHsgcmV0dXJuIGFycmF5LnNsaWNlKDEpOyB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXk7XG4iXX0=
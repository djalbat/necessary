'use strict';

function whilst(test, callback, done) {
  var next = function next() {
    var passed = test();

    if (passed) {
      callback(next);
    } else {
      done();
    }
  };

  next();
}

function forEach(array, callback, done) {
  var arrayLength = array.length;

  var index = -1;

  var next = function next() {
    index++;

    if (index === arrayLength) {
      done();
    } else {
      var element = array[index];

      callback(element, index, next);
    }
  };

  next();
}

module.exports = {
  whilst: whilst,
  forEach: forEach
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9hc3luYy5qcyJdLCJuYW1lcyI6WyJ3aGlsc3QiLCJ0ZXN0IiwiY2FsbGJhY2siLCJkb25lIiwibmV4dCIsInBhc3NlZCIsImZvckVhY2giLCJhcnJheSIsImFycmF5TGVuZ3RoIiwibGVuZ3RoIiwiaW5kZXgiLCJlbGVtZW50IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUEsU0FBU0EsTUFBVCxDQUFnQkMsSUFBaEIsRUFBc0JDLFFBQXRCLEVBQWdDQyxJQUFoQyxFQUFzQztBQUNwQyxNQUFNQyxPQUFPLFNBQVBBLElBQU8sR0FBVztBQUN0QixRQUFNQyxTQUFTSixNQUFmOztBQUVBLFFBQUlJLE1BQUosRUFBWTtBQUNWSCxlQUFTRSxJQUFUO0FBQ0QsS0FGRCxNQUVPO0FBQ0xEO0FBQ0Q7QUFDRixHQVJEOztBQVVBQztBQUNEOztBQUVELFNBQVNFLE9BQVQsQ0FBaUJDLEtBQWpCLEVBQXdCTCxRQUF4QixFQUFrQ0MsSUFBbEMsRUFBd0M7QUFDdEMsTUFBTUssY0FBY0QsTUFBTUUsTUFBMUI7O0FBRUEsTUFBSUMsUUFBUSxDQUFDLENBQWI7O0FBRUEsTUFBTU4sT0FBTyxTQUFQQSxJQUFPLEdBQVc7QUFDdEJNOztBQUVBLFFBQUlBLFVBQVVGLFdBQWQsRUFBMkI7QUFDekJMO0FBQ0QsS0FGRCxNQUVPO0FBQ0wsVUFBTVEsVUFBVUosTUFBTUcsS0FBTixDQUFoQjs7QUFFQVIsZUFBU1MsT0FBVCxFQUFrQkQsS0FBbEIsRUFBeUJOLElBQXpCO0FBQ0Q7QUFDRixHQVZEOztBQVlBQTtBQUNEOztBQUVEUSxPQUFPQyxPQUFQLEdBQWlCO0FBQ2ZiLFVBQVFBLE1BRE87QUFFZk0sV0FBU0E7QUFGTSxDQUFqQiIsImZpbGUiOiJhc3luYy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbmZ1bmN0aW9uIHdoaWxzdCh0ZXN0LCBjYWxsYmFjaywgZG9uZSkge1xyXG4gIGNvbnN0IG5leHQgPSBmdW5jdGlvbigpIHtcclxuICAgIGNvbnN0IHBhc3NlZCA9IHRlc3QoKTtcclxuXHJcbiAgICBpZiAocGFzc2VkKSB7XHJcbiAgICAgIGNhbGxiYWNrKG5leHQpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZG9uZSgpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIG5leHQoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZm9yRWFjaChhcnJheSwgY2FsbGJhY2ssIGRvbmUpIHtcclxuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcclxuICBcclxuICBsZXQgaW5kZXggPSAtMTtcclxuXHJcbiAgY29uc3QgbmV4dCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgaW5kZXgrKztcclxuXHJcbiAgICBpZiAoaW5kZXggPT09IGFycmF5TGVuZ3RoKSB7XHJcbiAgICAgIGRvbmUoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF07XHJcblxyXG4gICAgICBjYWxsYmFjayhlbGVtZW50LCBpbmRleCwgbmV4dCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgbmV4dCgpO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuICB3aGlsc3Q6IHdoaWxzdCxcclxuICBmb3JFYWNoOiBmb3JFYWNoXHJcbn07XHJcbiJdfQ==
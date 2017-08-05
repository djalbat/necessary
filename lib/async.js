'use strict';

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

function whilst(test, callback, done) {
  var next = function next() {
    if (test()) {
      callback(next);
    } else {
      done();
    }
  };

  next();
}

module.exports = {
  forEach: forEach,
  whilst: whilst
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9hc3luYy5qcyJdLCJuYW1lcyI6WyJmb3JFYWNoIiwiYXJyYXkiLCJjYWxsYmFjayIsImRvbmUiLCJhcnJheUxlbmd0aCIsImxlbmd0aCIsImluZGV4IiwibmV4dCIsImVsZW1lbnQiLCJ3aGlsc3QiLCJ0ZXN0IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUEsU0FBU0EsT0FBVCxDQUFpQkMsS0FBakIsRUFBd0JDLFFBQXhCLEVBQWtDQyxJQUFsQyxFQUF3QztBQUN0QyxNQUFNQyxjQUFjSCxNQUFNSSxNQUExQjs7QUFFQSxNQUFJQyxRQUFRLENBQUMsQ0FBYjs7QUFFQSxNQUFNQyxPQUFPLFNBQVBBLElBQU8sR0FBVztBQUN0QkQ7O0FBRUEsUUFBSUEsVUFBVUYsV0FBZCxFQUEyQjtBQUN6QkQ7QUFDRCxLQUZELE1BRU87QUFDTCxVQUFNSyxVQUFVUCxNQUFNSyxLQUFOLENBQWhCOztBQUVBSixlQUFTTSxPQUFULEVBQWtCRixLQUFsQixFQUF5QkMsSUFBekI7QUFDRDtBQUNGLEdBVkQ7O0FBWUFBO0FBQ0Q7O0FBRUQsU0FBU0UsTUFBVCxDQUFnQkMsSUFBaEIsRUFBc0JSLFFBQXRCLEVBQWdDQyxJQUFoQyxFQUFzQztBQUNwQyxNQUFNSSxPQUFPLFNBQVBBLElBQU8sR0FBVztBQUN0QixRQUFJRyxNQUFKLEVBQVk7QUFDVlIsZUFBU0ssSUFBVDtBQUNELEtBRkQsTUFFTztBQUNMSjtBQUNEO0FBQ0YsR0FORDs7QUFRQUk7QUFDRDs7QUFFREksT0FBT0MsT0FBUCxHQUFpQjtBQUNmWixXQUFTQSxPQURNO0FBRWZTLFVBQVFBO0FBRk8sQ0FBakIiLCJmaWxlIjoiYXN5bmMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcblxyXG5mdW5jdGlvbiBmb3JFYWNoKGFycmF5LCBjYWxsYmFjaywgZG9uZSkge1xyXG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xyXG4gIFxyXG4gIGxldCBpbmRleCA9IC0xO1xyXG5cclxuICBjb25zdCBuZXh0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICBpbmRleCsrO1xyXG5cclxuICAgIGlmIChpbmRleCA9PT0gYXJyYXlMZW5ndGgpIHtcclxuICAgICAgZG9uZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XTtcclxuXHJcbiAgICAgIGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4LCBuZXh0KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBuZXh0KCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHdoaWxzdCh0ZXN0LCBjYWxsYmFjaywgZG9uZSkge1xyXG4gIGNvbnN0IG5leHQgPSBmdW5jdGlvbigpIHtcclxuICAgIGlmICh0ZXN0KCkpIHtcclxuICAgICAgY2FsbGJhY2sobmV4dCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBkb25lKCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgbmV4dCgpO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuICBmb3JFYWNoOiBmb3JFYWNoLFxyXG4gIHdoaWxzdDogd2hpbHN0XHJcbn07XHJcbiJdfQ==
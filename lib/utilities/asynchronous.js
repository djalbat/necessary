"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get backwardsForEach () {
        return backwardsForEach;
    },
    get default () {
        return _default;
    },
    get eventually () {
        return eventually;
    },
    get forEach () {
        return forEach;
    },
    get forwardsForEach () {
        return forwardsForEach;
    },
    get repeatedly () {
        return repeatedly;
    },
    get sequence () {
        return sequence;
    },
    get whilst () {
        return whilst;
    }
});
function whilst(operation, done, context) {
    var count = -1;
    function next() {
        count++;
        var index = count; ///
        operation(next, done, context, index);
    }
    next();
}
function forEach(array, operation, done, context) {
    var length = array.length; ///
    var count = -1;
    function next() {
        count++;
        var terminate = count === length;
        if (terminate) {
            done();
        } else {
            var index = count, element = array[index];
            operation(element, next, done, context, index);
        }
    }
    next();
}
function sequence(operations, done, context) {
    var length = operations.length; ///
    var count = -1;
    function next() {
        count++;
        var terminate = count === length;
        if (terminate) {
            done();
        } else {
            var index = count, operation = operations[index];
            operation(next, done, context, index);
        }
    }
    next();
}
function eventually(operations, done, context) {
    var length = operations.length; ///
    if (length === 0) {
        done();
        return;
    }
    var count = 0;
    function next() {
        count++;
        var terminate = count === length;
        if (terminate) {
            done();
        }
    }
    operations.forEach(function(operation, index) {
        operation(next, done, context, index);
    });
}
function repeatedly(operation, length, done, context) {
    if (length === 0) {
        done();
        return;
    }
    var count = 0;
    function next() {
        count++;
        var terminate = count === length;
        if (terminate) {
            done();
        }
    }
    for(var index = 0; index < length; index++){
        operation(next, done, context, index);
    }
}
function forwardsForEach(array, operation, done, context) {
    var length = array.length; ///
    var count = -1;
    function next() {
        count++;
        var terminate = count === length;
        if (terminate) {
            done();
        } else {
            var index = count, element = array[index];
            operation(element, next, done, context, index);
        }
    }
    next();
}
function backwardsForEach(array, operation, done, context) {
    var length = array.length; ///
    var count = length;
    function next() {
        count--;
        var terminate = count === -1;
        if (terminate) {
            done();
        } else {
            var index = count, element = array[index];
            operation(element, next, done, context, index);
        }
    }
    next();
}
var _default = {
    whilst: whilst,
    forEach: forEach,
    sequence: sequence,
    eventually: eventually,
    repeatedly: repeatedly,
    forwardsForEach: forwardsForEach,
    backwardsForEach: backwardsForEach
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvYXN5bmNocm9ub3VzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHdoaWxzdChvcGVyYXRpb24sIGRvbmUsIGNvbnRleHQpIHtcclxuICBsZXQgY291bnQgPSAtMTtcclxuXHJcbiAgZnVuY3Rpb24gbmV4dCgpIHtcclxuICAgIGNvdW50Kys7XHJcblxyXG4gICAgY29uc3QgaW5kZXggPSBjb3VudDsgIC8vL1xyXG5cclxuICAgIG9wZXJhdGlvbihuZXh0LCBkb25lLCBjb250ZXh0LCBpbmRleCk7XHJcbiAgfVxyXG5cclxuICBuZXh0KCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmb3JFYWNoKGFycmF5LCBvcGVyYXRpb24sIGRvbmUsIGNvbnRleHQpIHtcclxuICBjb25zdCBsZW5ndGggPSBhcnJheS5sZW5ndGg7ICAvLy9cclxuXHJcbiAgbGV0IGNvdW50ID0gLTE7XHJcblxyXG4gIGZ1bmN0aW9uIG5leHQoKSB7XHJcbiAgICBjb3VudCsrO1xyXG5cclxuICAgIGNvbnN0IHRlcm1pbmF0ZSA9IChjb3VudCA9PT0gbGVuZ3RoKTtcclxuXHJcbiAgICBpZiAodGVybWluYXRlKSB7XHJcbiAgICAgIGRvbmUoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGluZGV4ID0gY291bnQsICAvLy9cclxuICAgICAgICAgICAgZWxlbWVudCA9IGFycmF5W2luZGV4XTtcclxuXHJcbiAgICAgIG9wZXJhdGlvbihlbGVtZW50LCBuZXh0LCBkb25lLCBjb250ZXh0LCBpbmRleCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZXh0KCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXF1ZW5jZShvcGVyYXRpb25zLCBkb25lLCBjb250ZXh0KSB7XHJcbiAgY29uc3QgbGVuZ3RoID0gb3BlcmF0aW9ucy5sZW5ndGg7ICAvLy9cclxuXHJcbiAgbGV0IGNvdW50ID0gLTE7XHJcblxyXG4gIGZ1bmN0aW9uIG5leHQoKSB7XHJcbiAgICBjb3VudCsrO1xyXG5cclxuICAgIGNvbnN0IHRlcm1pbmF0ZSA9IChjb3VudCA9PT0gbGVuZ3RoKTtcclxuXHJcbiAgICBpZiAodGVybWluYXRlKSB7XHJcbiAgICAgIGRvbmUoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGluZGV4ID0gY291bnQsICAvLy9cclxuICAgICAgICAgICAgb3BlcmF0aW9uID0gb3BlcmF0aW9uc1tpbmRleF07XHJcblxyXG4gICAgICBvcGVyYXRpb24obmV4dCwgZG9uZSwgY29udGV4dCwgaW5kZXgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmV4dCgpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZXZlbnR1YWxseShvcGVyYXRpb25zLCBkb25lLCBjb250ZXh0KSB7XHJcbiAgY29uc3QgbGVuZ3RoID0gb3BlcmF0aW9ucy5sZW5ndGg7ICAvLy9cclxuXHJcbiAgaWYgKGxlbmd0aCA9PT0gMCkge1xyXG4gICAgZG9uZSgpO1xyXG5cclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIGxldCBjb3VudCA9IDA7XHJcblxyXG4gIGZ1bmN0aW9uIG5leHQoKSB7XHJcbiAgICBjb3VudCsrO1xyXG5cclxuICAgIGNvbnN0IHRlcm1pbmF0ZSA9IChjb3VudCA9PT0gbGVuZ3RoKTtcclxuXHJcbiAgICBpZiAodGVybWluYXRlKSB7XHJcbiAgICAgIGRvbmUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9wZXJhdGlvbnMuZm9yRWFjaCgob3BlcmF0aW9uLCBpbmRleCkgPT4ge1xyXG4gICAgb3BlcmF0aW9uKG5leHQsIGRvbmUsIGNvbnRleHQsIGluZGV4KTtcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlcGVhdGVkbHkob3BlcmF0aW9uLCBsZW5ndGgsIGRvbmUsIGNvbnRleHQpIHtcclxuICBpZiAobGVuZ3RoID09PSAwKSB7XHJcbiAgICBkb25lKCk7XHJcblxyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgbGV0IGNvdW50ID0gMDtcclxuXHJcbiAgZnVuY3Rpb24gbmV4dCgpIHtcclxuICAgIGNvdW50Kys7XHJcblxyXG4gICAgY29uc3QgdGVybWluYXRlID0gKGNvdW50ID09PSBsZW5ndGgpO1xyXG5cclxuICAgIGlmICh0ZXJtaW5hdGUpIHtcclxuICAgICAgZG9uZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgb3BlcmF0aW9uKG5leHQsIGRvbmUsIGNvbnRleHQsIGluZGV4KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmb3J3YXJkc0ZvckVhY2goYXJyYXksIG9wZXJhdGlvbiwgZG9uZSwgY29udGV4dCkge1xyXG4gIGNvbnN0IGxlbmd0aCA9IGFycmF5Lmxlbmd0aDsgIC8vL1xyXG5cclxuICBsZXQgY291bnQgPSAtMTtcclxuXHJcbiAgZnVuY3Rpb24gbmV4dCgpIHtcclxuICAgIGNvdW50Kys7XHJcblxyXG4gICAgY29uc3QgdGVybWluYXRlID0gKGNvdW50ID09PSBsZW5ndGgpO1xyXG5cclxuICAgIGlmICh0ZXJtaW5hdGUpIHtcclxuICAgICAgZG9uZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgaW5kZXggPSBjb3VudCwgIC8vL1xyXG4gICAgICAgICAgICBlbGVtZW50ID0gYXJyYXlbaW5kZXhdO1xyXG5cclxuICAgICAgb3BlcmF0aW9uKGVsZW1lbnQsIG5leHQsIGRvbmUsIGNvbnRleHQsIGluZGV4KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5leHQoKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGJhY2t3YXJkc0ZvckVhY2goYXJyYXksIG9wZXJhdGlvbiwgZG9uZSwgY29udGV4dCkge1xyXG4gIGNvbnN0IGxlbmd0aCA9IGFycmF5Lmxlbmd0aDsgIC8vL1xyXG5cclxuICBsZXQgY291bnQgPSBsZW5ndGg7XHJcblxyXG4gIGZ1bmN0aW9uIG5leHQoKSB7XHJcbiAgICBjb3VudC0tO1xyXG5cclxuICAgIGNvbnN0IHRlcm1pbmF0ZSA9IChjb3VudCA9PT0gLTEpO1xyXG5cclxuICAgIGlmICh0ZXJtaW5hdGUpIHtcclxuICAgICAgZG9uZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgaW5kZXggPSBjb3VudCwgIC8vL1xyXG4gICAgICAgICAgICBlbGVtZW50ID0gYXJyYXlbaW5kZXhdO1xyXG5cclxuICAgICAgb3BlcmF0aW9uKGVsZW1lbnQsIG5leHQsIGRvbmUsIGNvbnRleHQsIGluZGV4KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5leHQoKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIHdoaWxzdCxcclxuICBmb3JFYWNoLFxyXG4gIHNlcXVlbmNlLFxyXG4gIGV2ZW50dWFsbHksXHJcbiAgcmVwZWF0ZWRseSxcclxuICBmb3J3YXJkc0ZvckVhY2gsXHJcbiAgYmFja3dhcmRzRm9yRWFjaFxyXG59O1xyXG4iXSwibmFtZXMiOlsiYmFja3dhcmRzRm9yRWFjaCIsImV2ZW50dWFsbHkiLCJmb3JFYWNoIiwiZm9yd2FyZHNGb3JFYWNoIiwicmVwZWF0ZWRseSIsInNlcXVlbmNlIiwid2hpbHN0Iiwib3BlcmF0aW9uIiwiZG9uZSIsImNvbnRleHQiLCJjb3VudCIsIm5leHQiLCJpbmRleCIsImFycmF5IiwibGVuZ3RoIiwidGVybWluYXRlIiwiZWxlbWVudCIsIm9wZXJhdGlvbnMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQXVJZ0JBO2VBQUFBOztRQXVCaEI7ZUFBQTs7UUFoR2dCQztlQUFBQTs7UUE5Q0FDO2VBQUFBOztRQWdHQUM7ZUFBQUE7O1FBeEJBQztlQUFBQTs7UUFqREFDO2VBQUFBOztRQXJDQUM7ZUFBQUE7OztBQUFULFNBQVNBLE9BQU9DLFNBQVMsRUFBRUMsSUFBSSxFQUFFQyxPQUFPO0lBQzdDLElBQUlDLFFBQVEsQ0FBQztJQUViLFNBQVNDO1FBQ1BEO1FBRUEsSUFBTUUsUUFBUUYsT0FBUSxHQUFHO1FBRXpCSCxVQUFVSSxNQUFNSCxNQUFNQyxTQUFTRztJQUNqQztJQUVBRDtBQUNGO0FBRU8sU0FBU1QsUUFBUVcsS0FBSyxFQUFFTixTQUFTLEVBQUVDLElBQUksRUFBRUMsT0FBTztJQUNyRCxJQUFNSyxTQUFTRCxNQUFNQyxNQUFNLEVBQUcsR0FBRztJQUVqQyxJQUFJSixRQUFRLENBQUM7SUFFYixTQUFTQztRQUNQRDtRQUVBLElBQU1LLFlBQWFMLFVBQVVJO1FBRTdCLElBQUlDLFdBQVc7WUFDYlA7UUFDRixPQUFPO1lBQ0wsSUFBTUksUUFBUUYsT0FDUk0sVUFBVUgsS0FBSyxDQUFDRCxNQUFNO1lBRTVCTCxVQUFVUyxTQUFTTCxNQUFNSCxNQUFNQyxTQUFTRztRQUMxQztJQUNGO0lBRUFEO0FBQ0Y7QUFFTyxTQUFTTixTQUFTWSxVQUFVLEVBQUVULElBQUksRUFBRUMsT0FBTztJQUNoRCxJQUFNSyxTQUFTRyxXQUFXSCxNQUFNLEVBQUcsR0FBRztJQUV0QyxJQUFJSixRQUFRLENBQUM7SUFFYixTQUFTQztRQUNQRDtRQUVBLElBQU1LLFlBQWFMLFVBQVVJO1FBRTdCLElBQUlDLFdBQVc7WUFDYlA7UUFDRixPQUFPO1lBQ0wsSUFBTUksUUFBUUYsT0FDUkgsWUFBWVUsVUFBVSxDQUFDTCxNQUFNO1lBRW5DTCxVQUFVSSxNQUFNSCxNQUFNQyxTQUFTRztRQUNqQztJQUNGO0lBRUFEO0FBQ0Y7QUFFTyxTQUFTVixXQUFXZ0IsVUFBVSxFQUFFVCxJQUFJLEVBQUVDLE9BQU87SUFDbEQsSUFBTUssU0FBU0csV0FBV0gsTUFBTSxFQUFHLEdBQUc7SUFFdEMsSUFBSUEsV0FBVyxHQUFHO1FBQ2hCTjtRQUVBO0lBQ0Y7SUFFQSxJQUFJRSxRQUFRO0lBRVosU0FBU0M7UUFDUEQ7UUFFQSxJQUFNSyxZQUFhTCxVQUFVSTtRQUU3QixJQUFJQyxXQUFXO1lBQ2JQO1FBQ0Y7SUFDRjtJQUVBUyxXQUFXZixPQUFPLENBQUMsU0FBQ0ssV0FBV0s7UUFDN0JMLFVBQVVJLE1BQU1ILE1BQU1DLFNBQVNHO0lBQ2pDO0FBQ0Y7QUFFTyxTQUFTUixXQUFXRyxTQUFTLEVBQUVPLE1BQU0sRUFBRU4sSUFBSSxFQUFFQyxPQUFPO0lBQ3pELElBQUlLLFdBQVcsR0FBRztRQUNoQk47UUFFQTtJQUNGO0lBRUEsSUFBSUUsUUFBUTtJQUVaLFNBQVNDO1FBQ1BEO1FBRUEsSUFBTUssWUFBYUwsVUFBVUk7UUFFN0IsSUFBSUMsV0FBVztZQUNiUDtRQUNGO0lBQ0Y7SUFFQSxJQUFLLElBQUlJLFFBQVEsR0FBR0EsUUFBUUUsUUFBUUYsUUFBUztRQUMzQ0wsVUFBVUksTUFBTUgsTUFBTUMsU0FBU0c7SUFDakM7QUFDRjtBQUVPLFNBQVNULGdCQUFnQlUsS0FBSyxFQUFFTixTQUFTLEVBQUVDLElBQUksRUFBRUMsT0FBTztJQUM3RCxJQUFNSyxTQUFTRCxNQUFNQyxNQUFNLEVBQUcsR0FBRztJQUVqQyxJQUFJSixRQUFRLENBQUM7SUFFYixTQUFTQztRQUNQRDtRQUVBLElBQU1LLFlBQWFMLFVBQVVJO1FBRTdCLElBQUlDLFdBQVc7WUFDYlA7UUFDRixPQUFPO1lBQ0wsSUFBTUksUUFBUUYsT0FDUk0sVUFBVUgsS0FBSyxDQUFDRCxNQUFNO1lBRTVCTCxVQUFVUyxTQUFTTCxNQUFNSCxNQUFNQyxTQUFTRztRQUMxQztJQUNGO0lBRUFEO0FBQ0Y7QUFFTyxTQUFTWCxpQkFBaUJhLEtBQUssRUFBRU4sU0FBUyxFQUFFQyxJQUFJLEVBQUVDLE9BQU87SUFDOUQsSUFBTUssU0FBU0QsTUFBTUMsTUFBTSxFQUFHLEdBQUc7SUFFakMsSUFBSUosUUFBUUk7SUFFWixTQUFTSDtRQUNQRDtRQUVBLElBQU1LLFlBQWFMLFVBQVUsQ0FBQztRQUU5QixJQUFJSyxXQUFXO1lBQ2JQO1FBQ0YsT0FBTztZQUNMLElBQU1JLFFBQVFGLE9BQ1JNLFVBQVVILEtBQUssQ0FBQ0QsTUFBTTtZQUU1QkwsVUFBVVMsU0FBU0wsTUFBTUgsTUFBTUMsU0FBU0c7UUFDMUM7SUFDRjtJQUVBRDtBQUNGO0lBRUEsV0FBZTtJQUNiTCxRQUFBQTtJQUNBSixTQUFBQTtJQUNBRyxVQUFBQTtJQUNBSixZQUFBQTtJQUNBRyxZQUFBQTtJQUNBRCxpQkFBQUE7SUFDQUgsa0JBQUFBO0FBQ0YifQ==
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
    function next(index) {
        operation(()=>{
            next(index + 1);
        }, done, context, index);
    }
    const index = 0;
    next(index);
}
function forEach(array, operation, done, context) {
    const length = array.length; ///
    function next(index) {
        if (index === length) {
            done();
            return;
        }
        const element = array[index];
        operation(element, ()=>{
            next(index + 1);
        }, done, context, index);
    }
    const index = 0;
    next(index);
}
function sequence(operations, done, context) {
    const length = operations.length; ///
    function next(index) {
        if (index === length) {
            done();
            return;
        }
        const operation = operations[index];
        operation(()=>{
            next(index + 1);
        }, done, context, index);
    }
    const index = 0;
    next(index);
}
function eventually(operations, done, context) {
    const length = operations.length;
    if (length === 0) {
        done();
        return;
    }
    let count = 0;
    function next() {
        count++;
        const terminate = count === length;
        if (terminate) {
            done();
        }
    }
    operations.forEach((operation, index)=>{
        operation(next, done, context, index);
    });
}
function repeatedly(operation, length, done, context) {
    if (length === 0) {
        done();
        return;
    }
    let count = 0;
    function next() {
        count++;
        const terminate = count === length;
        if (terminate) {
            done();
        }
    }
    for(let index = 0; index < length; index++){
        operation(next, done, context, index);
    }
}
function forwardsForEach(array, operation, done, context) {
    const length = array.length; ///
    function next(index) {
        if (index === length) {
            done();
            return;
        }
        const element = array[index];
        operation(element, ()=>{
            next(index + 1);
        }, done, context, index);
    }
    const index = 0;
    next(index);
}
function backwardsForEach(array, operation, done, context) {
    const length = array.length; ///
    function next(index) {
        if (index === -1) {
            done();
            return;
        }
        const element = array[index];
        operation(element, ()=>{
            next(index - 1);
        }, done, context, index);
    }
    const index = length - 1;
    next(index);
}
const _default = {
    whilst,
    forEach,
    sequence,
    eventually,
    repeatedly,
    forwardsForEach,
    backwardsForEach
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvYXN5bmNocm9ub3VzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHdoaWxzdChvcGVyYXRpb24sIGRvbmUsIGNvbnRleHQpIHtcclxuICBmdW5jdGlvbiBuZXh0KGluZGV4KSB7XHJcbiAgICBvcGVyYXRpb24oKCkgPT4ge1xyXG4gICAgICBuZXh0KGluZGV4ICsgMSk7XHJcbiAgICB9LCBkb25lLCBjb250ZXh0LCBpbmRleCk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBpbmRleCA9IDA7XHJcblxyXG4gIG5leHQoaW5kZXgpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZm9yRWFjaChhcnJheSwgb3BlcmF0aW9uLCBkb25lLCBjb250ZXh0KSB7XHJcbiAgY29uc3QgbGVuZ3RoID0gYXJyYXkubGVuZ3RoOyAgLy8vXHJcblxyXG4gIGZ1bmN0aW9uIG5leHQoaW5kZXgpIHtcclxuICAgIGlmIChpbmRleCA9PT0gbGVuZ3RoKSB7XHJcbiAgICAgIGRvbmUoKTtcclxuXHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdO1xyXG5cclxuICAgIG9wZXJhdGlvbihlbGVtZW50LCAoKSA9PiB7XHJcbiAgICAgIG5leHQoaW5kZXggKyAxKTtcclxuICAgIH0sIGRvbmUsIGNvbnRleHQsIGluZGV4KTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGluZGV4ID0gMDtcclxuXHJcbiAgbmV4dChpbmRleCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXF1ZW5jZShvcGVyYXRpb25zLCBkb25lLCBjb250ZXh0KSB7XHJcbiAgY29uc3QgbGVuZ3RoID0gb3BlcmF0aW9ucy5sZW5ndGg7ICAvLy9cclxuXHJcbiAgZnVuY3Rpb24gbmV4dChpbmRleCkge1xyXG4gICAgaWYgKGluZGV4ID09PSBsZW5ndGgpIHtcclxuICAgICAgZG9uZSgpO1xyXG5cclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG9wZXJhdGlvbiA9IG9wZXJhdGlvbnNbaW5kZXhdO1xyXG5cclxuICAgIG9wZXJhdGlvbigoKSA9PiB7XHJcbiAgICAgIG5leHQoaW5kZXggKyAxKTtcclxuICAgIH0sIGRvbmUsIGNvbnRleHQsIGluZGV4KTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGluZGV4ID0gMDtcclxuXHJcbiAgbmV4dChpbmRleCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBldmVudHVhbGx5KG9wZXJhdGlvbnMsIGRvbmUsIGNvbnRleHQpIHtcclxuICBjb25zdCBsZW5ndGggPSBvcGVyYXRpb25zLmxlbmd0aDtcclxuXHJcbiAgaWYgKGxlbmd0aCA9PT0gMCkge1xyXG4gICAgZG9uZSgpO1xyXG5cclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIGxldCBjb3VudCA9IDA7XHJcblxyXG4gIGZ1bmN0aW9uIG5leHQoKSB7XHJcbiAgICBjb3VudCsrO1xyXG5cclxuICAgIGNvbnN0IHRlcm1pbmF0ZSA9IChjb3VudCA9PT0gbGVuZ3RoKTtcclxuXHJcbiAgICBpZiAodGVybWluYXRlKSB7XHJcbiAgICAgIGRvbmUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9wZXJhdGlvbnMuZm9yRWFjaCgob3BlcmF0aW9uLCBpbmRleCkgPT4ge1xyXG4gICAgb3BlcmF0aW9uKG5leHQsIGRvbmUsIGNvbnRleHQsIGluZGV4KTtcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlcGVhdGVkbHkob3BlcmF0aW9uLCBsZW5ndGgsIGRvbmUsIGNvbnRleHQpIHtcclxuICBpZiAobGVuZ3RoID09PSAwKSB7XHJcbiAgICBkb25lKCk7XHJcblxyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgbGV0IGNvdW50ID0gMDtcclxuXHJcbiAgZnVuY3Rpb24gbmV4dCgpIHtcclxuICAgIGNvdW50Kys7XHJcblxyXG4gICAgY29uc3QgdGVybWluYXRlID0gKGNvdW50ID09PSBsZW5ndGgpO1xyXG5cclxuICAgIGlmICh0ZXJtaW5hdGUpIHtcclxuICAgICAgZG9uZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgb3BlcmF0aW9uKG5leHQsIGRvbmUsIGNvbnRleHQsIGluZGV4KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmb3J3YXJkc0ZvckVhY2goYXJyYXksIG9wZXJhdGlvbiwgZG9uZSwgY29udGV4dCkge1xyXG4gIGNvbnN0IGxlbmd0aCA9IGFycmF5Lmxlbmd0aDsgIC8vL1xyXG5cclxuICBmdW5jdGlvbiBuZXh0KGluZGV4KSB7XHJcbiAgICBpZiAoaW5kZXggPT09IGxlbmd0aCkge1xyXG4gICAgICBkb25lKCk7XHJcblxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XTtcclxuXHJcbiAgICBvcGVyYXRpb24oZWxlbWVudCwgKCkgPT4ge1xyXG4gICAgICBuZXh0KGluZGV4ICsgMSk7XHJcbiAgICB9LCBkb25lLCBjb250ZXh0LCBpbmRleCk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBpbmRleCA9IDA7XHJcblxyXG4gIG5leHQoaW5kZXgpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYmFja3dhcmRzRm9yRWFjaChhcnJheSwgb3BlcmF0aW9uLCBkb25lLCBjb250ZXh0KSB7XHJcbiAgY29uc3QgbGVuZ3RoID0gYXJyYXkubGVuZ3RoOyAgLy8vXHJcblxyXG4gIGZ1bmN0aW9uIG5leHQoaW5kZXgpIHtcclxuICAgIGlmIChpbmRleCA9PT0gLTEpIHtcclxuICAgICAgZG9uZSgpO1xyXG5cclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF07XHJcblxyXG4gICAgb3BlcmF0aW9uKGVsZW1lbnQsICgpID0+IHtcclxuICAgICAgbmV4dChpbmRleCAtIDEpO1xyXG4gICAgfSwgZG9uZSwgY29udGV4dCwgaW5kZXgpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgaW5kZXggPSBsZW5ndGggLSAxO1xyXG5cclxuICBuZXh0KGluZGV4KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIHdoaWxzdCxcclxuICBmb3JFYWNoLFxyXG4gIHNlcXVlbmNlLFxyXG4gIGV2ZW50dWFsbHksXHJcbiAgcmVwZWF0ZWRseSxcclxuICBmb3J3YXJkc0ZvckVhY2gsXHJcbiAgYmFja3dhcmRzRm9yRWFjaFxyXG59O1xyXG4iXSwibmFtZXMiOlsiYmFja3dhcmRzRm9yRWFjaCIsImV2ZW50dWFsbHkiLCJmb3JFYWNoIiwiZm9yd2FyZHNGb3JFYWNoIiwicmVwZWF0ZWRseSIsInNlcXVlbmNlIiwid2hpbHN0Iiwib3BlcmF0aW9uIiwiZG9uZSIsImNvbnRleHQiLCJuZXh0IiwiaW5kZXgiLCJhcnJheSIsImxlbmd0aCIsImVsZW1lbnQiLCJvcGVyYXRpb25zIiwiY291bnQiLCJ0ZXJtaW5hdGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQWtJZ0JBO2VBQUFBOztRQXNCaEI7ZUFBQTs7UUE5RmdCQztlQUFBQTs7UUE1Q0FDO2VBQUFBOztRQThGQUM7ZUFBQUE7O1FBeEJBQztlQUFBQTs7UUFoREFDO2VBQUFBOztRQWxDQUM7ZUFBQUE7OztBQUFULFNBQVNBLE9BQU9DLFNBQVMsRUFBRUMsSUFBSSxFQUFFQyxPQUFPO0lBQzdDLFNBQVNDLEtBQUtDLEtBQUs7UUFDakJKLFVBQVU7WUFDUkcsS0FBS0MsUUFBUTtRQUNmLEdBQUdILE1BQU1DLFNBQVNFO0lBQ3BCO0lBRUEsTUFBTUEsUUFBUTtJQUVkRCxLQUFLQztBQUNQO0FBRU8sU0FBU1QsUUFBUVUsS0FBSyxFQUFFTCxTQUFTLEVBQUVDLElBQUksRUFBRUMsT0FBTztJQUNyRCxNQUFNSSxTQUFTRCxNQUFNQyxNQUFNLEVBQUcsR0FBRztJQUVqQyxTQUFTSCxLQUFLQyxLQUFLO1FBQ2pCLElBQUlBLFVBQVVFLFFBQVE7WUFDcEJMO1lBRUE7UUFDRjtRQUVBLE1BQU1NLFVBQVVGLEtBQUssQ0FBQ0QsTUFBTTtRQUU1QkosVUFBVU8sU0FBUztZQUNqQkosS0FBS0MsUUFBUTtRQUNmLEdBQUdILE1BQU1DLFNBQVNFO0lBQ3BCO0lBRUEsTUFBTUEsUUFBUTtJQUVkRCxLQUFLQztBQUNQO0FBRU8sU0FBU04sU0FBU1UsVUFBVSxFQUFFUCxJQUFJLEVBQUVDLE9BQU87SUFDaEQsTUFBTUksU0FBU0UsV0FBV0YsTUFBTSxFQUFHLEdBQUc7SUFFdEMsU0FBU0gsS0FBS0MsS0FBSztRQUNqQixJQUFJQSxVQUFVRSxRQUFRO1lBQ3BCTDtZQUVBO1FBQ0Y7UUFFQSxNQUFNRCxZQUFZUSxVQUFVLENBQUNKLE1BQU07UUFFbkNKLFVBQVU7WUFDUkcsS0FBS0MsUUFBUTtRQUNmLEdBQUdILE1BQU1DLFNBQVNFO0lBQ3BCO0lBRUEsTUFBTUEsUUFBUTtJQUVkRCxLQUFLQztBQUNQO0FBRU8sU0FBU1YsV0FBV2MsVUFBVSxFQUFFUCxJQUFJLEVBQUVDLE9BQU87SUFDbEQsTUFBTUksU0FBU0UsV0FBV0YsTUFBTTtJQUVoQyxJQUFJQSxXQUFXLEdBQUc7UUFDaEJMO1FBRUE7SUFDRjtJQUVBLElBQUlRLFFBQVE7SUFFWixTQUFTTjtRQUNQTTtRQUVBLE1BQU1DLFlBQWFELFVBQVVIO1FBRTdCLElBQUlJLFdBQVc7WUFDYlQ7UUFDRjtJQUNGO0lBRUFPLFdBQVdiLE9BQU8sQ0FBQyxDQUFDSyxXQUFXSTtRQUM3QkosVUFBVUcsTUFBTUYsTUFBTUMsU0FBU0U7SUFDakM7QUFDRjtBQUVPLFNBQVNQLFdBQVdHLFNBQVMsRUFBRU0sTUFBTSxFQUFFTCxJQUFJLEVBQUVDLE9BQU87SUFDekQsSUFBSUksV0FBVyxHQUFHO1FBQ2hCTDtRQUVBO0lBQ0Y7SUFFQSxJQUFJUSxRQUFRO0lBRVosU0FBU047UUFDUE07UUFFQSxNQUFNQyxZQUFhRCxVQUFVSDtRQUU3QixJQUFJSSxXQUFXO1lBQ2JUO1FBQ0Y7SUFDRjtJQUVBLElBQUssSUFBSUcsUUFBUSxHQUFHQSxRQUFRRSxRQUFRRixRQUFTO1FBQzNDSixVQUFVRyxNQUFNRixNQUFNQyxTQUFTRTtJQUNqQztBQUNGO0FBRU8sU0FBU1IsZ0JBQWdCUyxLQUFLLEVBQUVMLFNBQVMsRUFBRUMsSUFBSSxFQUFFQyxPQUFPO0lBQzdELE1BQU1JLFNBQVNELE1BQU1DLE1BQU0sRUFBRyxHQUFHO0lBRWpDLFNBQVNILEtBQUtDLEtBQUs7UUFDakIsSUFBSUEsVUFBVUUsUUFBUTtZQUNwQkw7WUFFQTtRQUNGO1FBRUEsTUFBTU0sVUFBVUYsS0FBSyxDQUFDRCxNQUFNO1FBRTVCSixVQUFVTyxTQUFTO1lBQ2pCSixLQUFLQyxRQUFRO1FBQ2YsR0FBR0gsTUFBTUMsU0FBU0U7SUFDcEI7SUFFQSxNQUFNQSxRQUFRO0lBRWRELEtBQUtDO0FBQ1A7QUFFTyxTQUFTWCxpQkFBaUJZLEtBQUssRUFBRUwsU0FBUyxFQUFFQyxJQUFJLEVBQUVDLE9BQU87SUFDOUQsTUFBTUksU0FBU0QsTUFBTUMsTUFBTSxFQUFHLEdBQUc7SUFFakMsU0FBU0gsS0FBS0MsS0FBSztRQUNqQixJQUFJQSxVQUFVLENBQUMsR0FBRztZQUNoQkg7WUFFQTtRQUNGO1FBRUEsTUFBTU0sVUFBVUYsS0FBSyxDQUFDRCxNQUFNO1FBRTVCSixVQUFVTyxTQUFTO1lBQ2pCSixLQUFLQyxRQUFRO1FBQ2YsR0FBR0gsTUFBTUMsU0FBU0U7SUFDcEI7SUFFQSxNQUFNQSxRQUFRRSxTQUFTO0lBRXZCSCxLQUFLQztBQUNQO01BRUEsV0FBZTtJQUNiTDtJQUNBSjtJQUNBRztJQUNBSjtJQUNBRztJQUNBRDtJQUNBSDtBQUNGIn0=
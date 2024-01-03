"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    default: function() {
        return _default;
    },
    strcmp: function() {
        return strcmp;
    },
    strlen: function() {
        return strlen;
    },
    substring: function() {
        return substring;
    }
});
var _constants = require("../constants");
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
function strcmp(stringA, stringB) {
    var difference;
    var codePointA = stringA === _constants.EMPTY_STRING ? 0 : stringA.codePointAt(0), codePointB = stringB === _constants.EMPTY_STRING ? 0 : stringB.codePointAt(0);
    difference = codePointB - codePointA;
    if (difference === 0 && codePointA !== 0 && codePointB !== 0) {
        stringA = substring(stringA, 1); ///
        stringB = substring(stringB, 1); ///
        difference = strcmp(stringA, stringB);
    }
    return difference;
}
function strlen(string) {
    return _to_consumable_array(string).length;
} ///
function substring(string, start, end) {
    return _to_consumable_array(string).slice(start, end).join("");
} ///
var _default = {
    strcmp: strcmp,
    strlen: strlen,
    substring: substring
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvc3RyaW5nLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBzdHJjbXAoc3RyaW5nQSwgc3RyaW5nQikge1xuICBsZXQgZGlmZmVyZW5jZTtcblxuICBjb25zdCBjb2RlUG9pbnRBID0gKHN0cmluZ0EgPT09IEVNUFRZX1NUUklORykgP1xuICAgICAgICAgICAgICAgICAgICAgICAwIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICBzdHJpbmdBLmNvZGVQb2ludEF0KDApLFxuICAgICAgICBjb2RlUG9pbnRCID0gKHN0cmluZ0IgPT09IEVNUFRZX1NUUklORykgP1xuICAgICAgICAgICAgICAgICAgICAgICAwIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICBzdHJpbmdCLmNvZGVQb2ludEF0KDApO1xuXG4gIGRpZmZlcmVuY2UgPSBjb2RlUG9pbnRCIC0gY29kZVBvaW50QTtcblxuICBpZiAoKGRpZmZlcmVuY2UgPT09IDApICYmIChjb2RlUG9pbnRBICE9PTApICYmIChjb2RlUG9pbnRCICE9PTApKSB7XG4gICAgc3RyaW5nQSA9IHN1YnN0cmluZyhzdHJpbmdBLCAxKTsgLy8vXG5cbiAgICBzdHJpbmdCID0gc3Vic3RyaW5nKHN0cmluZ0IsIDEpOyAvLy9cblxuICAgIGRpZmZlcmVuY2UgPSBzdHJjbXAoc3RyaW5nQSwgc3RyaW5nQik7XG4gIH1cblxuICByZXR1cm4gZGlmZmVyZW5jZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0cmxlbihzdHJpbmcpIHsgcmV0dXJuIFsuLi5zdHJpbmddLmxlbmd0aDsgfSAvLy9cblxuZXhwb3J0IGZ1bmN0aW9uIHN1YnN0cmluZyhzdHJpbmcsIHN0YXJ0LCBlbmQpIHsgcmV0dXJuIFsuLi5zdHJpbmddLnNsaWNlKHN0YXJ0LCBlbmQpLmpvaW4oXCJcIik7IH0gIC8vL1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHN0cmNtcCxcbiAgc3RybGVuLFxuICBzdWJzdHJpbmdcbn07XG4iXSwibmFtZXMiOlsic3RyY21wIiwic3RybGVuIiwic3Vic3RyaW5nIiwic3RyaW5nQSIsInN0cmluZ0IiLCJkaWZmZXJlbmNlIiwiY29kZVBvaW50QSIsIkVNUFRZX1NUUklORyIsImNvZGVQb2ludEF0IiwiY29kZVBvaW50QiIsInN0cmluZyIsImxlbmd0aCIsInN0YXJ0IiwiZW5kIiwic2xpY2UiLCJqb2luIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUErQkEsT0FJRTtlQUpGOztJQTNCZ0JBLE1BQU07ZUFBTkE7O0lBdUJBQyxNQUFNO2VBQU5BOztJQUVBQyxTQUFTO2VBQVRBOzs7eUJBM0JhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0QixTQUFTRixPQUFPRyxPQUFPLEVBQUVDLE9BQU87SUFDckMsSUFBSUM7SUFFSixJQUFNQyxhQUFhLEFBQUNILFlBQVlJLHVCQUFZLEdBQ3ZCLElBQ0VKLFFBQVFLLFdBQVcsQ0FBQyxJQUNyQ0MsYUFBYSxBQUFDTCxZQUFZRyx1QkFBWSxHQUN2QixJQUNFSCxRQUFRSSxXQUFXLENBQUM7SUFFM0NILGFBQWFJLGFBQWFIO0lBRTFCLElBQUksQUFBQ0QsZUFBZSxLQUFPQyxlQUFjLEtBQU9HLGVBQWMsR0FBSTtRQUNoRU4sVUFBVUQsVUFBVUMsU0FBUyxJQUFJLEdBQUc7UUFFcENDLFVBQVVGLFVBQVVFLFNBQVMsSUFBSSxHQUFHO1FBRXBDQyxhQUFhTCxPQUFPRyxTQUFTQztJQUMvQjtJQUVBLE9BQU9DO0FBQ1Q7QUFFTyxTQUFTSixPQUFPUyxNQUFNO0lBQUksT0FBTyxBQUFDLHFCQUFHQSxRQUFRQyxNQUFNO0FBQUUsRUFBRSxHQUFHO0FBRTFELFNBQVNULFVBQVVRLE1BQU0sRUFBRUUsS0FBSyxFQUFFQyxHQUFHO0lBQUksT0FBTyxBQUFDLHFCQUFHSCxRQUFRSSxLQUFLLENBQUNGLE9BQU9DLEtBQUtFLElBQUksQ0FBQztBQUFLLEVBQUcsR0FBRztJQUVyRyxXQUFlO0lBQ2JmLFFBQUFBO0lBQ0FDLFFBQUFBO0lBQ0FDLFdBQUFBO0FBQ0YifQ==
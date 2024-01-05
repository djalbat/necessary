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
var astralCharactersRegExp = new RegExp("[\\u{10000}-\\u{10ffff}]", _constants.UG);
function strlen(string) {
    var length = string.length;
    var matches = string.match(astralCharactersRegExp);
    if (matches !== null) {
        var astralCharactersLength = matches.length;
        length -= astralCharactersLength;
    }
    return length;
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
function substring(string, start, end) {
    return _to_consumable_array(string).slice(start, end).join("");
} ///
var _default = {
    strcmp: strcmp,
    strlen: strlen,
    substring: substring
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvc3RyaW5nLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcsIFVHIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5jb25zdCBhc3RyYWxDaGFyYWN0ZXJzUmVnRXhwID0gbmV3IFJlZ0V4cChcIltcXFxcdXsxMDAwMH0tXFxcXHV7MTBmZmZmfV1cIiwgVUcpO1xuXG5leHBvcnQgZnVuY3Rpb24gc3RybGVuKHN0cmluZykge1xuICBsZXQgbGVuZ3RoID0gc3RyaW5nLmxlbmd0aDtcblxuICBjb25zdCBtYXRjaGVzID0gc3RyaW5nLm1hdGNoKGFzdHJhbENoYXJhY3RlcnNSZWdFeHApO1xuXG4gIGlmIChtYXRjaGVzICE9PSBudWxsKSB7XG4gICAgY29uc3QgeyBsZW5ndGg6IGFzdHJhbENoYXJhY3RlcnNMZW5ndGggfSA9IG1hdGNoZXM7XG5cbiAgICBsZW5ndGggLT0gYXN0cmFsQ2hhcmFjdGVyc0xlbmd0aDtcbiAgfVxuXG4gIHJldHVybiBsZW5ndGg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdHJjbXAoc3RyaW5nQSwgc3RyaW5nQikge1xuICBsZXQgZGlmZmVyZW5jZTtcblxuICBjb25zdCBjb2RlUG9pbnRBID0gKHN0cmluZ0EgPT09IEVNUFRZX1NUUklORykgP1xuICAgICAgMCA6XG4gICAgICBzdHJpbmdBLmNvZGVQb2ludEF0KDApLFxuICAgIGNvZGVQb2ludEIgPSAoc3RyaW5nQiA9PT0gRU1QVFlfU1RSSU5HKSA/XG4gICAgICAwIDpcbiAgICAgIHN0cmluZ0IuY29kZVBvaW50QXQoMCk7XG5cbiAgZGlmZmVyZW5jZSA9IGNvZGVQb2ludEIgLSBjb2RlUG9pbnRBO1xuXG4gIGlmICgoZGlmZmVyZW5jZSA9PT0gMCkgJiYgKGNvZGVQb2ludEEgIT09MCkgJiYgKGNvZGVQb2ludEIgIT09MCkpIHtcbiAgICBzdHJpbmdBID0gc3Vic3RyaW5nKHN0cmluZ0EsIDEpOyAvLy9cblxuICAgIHN0cmluZ0IgPSBzdWJzdHJpbmcoc3RyaW5nQiwgMSk7IC8vL1xuXG4gICAgZGlmZmVyZW5jZSA9IHN0cmNtcChzdHJpbmdBLCBzdHJpbmdCKTtcbiAgfVxuXG4gIHJldHVybiBkaWZmZXJlbmNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3Vic3RyaW5nKHN0cmluZywgc3RhcnQsIGVuZCkgeyByZXR1cm4gWy4uLnN0cmluZ10uc2xpY2Uoc3RhcnQsIGVuZCkuam9pbihcIlwiKTsgfSAgLy8vXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgc3RyY21wLFxuICBzdHJsZW4sXG4gIHN1YnN0cmluZ1xufTtcbiJdLCJuYW1lcyI6WyJzdHJjbXAiLCJzdHJsZW4iLCJzdWJzdHJpbmciLCJhc3RyYWxDaGFyYWN0ZXJzUmVnRXhwIiwiUmVnRXhwIiwiVUciLCJzdHJpbmciLCJsZW5ndGgiLCJtYXRjaGVzIiwibWF0Y2giLCJhc3RyYWxDaGFyYWN0ZXJzTGVuZ3RoIiwic3RyaW5nQSIsInN0cmluZ0IiLCJkaWZmZXJlbmNlIiwiY29kZVBvaW50QSIsIkVNUFRZX1NUUklORyIsImNvZGVQb2ludEF0IiwiY29kZVBvaW50QiIsInN0YXJ0IiwiZW5kIiwic2xpY2UiLCJqb2luIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUE2Q0EsT0FJRTtlQUpGOztJQXpCZ0JBLE1BQU07ZUFBTkE7O0lBZEFDLE1BQU07ZUFBTkE7O0lBcUNBQyxTQUFTO2VBQVRBOzs7eUJBekNpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFakMsSUFBTUMseUJBQXlCLElBQUlDLE9BQU8sNEJBQTRCQyxhQUFFO0FBRWpFLFNBQVNKLE9BQU9LLE1BQU07SUFDM0IsSUFBSUMsU0FBU0QsT0FBT0MsTUFBTTtJQUUxQixJQUFNQyxVQUFVRixPQUFPRyxLQUFLLENBQUNOO0lBRTdCLElBQUlLLFlBQVksTUFBTTtRQUNwQixJQUFRRCxBQUFRRyx5QkFBMkJGLFFBQW5DRDtRQUVSQSxVQUFVRztJQUNaO0lBRUEsT0FBT0g7QUFDVDtBQUVPLFNBQVNQLE9BQU9XLE9BQU8sRUFBRUMsT0FBTztJQUNyQyxJQUFJQztJQUVKLElBQU1DLGFBQWEsQUFBQ0gsWUFBWUksdUJBQVksR0FDeEMsSUFDQUosUUFBUUssV0FBVyxDQUFDLElBQ3RCQyxhQUFhLEFBQUNMLFlBQVlHLHVCQUFZLEdBQ3BDLElBQ0FILFFBQVFJLFdBQVcsQ0FBQztJQUV4QkgsYUFBYUksYUFBYUg7SUFFMUIsSUFBSSxBQUFDRCxlQUFlLEtBQU9DLGVBQWMsS0FBT0csZUFBYyxHQUFJO1FBQ2hFTixVQUFVVCxVQUFVUyxTQUFTLElBQUksR0FBRztRQUVwQ0MsVUFBVVYsVUFBVVUsU0FBUyxJQUFJLEdBQUc7UUFFcENDLGFBQWFiLE9BQU9XLFNBQVNDO0lBQy9CO0lBRUEsT0FBT0M7QUFDVDtBQUVPLFNBQVNYLFVBQVVJLE1BQU0sRUFBRVksS0FBSyxFQUFFQyxHQUFHO0lBQUksT0FBTyxBQUFDLHFCQUFHYixRQUFRYyxLQUFLLENBQUNGLE9BQU9DLEtBQUtFLElBQUksQ0FBQztBQUFLLEVBQUcsR0FBRztJQUVyRyxXQUFlO0lBQ2JyQixRQUFBQTtJQUNBQyxRQUFBQTtJQUNBQyxXQUFBQTtBQUNGIn0=
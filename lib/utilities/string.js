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
    indexOf: function() {
        return indexOf;
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
function strlen(string) {
    var length = 0;
    var iterator = string[Symbol.iterator]();
    var character = iterator.next();
    while(!character.done){
        character = iterator.next();
        length++;
    }
    return length;
}
function strcmp(stringA, stringB) {
    var difference;
    var iteratorA = stringA[Symbol.iterator](), iteratorB = stringB[Symbol.iterator](); ///
    var characterA = iteratorA.next(), characterB = iteratorB.next(), codePointA, codePointB;
    while(true){
        codePointA = characterA.value ? characterA.value.codePointAt(0) : 0;
        codePointB = characterB.value ? characterB.value.codePointAt(0) : 0;
        difference = codePointB - codePointA;
        if (difference !== 0) {
            break;
        }
        if (characterA.done || characterB.done) {
            break;
        }
        characterA = iteratorA.next();
        characterB = iteratorB.next();
    }
    return difference;
}
function indexOf(string, searchString) {
    var index = -1, found = false;
    var searchStringLength = strlen(searchString);
    if (searchStringLength > 0) {
        var character;
        var iterator = string[Symbol.iterator](), searchIterator = searchString[Symbol.iterator](), searchCharacter = searchIterator.next();
        character = iterator.next();
        index++;
        while(!character.done){
            if (character.value === searchCharacter.value) {
                var start = index, end = start + searchStringLength, subString = substring(string, start, end), difference = strcmp(subString, searchString);
                if (difference === 0) {
                    found = true;
                    break;
                }
            }
            character = iterator.next();
            index++;
        }
    }
    if (!found) {
        index = -1;
    }
    return index;
}
function substring(string, start) {
    var end = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Infinity;
    var index = 0;
    var iterator = string[Symbol.iterator](), characters = [];
    var character = iterator.next();
    while(!character.done){
        if (index === end) {
            break;
        }
        if (index >= start) {
            characters.push(character.value); ///
        }
        index++;
        character = iterator.next();
    }
    var _$substring = characters.join(_constants.EMPTY_STRING);
    return _$substring;
}
var _default = {
    strcmp: strcmp,
    strlen: strlen,
    indexOf: indexOf,
    substring: substring
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvc3RyaW5nLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBzdHJsZW4oc3RyaW5nKSB7XG4gIGxldCBsZW5ndGggPSAwO1xuXG4gIGNvbnN0IGl0ZXJhdG9yID0gc3RyaW5nW1N5bWJvbC5pdGVyYXRvcl0oKTtcblxuICBsZXQgY2hhcmFjdGVyID0gaXRlcmF0b3IubmV4dCgpO1xuXG4gIHdoaWxlICghY2hhcmFjdGVyLmRvbmUpIHtcbiAgICBjaGFyYWN0ZXIgPSBpdGVyYXRvci5uZXh0KCk7XG5cbiAgICBsZW5ndGgrK1xuICB9XG5cbiAgcmV0dXJuIGxlbmd0aDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0cmNtcChzdHJpbmdBLCBzdHJpbmdCKSB7XG4gIGxldCBkaWZmZXJlbmNlO1xuXG4gIGNvbnN0IGl0ZXJhdG9yQSA9IHN0cmluZ0FbU3ltYm9sLml0ZXJhdG9yXSgpLCAvLy9cbiAgICAgICAgaXRlcmF0b3JCID0gc3RyaW5nQltTeW1ib2wuaXRlcmF0b3JdKCk7IC8vL1xuXG4gIGxldCBjaGFyYWN0ZXJBID0gaXRlcmF0b3JBLm5leHQoKSxcbiAgICAgIGNoYXJhY3RlckIgPSBpdGVyYXRvckIubmV4dCgpLFxuICAgICAgY29kZVBvaW50QSxcbiAgICAgIGNvZGVQb2ludEI7XG5cbiAgd2hpbGUgKHRydWUpIHtcbiAgICBjb2RlUG9pbnRBID0gY2hhcmFjdGVyQS52YWx1ZSA/IC8vL1xuICAgICAgICAgICAgICAgICAgIGNoYXJhY3RlckEudmFsdWUuY29kZVBvaW50QXQoMCkgOlxuICAgICAgICAgICAgICAgICAgICAgMDtcbiAgICBjb2RlUG9pbnRCID0gY2hhcmFjdGVyQi52YWx1ZSA/IC8vL1xuICAgICAgICAgICAgICAgICAgIGNoYXJhY3RlckIudmFsdWUuY29kZVBvaW50QXQoMCkgOlxuICAgICAgICAgICAgICAgICAgICAgMDtcblxuICAgIGRpZmZlcmVuY2UgPSBjb2RlUG9pbnRCIC0gY29kZVBvaW50QTtcblxuICAgIGlmIChkaWZmZXJlbmNlICE9PSAwKSB7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBpZiAoY2hhcmFjdGVyQS5kb25lIHx8IGNoYXJhY3RlckIuZG9uZSkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgY2hhcmFjdGVyQSA9IGl0ZXJhdG9yQS5uZXh0KCk7XG4gICAgY2hhcmFjdGVyQiA9IGl0ZXJhdG9yQi5uZXh0KCk7XG4gIH1cblxuICByZXR1cm4gZGlmZmVyZW5jZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluZGV4T2Yoc3RyaW5nLCBzZWFyY2hTdHJpbmcpIHtcbiAgbGV0IGluZGV4ID0gLTEsXG4gICAgICBmb3VuZCA9IGZhbHNlO1xuXG4gIGNvbnN0IHNlYXJjaFN0cmluZ0xlbmd0aCA9IHN0cmxlbihzZWFyY2hTdHJpbmcpO1xuXG4gIGlmIChzZWFyY2hTdHJpbmdMZW5ndGggPiAwKSB7XG4gICAgbGV0IGNoYXJhY3RlcjtcblxuICAgIGNvbnN0IGl0ZXJhdG9yID0gc3RyaW5nW1N5bWJvbC5pdGVyYXRvcl0oKSxcbiAgICAgICAgICBzZWFyY2hJdGVyYXRvciA9IHNlYXJjaFN0cmluZ1tTeW1ib2wuaXRlcmF0b3JdKCksXG4gICAgICAgICAgc2VhcmNoQ2hhcmFjdGVyID0gc2VhcmNoSXRlcmF0b3IubmV4dCgpO1xuXG4gICAgY2hhcmFjdGVyID0gaXRlcmF0b3IubmV4dCgpO1xuXG4gICAgaW5kZXgrKztcblxuICAgIHdoaWxlICghY2hhcmFjdGVyLmRvbmUpIHtcbiAgICAgIGlmIChjaGFyYWN0ZXIudmFsdWUgPT09IHNlYXJjaENoYXJhY3Rlci52YWx1ZSkge1xuICAgICAgICBjb25zdCBzdGFydCA9IGluZGV4LCAgLy8vXG4gICAgICAgICAgICAgIGVuZCA9IHN0YXJ0ICsgc2VhcmNoU3RyaW5nTGVuZ3RoLFxuICAgICAgICAgICAgICBzdWJTdHJpbmcgPSBzdWJzdHJpbmcoc3RyaW5nLCBzdGFydCwgZW5kKSxcbiAgICAgICAgICAgICAgZGlmZmVyZW5jZSA9IHN0cmNtcChzdWJTdHJpbmcsIHNlYXJjaFN0cmluZyk7XG5cbiAgICAgICAgaWYgKGRpZmZlcmVuY2UgPT09IDApIHtcbiAgICAgICAgICBmb3VuZCA9IHRydWU7XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjaGFyYWN0ZXIgPSBpdGVyYXRvci5uZXh0KCk7XG5cbiAgICAgIGluZGV4KytcbiAgICB9XG4gIH1cblxuICBpZiAoIWZvdW5kKSB7XG4gICAgaW5kZXggPSAtMTtcbiAgfVxuXG4gIHJldHVybiBpbmRleDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1YnN0cmluZyhzdHJpbmcsIHN0YXJ0LCBlbmQgPSBJbmZpbml0eSkge1xuICBsZXQgaW5kZXggPSAwO1xuXG4gIGNvbnN0IGl0ZXJhdG9yID0gc3RyaW5nW1N5bWJvbC5pdGVyYXRvcl0oKSxcbiAgICAgICAgY2hhcmFjdGVycyA9IFtdO1xuXG4gIGxldCBjaGFyYWN0ZXIgPSBpdGVyYXRvci5uZXh0KCk7XG5cbiAgd2hpbGUgKCFjaGFyYWN0ZXIuZG9uZSkge1xuICAgIGlmIChpbmRleCA9PT0gZW5kKSB7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBpZiAoaW5kZXggPj0gc3RhcnQpIHtcbiAgICAgIGNoYXJhY3RlcnMucHVzaChjaGFyYWN0ZXIudmFsdWUpOyAvLy9cbiAgICB9XG5cbiAgICBpbmRleCsrXG5cbiAgICBjaGFyYWN0ZXIgPSBpdGVyYXRvci5uZXh0KCk7XG4gIH1cblxuICBjb25zdCBzdWJzdHJpbmcgPSBjaGFyYWN0ZXJzLmpvaW4oRU1QVFlfU1RSSU5HKTtcblxuICByZXR1cm4gc3Vic3RyaW5nO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHN0cmNtcCxcbiAgc3RybGVuLFxuICBpbmRleE9mLFxuICBzdWJzdHJpbmdcbn07XG4iXSwibmFtZXMiOlsiaW5kZXhPZiIsInN0cmNtcCIsInN0cmxlbiIsInN1YnN0cmluZyIsInN0cmluZyIsImxlbmd0aCIsIml0ZXJhdG9yIiwiU3ltYm9sIiwiY2hhcmFjdGVyIiwibmV4dCIsImRvbmUiLCJzdHJpbmdBIiwic3RyaW5nQiIsImRpZmZlcmVuY2UiLCJpdGVyYXRvckEiLCJpdGVyYXRvckIiLCJjaGFyYWN0ZXJBIiwiY2hhcmFjdGVyQiIsImNvZGVQb2ludEEiLCJjb2RlUG9pbnRCIiwidmFsdWUiLCJjb2RlUG9pbnRBdCIsInNlYXJjaFN0cmluZyIsImluZGV4IiwiZm91bmQiLCJzZWFyY2hTdHJpbmdMZW5ndGgiLCJzZWFyY2hJdGVyYXRvciIsInNlYXJjaENoYXJhY3RlciIsInN0YXJ0IiwiZW5kIiwic3ViU3RyaW5nIiwiSW5maW5pdHkiLCJjaGFyYWN0ZXJzIiwicHVzaCIsImpvaW4iLCJFTVBUWV9TVFJJTkciXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUErSEEsT0FLRTtlQUxGOztJQXZFZ0JBLE9BQU87ZUFBUEE7O0lBcENBQyxNQUFNO2VBQU5BOztJQWhCQUMsTUFBTTtlQUFOQTs7SUFnR0FDLFNBQVM7ZUFBVEE7Ozt5QkFsR2E7QUFFdEIsU0FBU0QsT0FBT0UsTUFBTTtJQUMzQixJQUFJQyxTQUFTO0lBRWIsSUFBTUMsV0FBV0YsTUFBTSxDQUFDRyxPQUFPRCxRQUFRLENBQUM7SUFFeEMsSUFBSUUsWUFBWUYsU0FBU0csSUFBSTtJQUU3QixNQUFPLENBQUNELFVBQVVFLElBQUksQ0FBRTtRQUN0QkYsWUFBWUYsU0FBU0csSUFBSTtRQUV6Qko7SUFDRjtJQUVBLE9BQU9BO0FBQ1Q7QUFFTyxTQUFTSixPQUFPVSxPQUFP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
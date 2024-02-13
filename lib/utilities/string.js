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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvc3RyaW5nLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBzdHJsZW4oc3RyaW5nKSB7XG4gIGxldCBsZW5ndGggPSAwO1xuXG4gIGNvbnN0IGl0ZXJhdG9yID0gc3RyaW5nW1N5bWJvbC5pdGVyYXRvcl0oKTtcblxuICBsZXQgY2hhcmFjdGVyID0gaXRlcmF0b3IubmV4dCgpO1xuXG4gIHdoaWxlICghY2hhcmFjdGVyLmRvbmUpIHtcbiAgICBjaGFyYWN0ZXIgPSBpdGVyYXRvci5uZXh0KCk7XG5cbiAgICBsZW5ndGgrK1xuICB9XG5cbiAgcmV0dXJuIGxlbmd0aDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0cmNtcChzdHJpbmdBLCBzdHJpbmdCKSB7XG4gIGxldCBkaWZmZXJlbmNlO1xuXG4gIGNvbnN0IGl0ZXJhdG9yQSA9IHN0cmluZ0FbU3ltYm9sLml0ZXJhdG9yXSgpLCAvLy9cbiAgICAgICAgaXRlcmF0b3JCID0gc3RyaW5nQltTeW1ib2wuaXRlcmF0b3JdKCk7IC8vL1xuXG4gIGxldCBjaGFyYWN0ZXJBID0gaXRlcmF0b3JBLm5leHQoKSxcbiAgICAgIGNoYXJhY3RlckIgPSBpdGVyYXRvckIubmV4dCgpLFxuICAgICAgY29kZVBvaW50QSxcbiAgICAgIGNvZGVQb2ludEI7XG5cbiAgd2hpbGUgKHRydWUpIHtcbiAgICBjb2RlUG9pbnRBID0gY2hhcmFjdGVyQS52YWx1ZSA/IC8vL1xuICAgICAgICAgICAgICAgICAgIGNoYXJhY3RlckEudmFsdWUuY29kZVBvaW50QXQoMCkgOlxuICAgICAgICAgICAgICAgICAgICAgMDtcbiAgICBjb2RlUG9pbnRCID0gY2hhcmFjdGVyQi52YWx1ZSA/IC8vL1xuICAgICAgICAgICAgICAgICAgIGNoYXJhY3RlckIudmFsdWUuY29kZVBvaW50QXQoMCkgOlxuICAgICAgICAgICAgICAgICAgICAgMDtcblxuICAgIGRpZmZlcmVuY2UgPSBjb2RlUG9pbnRCIC0gY29kZVBvaW50QTtcblxuICAgIGlmIChkaWZmZXJlbmNlICE9PSAwKSB7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBpZiAoY2hhcmFjdGVyQS5kb25lIHx8IGNoYXJhY3RlckIuZG9uZSkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgY2hhcmFjdGVyQSA9IGl0ZXJhdG9yQS5uZXh0KCk7XG4gICAgY2hhcmFjdGVyQiA9IGl0ZXJhdG9yQi5uZXh0KCk7XG4gIH1cblxuICByZXR1cm4gZGlmZmVyZW5jZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluZGV4T2Yoc3RyaW5nLCBzZWFyY2hTdHJpbmcpIHtcbiAgbGV0IGluZGV4ID0gLTEsXG4gICAgICBmb3VuZCA9IGZhbHNlO1xuXG4gIGNvbnN0IHNlYXJjaFN0cmluZ0xlbmd0aCA9IHN0cmxlbihzZWFyY2hTdHJpbmcpO1xuXG4gIGlmIChzZWFyY2hTdHJpbmdMZW5ndGggPiAwKSB7XG4gICAgbGV0IGNoYXJhY3RlcjtcblxuICAgIGNvbnN0IGl0ZXJhdG9yID0gc3RyaW5nW1N5bWJvbC5pdGVyYXRvcl0oKSxcbiAgICAgICAgICBzZWFyY2hJdGVyYXRvciA9IHNlYXJjaFN0cmluZ1tTeW1ib2wuaXRlcmF0b3JdKCksXG4gICAgICAgICAgc2VhcmNoQ2hhcmFjdGVyID0gc2VhcmNoSXRlcmF0b3IubmV4dCgpO1xuXG4gICAgY2hhcmFjdGVyID0gaXRlcmF0b3IubmV4dCgpO1xuXG4gICAgaW5kZXgrKztcblxuICAgIHdoaWxlICghY2hhcmFjdGVyLmRvbmUpIHtcbiAgICAgIGlmIChjaGFyYWN0ZXIudmFsdWUgPT09IHNlYXJjaENoYXJhY3Rlci52YWx1ZSkge1xuICAgICAgICBjb25zdCBzdGFydCA9IGluZGV4LCAgLy8vXG4gICAgICAgICAgICAgIGVuZCA9IHN0YXJ0ICsgc2VhcmNoU3RyaW5nTGVuZ3RoLFxuICAgICAgICAgICAgICBzdWJTdHJpbmcgPSBzdWJzdHJpbmcoc3RyaW5nLCBzdGFydCwgZW5kKSxcbiAgICAgICAgICAgICAgZGlmZmVyZW5jZSA9IHN0cmNtcChzdWJTdHJpbmcsIHNlYXJjaFN0cmluZyk7XG5cbiAgICAgICAgaWYgKGRpZmZlcmVuY2UgPT09IDApIHtcbiAgICAgICAgICBmb3VuZCA9IHRydWU7XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjaGFyYWN0ZXIgPSBpdGVyYXRvci5uZXh0KCk7XG5cbiAgICAgIGluZGV4KytcbiAgICB9XG4gIH1cblxuICBpZiAoIWZvdW5kKSB7XG4gICAgaW5kZXggPSAtMTtcbiAgfVxuXG4gIHJldHVybiBpbmRleDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1YnN0cmluZyhzdHJpbmcsIHN0YXJ0LCBlbmQgPSBJbmZpbml0eSkge1xuICBsZXQgaW5kZXggPSAwO1xuXG4gIGNvbnN0IGl0ZXJhdG9yID0gc3RyaW5nW1N5bWJvbC5pdGVyYXRvcl0oKSxcbiAgICAgICAgY2hhcmFjdGVycyA9IFtdO1xuXG4gIGxldCBjaGFyYWN0ZXIgPSBpdGVyYXRvci5uZXh0KCk7XG5cbiAgd2hpbGUgKCFjaGFyYWN0ZXIuZG9uZSkge1xuICAgIGlmIChpbmRleCA9PT0gZW5kKSB7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBpZiAoaW5kZXggPj0gc3RhcnQpIHtcbiAgICAgIGNoYXJhY3RlcnMucHVzaChjaGFyYWN0ZXIudmFsdWUpOyAvLy9cbiAgICB9XG5cbiAgICBpbmRleCsrXG5cbiAgICBjaGFyYWN0ZXIgPSBpdGVyYXRvci5uZXh0KCk7XG4gIH1cblxuICBjb25zdCBzdWJzdHJpbmcgPSBjaGFyYWN0ZXJzLmpvaW4oRU1QVFlfU1RSSU5HKTtcblxuICByZXR1cm4gc3Vic3RyaW5nO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHN0cmNtcCxcbiAgc3RybGVuLFxuICBpbmRleE9mLFxuICBzdWJzdHJpbmdcbn07XG4iXSwibmFtZXMiOlsiaW5kZXhPZiIsInN0cmNtcCIsInN0cmxlbiIsInN1YnN0cmluZyIsInN0cmluZyIsImxlbmd0aCIsIml0ZXJhdG9yIiwiU3ltYm9sIiwiY2hhcmFjdGVyIiwibmV4dCIsImRvbmUiLCJzdHJpbmdBIiwic3RyaW5nQiIsImRpZmZlcmVuY2UiLCJpdGVyYXRvckEiLCJpdGVyYXRvckIiLCJjaGFyYWN0ZXJBIiwiY2hhcmFjdGVyQiIsImNvZGVQb2ludEEiLCJjb2RlUG9pbnRCIiwidmFsdWUiLCJjb2RlUG9pbnRBdCIsInNlYXJjaFN0cmluZyIsImluZGV4IiwiZm91bmQiLCJzZWFyY2hTdHJpbmdMZW5ndGgiLCJzZWFyY2hJdGVyYXRvciIsInNlYXJjaENoYXJhY3RlciIsInN0YXJ0IiwiZW5kIiwic3ViU3RyaW5nIiwiSW5maW5pdHkiLCJjaGFyYWN0ZXJzIiwicHVzaCIsImpvaW4iLCJFTVBUWV9TVFJJTkciXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQStIQSxPQUtFO2VBTEY7O0lBdkVnQkEsT0FBTztlQUFQQTs7SUFwQ0FDLE1BQU07ZUFBTkE7O0lBaEJBQyxNQUFNO2VBQU5BOztJQWdHQUMsU0FBUztlQUFUQTs7O3lCQWxHYTtBQUV0QixTQUFTRCxPQUFPRSxNQUFNO0lBQzNCLElBQUlDLFNBQVM7SUFFYixJQUFNQyxXQUFXRixNQUFNLENBQUNHLE9BQU9ELFFBQVEsQ0FBQztJQUV4QyxJQUFJRSxZQUFZRixTQUFTRyxJQUFJO0lBRTdCLE1BQU8sQ0FBQ0QsVUFBVUUsSUFBSSxDQUFFO1FBQ3RCRixZQUFZRixTQUFTRyxJQUFJO1FBRXpCSjtJQUNGO0lBRUEsT0FBT0E7QUFDVDtBQUVPLFNBQVNKLE9BQU9VLE9BQU8sRUFBRUMsT0FBTztJQUNyQyxJQUFJQztJQUVKLElBQU1DLFlBQVlILE9BQU8sQ0FBQ0osT0FBT0QsUUFBUSxDQUFDLElBQ3BDUyxZQUFZSCxPQUFPLENBQUNMLE9BQU9ELFFBQVEsQ0FBQyxJQUFJLEdBQUc7SUFFakQsSUFBSVUsYUFBYUYsVUFBVUwsSUFBSSxJQUMzQlEsYUFBYUYsVUFBVU4sSUFBSSxJQUMzQlMsWUFDQUM7SUFFSixNQUFPLEtBQU07UUFDWEQsYUFBYUYsV0FBV0ksS0FBSyxHQUNkSixXQUFXSSxLQUFLLENBQUNDLFdBQVcsQ0FBQyxLQUMzQjtRQUNqQkYsYUFBYUYsV0FBV0csS0FBSyxHQUNkSCxXQUFXRyxLQUFLLENBQUNDLFdBQVcsQ0FBQyxLQUMzQjtRQUVqQlIsYUFBYU0sYUFBYUQ7UUFFMUIsSUFBSUwsZUFBZSxHQUFHO1lBQ3BCO1FBQ0Y7UUFFQSxJQUFJRyxXQUFXTixJQUFJLElBQUlPLFdBQVdQLElBQUksRUFBRTtZQUN0QztRQUNGO1FBRUFNLGFBQWFGLFVBQVVMLElBQUk7UUFDM0JRLGFBQWFGLFVBQVVOLElBQUk7SUFDN0I7SUFFQSxPQUFPSTtBQUNUO0FBRU8sU0FBU2IsUUFBUUksTUFBTSxFQUFFa0IsWUFBWTtJQUMxQyxJQUFJQyxRQUFRLENBQUMsR0FDVEMsUUFBUTtJQUVaLElBQU1DLHFCQUFxQnZCLE9BQU9vQjtJQUVsQyxJQUFJRyxxQkFBcUIsR0FBRztRQUMxQixJQUFJakI7UUFFSixJQUFNRixXQUFXRixNQUFNLENBQUNHLE9BQU9ELFFBQVEsQ0FBQyxJQUNsQ29CLGlCQUFpQkosWUFBWSxDQUFDZixPQUFPRCxRQUFRLENBQUMsSUFDOUNxQixrQkFBa0JELGVBQWVqQixJQUFJO1FBRTNDRCxZQUFZRixTQUFTRyxJQUFJO1FBRXpCYztRQUVBLE1BQU8sQ0FBQ2YsVUFBVUUsSUFBSSxDQUFFO1lBQ3RCLElBQUlGLFVBQVVZLEtBQUssS0FBS08sZ0JBQWdCUCxLQUFLLEVBQUU7Z0JBQzdDLElBQU1RLFFBQVFMLE9BQ1JNLE1BQU1ELFFBQVFILG9CQUNkSyxZQUFZM0IsVUFBVUMsUUFBUXdCLE9BQU9DLE1BQ3JDaEIsYUFBYVosT0FBTzZCLFdBQVdSO2dCQUVyQyxJQUFJVCxlQUFlLEdBQUc7b0JBQ3BCVyxRQUFRO29CQUVSO2dCQUNGO1lBQ0Y7WUFFQWhCLFlBQVlGLFNBQVNHLElBQUk7WUFFekJjO1FBQ0Y7SUFDRjtJQUVBLElBQUksQ0FBQ0MsT0FBTztRQUNWRCxRQUFRLENBQUM7SUFDWDtJQUVBLE9BQU9BO0FBQ1Q7QUFFTyxTQUFTcEIsVUFBVUMsTUFBTSxFQUFFd0IsS0FBSztRQUFFQyxNQUFBQSxpRUFBTUU7SUFDN0MsSUFBSVIsUUFBUTtJQUVaLElBQU1qQixXQUFXRixNQUFNLENBQUNHLE9BQU9ELFFBQVEsQ0FBQyxJQUNsQzBCLGFBQWEsRUFBRTtJQUVyQixJQUFJeEIsWUFBWUYsU0FBU0csSUFBSTtJQUU3QixNQUFPLENBQUNELFVBQVVFLElBQUksQ0FBRTtRQUN0QixJQUFJYSxVQUFVTSxLQUFLO1lBQ2pCO1FBQ0Y7UUFFQSxJQUFJTixTQUFTSyxPQUFPO1lBQ2xCSSxXQUFXQyxJQUFJLENBQUN6QixVQUFVWSxLQUFLLEdBQUcsR0FBRztRQUN2QztRQUVBRztRQUVBZixZQUFZRixTQUFTRyxJQUFJO0lBQzNCO0lBRUEsSUFBTU4sY0FBWTZCLFdBQVdFLElBQUksQ0FBQ0MsdUJBQVk7SUFFOUMsT0FBT2hDO0FBQ1Q7SUFFQSxXQUFlO0lBQ2JGLFFBQUFBO0lBQ0FDLFFBQUFBO0lBQ0FGLFNBQUFBO0lBQ0FHLFdBQUFBO0FBQ0YifQ==
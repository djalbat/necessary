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
    get default () {
        return _default;
    },
    get indexOf () {
        return indexOf;
    },
    get strcmp () {
        return strcmp;
    },
    get strlen () {
        return strlen;
    },
    get substring () {
        return substring;
    }
});
const _constants = require("../constants");
function strlen(string) {
    let length = 0;
    const iterator = string[Symbol.iterator]();
    let character = iterator.next();
    while(!character.done){
        character = iterator.next();
        length++;
    }
    return length;
}
function strcmp(stringA, stringB) {
    let difference;
    const iteratorA = stringA[Symbol.iterator](), iteratorB = stringB[Symbol.iterator](); ///
    let characterA = iteratorA.next(), characterB = iteratorB.next(), codePointA, codePointB;
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
    let index = -1, found = false;
    const searchStringLength = strlen(searchString);
    if (searchStringLength > 0) {
        let character;
        const iterator = string[Symbol.iterator](), searchIterator = searchString[Symbol.iterator](), searchCharacter = searchIterator.next();
        character = iterator.next();
        index++;
        while(!character.done){
            if (character.value === searchCharacter.value) {
                const start = index, end = start + searchStringLength, subString = substring(string, start, end), difference = strcmp(subString, searchString);
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
function substring(string, start, end = Infinity) {
    let index = 0;
    const iterator = string[Symbol.iterator](), characters = [];
    let character = iterator.next();
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
    const substring1 = characters.join(_constants.EMPTY_STRING);
    return substring1;
}
const _default = {
    strcmp,
    strlen,
    indexOf,
    substring
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvc3RyaW5nLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBzdHJsZW4oc3RyaW5nKSB7XG4gIGxldCBsZW5ndGggPSAwO1xuXG4gIGNvbnN0IGl0ZXJhdG9yID0gc3RyaW5nW1N5bWJvbC5pdGVyYXRvcl0oKTtcblxuICBsZXQgY2hhcmFjdGVyID0gaXRlcmF0b3IubmV4dCgpO1xuXG4gIHdoaWxlICghY2hhcmFjdGVyLmRvbmUpIHtcbiAgICBjaGFyYWN0ZXIgPSBpdGVyYXRvci5uZXh0KCk7XG5cbiAgICBsZW5ndGgrK1xuICB9XG5cbiAgcmV0dXJuIGxlbmd0aDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0cmNtcChzdHJpbmdBLCBzdHJpbmdCKSB7XG4gIGxldCBkaWZmZXJlbmNlO1xuXG4gIGNvbnN0IGl0ZXJhdG9yQSA9IHN0cmluZ0FbU3ltYm9sLml0ZXJhdG9yXSgpLCAvLy9cbiAgICAgICAgaXRlcmF0b3JCID0gc3RyaW5nQltTeW1ib2wuaXRlcmF0b3JdKCk7IC8vL1xuXG4gIGxldCBjaGFyYWN0ZXJBID0gaXRlcmF0b3JBLm5leHQoKSxcbiAgICAgIGNoYXJhY3RlckIgPSBpdGVyYXRvckIubmV4dCgpLFxuICAgICAgY29kZVBvaW50QSxcbiAgICAgIGNvZGVQb2ludEI7XG5cbiAgd2hpbGUgKHRydWUpIHtcbiAgICBjb2RlUG9pbnRBID0gY2hhcmFjdGVyQS52YWx1ZSA/IC8vL1xuICAgICAgICAgICAgICAgICAgIGNoYXJhY3RlckEudmFsdWUuY29kZVBvaW50QXQoMCkgOlxuICAgICAgICAgICAgICAgICAgICAgMDtcbiAgICBjb2RlUG9pbnRCID0gY2hhcmFjdGVyQi52YWx1ZSA/IC8vL1xuICAgICAgICAgICAgICAgICAgIGNoYXJhY3RlckIudmFsdWUuY29kZVBvaW50QXQoMCkgOlxuICAgICAgICAgICAgICAgICAgICAgMDtcblxuICAgIGRpZmZlcmVuY2UgPSBjb2RlUG9pbnRCIC0gY29kZVBvaW50QTtcblxuICAgIGlmIChkaWZmZXJlbmNlICE9PSAwKSB7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBpZiAoY2hhcmFjdGVyQS5kb25lIHx8IGNoYXJhY3RlckIuZG9uZSkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgY2hhcmFjdGVyQSA9IGl0ZXJhdG9yQS5uZXh0KCk7XG4gICAgY2hhcmFjdGVyQiA9IGl0ZXJhdG9yQi5uZXh0KCk7XG4gIH1cblxuICByZXR1cm4gZGlmZmVyZW5jZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluZGV4T2Yoc3RyaW5nLCBzZWFyY2hTdHJpbmcpIHtcbiAgbGV0IGluZGV4ID0gLTEsXG4gICAgICBmb3VuZCA9IGZhbHNlO1xuXG4gIGNvbnN0IHNlYXJjaFN0cmluZ0xlbmd0aCA9IHN0cmxlbihzZWFyY2hTdHJpbmcpO1xuXG4gIGlmIChzZWFyY2hTdHJpbmdMZW5ndGggPiAwKSB7XG4gICAgbGV0IGNoYXJhY3RlcjtcblxuICAgIGNvbnN0IGl0ZXJhdG9yID0gc3RyaW5nW1N5bWJvbC5pdGVyYXRvcl0oKSxcbiAgICAgICAgICBzZWFyY2hJdGVyYXRvciA9IHNlYXJjaFN0cmluZ1tTeW1ib2wuaXRlcmF0b3JdKCksXG4gICAgICAgICAgc2VhcmNoQ2hhcmFjdGVyID0gc2VhcmNoSXRlcmF0b3IubmV4dCgpO1xuXG4gICAgY2hhcmFjdGVyID0gaXRlcmF0b3IubmV4dCgpO1xuXG4gICAgaW5kZXgrKztcblxuICAgIHdoaWxlICghY2hhcmFjdGVyLmRvbmUpIHtcbiAgICAgIGlmIChjaGFyYWN0ZXIudmFsdWUgPT09IHNlYXJjaENoYXJhY3Rlci52YWx1ZSkge1xuICAgICAgICBjb25zdCBzdGFydCA9IGluZGV4LCAgLy8vXG4gICAgICAgICAgICAgIGVuZCA9IHN0YXJ0ICsgc2VhcmNoU3RyaW5nTGVuZ3RoLFxuICAgICAgICAgICAgICBzdWJTdHJpbmcgPSBzdWJzdHJpbmcoc3RyaW5nLCBzdGFydCwgZW5kKSxcbiAgICAgICAgICAgICAgZGlmZmVyZW5jZSA9IHN0cmNtcChzdWJTdHJpbmcsIHNlYXJjaFN0cmluZyk7XG5cbiAgICAgICAgaWYgKGRpZmZlcmVuY2UgPT09IDApIHtcbiAgICAgICAgICBmb3VuZCA9IHRydWU7XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjaGFyYWN0ZXIgPSBpdGVyYXRvci5uZXh0KCk7XG5cbiAgICAgIGluZGV4KytcbiAgICB9XG4gIH1cblxuICBpZiAoIWZvdW5kKSB7XG4gICAgaW5kZXggPSAtMTtcbiAgfVxuXG4gIHJldHVybiBpbmRleDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1YnN0cmluZyhzdHJpbmcsIHN0YXJ0LCBlbmQgPSBJbmZpbml0eSkge1xuICBsZXQgaW5kZXggPSAwO1xuXG4gIGNvbnN0IGl0ZXJhdG9yID0gc3RyaW5nW1N5bWJvbC5pdGVyYXRvcl0oKSxcbiAgICAgICAgY2hhcmFjdGVycyA9IFtdO1xuXG4gIGxldCBjaGFyYWN0ZXIgPSBpdGVyYXRvci5uZXh0KCk7XG5cbiAgd2hpbGUgKCFjaGFyYWN0ZXIuZG9uZSkge1xuICAgIGlmIChpbmRleCA9PT0gZW5kKSB7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBpZiAoaW5kZXggPj0gc3RhcnQpIHtcbiAgICAgIGNoYXJhY3RlcnMucHVzaChjaGFyYWN0ZXIudmFsdWUpOyAvLy9cbiAgICB9XG5cbiAgICBpbmRleCsrXG5cbiAgICBjaGFyYWN0ZXIgPSBpdGVyYXRvci5uZXh0KCk7XG4gIH1cblxuICBjb25zdCBzdWJzdHJpbmcgPSBjaGFyYWN0ZXJzLmpvaW4oRU1QVFlfU1RSSU5HKTtcblxuICByZXR1cm4gc3Vic3RyaW5nO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHN0cmNtcCxcbiAgc3RybGVuLFxuICBpbmRleE9mLFxuICBzdWJzdHJpbmdcbn07XG4iXSwibmFtZXMiOlsiaW5kZXhPZiIsInN0cmNtcCIsInN0cmxlbiIsInN1YnN0cmluZyIsInN0cmluZyIsImxlbmd0aCIsIml0ZXJhdG9yIiwiU3ltYm9sIiwiY2hhcmFjdGVyIiwibmV4dCIsImRvbmUiLCJzdHJpbmdBIiwic3RyaW5nQiIsImRpZmZlcmVuY2UiLCJpdGVyYXRvckEiLCJpdGVyYXRvckIiLCJjaGFyYWN0ZXJBIiwiY2hhcmFjdGVyQiIsImNvZGVQb2ludEEiLCJjb2RlUG9pbnRCIiwidmFsdWUiLCJjb2RlUG9pbnRBdCIsInNlYXJjaFN0cmluZyIsImluZGV4IiwiZm91bmQiLCJzZWFyY2hTdHJpbmdMZW5ndGgiLCJzZWFyY2hJdGVyYXRvciIsInNlYXJjaENoYXJhY3RlciIsInN0YXJ0IiwiZW5kIiwic3ViU3RyaW5nIiwiSW5maW5pdHkiLCJjaGFyYWN0ZXJzIiwicHVzaCIsImpvaW4iLCJFTVBUWV9TVFJJTkciXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQStIQTtlQUFBOztRQXZFZ0JBO2VBQUFBOztRQXBDQUM7ZUFBQUE7O1FBaEJBQztlQUFBQTs7UUFnR0FDO2VBQUFBOzs7MkJBbEdhO0FBRXRCLFNBQVNELE9BQU9FLE1BQU07SUFDM0IsSUFBSUMsU0FBUztJQUViLE1BQU1DLFdBQVdGLE1BQU0sQ0FBQ0csT0FBT0QsUUFBUSxDQUFDO0lBRXhDLElBQUlFLFlBQVlGLFNBQVNHLElBQUk7SUFFN0IsTUFBTyxDQUFDRCxVQUFVRSxJQUFJLENBQUU7UUFDdEJGLFlBQVlGLFNBQVNHLElBQUk7UUFFekJKO0lBQ0Y7SUFFQSxPQUFPQTtBQUNUO0FBRU8sU0FBU0osT0FBT1UsT0FBTyxFQUFFQyxPQUFPO0lBQ3JDLElBQUlDO0lBRUosTUFBTUMsWUFBWUgsT0FBTyxDQUFDSixPQUFPRCxRQUFRLENBQUMsSUFDcENTLFlBQVlILE9BQU8sQ0FBQ0wsT0FBT0QsUUFBUSxDQUFDLElBQUksR0FBRztJQUVqRCxJQUFJVSxhQUFhRixVQUFVTCxJQUFJLElBQzNCUSxhQUFhRixVQUFVTixJQUFJLElBQzNCUyxZQUNBQztJQUVKLE1BQU8sS0FBTTtRQUNYRCxhQUFhRixXQUFXSSxLQUFLLEdBQ2RKLFdBQVdJLEtBQUssQ0FBQ0MsV0FBVyxDQUFDLEtBQzNCO1FBQ2pCRixhQUFhRixXQUFXRyxLQUFLLEdBQ2RILFdBQVdHLEtBQUssQ0FBQ0MsV0FBVyxDQUFDLEtBQzNCO1FBRWpCUixhQUFhTSxhQUFhRDtRQUUxQixJQUFJTCxlQUFlLEdBQUc7WUFDcEI7UUFDRjtRQUVBLElBQUlHLFdBQVdOLElBQUksSUFBSU8sV0FBV1AsSUFBSSxFQUFFO1lBQ3RDO1FBQ0Y7UUFFQU0sYUFBYUYsVUFBVUwsSUFBSTtRQUMzQlEsYUFBYUYsVUFBVU4sSUFBSTtJQUM3QjtJQUVBLE9BQU9JO0FBQ1Q7QUFFTyxTQUFTYixRQUFRSSxNQUFNLEVBQUVrQixZQUFZO0lBQzFDLElBQUlDLFFBQVEsQ0FBQyxHQUNUQyxRQUFRO0lBRVosTUFBTUMscUJBQXFCdkIsT0FBT29CO0lBRWxDLElBQUlHLHFCQUFxQixHQUFHO1FBQzFCLElBQUlqQjtRQUVKLE1BQU1GLFdBQVdGLE1BQU0sQ0FBQ0csT0FBT0QsUUFBUSxDQUFDLElBQ2xDb0IsaUJBQWlCSixZQUFZLENBQUNmLE9BQU9ELFFBQVEsQ0FBQyxJQUM5Q3FCLGtCQUFrQkQsZUFBZWpCLElBQUk7UUFFM0NELFlBQVlGLFNBQVNHLElBQUk7UUFFekJjO1FBRUEsTUFBTyxDQUFDZixVQUFVRSxJQUFJLENBQUU7WUFDdEIsSUFBSUYsVUFBVVksS0FBSyxLQUFLTyxnQkFBZ0JQLEtBQUssRUFBRTtnQkFDN0MsTUFBTVEsUUFBUUwsT0FDUk0sTUFBTUQsUUFBUUgsb0JBQ2RLLFlBQVkzQixVQUFVQyxRQUFRd0IsT0FBT0MsTUFDckNoQixhQUFhWixPQUFPNkIsV0FBV1I7Z0JBRXJDLElBQUlULGVBQWUsR0FBRztvQkFDcEJXLFFBQVE7b0JBRVI7Z0JBQ0Y7WUFDRjtZQUVBaEIsWUFBWUYsU0FBU0csSUFBSTtZQUV6QmM7UUFDRjtJQUNGO0lBRUEsSUFBSSxDQUFDQyxPQUFPO1FBQ1ZELFFBQVEsQ0FBQztJQUNYO0lBRUEsT0FBT0E7QUFDVDtBQUVPLFNBQVNwQixVQUFVQyxNQUFNLEVBQUV3QixLQUFLLEVBQUVDLE1BQU1FLFFBQVE7SUFDckQsSUFBSVIsUUFBUTtJQUVaLE1BQU1qQixXQUFXRixNQUFNLENBQUNHLE9BQU9ELFFBQVEsQ0FBQyxJQUNsQzBCLGFBQWEsRUFBRTtJQUVyQixJQUFJeEIsWUFBWUYsU0FBU0csSUFBSTtJQUU3QixNQUFPLENBQUNELFVBQVVFLElBQUksQ0FBRTtRQUN0QixJQUFJYSxVQUFVTSxLQUFLO1lBQ2pCO1FBQ0Y7UUFFQSxJQUFJTixTQUFTSyxPQUFPO1lBQ2xCSSxXQUFXQyxJQUFJLENBQUN6QixVQUFVWSxLQUFLLEdBQUcsR0FBRztRQUN2QztRQUVBRztRQUVBZixZQUFZRixTQUFTRyxJQUFJO0lBQzNCO0lBRUEsTUFBTU4sYUFBWTZCLFdBQVdFLElBQUksQ0FBQ0MsdUJBQVk7SUFFOUMsT0FBT2hDO0FBQ1Q7TUFFQSxXQUFlO0lBQ2JGO0lBQ0FDO0lBQ0FGO0lBQ0FHO0FBQ0YifQ==
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
function strlen(string) {
    let length = 0;
    for (const _ of string){
        length++;
    }
    return length;
}
function strcmp(stringA, stringB) {
    let difference = 0;
    let naiveIndexA = 0, naiveIndexB = 0;
    const stringANaiveLength = stringA.length, stringBNaiveLength = stringB.length;
    while(naiveIndexA < stringANaiveLength || naiveIndexB < stringBNaiveLength){
        const codePointA = naiveIndexA < stringANaiveLength ? stringA.codePointAt(naiveIndexA) : 0, codePointB = naiveIndexB < stringBNaiveLength ? stringB.codePointAt(naiveIndexB) : 0;
        difference = codePointA - codePointB;
        if (difference !== 0) {
            break;
        }
        naiveIndexA += codePointA > 0xFFFF ? 2 : 1;
        naiveIndexB += codePointB > 0xFFFF ? 2 : 1;
    }
    return difference;
}
function indexOf(string, searchString) {
    let index = -1;
    const searchStringLength = searchString.length;
    if (searchStringLength > 0) {
        const outerNaiveIndex = string.indexOf(searchString);
        if (outerNaiveIndex > -1) {
            index = 0;
            let innerNaiveIndex = 0;
            while(innerNaiveIndex < outerNaiveIndex){
                const charCode = string.charCodeAt(innerNaiveIndex);
                innerNaiveIndex += charCode >= 0xD800 && charCode <= 0xDBFF ? 2 : 1;
                index++;
            }
        }
    }
    return index;
}
function substring(string, start, end = Infinity) {
    const stringNaiveLength = string.length;
    let index = 0, naiveIndex = 0, naiveStart = stringNaiveLength, naiveEnd = stringNaiveLength; ///
    while(naiveIndex < stringNaiveLength){
        if (index === start) {
            naiveStart = naiveIndex; ///
        }
        if (index === end) {
            naiveEnd = naiveIndex; ///
            break;
        }
        const charCode = string.charCodeAt(naiveIndex);
        naiveIndex += charCode >= 0xD800 && charCode <= 0xDBFF ? 2 : 1;
        index++;
    }
    if (index === start) {
        naiveStart = naiveIndex; ///
    }
    if (index === end) {
        naiveEnd = naiveIndex; ///
    }
    const substring1 = string.substring(naiveStart, naiveEnd);
    return substring1;
}
const _default = {
    strcmp,
    strlen,
    indexOf,
    substring
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvc3RyaW5nLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gc3RybGVuKHN0cmluZykge1xuICBsZXQgbGVuZ3RoID0gMDtcblxuICBmb3IgKGNvbnN0IF8gb2Ygc3RyaW5nKSB7XG4gICAgbGVuZ3RoKys7XG4gIH1cblxuICByZXR1cm4gbGVuZ3RoO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RyY21wKHN0cmluZ0EsIHN0cmluZ0IpIHtcbiAgbGV0IGRpZmZlcmVuY2UgPSAwO1xuXG4gIGxldCBuYWl2ZUluZGV4QSA9IDAsXG4gICAgICBuYWl2ZUluZGV4QiA9IDA7XG5cbiAgY29uc3Qgc3RyaW5nQU5haXZlTGVuZ3RoID0gc3RyaW5nQS5sZW5ndGgsXG4gICAgICAgIHN0cmluZ0JOYWl2ZUxlbmd0aCA9IHN0cmluZ0IubGVuZ3RoO1xuXG4gIHdoaWxlICgobmFpdmVJbmRleEEgPCBzdHJpbmdBTmFpdmVMZW5ndGgpIHx8IChuYWl2ZUluZGV4QiA8IHN0cmluZ0JOYWl2ZUxlbmd0aCkpIHtcbiAgICBjb25zdCBjb2RlUG9pbnRBID0gKG5haXZlSW5kZXhBIDwgc3RyaW5nQU5haXZlTGVuZ3RoKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgc3RyaW5nQS5jb2RlUG9pbnRBdChuYWl2ZUluZGV4QSkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgMCxcbiAgICAgICAgICBjb2RlUG9pbnRCID0gKG5haXZlSW5kZXhCIDwgc3RyaW5nQk5haXZlTGVuZ3RoKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgc3RyaW5nQi5jb2RlUG9pbnRBdChuYWl2ZUluZGV4QikgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgMDtcblxuICAgIGRpZmZlcmVuY2UgPSAoY29kZVBvaW50QSAtIGNvZGVQb2ludEIpO1xuXG4gICAgaWYgKGRpZmZlcmVuY2UgIT09IDApIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIG5haXZlSW5kZXhBICs9IChjb2RlUG9pbnRBID4gMHhGRkZGKSA/XG4gICAgICAgICAgICAgICAgMiA6XG4gICAgICAgICAgICAgICAgICAxO1xuXG4gICAgbmFpdmVJbmRleEIgKz0gKGNvZGVQb2ludEIgPiAweEZGRkYpID9cbiAgICAgICAgICAgICAgICAyIDpcbiAgICAgICAgICAgICAgICAgIDE7XG4gIH1cblxuICByZXR1cm4gZGlmZmVyZW5jZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluZGV4T2Yoc3RyaW5nLCBzZWFyY2hTdHJpbmcpIHtcbiAgbGV0IGluZGV4ID0gLTE7XG5cbiAgY29uc3Qgc2VhcmNoU3RyaW5nTGVuZ3RoID0gc2VhcmNoU3RyaW5nLmxlbmd0aDtcblxuICBpZiAoc2VhcmNoU3RyaW5nTGVuZ3RoID4gMCkge1xuICAgIGNvbnN0IG91dGVyTmFpdmVJbmRleCA9IHN0cmluZy5pbmRleE9mKHNlYXJjaFN0cmluZyk7XG5cbiAgICBpZiAob3V0ZXJOYWl2ZUluZGV4ID4gLTEpIHtcbiAgICAgIGluZGV4ID0gMDtcblxuICAgICAgbGV0IGlubmVyTmFpdmVJbmRleCA9IDA7XG5cbiAgICAgIHdoaWxlIChpbm5lck5haXZlSW5kZXggPCBvdXRlck5haXZlSW5kZXgpIHtcbiAgICAgICAgY29uc3QgY2hhckNvZGUgPSBzdHJpbmcuY2hhckNvZGVBdChpbm5lck5haXZlSW5kZXgpO1xuXG4gICAgICAgIGlubmVyTmFpdmVJbmRleCArPSAoKGNoYXJDb2RlID49IDB4RDgwMCkgJiYgKGNoYXJDb2RlIDw9IDB4REJGRikpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMiA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTtcblxuICAgICAgICBpbmRleCsrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBpbmRleDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1YnN0cmluZyhzdHJpbmcsIHN0YXJ0LCBlbmQgPSBJbmZpbml0eSkge1xuICBjb25zdCBzdHJpbmdOYWl2ZUxlbmd0aCA9IHN0cmluZy5sZW5ndGg7XG5cbiAgbGV0IGluZGV4ID0gMCxcbiAgICAgIG5haXZlSW5kZXggPSAwLFxuICAgICAgbmFpdmVTdGFydCA9IHN0cmluZ05haXZlTGVuZ3RoLCAvLy9cbiAgICAgIG5haXZlRW5kID0gc3RyaW5nTmFpdmVMZW5ndGg7IC8vL1xuXG4gIHdoaWxlIChuYWl2ZUluZGV4IDwgc3RyaW5nTmFpdmVMZW5ndGgpIHtcbiAgICBpZiAoaW5kZXggPT09IHN0YXJ0KSB7XG4gICAgICBuYWl2ZVN0YXJ0ID0gbmFpdmVJbmRleDsgIC8vL1xuICAgIH1cblxuICAgIGlmIChpbmRleCA9PT0gZW5kKSB7XG4gICAgICBuYWl2ZUVuZCA9IG5haXZlSW5kZXg7ICAvLy9cblxuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgY29uc3QgY2hhckNvZGUgPSBzdHJpbmcuY2hhckNvZGVBdChuYWl2ZUluZGV4KTtcblxuICAgIG5haXZlSW5kZXggKz0gKChjaGFyQ29kZSA+PSAweEQ4MDApICYmIChjaGFyQ29kZSA8PSAweERCRkYpKSA/XG4gICAgICAgICAgICAgICAgICAgIDIgOlxuICAgICAgICAgICAgICAgICAgICAgIDE7XG5cbiAgICBpbmRleCsrO1xuICB9XG5cbiAgaWYgKGluZGV4ID09PSBzdGFydCkge1xuICAgIG5haXZlU3RhcnQgPSBuYWl2ZUluZGV4OyAgLy8vXG4gIH1cblxuICBpZiAoaW5kZXggPT09IGVuZCkge1xuICAgIG5haXZlRW5kID0gbmFpdmVJbmRleDsgIC8vL1xuICB9XG5cbiAgY29uc3Qgc3Vic3RyaW5nID0gc3RyaW5nLnN1YnN0cmluZyhuYWl2ZVN0YXJ0LCBuYWl2ZUVuZCk7XG5cbiAgcmV0dXJuIHN1YnN0cmluZztcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBzdHJjbXAsXG4gIHN0cmxlbixcbiAgaW5kZXhPZixcbiAgc3Vic3RyaW5nXG59O1xuIl0sIm5hbWVzIjpbImluZGV4T2YiLCJzdHJjbXAiLCJzdHJsZW4iLCJzdWJzdHJpbmciLCJzdHJpbmciLCJsZW5ndGgiLCJfIiwic3RyaW5nQSIsInN0cmluZ0IiLCJkaWZmZXJlbmNlIiwibmFpdmVJbmRleEEiLCJuYWl2ZUluZGV4QiIsInN0cmluZ0FOYWl2ZUxlbmd0aCIsInN0cmluZ0JOYWl2ZUxlbmd0aCIsImNvZGVQb2ludEEiLCJjb2RlUG9pbnRBdCIsImNvZGVQb2ludEIiLCJzZWFyY2hTdHJpbmciLCJpbmRleCIsInNlYXJjaFN0cmluZ0xlbmd0aCIsIm91dGVyTmFpdmVJbmRleCIsImlubmVyTmFpdmVJbmRleCIsImNoYXJDb2RlIiwiY2hhckNvZGVBdCIsInN0YXJ0IiwiZW5kIiwiSW5maW5pdHkiLCJzdHJpbmdOYWl2ZUxlbmd0aCIsIm5haXZlSW5kZXgiLCJuYWl2ZVN0YXJ0IiwibmFpdmVFbmQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQW9IQTtlQUFBOztRQXJFZ0JBO2VBQUFBOztRQW5DQUM7ZUFBQUE7O1FBVkFDO2VBQUFBOztRQXlFQUM7ZUFBQUE7OztBQXpFVCxTQUFTRCxPQUFPRSxNQUFNO0lBQzNCLElBQUlDLFNBQVM7SUFFYixLQUFLLE1BQU1DLEtBQUtGLE9BQVE7UUFDdEJDO0lBQ0Y7SUFFQSxPQUFPQTtBQUNUO0FBRU8sU0FBU0osT0FBT00sT0FBTyxFQUFFQyxPQUFPO0lBQ3JDLElBQUlDLGFBQWE7SUFFakIsSUFBSUMsY0FBYyxHQUNkQyxjQUFjO0lBRWxCLE1BQU1DLHFCQUFxQkwsUUFBUUYsTUFBTSxFQUNuQ1EscUJBQXFCTCxRQUFRSCxNQUFNO0lBRXpDLE1BQU8sQUFBQ0ssY0FBY0Usc0JBQXdCRCxjQUFjRSxtQkFBcUI7UUFDL0UsTUFBTUMsYUFBYSxBQUFDSixjQUFjRSxxQkFDYkwsUUFBUVEsV0FBVyxDQUFDTCxlQUNsQixHQUNqQk0sYUFBYSxBQUFDTCxjQUFjRSxxQkFDYkwsUUFBUU8sV0FBVyxDQUFDSixlQUNsQjtRQUV2QkYsYUFBY0ssYUFBYUU7UUFFM0IsSUFBSVAsZUFBZSxHQUFHO1lBQ3BCO1FBQ0Y7UUFFQUMsZUFBZSxBQUFDSSxhQUFhLFNBQ2pCLElBQ0U7UUFFZEgsZUFBZSxBQUFDSyxhQUFhLFNBQ2pCLElBQ0U7SUFDaEI7SUFFQSxPQUFPUDtBQUNUO0FBRU8sU0FBU1QsUUFBUUksTUFBTSxFQUFFYSxZQUFZO0lBQzFDLElBQUlDLFFBQVEsQ0FBQztJQUViLE1BQU1DLHFCQUFxQkYsYUFBYVosTUFBTTtJQUU5QyxJQUFJYyxxQkFBcUIsR0FBRztRQUMxQixNQUFNQyxrQkFBa0JoQixPQUFPSixPQUFPLENBQUNpQjtRQUV2QyxJQUFJRyxrQkFBa0IsQ0FBQyxHQUFHO1lBQ3hCRixRQUFRO1lBRVIsSUFBSUcsa0JBQWtCO1lBRXRCLE1BQU9BLGtCQUFrQkQsZ0JBQWlCO2dCQUN4QyxNQUFNRSxXQUFXbEIsT0FBT21CLFVBQVUsQ0FBQ0Y7Z0JBRW5DQSxtQkFBbUIsQUFBQyxBQUFDQyxZQUFZLFVBQVlBLFlBQVksU0FDcEMsSUFDRTtnQkFFdkJKO1lBQ0Y7UUFDRjtJQUNGO0lBRUEsT0FBT0E7QUFDVDtBQUVPLFNBQVNmLFVBQVVDLE1BQU0sRUFBRW9CLEtBQUssRUFBRUMsTUFBTUMsUUFBUTtJQUNyRCxNQUFNQyxvQkFBb0J2QixPQUFPQyxNQUFNO0lBRXZDLElBQUlhLFFBQVEsR0FDUlUsYUFBYSxHQUNiQyxhQUFhRixtQkFDYkcsV0FBV0gsbUJBQW1CLEdBQUc7SUFFckMsTUFBT0MsYUFBYUQsa0JBQW1CO1FBQ3JDLElBQUlULFVBQVVNLE9BQU87WUFDbkJLLGFBQWFELFlBQWEsR0FBRztRQUMvQjtRQUVBLElBQUlWLFVBQVVPLEtBQUs7WUFDakJLLFdBQVdGLFlBQWEsR0FBRztZQUUzQjtRQUNGO1FBRUEsTUFBTU4sV0FBV2xCLE9BQU9tQixVQUFVLENBQUNLO1FBRW5DQSxjQUFjLEFBQUMsQUFBQ04sWUFBWSxVQUFZQSxZQUFZLFNBQ3BDLElBQ0U7UUFFbEJKO0lBQ0Y7SUFFQSxJQUFJQSxVQUFVTSxPQUFPO1FBQ25CSyxhQUFhRCxZQUFhLEdBQUc7SUFDL0I7SUFFQSxJQUFJVixVQUFVTyxLQUFLO1FBQ2pCSyxXQUFXRixZQUFhLEdBQUc7SUFDN0I7SUFFQSxNQUFNekIsYUFBWUMsT0FBT0QsU0FBUyxDQUFDMEIsWUFBWUM7SUFFL0MsT0FBTzNCO0FBQ1Q7TUFFQSxXQUFlO0lBQ2JGO0lBQ0FDO0lBQ0FGO0lBQ0FHO0FBQ0YifQ==
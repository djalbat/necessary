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
    hostnameFromHost: function() {
        return hostnameFromHost;
    },
    overwrite: function() {
        return overwrite;
    },
    portFromHost: function() {
        return portFromHost;
    },
    queryStringFromQuery: function() {
        return queryStringFromQuery;
    },
    secureFromHost: function() {
        return secureFromHost;
    },
    underwrite: function() {
        return underwrite;
    },
    urlFromHostURIAndQuery: function() {
        return urlFromHostURIAndQuery;
    }
});
var _array = require("../utilities/array");
var _constants = require("../constants");
var _characters = require("../characters");
function overwrite(headers, name, value) {
    var lowerCaseName = name.toLowerCase(), existingNames = Object.getOwnPropertyNames(headers), existingName = existingNames.find(function(existingName) {
        var existingLowerCaseName = existingName.toLowerCase();
        if (existingLowerCaseName === lowerCaseName) {
            return true;
        }
    }) || null;
    if (existingName !== null) {
        headers[existingName] = value;
    }
}
function underwrite(headers, name, value) {
    var lowerCaseName = name.toLowerCase(), existingNames = Object.getOwnPropertyNames(headers), existingName = existingNames.find(function(existingName) {
        var existingLowerCaseName = existingName.toLowerCase();
        if (existingLowerCaseName === lowerCaseName) {
            return true;
        }
    }) || null;
    if (existingName === null) {
        headers[name] = value;
    }
}
function portFromHost(host) {
    var port;
    var matches = host.match(/^https?:\/\/([^\/]+)/), secondMatch = (0, _array.second)(matches), index = secondMatch.indexOf(_characters.COLON_CHARACTER);
    if (index === -1) {
        var secure = secureFromHost(host);
        port = secure ? 443 : 80; ///
    } else {
        var start = index + 1, portString = secondMatch.substring(start);
        port = Number(portString);
    }
    return port;
}
function secureFromHost(host) {
    var secure = /^https:\/\//.test(host);
    return secure;
}
function hostnameFromHost(host) {
    var matches = host.match(/^https?:\/\/([^:\/]+)/), secondMatch = (0, _array.second)(matches), hostname = secondMatch; ///
    return hostname;
}
function queryStringFromQuery(query) {
    var names = Object.keys(query), namesLength = names.length, lastIndex = namesLength - 1, queryString = names.reduce(function(queryString, name, index) {
        var value = query[name], encodedName = encodeURIComponent(name), encodedValue = encodeURIComponent(value), ampersandOrNothing = index !== lastIndex ? _characters.AMPERSAND_CHARACTER : _constants.EMPTY_STRING;
        queryString += "".concat(encodedName, "=").concat(encodedValue).concat(ampersandOrNothing);
        return queryString;
    }, _constants.EMPTY_STRING);
    return queryString;
}
function urlFromHostURIAndQuery(host, uri, query) {
    var queryString = queryStringFromQuery(query), url = queryString === _constants.EMPTY_STRING ? "".concat(host).concat(uri) : "".concat(host).concat(uri, "?").concat(queryString);
    return url;
}
var _default = {
    overwrite: overwrite,
    underwrite: underwrite,
    portFromHost: portFromHost,
    secureFromHost: secureFromHost,
    hostnameFromHost: hostnameFromHost,
    queryStringFromQuery: queryStringFromQuery,
    urlFromHostURIAndQuery: urlFromHostURIAndQuery
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvaHR0cC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgc2Vjb25kIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgQ09MT05fQ0hBUkFDVEVSLCBBTVBFUlNBTkRfQ0hBUkFDVEVSIH0gZnJvbSBcIi4uL2NoYXJhY3RlcnNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG92ZXJ3cml0ZShoZWFkZXJzLCBuYW1lLCB2YWx1ZSkge1xuICBjb25zdCBsb3dlckNhc2VOYW1lID0gbmFtZS50b0xvd2VyQ2FzZSgpLFxuICAgICAgICBleGlzdGluZ05hbWVzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoaGVhZGVycyksICAvLy9cbiAgICAgICAgZXhpc3RpbmdOYW1lID0gZXhpc3RpbmdOYW1lcy5maW5kKChleGlzdGluZ05hbWUpID0+IHtcbiAgICAgICAgICBjb25zdCBleGlzdGluZ0xvd2VyQ2FzZU5hbWUgPSBleGlzdGluZ05hbWUudG9Mb3dlckNhc2UoKTtcblxuICAgICAgICAgIGlmIChleGlzdGluZ0xvd2VyQ2FzZU5hbWUgPT09IGxvd2VyQ2FzZU5hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSkgfHwgbnVsbDtcblxuICBpZiAoZXhpc3RpbmdOYW1lICE9PSBudWxsKSB7XG4gICAgaGVhZGVyc1tleGlzdGluZ05hbWVdID0gdmFsdWU7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVuZGVyd3JpdGUoaGVhZGVycywgbmFtZSwgdmFsdWUpIHtcbiAgY29uc3QgbG93ZXJDYXNlTmFtZSA9IG5hbWUudG9Mb3dlckNhc2UoKSxcbiAgICAgICAgZXhpc3RpbmdOYW1lcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGhlYWRlcnMpLCAgLy8vXG4gICAgICAgIGV4aXN0aW5nTmFtZSA9IGV4aXN0aW5nTmFtZXMuZmluZCgoZXhpc3RpbmdOYW1lKSA9PiB7XG4gICAgICAgICAgY29uc3QgZXhpc3RpbmdMb3dlckNhc2VOYW1lID0gZXhpc3RpbmdOYW1lLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgICBpZiAoZXhpc3RpbmdMb3dlckNhc2VOYW1lID09PSBsb3dlckNhc2VOYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pIHx8IG51bGw7XG5cbiAgaWYgKGV4aXN0aW5nTmFtZSA9PT0gbnVsbCkge1xuICAgIGhlYWRlcnNbbmFtZV0gPSB2YWx1ZTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcG9ydEZyb21Ib3N0KGhvc3QpIHtcbiAgbGV0IHBvcnQ7XG5cbiAgY29uc3QgbWF0Y2hlcyA9IGhvc3QubWF0Y2goL15odHRwcz86XFwvXFwvKFteXFwvXSspLyksXG4gICAgICAgIHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpLFxuICAgICAgICBpbmRleCA9IHNlY29uZE1hdGNoLmluZGV4T2YoQ09MT05fQ0hBUkFDVEVSKTtcblxuICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgY29uc3Qgc2VjdXJlID0gc2VjdXJlRnJvbUhvc3QoaG9zdCk7XG5cbiAgICBwb3J0ID0gc2VjdXJlID8gNDQzIDogODA7IC8vL1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IHN0YXJ0ID0gaW5kZXggKyAxLFxuICAgICAgICAgIHBvcnRTdHJpbmcgPSBzZWNvbmRNYXRjaC5zdWJzdHJpbmcoc3RhcnQpO1xuXG4gICAgcG9ydCA9IE51bWJlcihwb3J0U3RyaW5nKTtcbiAgfVxuXG4gIHJldHVybiBwb3J0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2VjdXJlRnJvbUhvc3QoaG9zdCkge1xuICBjb25zdCBzZWN1cmUgPSAvXmh0dHBzOlxcL1xcLy8udGVzdChob3N0KTtcblxuICByZXR1cm4gc2VjdXJlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaG9zdG5hbWVGcm9tSG9zdChob3N0KSB7XG4gIGNvbnN0IG1hdGNoZXMgPSBob3N0Lm1hdGNoKC9eaHR0cHM/OlxcL1xcLyhbXjpcXC9dKykvKSxcbiAgICAgICAgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyksXG4gICAgICAgIGhvc3RuYW1lID0gc2Vjb25kTWF0Y2g7IC8vL1xuXG4gIHJldHVybiBob3N0bmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHF1ZXJ5U3RyaW5nRnJvbVF1ZXJ5KHF1ZXJ5KSB7XG4gIGNvbnN0IG5hbWVzID0gT2JqZWN0LmtleXMocXVlcnkpLFxuICAgICAgICBuYW1lc0xlbmd0aCA9IG5hbWVzLmxlbmd0aCxcbiAgICAgICAgbGFzdEluZGV4ID0gbmFtZXNMZW5ndGggLSAxLFxuICAgICAgICBxdWVyeVN0cmluZyA9IG5hbWVzLnJlZHVjZSgocXVlcnlTdHJpbmcsIG5hbWUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgY29uc3QgdmFsdWUgPSBxdWVyeVtuYW1lXSxcbiAgICAgICAgICAgICAgICBlbmNvZGVkTmFtZSA9IGVuY29kZVVSSUNvbXBvbmVudChuYW1lKSxcbiAgICAgICAgICAgICAgICBlbmNvZGVkVmFsdWUgPSBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpLFxuICAgICAgICAgICAgICAgIGFtcGVyc2FuZE9yTm90aGluZyA9IChpbmRleCAhPT0gbGFzdEluZGV4KSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBTVBFUlNBTkRfQ0hBUkFDVEVSIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRU1QVFlfU1RSSU5HO1xuICBcbiAgICAgICAgICBxdWVyeVN0cmluZyArPSBgJHtlbmNvZGVkTmFtZX09JHtlbmNvZGVkVmFsdWV9JHthbXBlcnNhbmRPck5vdGhpbmd9YDtcbiAgXG4gICAgICAgICAgcmV0dXJuIHF1ZXJ5U3RyaW5nO1xuICAgICAgICB9LCBFTVBUWV9TVFJJTkcpO1xuXG4gIHJldHVybiBxdWVyeVN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVybEZyb21Ib3N0VVJJQW5kUXVlcnkoaG9zdCwgdXJpLCBxdWVyeSkge1xuICBjb25zdCBxdWVyeVN0cmluZyA9IHF1ZXJ5U3RyaW5nRnJvbVF1ZXJ5KHF1ZXJ5KSxcbiAgICAgICAgdXJsID0gKHF1ZXJ5U3RyaW5nID09PSBFTVBUWV9TVFJJTkcpID9cbiAgICAgICAgICAgICAgICBgJHtob3N0fSR7dXJpfWAgOlxuICAgICAgICAgICAgICAgICAgYCR7aG9zdH0ke3VyaX0/JHtxdWVyeVN0cmluZ31gO1xuXG4gIHJldHVybiB1cmw7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgb3ZlcndyaXRlLFxuICB1bmRlcndyaXRlLFxuICBwb3J0RnJvbUhvc3QsXG4gIHNlY3VyZUZyb21Ib3N0LFxuICBob3N0bmFtZUZyb21Ib3N0LFxuICBxdWVyeVN0cmluZ0Zyb21RdWVyeSxcbiAgdXJsRnJvbUhvc3RVUklBbmRRdWVyeVxufTtcbiJdLCJuYW1lcyI6WyJob3N0bmFtZUZyb21Ib3N0Iiwib3ZlcndyaXRlIiwicG9ydEZyb21Ib3N0IiwicXVlcnlTdHJpbmdGcm9tUXVlcnkiLCJzZWN1cmVGcm9tSG9zdCIsInVuZGVyd3JpdGUiLCJ1cmxGcm9tSG9zdFVSSUFuZFF1ZXJ5IiwiaGVhZGVycyIsIm5hbWUiLCJ2YWx1ZSIsImxvd2VyQ2FzZU5hbWUiLCJ0b0xvd2VyQ2FzZSIsImV4aXN0aW5nTmFtZXMiLCJPYmplY3QiLCJnZXRPd25Qcm9wZXJ0eU5hbWVzIiwiZXhpc3RpbmdOYW1lIiwiZmluZCIsImV4aXN0aW5nTG93ZXJDYXNlTmFtZSIsImhvc3QiLCJwb3J0IiwibWF0Y2hlcyIsIm1hdGNoIiwic2Vjb25kTWF0Y2giLCJzZWNvbmQiLCJpbmRleCIsImluZGV4T2YiLCJDT0xPTl9DSEFSQUNURVIiLCJzZWN1cmUiLCJzdGFydCIsInBvcnRTdHJpbmciLCJzdWJzdHJpbmciLCJOdW1iZXIiLCJ0ZXN0IiwiaG9zdG5hbWUiLCJxdWVyeSIsIm5hbWVzIiwia2V5cyIsIm5hbWVzTGVuZ3RoIiwibGVuZ3RoIiwibGFzdEluZGV4IiwicXVlcnlTdHJpbmciLCJyZWR1Y2UiLCJlbmNvZGVkTmFtZSIsImVuY29kZVVSSUNvbXBvbmVudCIsImVuY29kZWRWYWx1ZSIsImFtcGVyc2FuZE9yTm90aGluZyIsIkFNUEVSU0FORF9DSEFSQUNURVIiLCJFTVBUWV9TVFJJTkciLCJ1cmkiLCJ1cmwiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQXNHQSxPQVFFO2VBUkY7O0lBckNnQkEsZ0JBQWdCO2VBQWhCQTs7SUEzREFDLFNBQVM7ZUFBVEE7O0lBZ0NBQyxZQUFZO2VBQVpBOztJQW1DQUMsb0JBQW9CO2VBQXBCQTs7SUFkQUMsY0FBYztlQUFkQTs7SUFyQ0FDLFVBQVU7ZUFBVkE7O0lBdUVBQyxzQkFBc0I7ZUFBdEJBOzs7cUJBM0ZPO3lCQUNNOzBCQUN3QjtBQUU5QyxTQUFTTCxVQUFVTSxPQUFPLEVBQUVDLElBQUksRUFBRUMsS0FBSztJQUM1QyxJQUFNQyxnQkFBZ0JGLEtBQUtHLFdBQVcsSUFDaENDLGdCQUFnQkMsT0FBT0MsbUJBQW1CLENBQUNQLFVBQzNDUSxlQUFlSCxjQUFjSSxJQUFJLENBQUMsU0FBQ0Q7UUFDakMsSUFBTUUsd0JBQXdCRixhQUFhSixXQUFXO1FBRXRELElBQUlNLDBCQUEwQlAsZUFBZTtZQUMzQyxPQUFPO1FBQ1Q7SUFDRixNQUFNO0lBRVosSUFBSUssaUJBQWlCLE1BQU07UUFDekJSLE9BQU8sQ0FBQ1EsYUFBYSxHQUFHTjtJQUMxQjtBQUNGO0FBRU8sU0FBU0osV0FBV0UsT0FBTyxFQUFFQyxJQUFJLEVBQUVDLEtBQUs7SUFDN0MsSUFBTUMsZ0JBQWdCRixLQUFLRyxXQUFXLElBQ2hDQyxnQkFBZ0JDLE9BQU9DLG1CQUFtQixDQUFDUCxVQUMzQ1EsZUFBZUgsY0FBY0ksSUFBSSxDQUFDLFNBQUNEO1FBQ2pDLElBQU1FLHdCQUF3QkYsYUFBYUosV0FBVztRQUV0RCxJQUFJTSwwQkFBMEJQLGVBQWU7WUFDM0MsT0FBTztRQUNUO0lBQ0YsTUFBTTtJQUVaLElBQUlLLGlCQUFpQixNQUFNO1FBQ3pCUixPQUFPLENBQUNDLEtBQUssR0FBR0M7SUFDbEI7QUFDRjtBQUVPLFNBQVNQLGFBQWFnQixJQUFJO0lBQy9CLElBQUlDO0lBRUosSUFBTUMsVUFBVUYsS0FBS0csS0FBSyxDQUFDLHlCQUNyQkMsY0FBY0MsSUFBQUEsYUFBTSxFQUFDSCxVQUNyQkksUUFBUUYsWUFBWUcsT0FBTyxDQUFDQywyQkFBZTtJQUVqRCxJQUFJRixVQUFVLENBQUMsR0FBRztRQUNoQixJQUFNRyxTQUFTdkIsZUFBZWM7UUFFOUJDLE9BQU9RLFNBQVMsTUFBTSxJQUFJLEdBQUc7SUFDL0IsT0FBTztRQUNMLElBQU1DLFFBQVFKLFFBQVEsR0FDaEJLLGFBQWFQLFlBQVlRLFNBQVMsQ0FBQ0Y7UUFFekNULE9BQU9ZLE9BQU9GO0lBQ2hCO0lBRUEsT0FBT1Y7QUFDVDtBQUVPLFNBQVNmLGVBQWVjLElBQUk7SUFDakMsSUFBTVMsU0FBUyxjQUFjSyxJQUFJLENBQUNkO0lBRWxDLE9BQU9TO0FBQ1Q7QUFFTyxTQUFTM0IsaUJBQWlCa0IsSUFBSTtJQUNuQyxJQUFNRSxVQUFVRixLQUFLRyxLQUFLLENBQUMsMEJBQ3JCQyxjQUFjQyxJQUFBQSxhQUFNLEVBQUNILFVBQ3JCYSxXQUFXWCxhQUFhLEdBQUc7SUFFakMsT0FBT1c7QUFDVDtBQUVPLFNBQVM5QixxQkFBcUIrQixLQUFLO0lBQ3hDLElBQU1DLFFBQVF0QixPQUFPdUIsSUFBSSxDQUFDRixRQUNwQkcsY0FBY0YsTUFBTUcsTUFBTSxFQUMxQkMsWUFBWUYsY0FBYyxHQUMxQkcsY0FBY0wsTUFBTU0sTUFBTSxDQUFDLFNBQUNELGFBQWFoQyxNQUFNZ0I7UUFDN0MsSUFBTWYsUUFBUXlCLEtBQUssQ0FBQzFCLEtBQUssRUFDbkJrQyxjQUFjQyxtQkFBbUJuQyxPQUNqQ29DLGVBQWVELG1CQUFtQmxDLFFBQ2xDb0MscUJBQXFCLEFBQUNyQixVQUFVZSxZQUNUTywrQkFBbUIsR0FDakJDLHVCQUFZO1FBRTNDUCxlQUFlLEFBQUMsR0FBaUJJLE9BQWZGLGFBQVksS0FBa0JHLE9BQWZELGNBQWtDLE9BQW5CQztRQUVoRCxPQUFPTDtJQUNULEdBQUdPLHVCQUFZO0lBRXJCLE9BQU9QO0FBQ1Q7QUFFTyxTQUFTbEMsdUJBQXVCWSxJQUFJLEVBQUU4QixHQUFHLEVBQUVkLEtBQUs7SUFDckQsSUFBTU0sY0FBY3JDLHFCQUFxQitCLFFBQ25DZSxNQUFNLEFBQUNULGdCQUFnQk8sdUJBQVksR0FDM0IsQUFBQyxHQUFTQyxPQUFQOUIsTUFBVyxPQUFKOEIsT0FDUixBQUFDLEdBQVNBLE9BQVA5QixNQUFjc0IsT0FBUFEsS0FBSSxLQUFlLE9BQVpSO0lBRWpDLE9BQU9TO0FBQ1Q7SUFFQSxXQUFlO0lBQ2JoRCxXQUFBQTtJQUNBSSxZQUFBQTtJQUNBSCxjQUFBQTtJQUNBRSxnQkFBQUE7SUFDQUosa0JBQUFBO0lBQ0FHLHNCQUFBQTtJQUNBRyx3QkFBQUE7QUFDRiJ9
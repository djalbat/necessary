"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.overwrite = overwrite;
exports.underwrite = underwrite;
exports.portFromHost = portFromHost;
exports.secureFromHost = secureFromHost;
exports.hostnameFromHost = hostnameFromHost;
exports.queryStringFromQuery = queryStringFromQuery;
exports.urlFromHostURIAndQuery = urlFromHostURIAndQuery;
exports.default = void 0;
var _array = require("../utilities/array");
var _constants = require("../constants");
var _characters = require("../characters");
function overwrite(headers, name, value) {
    var ownPropertyNames = Object.getOwnPropertyNames(headers), lowerCaseName = name.toLowerCase(), overwritten = ownPropertyNames.some(function(ownPropertyName) {
        var lowerCaseOwnPropertyName = ownPropertyName.toLowerCase();
        if (lowerCaseOwnPropertyName === lowerCaseName) {
            headers[ownPropertyName] = value;
            return true;
        }
    });
    if (!overwritten) {
        headers[name] = value;
    }
}
function underwrite(headers, name, value) {
    var ownPropertyNames = Object.getOwnPropertyNames(headers), lowercaseName = name.toLowerCase(), lowerCaseOwnPropertyNames = ownPropertyNames.map(function(ownPropertyName) {
        var lowerCaseOwnPropertyName = ownPropertyName.toLowerCase();
        return lowerCaseOwnPropertyName;
    }), lowerCaseOwnPropertyNamesIncludesLowercaseName = lowerCaseOwnPropertyNames.includes(lowercaseName);
    if (!lowerCaseOwnPropertyNamesIncludesLowercaseName) {
        headers[name] = value;
    }
}
function portFromHost(host) {
    var port;
    var matches = host.match(/^https?:\/\/([^\/]+)/), secondMatch = (0, _array).second(matches), index = secondMatch.indexOf(_characters.COLON_CHARACTER);
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
    var matches = host.match(/^https?:\/\/([^:\/]+)/), secondMatch = (0, _array).second(matches), hostname = secondMatch; ///
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
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvaHR0cC5qcyJdLCJuYW1lcyI6WyJzZWNvbmQiLCJFTVBUWV9TVFJJTkciLCJDT0xPTl9DSEFSQUNURVIiLCJBTVBFUlNBTkRfQ0hBUkFDVEVSIiwib3ZlcndyaXRlIiwiaGVhZGVycyIsIm5hbWUiLCJ2YWx1ZSIsIm93blByb3BlcnR5TmFtZXMiLCJPYmplY3QiLCJnZXRPd25Qcm9wZXJ0eU5hbWVzIiwibG93ZXJDYXNlTmFtZSIsInRvTG93ZXJDYXNlIiwib3ZlcndyaXR0ZW4iLCJzb21lIiwib3duUHJvcGVydHlOYW1lIiwibG93ZXJDYXNlT3duUHJvcGVydHlOYW1lIiwidW5kZXJ3cml0ZSIsImxvd2VyY2FzZU5hbWUiLCJsb3dlckNhc2VPd25Qcm9wZXJ0eU5hbWVzIiwibWFwIiwibG93ZXJDYXNlT3duUHJvcGVydHlOYW1lc0luY2x1ZGVzTG93ZXJjYXNlTmFtZSIsImluY2x1ZGVzIiwicG9ydEZyb21Ib3N0IiwiaG9zdCIsInBvcnQiLCJtYXRjaGVzIiwibWF0Y2giLCJzZWNvbmRNYXRjaCIsImluZGV4IiwiaW5kZXhPZiIsInNlY3VyZSIsInNlY3VyZUZyb21Ib3N0Iiwic3RhcnQiLCJwb3J0U3RyaW5nIiwic3Vic3RyaW5nIiwiTnVtYmVyIiwidGVzdCIsImhvc3RuYW1lRnJvbUhvc3QiLCJob3N0bmFtZSIsInF1ZXJ5U3RyaW5nRnJvbVF1ZXJ5IiwicXVlcnkiLCJuYW1lcyIsImtleXMiLCJuYW1lc0xlbmd0aCIsImxlbmd0aCIsImxhc3RJbmRleCIsInF1ZXJ5U3RyaW5nIiwicmVkdWNlIiwiZW5jb2RlZE5hbWUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJlbmNvZGVkVmFsdWUiLCJhbXBlcnNhbmRPck5vdGhpbmciLCJ1cmxGcm9tSG9zdFVSSUFuZFF1ZXJ5IiwidXJpIiwidXJsIl0sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7O1FBTUksU0FBUyxHQUFULFNBQVM7UUFrQlQsVUFBVSxHQUFWLFVBQVU7UUFl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
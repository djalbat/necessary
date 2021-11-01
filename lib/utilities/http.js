"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.overwrite = overwrite;
exports.underwrite = underwrite;
exports.portFromHost = portFromHost;
exports.secureFromHost = secureFromHost;
exports.hostnameFromHost = hostnameFromHost;
exports.queryStringFromParameters = queryStringFromParameters;
exports.urlFromHostURIAndParameters = urlFromHostURIAndParameters;
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
function queryStringFromParameters(parameters) {
    var names = Object.keys(parameters), namesLength = names.length, lastIndex = namesLength - 1, queryString = names.reduce(function(queryString, name, index) {
        var value = parameters[name], encodedName = encodeURIComponent(name), encodedValue = encodeURIComponent(value), ampersandOrNothing = index !== lastIndex ? _characters.AMPERSAND_CHARACTER : _constants.EMPTY_STRING;
        queryString += "".concat(encodedName, "=").concat(encodedValue).concat(ampersandOrNothing);
        return queryString;
    }, _constants.EMPTY_STRING);
    return queryString;
}
function urlFromHostURIAndParameters(host, uri, parameters) {
    var queryString = queryStringFromParameters(parameters), url = queryString === _constants.EMPTY_STRING ? "".concat(host).concat(uri) : "".concat(host).concat(uri, "?").concat(queryString);
    return url;
}
var _default = {
    overwrite: overwrite,
    underwrite: underwrite,
    portFromHost: portFromHost,
    secureFromHost: secureFromHost,
    hostnameFromHost: hostnameFromHost,
    queryStringFromParameters: queryStringFromParameters,
    urlFromHostURIAndParameters: urlFromHostURIAndParameters
};
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvaHR0cC5qcyJdLCJuYW1lcyI6WyJzZWNvbmQiLCJFTVBUWV9TVFJJTkciLCJDT0xPTl9DSEFSQUNURVIiLCJBTVBFUlNBTkRfQ0hBUkFDVEVSIiwib3ZlcndyaXRlIiwiaGVhZGVycyIsIm5hbWUiLCJ2YWx1ZSIsIm93blByb3BlcnR5TmFtZXMiLCJPYmplY3QiLCJnZXRPd25Qcm9wZXJ0eU5hbWVzIiwibG93ZXJDYXNlTmFtZSIsInRvTG93ZXJDYXNlIiwib3ZlcndyaXR0ZW4iLCJzb21lIiwib3duUHJvcGVydHlOYW1lIiwibG93ZXJDYXNlT3duUHJvcGVydHlOYW1lIiwidW5kZXJ3cml0ZSIsImxvd2VyY2FzZU5hbWUiLCJsb3dlckNhc2VPd25Qcm9wZXJ0eU5hbWVzIiwibWFwIiwibG93ZXJDYXNlT3duUHJvcGVydHlOYW1lc0luY2x1ZGVzTG93ZXJjYXNlTmFtZSIsImluY2x1ZGVzIiwicG9ydEZyb21Ib3N0IiwiaG9zdCIsInBvcnQiLCJtYXRjaGVzIiwibWF0Y2giLCJzZWNvbmRNYXRjaCIsImluZGV4IiwiaW5kZXhPZiIsInNlY3VyZSIsInNlY3VyZUZyb21Ib3N0Iiwic3RhcnQiLCJwb3J0U3RyaW5nIiwic3Vic3RyaW5nIiwiTnVtYmVyIiwidGVzdCIsImhvc3RuYW1lRnJvbUhvc3QiLCJob3N0bmFtZSIsInF1ZXJ5U3RyaW5nRnJvbVBhcmFtZXRlcnMiLCJwYXJhbWV0ZXJzIiwibmFtZXMiLCJrZXlzIiwibmFtZXNMZW5ndGgiLCJsZW5ndGgiLCJsYXN0SW5kZXgiLCJxdWVyeVN0cmluZyIsInJlZHVjZSIsImVuY29kZWROYW1lIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiZW5jb2RlZFZhbHVlIiwiYW1wZXJzYW5kT3JOb3RoaW5nIiwidXJsRnJvbUhvc3RVUklBbmRQYXJhbWV0ZXJzIiwidXJpIiwidXJsIl0sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7O1FBTUksU0FBUyxHQUFULFNBQVM7UUFrQlQsVUFB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
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.overwrite = overwrite;
exports.underwrite = underwrite;
exports.queryStringFromParameters = queryStringFromParameters;
exports.default = void 0;
var _constants = require("../constants");
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
function queryStringFromParameters(parameters) {
    var names = Object.keys(parameters), namesLength = names.length, lastIndex = namesLength - 1, queryString = names.reduce(function(queryString1, name, index) {
        var value = parameters[name], encodedName = encodeURIComponent(name), encodedValue = encodeURIComponent(value), ampersandOrNothing = index !== lastIndex ? _constants.AMPERSAND_CHARACTER : _constants.EMPTY_STRING;
        queryString1 += "".concat(encodedName, "=").concat(encodedValue).concat(ampersandOrNothing);
        return queryString1;
    }, "");
    return queryString;
}
var _default = {
    overwrite: overwrite,
    underwrite: underwrite,
    queryStringFromParameters: queryStringFromParameters
};
exports.default = _default;

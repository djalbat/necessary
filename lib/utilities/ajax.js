"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.get = get;
exports.post = post;
exports.request = request;
exports.default = void 0;
var _constants = require("../constants");
"use strict";
function get(host, uri, parameters, headers, callback) {
    if (callback === undefined) {
        callback = headers; ///
        headers = {
        };
    }
    var method = _constants.GET, body = null;
    guaranteeAccept(headers);
    request(host, uri, parameters, method, body, headers, callback);
}
function post(host, uri, parameters, body, headers, callback) {
    if (callback === undefined) {
        callback = headers; ///
        headers = {
        };
    }
    var method = _constants.POST;
    guaranteeAccept(headers);
    guaranteeContentType(headers);
    request(host, uri, parameters, method, body, headers, callback);
}
function request(host, uri, parameters, method, body, headers, callback) {
    var url = urlFromHostURIAndParameters(host, uri, parameters), accept = headers[_constants.ACCEPT] || null, contentType = headers[_constants.CONTENT_TYPE] || null, xmlHttpRequest = new XMLHttpRequest();
    if (contentType === _constants.APPLICATION_JSON) {
        var json = body, jsonString = JSON.stringify(json);
        body = jsonString; ///
    }
    xmlHttpRequest.onreadystatechange = function() {
        var readyState = xmlHttpRequest.readyState, status = xmlHttpRequest.status, responseText = xmlHttpRequest.responseText;
        if (readyState == 4) {
            var body1 = responseText;
            if (accept === _constants.APPLICATION_JSON) {
                try {
                    var jsonString = body1, json = JSON.parse(jsonString);
                    body1 = json; ///
                } catch (error) {
                    body1 = null;
                }
                callback(body1, status);
            }
        }
    };
    xmlHttpRequest.open(method, url);
    if (accept !== null) {
        xmlHttpRequest.setRequestHeader(_constants.ACCEPT, accept);
    }
    if (contentType !== null) {
        xmlHttpRequest.setRequestHeader(_constants.CONTENT_TYPE, contentType);
    }
    body !== null ? xmlHttpRequest.send(body) : xmlHttpRequest.send();
}
var _default = {
    get: get,
    post: post,
    request: request
};
exports.default = _default;
function guarantee(headers, name, value) {
    var propertyNames = Object.getOwnPropertyNames(headers), names = propertyNames.map(function(propertyName) {
        var lowerCasePropertyName = propertyName.toLowerCase(), name1 = lowerCasePropertyName; ///
        return name1;
    }), namesIncludesName = names.includes(name);
    if (!namesIncludesName) {
        headers[name] = value;
    }
}
function guaranteeAccept(headers) {
    var name = _constants.ACCEPT, value = _constants.APPLICATION_JSON; ///
    guarantee(headers, name, value);
}
function guaranteeContentType(headers) {
    var name = _constants.CONTENT_TYPE, value = _constants.APPLICATION_JSON; ///
    guarantee(headers, name, value);
}
function queryStringFromParameters(parameters) {
    var names = Object.keys(parameters), namesLength = names.length, lastIndex = namesLength - 1, queryString = names.reduce(function(queryString1, name, index) {
        var value = parameters[name], encodedName = encodeURIComponent(name), encodedValue = encodeURIComponent(value), ampersandOrNothing = index !== lastIndex ? "&" : "";
        queryString1 += "".concat(encodedName, "=").concat(encodedValue).concat(ampersandOrNothing);
        return queryString1;
    }, "");
    return queryString;
}
function urlFromHostURIAndParameters(host, uri, parameters) {
    var queryString = queryStringFromParameters(parameters), url = queryString === "" ? "".concat(host).concat(uri) : "".concat(host).concat(uri, "?").concat(queryString);
    return url;
}

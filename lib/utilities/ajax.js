"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.get = get;
exports.post = post;
exports.request = request;
exports.default = void 0;
var _http = require("../utilities/http");
var _constants = require("../constants");
function get(host, uri, parameters, headers, callback) {
    if (callback === undefined) {
        callback = headers; ///
        headers = {
        };
    }
    var method = _constants.GET, body = null;
    underwriteAccept(headers);
    request(host, uri, parameters, method, body, headers, callback);
}
function post(host, uri, parameters, body, headers, callback) {
    if (callback === undefined) {
        callback = headers; ///
        headers = {
        };
    }
    var method = _constants.POST;
    underwriteAccept(headers);
    underwriteContentType(headers);
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
function underwriteAccept(headers) {
    var name = _constants.ACCEPT, value = _constants.APPLICATION_JSON; ///
    (0, _http).underwrite(headers, name, value);
}
function underwriteContentType(headers) {
    var name = _constants.CONTENT_TYPE, value = _constants.APPLICATION_JSON; ///
    (0, _http).underwrite(headers, name, value);
}
function urlFromHostURIAndParameters(host, uri, parameters) {
    var queryString = (0, _http).queryStringFromParameters(parameters), url = queryString === "" ? "".concat(host).concat(uri) : "".concat(host).concat(uri, "?").concat(queryString);
    return url;
}

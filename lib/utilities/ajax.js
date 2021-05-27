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
    var url = (0, _http).urlFromHostURIAndParameters(host, uri, parameters), accept = headers[_constants.ACCEPT] || null, contentType = headers[_constants.CONTENT_TYPE] || null, xmlHttpRequest = new XMLHttpRequest();
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvYWpheC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgdW5kZXJ3cml0ZSwgdXJsRnJvbUhvc3RVUklBbmRQYXJhbWV0ZXJzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9odHRwXCI7XG5pbXBvcnQgeyBHRVQsIFBPU1QsIEFDQ0VQVCwgQ09OVEVOVF9UWVBFLCBBUFBMSUNBVElPTl9KU09OIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0KGhvc3QsIHVyaSwgcGFyYW1ldGVycywgaGVhZGVycywgY2FsbGJhY2spIHtcbiAgaWYgKGNhbGxiYWNrID09PSB1bmRlZmluZWQpIHtcbiAgICBjYWxsYmFjayA9IGhlYWRlcnM7IC8vL1xuICAgIGhlYWRlcnMgPSB7fTtcbiAgfVxuXG4gIGNvbnN0IG1ldGhvZCA9IEdFVCxcbiAgICAgICAgYm9keSA9IG51bGw7XG5cbiAgdW5kZXJ3cml0ZUFjY2VwdChoZWFkZXJzKTtcblxuICByZXF1ZXN0KGhvc3QsIHVyaSwgcGFyYW1ldGVycywgbWV0aG9kLCBib2R5LCBoZWFkZXJzLCBjYWxsYmFjayk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwb3N0KGhvc3QsIHVyaSwgcGFyYW1ldGVycywgYm9keSwgaGVhZGVycywgY2FsbGJhY2spIHtcbiAgaWYgKGNhbGxiYWNrID09PSB1bmRlZmluZWQpIHtcbiAgICBjYWxsYmFjayA9IGhlYWRlcnM7IC8vL1xuICAgIGhlYWRlcnMgPSB7fTtcbiAgfVxuXG4gIGNvbnN0IG1ldGhvZCA9IFBPU1Q7XG5cbiAgdW5kZXJ3cml0ZUFjY2VwdChoZWFkZXJzKTtcblxuICB1bmRlcndyaXRlQ29udGVudFR5cGUoaGVhZGVycyk7XG5cbiAgcmVxdWVzdChob3N0LCB1cmksIHBhcmFtZXRlcnMsIG1ldGhvZCwgYm9keSwgaGVhZGVycywgY2FsbGJhY2spO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVxdWVzdChob3N0LCB1cmksIHBhcmFtZXRlcnMsIG1ldGhvZCwgYm9keSwgaGVhZGVycywgY2FsbGJhY2spIHtcbiAgY29uc3QgdXJsID0gdXJsRnJvbUhvc3RVUklBbmRQYXJhbWV0ZXJzKGhvc3QsIHVyaSwgcGFyYW1ldGVycyksXG4gICAgICAgIGFjY2VwdCA9IGhlYWRlcnNbQUNDRVBUXSB8fCBudWxsLFxuICAgICAgICBjb250ZW50VHlwZSA9IGhlYWRlcnNbQ09OVEVOVF9UWVBFXSB8fCBudWxsLFxuICAgICAgICB4bWxIdHRwUmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXG4gIGlmIChjb250ZW50VHlwZSA9PT0gQVBQTElDQVRJT05fSlNPTikge1xuICAgIGNvbnN0IGpzb24gPSBib2R5LCAgLy8vXG4gICAgICAgICAganNvblN0cmluZyA9IEpTT04uc3RyaW5naWZ5KGpzb24pO1xuXG4gICAgYm9keSA9IGpzb25TdHJpbmc7ICAvLy9cbiAgfVxuXG4gIHhtbEh0dHBSZXF1ZXN0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9ICgpID0+IHtcbiAgICBjb25zdCB7IHJlYWR5U3RhdGUsIHN0YXR1cywgcmVzcG9uc2VUZXh0IH0gPSB4bWxIdHRwUmVxdWVzdDtcblxuICAgIGlmIChyZWFkeVN0YXRlID09IDQpIHtcbiAgICAgIGxldCBib2R5ID0gcmVzcG9uc2VUZXh0O1xuXG4gICAgICBpZiAoYWNjZXB0ID09PSBBUFBMSUNBVElPTl9KU09OKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3QganNvblN0cmluZyA9IGJvZHksICAvLy9cbiAgICAgICAgICAgICAgICBqc29uID0gSlNPTi5wYXJzZShqc29uU3RyaW5nKTtcblxuICAgICAgICAgIGJvZHkgPSBqc29uOyAgLy8vXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgYm9keSA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBjYWxsYmFjayhib2R5LCBzdGF0dXMpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICB4bWxIdHRwUmVxdWVzdC5vcGVuKG1ldGhvZCwgdXJsKTtcblxuICBpZiAoYWNjZXB0ICE9PSBudWxsKSB7XG4gICAgeG1sSHR0cFJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcihBQ0NFUFQsIGFjY2VwdCk7XG4gIH1cblxuICBpZiAoY29udGVudFR5cGUgIT09IG51bGwpIHtcbiAgICB4bWxIdHRwUmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKENPTlRFTlRfVFlQRSwgY29udGVudFR5cGUpO1xuICB9XG5cbiAgKGJvZHkgIT09IG51bGwpID9cbiAgICB4bWxIdHRwUmVxdWVzdC5zZW5kKGJvZHkpIDpcbiAgICAgIHhtbEh0dHBSZXF1ZXN0LnNlbmQoKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBnZXQsXG4gIHBvc3QsXG4gIHJlcXVlc3Rcbn1cblxuZnVuY3Rpb24gdW5kZXJ3cml0ZUFjY2VwdChoZWFkZXJzKSB7XG4gIGNvbnN0IG5hbWUgPSBBQ0NFUFQsICAvLy9cbiAgICAgICAgdmFsdWUgPSBBUFBMSUNBVElPTl9KU09OOyAvLy9cblxuICB1bmRlcndyaXRlKGhlYWRlcnMsIG5hbWUsIHZhbHVlKTtcbn1cblxuZnVuY3Rpb24gdW5kZXJ3cml0ZUNvbnRlbnRUeXBlKGhlYWRlcnMpIHtcbiAgY29uc3QgbmFtZSA9IENPTlRFTlRfVFlQRSwgIC8vL1xuICAgICAgICB2YWx1ZSA9IEFQUExJQ0FUSU9OX0pTT047IC8vL1xuXG4gIHVuZGVyd3JpdGUoaGVhZGVycywgbmFtZSwgdmFsdWUpO1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7UUFLSSxHQUFHLEdBQUgsR0FBRztRQWNILElBQUksR0FBSixJQUFJO1FBZUosT0FBTyxHQUFQLE9BQU87O0lBaENpQyxLQUFtQjtJQUNULFVBQWM7U0FFaEUsR0FBRyxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxRQUFRO1FBQ3RELFFBQVEsS0FBSyxT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
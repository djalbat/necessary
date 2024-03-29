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
    get: function() {
        return get;
    },
    post: function() {
        return post;
    },
    request: function() {
        return request;
    }
});
var _methods = require("../methods");
var _contentTypes = require("../contentTypes");
var _headers = require("../headers");
var _http = require("../utilities/http");
function get(host, uri, query, headers, callback) {
    if (callback === undefined) {
        callback = headers; ///
        headers = {};
    }
    var method = _methods.GET_METHOD, accept = _contentTypes.APPLICATION_JSON_CONTENT_TYPE, content = null;
    underwriteAcceptHeader(headers, accept);
    request(host, uri, query, method, headers, content, callback);
}
function post(host, uri, query, headers, content, callback) {
    if (callback === undefined) {
        callback = content;
        content = headers;
        headers = {};
    }
    var method = _methods.POST_METHOD, accept = _contentTypes.APPLICATION_JSON_CONTENT_TYPE, contentType = _contentTypes.APPLICATION_JSON_CONTENT_TYPE;
    underwriteAcceptHeader(headers, accept);
    underwriteContentTypeHeader(headers, contentType);
    request(host, uri, query, method, headers, content, callback);
}
function request(host, uri, query, method, headers, content, callback) {
    var url = (0, _http.urlFromHostURIAndQuery)(host, uri, query), accept = headers[_headers.ACCEPT_HEADER] || null, contentType = headers[_headers.CONTENT_TYPE_HEADER] || null, xmlHttpRequest = new XMLHttpRequest();
    if (contentType === _contentTypes.APPLICATION_JSON_CONTENT_TYPE) {
        var json = content, jsonString = JSON.stringify(json);
        content = jsonString; ///
    }
    xmlHttpRequest.onreadystatechange = function() {
        var readyState = xmlHttpRequest.readyState, status = xmlHttpRequest.status, response = xmlHttpRequest.response, statusCode = status;
        if (readyState == 4) {
            var _$content = response;
            if (accept === _contentTypes.APPLICATION_JSON_CONTENT_TYPE) {
                try {
                    var jsonString = _$content, json = JSON.parse(jsonString);
                    _$content = json; ///
                } catch (error) {
                    _$content = null;
                }
            }
            callback(_$content, statusCode);
        }
    };
    xmlHttpRequest.open(method, url);
    if (accept !== null) {
        xmlHttpRequest.setRequestHeader(_headers.ACCEPT_HEADER, accept);
    }
    if (contentType !== null) {
        xmlHttpRequest.setRequestHeader(_headers.CONTENT_TYPE_HEADER, contentType);
    }
    content !== null ? xmlHttpRequest.send(content) : xmlHttpRequest.send();
}
var _default = {
    get: get,
    post: post,
    request: request
};
function underwriteAcceptHeader(headers, accept) {
    var name = _headers.ACCEPT_HEADER, value = accept; ///
    (0, _http.underwrite)(headers, name, value);
}
function underwriteContentTypeHeader(headers, contentTYpe) {
    var name = _headers.CONTENT_TYPE_HEADER, value = contentTYpe; ///
    (0, _http.underwrite)(headers, name, value);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvYWpheC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgR0VUX01FVEhPRCwgUE9TVF9NRVRIT0QgfSBmcm9tIFwiLi4vbWV0aG9kc1wiO1xuaW1wb3J0IHsgQVBQTElDQVRJT05fSlNPTl9DT05URU5UX1RZUEUgfSBmcm9tIFwiLi4vY29udGVudFR5cGVzXCI7XG5pbXBvcnQgeyBBQ0NFUFRfSEVBREVSLCBDT05URU5UX1RZUEVfSEVBREVSIH0gZnJvbSBcIi4uL2hlYWRlcnNcIjtcbmltcG9ydCB7IHVuZGVyd3JpdGUsIHVybEZyb21Ib3N0VVJJQW5kUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2h0dHBcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldChob3N0LCB1cmksIHF1ZXJ5LCBoZWFkZXJzLCBjYWxsYmFjaykge1xuICBpZiAoY2FsbGJhY2sgPT09IHVuZGVmaW5lZCkge1xuICAgIGNhbGxiYWNrID0gaGVhZGVyczsgLy8vXG4gICAgaGVhZGVycyA9IHt9O1xuICB9XG5cbiAgY29uc3QgbWV0aG9kID0gR0VUX01FVEhPRCxcbiAgICAgICAgYWNjZXB0ID0gQVBQTElDQVRJT05fSlNPTl9DT05URU5UX1RZUEUsXG4gICAgICAgIGNvbnRlbnQgPSBudWxsO1xuXG4gIHVuZGVyd3JpdGVBY2NlcHRIZWFkZXIoaGVhZGVycywgYWNjZXB0KTtcblxuICByZXF1ZXN0KGhvc3QsIHVyaSwgcXVlcnksIG1ldGhvZCwgaGVhZGVycywgY29udGVudCwgY2FsbGJhY2spO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcG9zdChob3N0LCB1cmksIHF1ZXJ5LCBoZWFkZXJzLCBjb250ZW50LCBjYWxsYmFjaykge1xuICBpZiAoY2FsbGJhY2sgPT09IHVuZGVmaW5lZCkge1xuICAgIGNhbGxiYWNrID0gY29udGVudDtcbiAgICBjb250ZW50ID0gaGVhZGVycztcbiAgICBoZWFkZXJzID0ge307XG4gIH1cblxuICBjb25zdCBtZXRob2QgPSBQT1NUX01FVEhPRCxcbiAgICAgICAgYWNjZXB0ID0gQVBQTElDQVRJT05fSlNPTl9DT05URU5UX1RZUEUsXG4gICAgICAgIGNvbnRlbnRUeXBlID0gQVBQTElDQVRJT05fSlNPTl9DT05URU5UX1RZUEU7XG5cbiAgdW5kZXJ3cml0ZUFjY2VwdEhlYWRlcihoZWFkZXJzLCBhY2NlcHQpO1xuXG4gIHVuZGVyd3JpdGVDb250ZW50VHlwZUhlYWRlcihoZWFkZXJzLCBjb250ZW50VHlwZSk7XG5cbiAgcmVxdWVzdChob3N0LCB1cmksIHF1ZXJ5LCBtZXRob2QsIGhlYWRlcnMsIGNvbnRlbnQsIGNhbGxiYWNrKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlcXVlc3QoaG9zdCwgdXJpLCBxdWVyeSwgbWV0aG9kLCBoZWFkZXJzLCBjb250ZW50LCBjYWxsYmFjaykge1xuICBjb25zdCB1cmwgPSB1cmxGcm9tSG9zdFVSSUFuZFF1ZXJ5KGhvc3QsIHVyaSwgcXVlcnkpLFxuICAgICAgICBhY2NlcHQgPSBoZWFkZXJzW0FDQ0VQVF9IRUFERVJdIHx8IG51bGwsXG4gICAgICAgIGNvbnRlbnRUeXBlID0gaGVhZGVyc1tDT05URU5UX1RZUEVfSEVBREVSXSB8fCBudWxsLFxuICAgICAgICB4bWxIdHRwUmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXG4gIGlmIChjb250ZW50VHlwZSA9PT0gQVBQTElDQVRJT05fSlNPTl9DT05URU5UX1RZUEUpIHtcbiAgICBjb25zdCBqc29uID0gY29udGVudCwgIC8vL1xuICAgICAgICAgIGpzb25TdHJpbmcgPSBKU09OLnN0cmluZ2lmeShqc29uKTtcblxuICAgIGNvbnRlbnQgPSBqc29uU3RyaW5nOyAgLy8vXG4gIH1cblxuICB4bWxIdHRwUmVxdWVzdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSAoKSA9PiB7XG4gICAgY29uc3QgeyByZWFkeVN0YXRlLCBzdGF0dXMsIHJlc3BvbnNlIH0gPSB4bWxIdHRwUmVxdWVzdCxcbiAgICAgICAgICBzdGF0dXNDb2RlID0gc3RhdHVzO1xuXG4gICAgaWYgKHJlYWR5U3RhdGUgPT0gNCkge1xuICAgICAgbGV0IGNvbnRlbnQgPSByZXNwb25zZTtcblxuICAgICAgaWYgKGFjY2VwdCA9PT0gQVBQTElDQVRJT05fSlNPTl9DT05URU5UX1RZUEUpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCBqc29uU3RyaW5nID0gY29udGVudCwgIC8vL1xuICAgICAgICAgICAgICAgIGpzb24gPSBKU09OLnBhcnNlKGpzb25TdHJpbmcpO1xuXG4gICAgICAgICAgY29udGVudCA9IGpzb247ICAvLy9cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICBjb250ZW50ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjYWxsYmFjayhjb250ZW50LCBzdGF0dXNDb2RlKTtcbiAgICB9XG4gIH07XG5cbiAgeG1sSHR0cFJlcXVlc3Qub3BlbihtZXRob2QsIHVybCk7XG5cbiAgaWYgKGFjY2VwdCAhPT0gbnVsbCkge1xuICAgIHhtbEh0dHBSZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoQUNDRVBUX0hFQURFUiwgYWNjZXB0KTtcbiAgfVxuXG4gIGlmIChjb250ZW50VHlwZSAhPT0gbnVsbCkge1xuICAgIHhtbEh0dHBSZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoQ09OVEVOVF9UWVBFX0hFQURFUiwgY29udGVudFR5cGUpO1xuICB9XG5cbiAgKGNvbnRlbnQgIT09IG51bGwpID9cbiAgICB4bWxIdHRwUmVxdWVzdC5zZW5kKGNvbnRlbnQpIDpcbiAgICAgIHhtbEh0dHBSZXF1ZXN0LnNlbmQoKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBnZXQsXG4gIHBvc3QsXG4gIHJlcXVlc3Rcbn1cblxuZnVuY3Rpb24gdW5kZXJ3cml0ZUFjY2VwdEhlYWRlcihoZWFkZXJzLCBhY2NlcHQpIHtcbiAgY29uc3QgbmFtZSA9IEFDQ0VQVF9IRUFERVIsICAvLy9cbiAgICAgICAgdmFsdWUgPSBhY2NlcHQ7IC8vL1xuXG4gIHVuZGVyd3JpdGUoaGVhZGVycywgbmFtZSwgdmFsdWUpO1xufVxuXG5mdW5jdGlvbiB1bmRlcndyaXRlQ29udGVudFR5cGVIZWFkZXIoaGVhZGVycywgY29udGVudFRZcGUpIHtcbiAgY29uc3QgbmFtZSA9IENPTlRFTlRfVFlQRV9IRUFERVIsICAvLy9cbiAgICAgICAgdmFsdWUgPSBjb250ZW50VFlwZTsgLy8vXG5cbiAgdW5kZXJ3cml0ZShoZWFkZXJzLCBuYW1lLCB2YWx1ZSk7XG59XG4iXSwibmFtZXMiOlsiZ2V0IiwicG9zdCIsInJlcXVlc3QiLCJob3N0IiwidXJpIiwicXVlcnkiLCJoZWFkZXJzIiwiY2FsbGJhY2siLCJ1bmRlZmluZWQiLCJtZXRob2QiLCJHRVRfTUVUSE9EIiwiYWNjZXB0IiwiQVBQTElDQVRJT05fSlNPTl9DT05URU5UX1RZUEUiLCJjb250ZW50IiwidW5kZXJ3cml0ZUFjY2VwdEhlYWRlciIsIlBPU1RfTUVUSE9EIiwiY29udGVudFR5cGUiLCJ1bmRlcndyaXRlQ29udGVudFR5cGVIZWFkZXIiLCJ1cmwiLCJ1cmxGcm9tSG9zdFVSSUFuZFF1ZXJ5IiwiQUNDRVBUX0hFQURFUiIsIkNPTlRFTlRfVFlQRV9IRUFERVIiLCJ4bWxIdHRwUmVxdWVzdCIsIlhNTEh0dHBSZXF1ZXN0IiwianNvbiIsImpzb25TdHJpbmciLCJKU09OIiwic3RyaW5naWZ5Iiwib25yZWFkeXN0YXRlY2hhbmdlIiwicmVhZHlTdGF0ZSIsInN0YXR1cyIsInJlc3BvbnNlIiwic3RhdHVzQ29kZSIsInBhcnNlIiwiZXJyb3IiLCJvcGVuIiwic2V0UmVxdWVzdEhlYWRlciIsInNlbmQiLCJuYW1lIiwidmFsdWUiLCJ1bmRlcndyaXRlIiwiY29udGVudFRZcGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQTBGQSxPQUlDO2VBSkQ7O0lBbkZnQkEsR0FBRztlQUFIQTs7SUFlQUMsSUFBSTtlQUFKQTs7SUFrQkFDLE9BQU87ZUFBUEE7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
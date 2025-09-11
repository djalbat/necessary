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
    get get () {
        return get;
    },
    get post () {
        return post;
    },
    get request () {
        return request;
    }
});
var _constants = require("../constants");
var _methods = require("../methods");
var _contentTypes = require("../contentTypes");
var _headers = require("../headers");
var _http = require("../utilities/http");
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function get(host, uri, query, headers, responseType, callback) {
    if ((typeof headers === "undefined" ? "undefined" : _type_of(headers)) === _constants.FUNCTION) {
        callback = headers; ///
        responseType = null;
        headers = {};
    }
    if ((typeof responseType === "undefined" ? "undefined" : _type_of(responseType)) === _constants.FUNCTION) {
        callback = responseType; ///
        if ((typeof headers === "undefined" ? "undefined" : _type_of(headers)) === _constants.STRING) {
            responseType = headers; ///
            headers = {};
        } else {
            responseType = null;
        }
    }
    var method = _methods.GET_METHOD, accept = _contentTypes.APPLICATION_JSON_CONTENT_TYPE, content = null;
    underwriteAcceptHeader(headers, accept);
    request(host, uri, query, method, content, headers, responseType, callback);
}
function post(host, uri, query, content, headers, responseType, callback) {
    if ((typeof headers === "undefined" ? "undefined" : _type_of(headers)) === _constants.FUNCTION) {
        callback = headers; ///
        responseType = null;
        headers = {};
    }
    if ((typeof responseType === "undefined" ? "undefined" : _type_of(responseType)) === _constants.FUNCTION) {
        callback = responseType; ///
        if ((typeof headers === "undefined" ? "undefined" : _type_of(headers)) === _constants.STRING) {
            responseType = headers; ///
            headers = {};
        } else {
            responseType = null;
        }
    }
    var method = _methods.POST_METHOD, accept = _contentTypes.APPLICATION_JSON_CONTENT_TYPE, contentType = _contentTypes.APPLICATION_JSON_CONTENT_TYPE;
    underwriteAcceptHeader(headers, accept);
    underwriteContentTypeHeader(headers, contentType);
    request(host, uri, query, method, content, headers, responseType, callback);
}
function request(host, uri, query, method, content, headers, responseType, callback) {
    var url = (0, _http.urlFromHostURIAndQuery)(host, uri, query), accept = headers[_headers.ACCEPT_HEADER] || null, contentType = headers[_headers.CONTENT_TYPE_HEADER] || null, xmlHttpRequest = new XMLHttpRequest();
    if (contentType === _contentTypes.APPLICATION_JSON_CONTENT_TYPE) {
        var json = content, jsonString = JSON.stringify(json);
        content = jsonString; ///
    }
    if (responseType !== null) {
        Object.assign(xmlHttpRequest, {
            responseType: responseType
        });
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvYWpheC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgU1RSSU5HLCBGVU5DVElPTiB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IEdFVF9NRVRIT0QsIFBPU1RfTUVUSE9EIH0gZnJvbSBcIi4uL21ldGhvZHNcIjtcbmltcG9ydCB7IEFQUExJQ0FUSU9OX0pTT05fQ09OVEVOVF9UWVBFIH0gZnJvbSBcIi4uL2NvbnRlbnRUeXBlc1wiO1xuaW1wb3J0IHsgQUNDRVBUX0hFQURFUiwgQ09OVEVOVF9UWVBFX0hFQURFUiB9IGZyb20gXCIuLi9oZWFkZXJzXCI7XG5pbXBvcnQgeyB1bmRlcndyaXRlLCB1cmxGcm9tSG9zdFVSSUFuZFF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9odHRwXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXQoaG9zdCwgdXJpLCBxdWVyeSwgaGVhZGVycywgcmVzcG9uc2VUeXBlLCBjYWxsYmFjaykge1xuICBpZiAodHlwZW9mIGhlYWRlcnMgPT09IEZVTkNUSU9OKSB7XG4gICAgY2FsbGJhY2sgPSBoZWFkZXJzOyAvLy9cblxuICAgIHJlc3BvbnNlVHlwZSA9IG51bGw7XG5cbiAgICBoZWFkZXJzID0ge307XG4gIH1cblxuICBpZiAodHlwZW9mIHJlc3BvbnNlVHlwZSA9PT0gRlVOQ1RJT04pIHtcbiAgICBjYWxsYmFjayA9IHJlc3BvbnNlVHlwZTsgIC8vL1xuXG4gICAgaWYgKHR5cGVvZiBoZWFkZXJzID09PSBTVFJJTkcpIHtcbiAgICAgIHJlc3BvbnNlVHlwZSA9IGhlYWRlcnM7IC8vL1xuXG4gICAgICBoZWFkZXJzID0ge307XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3BvbnNlVHlwZSA9IG51bGxcbiAgICB9XG4gIH1cblxuICBjb25zdCBtZXRob2QgPSBHRVRfTUVUSE9ELFxuICAgICAgICBhY2NlcHQgPSBBUFBMSUNBVElPTl9KU09OX0NPTlRFTlRfVFlQRSxcbiAgICAgICAgY29udGVudCA9IG51bGw7XG5cbiAgdW5kZXJ3cml0ZUFjY2VwdEhlYWRlcihoZWFkZXJzLCBhY2NlcHQpO1xuXG4gIHJlcXVlc3QoaG9zdCwgdXJpLCBxdWVyeSwgbWV0aG9kLCBjb250ZW50LCBoZWFkZXJzLCByZXNwb25zZVR5cGUsIGNhbGxiYWNrKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBvc3QoaG9zdCwgdXJpLCBxdWVyeSwgY29udGVudCwgaGVhZGVycywgcmVzcG9uc2VUeXBlLCBjYWxsYmFjaykge1xuICBpZiAodHlwZW9mIGhlYWRlcnMgPT09IEZVTkNUSU9OKSB7XG4gICAgY2FsbGJhY2sgPSBoZWFkZXJzOyAvLy9cblxuICAgIHJlc3BvbnNlVHlwZSA9IG51bGw7XG5cbiAgICBoZWFkZXJzID0ge307XG4gIH1cblxuICBpZiAodHlwZW9mIHJlc3BvbnNlVHlwZSA9PT0gRlVOQ1RJT04pIHtcbiAgICBjYWxsYmFjayA9IHJlc3BvbnNlVHlwZTsgIC8vL1xuXG4gICAgaWYgKHR5cGVvZiBoZWFkZXJzID09PSBTVFJJTkcpIHtcbiAgICAgIHJlc3BvbnNlVHlwZSA9IGhlYWRlcnM7IC8vL1xuXG4gICAgICBoZWFkZXJzID0ge307XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3BvbnNlVHlwZSA9IG51bGxcbiAgICB9XG4gIH1cblxuICBjb25zdCBtZXRob2QgPSBQT1NUX01FVEhPRCxcbiAgICAgICAgYWNjZXB0ID0gQVBQTElDQVRJT05fSlNPTl9DT05URU5UX1RZUEUsXG4gICAgICAgIGNvbnRlbnRUeXBlID0gQVBQTElDQVRJT05fSlNPTl9DT05URU5UX1RZUEU7XG5cbiAgdW5kZXJ3cml0ZUFjY2VwdEhlYWRlcihoZWFkZXJzLCBhY2NlcHQpO1xuXG4gIHVuZGVyd3JpdGVDb250ZW50VHlwZUhlYWRlcihoZWFkZXJzLCBjb250ZW50VHlwZSk7XG5cbiAgcmVxdWVzdChob3N0LCB1cmksIHF1ZXJ5LCBtZXRob2QsIGNvbnRlbnQsIGhlYWRlcnMsIHJlc3BvbnNlVHlwZSwgY2FsbGJhY2spO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVxdWVzdChob3N0LCB1cmksIHF1ZXJ5LCBtZXRob2QsIGNvbnRlbnQsIGhlYWRlcnMsIHJlc3BvbnNlVHlwZSwgY2FsbGJhY2spIHtcbiAgY29uc3QgdXJsID0gdXJsRnJvbUhvc3RVUklBbmRRdWVyeShob3N0LCB1cmksIHF1ZXJ5KSxcbiAgICAgICAgYWNjZXB0ID0gaGVhZGVyc1tBQ0NFUFRfSEVBREVSXSB8fCBudWxsLFxuICAgICAgICBjb250ZW50VHlwZSA9IGhlYWRlcnNbQ09OVEVOVF9UWVBFX0hFQURFUl0gfHwgbnVsbCxcbiAgICAgICAgeG1sSHR0cFJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblxuICBpZiAoY29udGVudFR5cGUgPT09IEFQUExJQ0FUSU9OX0pTT05fQ09OVEVOVF9UWVBFKSB7XG4gICAgY29uc3QganNvbiA9IGNvbnRlbnQsICAvLy9cbiAgICAgICAgICBqc29uU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoanNvbik7XG5cbiAgICBjb250ZW50ID0ganNvblN0cmluZzsgIC8vL1xuICB9XG5cbiAgaWYgKHJlc3BvbnNlVHlwZSAhPT0gbnVsbCkge1xuICAgIE9iamVjdC5hc3NpZ24oeG1sSHR0cFJlcXVlc3QsIHtcbiAgICAgIHJlc3BvbnNlVHlwZVxuICAgIH0pO1xuICB9XG5cbiAgeG1sSHR0cFJlcXVlc3Qub25yZWFkeXN0YXRlY2hhbmdlID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgcmVhZHlTdGF0ZSwgc3RhdHVzLCByZXNwb25zZSB9ID0geG1sSHR0cFJlcXVlc3QsXG4gICAgICAgICAgc3RhdHVzQ29kZSA9IHN0YXR1cztcblxuICAgIGlmIChyZWFkeVN0YXRlID09IDQpIHtcbiAgICAgIGxldCBjb250ZW50ID0gcmVzcG9uc2U7XG5cbiAgICAgIGlmIChhY2NlcHQgPT09IEFQUExJQ0FUSU9OX0pTT05fQ09OVEVOVF9UWVBFKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3QganNvblN0cmluZyA9IGNvbnRlbnQsICAvLy9cbiAgICAgICAgICAgICAgICBqc29uID0gSlNPTi5wYXJzZShqc29uU3RyaW5nKTtcblxuICAgICAgICAgIGNvbnRlbnQgPSBqc29uOyAgLy8vXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgY29udGVudCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY2FsbGJhY2soY29udGVudCwgc3RhdHVzQ29kZSk7XG4gICAgfVxuICB9O1xuXG4gIHhtbEh0dHBSZXF1ZXN0Lm9wZW4obWV0aG9kLCB1cmwpO1xuXG4gIGlmIChhY2NlcHQgIT09IG51bGwpIHtcbiAgICB4bWxIdHRwUmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKEFDQ0VQVF9IRUFERVIsIGFjY2VwdCk7XG4gIH1cblxuICBpZiAoY29udGVudFR5cGUgIT09IG51bGwpIHtcbiAgICB4bWxIdHRwUmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKENPTlRFTlRfVFlQRV9IRUFERVIsIGNvbnRlbnRUeXBlKTtcbiAgfVxuXG4gIChjb250ZW50ICE9PSBudWxsKSA/XG4gICAgeG1sSHR0cFJlcXVlc3Quc2VuZChjb250ZW50KSA6XG4gICAgICB4bWxIdHRwUmVxdWVzdC5zZW5kKCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZ2V0LFxuICBwb3N0LFxuICByZXF1ZXN0XG59XG5cbmZ1bmN0aW9uIHVuZGVyd3JpdGVBY2NlcHRIZWFkZXIoaGVhZGVycywgYWNjZXB0KSB7XG4gIGNvbnN0IG5hbWUgPSBBQ0NFUFRfSEVBREVSLCAgLy8vXG4gICAgICAgIHZhbHVlID0gYWNjZXB0OyAvLy9cblxuICB1bmRlcndyaXRlKGhlYWRlcnMsIG5hbWUsIHZhbHVlKTtcbn1cblxuZnVuY3Rpb24gdW5kZXJ3cml0ZUNvbnRlbnRUeXBlSGVhZGVyKGhlYWRlcnMsIGNvbnRlbnRUWXBlKSB7XG4gIGNvbnN0IG5hbWUgPSBDT05URU5UX1RZUEVfSEVBREVSLCAgLy8vXG4gICAgICAgIHZhbHVlID0gY29udGVudFRZcGU7IC8vL1xuXG4gIHVuZGVyd3JpdGUoaGVhZGVycywgbmFtZSwgdmFsdWUpO1xufVxuIl0sIm5hbWVzIjpbImdldCIsInBvc3QiLCJyZXF1ZXN0IiwiaG9zdCIsInVyaSIsInF1ZXJ5IiwiaGVhZGVycyIsInJlc3BvbnNlVHlwZSIsImNhbGxiYWNrIiwiRlVOQ1RJT04iLCJTVFJJTkciLCJtZXRob2QiLCJHRVRfTUVUSE9EIiwiYWNjZXB0IiwiQVBQTElDQVRJT05fSlNPTl9DT05URU5UX1RZUEUiLCJjb250ZW50IiwidW5kZXJ3cml0ZUFjY2VwdEhlYWRlciIsIlBPU1RfTUVUSE9EIiwiY29udGVudFR5cGUiLCJ1bmRlcndyaXRlQ29udGVudFR5cGVIZWFkZXIiLCJ1cmwiLCJ1cmxGcm9tSG9zdFVSSUFuZFF1ZXJ5IiwiQUNDRVBUX0hFQURFUiIsIkNPTlRFTlRfVFlQRV9IRUFERVIiLCJ4bWxIdHRwUmVxdWVzdCIsIlhNTEh0dHBSZXF1ZXN0IiwianNvbiIsImpzb25TdHJpbmciLCJKU09OIiwic3RyaW5naWZ5IiwiT2JqZWN0IiwiYXNzaWduIiwib25yZWFkeXN0YXRlY2hhbmdlIiwicmVhZHlTdGF0ZSIsInN0YXR1cyIsInJlc3BvbnNlIiwic3RhdHVzQ29kZSIsInBhcnNlIiwiZXJyb3IiLCJvcGVuIiwic2V0UmVxdWVzdEhlYWRlciIsInNlbmQiLCJuYW1lIiwidmFsdWUiLCJ1bmRlcndyaXRlIiwiY29udGVudFRZcGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQThIQTtlQUFBOztRQXRIZ0JBO2VBQUFBOztRQThCQUM7ZUFBQUE7O1FBZ0NBQztlQUFBQTs7O3lCQXBFaUI7dUJBQ087NEJBQ007dUJBQ0s7b0JBQ0E7Ozs7O0FBRTVDLFNBQVNGLElBQUlHLElBQUksRUFBRUMsR0FBRyxFQUFFQyxLQUFLLEVBQUVDLE9BQU8sRUFBRUMsWUFBWSxFQUFFQyxRQUFRO0lBQ25FLElBQUksQ0FBQSxPQUFPRix3Q0FBUCxTQUFPQSxRQUFNLE1BQU1HLG1CQUFRLEVBQUU7UUFDL0JELFdBQVdGLFNBQVMsR0FBRztRQUV2QkMsZUFBZTtRQUVmRCxVQUFVLENBQUM7SUFDYjtJQUVBLElBQUksQ0FBQSxPQUFPQyw2Q0FBUCxTQUFPQSxhQUFXLE1BQU1FLG1CQUFRLEVBQUU7UUFDcENELFdBQVdELGNBQWUsR0FBRztRQUU3QixJQUFJLENBQUEsT0FBT0Qsd0NBQVAsU0FBT0EsUUFBTSxNQUFNSSxpQkFBTSxFQUFFO1lBQzdCSCxlQUFlRCxTQUFTLEdBQUc7WUFFM0JBLFVBQVUsQ0FBQztRQUNiLE9BQU87WUFDTEMsZUFBZTtRQUNqQjtJQUNGO0lBRUEsSUFBTUksU0FBU0MsbUJBQVUsRUFDbkJDLFNBQVNDLDJDQUE2QixFQUN0Q0MsVUFBVTtJQUVoQkMsdUJBQXVCVixTQUFTTztJQUVoQ1gsUUFBUUMsTUFBTUMsS0FBS0MsT0FBT00sUUFBUUksU0FBU1QsU0FBU0MsY0FBY0M7QUFDcEU7QUFFTyxTQUFTUCxLQUFLRSxJQUFJLEVBQUVDLEdBQUcsRUFBRUMsS0FBSyxFQUFFVSxPQUFPLEVBQUVULE9BQU8sRUFBRUMsWUFBWSxFQUFFQyxRQUFRO0lBQzdFLElBQUksQ0FBQSxPQUFPRix3Q0FBUCxTQUFPQSxRQUFNLE1BQU1HLG1CQUFRLEVBQUU7UUFDL0JELFdBQVdGLFNBQVMsR0FBRztRQUV2QkMsZUFBZTtRQUVmRCxVQUFVLENBQUM7SUFDYjtJQUVBLElBQUksQ0FBQSxPQUFPQyw2Q0FBUCxTQUFPQSxhQUFXLE1BQU1FLG1CQUFRLEVBQUU7UUFDcENELFdBQVdELGNBQWUsR0FBRztRQUU3QixJQUFJLENBQUEsT0FBT0Qsd0NBQVAsU0FBT0EsUUFBTSxNQUFNSSxpQkFBTSxFQUFFO1lBQzdCSCxlQUFlRCxTQUFTLEdBQUc7WUFFM0JBLFVBQVUsQ0FBQztRQUNiLE9BQU87WUFDTEMsZUFBZTtRQUNqQjtJQUNGO0lBRUEsSUFBTUksU0FBU00sb0JBQVcsRUFDcEJKLFNBQVNDLDJDQUE2QixFQUN0Q0ksY0FBY0osMkNBQTZCO0lBRWpERSx1QkFBdUJWLFNBQVNPO0lBRWhDTSw0QkFBNEJiLFNBQVNZO0lBRXJDaEIsUUFBUUMsTUFBTUMsS0FBS0MsT0FBT00sUUFBUUksU0FBU1QsU0FBU0MsY0FBY0M7QUFDcEU7QUFFTyxTQUFTTixRQUFRQyxJQUFJLEVBQUVDLEdBQUcsRUFBRUMsS0FBSyxFQUFFTSxNQUFNLEVBQUVJLE9BQU8sRUFBRVQsT0FBTyxFQUFFQyxZQUFZLEVBQUVDLFFBQVE7SUFDeEYsSUFBTVksTUFBTUMsSUFBQUEsNEJBQXNCLEVBQUNsQixNQUFNQyxLQUFLQyxRQUN4Q1EsU0FBU1AsT0FBTyxDQUFDZ0Isc0JBQWEsQ0FBQyxJQUFJLE1BQ25DSixjQUFjWixPQUFPLENBQUNpQiw0QkFBbUIsQ0FBQyxJQUFJLE1BQzlDQyxpQkFBaUIsSUFBSUM7SUFFM0IsSUFBSVAsZ0JBQWdCSiwyQ0FBNkIsRUFBRTtRQUNqRCxJQUFNWSxPQUFPWCxTQUNQWSxhQUFhQyxLQUFLQyxTQUFTLENBQUNIO1FBRWxDWCxVQUFVWSxZQUFhLEdBQUc7SUFDNUI7SUFFQSxJQUFJcEIsaUJBQWlCLE1BQU07UUFDekJ1QixPQUFPQyxNQUFNLENBQUNQLGdCQUFnQjtZQUM1QmpCLGNBQUFBO1FBQ0Y7SUFDRjtJQUVBaUIsZUFBZVEsa0JBQWtCLEdBQUc7UUFDbEMsSUFBUUMsYUFBaUNULGVBQWpDUyxZQUFZQyxTQUFxQlYsZUFBckJVLFFBQVFDLFdBQWFYLGVBQWJXLFVBQ3RCQyxhQUFhRjtRQUVuQixJQUFJRCxjQUFjLEdBQUc7WUFDbkIsSUFBSWxCLFlBQVVvQjtZQUVkLElBQUl0QixXQUFXQywyQ0FBNkIsRUFBRTtnQkFDNUMsSUFBSTtvQkFDRixJQUFNYSxhQUFhWixXQUNiVyxPQUFPRSxLQUFLUyxLQUFLLENBQUNWO29CQUV4QlosWUFBVVcsTUFBTyxHQUFHO2dCQUN0QixFQUFFLE9BQU9ZLE9BQU87b0JBQ2R2QixZQUFVO2dCQUNaO1lBQ0Y7WUFFQVAsU0FBU08sV0FBU3FCO1FBQ3BCO0lBQ0Y7SUFFQVosZUFBZWUsSUFBSSxDQUFDNUIsUUFBUVM7SUFFNUIsSUFBSVAsV0FBVyxNQUFNO1FBQ25CVyxlQUFlZ0IsZ0JBQWdCLENBQUNsQixzQkFBYSxFQUFFVDtJQUNqRDtJQUVBLElBQUlLLGdCQUFnQixNQUFNO1FBQ3hCTSxlQUFlZ0IsZ0JBQWdCLENBQUNqQiw0QkFBbUIsRUFBRUw7SUFDdkQ7SUFFQ0gsWUFBWSxPQUNYUyxlQUFlaUIsSUFBSSxDQUFDMUIsV0FDbEJTLGVBQWVpQixJQUFJO0FBQ3pCO0lBRUEsV0FBZTtJQUNiekMsS0FBQUE7SUFDQUMsTUFBQUE7SUFDQUMsU0FBQUE7QUFDRjtBQUVBLFNBQVNjLHVCQUF1QlYsT0FBTyxFQUFFTyxNQUFNO0lBQzdDLElBQU02QixPQUFPcEIsc0JBQWEsRUFDcEJxQixRQUFROUIsUUFBUSxHQUFHO0lBRXpCK0IsSUFBQUEsZ0JBQVUsRUFBQ3RDLFNBQVNvQyxNQUFNQztBQUM1QjtBQUVBLFNBQVN4Qiw0QkFBNEJiLE9BQU8sRUFBRXVDLFdBQVc7SUFDdkQsSUFBTUgsT0FBT25CLDRCQUFtQixFQUMxQm9CLFFBQVFFLGFBQWEsR0FBRztJQUU5QkQsSUFBQUEsZ0JBQVUsRUFBQ3RDLFNBQVNvQyxNQUFNQztBQUM1QiJ9
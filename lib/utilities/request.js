"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _constants = require("../constants");
var _http = require("../utilities/http");
var http = require("http"), https = require("https");
function get(host, uri, parameters, headers, callback) {
    if (callback === undefined) {
        callback = headers; ///
        headers = {
        };
    }
    var method = _constants.GET, _request = request(host, uri, parameters, method, headers, callback);
    _request.end();
    return _request;
}
function post(host, uri, parameters, headers, callback) {
    if (callback === undefined) {
        callback = headers; ///
        headers = {
        };
    }
    var method = _constants.POST, _request = request(host, uri, parameters, method, headers, callback);
    return _request;
}
function request(host, uri, parameters, method, headers, callback) {
    var port = (0, _http).portFromHost(host), secure = (0, _http).secureFromHost(host), hostname = (0, _http).hostnameFromHost(host), queryString = (0, _http).queryStringFromParameters(parameters), path = queryString === _constants.EMPTY_STRING ? uri : "".concat(uri, "?").concat(queryString), options = {
        hostname: hostname,
        headers: headers,
        method: method,
        port: port,
        path: path
    }, request1 = secure ? https.request : http.request; ///
    var _request = request1(options, function(response) {
        var error = null;
        callback(error, response);
    });
    _request.on(_constants.ERROR, function(error) {
        var response = null;
        callback(error, response);
    });
    return _request;
}
var _default = {
    get: get,
    post: post,
    request: request
};
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcmVxdWVzdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuY29uc3QgaHR0cCA9IHJlcXVpcmUoXCJodHRwXCIpLFxuICAgICAgaHR0cHMgPSByZXF1aXJlKFwiaHR0cHNcIik7XG5cbmltcG9ydCB7IEdFVCwgUE9TVCwgRVJST1IsIEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IHBvcnRGcm9tSG9zdCwgc2VjdXJlRnJvbUhvc3QsIGhvc3RuYW1lRnJvbUhvc3QsIHF1ZXJ5U3RyaW5nRnJvbVBhcmFtZXRlcnMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2h0dHBcIjtcblxuZnVuY3Rpb24gZ2V0KGhvc3QsIHVyaSwgcGFyYW1ldGVycywgaGVhZGVycywgY2FsbGJhY2spIHtcbiAgaWYgKGNhbGxiYWNrID09PSB1bmRlZmluZWQpIHtcbiAgICBjYWxsYmFjayA9IGhlYWRlcnM7IC8vL1xuICAgIGhlYWRlcnMgPSB7fTtcbiAgfVxuXG4gIGNvbnN0IG1ldGhvZCA9IEdFVCxcbiAgICAgICAgX3JlcXVlc3QgPSByZXF1ZXN0KGhvc3QsIHVyaSwgcGFyYW1ldGVycywgbWV0aG9kLCBoZWFkZXJzLCBjYWxsYmFjayk7XG5cbiAgX3JlcXVlc3QuZW5kKCk7XG5cbiAgcmV0dXJuIF9yZXF1ZXN0O1xufVxuXG5mdW5jdGlvbiBwb3N0KGhvc3QsIHVyaSwgcGFyYW1ldGVycywgaGVhZGVycywgY2FsbGJhY2spIHtcbiAgaWYgKGNhbGxiYWNrID09PSB1bmRlZmluZWQpIHtcbiAgICBjYWxsYmFjayA9IGhlYWRlcnM7IC8vL1xuICAgIGhlYWRlcnMgPSB7fTtcbiAgfVxuXG4gIGNvbnN0IG1ldGhvZCA9IFBPU1QsXG4gICAgICAgIF9yZXF1ZXN0ID0gcmVxdWVzdChob3N0LCB1cmksIHBhcmFtZXRlcnMsIG1ldGhvZCwgaGVhZGVycywgY2FsbGJhY2spO1xuXG4gIHJldHVybiBfcmVxdWVzdDtcbn1cblxuZnVuY3Rpb24gcmVxdWVzdChob3N0LCB1cmksIHBhcmFtZXRlcnMsIG1ldGhvZCwgaGVhZGVycywgY2FsbGJhY2spIHtcbiAgY29uc3QgcG9ydCA9IHBvcnRGcm9tSG9zdChob3N0KSxcbiAgICAgICAgc2VjdXJlID0gc2VjdXJlRnJvbUhvc3QoaG9zdCksXG4gICAgICAgIGhvc3RuYW1lID0gaG9zdG5hbWVGcm9tSG9zdChob3N0KSxcbiAgICAgICAgcXVlcnlTdHJpbmcgPSBxdWVyeVN0cmluZ0Zyb21QYXJhbWV0ZXJzKHBhcmFtZXRlcnMpLFxuICAgICAgICBwYXRoID0gKHF1ZXJ5U3RyaW5nID09PSBFTVBUWV9TVFJJTkcpID9cbiAgICAgICAgICAgICAgICAgdXJpIDpcbiAgICAgICAgICAgICAgICAgIGAke3VyaX0/JHtxdWVyeVN0cmluZ31gLFxuICAgICAgICBvcHRpb25zID0ge1xuICAgICAgICAgIGhvc3RuYW1lLFxuICAgICAgICAgIGhlYWRlcnMsXG4gICAgICAgICAgbWV0aG9kLFxuICAgICAgICAgIHBvcnQsXG4gICAgICAgICAgcGF0aFxuICAgICAgICB9LFxuICAgICAgICByZXF1ZXN0ID0gc2VjdXJlID9cbiAgICAgICAgICAgICAgICAgICAgIGh0dHBzLnJlcXVlc3QgOiAvLy9cbiAgICAgICAgICAgICAgICAgICAgICAgaHR0cC5yZXF1ZXN0OyAvLy9cblxuICBjb25zdCBfcmVxdWVzdCA9IHJlcXVlc3Qob3B0aW9ucywgKHJlc3BvbnNlKSA9PiB7XG4gICAgY29uc3QgZXJyb3IgPSBudWxsO1xuXG4gICAgY2FsbGJhY2soZXJyb3IsIHJlc3BvbnNlKTtcbiAgfSk7XG5cbiAgX3JlcXVlc3Qub24oRVJST1IsIChlcnJvcikgPT4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gbnVsbDtcblxuICAgIGNhbGxiYWNrKGVycm9yLCByZXNwb25zZSk7XG4gIH0pO1xuXG4gIHJldHVybiBfcmVxdWVzdDtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBnZXQsXG4gIHBvc3QsXG4gIHJlcXVlc3Rcbn07XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7SUFLbUMsVUFBYztJQUM2QixLQUFtQjtJQUp2RyxJQUFJLEdBQUcsT0FBTyxFQUFDLElBQU0sSUFDckIsS0FBSyxHQUFHLE9BQU8sRUFBQyxLQUFPO1NBS3BCLEdBQUcsQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsUUFBUTtRQUMvQyxRQUFRLEtBQUssU0FBUztRQUN4QixRQUFRLEdBQUcsT0FBTyxDQUFFLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztRQUN2QixPQUFPOzs7UUFHSCxNQUFNLEdBVGlDLFVBQWMsTUFVckQsUUFBUSxHQUFHLE9BQU8sQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLFFBQVE7SUFFekUsUUFBUSxDQUFDLEdBQUc7V0FFTCxRQUFROztTQUdSLElBQUksQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsUUFBUTtRQUNoRCxRQUFRLEtBQUssU0FBUztRQUN4QixRQUFRLEdBQUcsT0FBTyxDQUFFLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztRQUN2QixPQUFPOzs7UUFHSCxNQUFNLEdBdkJpQyxVQUFjLE9Bd0JyRCxRQUFRLEdBQUcsT0FBTyxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsUUFBUTtXQUVsRSxRQUFROztTQUdSLE9BQU8sQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLFFBQVE7UUFDekQsSUFBSSxPQTdCOEUsS0FBbUIsZUE2QmpGLElBQUksR0FDeEIsTUFBTSxPQTlCNEUsS0FBbUIsaUJBOEI3RSxJQUFJLEdBQzVCLFFBQVEsT0EvQjBFLEtBQW1CLG1CQStCekUsSUFBSSxHQUNoQyxXQUFXLE9BaEN1RSxLQUFtQiw0QkFnQzdELFVBQVUsR0FDbEQsSUFBSSxHQUFJLFdBQVcsS0FsQ29CLFVBQWMsZ0JBbUM1QyxHQUFHLE1BQ1EsTUFBVyxDQUFsQixHQUFHLEdBQUMsQ0FBQyxHQUFjLE1BQUEsQ0FBWixXQUFXLEdBQy9CLE9BQU87UUFDTCxRQUFRLEVBQVIsUUFBUTtRQUNSLE9BQU8sRUFBUCxPQUFPO1FBQ1AsTUFBTSxFQUFOLE1BQU07UUFDTixJQUFJLEVBQUosSUFBSTtRQUNKLElBQUksRUFBSixJQUFJO09BRU4sUUFBTyxHQUFHLE1BQU0sR0FDSCxLQUFLLENBQUMsT0FBTyxHQUNYLElBQUksQ0FBQyxPQUFPLENBQUUsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO1FBRWhDLFFBQVEsR0FBRyxRQUFPLENBQUMsT0FBTyxXQUFHLFFBQVE7WUFDbkMsS0FBSyxHQUFHLElBQUk7UUFFbEIsUUFBUSxDQUFDLEtBQUssRUFBRSxRQUFROztJQUcxQixRQUFRLENBQUMsRUFBRSxDQXREa0MsVUFBYyxpQkFzRHZDLEtBQUs7WUFDakIsUUFBUSxHQUFHLElBQUk7UUFFckIsUUFBUSxDQUFDLEtBQUssRUFBRSxRQUFROztXQUduQixRQUFROzs7SUFJZixHQUFHLEVBQUgsR0FBRztJQUNILElBQUksRUFBSixJQUFJO0lBQ0osT0FBTyxFQUFQLE9BQU8ifQ==
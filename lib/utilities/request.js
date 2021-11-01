"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _constants = require("../constants");
var _methods = require("../methods");
var _http = require("../utilities/http");
var http = require("http"), https = require("https");
function get(host, uri, parameters, headers, callback) {
    if (callback === undefined) {
        callback = headers; ///
        headers = {
        };
    }
    var method = _methods.GET_METHOD, _request = request(host, uri, parameters, method, headers, callback);
    _request.end();
    return _request;
}
function post(host, uri, parameters, headers, callback) {
    if (callback === undefined) {
        callback = headers; ///
        headers = {
        };
    }
    var method = _methods.POST_METHOD, _request = request(host, uri, parameters, method, headers, callback);
    return _request;
}
function request(host, uri, parameters, method, headers, callback) {
    var port = (0, _http).portFromHost(host), secure = (0, _http).secureFromHost(host), hostname = (0, _http).hostnameFromHost(host), queryString = (0, _http).queryStringFromParameters(parameters), path = queryString === _constants.EMPTY_STRING ? uri : "".concat(uri, "?").concat(queryString), options = {
        hostname: hostname,
        headers: headers,
        method: method,
        port: port,
        path: path
    }, request = secure ? https.request : http.request; ///
    var _request = request(options, function(response) {
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcmVxdWVzdC5qcyJdLCJuYW1lcyI6WyJodHRwIiwicmVxdWlyZSIsImh0dHBzIiwiRVJST1IiLCJFTVBUWV9TVFJJTkciLCJHRVRfTUVUSE9EIiwiUE9TVF9NRVRIT0QiLCJwb3J0RnJvbUhvc3QiLCJzZWN1cmVGcm9tSG9zdCIsImhvc3RuYW1lRnJvbUhvc3QiLCJxdWVyeVN0cmluZ0Zyb21QYXJhbWV0ZXJzIiwiZ2V0IiwiaG9zdCIsInVyaSIsInBhcmFtZXRlcnMiLCJoZWFkZXJzIiwiY2FsbGJhY2siLCJ1bmRlZmluZWQiLCJtZXRob2QiLCJfcmVxdWVzdCIsInJlcXVlc3QiLCJlbmQiLCJwb3N0IiwicG9ydCIsInNlY3VyZSIsImhvc3RuYW1lIiwicXVlcnlTdHJpbmciLCJwYXRoIiwib3B0aW9ucyIsInJlc3BvbnNlIiwiZXJyb3IiLCJvbiJdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7QUFLd0IsR0FBYyxDQUFkLFVBQWM7QUFDVixHQUFZLENBQVosUUFBWTtBQUNzQyxHQUFtQixDQUFuQixLQUFtQjtBQUw3RyxHQUFLLENBQUMsSUFBSSxHQUFHLE9BQU8sRUFBQyxJQUFNLElBQ3JCLEtBQUssR0FBRyxPQUFPLEVBQUMsS0FBTztTQU1wQixHQUFHLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxDQUFDO0lBQ3RELEVBQUUsRUFBRSxRQUFRLEtBQUssU0FBUyxFQUFFLENBQUM7UUFDM0IsUUFBUSxHQUFHLE9BQU8sQ0FBRSxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7UUFDdkIsT0FBTyxHQUFHLENBQUM7UUFBQSxDQUFDO0lBQ2QsQ0FBQztJQUVELEdBQUssQ0FBQyxNQUFNLEdBVDBCLFFBQVksYUFVNUMsUUFBUSxHQUFHLE9BQU8sQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLFFBQVE7SUFFekUsUUFBUSxDQUFDLEdBQUc7SUFFWixNQUFNLENBQUMsUUFBUTtBQUNqQixDQUFDO1NBRVEsSUFBSSxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsQ0FBQztJQUN2RCxFQUFFLEVBQUUsUUFBUSxLQUFLLFNBQVMsRUFBRSxDQUFDO1FBQzNCLFFBQVEsR0FBRyxPQUFPLENBQUUsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO1FBQ3ZCLE9BQU8sR0FBRyxDQUFDO1FBQUEsQ0FBQztJQUNkLENBQUM7SUFFRCxHQUFLLENBQUMsTUFBTSxHQXZCMEIsUUFBWSxjQXdCNUMsUUFBUSxHQUFHLE9BQU8sQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLFFBQVE7SUFFekUsTUFBTSxDQUFDLFFBQVE7QUFDakIsQ0FBQztTQUVRLE9BQU8sQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxDQUFDO0lBQ2xFLEdBQUssQ0FBQyxJQUFJLE9BN0I4RSxLQUFtQixlQTZCakYsSUFBSSxHQUN4QixNQUFNLE9BOUI0RSxLQUFtQixpQkE4QjdFLElBQUksR0FDNUIsUUFBUSxPQS9CMEUsS0FBbUIsbUJBK0J6RSxJQUFJLEdBQ2hDLFdBQVcsT0FoQ3VFLEtBQW1CLDRCQWdDN0QsVUFBVSxHQUNsRCxJQUFJLEdBQUksV0FBVyxLQW5DUyxVQUFjLGdCQW9DakMsR0FBRyxNQUNRLE1BQVcsQ0FBbEIsR0FBRyxHQUFDLENBQUMsR0FBYyxNQUFBLENBQVosV0FBVyxHQUMvQixPQUFPLEdBQUcsQ0FBQztRQUNULFFBQVEsRUFBUixRQUFRO1FBQ1IsT0FBTyxFQUFQLE9BQU87UUFDUCxNQUFNLEVBQU4sTUFBTTtRQUNOLElBQUksRUFBSixJQUFJO1FBQ0osSUFBSSxFQUFKLElBQUk7SUFDTixDQUFDLEVBQ0QsT0FBTyxHQUFHLE1BQU0sR0FDSixLQUFLLENBQUMsT0FBTyxHQUNYLElBQUksQ0FBQyxPQUFPLENBQUUsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO0lBRXJDLEdBQUssQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQVAsUUFBUSxFQUFLLENBQUM7UUFDL0MsR0FBSyxDQUFDLEtBQUssR0FBRyxJQUFJO1FBRWxCLFFBQVEsQ0FBQyxLQUFLLEVBQUUsUUFBUTtJQUMxQixDQUFDO0lBRUQsUUFBUSxDQUFDLEVBQUUsQ0F2RHVCLFVBQWMsUUF1RDdCLFFBQVEsQ0FBUCxLQUFLLEVBQUssQ0FBQztRQUM3QixHQUFLLENBQUMsUUFBUSxHQUFHLElBQUk7UUFFckIsUUFBUSxDQUFDLEtBQUssRUFBRSxRQUFRO0lBQzFCLENBQUM7SUFFRCxNQUFNLENBQUMsUUFBUTtBQUNqQixDQUFDO2VBRWMsQ0FBQztJQUNkLEdBQUcsRUFBSCxHQUFHO0lBQ0gsSUFBSSxFQUFKLElBQUk7SUFDSixPQUFPLEVBQVAsT0FBTztBQUNULENBQUMifQ==
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _constants = require("../constants");
var _methods = require("../methods");
var _http = require("../utilities/http");
var http = require("http"), https = require("https");
function createRequest(host, uri, query, method, headers, callback) {
    var port = (0, _http.portFromHost)(host), secure = (0, _http.secureFromHost)(host), hostname = (0, _http.hostnameFromHost)(host), queryString = (0, _http.queryStringFromQuery)(query), path = queryString === _constants.EMPTY_STRING ? uri : "".concat(uri, "?").concat(queryString), options = {
        hostname: hostname,
        headers: headers,
        method: method,
        port: port,
        path: path
    }, _$createRequest = secure ? https.request : http.request; ///
    var request = _$createRequest(options, function(response) {
        var error = null;
        callback(error, response);
    });
    request.on(_constants.ERROR, function(error) {
        var response = null;
        callback(error, response);
    });
    return request;
}
function createGetRequest(host, uri, query, headers, callback) {
    if (callback === undefined) {
        callback = headers; ///
        headers = {};
    }
    var method = _methods.GET_METHOD, getRequest = createRequest(host, uri, query, method, headers, callback);
    return getRequest;
}
function createPostRequest(host, uri, query, headers, callback) {
    if (callback === undefined) {
        callback = headers; ///
        headers = {};
    }
    var method = _methods.POST_METHOD, postRequest = createRequest(host, uri, query, method, headers, callback);
    return postRequest;
}
var _default = {
    createRequest: createRequest,
    createGetRequest: createGetRequest,
    createPostRequest: createPostRequest
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcmVxdWVzdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuY29uc3QgaHR0cCA9IHJlcXVpcmUoXCJodHRwXCIpLFxuICAgICAgaHR0cHMgPSByZXF1aXJlKFwiaHR0cHNcIik7XG5cbmltcG9ydCB7IEVSUk9SLCBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBHRVRfTUVUSE9ELCBQT1NUX01FVEhPRCB9IGZyb20gXCIuLi9tZXRob2RzXCI7XG5pbXBvcnQgeyBwb3J0RnJvbUhvc3QsIHNlY3VyZUZyb21Ib3N0LCBob3N0bmFtZUZyb21Ib3N0LCBxdWVyeVN0cmluZ0Zyb21RdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvaHR0cFwiO1xuXG5mdW5jdGlvbiBjcmVhdGVSZXF1ZXN0KGhvc3QsIHVyaSwgcXVlcnksIG1ldGhvZCwgaGVhZGVycywgY2FsbGJhY2spIHtcbiAgY29uc3QgcG9ydCA9IHBvcnRGcm9tSG9zdChob3N0KSxcbiAgICAgICAgc2VjdXJlID0gc2VjdXJlRnJvbUhvc3QoaG9zdCksXG4gICAgICAgIGhvc3RuYW1lID0gaG9zdG5hbWVGcm9tSG9zdChob3N0KSxcbiAgICAgICAgcXVlcnlTdHJpbmcgPSBxdWVyeVN0cmluZ0Zyb21RdWVyeShxdWVyeSksXG4gICAgICAgIHBhdGggPSAocXVlcnlTdHJpbmcgPT09IEVNUFRZX1NUUklORykgP1xuICAgICAgICAgICAgICAgICB1cmkgOlxuICAgICAgICAgICAgICAgICAgYCR7dXJpfT8ke3F1ZXJ5U3RyaW5nfWAsXG4gICAgICAgIG9wdGlvbnMgPSB7XG4gICAgICAgICAgaG9zdG5hbWUsXG4gICAgICAgICAgaGVhZGVycyxcbiAgICAgICAgICBtZXRob2QsXG4gICAgICAgICAgcG9ydCxcbiAgICAgICAgICBwYXRoXG4gICAgICAgIH0sXG4gICAgICAgIGNyZWF0ZVJlcXVlc3QgPSBzZWN1cmUgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICBodHRwcy5yZXF1ZXN0IDogLy8vXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaHR0cC5yZXF1ZXN0OyAvLy9cblxuICBjb25zdCByZXF1ZXN0ID0gY3JlYXRlUmVxdWVzdChvcHRpb25zLCAocmVzcG9uc2UpID0+IHtcbiAgICBjb25zdCBlcnJvciA9IG51bGw7XG5cbiAgICBjYWxsYmFjayhlcnJvciwgcmVzcG9uc2UpO1xuICB9KTtcblxuICByZXF1ZXN0Lm9uKEVSUk9SLCAoZXJyb3IpID0+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IG51bGw7XG5cbiAgICBjYWxsYmFjayhlcnJvciwgcmVzcG9uc2UpO1xuICB9KTtcblxuICByZXR1cm4gcmVxdWVzdDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlR2V0UmVxdWVzdChob3N0LCB1cmksIHF1ZXJ5LCBoZWFkZXJzLCBjYWxsYmFjaykge1xuICBpZiAoY2FsbGJhY2sgPT09IHVuZGVmaW5lZCkge1xuICAgIGNhbGxiYWNrID0gaGVhZGVyczsgLy8vXG4gICAgaGVhZGVycyA9IHt9O1xuICB9XG5cbiAgY29uc3QgbWV0aG9kID0gR0VUX01FVEhPRCxcbiAgICAgICAgZ2V0UmVxdWVzdCA9IGNyZWF0ZVJlcXVlc3QoaG9zdCwgdXJpLCBxdWVyeSwgbWV0aG9kLCBoZWFkZXJzLCBjYWxsYmFjayk7XG5cbiAgcmV0dXJuIGdldFJlcXVlc3Q7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVBvc3RSZXF1ZXN0KGhvc3QsIHVyaSwgcXVlcnksIGhlYWRlcnMsIGNhbGxiYWNrKSB7XG4gIGlmIChjYWxsYmFjayA9PT0gdW5kZWZpbmVkKSB7XG4gICAgY2FsbGJhY2sgPSBoZWFkZXJzOyAvLy9cbiAgICBoZWFkZXJzID0ge307XG4gIH1cblxuICBjb25zdCBtZXRob2QgPSBQT1NUX01FVEhPRCxcbiAgICAgICAgcG9zdFJlcXVlc3QgPSBjcmVhdGVSZXF1ZXN0KGhvc3QsIHVyaSwgcXVlcnksIG1ldGhvZCwgaGVhZGVycywgY2FsbGJhY2spO1xuXG4gIHJldHVybiBwb3N0UmVxdWVzdDtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBjcmVhdGVSZXF1ZXN0LFxuICBjcmVhdGVHZXRSZXF1ZXN0LFxuICBjcmVhdGVQb3N0UmVxdWVzdFxufTtcbiJdLCJuYW1lcyI6WyJodHRwIiwicmVxdWlyZSIsImh0dHBzIiwiY3JlYXRlUmVxdWVzdCIsImhvc3QiLCJ1cmkiLCJxdWVyeSIsIm1ldGhvZCIsImhlYWRlcnMiLCJjYWxsYmFjayIsInBvcnQiLCJwb3J0RnJvbUhvc3QiLCJzZWN1cmUiLCJzZWN1cmVGcm9tSG9zdCIsImhvc3RuYW1lIiwiaG9zdG5hbWVGcm9tSG9zdCIsInF1ZXJ5U3RyaW5nIiwicXVlcnlTdHJpbmdGcm9tUXVlcnkiLCJwYXRoIiwiRU1QVFlfU1RSSU5HIiwib3B0aW9ucyIsInJlcXVlc3QiLCJyZXNwb25zZSIsImVycm9yIiwib24iLCJFUlJPUiIsImNyZWF0ZUdldFJlcXVlc3QiLCJ1bmRlZmluZWQiLCJHRVRfTUVUSE9EIiwiZ2V0UmVxdWVzdCIsImNyZWF0ZVBvc3RSZXF1ZXN0IiwiUE9TVF9NRVRIT0QiLCJwb3N0UmVxdWVzdCJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFtRUE7OztlQUFBOzs7eUJBOURvQzt1QkFDSTtvQkFDNkM7QUFMckYsSUFBTUEsT0FBT0MsUUFBUSxTQUNmQyxRQUFRRCxRQUFRO0FBTXRCLFNBQVNFLGNBQWNDLElBQUksRUFBRUMsR0FBRyxFQUFFQyxLQUFLLEVBQUVDLE1BQU0sRUFBRUMsT0FBTyxFQUFFQyxRQUFRO0lBQ2hFLElBQU1DLE9BQU9DLElBQUFBLGtCQUFZLEVBQUNQLE9BQ3BCUSxTQUFTQyxJQUFBQSxvQkFBYyxFQUFDVCxPQUN4QlUsV0FBV0MsSUFBQUEsc0JBQWdCLEVBQUNYLE9BQzVCWSxjQUFjQyxJQUFBQSwwQkFBb0IsRUFBQ1gsUUFDbkNZLE9BQU8sQUFBQ0YsZ0JBQWdCRyx1QkFBWSxHQUMzQmQsTUFDQyxBQUFDLEdBQVNXLE9BQVBYLEtBQUksS0FBZSxPQUFaVyxjQUNwQkksVUFBVTtRQUNSTixVQUFBQTtRQUNBTixTQUFBQTtRQUNBRCxRQUFBQTtRQUNBRyxNQUFBQTtRQUNBUSxNQUFBQTtJQUNGLEdBQ0FmLGtCQUFnQlMsU0FDRVYsTUFBTW1CLE9BQU8sR0FDWHJCLEtBQUtxQixPQUFPLEVBQUUsR0FBRztJQUUzQyxJQUFNQSxVQUFVbEIsZ0JBQWNpQixTQUFTLFNBQUNFO1FBQ3RDLElBQU1DLFFBQVE7UUFFZGQsU0FBU2MsT0FBT0Q7SUFDbEI7SUFFQUQsUUFBUUcsRUFBRSxDQUFDQyxnQkFBSyxFQUFFLFNBQUNGO1FBQ2pCLElBQU1ELFdBQVc7UUFFakJiLFNBQVNjLE9BQU9EO0lBQ2xCO0lBRUEsT0FBT0Q7QUFDVDtBQUVBLFNBQVNLLGlCQUFpQnRCLElBQUksRUFBRUMsR0FBRyxFQUFFQyxLQUFLLEVBQUVFLE9BQU8sRUFBRUMsUUFBUTtJQUMzRCxJQUFJQSxhQUFha0IsV0FBVztRQUMxQmxCLFdBQVdELFNBQVMsR0FBRztRQUN2QkEsVUFBVSxDQUFDO0lBQ2I7SUFFQSxJQUFNRCxTQUFTcUIsbUJBQVUsRUFDbkJDLGFBQWExQixjQUFjQyxNQUFNQyxLQUFLQyxPQUFPQyxRQUFRQyxTQUFTQztJQUVwRSxPQUFPb0I7QUFDVDtBQUVBLFNBQVNDLGtCQUFrQjFCLElBQUksRUFBRUMsR0FBRyxFQUFFQyxLQUFLLEVBQUVFLE9BQU8sRUFBRUMsUUFBUTtJQUM1RCxJQUFJQSxhQUFha0IsV0FBVztRQUMxQmxCLFdBQVdELFNBQVMsR0FBRztRQUN2QkEsVUFBVSxDQUFDO0lBQ2I7SUFFQSxJQUFNRCxTQUFTd0Isb0JBQVcsRUFDcEJDLGNBQWM3QixjQUFjQyxNQUFNQyxLQUFLQyxPQUFPQyxRQUFRQyxTQUFTQztJQUVyRSxPQUFPdUI7QUFDVDtJQUVBLFdBQWU7SUFDYjdCLGVBQUFBO0lBQ0F1QixrQkFBQUE7SUFDQUksbUJBQUFBO0FBQ0YifQ==
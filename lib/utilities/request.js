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
const _constants = require("../constants");
const _methods = require("../methods");
const _http = require("../utilities/http");
const http = require("http"), https = require("https");
function createRequest(host, uri, query, method, headers, callback) {
    const port = (0, _http.portFromHost)(host), secure = (0, _http.secureFromHost)(host), hostname = (0, _http.hostnameFromHost)(host), queryString = (0, _http.queryStringFromQuery)(query), path = queryString === _constants.EMPTY_STRING ? uri : `${uri}?${queryString}`, options = {
        hostname,
        headers,
        method,
        port,
        path
    }, createRequest = secure ? https.request : http.request; ///
    const request = createRequest(options, (response)=>{
        const error = null;
        callback(error, response);
    });
    request.on(_constants.ERROR, (error)=>{
        const response = null;
        callback(error, response);
    });
    return request;
}
function createGetRequest(host, uri, query, headers, callback) {
    if (callback === undefined) {
        callback = headers; ///
        headers = {};
    }
    const method = _methods.GET_METHOD, getRequest = createRequest(host, uri, query, method, headers, callback);
    return getRequest;
}
function createPostRequest(host, uri, query, headers, callback) {
    if (callback === undefined) {
        callback = headers; ///
        headers = {};
    }
    const method = _methods.POST_METHOD, postRequest = createRequest(host, uri, query, method, headers, callback);
    return postRequest;
}
const _default = {
    createRequest,
    createGetRequest,
    createPostRequest
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcmVxdWVzdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuY29uc3QgaHR0cCA9IHJlcXVpcmUoXCJodHRwXCIpLFxuICAgICAgaHR0cHMgPSByZXF1aXJlKFwiaHR0cHNcIik7XG5cbmltcG9ydCB7IEVSUk9SLCBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBHRVRfTUVUSE9ELCBQT1NUX01FVEhPRCB9IGZyb20gXCIuLi9tZXRob2RzXCI7XG5pbXBvcnQgeyBwb3J0RnJvbUhvc3QsIHNlY3VyZUZyb21Ib3N0LCBob3N0bmFtZUZyb21Ib3N0LCBxdWVyeVN0cmluZ0Zyb21RdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvaHR0cFwiO1xuXG5mdW5jdGlvbiBjcmVhdGVSZXF1ZXN0KGhvc3QsIHVyaSwgcXVlcnksIG1ldGhvZCwgaGVhZGVycywgY2FsbGJhY2spIHtcbiAgY29uc3QgcG9ydCA9IHBvcnRGcm9tSG9zdChob3N0KSxcbiAgICAgICAgc2VjdXJlID0gc2VjdXJlRnJvbUhvc3QoaG9zdCksXG4gICAgICAgIGhvc3RuYW1lID0gaG9zdG5hbWVGcm9tSG9zdChob3N0KSxcbiAgICAgICAgcXVlcnlTdHJpbmcgPSBxdWVyeVN0cmluZ0Zyb21RdWVyeShxdWVyeSksXG4gICAgICAgIHBhdGggPSAocXVlcnlTdHJpbmcgPT09IEVNUFRZX1NUUklORykgP1xuICAgICAgICAgICAgICAgICB1cmkgOlxuICAgICAgICAgICAgICAgICAgYCR7dXJpfT8ke3F1ZXJ5U3RyaW5nfWAsXG4gICAgICAgIG9wdGlvbnMgPSB7XG4gICAgICAgICAgaG9zdG5hbWUsXG4gICAgICAgICAgaGVhZGVycyxcbiAgICAgICAgICBtZXRob2QsXG4gICAgICAgICAgcG9ydCxcbiAgICAgICAgICBwYXRoXG4gICAgICAgIH0sXG4gICAgICAgIGNyZWF0ZVJlcXVlc3QgPSBzZWN1cmUgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICBodHRwcy5yZXF1ZXN0IDogLy8vXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaHR0cC5yZXF1ZXN0OyAvLy9cblxuICBjb25zdCByZXF1ZXN0ID0gY3JlYXRlUmVxdWVzdChvcHRpb25zLCAocmVzcG9uc2UpID0+IHtcbiAgICBjb25zdCBlcnJvciA9IG51bGw7XG5cbiAgICBjYWxsYmFjayhlcnJvciwgcmVzcG9uc2UpO1xuICB9KTtcblxuICByZXF1ZXN0Lm9uKEVSUk9SLCAoZXJyb3IpID0+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IG51bGw7XG5cbiAgICBjYWxsYmFjayhlcnJvciwgcmVzcG9uc2UpO1xuICB9KTtcblxuICByZXR1cm4gcmVxdWVzdDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlR2V0UmVxdWVzdChob3N0LCB1cmksIHF1ZXJ5LCBoZWFkZXJzLCBjYWxsYmFjaykge1xuICBpZiAoY2FsbGJhY2sgPT09IHVuZGVmaW5lZCkge1xuICAgIGNhbGxiYWNrID0gaGVhZGVyczsgLy8vXG4gICAgaGVhZGVycyA9IHt9O1xuICB9XG5cbiAgY29uc3QgbWV0aG9kID0gR0VUX01FVEhPRCxcbiAgICAgICAgZ2V0UmVxdWVzdCA9IGNyZWF0ZVJlcXVlc3QoaG9zdCwgdXJpLCBxdWVyeSwgbWV0aG9kLCBoZWFkZXJzLCBjYWxsYmFjayk7XG5cbiAgcmV0dXJuIGdldFJlcXVlc3Q7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVBvc3RSZXF1ZXN0KGhvc3QsIHVyaSwgcXVlcnksIGhlYWRlcnMsIGNhbGxiYWNrKSB7XG4gIGlmIChjYWxsYmFjayA9PT0gdW5kZWZpbmVkKSB7XG4gICAgY2FsbGJhY2sgPSBoZWFkZXJzOyAvLy9cbiAgICBoZWFkZXJzID0ge307XG4gIH1cblxuICBjb25zdCBtZXRob2QgPSBQT1NUX01FVEhPRCxcbiAgICAgICAgcG9zdFJlcXVlc3QgPSBjcmVhdGVSZXF1ZXN0KGhvc3QsIHVyaSwgcXVlcnksIG1ldGhvZCwgaGVhZGVycywgY2FsbGJhY2spO1xuXG4gIHJldHVybiBwb3N0UmVxdWVzdDtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBjcmVhdGVSZXF1ZXN0LFxuICBjcmVhdGVHZXRSZXF1ZXN0LFxuICBjcmVhdGVQb3N0UmVxdWVzdFxufTtcbiJdLCJuYW1lcyI6WyJodHRwIiwicmVxdWlyZSIsImh0dHBzIiwiY3JlYXRlUmVxdWVzdCIsImhvc3QiLCJ1cmkiLCJxdWVyeSIsIm1ldGhvZCIsImhlYWRlcnMiLCJjYWxsYmFjayIsInBvcnQiLCJwb3J0RnJvbUhvc3QiLCJzZWN1cmUiLCJzZWN1cmVGcm9tSG9zdCIsImhvc3RuYW1lIiwiaG9zdG5hbWVGcm9tSG9zdCIsInF1ZXJ5U3RyaW5nIiwicXVlcnlTdHJpbmdGcm9tUXVlcnkiLCJwYXRoIiwiRU1QVFlfU1RSSU5HIiwib3B0aW9ucyIsInJlcXVlc3QiLCJyZXNwb25zZSIsImVycm9yIiwib24iLCJFUlJPUiIsImNyZWF0ZUdldFJlcXVlc3QiLCJ1bmRlZmluZWQiLCJHRVRfTUVUSE9EIiwiZ2V0UmVxdWVzdCIsImNyZWF0ZVBvc3RSZXF1ZXN0IiwiUE9TVF9NRVRIT0QiLCJwb3N0UmVxdWVzdCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBbUVBOzs7ZUFBQTs7OzJCQTlEb0M7eUJBQ0k7c0JBQzZDO0FBTHJGLE1BQU1BLE9BQU9DLFFBQVEsU0FDZkMsUUFBUUQsUUFBUTtBQU10QixTQUFTRSxjQUFjQyxJQUFJLEVBQUVDLEdBQUcsRUFBRUMsS0FBSyxFQUFFQyxNQUFNLEVBQUVDLE9BQU8sRUFBRUMsUUFBUTtJQUNoRSxNQUFNQyxPQUFPQyxJQUFBQSxrQkFBWSxFQUFDUCxPQUNwQlEsU0FBU0MsSUFBQUEsb0JBQWMsRUFBQ1QsT0FDeEJVLFdBQVdDLElBQUFBLHNCQUFnQixFQUFDWCxPQUM1QlksY0FBY0MsSUFBQUEsMEJBQW9CLEVBQUNYLFFBQ25DWSxPQUFPLEFBQUNGLGdCQUFnQkcsdUJBQVksR0FDM0JkLE1BQ0MsR0FBR0EsSUFBSSxDQUFDLEVBQUVXLGFBQWEsRUFDakNJLFVBQVU7UUFDUk47UUFDQU47UUFDQUQ7UUFDQUc7UUFDQVE7SUFDRixHQUNBZixnQkFBZ0JTLFNBQ0VWLE1BQU1tQixPQUFPLEdBQ1hyQixLQUFLcUIsT0FBTyxFQUFFLEdBQUc7SUFFM0MsTUFBTUEsVUFBVWxCLGNBQWNpQixTQUFTLENBQUNFO1FBQ3RDLE1BQU1DLFFBQVE7UUFFZGQsU0FBU2MsT0FBT0Q7SUFDbEI7SUFFQUQsUUFBUUcsRUFBRSxDQUFDQyxnQkFBSyxFQUFFLENBQUNGO1FBQ2pCLE1BQU1ELFdBQVc7UUFFakJiLFNBQVNjLE9BQU9EO0lBQ2xCO0lBRUEsT0FBT0Q7QUFDVDtBQUVBLFNBQVNLLGlCQUFpQnRCLElBQUksRUFBRUMsR0FBRyxFQUFFQyxLQUFLLEVBQUVFLE9BQU8sRUFBRUMsUUFBUTtJQUMzRCxJQUFJQSxhQUFha0IsV0FBVztRQUMxQmxCLFdBQVdELFNBQVMsR0FBRztRQUN2QkEsVUFBVSxDQUFDO0lBQ2I7SUFFQSxNQUFNRCxTQUFTcUIsbUJBQVUsRUFDbkJDLGFBQWExQixjQUFjQyxNQUFNQyxLQUFLQyxPQUFPQyxRQUFRQyxTQUFTQztJQUVwRSxPQUFPb0I7QUFDVDtBQUVBLFNBQVNDLGtCQUFrQjFCLElBQUksRUFBRUMsR0FBRyxFQUFFQyxLQUFLLEVBQUVFLE9BQU8sRUFBRUMsUUFBUTtJQUM1RCxJQUFJQSxhQUFha0IsV0FBVztRQUMxQmxCLFdBQVdELFNBQVMsR0FBRztRQUN2QkEsVUFBVSxDQUFDO0lBQ2I7SUFFQSxNQUFNRCxTQUFTd0Isb0JBQVcsRUFDcEJDLGNBQWM3QixjQUFjQyxNQUFNQyxLQUFLQyxPQUFPQyxRQUFRQyxTQUFTQztJQUVyRSxPQUFPdUI7QUFDVDtNQUVBLFdBQWU7SUFDYjdCO0lBQ0F1QjtJQUNBSTtBQUNGIn0=
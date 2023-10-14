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
    migrate: function() {
        return migrate;
    }
});
function migrate(json, migrationMap, latestVersion) {
    var version = json.version;
    while(version !== latestVersion){
        var migrateFunction = migrationMap[version];
        json = migrateFunction(json);
        version = json.version;
    }
    return json;
}
var _default = {
    migrate: migrate
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvdmVyc2lvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG1pZ3JhdGUoanNvbiwgbWlncmF0aW9uTWFwLCBsYXRlc3RWZXJzaW9uKSB7XG4gIGxldCB7IHZlcnNpb24gfSA9IGpzb247XG5cbiAgd2hpbGUgKHZlcnNpb24gIT09IGxhdGVzdFZlcnNpb24pIHtcbiAgICBjb25zdCBtaWdyYXRlRnVuY3Rpb24gPSBtaWdyYXRpb25NYXBbdmVyc2lvbl07XG5cbiAgICBqc29uID0gbWlncmF0ZUZ1bmN0aW9uKGpzb24pO1xuXG4gICAgKHsgdmVyc2lvbiB9ID0ganNvbik7XG4gIH1cblxuICByZXR1cm4ganNvbjtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBtaWdyYXRlXG59O1xuIl0sIm5hbWVzIjpbIm1pZ3JhdGUiLCJqc29uIiwibWlncmF0aW9uTWFwIiwibGF0ZXN0VmVyc2lvbiIsInZlcnNpb24iLCJtaWdyYXRlRnVuY3Rpb24iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQWdCQSxPQUVFO2VBRkY7O0lBZGdCQSxPQUFPO2VBQVBBOzs7QUFBVCxTQUFTQSxRQUFRQyxJQUFJLEVBQUVDLFlBQVksRUFBRUMsYUFBYTtJQUN2RCxJQUFJLEFBQUVDLFVBQVlILEtBQVpHO0lBRU4sTUFBT0EsWUFBWUQsY0FBZTtRQUNoQyxJQUFNRSxrQkFBa0JILFlBQVksQ0FBQ0UsUUFBUTtRQUU3Q0gsT0FBT0ksZ0JBQWdCSjtRQUVwQkcsVUFBWUgsS0FBWkc7SUFDTDtJQUVBLE9BQU9IO0FBQ1Q7SUFFQSxXQUFlO0lBQ2JELFNBQUFBO0FBQ0YifQ==
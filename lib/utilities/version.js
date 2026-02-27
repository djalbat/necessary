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
    get migrate () {
        return migrate;
    }
});
function migrate(json, migrationMap, latestVersion) {
    let { version } = json;
    while(version !== latestVersion){
        const migrateFunction = migrationMap[version];
        json = migrateFunction(json);
        ({ version } = json);
    }
    return json;
}
const _default = {
    migrate
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvdmVyc2lvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG1pZ3JhdGUoanNvbiwgbWlncmF0aW9uTWFwLCBsYXRlc3RWZXJzaW9uKSB7XG4gIGxldCB7IHZlcnNpb24gfSA9IGpzb247XG5cbiAgd2hpbGUgKHZlcnNpb24gIT09IGxhdGVzdFZlcnNpb24pIHtcbiAgICBjb25zdCBtaWdyYXRlRnVuY3Rpb24gPSBtaWdyYXRpb25NYXBbdmVyc2lvbl07XG5cbiAgICBqc29uID0gbWlncmF0ZUZ1bmN0aW9uKGpzb24pO1xuXG4gICAgKHsgdmVyc2lvbiB9ID0ganNvbik7XG4gIH1cblxuICByZXR1cm4ganNvbjtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBtaWdyYXRlXG59O1xuIl0sIm5hbWVzIjpbIm1pZ3JhdGUiLCJqc29uIiwibWlncmF0aW9uTWFwIiwibGF0ZXN0VmVyc2lvbiIsInZlcnNpb24iLCJtaWdyYXRlRnVuY3Rpb24iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQWdCQTtlQUFBOztRQWRnQkE7ZUFBQUE7OztBQUFULFNBQVNBLFFBQVFDLElBQUksRUFBRUMsWUFBWSxFQUFFQyxhQUFhO0lBQ3ZELElBQUksRUFBRUMsT0FBTyxFQUFFLEdBQUdIO0lBRWxCLE1BQU9HLFlBQVlELGNBQWU7UUFDaEMsTUFBTUUsa0JBQWtCSCxZQUFZLENBQUNFLFFBQVE7UUFFN0NILE9BQU9JLGdCQUFnQko7UUFFdEIsQ0FBQSxFQUFFRyxPQUFPLEVBQUUsR0FBR0gsSUFBRztJQUNwQjtJQUVBLE9BQU9BO0FBQ1Q7TUFFQSxXQUFlO0lBQ2JEO0FBQ0YifQ==
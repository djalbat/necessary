"use strict";

export function migrate(json, migrationMap, latestVersion) {
  let { version } = json;

  while (version !== latestVersion) {
    const migrateFunction = migrationMap[version];

    json = migrateFunction(json);

    ({ version } = json);
  }

  return json;
}

export default {
  migrate
};

"use strict";

import { DATA_EVENT, ETX_CHARACTER, UTF8_ENCODING } from "../../constants";

export default function onETX(handler) {
  const event = DATA_EVENT;

  if (process.stdin.setRawMode) {
    const rawMode = true,
          encoding = UTF8_ENCODING;

    process.stdin.setRawMode(rawMode);
    process.stdin.setEncoding(encoding);

    process.stdin.resume();

    process.stdin.addListener(event, dataHandler);

    return offExt;
  }

  function offExt() {
    process.stdin.removeListener(event, dataHandler);
  }

  function dataHandler(character) {
    if (character === ETX_CHARACTER) {
      handler();
    }
  }
}

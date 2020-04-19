'use strict';

const ETX_CHARACTER = '\u0003';

export default function onETX(handler) {
  const { stdin } = process,
        { setRawMode } = stdin;

  if (setRawMode) {
    const rawMode = true,
          encoding = 'utf8';

    stdin.setRawMode(rawMode);
    stdin.setEncoding(encoding);

    stdin.resume();

    stdin.addListener('data', dataHandler);

    return offExt;
  }

  function offExt() {
    stdin.removeListener('data', dataHandler);
  }

  function dataHandler(character) {
    if (character === ETX_CHARACTER) {
      handler();
    }
  }
}

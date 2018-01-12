'use strict';

const ETX_CHARACTER = '\u0003';

function onEXT(handler) {
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

module.exports = {
  onEXT: onEXT
};

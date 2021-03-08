"use strict";

import { whilst } from "../utilities/asynchronous";

import { CTRL_C,
         DATA_EVENT,
         UTF8_ENCODING,
         ETX_CHARACTER,
         DEFAULT_ENCODING,
         DEFAULT_ATTEMPTS,
         BACKSPACE_CHARACTER,
         LINE_FEED_CHARACTER,
         DEFAULT_INITIAL_ANSWER,
         CARRIAGE_RETURN_CHARACTER } from "../constants";

export function onETX(handler) {
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

export function prompt(options, callback) {
  let { answer = null } = options;

  if (answer !== null) {
    callback(answer);

    return;
  }

  const { attempts = DEFAULT_ATTEMPTS } = options,
        context = {
          answer,
          options,
          attempts
        };

  whilst(attempt, () => {
    const { answer } = context;
    
    callback(answer);
  }, context);
}

export default {
  onETX,
  prompt
}

function attempt(next, done, context) {
  let { attempts } = context;

  const terminate = (attempts-- === 0);
  
  if (terminate) {
    done();
    
    return;
  }

  const { options } = context,
        { hidden = false,
          encoding = DEFAULT_ENCODING,
          description,
          errorMessage,
          initialAnswer = DEFAULT_INITIAL_ANSWER,
          validationPattern,
          validationFunction } = options;

  input(initialAnswer, hidden, description, encoding, callback);

  function callback(answer) {
    const valid = validationFunction ?  ///
                    validationFunction(answer) :
                      validationPattern.test(answer);

    if (valid) {
      Object.assign(context, {
        answer
      });

      done();
    } else {
      console.log(errorMessage);

      Object.assign(context, {
        attempts
      });

      next();
    }
  }
}

function input(initialAnswer, hidden, description, encoding, callback) {
  const answer = initialAnswer; ///

  hidden ?
    hiddenInput(answer, description, encoding, callback) :
      visibleInput(answer, description, encoding, callback);
}

function hiddenInput(answer, description, encoding, callback) {
  const event = DATA_EVENT,
        rawMode = true,
        offETX = onETX(() => {
          console.log(CTRL_C);

          process.exit();
        });

  process.stdout.write(description);

  process.stdin.setEncoding(encoding);

  process.stdin.setRawMode(rawMode);

  process.stdin.resume();

  process.stdin.on(event, listener);

  function listener(data) {
    const character = data.toString(encoding);

    switch (character) {
      case LINE_FEED_CHARACTER :
      case CARRIAGE_RETURN_CHARACTER :
        process.stdout.write(LINE_FEED_CHARACTER);

        process.stdin.removeListener(event, listener);

        process.stdin.pause();

        offETX();

        callback(answer);

        break;

      case BACKSPACE_CHARACTER :
        answer = answer.slice(0, answer.length - 1);

        break;

      default:
        answer += character;

        break;
    }
  }
}

function visibleInput(answer, description, encoding, callback) {
  process.stdout.write(description);

  process.stdout.write(answer);

  process.stdin.setEncoding(encoding);

  process.stdin.resume();

  process.stdin.once("data", listener);

  function listener(data) {
    const answer = data; ///

    process.stdin.pause();

    callback(answer);
  }
}

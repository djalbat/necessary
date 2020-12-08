"use strict";

import onETX from "./onETX";

import { whilst } from "../../utilities/asynchronous";

import { CTRL_C, DATA_EVENT, DEFAULT_ATTEMPTS, BACKSPACE_CHARACTER, LINE_FEED_CHARACTER, CARRIAGE_RETURN_CHARACTER } from "../../constants";

export default function prompt(options, callback) {
  const { force } = options;

  if (force) {
    const value = force;  ///

    callback(value);

    return;
  }

  const value = null,
        { attempts = DEFAULT_ATTEMPTS } = options,
        context = {
          value,
          attempts,
          options
        };

  whilst(attempt, () => {
    const { value } = context;
    
    callback(value);
  }, context);
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
          encoding = "utf8",
          description,
          initialValue = "",
          errorMessage,
          validationPattern,
          validationFunction } = options;

  input(description, initialValue, encoding, hidden, callback);

  function callback(value) {
    const valid = validationFunction ?  ///
                    validationFunction(value) :
                      validationPattern.test(value);

    if (valid) {
      Object.assign(context, {
        value: value
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

function input(description, initialValue, encoding, hidden, callback) {
  let value = initialValue; ///

  const event = DATA_EVENT,
        rawMode = true,
        offETX = onETX(() => {
          console.log(CTRL_C);

          process.exit();
        });

  process.stdin.setEncoding(encoding);

  process.stdin.setRawMode(rawMode);

  process.stdout.write(description);

  if (!hidden) {
    process.stdout.write(value);
  }

  process.stdin.resume();

  process.stdin.on(event, listener);

  function listener(chunk) {
    const character = chunk.toString(encoding);

    switch (character) {
      case LINE_FEED_CHARACTER :
      case CARRIAGE_RETURN_CHARACTER :
        process.stdout.write(LINE_FEED_CHARACTER);

        process.stdin.removeListener(event, listener);

        process.stdin.pause();

        offETX();

        callback(value);

        break;

      case BACKSPACE_CHARACTER :
        value = value.slice(0, value.length - 1);

        process.stdout.clearLine();

        process.stdout.cursorTo(0);

        process.stdout.write(description);

        if (!hidden) {
          process.stdout.write(value);
        }

        break;

      default:
        value += character;

        if (!hidden) {
          process.stdout.clearLine();

          process.stdout.cursorTo(0);

          process.stdout.write(description);

          process.stdout.write(value);
        }

        break;
    }
  }
}

'use strict';

import onETX from './onETX';

import { whilst } from '../../utilities/asynchronous';

const { stdin, stdout, exit } = process;

const BACKSPACE_CHARACTER = String.fromCharCode(127),
      LINE_FEED_CHARACTER = '\n',
      CARRIAGE_RETURN_CHARACTER = '\r';

export default function prompt(options, callback) {
  const value = null,
        { attempts = 3 } = options,
        context = {
          value,
          attempts,
          options
        };

  whilst(attempt, function() {
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
          encoding = 'utf8',
          description,
          initialValue = '',
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

  const rawMode = true,
        offETX = onETX(function() {
          console.log('^C');

          exit();
        });

  stdin.setEncoding(encoding);

  stdin.setRawMode(rawMode);

  stdout.write(description);

  if (!hidden) {
    stdout.write(value);
  }

  stdin.resume();

  stdin.on('data', listener);

  function listener(chunk) {
    const character = chunk.toString(encoding);

    switch (character) {
      case LINE_FEED_CHARACTER :
      case CARRIAGE_RETURN_CHARACTER :
        stdout.write(LINE_FEED_CHARACTER);

        stdin.removeListener('data', listener);

        stdin.pause();

        offETX();

        callback(value);
        break;

      case BACKSPACE_CHARACTER :
        value = value.slice(0, value.length - 1);

        stdout.clearLine();

        stdout.cursorTo(0);

        stdout.write(description);

        if (!hidden) {
          stdout.write(value);
        }
        break;

      default:
        value += character;

        if (!hidden) {
          stdout.clearLine();

          stdout.cursorTo(0);

          stdout.write(description);

          stdout.write(value);
        }
        break;
    }
  }
}

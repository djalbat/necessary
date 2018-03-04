'use strict';

const onETX = require('./onETX'),
      asynchronousUtilities = require('../../utilities/asynchronous');

const { stdin, stdout } = process,
      { whilst } = asynchronousUtilities,
      { exit } = process;

const BACKSPACE_CHARACTER = String.fromCharCode(127),
      LINE_FEED_CHARACTER = '\n',
      CARRIAGE_RETURN_CHARACTER = '\r';

function prompt(options, callback) {
  const value = null,
        { attempts = 3 } = options,
        context = {
          value: value,
          attempts: attempts,
          options: options
        };

  whilst(attempt, function() {
    const { value } = context;
    
    callback(value);
  }, context);
}

module.exports = prompt;

function attempt(next, done, context) {
  let { attempts } = context;

  const terminate = (attempts-- === 0);
  
  if (terminate) {
    done();
    
    return;
  }

  const { options } = context,
        { description,
          errorMessage,
          validationPattern,
          validationFunction,
          encoding = 'utf8',
          hidden = false } = options;

  hidden ? 
    hiddenInput(description, encoding, callback) :
      visibleInput(description, encoding, callback);

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
        attempts: attempts
      });

      next();
    }
  }
}

function visibleInput(description, encoding, callback) {
  const rawMode = false;

  stdout.write(description);

  stdin.setEncoding(encoding);

  stdin.setRawMode(rawMode);

  stdin.resume();

  let value;

  const listener = function(chunk) {
    value = chunk.trim();

    stdin.removeListener('data', listener);

    stdin.pause();

    callback(value);
  };

  stdin.on('data', listener);
}

function hiddenInput(description, encoding, callback) {
  const rawMode = true,
        offETX = onETX(function() {
          console.log('^C');

          exit();
        });

  stdout.write(description);

  stdin.setEncoding(encoding);

  stdin.setRawMode(rawMode);

  stdin.resume();

  let value = '';

  const listener = function(chunk) {
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
        value = truncate(value);

        stdout.clearLine();

        stdout.cursorTo(0);

        stdout.write(description);
        break;

      default:
        value += character;
        break;
    }
  };

  stdin.on('data', listener);
}

function truncate(value) { return value.slice(0, value.length - 1); }

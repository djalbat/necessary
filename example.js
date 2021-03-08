#!/usr/bin/env node

const { shellUtilities } = require("./lib/main.js");

const { prompt } = shellUtilities;

const description = "example:",
      errorMessage = "The answer is invalid",
      validationFunction = validateExample,  ///
      options = {
        description,
        errorMessage,
        validationFunction
      };

prompt(options, (answer) => {
  console.log(answer)
});

function validateExample(example) {
  const valid = true;

  return valid;
}

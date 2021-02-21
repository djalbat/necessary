const necessary = require("./lib/main");

const { arrayUtilities } = necessary,
      { first } = arrayUtilities,
      elements = [ 1, 2, 3],
      firstElement = first(elements);

console.log(firstElement)

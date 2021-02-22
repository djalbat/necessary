const { arrayUtilities } = require("./lib/main");

const { first } = arrayUtilities,
      elements = [ 1, 2, 3],
      firstElement = first(elements);

console.log(firstElement)

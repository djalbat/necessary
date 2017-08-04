'use strict';

class async {
  static forEach(array, callback, done) {
    const arrayLength = array.length;
    
    let index = -1;

    const next = function() {
      index++;

      if (index === arrayLength) {
        if (done) {
          done();
        }
      } else {
        const element = array[index];

        callback(element, index, next);
      }
    };

    next();
  }

  static whilst(test, callback, done) {
    const next = function() {
      if (test()) {
        callback(next);
      } else {
        done();
      }
    };

    next();
  }
}

module.exports = async;

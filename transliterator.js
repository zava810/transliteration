const indik2abc = require('./indik2abc')

// Disabling camel case to keep the naming in the original in Python libindic
/* eslint-disable camelcase */

class transliterator {
  // From indik to abc
  transliterate_indik_abc (input) { return indik2abc(input); }
}

module.exports = transliterator

const ml2en = require('./ml2en')
const hi2en = require('./hi2en')
const kn2en = require('./kn2en')
const indik2abc = require('./indik2abc')

// Disabling camel case to keep the naming in the original in Python libindic
/* eslint-disable camelcase */

class Transliterator {
  // From Malayalam to English
  transliterate_ml_en (input) {
    return ml2en(input)
  }

  // From Hindi to English
  transliterate_hi_en (input) {
    return hi2en(input)
  }

  // From Kannada to English
  transliterate_kn_en (input) {
    return kn2en(input)
  }

  // From indik to abc
  transliterate_indik_abc (input) {
    return indik2abc(input)
  }
}

module.exports = Transliterator

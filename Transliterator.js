const ml2en = require('./ml2en');
const hi2en = require('./hi2en');
const kn2en = require('./kn2en');

class Transliterator {
  constructor() {}

  // From Malayalam to English
  transliterate_ml_en(input) {
    return ml2en(input);
  }

  // From Hindi to English
  transliterate_hi_en(input) {
    return hi2en(input);
  }

  // From Kannada to English
  transliterate_kn_en(input) {
    return kn2en(input);
  }
}

module.exports = Transliterator;
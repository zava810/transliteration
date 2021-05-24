const transliterator = require('../transliterator.js')
const assert = require('assert')
// var t = new transliterator()
// t.transliterate_indik_abc('हिन्दी विकिपीडिया')
describe('hindi', function () {
  var t = new transliterator()
  it('letters', function () {
    var cases = { अ: 'A', आ: 'a', क: 'k', प: 'p', म: 'm' }
    for (const k in cases) { assert.equal(t.transliterate_indik_abc(k), cases[k]) }
  })

  it('vords', function () {
    var cases = {
      मां: 'ma',
      पिता: 'piTa',
      कौआ: 'kAua',
      बल्ला: 'blla',
      जंगल: 'zNgl',
      मुखपृष्ठ: 'mukhprishth',
      'हिन्दी विकिपीडिया': 'hinDi vikipidiya'
    }

    for (const k in cases) {
      assert.equal(t.transliterate_indik_abc(k), cases[k])
    }
  })

  it('sentences', function () {
    var cases = {
      'क्रिकेट में, महिला टी 20 विश्व कप का समापन ऑस्ट्रेलिया द्वारा भारत को फाइनल में हराने के साथ हुआ (मैच की सर्वश्रेठ खिलाड़ी एलिसा हेली चित्रित)।':
      'kriket me, mhila tii 20 vishv kp ka smapn astreliya Dvara bharT ko phainl me hrane ke saTh hua (mAec ki srvAshreth khilarri elisa helii ciTirT).',
      'इस खेल का सार है कि एक गेंदबाज अपनी ओर की पिच से बल्लेबाज की तरफ़ गेंद डालता है जो दूसरे अंत पर बल्ला लेकर उसे "स्ट्राइक" करने के लिए तैयार रहता है।':
      'is khel ka sar hAe ki ek genDbaz Apni or ki pic se bllebaz ki tharaph़ gemD daalathaa hai jo Doosare aamth par ballaa lekar use "sTraaik" karane ke lie thaiyaar rahathaa hai.',
      '२००१ एक अच्छा साल था': '2001 ek achchhaa saal Thaa'
    }

    for (const k in cases) {
      assert.equal(t.transliterate_indik_abc(k), cases[k])
    }
  })

  it('numbers', function () {
    var cases = {
      '२': '2',
      '१': '1',
      '३५८೪०९२६७१': '3584092671',
      '१९२१': '1921',
      '२ - १ = १': '2 - 1 = 1'
    }

    for (const k in cases) {
      assert.equal(t.transliterate_indik_abc(k), cases[k])
    }
  })
})

const Transliterator = require('../Transliterator.js');
const assert = require('assert');

describe('Malayalam', function() {
  var t = new Transliterator();

  it('Letters', function() {
    var cases = {
      'ആ': 'aa',
      'ക': 'ka',
      'പ': 'pa',
      'മ': 'ma'
    };

    for (const k in cases) {
      assert.equal(t.transliterate_ml_en(k), cases[k]);
    }
  });

  it('Words', function() {
    var cases = {
      'അമ്മ': 'amma',
      'അപ്പ': 'appa',
      'കാക്ക': 'kaakka',
      'വവ്വാല്‍': 'vavvaal',
      'കാട്ടില്‍': 'kaaTTil',
      'കാറ്റില്‍': 'kaattil'
    };

    for (const k in cases) {
      assert.equal(t.transliterate_ml_en(k), cases[k]);
    }
  });

  it('Sentences', function() {
    var cases = {
      'വ്യാഴത്തിന്റെ കാന്തികക്ഷേത്രം സൗരവാതത്തെ ചെറുക്കുന്ന മേഖലയാണ്‌ വ്യാഴത്തിന്റെ കാന്തമണ്ഡലം.': 'vyaazhatthinte kaanthikakshethram sauravaathatthe cherukkunna mekhalayaanu vyaazhatthinte kaanthamandalam.',
      'ജൂലൈ 2013ൽ ആരംഭിച്ച ക്ലബ്‌, രാജ്യത്തെ തന്നെ പ്രമുഖ ഫുട്ബോൾ ക്ലബ്‌ ആണ്. ഒരു ശക്തമായ കമ്മ്യൂണിറ്റി,': 'jooly 2013l aarambhiccha klabu, raajyatthe thanne pramukha phutbol klabu aanu. oru shakthamaaya kammyoonitti,',
      'Hello Sir': 'Hello Sir',
    };

    for (const k in cases) {
      assert.equal(t.transliterate_ml_en(k), cases[k]);
    }
  });
});

describe('Hindi', function() {
  var t = new Transliterator();

  it('Letters', function() {
    var cases = {
      'अ': 'a',
      'आ': 'aa',
      'क': 'ka',
      'प': 'pa',
      'म': 'ma'
    };

    for (const k in cases) {
      assert.equal(t.transliterate_hi_en(k), cases[k]);
    }
  });

  it('Words', function() {
    var cases = {
      'मां': 'maam',
      'पिता': 'pithaa',
      'कौआ': 'kauaa',
      'बल्ला': 'ballaa',
      'जंगल': 'jamgal',
      'मुखपृष्ठ': 'mukhaprrishthh',
      'हिन्दी विकिपीडिया': 'hinDi vikipidiyaa'
    };

    for (const k in cases) {
      assert.equal(t.transliterate_hi_en(k), cases[k]);
    }
  });

  it('Sentences', function() {
    var cases = {
      'क्रिकेट में, महिला टी 20 विश्व कप का समापन ऑस्ट्रेलिया द्वारा भारत को फाइनल में हराने के साथ हुआ (मैच की सर्वश्रेठ खिलाड़ी एलिसा हेली चित्रित)।': 'krikeT mem, mahilaa Ti 20 vishhv kap kaa samaapan OasTreliyaa Dvaaraa bhaarath ko phaainal mem haraane ke saaTh huaa (maich ki sarvashhrethh khilaad़i elisaa heli chithrith).',
      'इस खेल का सार है कि एक गेंदबाज अपनी ओर की पिच से बल्लेबाज की तरफ़ गेंद डालता है जो दूसरे अंत पर बल्ला लेकर उसे "स्ट्राइक" करने के लिए तैयार रहता है।': 'is khel kaa saar hai ki ek gemDabaaj apani or ki pich se ballebaaj ki tharaph़ gemD daalathaa hai jo Doosare aamth par ballaa lekar use "sTraaik" karane ke lie thaiyaar rahathaa hai.',
      '२००१ एक अच्छा साल था': '2001 ek achchhaa saal Thaa'
    };

    for (const k in cases) {
      assert.equal(t.transliterate_hi_en(k), cases[k]);
    }
  });

  it('Numbers', function() {
    var cases = {
      '२': '2',
      '१': '1',
      '३५८೪०९२६७१': '3584092671',
      '१९२१': '1921',
      '२ - १ = १': '2 - 1 = 1'
    };

    for (const k in cases) {
      assert.equal(t.transliterate_hi_en(k), cases[k]);
    }
  });
});

describe('Kannada', function() {
  var t = new Transliterator();

  it('Letters', function() {
    var cases = {
      'ಅ': 'a',
      'ಆ': 'aa',
      'ಕ': 'ka',
      'ಪ': 'pa',
      'ಮ': 'ma'
    };

    for (const k in cases) {
      assert.equal(t.transliterate_kn_en(k), cases[k]);
    }
  });

  it('Words', function() {
    var cases = {
      'ತಾಯಿ': 'thaayi',
      'ತಂದೆ': 'thamde',
      'ಕಾಗೆ': 'kaage',
      'ಬೆಕ್ಕು': 'bekku',
      'ಅರಣ್ಯ': 'araNya',
      'ಸುದ್ದಿಯಲ್ಲಿ': 'suddiyalli',
      'ಕನ್ನಡ ವಿಕಿಪೀಡಿಯ': 'kannaDa vikipiDiya'
    };

    for (const k in cases) {
      assert.equal(t.transliterate_kn_en(k), cases[k]);
    }
  });

  it('Sentences', function() {
    var cases = {
      'ಕನ್ನಡ ಅಕ್ಷರಮಾಲೆಯು ಬ್ರಾಹ್ಮಿ ಲಿಪಿಯಿಂದ ಬೆಳೆದು ಬಂದಿದೆ. ಇದನ್ನು ಸ್ವರಗಳು, ಅನುಸ್ವಾರ, ವಿಸರ್ಗ, ವ್ಯಂಜನಗಳು, ಅವರ್ಗೀಯ ವ್ಯಂಜನಗಳೆಂದು ವಿಭಾಗಿಸಲಾಗಿದೆ. ಕನ್ನಡ ಅಕ್ಷರಮಾಲೆಯನ್ನು ಕನ್ನಡ ವರ್ಣಮಾಲೆಯೆಂದು ಕರೆಯಲಾಗುತ್ತದೆ.': 'kannaDa akshharamaaleyu braahmi lipiyimda beLedu bamdide. idannu svaragaLu, anusvaara, visarga, vyamjanagaLu, avargiya vyamjanagaLemdu vibhaagisalaagide. kannaDa akshharamaaleyannu kannaDa varNamaaleyemdu kareyalaaguththade.',
      'ಲತಾ ಮಂಗೇಶ್ಕರ್ ಭಾರತದ ಪ್ರಸಿದ್ಧ ಗಾಯಕಿಯರಲ್ಲಿ ಒಬ್ಬರು. ಹಿಂದಿ ಚಿತ್ರರಂಗದಲ್ಲಿ ಬಹಳ ಹಾಡುಗಳನ್ನು ಹಾಡಿರುವ ಇವರು, ೧೯೬೭ರಲ್ಲಿ ಬಿಡುಗಡೆಯಾದ "ಕ್ರಾಂತಿವೀರ ಸಂಗೊಳ್ಳಿ ರಾಯಣ್ಣ" ಎಂಬ ಕನ್ನಡ ಚಲನಚಿತ್ರದಲ್ಲಿನ "ಬೆಳ್ಳನೆ ಬೆಳಗಾಯಿತು" ಎಂಬ ಗೀತೆಯನ್ನು ಹಾಡಿದ್ದಾರೆ.': 'lathaa mamgeshkar bhaarathada prasiddha gaayakiyaralli obbaru. himdi chithraramgadalli bahaLa haaDugaLannu haaDiruva ivaru, 1967ralli biDugaDeyaada "kraamthivira samgoLLi raayaNNa" eamba kannaDa chalanachithradallina "beLLane beLagaayithu" eamba githeyannu haaDiddaare.',
      'ಪ್ರಥ್ಯೇಕಿಛ್ ಒನ್ನುಮ್ ಪರಯಿಲ್ಲೆನ್ನ್ ಥೋನ್ನುನ್ನು': 'prathhyekichh onnum parayillenn thhonnunnu'
    };

    for (const k in cases) {
      assert.equal(t.transliterate_kn_en(k), cases[k]);
    }
  });

  it('Numbers', function() {
    var cases = {
      '೨': '2',
      '೧': '1',
      '೩೫೮೪೦೯೨೬೭೧': '3584092671',
      '೧೯೨೧': '1921',
      '೨ - ೧ = ೧': '2 - 1 = 1'
    };

    for (const k in cases) {
      assert.equal(t.transliterate_kn_en(k), cases[k]);
    }
  });
});
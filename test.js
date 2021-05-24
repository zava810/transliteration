import { getzlist } from './zlist.js';
const zlist = getzlist();
// const zlist = [
// 'N', 'N', 'N', 'A', 'Ae', 'A', 'a', 'i', 'ii', 'u', 'uu', 'ri', 'li', 'A', 'e', 'e', 'e', 'ao', 'o', 'o', 'ou', 'k',
// 'kh', 'g', 'gh', 'Ng', 'ch', 'chh', 'z', 'zh', 'ny', 't', 'th', 'd', 'dh', 'n', 'T', 'Th', 'D', 'Dh', 'n', 'nnA',
// 'p', 'ph', 'b', 'bh', 'm', 'y', 'r', 'rr', 'l', 'll', 'lll', 'v', 'sh', 'sA', 's',
// 'H', 'oe', 'ui', '', '!', 'a', 'i', 'ii', 'u', 'uu', 'ri', 'rri', 'e', 'ei', 'i', 'ei', 'o', 'oe', 'o', 'ou',
// 'A', '', 'Ao', 'om', '', '', '`', '\'', 'eei', 'ui', 'uui', 'k', 'kh', 'd', 'z', 'rr', 'dh', 'ph', 'y', 'ri',
// 'lli', 'li', 'lli', '|', '||', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '_', '__', 'A', 'o', 'oe',
// 'ao', 'ui', 'uui', 'd', 'z', 'y', 'n', 'z', '?', 'd', 'b',
// ];

let testchar = 'न';
let testcode = testchar.charCodeAt();
console.log('currcode in heks is : ' + testcode.toString(0x10));
let testlang = (testcode/0x80)>>0;
console.log('testlang is : ' + testlang.toString(0x10));
const input = 'ब्लैक फंगस: हरियाणा-राजस्थान के बाद मप्र में भी महामारी घोषित, कोरोना मरीजों की तरह रखा जाएगा रिकॉर्ड';
// bAleik phNgs: HriyaAnAa-razsAThan ki baD mpAr miN bhii mHamarii ghosAiT, korona mriizoN kii TrH rkha zaega rikorAd
const inputLength = input.length;
let indeks = 0;
let output = '';
let prev_char = ''; let curr_char = ''; let nekst_char = '';
let prev_char_code = 0; let curr_char_code = 0; let nekst_char_code = 0;
while (indeks < inputLength) {
  if (0 === indeks) {
    curr_char = input[indeks]; prev_char = curr_char ;
  }
  else {
    curr_char = nekst_char ; prev_char = curr_char ;
  }
  console.log('prev_char is : ' + prev_char);
  console.log('curr_char is : ' + curr_char);
  console.log('nekst_char is : ' + nekst_char);
  nekst_char = input[indeks + 1];
  prev_char_code = prev_char.charCodeAt();
  curr_char_code = curr_char.charCodeAt();
  if(indeks+1 < inputLength) { nekst_char_code = nekst_char.charCodeAt(); }
  curr_lang_code = (curr_char_code/0x80)>>0 ;
  ///////////
  if (curr_lang_code>0x11 && curr_lang_code<0x1B) {
    curr_char_modulo = curr_char_code % 0x80 ;
    console.log('curr_char_modulo is : ' + curr_char_modulo.toString(0x10));
    output += zlist[curr_char_modulo]; indeks++ ; // continue ;
  }
  else if (curr_lang_code === 0) {
    output += curr_char.toLowerCase(); indeks++ ; // continue ;
  }
  else {
    output += curr_char.toLowerCase(); indeks++ ; // continue ;
  }
}
console.log('output is : ' + output);

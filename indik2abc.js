/*
 * (phonemic) romanization of hindi script
 * https://subinsb.com/hi2en
 *
 * this algorithm transliterates hindi script to roman characters ('hinglish')
 *
 * this work is licensed under gnu general public license version 3.
 *
 * copyright subin siby <mail@subinsb.com>, 2020
 *
 * ---------------
 *
 * port of libindic's transliteration module
 * https://libindic.org/transliteration
 *
 * copyright 2009-2010 santhosh thottingal <santhosh.thottingal@gmail.com>
 * copyright 2010 vasudev kamath <kamathvasudev@gmail.com>
 *
 * licensed under gnu lesser general public license as published by the free software foundation either version 3 of the license, or (at your option) any later version.
*/

var indik2abc = function (input) {
  /**
   * Checks if a key is available in an object
   * Checks if a value is in an array
   * @param object|array list
   * @return bool
   */
  function isInIt (list, val) {
    if (!Array.isArray(list)) { list = Object.keys(list); }

    return list.indexOf(val) !== -1;
  }

const langlist = [
  0x12,0x13,0x14,0x15, // hindi,bengali,punzabi,guzrati
  0x16,0x17,0x18,0x19, // oriya,tamil,telugu,kannada
  0x1A, //0x1B,0x1C,0x1D // malayalam,sinhalese,telugu,lao
  // 0x1E, //0x1B,0x1C,0x1D // tibetan,sinhalese,telugu,lao
];

const charlist = [
'N', 'N', 'N', 'A', 'Ae', 'A', 'a', 'i', 'ii', 'u', 'uu', 'ri', 'li', 'A', 'e', 'e', 'e', 'ao', 'o', 'o', 'ou', 'k',
'kh', 'g', 'gh', 'Ng', 'ch', 'chh', 'z', 'zh', 'ny', 't', 'th', 'd', 'dh', 'AnA', 'T', 'Th', 'D', 'Dh', 'n', 'nnA',
'p', 'ph', 'b', 'bh', 'm', 'y', 'r', 'rr', 'l', 'll', 'lll', 'v', 'sh', 'sA', 's',
'H', 'oe', 'ui', '', '!', 'a', 'i', 'ii', 'u', 'uu', 'ri', 'rri', 'e', 'ei', 'i', 'ei', 'o', 'oe', 'o', 'ou',
'A', '', 'Ao', 'om', '', '', '`', '\'', 'eei', 'ui', 'uui', 'k', 'kh', 'd', 'z', 'rr', 'dh', 'ph', 'y', 'ri',
'lli', 'li', 'lli', '|', '||', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '_', '__', 'A', 'o', 'oe',
'ao', 'ui', 'uui', 'd', 'z', 'y', 'n', 'z', '?', 'd', 'b',
];

  const inputLength = input.length;
  let index = 0;
  let output = '';

  while (index < inputLength) {
    const currentCharacter = input[index];
    const nextCharacter = input[index + 1];
    currlang = (currentCharacter/0x80)>>0;
    currchar = currentCharacter % 0x80;
    /**
     * If current charachter is a punctuation symbol skip it.
     * Added to avoid getting extra 'a' to the begining
     * of word next to punctuation symbol
     */
    if (currlang>0x11 && currlang<0x1B) {
      output += currentCharacter; index++; continue;
    }
    else if (currlang === 0) {
      output += currentCharacter; index++; continue;
    }
    else {
      output += currentCharacter; index++; continue;
    }
    if (currentCharacter.match(/^[.,:!?]/)) { output += currentCharacter; index++; continue; }
    if (currentCharacter === virama) { index++; continue; }

    // Get english equivalaent of the charachter.
    if (isInIt(dictionary, currentCharacter)) { output += dictionary[currentCharacter]; }
    else if (isInIt(numerals, currentCharacter)) { output += numerals[currentCharacter]; }
    else { output += currentCharacter; }



    index++;
  }

  return output;
}

module.exports = indik2abc

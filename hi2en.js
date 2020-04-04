/*
 * (Phonemic) Romanization of Hindi script
 * https://subinsb.com/hi2en
 *
 * This algorithm transliterates Hindi script to Roman characters ('Hinglish')
 *
 * This work is licensed under GNU General Public License version 3.
 * 
 * Copyright Subin Siby <mail@subinsb.com>, 2020
 * 
 * ---------------
 *
 * Port of libindic's Transliteration module
 * https://libindic.org/Transliteration
 * 
 * Copyright 2009-2010 Santhosh Thottingal <santhosh.thottingal@gmail.com>
 * Copyright 2010 Vasudev Kamath <kamathvasudev@gmail.com>
 *
 * Licensed under GNU Lesser General Public License as published by the Free Software Foundation; either version 3 of the License, or (at your option) any later version.
*/

var hi2en = function(input) {
  
  /**
   * Checks if a key is available in an object
   * Checks if a value is in an array
   * @param object|array list
   * @return bool
   */
  function isInIt(list, val) {
    if (!Array.isArray(list))
      list = Object.keys(list);

    return list.indexOf(val) !== -1;
  }

  var dictionary = {
    "अ": "a", "आ": "aa", "इ": "i", "ई": "ee", "उ": "u",
    "ऊ": "u", "ऋ": "rri", "ए": "e", "ऐ": "ai",
    "ओ": "o", "औ": "au", "ं": "m", "ಃ": "h",
    "क": "k", "ख": "kh", "ग": "g", "घ": "gh", "ङ": "ng",
    "च": "ch", "छ": "chh", "ज": "j", "झ": "jhh", "ञ": "nj",
    "ट": "T", "ठ": "thh", "ड": "d", "ढ": "dh", "ण": "N",
    "त": "th", "थ": "Th", "द": "D", "ध": "Dh", "न": "n",
    "प": "p", "फ": "ph", "ब": "b", "भ": "bh", "म": "m",
    "य": "y", "र": "r", "ल": "l", "व": "v", "ष": "sh",
    "श": "shh", "स": "s", "ह": "h", "ಳ": "L",
    "ृ": "rri", "ा": "aa", "ि": "i", "ी": "i",
    "ु": "u", "ू": "oo", "ृ": "rri", "े": "e", "ॆ": "e",
    "ै": "ai", "ो": "o", "ॊ": "o", "ौ": "au",
    "क्ष": "ksh", "त्र": "tr", "ज्ञ": "jn",
    "೧": "१", "२": "2", "३": "3", "೪": "4", "५": "5",
    "६": "6", "७": "7", "८": "8", "९": "9", "०": "0",
    "ऑ": "O", "ॉ": "O", "।": "."
  };

  var vowels = [
    "अ", "आ", "इ", "ई", "उ", "ऊ", "ऋ", "ए",
    "ऐ", "ओ", "औ"
  ];

  var vowel_signs = [
    "ा", "ि", "ी", "ु", "ू", "ृ", "े", "ॆ",
    "ै", "ो", "ॊ", "ौ", "ं", "ಃ"
  ];

  var virama = "्";
  var anuswara = "ं";

  input_length = input.length;
  index = 0;
  output = "";

  while (index < input_length) {
    var current_character = input[index],
        next_character = input[index + 1];

    /**
     * If current charachter is a punctuation symbol skip it.
     * Added to avoid getting extra "a" to the begining
     * of word next to punctuation symbol
     */
    if (current_character.match(/^[.,:!?]/)) {
      output += current_character
      index++;
      continue;
    }

    if (current_character === virama) {
      index++;
      continue;
    }

    // Get english equivalaent of the charachter.
    if (isInIt(dictionary, current_character)) {
      output += dictionary[current_character];
    } else {
      output += current_character;
    }

    if (
      index + 1 < input_length &&
      !isInIt(vowel_signs, next_character) &&
      isInIt(dictionary, current_character) &&
      isInIt(dictionary, next_character) &&
      !isInIt(vowels, current_character) &&
      !isInIt(vowel_signs, current_character)
    ) {
      output += "a";
    }

    /**
     * Add 'a' at end of characters that are alone
     * क => ka
     * क्रि क में => kri ka mem
     * क्रि का में => kri ka mem
     */
    if (
      isInIt(dictionary, current_character) &&
      (
        index + 1 == input_length ||
        next_character === " "
      ) &&
      (
        index - 1 < 0 ||
        input[index - 1] === " "
      ) &&
      current_character != "अ" &&
      current_character != "आ"
    ) {
      output += "a";
    }

    // Handle am sign
    if (
      index + 1 < input_length &&
      next_character == anuswara &&
      !isInIt(vowel_signs, current_character)
    ) {
      output += "a";
    }

    index++;
  }

  return output;

}

module.exports = hi2en;

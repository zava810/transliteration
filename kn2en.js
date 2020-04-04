/*
 * (Phonemic) Romanization of Kannada script
 * https://subinsb.com/hi2en
 *
 * This algorithm transliterates Kannada script to Roman characters ('Kanglish')
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

var kn2en = function(input) {
  
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
    "ಅ": "a", "ಆ": "aa", "ಇ": "i", "ಈ": "i", "ಉ": "u",
    "ಊ": "u", "ಋ": "rri", "ಎ": "e", "ಏ": "e", "ಐ": "ai",
    "ಒ": "o", "ಓ": "o", "ಔ": "au", "ಂ": "m", "ಃ": "h",
    "ಕ": "k", "ಖ": "kh", "ಗ": "g", "ಘ": "gh", "ಙ": "ng",
    "ಚ": "ch", "ಛ": "chh", "ಜ": "j", "ಝ": "jhh", "ಞ": "nj",
    "ತ": "th", "ಥ": "thh", "ದ": "d", "ಧ": "dh", "ನ": "n",
    "ಟ": "T", "ಠ": "Th", "ಡ": "D", "ಢ": "Dh", "ಣ": "N",
    "ಪ": "p", "ಫ": "ph", "ಬ": "b", "ಭ": "bh", "ಮ": "m",
    "ಯ": "y", "ರ": "r", "ಲ": "l", "ವ": "v", "ಶ": "sh",
    "ಷ": "shh", "ಸ": "s", "ಹ": "h", "ಳ": "L",
    "ಋ": "rri", "್": "", "ಾ": "aa", "ಿ": "i", "ೀ": "i",
    "ು": "u", "ೂ": "u", "ೃ": "rri", "ೆ": "e", "ೇ": "e",
    "ೈ": "ai", "ೊ": "o", "ೋ": "o", "ೌ": "au",
    "ಕ್ಷ": "ksh", "ತ್ರ": "tr", "ಜ್ಞ": "jn",
    "೧": "1", "೨": "2", "೩": "3", "೪": "4", "೫": "5",
    "೬": "6", "೭": "7", "೮": "8", "೯": "9", "೦": "0"
  };

  var vowels = [
    "ಅ", "ಆ", "ಇ", "ಈ", "ಉ", "ಊ", "ಋ",
    "ಎ", "ಏ", "ಐ","ಒ", "ಓ", "ಔ"
  ];

  var vowel_signs = [
    "್", "ಾ", "ಿ", "ೀ", "ು", "ೂ", "ೃ",
    "ೆ", "ೇ", "ೈ", "ೊ", "ೋ",
    "ೌ", "ಂ", "ಃ"
  ];

  var virama = "್";
  var anuswara = "ಂ";

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
      output += dictionary[current_character]
    } else {
      output += current_character;
    }

    if (
      index + 1 <= input_length &&
      !isInIt(vowel_signs, next_character) &&
      isInIt(dictionary, current_character) &&
      !isInIt(vowels, current_character) &&
      !isInIt(vowel_signs, current_character)
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

module.exports = kn2en;
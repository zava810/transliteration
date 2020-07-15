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

var kn2en = function (input) {
  /**
   * Checks if a key is available in an object
   * Checks if a value is in an array
   * @param object|array list
   * @return bool
   */
  function isInIt (list, val) {
    if (!Array.isArray(list)) { list = Object.keys(list) }

    return list.indexOf(val) !== -1
  }

  /* eslint-disable object-property-newline */
  const dictionary = {
    ಅ: 'a', ಆ: 'aa', ಇ: 'i', ಈ: 'i', ಉ: 'u',
    ಊ: 'u', ಋ: 'rri', ಎ: 'e', ಏ: 'e', ಐ: 'ai',
    ಒ: 'o', ಓ: 'o', ಔ: 'au', 'ಂ': 'm', 'ಃ': 'h',
    ಕ: 'k', ಖ: 'kh', ಗ: 'g', ಘ: 'gh', ಙ: 'ng',
    ಚ: 'ch', ಛ: 'chh', ಜ: 'j', ಝ: 'jhh', ಞ: 'nj',
    ತ: 'th', ಥ: 'thh', ದ: 'd', ಧ: 'dh', ನ: 'n',
    ಟ: 'T', ಠ: 'Th', ಡ: 'D', ಢ: 'Dh', ಣ: 'N',
    ಪ: 'p', ಫ: 'ph', ಬ: 'b', ಭ: 'bh', ಮ: 'm',
    ಯ: 'y', ರ: 'r', ಲ: 'l', ವ: 'v', ಶ: 'sh',
    ಷ: 'shh', ಸ: 's', ಹ: 'h', ಳ: 'L',
    '್': '', 'ಾ': 'aa', 'ಿ': 'i', 'ೀ': 'i',
    'ು': 'u', 'ೂ': 'u', 'ೃ': 'rri', 'ೆ': 'e', 'ೇ': 'e',
    'ೈ': 'ai', 'ೊ': 'o', 'ೋ': 'o', 'ೌ': 'au',
    ಕ್ಷ: 'ksh', ತ್ರ: 'tr', ಜ್ಞ: 'jn'
  }

  const numerals = {
    '೧': '1', '೨': '2', '೩': '3', '೪': '4', '೫': '5',
    '೬': '6', '೭': '7', '೮': '8', '೯': '9', '೦': '0'
  }

  const vowels = [
    'ಅ', 'ಆ', 'ಇ', 'ಈ', 'ಉ', 'ಊ', 'ಋ',
    'ಎ', 'ಏ', 'ಐ', 'ಒ', 'ಓ', 'ಔ'
  ]

  const vowelSigns = [
    '್', 'ಾ', 'ಿ', 'ೀ', 'ು', 'ೂ', 'ೃ',
    'ೆ', 'ೇ', 'ೈ', 'ೊ', 'ೋ',
    'ೌ', 'ಂ', 'ಃ'
  ]

  const virama = '್'
  const anuswara = 'ಂ'

  const inputLength = input.length
  let index = 0
  let output = ''

  while (index < inputLength) {
    const currentCharacter = input[index]
    const nextCharacter = input[index + 1]

    /**
     * If current charachter is a punctuation symbol skip it.
     * Added to avoid getting extra "a" to the begining
     * of word next to punctuation symbol
     */
    if (currentCharacter.match(/^[.,:!?]/)) {
      output += currentCharacter
      index++
      continue
    }

    if (currentCharacter === virama) {
      index++
      continue
    }

    // Get english equivalaent of the charachter.
    if (isInIt(dictionary, currentCharacter)) {
      output += dictionary[currentCharacter]
    } else if (isInIt(numerals, currentCharacter)) {
      // Transliterate numerals
      output += numerals[currentCharacter]
    } else {
      output += currentCharacter
    }

    if (
      index + 1 <= inputLength &&
      !isInIt(vowelSigns, nextCharacter) &&
      isInIt(dictionary, currentCharacter) &&
      !isInIt(vowels, currentCharacter) &&
      !isInIt(vowelSigns, currentCharacter)
    ) {
      output += 'a'
    }

    // Handle am sign
    if (
      index + 1 < inputLength &&
      nextCharacter === anuswara &&
      !isInIt(vowelSigns, currentCharacter)
    ) {
      output += 'a'
    }

    index++
  }

  return output
}

module.exports = kn2en

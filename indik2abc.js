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
 * Licensed under GNU Lesser General Public License as published by the Free Software Foundation either version 3 of the License, or (at your option) any later version.
*/

var indik2abc = function (input) {
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
    अ: 'A', आ: 'a', इ: 'i', ई: 'ii', उ: 'u',
    ऊ: 'uu', ऋ: 'ri', ए: 'e', ऐ: 'ei',
    ओ: 'o', औ: 'ou', 'ं': 'n', 'ಃ': 'A',
    क: 'k', ख: 'kh', ग: 'g', घ: 'gh', ङ: 'rr',
    च: 'c', छ: 'ch', ज: 'z', झ: 'zh', ञ: 'n',
    ट: 't', ठ: 'th', ड: 'd', ढ: 'dh', ण: 'N',
    त: 'T', थ: 'Th', द: 'D', ध: 'Dh', न: 'n',
    प: 'p', फ: 'ph', ब: 'b', भ: 'bh', म: 'm',
    य: 'y', र: 'r', ल: 'l', व: 'v', ष: 'sh',
    श: 'sh', स: 's', ह: 'H', ಳ: 'L',
    'ृ': 'rri', 'ा': 'a', 'ि': 'i', 'ी': 'ii',
    'ु': 'u', 'ू': 'uu', 'े': 'e', 'ॆ': 'e',
    'ै': 'Ai', 'ो': 'o', 'ॊ': 'o', 'ौ': 'ou',
    क्ष: 'ksh', त्र: 'Tr', ज्ञ: 'gy',
    ऑ: 'O', 'ॉ': 'O', '।': '.'
  }

  const numerals = {
    '१': '1', '२': '2', '३': '3', '೪': '4', '५': '5',
    '६': '6', '७': '7', '८': '8', '९': '9', '०': '0'
  }

  const vowels = [
    'अ', 'आ', 'इ', 'ई', 'उ', 'ऊ', 'ऋ', 'ए',
    'ऐ', 'ओ', 'औ'
  ]

  const vowelSigns = [
    'ा', 'ि', 'ी', 'ु', 'ू', 'ृ', 'े', 'ॆ',
    'ै', 'ो', 'ॊ', 'ौ', 'ं', 'ಃ'
  ]

  var virama = '्'
  var anuswara = 'ं'

  const inputLength = input.length
  let index = 0
  let output = ''

  while (index < inputLength) {
    const currentCharacter = input[index]
    const nextCharacter = input[index + 1]

    /**
     * If current charachter is a punctuation symbol skip it.
     * Added to avoid getting extra 'a' to the begining
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
      index + 1 < inputLength &&
      !isInIt(vowelSigns, nextCharacter) &&
      isInIt(dictionary, currentCharacter) &&
      isInIt(dictionary, nextCharacter) &&
      !isInIt(vowels, currentCharacter) &&
      !isInIt(vowelSigns, currentCharacter)
    ) {
      output += 'a'
    }

    /**
     * Add 'a' at end of characters that are alone
     * क => ka
     * क्रि क में => kri ka mem
     * क्रि का में => kri ka mem
     */
    if (
      isInIt(dictionary, currentCharacter) &&
      (
        index + 1 === inputLength ||
        nextCharacter === ' '
      ) &&
      (
        index - 1 < 0 ||
        input[index - 1] === ' '
      ) &&
      currentCharacter !== 'अ' &&
      currentCharacter !== 'आ'
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

module.exports = indik2abc

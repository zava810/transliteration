# transliteration

a module to transliterate indian languages.

started point: near port of the [python libindic transliterator](https://github.com/libindic/transliteration/) by [subinsb](http://subinsb.com).

in this trying to test & caliberate phur hindi & similar bhasae.

this module is used in the webextension [indic-en](//subinsb.com/indicen/).

### source code eksecution phlo:
1. package.json -> main is called/run : ("main": "transliterator.js" , transliterator.js)
2. class transliterator -> function transliterate_indik_abc (input) -> indik2abc(input,zabc_dikt)
3. indik2abc(input,zabc_dikt) -> return output ( transliterated input)

### steps to clone , build , test & publish:
1. git clone ... # this repozitri
2. change source iph needed
3. git commit & publish
  > git pull ; git add . ; git commit -am "some comments" ; git push
4. npm version patch
5. npm publish

### steps to use library
1. define [ascii or hscii or code mapping][code_map_sheet] as in ekzample zabc.js in this repository.
  1. it is to define a dictionary vith keys as :
```js
const zabc_list_dict = {
  zabc_list: [
    'N', // 	ऀ	900	2304		inverted candrabindu
    'N', // 	ँ	901	2305		anunasika(candrabindu)
    'N', // 	ं	902	2306	anuswara	anusvara bindu
    'A', // 	ः	903	2307		visarga
      // ..... so on
      // ....
  ],
  hard_consonants_modulo_list : [
    0x15, 0x17, 0x1A, 0x1C, 0x1F, 0x21, 0x24, 0x26, 0x2A, 0x2C, 0x37, 0x58, 0x5A, 0x5B, 0x79, 0x7C, 0x7E, 0x7F,
  ],
};

2. import library as in your js file:
```js
import transliterator from 'libindik-transliteration';
import zabc from './zabc.js';
const input = 'हिन्दी विकिपीडिया' ;
var t = new transliterator()
const zabc_dikt = zabc()
var transliterated_output = t.transliterate_indik_abc(k,zabc_dikt)
```

[code_map_sheet]: https://docs.google.com/spreadsheets/d/e/2PACX-1vRYY_On0oQlYqCH8KrAuNy9nxnUKRx9dG6UvjoZjbP1ZVeXX6VcHl-sU2yg9jbAFszCcNZ5STK47_rz/pubhtml

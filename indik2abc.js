import { get_zabc_list , get_hard_consonants } from './zabc_list.js';
import { get_input_list } from './input_list.js';
const zabc_list = get_zabc_list();
const hard_consonants_modulo_list = get_hard_consonants();
const input_list = get_input_list();

var indik2abc = function (input) {
  function is_in_it (list, val) {
    if (!Array.isArray(list)) { list = Object.keys(list); }
    return list.indexOf(val) !== -1;
  }
  const inputLength = input.length;
  let indeks = 0;
  let output = '';
  let prev_char = ''; let curr_char = ''; let nekst_char = '';
  let prev_char_code = 0; let curr_char_code = 0; let nekst_char_code = 0;
  let curr_lang_code = 0;
  let prev_char_modulo = 0; let curr_char_modulo = 0; let nekst_char_modulo = 0;
  while (indeks < inputLength) {
    if (0 === indeks) {
      curr_char = input[indeks]; prev_char = curr_char ;
    }
    else {
      curr_char = nekst_char ; prev_char = curr_char ;
    }
    // console.log('prev_char is : ' + prev_char + '. curr_char is : ' + curr_char + '. nekst_char is : ' + nekst_char);
    // console.log('curr_char is : ' + curr_char);
    // console.log('nekst_char is : ' + nekst_char);
    nekst_char = input[indeks + 1];
    prev_char_code = prev_char.charCodeAt();
    curr_char_code = curr_char.charCodeAt();
    if(indeks+1 < inputLength) { nekst_char_code = nekst_char.charCodeAt(); }
    curr_lang_code = (curr_char_code/0x80)>>0 ;
    ///////////
    if (curr_lang_code>0x11 && curr_lang_code<0x1B) {
      curr_char_modulo = curr_char_code % 0x80 ;
      // console.log(
      //   'prev_char is : ' + prev_char +
      //   '. curr_char is : ' + curr_char +
      //   '. nekst_char is : ' + nekst_char +
      //   '. curr_char_modulo is : ' + curr_char_modulo.toString(0x10)
      // );
      if(0x39 === curr_char_modulo && !is_in_it(hard_consonants_modulo_list,prev_char_modulo) ){
        output += 'h';
      }
      else {
        output += zabc_list[curr_char_modulo];
      }
      // if((0x2 === curr_char_modulo) && (0x47 === prev_char_modulo)) {
      //   output += 'in';
      // }
      // else {
      //   output += zabc_list[curr_char_modulo];
      // }
      indeks++ ; // continue ;
    }
    else if (curr_lang_code === 0) {
      output += curr_char.toLowerCase(); indeks++ ; // continue ;
    }
    else {
      output += curr_char.toLowerCase(); indeks++ ; // continue ;
    }
    prev_char_modulo = curr_char_modulo ; curr_char_modulo = 0 ;
  }
  return output;
}

module.exports = indik2abc

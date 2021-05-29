var indik2abc = function (input,zabc_dikt) {
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
    nekst_char = input[indeks + 1];
    prev_char_code = prev_char.charCodeAt();
    curr_char_code = curr_char.charCodeAt();
    if(indeks+1 < inputLength) { nekst_char_code = nekst_char.charCodeAt(); }
    curr_lang_code = (curr_char_code/0x80)>>0 ;
    if (curr_lang_code>0x11 && curr_lang_code<0x1B) {
      curr_char_modulo = curr_char_code % 0x80 ;
      if(0x39 === curr_char_modulo && !is_in_it(zabc_dikt.hard_consonants_modulo_list,prev_char_modulo) ){
        output += 'h';
      }
      else {
        output += zabc_dikt.zabc_list[curr_char_modulo];
      }
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

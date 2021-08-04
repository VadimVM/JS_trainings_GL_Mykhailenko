'use strict';
let input;
let total = 0;


  input = Number(prompt('Введите число'));
  if (Number.isInteger(input)) {
    total = total + input;
  } else {
    alert('Было введено не число попробуйте еще раз');
  }

alert(total);

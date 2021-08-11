'use strict';

const findLongestWord = function (string) {
  const arr = string.split(' ');
  let maxWord = arr[0];
  for (const word of arr) {
    if (word.length > maxWord.length) {
      maxWord = word;
    }
  }
  return maxWord;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'

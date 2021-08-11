'use strict';

const checkForSpam = function (message) {
  const checkMassage = message.toLowerCase();
  const spam = ['spam', 'sale'];
  let results = false;
  for (const word of spam) {
    if (checkMassage.includes(word)) {
      results = true;
      break;
    }
  }
  return results;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true

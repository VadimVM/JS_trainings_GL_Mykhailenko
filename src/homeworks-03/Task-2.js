'use strict';

console.log('-------------------Task-2-----------------------');

const countProps = function (obj) {
  const keys = Object.keys(obj);
  let totalProp = 0;

  for (let i = 0; i < keys.length; i++) {
    totalProp++;
  }
  return totalProp;
  // твой код
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(countProps({})); // 0

console.log(countProps({ name: 'Mango', age: 2 })); // 2

console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3

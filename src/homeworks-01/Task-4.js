'use strict';

const pricePerDroid = 3000;
let credits = 23580;
let massage = Number(prompt('Введите количество дроидов'));

let totalPrice = massage * pricePerDroid;
console.log(totalPrice);

if (massage === null) {
  console.log('Отменено пользователем');
} else if (totalPrice <= credits) {
  console.log(
    `Вы купили ${Math.ceil(credits / totalPrice)} дроидов, у вас осталось ${
      credits % totalPrice
    } кредитов`,
  );
} else {
  console.log('Не достаточно средств');
}

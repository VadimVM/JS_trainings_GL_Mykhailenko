'use strict';

const pricePerDroid = 3000;
let credits = 23580;
let massage = Number(prompt('Enter the nuber of Droids please'));

let totalPrice = massage * pricePerDroid;
console.log(totalPrice);

if (massage === null) {
  console.log('Canceled by user');
} else if (totalPrice <= credits) {
  console.log(
    `You bought ${Math.ceil(credits / totalPrice)} droids. You have ${
      credits % totalPrice
    } left in your account`,
  );
} else {
  console.log('not enough funds');
}

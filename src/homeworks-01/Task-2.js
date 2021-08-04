'use strict';

let total = 100;
let price = Number(prompt('Введите количество товаров в заказе'));

// console.log(typeof price);

if (price > 0 && price <= total) {
  console.log('Заказ оформлен, с вами свяжется менеджер');
} else {
  console.log('На складе недостаточно товаров');
}

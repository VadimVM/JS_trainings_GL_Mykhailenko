'use strict';

const ADMIN_PASSWORD = 'jqueryismyjam';
let massage;

massage = prompt('Введите пароль');

if (massage === ADMIN_PASSWORD) {
  console.log('Добро пожаловать!');
} else if (massage === null) {
  console.log('Отменено пользователем');
} else {
  console.log('Отказано в доступе! Неверный пароль');
}

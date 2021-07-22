'use strict';

const ADMIN_PASSWORD = 'jqueryismyjam';
let massage;

massage = prompt('input password please');

if (massage === ADMIN_PASSWORD) {
  console.log('Welcome!');
} else if (massage === null) {
  console.log('Canceled by user');
} else {
  console.log('Access denied! Invalid password');
}

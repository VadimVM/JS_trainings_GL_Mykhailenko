'use strict';

console.log('-------------------Task-1-----------------------');

const toString = function (user) {
  for (const key of Object.keys(user)) {
    console.log(`${key}: `, `${user[key]}`);
  }
  console.log('==============================');
};

const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};

toString(user);

user.mood = 'happy';
user.hobby = 'skydiving';
user.premium = false;

toString(user);

// const user = {
//   name: 'Mango',
//   age: 20,
//   hobby: 'html',
//   premium: true,

//   toString() {
//     for (const key of Object.keys(this)) {
//       console.log(`${key}: `, `${this[key]}`);
//     }
//   },
// };

// user.toString();

'use strict';
import users from './users.js';

console.log('-------------------Task-1-----------------------');
const getUserNames = users => {
  return users.map(user => user.name);
};

console.log(getUserNames(users));

console.log('-------------------Task-2-----------------------');
const getUsersWithEyeColor = (users, color) => {
  return users.filter(user => user.eyeColor === color);
};

console.log(getUsersWithEyeColor(users, 'blue'));

console.log('-------------------Task-3-----------------------');

const getUsersWithGender = (users, gender) => {
  return users.filter(user => user.gender === gender).map(user => user.name);
};

console.log(getUsersWithGender(users, 'male'));

console.log('-------------------Task-4-----------------------');
const getInactiveUsers = users => {
  return users.filter(user => !user.isActive);
};

console.log(getInactiveUsers(users));

console.log('-------------------Task-5-----------------------');
const getUserWithEmail = (users, email) => {
  return users.find(user => user.email === email);
};

console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}

console.log('-------------------Task-6-----------------------');
const getUsersWithAge = (users, min, max) => {
  return users.filter(user => user.age > min && user.age < max);
};

console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

console.log(getUsersWithAge(users, 30, 40));
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

console.log('-------------------Task-7-----------------------');
const calculateTotalBalance = users => {
  return users.reduce((totalBalance, user) => totalBalance + user.balance, 0);
};

console.log(calculateTotalBalance(users)); // 20916

console.log('-------------------Task-8-----------------------');
const getUsersWithFriend = (users, friendName) => {
  return users
    .filter(user => {
      return user.friends.some(i => user.friends[i] === friendName);
    })
    .map(user => user.name);
};

console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]

console.log('-------------------Task-9-----------------------');
console.log('-------------------Task-10-----------------------');

const getSkills = arr => {
  return arr.reduce((allSkills, user) => {
    allSkills.push(...user.skills);
    return allSkills;
  }, []);
};

console.log(getSkills(users));

const getSortedUniqueSkills = users => {
  return [...new Set(getSkills(users))].sort();
  // твой код
};

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]

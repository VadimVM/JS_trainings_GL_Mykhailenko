'use strict';

const country1 = 'Китай';
const country2 = 'Чили';
const country3 = 'Австралия';
const country4 = 'Ямайка';
const country5 = 'Индия';
let massage;
let userChouse = prompt('Введите страну доставки').toLowerCase();

// console.log(userChouse);

switch (userChouse) {
  case country1.toLowerCase():
    massage = `Доставка в ${country1} будет стоить 100 кредитов`;
    console.log(massage);
    break;
  case country2.toLowerCase():
    massage = `Доставка в ${country2} будет стоить 250 кредитов`;
    console.log(massage);
    break;
  case country3.toLowerCase():
    massage = `Доставка в ${country3} будет стоить 170 кредитов`;
    console.log(massage);
    break;
  case country4.toLowerCase():
    massage = `Доставка в ${country4} будет стоить 120 кредитов`;
    console.log(massage);
    break;
  case country5.toLowerCase():
    massage = `Доставка в ${country5} будет стоить 80 кредитов`;
    console.log(massage);
    break;
  default:
    massage = 'В вашей стране доставка не доступна';
    console.log(massage);
}

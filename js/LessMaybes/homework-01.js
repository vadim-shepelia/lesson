//Задание 1
let name = "Генератор защитного поля";
let price = 1000;
console.log("Выбран «" + name + "», цена за штуку " + price + " кредитов");
price = 2000;
console.log("Выбран «" + name + "», цена за штуку " + price + " кредитов");

//Задание 2
const total = 100;
const ordered = 50;

function orderedTotal(total, ordered) {
  if (ordered > total) {
    console.log("Недостаточно средств на счету!");
  } else console.log("Заказ оформлен, с вами свяжется менеджер");
}

//Задание 3
const ADMIN_PASSWORD = "jqueryismyjam";
let message = prompt("укажи пароль ", "");
if (message === null) {
  alert("Отменено пользователем!");
  alert("message = " + message );
} else if (message === ADMIN_PASSWORD) {
  alert("Добро пожаловать!");
  alert("message = " + message );
} else {
  alert("Доступ запрещен, неверный пароль!");
  alert("message = " + message );
}

//Задание 4
let credits = 23580;
let pricePerDroid = 3000;
let totalPrices;
let droids = prompt("Скольки дроідів ви хочете купити ? ", 1);
console.log(typeof droids);

if (droids === null) {
  alert("Отменено пользователем!");
} else if (typeof droids == "number") {
  totalPrices = pricePerDroid * droids;
  if (totalPrices > credits) {
    console.log("Недостаточно средств на счету!");
  } else
    console.log(
      "Вы купили " +
        droids +
        " дроидов, на счету осталось " +
        (credits - totalPrices) +
        " кредитов."
    );
}

//Задание 5
let country = prompt("ввести имя страны", "").toLocaleLowerCase();
let arrCountryCredit = {
  Китай: 100,
  Чили: 250,
  Австралия: 170,
  Индия: 80,
  Ямайка: 120,
};
switch (country) {
  case "китай":
    console.log(
      "Доставка в " +
        country +
        " будет стоить " +
        `${arrCountryCredit.Китай}` +
        " кредитов"
    );
    break;
  case "чили":
    console.log(
      "Доставка в " +
        country +
        " будет стоить " +
        `${arrCountryCredit.Чили}` +
        " кредитов"
    );
    break;
  case "австралия":
    console.log(
      "Доставка в " +
        country +
        " будет стоить " +
        `${arrCountryCredit.Австралия}` +
        " кредитов"
    );
    break;
  case "индия":
    console.log(
      "Доставка в " +
        country +
        " будет стоить " +
        `${arrCountryCredit.Индия}` +
        " кредитов"
    );
    break;
  case "ямайка":
    console.log(
      "Доставка в " +
        country +
        " будет стоить " +
        `${arrCountryCredit.Ямайка}` +
        " кредитов"
    );
    break;
  default:
    alert('В вашей стране доставка не доступна')
}

//Задание 6
let totalPrice = 0;
for (let i = 1; i <= 2; i++) {
  let question = prompt("ввести число");
  let foNumber = Number(question);
  if (question === null) {
    console.log('Общая сумма чисел равна '+ totalPrice );
    break
  } else if(isNaN(foNumber)) {
    foNumber = 0;
    totalPrice += foNumber;
    console.log(totalPrice);
    --i;
  }else{
    totalPrice += foNumber;
    console.log(totalPrice);
    --i;
  }
}


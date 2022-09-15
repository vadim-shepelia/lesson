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
// let message = prompt("укажи пароль ", "");
// if (message === null) {
//   alert("Отменено пользователем!");
//   alert("message = " + message );
// } else if (message === ADMIN_PASSWORD) {
//   alert("Добро пожаловать!");
//   alert("message = " + message );
// } else {
//   alert("Доступ запрещен, неверный пароль!");
//   alert("message = " + message );
// }

//Задание 4
let credits = 23580;
let pricePerDroid = 3000;
let totalPrice;
let droids = prompt("Скольки дроідів ви хочете купити ? ", 1);
console.log(typeof droids);

if (droids === null) {
  alert("Отменено пользователем!");
} else if (typeof droids == "number") {
  totalPrice = pricePerDroid * droids;
  if (totalPrice > credits) {
    console.log("Недостаточно средств на счету!");
  } else
    console.log(
      "Вы купили " +
        droids +
        " дроидов, на счету осталось " +
        (credits - totalPrice) +
        " кредитов."
    );
}

//Задание 5

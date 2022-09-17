//Задание 1
// Напиши функцию logItems(array), которая получает массив и использует цикл for, который для каждого элемента массива будет выводить в консоль сообщение в формате [номер элемента] - [значение элемента].

// Нумерация должна начинаться с 1. К примеру для первого элемента массива ['Mango', 'Poly', 'Ajax'] с индексом 0 будет выведено '1 - Mango', а для индекса 2 выведет '3 - Ajax'.
// const logItems = function(array) {
//     // твой код
//   };

//   /*
//    * Вызовы функции для проверки работоспособности твоей реализации.
//    */
//   logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);

//   logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);

function logItems(array) {
  let num = 1;
  for (let i = 0; i < array.length; i++) {
    console.log(num + " - " + array[i]);
    num++;
  }
}

// Задание 2
// Напиши скрипт подсчета стоимости гравировки украшений. Для этого создай функцию calculateEngravingPrice(message, pricePerWord) принимающую строку (в строке будут только слова и пробелы) и цену гравировки одного слова, и возвращающую цену гравировки всех слов в строке.
// const calculateEngravingPrice = function(message, pricePerWord) {
//     // твой код
//   };

//   /*
//    * Вызовы функции для проверки работоспособности твоей реализации.
//    */
//   console.log(
//     calculateEngravingPrice(
//       'Proin sociis natoque et magnis parturient montes mus',
//       10,
//     ),
//   ); // 80

//   console.log(
//     calculateEngravingPrice(
//       'Proin sociis natoque et magnis parturient montes mus',
//       20,
//     ),
//   ); // 160

//   console.log(
//     calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40),
//   ); // 240

//   console.log(
//     calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20),
//   ); // 120

const calculateEngravingPrice = function (message, pricePerWord) {
  let arrayMessage = message.split(" ");
  let sum = arrayMessage.length * pricePerWord;
  console.log(sum);
};

// Задание 3
// Напиши фукцнию findLongestWord(string), которая принимает параметром произвольную строку (в строке будут только слова и пробелы) и возвращает самое длинное слово в этой строке.

// const findLongestWord = function(string) {
//     // твой код
//   };

//   /*
//    * Вызовы функции для проверки работоспособности твоей реализации.
//    */
//   console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

//   console.log(findLongestWord('Google do a roll')); // 'Google'

//   console.log(findLongestWord('May the force be with you')); // 'force'

const findLongestWord = function (string) {
  let arrStr = string.split(" ");
  let a = [];
  for (let i = 0; i < arrStr.length; i++) {
    if (arrStr[i].length > a.length) {
      a = arrStr[i];
    }
  }
  console.log(a);
};

//Задание 4
//Напиши функцию formatString(string) которая принимает строку и форматирует ее если необходимо.
// Если длина строки не превышает 40 символов, функция возвращает ее в исходном виде.
// Если длина больше 40 символов, то функция обрезает строку до 40-ка символов и добавляет в конец строки троеточие '...', после чего возвращает укороченную версию.
// const formatString = function(string) {
//    твой код
//   };
//     Вызовы функции для проверки работоспособности твоей реализации.
//   console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
//    вернется оригинальная строка

//   console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
//   вернется форматированная строка

//   console.log(formatString('Curabitur ligula sapien.'));
//   вернется оригинальная строка

//   console.log(
//     formatString(
//       'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
//     ),
//   );
//   вернется форматированная строка

function formatString(string) {
  let arrString = string.split("");
  if (arrString.length < 40) {
    console.log(string);
  } else {
    let value = arrString.splice(0, 40);
    console.log(value.join("    ") + " ...");
  }
}

// Задание 5
// Напиши функцию checkForSpam(message), принимающую 1 параметр message - строку. Функция проверяет ее на содержание слов spam и sale. Если нашли зарещенное слово то функция возвращает true, если запрещенных слов нет функция возвращает false. Слова в строке могут быть в произвольном регистре.
// const checkForSpam = function(message) {
//  твой код
//   };

//     Вызовы функции для проверки работоспособности твоей реализации.
//   console.log(checkForSpam('Latest technology news')); // false

//   console.log(checkForSpam('JavaScript weekly newsletter')); // false

//   console.log(checkForSpam('Get best sale offers now!')); // true

//   console.log(checkForSpam('[SPAM] How to earn fast money?')); // true

function checkForSpam(message) {
  let sumMesseg = message.toLowerCase();
  let spam = sumMesseg.includes("spam");
  let sale = sumMesseg.includes("sale");
  if (spam || sale) {
    console.log(true);
  } else console.log(false);
}

// Задание 6
// Напиши скрипт со следующим функционалом:

// При загрузке страницы пользователю предлагается в prompt ввести число. Ввод сохраняется в переменную input и добавляется в массив чисел numbers.
// Операция ввода числа пользователем и сохранение в массив продолжается до тех пор, пока пользователь не нажмет Cancel в prompt.
// После того как пользователь прекратил ввод нажав Cancel, если массив не пустой, необходимо посчитать сумму всех элементов массива и записать ее в переменную total. Используй цикл for или for...of. После чего в консоль выведи строку 'Общая сумма чисел равна [сумма]'.
// 🔔 Делать проверку того, что пользователь ввел именно число, а не произвольный набор символов, не обязательно. Если хочешь, в случае некорректного ввода, показывай alert с текстом 'Было введено не число, попробуйте еще раз', при этом результат prompt записывать в массив чисел не нужно, после чего снова пользователю предлагается ввести число в prompt.

let input;
const numbers = [];
let total = 0;

for (let i = 1; i <= 2; i++) {
  let input = prompt("ввести число");
  if (input != null) {
    let foNumber = Number(input);
    if (isNaN(foNumber)) {
      alert("Было введено не число, попробуйте еще раз");
    } else {
      numbers.push(foNumber);
      --i;
    }
  } else if (input === null) {
    if (numbers != [])
      for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
      }
    break;
  }
}
console.log(total);

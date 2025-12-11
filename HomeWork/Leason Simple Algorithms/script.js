// 1) Обмен значениями двух переменных без использования третьей переменной.
// Пример: a = 3, b = 5 -> после обмена a = 5, b = 3
// Реализованы два способа: арифметический (для чисел) и через XOR (для целых).
function swapArithmetic(a, b) {
  // работает для чисел (осторожно с переполнением)
  a = a + b;
  b = a - b;
  a = a - b;
  return [a, b];
}
function swapXor(a, b) {
  // работает для целых чисел
  a = a ^ b;
  b = a ^ b;
  a = a ^ b;
  return [a, b];
}
// (Можно также [b, a] = [a, b] — коротко, но использует внутренний временный массив.)

// 2) Проверка чётного или нечётного числа
function isEven(num) {
  // возвращает true для чётных, false для нечётных
  return typeof num === 'number' && isFinite(num) ? num % 2 === 0 : false;
}

// 3) Сумма чисел от 1 до N
function sumTo(n) {
  // если n < 1 — возвращаем 0
  n = Math.floor(n);
  if (n <= 0) return 0;
  // формула суммы арифметической прогрессии
  return (n * (n + 1)) / 2;
}

// 4) Переворот строки
function reverseString(str) {
  // простой метод: разбить на массив символов, развернуть, собрать
  // используем split('') — для простых задач этого достаточно
  return String(str).split('').reverse().join('');
}

// 5) Фильтрация массива по чётным числам
function filterEven(arr) {
  if (!Array.isArray(arr)) return [];
  return arr.filter(x => typeof x === 'number' && isFinite(x) && x % 2 === 0);
}

// 6) Конвертер температуры
function celsiusToFahrenheit(c) {
  return c * 9 / 5 + 32;
}
function fahrenheitToCelsius(f) {
  return (f - 32) * 5 / 9;
}

// 7) Проверка строки на палиндром (игнорирует пробелы и регистр)
function isPalindrome(str) {
  const normalized = String(str).replace(/\s+/g, '').toLowerCase();
  return normalized === normalized.split('').reverse().join('');
}

// 8) Сумма всех элементов массива (for)
function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    const val = arr[i];
    if (typeof val === 'number' && isFinite(val)) sum += val;
    // если требуем суммировать только числа — иначе можно использовать Number(val) / parseFloat
  }
  return sum;
}

// 9) Найти самое длинное слово в массиве строк (for...of)
function longestWord(words) {
  if (!Array.isArray(words) || words.length === 0) return '';
  let longest = '';
  for (const w of words) {
    const s = String(w);
    if (s.length > longest.length) longest = s;
  }
  return longest;
}

// 10) Подсчитать количество свойств в объекте (for...in)
function countProps(obj) {
  if (obj == null || typeof obj !== 'object') return 0;
  let count = 0;
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) count++;
  }
  return count;
}

// 11) Вывести числа от 1 до N (while)
function printTo(n) {
  n = Math.floor(n);
  let i = 1;
  while (i <= n) {
    console.log(i);
    i++;
  }
}

// 12) Найти число в массиве вручную (без includes)
// Возвращает индекс найденного элемента или undefined если не найден
function manualFindIndex(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) return i;
  }
  return undefined;
}

/* ====== Примеры / Тесты (можешь раскомментировать при запуске) ====== */

// console.log('swapArithmetic', swapArithmetic(3,5)); // [5,3]
// console.log('swapXor', swapXor(3,5)); // [5,3]
// console.log('isEven', isEven(4), isEven(3)); // true false
// console.log('sumTo', sumTo(5)); // 15
// console.log('reverseString', reverseString('hello')); // 'olleh'
// console.log('filterEven', filterEven([1,2,3,4,5,6])); // [2,4,6]
// console.log('c2f', celsiusToFahrenheit(0)); // 32
// console.log('f2c', fahrenheitToCelsius(32)); // 0
// console.log('isPalindrome', isPalindrome('Race car'), isPalindrome('Hello')); // true false
// console.log('sumArray', sumArray([1,2,3])); // 6
// console.log('longestWord', longestWord(['apple','banana','kiwi'])); // 'banana'
// console.log('countProps', countProps({a:1,b:2,c:3})); // 3
// printTo(5); // 1 2 3 4 5
// console.log('manualFindIndex', manualFindIndex([1,2,3], 2)); // 1

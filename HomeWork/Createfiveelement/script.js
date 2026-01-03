// 1. Создаём переменные разных типов
const myString = "Hello World";           // строка
const myNumber = 42;                      // число
const myBoolean = true;                   // булевая
const myArray = [1, 2, 3, "text"];         // массив
const myObject = { name: "Alex", age: 25 }; // объект

// 2. Сохраняем в localStorage
localStorage.setItem("myString", JSON.stringify(myString));
localStorage.setItem("myNumber", JSON.stringify(myNumber));
localStorage.setItem("myBoolean", JSON.stringify(myBoolean));
localStorage.setItem("myArray", JSON.stringify(myArray));
localStorage.setItem("myObject", JSON.stringify(myObject));

// 3. Получаем из localStorage без потери типов
const storedString = JSON.parse(localStorage.getItem("myString"));
const storedNumber = JSON.parse(localStorage.getItem("myNumber"));
const storedBoolean = JSON.parse(localStorage.getItem("myBoolean"));
const storedArray = JSON.parse(localStorage.getItem("myArray"));
const storedObject = JSON.parse(localStorage.getItem("myObject"));

// Проверка типов
console.log(storedString, typeof storedString);   // string
console.log(storedNumber, typeof storedNumber);   // number
console.log(storedBoolean, typeof storedBoolean); // boolean
console.log(storedArray, Array.isArray(storedArray)); // true
console.log(storedObject, typeof storedObject);   // object
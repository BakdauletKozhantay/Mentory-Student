// Создать 5 переменных разных типов
// 1) Строка
// 2) Число
// 3) Булевая
// 4) Массив
// 5) Объект

const str = "Hello";

localStorage.setItem("string", str);
const localStr = localStorage.getItem("string");
console.log(`Строка ${localStr}`);

const num = 25;

localStorage.setItem("number", num);
const localNumber = +localStorage.getItem("number");
console.log("Число", localNumber);

const bool = true;

localStorage.setItem("boolean", bool);
const localBool = localStorage.getItem("boolean") === "true";
console.log(localBool);

const arr = [23, 54, false, "dog"];

localStorage.setItem("array", JSON.stringify(arr));
const localArray = JSON.parse(localStorage.getItem("array"));
console.log(localArray);

const obj = {
  name: "John",
  age: 30,
  addres: {
    country: "Kazakhstan",
    city: "Almaty",
  },
};

localStorage.setItem("object", JSON.stringify(obj));
const localObj = JSON.parse(localStorage.getItem("object"));
console.log(localObj);


// console.log('Сегодня 8й урок');

// alert('Сегодня 8й урок!');
// confirm('Сегодня точно 8й урок?');
// prompt('Какой сегодня урок?');

// console.log(prompt('Какой сегодня урок?'));

// var variable1 = 'Сегодня урок про var'
// console.log(variable1);


// let variable2 = 'Сегодня урок про let'
// const variable3 = 'Сегодня урок про const'

// console.log(variable2);
// console.log(variable3);

// const num1 = 5;
// const num2 = 10;

// const sum = num1 + num2

// console.log(sum);

// const userMessage = prompt('Ваше сообщение');
// console.log(userMessage);

// const userAge = 23;

// ТИПЫ ДАННЫХ:

const str = 'Какая то строка'
const num = 2.2
const bool = true
const arr = [1, 2, 3, 4, 5]
// console.log(arr);

const arr2 = ['test1', 'test2']
const obj = {
  test: 'Строка из ключа test из объекта obj'
}
const empty = null
const empty2 = undefined

// console.log(Array.isArray(arr2));


const user = {
  firstname: 'Alex',
  lastname: 'Smith',
  age: 24,
  address: {
    country: 'Kazakhstan',
    city: 'Almaty'
  }
}
// console.log(user);
// console.log(user.address.country);


const user2 = {
  firstname: 'Alex 2',
  lastname: 'Smith 2',
  age: 26,
  address: null,
}

const users = [user, user2]

// console.log(users);
// console.log(users[1]);

const user3 = null;

// console.log(user2.address?.city);

// console.log('ФИНИШ');

// console.log(2 !== '2')

// console.log(!true);
// console.log(!!true);
// console.log(!'wdaaw');
// console.log(!!'wdaaw');
// console.log(Boolean('wdaaw'));

// const myStr = '5.83434'

// console.log(myStr);
// console.log(Number(myStr));
// console.log(+myStr);
// console.log(parseFloat(myStr));
// console.log(parseInt(myStr));


// const myStr2 = 'wda';
// console.log(isNaN(+myStr2));


// console.log(String(2));
// console.log("" + 2);
// console.log(`${2}`);


const condition = {
  firstname: 'Alex'
};

if (condition.firstname.length > 5) {
  console.log('Сработал if');
} else if (condition.firstname.length > 2) {
  console.log('Сработал 2й if');
} else {
  console.log('Сработало else');
}

console.log(condition.firstname[2]);

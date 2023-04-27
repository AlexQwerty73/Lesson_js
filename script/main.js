// let person = prompt("Хто ти?");

// if (person == "admin") {
//     console.log('admin');
// } else if (person == "user") {
//     console.log('user');
// }
// -----------------------------
// switch(person){
//     case "admin":
//         console.log('admin');
//         break;
//     case "user":
//         console.log('user');
//         break;
//     default:
//         console.log('?????');
//         break
// }
// ------------------------------
// const max = (a, b) => (a > b ? a : b);

// console.log( max(10, 8) );

// // -----------------
// const print = function(...args){
//     console.log(...args);
// }
// print(1212, "wdwdw", 232, "dty", "1s1s3x3c", 5657);

// ----------------------
// let Com_car = ["Audi", "Ford", "BMW", " Skoda", "Ferrari"];
// let Com_owner = ["Joe", "Martin", "Alex", "Max", "Hue"];

// const print = (id, car, owner) => {
//     return `${car[id]} ${owner[id]}`;
// }

// console.log(print(2, Com_car, Com_owner));
// console.log(print(1, Com_car, Com_owner));
// console.log(print(3, Com_car, Com_owner));
// console.log(print(0, Com_car, Com_owner));
// -------------------------

// const random_number = (min, max) => Math.round(Math.random() * (max - min) + min);
// console.log(random_number(5,6));

// ----------------------

// const people = [
//     { name: 'Alex', age: 23 },
//     { name: 'Dmytro', age: 34 },
//     { name: 'Rayan', age: 27 },
//     { name: 'Oleg', age: 13 },
// ];
// for (let user of people) {
//     console.log(user.name, user.age);
// }

// -----------------------

// const myName = prompt("Your name:");
// const getName = (name) => {
//     return name;
// }
// const btn = document.getElementById('btn');
// const result = document.getElementById('result');

// btn.addEventListener("click", () => {
//     result.innerText = getName(myName);
// });

// -----------------------


// const arr = [1, 4, 15, 6, 2, 7];

// const sum_arr = (array) => {
//     let sum = 0;
//     for (let num of array) {
//         sum += num;
//     }
//     return sum;
// }
// document.write(sum_arr(arr));

// ---------------------join

// const arr = ["qqwqe", "wrwr", "qwert"];
// const arr2 = arr.join(" - ");

// console.log(arr2);

// --------------filter

// const names = ['alex', 'beniii', 'vladi', 'den'];
// const nameFilter = names.filter(names => names.length > 5);
// console.log(nameFilter);

// ------------------reduce

// const arr = [1,2,3];
// const val= arr.reduce((prVal, curVal) => prVal + curVal);
// console.log(val); 
// 1+2+3 = 6

// ------------------map

// const arr = [1,2,3,4,5];
// const newArr = arr.map(num => num *2);
// console.log(newArr);
// 2,4,6,8,10

// ---------------


// const arr = [6, 2, 8, 5, 1, 3];
// const advNum = arr.reduce((prVal, curVal) => prVal + curVal) / arr.length;
// const newArr = arr.filter(num => num > advNum);
// console.log(newArr);

// ----------------split  sort/reverse  join

// const str = 'qwq1';

// const reverceStr = str.split('').reverse().join('');
// console.log(str, reverceStr, str == reverceStr ? true : false);

// const reverceStr2 = str.split('').sort(a => -1).join('');
// console.log(str, reverceStr2, str == reverceStr2 ? true : false);

// -------------------рекурсія

// const bigNum = (repNum, n) => repNum < 1 ? n : bigNum(repNum - 1, n * 2);
// console.log(bigNum(3, 2));

// ------------------------object

// const building = {
//     floor: 5,
//     color: 'white',
//     price: 1000,
//     apartament: 10,
//     resident: 10,
// } 
// const deleteItem = (obj, item) => delete obj[item];
// const addItem = (obj, item, value) =>   obj[item] = value;

// deleteItem(building, 'color');
// addItem(building, 'Item', 'item')

// console.log(building);

// ------------------------------------
// const MAX_PRICE = 100000;
// const MIN_PRICE = 0;

// const cars = [
//     { name: 'mazda', price: 4500, year: 2001, color: 'white' },
//     { name: 'audi', price: 2500, year: 2007, color: 'red' },
//     { name: 'volvo', price: 5000, year: 2010, color: 'black' },
//     { name: 'bmw', price: 1500, year: 2020, color: 'green' },
//     { name: 'toyota', price: 3000, year: 2021, color: 'yellow' },
// ];

// function priceRange(cars, min = MIN_PRICE, max = MAX_PRICE) {
//     return cars.filter(obj => min <= obj.price && obj.price <= max);
// }
// console.log(priceRange(cars, 2000, 3000));

// const users = [
//     { name: 'Alex', year: 2007, hobby: 'football', apartament: true, car: true },
//     { name: 'Vova', year: 2009, hobby: 'football', apartament: true, car: true },
//     { name: 'Nikita', year: 2005, hobby: 'football', apartament: true, car: true },
//     { name: 'Tomas', year: 2010, hobby: 'football', apartament: true, car: true },
//     { name: 'Stepan', year: 2004, hobby: 'football', apartament: true, car: true },
//     { name: 'Katerina', year: 2002, hobby: 'football', apartament: true, car: true },
// ];

// const ageOver18 = (user) => user.filter(obj => new Date().getFullYear() - obj.year >= 18);

// console.log(ageOver18(users));

const interval = prompt("За скільки секунд повтор?");

const arrTel = [];
const rand = (min, max) => Math.round(Math.random() * (max - min) + min);

const addTel = (arr) => {
    arr.push({
        name: `Iphone ${rand(1, 15)}`,
        id: rand(0, 10000),
        price: `${rand(500, 10000)}$`,
        date: new Date()
    });
    console.log(arr);
};

setInterval(() => addTel(arrTel), Number(interval) == interval ? interval * 1000 : 1000);


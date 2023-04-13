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

// ------------------------
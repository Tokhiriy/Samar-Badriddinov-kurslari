"use strict";

const arr = [1, 2, 3, 4];
// arr.unshift(0); // massiv boshiga qoshib beradi
// console.log(arr);

// arr.shift(); // massiv boshidan olib tashlaydi
//console.log(arr);

// ---------- massivga qoshish va olip tashash
//arr.pop(); // massiv ohirgi znacheniyasini olib tashlaydi
//arr.push(5); // massiv ohiridan qo'shib qo'yadi
// console.log(arr);

//--------Massivga iteratsiya qilish

//for (let i = 0; i < arr.length; i++) {
//console.log(`Hi${arr[i]}`);
//}

/* for (let val of arr) {
  console.log(val);
} */
/* [ 1, 2, 3, 4 ]
[ 1, 2, 3, 4 ]
[ 1, 2, 3, 4 ]
[ 1, 2, 3, 4 ] */

/* for (let val of arr){
  console.log(val);
} */

/*
1
2
3
4 */

/* const colors = ["red", "black", "crimson"];

colors.forEach(function (item, index, col) {
  console.log(item, col);
}); */
/* 
red 0
black 1
crimson 2 */

// ===================

const questions = prompt("", "");
const answers = questions.split(", ");
console.log(answers);

console.log(answers.join(" "));

// ======================

/* const number = [2, 10, 17, 24, 8];

number.sort(sortArr);
console.log(number); // [ 2, 8, 10, 17, 24 ]

function sortArr(a, b) {
  return a - b;
} */

// index =>   0  1  2  3
const arr2 = [1, 2, 3, 4];

// ----------------splice

//          indx nechta o'chishi     qo'shiluvchi elementlar
//arr2.splice( 2,        2,                       5,7,8         ); // 2 чи index yani 3dan boshlab 2ta
// el-t o'chirib o'rniga 5,7,8 ni joylaydi
//console.log(arr2); // [ 1, 2, 5, 7, 8 ]

//---------- delete

//delete arr2[2];
//console.log(arr2); // [ 1, 2, <1 empty item>, 4 ]

// ------------ reverse()

//arr2.reverse();
//console.log(arr2); //[ 4, 3, 2, 1 ]

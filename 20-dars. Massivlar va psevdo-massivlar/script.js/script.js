"use strict";

const arr = [1, 2, 3, 4];
// arr.unshift(0);
// console.log(arr);

arr.shift();
console.log(arr);

// ---------- massivga qoshish va olip tashash
//arr.pop(); // massiv ohirgi znacheniyasini olib tashlaydi
//arr.push(5); // massiv ohiridan qo'shib qo'yadi
// console.log(arr);

//--------Massivga iteratsiya qilish

//for (let i = 0; i < arr.length; i++) {
//console.log(`Hi${arr[i]}`);
//}

/* for (let val of arr){
  console.log(arr);
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

colors.forEach(function (item, index, colors) {
  console.log(item);
});
 */

// ===================

/* const questions = prompt("", "");
const answers = questions.split(", ");
console.log(answers); */

// const questions = prompt("", "");

// const answers = questions.split(", ");

// console.log(answers);

// console.log(answers.join("; "));

// ======================

const number = [2, 10, 17, 24, 8];

number.sort(sortArr);
console.log(number);

function sortArr(a, b) {
  return a - b;
}

"use strict";

let number = 8; // global o'zgaruvchi

function getText(a) {
  console.log(a); // Hello world
  let number = 10; // local o'zgaruvchi va u faqat shu funtsiya ichida ishlaydi
  console.log(number); // 10
} // getText() funktsiyasi xosil qilindi

getText("Hello world"); // getText() funktsiyasi chaqirildi
console.log(number); // 8

function calc(a, b) {
  return a + b;
}

console.log(calc(5, 10)); // 15
console.log(calc(15, 110)); // 125
console.log(calc(51, 10)); // 61
console.log(calc(35, 10)); // 45

// function Declaration бу функция узи эълон килинган катордан юкорида чакирилса хам ишлайди

console.log(returnNumber());

function returnNumber() {
  let number = 15;
  return number; // returndan keyin boshqa komandalar ishlamaydi hatolik beradi
}

// Function Exression бу функция эса узи хосил килинган катордан куйида чакирилсагина ишлайди

const returnWord = function () {
  console.log("Hello world");
};

returnWord();

// array function - линейний функция - чизикли функция

const arrayFunction = (c, d) => c + d;
const plus = arrayFunction(10, 9);
console.log(plus);

const compareNumbers = (e, f) => {
  if (e > f) {
    console.log(e + " katta " + f);
  } else {
    console.log(e + " kichik " + f);
  }
};

const compare = compareNumbers(22 , 25);


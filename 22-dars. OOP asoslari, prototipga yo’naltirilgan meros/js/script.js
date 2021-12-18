"use strict";

const cars = {
  color: "White",
  isBuy: false,
  isArmor() {
    console.log("without armor");
  },
};

const bmw = {
  color: "red",
};

//bmw.__proto__ = cars; // eski ishlatilmaydigan usul

/* Object.setPrototypeOf(bmw, cars);
bmw.isArmor();
console.log(bmw); // { color: 'red' }
console.log(bmw.isBuy); // false
console.log(bmw.color); */

const nexia = Object.create(cars);
console.log(nexia); // {}
console.log(nexia.isArmor()); // without armor

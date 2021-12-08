"use strict";

/* const bmw = {
  color: "black",
  isBuy: false,
};

const mers = bmw;
mers.color = "white";
console.log(bmw); //{ color: 'white', isBuy: false }
console.log(mers); //{ color: 'white', isBuy: false }

/////    Obyektlardan kopirovka olish
// --------------1chi usul

function copyObj(obj) {
  let objCopy = {};
  for (let key in obj) {
    objCopy[key] = obj[key];
  }
  return objCopy;
}

const nexiaR3 = {
  color: "black",
  isBuy: false,
};

const spark = copyObj(nexiaR3);

console.log(nexiaR3); //{ color: 'black', isBuy: false }
console.log(spark); // { color: 'black', isBuy: false }

spark.color = "white";
spark.isBuy = true;
console.log(spark); //{ color: 'white', isBuy: true }

// --------------2chi usul

const nexia2 = {
  color: "red",
  isBuy: true,
};

const newCar = Object.assign({}, nexia2);
newCar.isBuy = false;
console.log(nexia2); //{ color: 'red', isBuy: true }
console.log(newCar); // { color: 'red', isBuy: false }

//---------------Bir obyectga boshqa bir obyectni qoshish

const cobalt = {
  color: "GK2",
  isBuy: true,
};

const dopOps = {
  shum: 100,
};

const dopCobalt = Object.assign(cobalt, dopOps);
console.log(dopCobalt);

// ---------------------Massivlarni kopirovka qilish

const arr = [1, 2, 3, 4];
const newArr = arr.slice();
console.log(arr); // [ 1, 2, 3, 4 ]
console.log(newArr); // [ 1, 2, 3, 4 ]

newArr[1] = 22;
console.log(newArr); // [ 1, 22, 3, 4 ]
 */

//-------------------------------Spread operatorlar (...) massivlarni birlashtirish

const cars = ["bmw", "mers", "audi"],
  plane = ["German", "uzbAirways", "Turkish"],
  technology = [...cars, ...plane, "matiz"];
console.log(technology); //[ 'bmw', 'mers', 'audi', 'German', 'uzbAirways', 'Turkish', 'matiz' ]

//-------------------------------Spread operatorlar (...) iga misol

function number(a, b, ...c){
  console.log(a, b, c);
}

number(1, 2, 4, 5, 6, 7);

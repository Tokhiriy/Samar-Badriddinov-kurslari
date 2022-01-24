// context this -  bu har doim nimadur narsaga ergashadi ya'ni yopishib oladi

"use strict";

// 1 -usul oddiy finktsiyalarda this = window , agarda "use strict" = undefined

/* function showThis(a, b) {
  console.log(this);
  function calc() {
    console.log(this);
    return a + b;
  }
  console.log(calc());
}

showThis(8, 10);
 */
// 2 usul context this objectlarda = object
/* 
const obj = {
  a: 8,
  b: 10,
  calc: function () {
    console.log(this.a + this.b); // this.a = obj.a   this.b = obj.b
  },
};

obj.calc(); */

// 3-usul Construktor va classlarda context this = yangi object copy
/* 
function Car(name, color) {
  this.name = name;
  this.color = color;
  this.hi = function () {
    console.log("Hi");
  };
}

const mers = new Car("Mers", "black");
console.log(mers);
mers.hi();
 */
// 4 usul

function hello(surname) {
  console.log(this);
  console.log(this.name + " " + surname);
}

const person = {
  name: "Toxirjon",
};

hello.call(person, "Teshayev");
hello.apply(person, ["Teshayev"]);

function calc(num) {
  return this * num;
}

const double = calc.bind(2);

console.log(double(3));
console.log(double(30));

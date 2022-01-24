"use strict";

function Car(name, color, airbag) {
  this.name = name;
  this.color = color;
  this.airbag = airbag;
  this.isBuy = false;
  this.speed = function () {
    console.log(`${this.name} has 100km/h`);
  };
}

Car.prototype.town = function () {
  console.log("New York");
};

const merc = new Car("Merc", "black", true);
const bmw = new Car("BMW", "red", false);

merc.speed();
bmw.speed();

merc.town();
bmw.town();

console.log(merc);
console.log(bmw);
console.log(merc.isBuy);
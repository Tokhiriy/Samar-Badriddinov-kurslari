"use strict";
class Car {
  constructor(name, color, startSpeed, maxSpeed) {
    this.name = name;
    this.color = color;
    this.startSpeed = startSpeed;
    this.maxSpeed = maxSpeed;
  }
  globalSpeedCar() {
    return this.maxSpeed + this.startSpeed;
  }
}

// child class yasash
class Truck extends Car {
  constructor(name, color, startSpeed, maxSpeed, weight) {
    super(name, color, startSpeed, maxSpeed); // Car clasidagi o'zgaruvchilarni qayta yozmaslik uchun
    this.weight = weight;
  }
  showMyProps() {
    console.log("Weight " + this.weight);
  }
}

const man = new Truck("MAN", "Black", 50, 150, 40);
console.log(man);
man.showMyProps();
console.log(man.globalSpeedCar());

/* const bmw = new Car("BMW", "red", 100, 300);
const mers = new Car("MERS", "Black", 80, 250);

console.log(bmw.globalSpeedCar());
console.log(mers.globalSpeedCar());
 */

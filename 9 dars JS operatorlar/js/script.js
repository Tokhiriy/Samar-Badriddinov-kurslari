" use strict";

console.log(5 + 5);
console.log(5 - 5);
console.log(5 / 5);
console.log(5 * 5);

const x = 10,
  y = 5;
console.log(x + y);

console.log("Hello" + " " + "World"); // Hello World

console.log(4 + "radio"); // 4radio

const num = 4 + "radio";
console.log(typeof num); // string

// Increment va decrement

let incr = 99,
  decr = 99;

/* console.log(++incr); //100
console.log(--decr); //98 */

console.log(incr++); // 99
console.log(decr--); // 99
console.log(incr); // 100
console.log(decr); // 98

//  % колдикни топиш

console.log(5 % 2); // 1

const q = 15,
  m = 7;
console.log(q % m); //1

// Тенглаш равно  1, == факат заначенияни тенглаб куради. 2, === хам значенияни хам data type ни тенглаб куради

console.log(2 * 3 == "6"); // true факат значенияни тенглаб true чикаряпти
console.log(2 * 3 === "6"); // false сабаби у хам значенияни хам data typeни тенглаб курди. Data tyepe afhrkfyzgnb

// 1. && (i оператори) 2 киймат хам true булса true кайтади аксинча булса False
// 2. || (или оператор) 2 кийматдан кайси бири булса хам true булса true аксинча булса false

const isCheked = true,
  isClose = false;
console.log(isCheked && isClose); // false 2кийматдан 1таси false шунга
console.log(isCheked || isClose); // true 2 кийматдан 1таси true
console.log(isCheked && (isClose || !isCheked)); // fakse кайтади

"use strict";

/* const number = 8; // data-type = number
console.log(4 / 0); // data-type = Infinity
console.log(-4 / 0); // data-type = -Infinity

console.log("samar"*10); // data-type = NaN

const firstName = "Samar"; // data-type = string
const bool = true; // data-type = boolean
const isMarried = true; */

//console.log(a);                   // data-type = null

/* let lastName;
console.log(lastName); // data-type = undefined */

// objects

const person = {
  firstName: "Toxirjon",
  LastName: "Teshayev",
  age: 19,
  job: "Full-Stack JS developer",
  isMarriyed: false,
};

console.log(person); /* Consolega butun obyect chiqadi
{
  firstName: 'Toxirjon',
  LastName: 'Teshayev',
  age: 19,
  job: 'Full-Stack JS developer',
  isMarriyed: false
} */

console.log(person.age); /* console га age ключини 19 деган значеняси яъни
19 чикади
 */

// Massive [] массив ичига исталганча number string boolean object va array ва бошкалар массив значенияларига
// автоматик ключ яъни index берилади ва у 0 дан бошланади

//             0       1        2
const arr = ["red", "black", "yellow"];
console.log(arr); // console га [ 'red', 'black', 'yellow' ]
console.log(arr[0]); // console га 0 чи ключда турган red значенияси чикади чикади
console.log(arr[3]); // console га undefined чикади сабаби аррайга 3чи index тартиб буйича 4 чи значения киритилмаган

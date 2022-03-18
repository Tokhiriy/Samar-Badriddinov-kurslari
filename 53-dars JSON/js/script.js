"use strict";

const car = {
  name: "mers",
  color: "black",
  extra: {
    isBought: false,
    isAirbag: true,
  },
};

//console.log(JSON.stringify(car));
/* JSON\js\script.js"
{"name":"mers","color":"black"} */

/* const json = JSON.stringify(car); // JSON formatga o'tkazish
console.log(json);
console.log(JSON.parse(json)); // JSONdan qaytarish obyectga */

const clone = JSON.parse(JSON.stringify(car));
clone.extra.isBought = true;

console.log(car);
console.log(clone);

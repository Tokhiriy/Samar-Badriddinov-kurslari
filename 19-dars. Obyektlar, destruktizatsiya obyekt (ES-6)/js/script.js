"use strict";

const person = {
  name: "Toxirjon",
  lastName: "Teshayev",
  age: 34,
  wishes: [],
  language: function lang() {
    console.log("uzbek, English, Russion");
    lang();
  },
  mother: {
    name: "Marxabohon",
    age: 64,
  },
};

console.log(person);

const obj = {
  name: "div",
  width: 400,
  height: 400,
  colors: {
    border: "crimson",
    bg: "coral",
  },
};

//console.log(obj);
//delete obj.name;
//console.log(obj);

// obyectlarda iteratsiya qilishnu organamiz

let counter = 0;
for (let key in obj) {
  if (typeof obj[key] == "object") {
    for (let i in obj[key]) {
      console.log(` ${key} : ${obj[key][i]}`);
      //counter++;
    }
  } else {
    console.log(` ${key} : ${obj[key]}`);
    //counter++;
  }
}
// console.log(counter); juda qiyin usul

console.log(Object.keys(obj).length);

// newMetohod yaratishni o'rganamiz

const newMetohod = {
  makeExample: function () {
    console.log("Your first method");
  },
};

newMetohod.makeExample();

// destruktizatsiyani o'rganamiz

const options = {
  colors: {
    bg: "crimson",
    border: "coral",
  },
};

const { bg, border } = options.colors;
console.log(bg, ",", border);

console.log(options);

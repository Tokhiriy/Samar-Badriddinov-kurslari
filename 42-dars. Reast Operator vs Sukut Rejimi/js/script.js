"use strict";

// rest operatori
function mySkills(lang, cms, ...rest) {
  console.log(lang, cms, rest);
  rest.forEach((item, i) => {
    console.log(`Extra skills ${i + 1} => ${item}`);
  });
}
mySkills("JS", "WordPress", "Python", "PHP", "Drupal");

// default value

/*function calc(a = 1, b = 2) {
  // funcsiya chaqirilganda a va b ga qiymat berilmasa funksiya
  // a =1 va b = 2 deb qabul qiladi, agar berilsa shu qiymatni qabul qiladi
  console.log(a + b);
}

calc(15); */

const root = document.querySelector(".root");

/* function div(...classes) {
  const elem = document.querySelector("div");
  classes.forEach((classItem) => {
    elem.classList.add(classItem);
  });
  root.append(elem);
} */

function div(...classes) {
  //const elem = document.querySelector("div");
  classes.forEach((classItem) => {
    root.classList.add(classItem);
  });
  //root.append(elem);
}
div("width", "height", "bg");

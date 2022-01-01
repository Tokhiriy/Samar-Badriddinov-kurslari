"use strict";

const wrapper = document.querySelector(".wrapper");
const btn = wrapper.querySelector('[data-cuurentBtn="1"]');
const a = document.querySelector(".a");

/* btn.addEventListener(
  "click",
  () => {
    console.log("Hi");
  },
  { once: true } // 3chi optsiya
);
 */

//console.log(document.body);
//console.log(document.documentElement); // consolega HTML elementlari chiqadi
//console.log(document.childNodes);
//console.log(document.lastNode);
//console.log(document.body.childNodes);
//console.log(document.body.firstChild);
//console.log(document.body.lastChild);
//console.log(document.body.firstElementChild);
//console.log(document.body.lastElementChild);
//console.log(a.parentNode);
//console.log(a.parentElement);
//console.log(btn.nextSibling);
//console.log(btn.nextElementSibling);

/* for (let i of document.body.childNodes) {
  if (i.nodeName == "#text") {
    continue;
  }
  console.log(i);
}
 */

const btns = document.querySelectorAll("button");
btns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    console.log("Hii " + (index + 1));
  });
});

console.log(btns);

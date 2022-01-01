"use strict";
const test1 = document.querySelector(".test");
test1.style.background = "red";
test1.style.display = "inline-block";

const btn = document.querySelector(".btn"),
  a = document.querySelector(".a"),
  link = document.querySelector("a"),
  div = document.querySelector(".div");
div.addEventListener("click", (e) => {
  console.log(e.currentTarget);
});

const input = document.querySelector(" form input");
input.addEventListener("input", (ev) => {
  console.log(ev.target.value);
});

/* btn.addEventListener("click", () => {
  console.log("Hello world");
}); */

let index = 0;
const callFunc = () => {
  console.log("Hello World");
  index++;
  console.log(index);

  if (index == 2) {
    btn.removeEventListener("click", callFunc);
    a.removeEventListener("click", callFunc);
  }
};

btn.addEventListener("click", callFunc);
a.classList.add("btn");
a.addEventListener("click", callFunc);
a.addEventListener("dblclick", (event) => {
  console.log(event.target);
});

link.addEventListener("click", (e) => {
  e.preventDefault();
  alert("Hi");
  console.log(e.target);
});

/* 
a.addEventListener("click", (event) => {
  console.log(event);
}); */

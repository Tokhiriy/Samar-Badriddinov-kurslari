"use strict";

const btn = document.querySelector(".crimson");
const box = document.querySelector(".box");
box.style.backgroundColor = "yellow";

function btnAnimation() {
  let pos = 0;

  const id = setInterval(animationFrame, 1000);
  function animationFrame() {
    if (pos === 300) {
      clearInterval(id);
      console.log("tugadi");
    } else {
      pos++;
      box.style.left = pos + "px";
      console.log("boshlandi");
    }
  }
}

btn.addEventListener("click", btnAnimation);

/* const timer = setTimeout(() => {
  console.log("Hello world");
}, 2000); */

/* const timer = setTimeout((text) => {
  console.log(text);  
}, 2000, "Hello world");
 */

/* function logger(){
  console.log("Hello world");
}

const timer = setTimeout(logger, 2000);

clearInterval(timer); */

/* btn.addEventListener("click", () => {
  const timer = setTimeout(() => {
    console.log("Hello world");
  }, 2000);
});
 */
/* 
let timerId,
  i = 0;

btn.addEventListener("click", () => {
  timerId = setInterval(() => {
    if (i === 3) {
      clearInterval(timerId);
    }
    console.log("Hello world");
    i++;
    console.log(i);
  }, 1000);
}); */
/* 
let id = setTimeout(function log() {
  console.log("Hello world");
  i++;
  id = setTimeout(log, 1000);
}, 1000); */

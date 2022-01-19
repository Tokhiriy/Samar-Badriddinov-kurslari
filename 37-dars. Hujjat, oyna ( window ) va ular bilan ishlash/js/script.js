"use strict";
const box = document.querySelector(".box"),
  btn = document.querySelector("button");

/* btn.addEventListener("click", () => {
  box.style.height = box.scrollHeight + "px";
}); */

/* btn.addEventListener("click", () => {
  if (box.style.height == box.scrollHeight + "px") {
    box.style.height = 300 + "px";
  } else {
    box.style.height = box.scrollHeight + "px";
  }
}); */

btn.addEventListener("click", () => { 
  console.log(box.scrollTop);
  if (box.scrollTop > 20) {
    console.log(` Siz ${box.scrollTop}px mutola qildingiz va yakunga qadar
     ${box.scrollHeight - box.scrollTop}px mutola qilishingiz kerak`);
  }
});

//const width = box.clientWidth;//401
//const height = box.clientHeight;//301

//const width = box.offsetWidth; // 420
//const height = box.offsetHeight; //320

//const width = box.scrollWidth; // 401
//const height = box.scrollHeight; // 2588

//console.log(width, height);

//console.log(box.getBoundingClientRect());
//console.log(box.getBoundingClientRect().top);

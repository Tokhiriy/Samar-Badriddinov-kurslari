"use strict";

const btns = document.querySelectorAll("button"),
  wrapper = document.querySelector(".wrapper");

wrapper.addEventListener("click", (event) => {
  //console.dir(event.target);

  if (event.target && event.target.tagName == "BUTTON") {
    console.log("Click");
  }
});

const btn = document.createElement("button");
btn.classList.add("blue");
wrapper.append(btn);

wrapper.addEventListener("click", (event) => {
  if (event.target && event.target.classList.contains("crimson")) {
    console.log("crimson");
  } else if (event.target && event.target.classList.contains("blue")) {
    console.log("blue");
  } else {
    console.log("Button you choice is without classes you want");
  }
});

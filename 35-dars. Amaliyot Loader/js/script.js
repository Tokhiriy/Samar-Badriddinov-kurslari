"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const load = document.querySelector(".loader");

  setTimeout(() => {
    load.style.opacity = "0";
    setTimeout(() => {
      load.style.display = "none";
    }, 2000);
  }, 3500);

  /* setTimeout(function () {
    load.style.opacity = "0";
    setTimeout(function () {
      load.style.display = "none";
    }, 2000);
  }, 3500);
}); */
  /* 
document.addEventListener("DOMContentLoaded", () => {
  const loader = document.querySelector(".loader");
  setTimeout(function () {
    loader.style.opacity = "0";
    setTimeout(function () {
      loader.style.display = "none";
    }, 2000);
  }, 3500);*/
});

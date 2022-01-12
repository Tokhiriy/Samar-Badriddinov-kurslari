"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const load = document.querySelector(".loader");

  setTimeout(function () {
    load.styele.opacity = "0";
    setTimeout(function () {
      load.styele.display = "none";
    }, 500);
  }, 1500);
});

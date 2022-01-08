"use strict";

const p = document.querySelectorAll("p");

console.log(p);

// Dinamik script ulash

/* const script = document.createElement("script");
script.src = "js/test1.js";
document.body.append(script); */

function script(src) {
  const script = document.createElement("script");

  script.src = src;
  script.async = false;
  document.body.append(script);
}

script("js/test1.js");
script("js/test2.js");

"use strict";
// htmldan greeting deb nomlangan idnbor h2 ni chaqirib olish

// eski usul

const greeting = document.getElementById("greeting");
//console.log(greeting);//<h2 id="greeting">Hello World</h2>

greeting.style.color = "red";
console.log(greeting); //<h2 id="greeting" style="color: red;">Hello World</h2>

greeting.style.background = "black";
greeting.style.display = "inline-block";
greeting.style.padding = "10px";

greeting.style.cssText = " font-size : 30px; color : green; ";

greeting.classList.add("cssh2");

console.log(greeting);

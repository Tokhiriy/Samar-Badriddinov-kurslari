"use strict";

const parentDiv = document.querySelector(".parent"),
  circle = document.querySelectorAll(".circle");

const div = document.createElement("div");
div.classList.add("circle");
div.style.background = "black";

//parentDiv.append(div); // parentDiv ohiriga content qo'shadi
//parentDiv.prepend(div); // parentDiv boshiga content qo'shadi

//circle[0].after(div); // circle massividagi 0 chi index dan keyin contentni qo'shadi
//circle[0].before(div); // circle massividagi 0 chi index dan avval contentni qo'shadi

circle[1].remove();
console.log(div);

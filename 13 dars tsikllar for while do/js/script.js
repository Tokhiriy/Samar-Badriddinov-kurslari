" use strict";
let x = 0;

// the first method    while
/* while (x < 10) {
  console.log(x);
  x++;
} */

// the second method  do-while

/* do{
  console.log(x);
  x++;
} while(x <= 10); */

// the third method  for

for (let i = 0; i <= 10; i++) {
  if (i == 5) {
    //break; //consolega 0 1 2 3 4 chiqadi sababi i== 5 булганда код тухтаб console ишламаяпти
    continue; // bunda consolega 0 dan 10 gacha chiqadi faqat orada 5ni tashlab ketadi
  }
  console.log(i);
}

const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

let text = "";
for (let i = 0; i < cars.length; i++) {
  text += cars[i] + "<br>";
}

document.getElementById("demo").innerHTML = text;

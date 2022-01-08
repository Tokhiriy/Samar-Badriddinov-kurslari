"use strict";

const btns = document.querySelectorAll("button");

//console.log(btns[0].classList.length);//btns massivining 1chi elementida nechta clas borligini ko'rsatib beradi
//console.log(btns[0].classList.item(0)); //btns massivining 1chi elementining o indexdagi clas nomi
//btns[1].classList.add("blue"); // btns massivining 2chi elementiga blue clasini qoshmoqda
//btns[1].classList.remove("blue")// btns massivining 2chi elementidan blue clasini olib tashlaydi
//btns[0].classList.toggle("a"); // toogle ko'rsatilgan clas yoq bo'lsa qoshadi bor bolsa olib tashlaydi

btns[0].addEventListener("click", () => {
  /* if (!btns[1].classList.contains("blue")) {
    btns[1].classList.add("blue");
  } else {
    btns[1].classList.remove("blue");
  } */

  btns[1].classList.toggle("blue"); // toggle yuqoridagi if else ishini bajarib beradi
});

"use strict";

const startDate = new Date();
console.log(startDate);

for (let i = 0; i < 100000; i++) {
  let a = i ** 3;
  console.log(a);
}

const endDate = new Date();
console.log(endDate);

alert(`Tsikl ${endDate - startDate} millisecond ishladi`);

//console.log(data);
//console.log(data.getFullYear());//2022
//console.log(data.getHours());
//console.log(data.getMinutes());
//console.log(data.getSeconds());//41
//console.log(data.getMilliseconds());//879
//console.log(data.getDay());//5
//console.log(data.getDate()); //13
//console.log(data.getUTCHours()); // ЧАСОВОЙ ПОЯС
//console.log(data.getTimezoneOffset()); //ЧАСОВОЙ ПОЯСДАН ФАРКИ -300 МИНУТ ФАРК
//console.log(data.getTime()); 1970-2022 ОРАСИДАГИ ФАРК МИЛЛИСЕКОНДЛАРДА

//console.log(data.setHours(11));
//console.log(data);

" use strict";

const numberOfNews = +prompt("Siz qancha yangilik ko'rdingiz");

const personalNewsDB = {
  count: numberOfNews,
  news: {},
  actors: {},
  genres: [],
  privat: false,
};

for (let i = 0; i < 2; i++) {
  const a = prompt("Ohirgi ko'rgan yangiliklaringizdan biri");
  const b = prompt("Unga qancha baho bergan bo'kardingiz?");

  if (a != null && b != null && a != "" && b != "" && a.length < 50) {
    personalNewsDB.news[a] = b; // news: {}, obyectining ключига a ни значениясига b ни беради.
    console.log("Tayyor");
  } else {
    console.log("Error");
    i--; // savol yana takrorlanadi
  }
}

if (personalNewsDB.count < 10) {
  console.log("Juda oz sonli yangilik o'qilipti");
} else if (personalNewsDB.count >= 10 && personalNewsDB.count < 30) {
  console.log("Siz classic tomoshabinsiz");
} else if (personalNewsDB.count >= 30) {
  console.log("Siz yangiliklar ishqibozisiz");
} else {
  console.log("Hatolik yuz berdi");
}

console.log(personalNewsDB);



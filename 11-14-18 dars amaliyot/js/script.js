" use strict";

let numberOfNews;

function startProject() {
  numberOfNews = +prompt("Siz qancha yangilik ko'rdingiz");

  while (numberOfNews == "" || numberOfNews == null || isNaN(numberOfNews)) {
    numberOfNews = +prompt("Siz qancha yangilik ko'rdingiz");
  }
}

startProject();

const personalNewsDB = {
  count: numberOfNews,
  news: {},
  actors: {},
  genres: [],
  privat: false,
};

function rememberNews() {
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
}

rememberNews();

function showPersonalLevel() {
  if (personalNewsDB.count < 10) {
    console.log("Juda oz sonli yangilik o'qilipti");
  } else if (personalNewsDB.count >= 10 && personalNewsDB.count < 30) {
    console.log("Siz classic tomoshabinsiz");
  } else if (personalNewsDB.count >= 30) {
    console.log("Siz yangiliklar ishqibozisiz");
  } else {
    console.log("Hatolik yuz berdi");
  }
}

showPersonalLevel();

function showMyDB(hidden) {
  if (!hidden) {
    // hiiden argumenti false bo'lsa
    console.log(personalNewsDB);
  }
}
showMyDB(personalNewsDB.privat);

function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    personalNewsDB.genres[i - 1] = prompt(
      `Sizning sevimli janringiz nomeri ${i}`
    );
  }
}
writeYourGenres();

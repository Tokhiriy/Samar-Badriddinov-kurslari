" use strict";

const numberOfNews = +prompt("Siz qancha yangilik ko'rdingiz");

const personalNewsDB = {
  count: numberOfNews,
  news: {},
  actors: {},
  genres: [],
  privat: false,
};

const a = prompt("Ohirgi ko'rgan yangiliklaringizdan biri");
const b = prompt("Unga qancha baho bergan bo'kardingiz?");

personalNewsDB.news[a] = b; // news: {}, obyectining ключига a ни значениясига b ни беради.
console.log(personalNewsDB);

const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((book) => book.id === id);
}

const book = getBook(1);

// *************** //
// Деструктуризация. Создать ф-ю extractBookInfo, которая принимает на вход объект книги и возвращает
// объект который содержат информацию о книге (title, author, publicationDate). Вывести в консоль

// Tyt должен быть объкет
// console.log(extractBookInfo(book));

// *************** //

// Rest and Spread операторы.
// написать функцию, combineArgs() которая принимает любое количество аргументов и возвращает массив, содержащий эти аргументы, с помощью оператора rest.
//  Затем напишите еще одну функцию spreadArgs(), которая принимает массив, распределяет его элементы по отдельным аргументам и возвращает результат в виде массива

// *************** //
//Шаблонные строки
//Дописать  функцию которая должна вернуть шаблонную строку, который генерирует предложение типа `Книга  "Название" "автора" была опубликована в "дату публикации" `.
function bookInfo(title, author, publicationDate) {
  return ``;
}

// *************** //
// Тернарное выражение.
//написать  функцию movieAdaptationInfo, которая принимает объект книги в качестве параметра и возвращает строку «Имеет экранизацию», если hasMovieAdaptation верно и
//«Нет киноадаптации», если неверно, используя тернарное выражение.

// *************** //
// Filter method и операторы &&
// Написать функцию filterBooksByRating() которая принимает массив книг и возвращает новый массив, содержащий только книги, которые имеют рейтинг goodreads более 4.5
// и имеют экранизацию hasMovieAdaptation true.

// *************** //
// Filter method и операторы ||
// Написать filterBooksByPages() которая принимает в качестве параметра массив книг и возвращает новый массив, содержащий только книги, которые имеют более 600 стр.
// или имеют экранизацию hasMovieAdaptation true.

// *************** //
// Необязатеольное связывание
// Написать функцию getSpanishTranslation() которая принимает объект книги и возвращает испанский перевод  книги, если он существует,
// или возвращает «Перевод недоступен», если перевод отсутствует, используя необязательное связывание "?".

// *************** //
// Метод Map
// напишите функцию extractTitles() которая принимает массив объектов книги и использует map метод для создания нового массива,
//содержащего только названия книг.

// *************** //
// Method reduce
//  написать  функцию, calculateTotalPages()  которая принимает массив книг и возвращает сумму количество страниц во всех книгах
// использованием reduce метод.

// *************** //
// Сортировка sort метод. Задача со *
// написать функцию sortBooksByPublicationDate()  которая принимает массив книг и возвращает новый!!! отсортированный массив.
// по дате публикации в порядке возрастания.
// Подсказка: для вычисление разницы дат использовать new Date.
// Подсказка: для возврата нового массива используйте метод slice или spread оператор.

// *************** //
// Работа с неизменяемыми массивами
// создать новый объект книги с уникальным id, title , author.
// создать функцию addNewBook() котрая в параметры принимает массив книг первым параметром, и новосозданную книгу вторым параметром
// и возвращает новый массив книг с новой книгой

// *************** //

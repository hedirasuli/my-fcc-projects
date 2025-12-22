const books = [
  {
    title: "lord of the rings",
    authorName: "tolkin",
    releaseYear: 1954 
  },
  {
    title: "The Hobbit",
    authorName: "J.R.R. Tolkien",
    releaseYear: 1937
  },
  {
    title: "1984",
    authorName: "George Orwell",
    releaseYear: 1949
  }
];

function sortByYear(bookA, bookB) {
    if (bookA.releaseYear < bookB.releaseYear)
         { return-1; }
    if (bookA.releaseYear > bookB.releaseYear)
         {return 1};
         return 0;
}

const filteredBooks = books.filter(

    (book) => book.releaseYear <=1950
);

filteredBooks.sort(sortByYear);

console.log(filteredBooks);

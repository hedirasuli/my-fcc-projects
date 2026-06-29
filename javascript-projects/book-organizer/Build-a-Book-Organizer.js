/**
 * Array of book objects containing title, author name, and release year.
 */
const books = [
  {
    title: "lord of the rings",
    authorName: "Tolkien",
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


/**
 * sortByYear - Comparison function for sorting books by release year.
 * 
 * @param {Object} bookA - First book object to compare.
 * @param {Object} bookB - Second book object to compare.
 * @returns {number} - Returns -1 if bookA is earlier, 1 if bookB is earlier, 0 if equal.
 * 
 * This function is used as a callback for Array.sort() to sort books chronologically.
 */

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
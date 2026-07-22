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
  // If bookA was released before bookB, return -1 (bookA comes first)
    if (bookA.releaseYear < bookB.releaseYear)
         { return-1; }
    // If bookA was released after bookB, return 1 (bookB comes first)
    if (bookA.releaseYear > bookB.releaseYear)
         {return 1};
    // If both books have the same release year, return 0 (keep original order)
         return 0;
}

/**
 * Filter books to include only those released on or before 1950.
 * This creates a new array containing only books from 1950 or earlier.
 */
const filteredBooks = books.filter(

    (book) => book.releaseYear <=1950
);

filteredBooks.sort(sortByYear);

console.log(filteredBooks);
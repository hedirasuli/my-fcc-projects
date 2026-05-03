/**
 * @param {string} str - The string to be truncated.
 * @param {number} num - The maximum length of the truncated string.
 * @return {string} - The truncated string with "..." appended if it exceeds the specified length.
 */

function truncateString(str, num) {
  if (str.length <= num) {
    return str;
  } 
  const truncated = str.slice(0, num);
  return truncated + '...';
  }

  console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8)); // "A-tisket..."
  console.log(truncateString("Peter Piper picked a peck of pickled peppers", 11)); // "Peter Piper..."
  console.log(truncateString("A-", 40)); // "A..."
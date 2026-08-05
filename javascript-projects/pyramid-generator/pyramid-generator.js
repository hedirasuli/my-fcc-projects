function pyramid(pattern, rows, isUpsideDown) {
  // Initialize an empty string to build the pyramid
  let result = "";
  
  // Add a newline at the start for spacing
  result += "\n";
  // Loop through each row of the pyramid
  for (let i = 1; i <= rows; i++) {
    // Determine the current row number (normal or upside down)
    let currentRow = isUpsideDown ? (rows - i + 1) : i;
    // Calculate the number of pattern characters needed (odd numbers: 1, 3, 5, 7...)
    let patternCount = (2 * currentRow) - 1;
    // Calculate the number of spaces needed for centering
    let spaceCount = rows - currentRow;
    // Build the line: spaces followed by the pattern repeated
    let line = " ".repeat(spaceCount) + 
               pattern.repeat(patternCount);

    // Add the completed line to the result with a newline
    result += line + "\n";
  }
  // Return the complete pyramid string
  return result;
}
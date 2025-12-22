function pyramid(pattern, rows, isUpsideDown) {
  let result = "";
  
 
  result += "\n";
  
  for (let i = 1; i <= rows; i++) {
    
    let currentRow = isUpsideDown ? (rows - i + 1) : i;
    
    let patternCount = (2 * currentRow) - 1;
    let spaceCount = rows - currentRow;
    
    let line = " ".repeat(spaceCount) + 
               pattern.repeat(patternCount);

    
    result += line + "\n";
  }
  
  return result;
}
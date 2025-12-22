function fearNotLetter(str) {
  
  let expectedCode = str.charCodeAt(0);

 
  for (let i = 0; i < str.length; i++) {
    const actualCode = str.charCodeAt(i);

   
    if (actualCode !== expectedCode) {
    
      return String.fromCharCode(expectedCode);
    }

   
    expectedCode++;
  }

 
  return undefined;
}
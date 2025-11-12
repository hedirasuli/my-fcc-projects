/**

 * @param {number} num 
 * @returns {number} 
 */
function sumFibs(num) {
   
    let previousNum = 0;
    let currentNum = 1; 
    let oddSum = 0;      

   
    while (currentNum <= num) {
       

        if (currentNum % 2 !== 0) {
            oddSum += currentNum; 
        }

        
        const nextNum = previousNum + currentNum;
        
      
        previousNum = currentNum;
        
        
        currentNum = nextNum;
    }

    return oddSum;
     }
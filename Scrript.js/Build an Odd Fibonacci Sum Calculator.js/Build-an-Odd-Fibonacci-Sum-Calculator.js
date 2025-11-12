/**

 * @param {number} num - عدد صحیح مثبتی که به عنوان حد بالایی در نظر گرفته می‌شود.
 * @returns {number} مجموع اعداد فرد فیبوناچی در محدوده.
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
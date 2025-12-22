function largestOfAll(arr) {
     const largestNumbers = [];

   
    for (let i = 0; i < arr.length; i++) {
  
          const subArray = arr[i];

        
        let largestNumInSub = subArray[0];

      
     
        for (let j = 1; j < subArray.length; j++) {

         
            if (subArray[j] > largestNumInSub) {
                largestNumInSub = subArray[j];
            }
        }
       
        largestNumbers.push(largestNumInSub);
    }
   
    return largestNumbers;
}
/**
 * @param {number} 
 * @returns {boolean} 
 */

function isPrime(i) {
  
  if (i < 2) {
    return false;
  }

  
  for (let j = 2; j <= Math.sqrt(i); j++) {
   
    if (i % j === 0) {
      return false;
    }
  }

 
  return true;
}

/**
 * @param {number}
 * @returns {number}
 */

function sumPrimes(num) {
  
  if (num < 2) {
    return 0;
  }

  let totalSum = 0;

  
  for (let i = 2; i <= num; i++) {
    
    if (isPrime(i)) {
    
      totalSum += i;
    }
  }

  return totalSum;
}


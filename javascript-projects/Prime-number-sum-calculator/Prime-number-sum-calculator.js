/**
 * Checks if a number is prime
 * @param {number} num - The number to check (integer ≥ 0)
 * @returns {boolean} True if prime, false otherwise
 */
function isPrime(i) {
  // Numbers less than 2 are not prime (0 and 1)
  if (i < 2) {
    return false;
  }

  // Only check up to the square root of the number (optimization)
  // If a divisor is found, the number is not prime
  for (let j = 2; j <= Math.sqrt(i); j++) {
    
    // If i is divisible by j, it's not prime
    if (i % j === 0) {
      return false;
    }
  }

  // If no divisors were found, the number is prime
  return true;
}

/**
 * Calculates the sum of all prime numbers less than or equal to a given number
 * @param {number} num - The upper limit (inclusive)
 * @returns {number} - The sum of all prime numbers up to the given number
 */
function sumPrimes(num) {
  // If the input is less than 2, there are no prime numbers
  if (num < 2) {
    return 0;
  }
  // Variable to store the sum of prime numbers
  let totalSum = 0;

  // Loop from 2 up to the given number
  for (let i = 2; i <= num; i++) {
    // Check if i is prime
    if (isPrime(i)) {
      // If prime, add it to the total sum
      totalSum += i;
    }
  }
  // Return the final sum
  return totalSum;
}
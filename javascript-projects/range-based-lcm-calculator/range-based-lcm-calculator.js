/**
 * Calculates the Greatest Common Divisor (GCD) using the Euclidean algorithm
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} - The GCD of a and b
 */
function gcd(a, b) {
  // Base case: if b is 0, the GCD is a
  if (b === 0) {
    return a;
  }
  // Recursive case: GCD of b and the remainder of a divided by b
  return gcd(b, a % b);
}

/**
 * Calculates the Least Common Multiple (LCM) of two numbers
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} - The LCM of a and b
 */
function lcm(a, b) {
  // LCM formula: |a * b| / GCD(a, b)
  return Math.abs(a * b) / gcd(a, b);
}


/**
 * Finds the smallest common multiple of all numbers in a given range
 * @param {number[]} arr - Array containing two numbers defining the range [min, max]
 * @returns {number} - The smallest common multiple of all numbers in the range
 */
function smallestCommons(arr) {
  // Sort the array and extract the minimum and maximum values
  const [min, max] = arr.sort((a, b) => a - b);
  // Generate an array containing all numbers from min to max (inclusive)
  const range = [];
  for (let i = min; i <= max; i++) {
    range.push(i);
  }
  // Start with the first number in the range
  let finalLCM = range[0];
  // Iterate through the rest of the range and compute LCM cumulatively
  for (let i = 1; i < range.length; i++) {
    finalLCM = lcm(finalLCM, range[i]);
  }
  // Return the smallest common multiple
  return finalLCM;
}
// Step 1 - 7: Square function and its calls
function square(num: number) {
  return num * num;
}

const result = square(5);
console.log(result);

// Step 8 - 13: Average function with explicit number array parameter and number return type
function getAverage(numbers: number[]): number {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum / numbers.length;
}

const avgResult = getAverage([2, 14, 26, 8]);
console.log(avgResult);

// Step 14 - 19: Power function with optional exponent parameter and logic check
function raiseTo(base: number, exponent?: number): number {
  if (exponent !== undefined) {
    return base ** exponent;
  }
  return base ** 2;
}

const raisedResult = raiseTo(3);
console.log(raisedResult);
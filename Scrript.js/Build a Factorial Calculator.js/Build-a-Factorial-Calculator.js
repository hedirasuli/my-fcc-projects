const num = 5;

/**
 * Calculates the factorial of a given positive integer.
 * @param {number} inputNumber - The number to calculate the factorial for (1-20).
 * @returns {number} The factorial result.
 */

function factorialCalculator(inputNumber) {

    let result = 1;
    for (let i = 1; i <= inputNumber; i++ ) {
        result = result * i;
    }
 return result;
}
const factorial = factorialCalculator(num);
const resultMsg = `Factorial of ${num} is ${factorial}`;
console.log(resultMsg);
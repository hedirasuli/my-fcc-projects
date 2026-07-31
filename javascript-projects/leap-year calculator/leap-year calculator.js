/**
 * Check if a year is a leap year.
 * Leap year rules:
 * - Divisible by 400 → leap year
 * - Divisible by 100 → not a leap year
 * - Divisible by 4 → leap year
 * - Otherwise → not a leap year
 * @param {number} year - The year to check
 * @returns {string} - Message indicating if it's a leap year or not
 */
let year = 2024;
function isLeapYear(year) {
    if (year % 400 === 0) {
        return `${year} is a leap year.`;
    } else if (year % 100 === 0) {
        return `${year} is not a leap year.`;
    } else if (year % 4 === 0) {
        return `${year} is a leap year.`;
    } else {
        return `${year} is not a leap year.`;
    }
 }
 // Test the function
 const result = isLeapYear(year);
 console.log(result);
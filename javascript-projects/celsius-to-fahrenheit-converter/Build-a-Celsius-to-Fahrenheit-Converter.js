/**
 * Convert Celsius to Fahrenheit
 * 
 * @param {Number} celsius - The temperature in Celsius to convert
 * @returns {Number} Fahrenheit - The converted temperature in Fahrenheit
 * 
 * Formula: (°C × 9/5) + 32 = °F
 */
function convertCtoF(celsius) {
  // Apply the conversion formula: multiply by 9/5 and add 32
  let fahrenheit = (celsius * 9/5) + 32;
  // Return the calculated Fahrenheit value
  return fahrenheit;
}
// Test the conversion function with 0°C
let testCelsius = 0;
let testFahrenheit = convertCtoF(testCelsius);
// Log the test result: "0 32" (0°C = 32°F)
console.log(`${testCelsius} ${testFahrenheit}`);
// 0 32
console.log(`30 ${convertCtoF(30)}`);
// 30 86
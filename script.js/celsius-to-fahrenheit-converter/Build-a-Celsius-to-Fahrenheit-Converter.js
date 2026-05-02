 /** 
 * @param {Number} celsius
*  @returns {Number} Fahrenheit
*/
function convertCtoF(celsius) {
  let fahrenheit = (celsius * 9/5) + 32;
  return fahrenheit;
}
let testCelsius = 0;
let testFahrenheit = convertCtoF(testCelsius);

console.log(`${testCelsius} ${testFahrenheit}`);
// 0 32
console.log(`30 ${convertCtoF(30)}`);
// 30 86
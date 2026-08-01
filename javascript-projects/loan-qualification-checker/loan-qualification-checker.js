// Minimum requirements for each loan type
const minIncomeForDuplex = 60000;
const minCreditScoreForDuplex = 700;

const minIncomeForCondo = 45000;
const minCreditScoreForCondo = 680;

const minIncomeForCar = 30000;
const minCreditScoreForCar = 650;

/**
 * Determine which loans a person qualifies for based on income and credit score.
 * @param {number} annualIncome - Annual income in dollars
 * @param {number} creditScore - Credit score (300-850)
 * @returns {string} - Loan qualification message
 */
function getLoanMessage(annualIncome, creditScore) {
  // Check for duplex eligibility (highest requirement)
  if(creditScore >= minCreditScoreForDuplex && annualIncome >= minIncomeForDuplex) {
    return "You qualify for a duplex, condo, and car loan."
    // Check for condo eligibility (middle requirement)
  } else if (annualIncome >= minIncomeForCondo && creditScore >= minCreditScoreForCondo) {
    return "You qualify for a condo and car loan."
    // Check for car eligibility (lowest requirement)
  } else if (annualIncome >= minIncomeForCar && creditScore >= minCreditScoreForCar) {
    return "You qualify for a car loan."
  } else {
    // No loans qualified
    return "You don't qualify for any loans."
  }
}
// Test cases
const duplexLoanMsg = getLoanMessage(85000, 850);
const condoLoanMsg = getLoanMessage(65000, 690);
const carLoanMsg = getLoanMessage(45000, 660);
const noLoanMsg = getLoanMessage(25000, 550);
// Output results
console.log(duplexLoanMsg);
console.log(condoLoanMsg);
console.log(carLoanMsg);
console.log(noLoanMsg);
/**
 * Card Counting Function for Blackjack
 * 
 * @param {number|string} card - The card value (2-10, J, Q, K, A)
 * @returns {string} - Returns the current count and a suggestion: "Bet" or "Hold"
 * 
 * This function implements a simple card counting strategy:
 * - Low cards (2-6): +1 to the count
 * - High cards (10, J, Q, K, A): -1 to the count
 * - Neutral cards (7-9): no change
 * - Positive count suggests betting, non-positive suggests holding
 */

// Initialize the running count to 0
let count = 0;
function cc(card) {
  // Evaluate the card using a switch statement
  switch(card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
        count = count + 1;
        break;

  // High cards: 10, J, Q, K, A decrease the count by 1
    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
        count = count - 1;
        break;
  }
  // Default action: hold the bet
  let holdbet = 'Hold';
  // If the count is positive, it's favorable to bet
  if (count > 0) {
    holdbet = 'Bet';
  }
  // Return the current count and the betting suggestion
    return count + ' ' + holdbet;
    }
/**
 * Emoji Reactor - Interactive emotion rating buttons
 * 
 * This script allows users to click on emoji buttons to rate their emotions.
 * Each button has a counter that increases from 0 to 10 with each click.
 */

// Step 1: Select all emoji buttons using a class selector
// querySelectorAll returns a NodeList of all elements with class "emoji-btn"
const btns = document.querySelectorAll(".emoji-btn"); 

/**
 * updateCount - Increments the counter for a given button
 * 
 * This function finds the count element inside the button,
 * extracts the current count, increments it by 1 (if less than 10),
 * and updates the display.
 * 
 * @param {HTMLElement} button - The emoji button element to update
 * 
 * Example:
 *   Before: "5/10"
 *   After:  "6/10"
 */

function updateCount(button) {
  const countEl = button.querySelector(".count"); 
  const currentText = countEl.textContent; 
  const parts = currentText.split('/'); 
  let currCount = Number(parts[0]); 

  if (currCount < 10) {
    currCount += 1; 
    countEl.textContent = `${currCount}/10`; 
  }
}


btns.forEach(btn => {
 
  btn.addEventListener("click", () => {
  
    updateCount(btn); 
  });
});
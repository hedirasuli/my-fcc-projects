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
  // Find the count span inside the button
  // .count is the span that displays the rating (e.g., "0/10")
  const countEl = button.querySelector(".count"); 

  // Get the current text content (e.g., "3/10")
  const currentText = countEl.textContent; 

  // Split the string by '/' to separate count and max value
  // Example: "3/10" -> ["3", "10"]
  const parts = currentText.split('/'); 

  // Convert the first part (count) to a number
  // Using Number() for explicit conversion
  let currCount = Number(parts[0]); 

  // Check if the current count has not reached the maximum (10)
  if (currCount < 10) {
    // Increment the count by 1
    currCount += 1; 
    // Update the display with the new count
    // Template literal creates string like "4/10"
    countEl.textContent = `${currCount}/10`; 
  }
}

// Step 2: Add click event listeners to all buttons
// Iterate through each button using forEach
btns.forEach(btn => {
  // Add a click event listener to each button
  // When clicked, it calls the updateCount function with the button as argument
  btn.addEventListener("click", () => {
    // Pass the current button to updateCount
    // The arrow function ensures 'this' refers to the button
    updateCount(btn); 
  });
});